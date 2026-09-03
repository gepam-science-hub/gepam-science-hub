document.addEventListener(
    "DOMContentLoaded",
    function () {
        initializeSearch();
    }
);

let allSearchResults = [];
let currentFilter = "all";

function initializeSearch() {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    if (!searchForm || !searchInput) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const query = (params.get("q") || "").trim();
    if (query) {
        searchInput.value = query;
        performSearch(query);
    } else {
        showInitialState();
    }

    searchForm.addEventListener(
        "submit",
        function (event) {
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
        }
    );

    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(
        function (button) {
            button.addEventListener(
                "click",
                function () {
                    filterButtons.forEach(
                        function (btn) {
                            btn.classList.remove("active");
                        }
                    );
                    button.classList.add("active");
                    currentFilter = button.dataset.filter;
                    renderResults();
                }
            );
        }
    );
}

function normalizeText(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}
function performSearch(query) {
    const cleanQuery = normalizeText(query);
    if (!cleanQuery) {
        showInitialState();
        return;
    }

    const tokens = cleanQuery.split(/\s+/).filter(Boolean);
    const index = buildSearchIndex();

    const wantsNotes = cleanQuery.includes("note") || cleanQuery.includes("topic") || cleanQuery.includes("practical");
    const wantsPapers = cleanQuery.includes("paper") || cleanQuery.includes("past") || cleanQuery.includes("exam") || cleanQuery.includes("mock") || cleanQuery.includes("necta");

    allSearchResults = index
        .map(
            function (item) {
                const searchable = normalizeText(item.searchText);
                const titleClean = normalizeText(item.title);
                let score = 0;
                let isPriority = false;

                if (titleClean.includes(cleanQuery)) {
                    score += 60;
                    isPriority = true;
                } else if (searchable.includes(cleanQuery)) {
                    score += 30;
                    isPriority = true;
                }

                let matchedTokens = 0;
                tokens.forEach(
                    function (token) {
                        if (searchable.includes(token)) {
                            score += 5;
                            matchedTokens++;
                        }
                        if (titleClean.includes(token)) {
                            score += 15;
                        }
                    }
                );

                if (matchedTokens === tokens.length && tokens.length > 1) {
                    isPriority = true;
                    score += 25;
                }

                if (wantsNotes && item.type === "papers") {
                    score = 0;
                }
                if (wantsPapers && (item.type === "notes" || item.type === "topics")) {
                    score = 0;
                }

                return {
                    ...item,
                    score: score,
                    isPriority: isPriority
                };
            }
        )
        .filter(
            function (item) {
                return item.score > 0;
            }
        )
        .sort(
            function (a, b) {
                return b.score - a.score;
            }
        );

    document.getElementById("searchTitle").textContent = `Search results for "${query}"`;
    renderResults();
}

function buildSearchIndex() {
    const index = [];

    if (typeof notesData !== "undefined" && notesData && typeof notesData === "object") {
        Object.keys(notesData).forEach(
            function (key) {
                const group = notesData[key];
                if (!group) return;
                if (group.full) {
                    const full = group.full;
                    index.push({
                        uniqueKey: `full-${full.id}`,
                        type: "notes",
                        typeLabel: "Notes",
                        title: full.title || "Full Notes",
                        description: full.description || "",
                        price: full.price,
                        form: extractFormFromKey(key),
                        subject: extractSubjectFromKey(key),
                        syllabus: extractSyllabusFromKey(key),
                        actionUrl: buildNotesUrl(key),
                        searchText: [full.title, full.description, key, extractFormFromKey(key), extractSubjectFromKey(key), extractSyllabusFromKey(key), "notes", "full notes", "physics", "chemistry"].join(" ")
                    });
                }
                if (Array.isArray(group.topics)) {
                    group.topics.forEach(
                        function (topic) {
                            if (!topic) return;
                            index.push({
                                uniqueKey: `topic-${topic.id}`,
                                type: "topics",
                                typeLabel: "Topic",
                                title: topic.title || "Topic",
                                description: topic.description || "",
                                price: topic.price,
                                form: extractFormFromKey(key),
                                subject: extractSubjectFromKey(key),
                                syllabus: extractSyllabusFromKey(key),
                                actionUrl: buildNotesUrl(key),
                                searchText: [topic.title, topic.description, key, extractFormFromKey(key), extractSubjectFromKey(key), extractSyllabusFromKey(key), "topic", "topics", "notes"].join(" ")
                            });
                        }
                    );
                }
            }
        );
    }

    if (typeof practicalNotes !== "undefined" && practicalNotes && typeof practicalNotes === "object") {
        Object.keys(practicalNotes).forEach(
            function (level) {
                const list = practicalNotes[level];
                if (!Array.isArray(list)) return;
                list.forEach(
                    function (item) {
                        if (!item) return;
                        const subject = extractSubjectFromKey(item.id || "");
                        index.push({
                            uniqueKey: `practical-${item.id}`,
                            type: "practical",
                            typeLabel: "Practical Notes",
                            title: item.title || "Practical Notes",
                            description: item.description || "",
                            price: item.price,
                            form: level === "olevel" ? "O-Level" : "A-Level",
                            subject: subject,
                            syllabus: "",
                            actionUrl: "notes.html",
                            searchText: [item.title, item.description, item.id, level, subject, "practical", "practical notes", "physics", "chemistry"].join(" ")
                        });
                    }
                );
            }
        );
    }

    const paperSource = getPastPaperSource();
    if (Array.isArray(paperSource)) {
        paperSource.forEach(
            function (paper, indexNumber) {
                if (!paper) return;
                index.push({
                    uniqueKey: `paper-${paper.id || indexNumber}`,
                    type: "papers",
                    typeLabel: "Past Paper",
                    title: paper.title || paper.name || "Past Paper",
                    description: paper.description || "",
                    price: null,
                    form: paper.form || "",
                    subject: paper.subject || "",
                    syllabus: "",
                    year: paper.year || "",
                    paperType: paper.type || "",
                    category: paper.category || "",
                    region: paper.region || "",
                    specialExam: paper.specialExam || "",
                    actionUrl: buildPaperUrl(paper),
                    searchText: [paper.title, paper.name, paper.description, paper.year, paper.form, paper.subject, paper.type, paper.category, paper.region, "past papers", "papers"].join(" ")
                });
            }
        );
    }
    return deduplicateResults(index);
}
function getPastPaperSource() {
    const possibleNames = ["pastPaperRecords", "pastPapers", "pastpapers", "pastPaperData"];
    for (let i = 0; i < possibleNames.length; i++) {
        if (typeof window[possibleNames[i]] !== "undefined" && Array.isArray(window[possibleNames[i]])) {
            return window[possibleNames[i]];
        }
    }
    return [];
}

function deduplicateResults(items) {
    const seen = new Set();
    const output = [];
    items.forEach(function (item) {
        const key = item.uniqueKey || `${item.type}-${item.title}`;
        if (seen.has(key)) return;
        seen.add(key);
        output.push(item);
    });
    return output;
}

function extractFormFromKey(key) {
    const match = String(key || "").match(/form([1-6])/i);
    return match ? `Form ${match[1]}` : "";
}

function extractSubjectFromKey(key) {
    const value = normalizeText(key);
    if (value.includes("physics")) return "Physics";
    if (value.includes("chemistry")) return "Chemistry";
    return "";
}

function extractSyllabusFromKey(key) {
    const value = normalizeText(key);
    if (value.includes("old")) return "Old Syllabus";
    if (value.includes("new")) return "New Syllabus";
    return "";
}

function buildNotesUrl(key) {
    const form = String(key || "").match(/form([1-6])/i);
    return form ? "notes.html?form=" + encodeURIComponent(`form${form[1]}`) : "notes.html";
}

function buildPaperUrl(paper) {
    return paper && paper.file ? paper.file : "pastpapers.html";
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

    const priorityItems = filtered.filter(item => item.isPriority);
    const relevantItems = filtered.filter(item => !item.isPriority);
    let htmlOutput = "";

    if (priorityItems.length > 0) {
        htmlOutput += `<div class="search-section-title">Best Matches (Priority)</div>`;
        htmlOutput += `<div class="priority-list">` + priorityItems.map(item => createResultCard(item, true)).join("") + `</div>`;
    }

    if (relevantItems.length > 0) {
        htmlOutput += `<div class="search-section-title" style="margin-top: 35px;">Other Relevant Resources</div>`;
        htmlOutput += `<div class="relevant-grid">` + relevantItems.map(item => createResultCard(item, false)).join("") + `</div>`;
    }

    container.innerHTML = htmlOutput;
}

function createResultCard(item, isPriority) {
    const title = escapeHtml(item.title);
    const description = escapeHtml(item.description);
    const typeLabel = escapeHtml(item.typeLabel);
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
    let actionText = item.type === "papers" ? "Open Paper" : "View Notes";

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

function showInitialState() {
    document.getElementById("searchTitle").textContent = "Search GEPAM resources";
    document.getElementById("searchCount").textContent = "Search Notes, Topics, Practical Notes and Past Papers.";
    document.getElementById("results").innerHTML = `<div class="empty-state"><h3>What are you looking for?</h3></div>`;
}

function escapeHtml(value) {
    return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
    return escapeHtml(value);
}
