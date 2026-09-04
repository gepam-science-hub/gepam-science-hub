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

    /*
     * =========================================================
     * SEARCH NOTES PURCHASE
     * =========================================================
     *
     * Hii ndiyo shortcut ya Search → Buy.
     *
     * Haitumii:
     * notes.html?form=form3
     *
     * Badala yake:
     * Search → NUNUA → Email → PesaPal
     *
     * Past Papers haziguswi.
     * =========================================================
     */

    document.addEventListener(
        "click",
        function (event) {
            const button =
                event.target.closest(
                    ".search-buy-note"
                );

            if (!button) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            const notesId =
                button.dataset.notesId || "";

            const title =
                button.dataset.title || "";

            const price =
                Number(button.dataset.price || 0);

            if (
                !notesId ||
                !title ||
                !price
            ) {
                alert(
                    "Taarifa za notes hazijakamilika. Tafadhali jaribu tena."
                );

                return;
            }

            purchaseNoteFromSearch(
                notesId,
                title,
                price
            );
        }
    );
}


/* =========================================================
   NORMALIZE TEXT
========================================================= */

function normalizeText(value) {
    let text = String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    text = text
        .replace(/\bf1\b/g, "form1")
        .replace(/\bf2\b/g, "form2")
        .replace(/\bf3\b/g, "form3")
        .replace(/\bf4\b/g, "form4")
        .replace(/\bf5\b/g, "form5")
        .replace(/\bf6\b/g, "form6");

    return text;
}


/* =========================================================
   PERFORM SEARCH
========================================================= */

function performSearch(query) {
    const cleanQuery = normalizeText(query);

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

                    const titleClean =
                        normalizeText(
                            item.title
                        );

                    let score = 0;
                    let isPriority = false;

                    if (
                        titleClean.includes(
                            cleanQuery
                        )
                    ) {
                        score += 50;
                        isPriority = true;
                    } else if (
                        searchable.includes(
                            cleanQuery
                        )
                    ) {
                        score += 20;
                    }

                    let matchedTokens = 0;

                    tokens.forEach(
                        function (token) {
                            if (
                                searchable.includes(
                                    token
                                )
                            ) {
                                score += 5;
                                matchedTokens++;
                            }

                            if (
                                titleClean.includes(
                                    token
                                )
                            ) {
                                score += 10;
                            }
                        }
                    );

                    if (
                        matchedTokens ===
                            tokens.length &&
                        tokens.length > 1
                    ) {
                        isPriority = true;
                        score += 15;
                    }

                    /*
                     * Notes query should not show Past Papers.
                     */
                    if (
                        wantsNotesQuery(cleanQuery) &&
                        item.type === "papers"
                    ) {
                        score = 0;
                    }

                    /*
                     * Past Paper query should not show Notes.
                     */
                    if (
                        wantsPapersQuery(cleanQuery) &&
                        (
                            item.type === "notes" ||
                            item.type === "topics" ||
                            item.type === "practical"
                        )
                    ) {
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

    const searchTitle =
        document.getElementById(
            "searchTitle"
        );

    if (searchTitle) {
        searchTitle.textContent =
            'Search results for "' +
            query +
            '"';
    }

    renderResults();
}


/* =========================================================
   SEARCH TYPE HELPERS
========================================================= */

function wantsNotesQuery(query) {
    return (
        query.includes("note") ||
        query.includes("topic") ||
        query.includes("practical")
    );
}

function wantsPapersQuery(query) {
    return (
        query.includes("paper") ||
        query.includes("past") ||
        query.includes("exam") ||
        query.includes("mock")
    );
}


/* =========================================================
   BUILD SEARCH INDEX
========================================================= */

function buildSearchIndex() {
    const index = [];

    /*
     * =========================================================
     * PREMIUM NOTES
     * =========================================================
     */

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

                /*
                 * -------------------------------------------------
                 * FULL NOTES
                 * -------------------------------------------------
                 */

                if (group.full) {
                    const full =
                        group.full;

                    index.push({
                        uniqueKey:
                            "full-" +
                            full.id,

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

                        /*
                         * MUHIMU:
                         * Hii ndiyo ID itakayotumwa
                         * moja kwa moja kwenye payment engine.
                         */
                        notesId:
                            full.id,

                        form:
                            extractFormFromKey(
                                key
                            ),

                        subject:
                            extractSubjectFromKey(
                                key
                            ),

                        syllabus:
                            extractSyllabusFromKey(
                                key
                            ),

                        /*
                         * Hakuna normal navigation
                         * kwa Search purchase.
                         */
                        actionUrl:
                            "",

                        searchText:
                            [
                                full.title,
                                full.description,
                                key,
                                extractFormFromKey(
                                    key
                                ),
                                extractSubjectFromKey(
                                    key
                                ),
                                extractSyllabusFromKey(
                                    key
                                ),
                                "notes",
                                "full notes",
                                "physics",
                                "chemistry"
                            ].join(" ")
                    });
                }


                /*
                 * -------------------------------------------------
                 * TOPICS
                 * -------------------------------------------------
                 */

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
                                    "topic-" +
                                    topic.id,

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

                                /*
                                 * MUHIMU:
                                 * Topic ID halisi.
                                 */
                                notesId:
                                    topic.id,

                                form:
                                    extractFormFromKey(
                                        key
                                    ),

                                subject:
                                    extractSubjectFromKey(
                                        key
                                    ),

                                syllabus:
                                    extractSyllabusFromKey(
                                        key
                                    ),

                                /*
                                 * Hakuna redirect
                                 * ya notes.html?form=...
                                 */
                                actionUrl:
                                    "",

                                searchText:
                                    [
                                        topic.title,
                                        topic.description,
                                        key,
                                        extractFormFromKey(
                                            key
                                        ),
                                        extractSubjectFromKey(
                                            key
                                        ),
                                        extractSyllabusFromKey(
                                            key
                                        ),
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


    /*
     * =========================================================
     * PRACTICAL NOTES
     * =========================================================
     */

    if (
        typeof practicalNotes !== "undefined" &&
        practicalNotes &&
        typeof practicalNotes === "object"
    ) {
        Object.keys(practicalNotes).forEach(
            function (level) {
                const list =
                    practicalNotes[level];

                if (!Array.isArray(list)) {
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
                                "practical-" +
                                item.id,

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

                            /*
                             * Practical Notes pia
                             * zitatumia payment engine
                             * moja kwa moja.
                             */
                            notesId:
                                item.id,

                            form:
                                level === "olevel"
                                    ? "O-Level"
                                    : "A-Level",

                            subject:
                                subject,

                            syllabus:
                                "",

                            actionUrl:
                                "",

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


    /*
     * =========================================================
     * PAST PAPERS
     * =========================================================
     *
     * HII SEHEMU HAIBADILISHWI KIMANTIKI.
     * =========================================================
     */

    const paperSource =
        getPastPaperSource();

    if (Array.isArray(paperSource)) {
        paperSource.forEach(
            function (
                paper,
                indexNumber
            ) {
                if (!paper) {
                    return;
                }

                index.push({
                    uniqueKey:
                        "paper-" +
                        (
                            paper.id ||
                            indexNumber
                        ),

                    type:
                        "papers",

                    typeLabel:
                        "Past Paper",

                    title:
                        paper.title ||
                        paper.name ||
                        "Past Paper",

                    description:
                        paper.description ||
                        "",

                    price:
                        null,

                    form:
                        paper.form ||
                        "",

                    subject:
                        paper.subject ||
                        "",

                    syllabus:
                        "",

                    year:
                        paper.year ||
                        "",

                    paperType:
                        paper.type ||
                        "",

                    category:
                        paper.category ||
                        "",

                    region:
                        paper.region ||
                        "",

                    specialExam:
                        paper.specialExam ||
                        "",

                    actionUrl:
                        buildPaperUrl(
                            paper
                        ),

                    searchText:
                        [
                            paper.title,
                            paper.name,
                            paper.description,
                            paper.year,
                            paper.form,
                            paper.subject,
                            paper.type,
                            paper.category,
                            paper.region,
                            "past papers",
                            "papers"
                        ].join(" ")
                });
            }
        );
    }

    return deduplicateResults(
        index
    );
}


/* =========================================================
   GET PAST PAPER SOURCE
========================================================= */

function getPastPaperSource() {
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
        if (
            typeof window[
                possibleNames[i]
            ] !== "undefined" &&
            Array.isArray(
                window[
                    possibleNames[i]
                ]
            )
        ) {
            return window[
                possibleNames[i]
            ];
        }
    }

    return [];
}


/* =========================================================
   DEDUPLICATE RESULTS
========================================================= */

function deduplicateResults(items) {
    const seen = new Set();
    const output = [];

    items.forEach(
        function (item) {
            const key =
                item.uniqueKey ||
                (
                    item.type +
                    "-" +
                    item.title
                );

            if (seen.has(key)) {
                return;
            }

            seen.add(key);
            output.push(item);
        }
    );

    return output;
}


/* =========================================================
   EXTRACT FORM
========================================================= */

function extractFormFromKey(key) {
    const match =
        String(key || "")
            .match(/form([1-6])/i);

    if (
        !match ||
        !match[1]
    ) {
        return "";
    }

    return "Form " + match[1];
}


/* =========================================================
   EXTRACT SUBJECT
========================================================= */

function extractSubjectFromKey(key) {
    const value =
        normalizeText(key);

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


/* =========================================================
   EXTRACT SYLLABUS
========================================================= */

function extractSyllabusFromKey(key) {
    const value =
        normalizeText(key);

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


/* =========================================================
   NORMAL NOTES URL
   =========================================================
   
   Hii function bado ipo kwa compatibility,
   lakini Search Notes purchase haitumii tena.
========================================================= */

function buildNotesUrl(key) {
    const match =
        String(key || "")
            .match(/form([1-6])/i);

    if (
        !match ||
        !match[1]
    ) {
        return "notes.html";
    }

    return (
        "notes.html?form=" +
        encodeURIComponent(
            "form" + match[1]
        )
    );
}


/* =========================================================
   BUILD PAPER URL
   ========================================================= */

function buildPaperUrl(paper) {
    return (
        paper &&
        paper.file
    )
        ? paper.file
        : "pastpapers.html";
}


/* =========================================================
   RENDER RESULTS
========================================================= */

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

    const searchCount =
        document.getElementById(
            "searchCount"
        );

    if (searchCount) {
        searchCount.textContent =
            count +
            " result" +
            (
                count === 1
                    ? ""
                    : "s"
            ) +
            " found.";
    }

    if (!count) {
        container.innerHTML =
            '<div class="empty-state">' +
            '<h3>No results found</h3>' +
            '<p>Try another keyword such as <strong>Physics</strong>, <strong>Chemistry</strong>, <strong>Waves</strong>, or <strong>Mock</strong>.</p>' +
            '</div>';

        return;
    }

    const priorityItems =
        filtered.filter(
            function (item) {
                return item.isPriority;
            }
        );

    const relevantItems =
        filtered.filter(
            function (item) {
                return !item.isPriority;
            }
        );

    let htmlOutput = "";

    if (
        priorityItems.length > 0
    ) {
        htmlOutput +=
            '<div class="search-section-title">Best Matches (Priority)</div>';

        htmlOutput +=
            '<div class="priority-list">' +
            priorityItems
                .map(
                    function (item) {
                        return createResultCard(
                            item,
                            true
                        );
                    }
                )
                .join("") +
            '</div>';
    }

    if (
        relevantItems.length > 0
    ) {
        htmlOutput +=
            '<div class="search-section-title">Other Relevant Resources</div>';

        htmlOutput +=
            '<div class="relevant-grid">' +
            relevantItems
                .map(
                    function (item) {
                        return createResultCard(
                            item,
                            false
                        );
                    }
                )
                .join("") +
            '</div>';
    }

    container.innerHTML =
        htmlOutput;
}


/* =========================================================
   CREATE RESULT CARD
========================================================= */

function createResultCard(
    item,
    isPriority
) {
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

    const subject =
        item.subject
            ? item.subject.toLowerCase()
            : "";

    let colorClass =
        "card-default";

    if (
        subject === "physics"
    ) {
        colorClass =
            "card-physics";
    } else if (
        subject === "chemistry"
    ) {
        colorClass =
            "card-chemistry";
    } else if (
        item.type === "practical"
    ) {
        colorClass =
            "card-practical";
    }


    /*
     * ---------------------------------------------------------
     * META INFORMATION
     * ---------------------------------------------------------
     */

    let meta = "";

    if (item.form) {
        meta +=
            '<span class="meta-item">' +
            escapeHtml(
                item.form
            ) +
            '</span>';
    }

    if (item.subject) {
        meta +=
            '<span class="meta-item">' +
            escapeHtml(
                item.subject
            ) +
            '</span>';
    }

    if (item.syllabus) {
        meta +=
            '<span class="meta-item">' +
            escapeHtml(
                item.syllabus
            ) +
            '</span>';
    }

    if (item.year) {
        meta +=
            '<span class="meta-item">' +
            escapeHtml(
                item.year
            ) +
            '</span>';
    }

    if (item.paperType) {
        meta +=
            '<span class="meta-item">' +
            escapeHtml(
                item.paperType
            ) +
            '</span>';
    }


    /*
     * ---------------------------------------------------------
     * PRICE
     * ---------------------------------------------------------
     */

    let priceHTML = "";

    if (
        item.price !== null &&
        item.price !== undefined &&
        item.price !== ""
    ) {
        priceHTML =
            '<div class="price">TZS ' +
            Number(
                item.price
            ).toLocaleString() +
            '</div>';
    }


    /*
     * ---------------------------------------------------------
     * ACTION
     * ---------------------------------------------------------
     *
     * NOTES:
     *     NUNUA
     *     → Email
     *     → PesaPal
     *
     * PAPERS:
     *     Open Paper
     *     → PDF
     *
     * ---------------------------------------------------------
     */

    let actionHTML = "";

    if (
        item.type === "notes" ||
        item.type === "topics" ||
        item.type === "practical"
    ) {
        actionHTML =
            '<button ' +
            'class="result-action search-buy-note" ' +
            'type="button" ' +
            'data-notes-id="' +
            escapeAttribute(
                item.notesId
            ) +
            '" ' +
            'data-title="' +
            escapeAttribute(
                item.title
            ) +
            '" ' +
            'data-price="' +
            escapeAttribute(
                item.price
            ) +
            '">' +
            'Nunua' +
            '</button>';
    } else {
        actionHTML =
            '<a ' +
            'class="result-action" ' +
            'href="' +
            escapeAttribute(
                item.actionUrl
            ) +
            '">' +
            'Open Paper' +
            '</a>';
    }


    /*
     * ---------------------------------------------------------
     * CARD
     * ---------------------------------------------------------
     */

    return (
        '<article class="result-card ' +
        colorClass +
        (
            isPriority
                ? " priority-card"
                : ""
        ) +
        '">' +

        '<span class="result-type">' +
        typeLabel +
        '</span>' +

        '<h3>' +
        title +
        '</h3>' +

        (
            description
                ? (
                    '<div class="result-description">' +
                    description +
                    '</div>'
                )
                : ""
        ) +

        (
            meta
                ? (
                    '<div class="result-meta">' +
                    meta +
                    '</div>'
                )
                : ""
        ) +

        priceHTML +

        actionHTML +

        '</article>'
    );
}


/* =========================================================
   SEARCH → DIRECT NOTES PURCHASE
========================================================= */

async function purchaseNoteFromSearch(
    notesId,
    title,
    price
) {
    /*
     * Kama notes.js tayari ipo,
     * tumia function iliyopo.
     */
    if (
        typeof window.anzishaUnunuziWaNotes ===
        "function"
    ) {
        window.anzishaUnunuziWaNotes(
            notesId,
            title,
            price
        );

        return;
    }


    /*
     * Kama notes.js haijapakiwa kwenye
     * search.html, i-load hapa.
     *
     * Hii inamaanisha search.html
     * haihitaji kubadilishwa.
     */

    try {
        await loadNotesPaymentEngine();

        if (
            typeof window.anzishaUnunuziWaNotes !==
            "function"
        ) {
            alert(
                "Payment system haijapakia vizuri. Tafadhali refresh page kisha ujaribu tena."
            );

            return;
        }

        window.anzishaUnunuziWaNotes(
            notesId,
            title,
            price
        );

    } catch (error) {
        console.error(
            "Failed to load notes.js:",
            error
        );

        alert(
            "Payment system haijapatikana kwa sasa. Tafadhali jaribu tena."
        );
    }
}


/* =========================================================
   LOAD NOTES.JS ONLY WHEN NEEDED
========================================================= */

function loadNotesPaymentEngine() {
    return new Promise(
        function (resolve, reject) {

            /*
             * Angalia kama tayari ime-load.
             */
            if (
                typeof window.anzishaUnunuziWaNotes ===
                "function"
            ) {
                resolve();
                return;
            }


            /*
             * Usipakie script mara mbili.
             */
            const existingScript =
                document.querySelector(
                    'script[data-gepam-notes-payment="true"]'
                );

            if (existingScript) {
                existingScript.addEventListener(
                    "load",
                    function () {
                        resolve();
                    },
                    {
                        once: true
                    }
                );

                existingScript.addEventListener(
                    "error",
                    function () {
                        reject(
                            new Error(
                                "notes.js failed to load."
                            )
                        );
                    },
                    {
                        once: true
                    }
                );

                return;
            }


            /*
             * Create script dynamically.
             */
            const script =
                document.createElement(
                    "script"
                );

            script.src =
                "notes.js";

            script.dataset.gepamNotesPayment =
                "true";

            script.onload =
                function () {
                    resolve();
                };

            script.onerror =
                function () {
                    reject(
                        new Error(
                            "Unable to load notes.js"
                        )
                    );
                };

            document.head.appendChild(
                script
            );
        }
    );
}


/* =========================================================
   INITIAL STATE
========================================================= */

function showInitialState() {
    const searchTitle =
        document.getElementById(
            "searchTitle"
        );

    const searchCount =
        document.getElementById(
            "searchCount"
        );

    const results =
        document.getElementById(
            "results"
        );

    if (searchTitle) {
        searchTitle.textContent =
            "Search GEPAM resources";
    }

    if (searchCount) {
        searchCount.textContent =
            "Search Notes, Topics, Practical Notes and Past Papers.";
    }

    if (results) {
        results.innerHTML =
            '<div class="empty-state">' +
            '<h3>What are you looking for?</h3>' +
            '<p>Search for a subject, topic, form, year, exam type or keyword.</p>' +
            '</div>';
    }
}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHtml(value) {
    return String(
        value || ""
    )
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


/* =========================================================
   ESCAPE ATTRIBUTE
========================================================= */

function escapeAttribute(value) {
    return escapeHtml(value);
}
