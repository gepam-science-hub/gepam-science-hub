// ======================================================
// GEPAM SCIENCE HUB
// UNIFIED SEARCH ENGINE
// ======================================================
//
// Searches:
// 1. Premium Notes
// 2. Topics
// 3. Practical Notes
// 4. Past Papers
//
// IMPORTANT:
// - Does NOT modify payment system.
// - Does NOT modify pastpapers-data.js.
// - Uses existing data where available.
// ======================================================


document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeSearch();

    }
);


// ======================================================
// GLOBAL STATE
// ======================================================

let allSearchResults = [];

let currentFilter = "all";


// ======================================================
// INITIALIZE
// ======================================================

function initializeSearch() {

    const searchForm =
        document.getElementById("searchForm");

    const searchInput =
        document.getElementById("searchInput");

    if (!searchForm || !searchInput) {
        return;
    }


    // ------------------------------------------
    // GET QUERY FROM URL
    // ------------------------------------------

    const params =
        new URLSearchParams(
            window.location.search
        );

    const query =
        (params.get("q") || "").trim();


    if (query) {

        searchInput.value = query;

        performSearch(query);

    } else {

        showInitialState();

    }


    // ------------------------------------------
    // SEARCH FORM
    // ------------------------------------------

    searchForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const newQuery =
                searchInput.value.trim();

            const url =
                new URL(
                    window.location.href
                );

            if (newQuery) {

                url.searchParams.set(
                    "q",
                    newQuery
                );

            } else {

                url.searchParams.delete("q");

            }


            window.history.pushState(
                {},
                "",
                url
            );


            performSearch(newQuery);

        }
    );


    // ------------------------------------------
    // FILTER BUTTONS
    // ------------------------------------------

    const filterButtons =
        document.querySelectorAll(
            ".filter-btn"
        );


    filterButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    filterButtons.forEach(
                        function (btn) {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    currentFilter =
                        button.dataset.filter;


                    renderResults();

                }
            );

        }
    );

}


// ======================================================
// NORMALIZE TEXT
// ======================================================

function normalizeText(value) {

    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        );

}


// ======================================================
// SEARCH
// ======================================================

function performSearch(query) {

    const cleanQuery =
        normalizeText(query);


    if (!cleanQuery) {

        showInitialState();

        return;

    }


    const tokens =
        cleanQuery
            .split(/\s+/)
            .filter(Boolean);


    const index =
        buildSearchIndex();


    allSearchResults =
        index
            .map(
                function (item) {

                    const searchable =
                        normalizeText(
                            item.searchText
                        );


                    let score = 0;


                    // --------------------------------
                    // EXACT FULL QUERY
                    // --------------------------------

                    if (
                        searchable.includes(
                            cleanQuery
                        )
                    ) {

                        score += 20;

                    }


                    // --------------------------------
                    // EACH WORD
                    // --------------------------------

                    tokens.forEach(
                        function (token) {

                            if (
                                searchable.includes(
                                    token
                                )
                            ) {

                                score += 5;

                            }


                            // Title gets extra weight

                            if (
                                normalizeText(
                                    item.title
                                ).includes(token)
                            ) {

                                score += 10;

                            }

                        }
                    );


                    return {
                        ...item,
                        score: score
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


    document.getElementById(
        "searchTitle"
    ).textContent =
        `Search results for "${query}"`;


    renderResults();

}


// ======================================================
// BUILD SEARCH INDEX
// ======================================================

function buildSearchIndex() {

    const index = [];


    // ==================================================
    // NOTES DATA
    // ==================================================

    if (
        typeof notesData !== "undefined" &&
        notesData &&
        typeof notesData === "object"
    ) {

        Object.keys(notesData).forEach(
            function (key) {

                const group =
                    notesData[key];


                if (!group) {
                    return;
                }


                // --------------------------------------
                // FULL NOTES
                // --------------------------------------

                if (group.full) {

                    const full =
                        group.full;


                    index.push({

                        uniqueKey:
                            `full-${full.id}`,

                        type:
                            "notes",

                        typeLabel:
                            "Notes",

                        title:
                            full.title ||
                            "Full Notes",

                        description:
                            full.description ||
                            "",

                        price:
                            full.price,

                        form:
                            extractFormFromKey(key),

                        subject:
                            extractSubjectFromKey(key),

                        syllabus:
                            extractSyllabusFromKey(key),

                        actionUrl:
                            buildNotesUrl(
                                key
                            ),

                        searchText:
                            [
                                full.title,
                                full.description,
                                key,
                                extractFormFromKey(key),
                                extractSubjectFromKey(key),
                                extractSyllabusFromKey(key),
                                "notes",
                                "full notes",
                                "physics",
                                "chemistry"
                            ].join(" ")

                    });

                }


                // --------------------------------------
                // TOPICS
                // --------------------------------------

                if (
                    Array.isArray(
                        group.topics
                    )
                ) {

                    group.topics.forEach(
                        function (topic) {

                            if (!topic) {
                                return;
                            }


                            index.push({

                                uniqueKey:
                                    `topic-${topic.id}`,

                                type:
                                    "topics",

                                typeLabel:
                                    "Topic",

                                title:
                                    topic.title ||
                                    "Topic",

                                description:
                                    topic.description ||
                                    "",

                                price:
                                    topic.price,

                                form:
                                    extractFormFromKey(key),

                                subject:
                                    extractSubjectFromKey(key),

                                syllabus:
                                    extractSyllabusFromKey(key),

                                actionUrl:
                                    buildNotesUrl(
                                        key
                                    ),

                                searchText:
                                    [
                                        topic.title,
                                        topic.description,
                                        key,
                                        extractFormFromKey(key),
                                        extractSubjectFromKey(key),
                                        extractSyllabusFromKey(key),
                                        "topic",
                                        "topics",
                                        "notes"
                                    ].join(" ")

                            });

                        }
                    );

                }

            }
        );

    }


    // ==================================================
    // PRACTICAL NOTES
    // ==================================================

    if (
        typeof practicalNotes !== "undefined" &&
        practicalNotes &&
        typeof practicalNotes === "object"
    ) {

        Object.keys(practicalNotes)
            .forEach(
                function (level) {

                    const list =
                        practicalNotes[level];


                    if (
                        !Array.isArray(list)
                    ) {

                        return;

                    }


                    list.forEach(
                        function (item) {

                            if (!item) {
                                return;
                            }


                            const subject =
                                extractSubjectFromKey(
                                    item.id || ""
                                );


                            index.push({

                                uniqueKey:
                                    `practical-${item.id}`,

                                type:
                                    "practical",

                                typeLabel:
                                    "Practical Notes",

                                title:
                                    item.title ||
                                    "Practical Notes",

                                description:
                                    item.description ||
                                    "",

                                price:
                                    item.price,

                                form:
                                    level === "olevel"
                                        ? "O-Level"
                                        : "A-Level",

                                subject:
                                    subject,

                                syllabus:
                                    "",

                                actionUrl:
                                    "notes.html",

                                searchText:
                                    [
                                        item.title,
                                        item.description,
                                        item.id,
                                        level,
                                        subject,
                                        "practical",
                                        "practical notes",
                                        "physics",
                                        "chemistry"
                                    ].join(" ")

                            });

                        }
                    );

                }
            );

    }


    // ==================================================
    // PAST PAPERS
    // ==================================================

    const paperSource =
        getPastPaperSource();


    if (
        Array.isArray(
            paperSource
        )
    ) {

        paperSource.forEach(
            function (paper, indexNumber) {

                if (!paper) {
                    return;
                }


                const title =
                    paper.title ||
                    paper.name ||
                    "Past Paper";


                const description =
                    paper.description ||
                    "";


                const year =
                    paper.year ||
                    "";


                const form =
                    paper.form ||
                    "";


                const subject =
                    paper.subject ||
                    "";


                const type =
                    paper.type ||
                    "";


                const category =
                    paper.category ||
                    "";


                const region =
                    paper.region ||
                    "";


                const specialExam =
                    paper.specialExam ||
                    "";


                const file =
                    paper.file ||
                    "";


                index.push({

                    uniqueKey:
                        `paper-${paper.id || indexNumber}`,

                    type:
                        "papers",

                    typeLabel:
                        "Past Paper",

                    title:
                        title,

                    description:
                        description,

                    price:
                        null,

                    form:
                        form,

                    subject:
                        subject,

                    syllabus:
                        "",

                    year:
                        year,

                    paperType:
                        type,

                    category:
                        category,

                    region:
                        region,

                    specialExam:
                        specialExam,

                    file:
                        file,

                    actionUrl:
                        buildPaperUrl(
                            paper
                        ),

                    searchText:
                        [
                            title,
                            description,
                            year,
                            form,
                            subject,
                            type,
                            category,
                            region,
                            specialExam,
                            file,
                            "past papers",
                            "papers"
                        ].join(" ")

                });

            }
        );

    }


    return deduplicateResults(index);

}


// ======================================================
// GET PAST PAPER DATA
// ======================================================

function getPastPaperSource() {

    // --------------------------------------------------
    // Try common variable names without modifying
    // the existing pastpapers-data.js.
    // --------------------------------------------------

    const possibleNames = [

        "pastPaperRecords",

        "pastPapers",

        "pastpapers",

        "pastPaperData"

    ];


    for (
        let i = 0;
        i < possibleNames.length;
        i++
    ) {

        const name =
            possibleNames[i];


        try {

            if (
                typeof window[name] !== "undefined" &&
                Array.isArray(window[name])
            ) {

                return window[name];

            }

        } catch (error) {

            // Continue checking.

        }

    }


    return [];

}


// ======================================================
// DEDUPLICATE
// ======================================================

function deduplicateResults(items) {

    const seen =
        new Set();

    const output = [];


    items.forEach(
        function (item) {

            const key =
                item.uniqueKey ||
                `${item.type}-${item.title}`;


            if (
                seen.has(key)
            ) {

                return;

            }


            seen.add(key);

            output.push(item);

        }
    );


    return output;

}


// ======================================================
// FORM EXTRACTION
// ======================================================

function extractFormFromKey(key) {

    const match =
        String(key || "")
            .match(
                /form([1-6])/i
            );


    if (!match) {
        return "";
    }


    return `Form ${match[1]}`;

}


// ======================================================
// SUBJECT EXTRACTION
// ======================================================

function extractSubjectFromKey(key) {

    const value =
        normalizeText(
            key
        );


    if (
        value.includes("physics")
    ) {

        return "Physics";

    }


    if (
        value.includes("chemistry")
    ) {

        return "Chemistry";

    }


    return "";

}


// ======================================================
// SYLLABUS EXTRACTION
// ======================================================

function extractSyllabusFromKey(key) {

    const value =
        normalizeText(
            key
        );


    if (
        value.includes("old")
    ) {

        return "Old Syllabus";

    }


    if (
        value.includes("new")
    ) {

        return "New Syllabus";

    }


    return "";

}


// ======================================================
// NOTES URL
// ======================================================

function buildNotesUrl(key) {

    const form =
        String(key || "")
            .match(
                /form([1-6])/i
            );


    if (!form) {

        return "notes.html";

    }


    return (
        "notes.html?form=" +
        encodeURIComponent(
            `form${form[1]}`
        )
    );

}


// ======================================================
// PAST PAPER URL
// ======================================================

function buildPaperUrl(paper) {

    // --------------------------------------------------
    // IMPORTANT:
    // We do NOT guess internal Past Papers routes.
    //
    // The file itself is preserved and we use the
    // existing paper file when available.
    // --------------------------------------------------

    if (
        paper &&
        paper.file
    ) {

        return paper.file;

    }


    return "pastpapers.html";

}


// ======================================================
// RENDER RESULTS
// ======================================================

function renderResults() {

    const container =
        document.getElementById(
            "results"
        );


    if (!container) {
        return;
    }


    let filtered =
        allSearchResults;


    if (
        currentFilter !== "all"
    ) {

        filtered =
            allSearchResults.filter(
                function (item) {

                    return (
                        item.type ===
                        currentFilter
                    );

                }
            );

    }


    const count =
        filtered.length;


    document.getElementById(
        "searchCount"
    ).textContent =
        `${count} result${count === 1 ? "" : "s"} found.`;


    if (!count) {

        container.innerHTML = `

            <div class="empty-state">

                <h3>
                    No results found
                </h3>

                <p>
                    Try another keyword such as
                    <strong>Physics</strong>,
                    <strong>Chemistry</strong>,
                    <strong>Waves</strong>,
                    <strong>Form 4</strong>,
                    <strong>2026</strong>,
                    or <strong>Mock</strong>.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        filtered
            .map(
                function (item) {

                    return createResultCard(
                        item
                    );

                }
            )
            .join("");

}


// ======================================================
// RESULT CARD
// ======================================================

function createResultCard(item) {

    const title =
        escapeHtml(
            item.title
        );


    const description =
        escapeHtml(
            item.description
        );


    const typeLabel =
        escapeHtml(
            item.typeLabel
        );


    let meta = "";


    if (item.form) {

        meta += `
            <span class="meta-item">
                ${escapeHtml(item.form)}
            </span>
        `;

    }


    if (item.subject) {

        meta += `
            <span class="meta-item">
                ${escapeHtml(item.subject)}
            </span>
        `;

    }


    if (item.syllabus) {

        meta += `
            <span class="meta-item">
                ${escapeHtml(item.syllabus)}
            </span>
        `;

    }


    if (item.year) {

        meta += `
            <span class="meta-item">
                ${escapeHtml(item.year)}
            </span>
        `;

    }


    if (item.paperType) {

        meta += `
            <span class="meta-item">
                ${escapeHtml(item.paperType)}
            </span>
        `;

    }


    if (item.region) {

        meta += `
            <span class="meta-item">
                ${escapeHtml(item.region)}
            </span>
        `;

    }


    if (item.specialExam) {

        meta += `
            <span class="meta-item">
                ${escapeHtml(item.specialExam)}
            </span>
        `;

    }


    let priceHTML = "";


    if (
        item.price !== null &&
        item.price !== undefined &&
        item.price !== ""
    ) {

        priceHTML = `
            <div class="price">
                TZS ${Number(
                    item.price
                ).toLocaleString()}
            </div>
        `;

    }


    let actionText =
        "Open";


    if (
        item.type === "notes" ||
        item.type === "topics" ||
        item.type === "practical"
    ) {

        actionText =
            "View Notes";

    }


    if (
        item.type === "papers"
    ) {

        actionText =
            "Open Paper";

    }


    return `

        <article class="result-card">

            <span class="result-type">
                ${typeLabel}
            </span>

            <h3>
                ${title}
            </h3>

            ${
                description
                    ? `
                        <div class="result-description">
                            ${description}
                        </div>
                    `
                    : ""
            }

            ${
                meta
                    ? `
                        <div class="result-meta">
                            ${meta}
                        </div>
                    `
                    : ""
            }

            ${priceHTML}

            <a
                class="result-action"
                href="${escapeAttribute(
                    item.actionUrl
                )}"
            >
                ${actionText}
            </a>

        </article>

    `;

}


// ======================================================
// INITIAL STATE
// ======================================================

function showInitialState() {

    document.getElementById(
        "searchTitle"
    ).textContent =
        "Search GEPAM resources";


    document.getElementById(
        "searchCount"
    ).textContent =
        "Search Notes, Topics, Practical Notes and Past Papers.";


    document.getElementById(
        "results"
    ).innerHTML = `

        <div class="empty-state">

            <h3>
                What are you looking for?
            </h3>

            <p>
                Search for a subject, topic, form,
                year, exam type or keyword.
            </p>

        </div>

    `;

}


// ======================================================
// ESCAPE HTML
// ======================================================

function escapeHtml(value) {

    return String(value || "")
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


// ======================================================
// ESCAPE ATTRIBUTE
// ======================================================

function escapeAttribute(value) {

    return escapeHtml(
        value
    );

}
