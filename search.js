// ======================================================
// GEPAM SCIENCE HUB - JAVASCRIPT SEARCH ENGINE
// ======================================================
document.addEventListener("DOMContentLoaded", function () {
    initializeSearch();
});

let allSearchResults = [];
let currentFilter = "all";

function initializeSearch() {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    if (!searchForm || !searchInput) return;

    const params = new URLSearchParams(window.location.search);
    const query = (params.get("q") || "").trim();
    if (query) {
        searchInput.value = query;
        performSearch(query);
    } else {
        showInitialState();
    }

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const newQuery = searchInput.value.trim();
        const url = new URL(window.location.href);
        if (newQuery) {
            url.searchParams.set("q", newQuery);
        } else {
            url.searchParams.delete("q");
        }
        window.history.pushState({}, "", url);
        performSearch(newQuery);
    });

    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            currentFilter = button.dataset.filter;
            renderResults();
        });
    });
}

function normalizeText(value) {
    return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function performSearch(query) {
    const cleanQuery = normalizeText(query);
    if (!cleanQuery) {
        showInitialState();
        return;
    }

    const tokens = cleanQuery.split(/\s+/).filter(Boolean);
    const index = buildSearchIndex();

    // Utambuzi wa kiotomatiki wa nia ya mtafutaji
    const wantsNotes = cleanQuery.includes("note") || cleanQuery.includes("topic") || cleanQuery.includes("practical");
    const wantsPapers = cleanQuery.includes("paper") || cleanQuery.includes("past") || cleanQuery.includes("exam") || cleanQuery.includes("mock");

    allSearchResults = index.map(function (item) {
        const searchable = normalizeText(item.searchText);
        const titleClean = normalizeText(item.title);
        let score = 0;
        let isPriority = false;

        // 1. EXACT MATCH (Kipaumbele kikubwa zaidi)
        if (titleClean.includes(cleanQuery) || searchable.includes(cleanQuery)) {
            score += 50;
            isPriority = true;
        }

        // 2. TOKEN MATCH (Uzito kwa maneno yote mawili yakipatikana mfano "physics f2")
        let matchedTokens = 0;
        tokens.forEach(function (token) {
            if (searchable.includes(token)) score += 5;
            if (titleClean.includes(token)) score += 15;
        });

        // 3. AUTO-FILTER (Hakuna past papers wakati umesearch notes)
        if (wantsNotes && item.type === "papers") score = 0;
        if (wantsPapers && (item.type === "notes" || item.type === "topics")) score = 0;

        return { ...item, score: score, isPriority: isPriority };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

    document.getElementById("searchTitle").textContent = `Search results for "${query}"`;
    renderResults();
}
function renderResults() {
    const container = document.getElementById("results");
    if (!container) return;

    let filtered = allSearchResults;
    if (currentFilter !== "all") {
        filtered = allSearchResults.filter(item => item.type === currentFilter);
    }

    const count = filtered.length;
    document.getElementById("searchCount").textContent = `${count} result${count === 1 ? "" : "s"} found.`;

    if (!count) {
        container.innerHTML = `<div class="empty-state"><h3>No results found</h3></div>`;
        return;
    }

    // Tofautisha Kati ya Priority na Relevant
    const topScore = filtered[0].score;
    const priorityItems = filtered.filter(item => item.score === topScore || item.isPriority);
    const relevantItems = filtered.filter(item => !priorityItems.includes(item));

    let htmlOutput = "";

    // 1. Weka kwanza Priority List juu
    if (priorityItems.length > 0) {
        htmlOutput += `<div class="search-section-title">Best Matches (Priority)</div>`;
        htmlOutput += `<div class="priority-list">`;
        htmlOutput += priorityItems.map(item => createResultCard(item, true)).join("");
        htmlOutput += `</div>`;
    }

    // 2. Weka rasilimali nyingine zinazohusiana chini yake kama Grid
    if (relevantItems.length > 0) {
        htmlOutput += `<div class="search-section-title" style="margin-top: 40px;">Other Relevant Resources</div>`;
        htmlOutput += `<div class="relevant-grid">`;
        htmlOutput += relevantItems.map(item => createResultCard(item, false)).join("");
        htmlOutput += `</div>`;
    }

    container.innerHTML = htmlOutput;
}
function createResultCard(item, isPriority) {
    const title = escapeHtml(item.title);
    const description = escapeHtml(item.description);
    const typeLabel = escapeHtml(item.typeLabel);
    
    // Kuchagua class ya CSS kulingana na somo
    const subject = item.subject ? item.subject.toLowerCase() : "";
    let colorClass = "card-default";
    if (subject === "physics") colorClass = "card-physics";
    else if (subject === "chemistry") colorClass = "card-chemistry";
    else if (item.type === "practical") colorClass = "card-practical";

    let meta = "";
    if (item.form) meta += `<span class="meta-item">${escapeHtml(item.form)}</span>`;
    if (item.subject) meta += `<span class="meta-item">${escapeHtml(item.subject)}</span>`;
    if (item.year) meta += `<span class="meta-item">${escapeHtml(item.year)}</span>`;

    let priceHTML = item.price ? `<div class="price">TZS ${Number(item.price).toLocaleString()}</div>` : "";
    const actionText = item.type === "papers" ? "Open Paper" : "View Notes";

    return `
        <article class="result-card ${colorClass} ${isPriority ? 'priority-card' : ''}">
            <span class="result-type">${typeLabel}</span>
            <h3>${title}</h3>
            ${description ? `<div class="result-description">${description}</div>` : ""}
            ${meta ? `<div class="result-meta">${meta}</div>` : ""}
            ${priceHTML}
            <a class="result-action" href="${escapeAttribute(item.actionUrl)}">${actionText}</a>
        </article>
    `;
}

// (Weka hapa chini kazi zako zote zilizobaki za buildSearchIndex, extractForm, nk. zilizokuwepo mwanzo)
