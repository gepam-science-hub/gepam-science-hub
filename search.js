document.addEventListener(
    "DOMContentLoaded",
    function () {
        initializeSearch();
    }
);

let allSearchResults = [];
let currentFilter = "all";


/* =========================================================
   INITIALIZE SEARCH
========================================================= */

function initializeSearch() {
    const searchForm =
        document.getElementById("searchForm");

    const searchInput =
        document.getElementById("searchInput");

    if (!searchForm || !searchInput) {
        return;
    }

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


    /* -------------------------------------------------------
       SEARCH SUBMIT
    ------------------------------------------------------- */

    searchForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();

            const newQuery =
                searchInput.value.trim();

            const url =
                new URL(window.location.href);

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


    /* -------------------------------------------------------
       FILTER BUTTONS
    ------------------------------------------------------- */

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


    /*
     * =========================================================
     * SEARCH NOTES PURCHASE
     * =========================================================
     *
     * Search → Nunua → Email → PesaPal
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
                Number(
                    button.dataset.price || 0
                );

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

    let text =
        String(value || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            );

    /*
     * ---------------------------------------------------------
     * FORM NORMALIZATION
     * ---------------------------------------------------------
     */

    text = text
        .replace(
            /\bf\s*1\b/g,
            "form1"
        )
        .replace(
            /\bf\s*2\b/g,
            "form2"
        )
        .replace(
            /\bf\s*3\b/g,
            "form3"
        )
        .replace(
            /\bf\s*4\b/g,
            "form4"
        )
        .replace(
            /\bf\s*5\b/g,
            "form5"
        )
        .replace(
            /\bf\s*6\b/g,
            "form6"
        );


    /*
     * ---------------------------------------------------------
     * EXAM TYPE NORMALIZATION
     * ---------------------------------------------------------
     *
     * Hapa tunaruhusu:
     *
     * Midterm
     * Mid Term
     * Mid-Term
     * Mid_Term
     *
     * Terminal
     *
     * Pre-NECTA
     * Pre NECTA
     * Pre_NECTA
     * PreNecta
     *
     * Special Exam
     * Special Examination
     * Special_Exam
     * ---------------------------------------------------------
     */

    text = text

        /* MIDTERM */
        .replace(
            /\bmid[\s_-]*term\b/g,
            "midterm"
        )

        /* PRE NECTA */
        .replace(
            /\bpre[\s_-]*necta\b/g,
            "prenecta"
        )

        .replace(
            /\bprenecta\b/g,
            "prenecta"
        )

        /* SPECIAL EXAMINATION */
        .replace(
            /\bspecial[\s_-]*(exam|examination)\b/g,
            "specialexamination"
        )

        /* SPECIAL EXAM */
        .replace(
            /\bspecialexam\b/g,
            "specialexamination"
        );

    return text.trim();
}


/* =========================================================
   CANONICAL SEARCH TYPE
========================================================= */

function getCanonicalPaperType(value) {

    const text =
        normalizeText(value);

    if (
        text.includes("midterm")
    ) {
        return "midterm";
    }

    if (
        text.includes("terminal")
    ) {
        return "terminal";
    }

    if (
        text.includes("annual")
    ) {
        return "annual";
    }

    if (
        text.includes("mock")
    ) {
        return "mock";
    }

    if (
        text.includes("joint")
    ) {
        return "joint";
    }

    if (
        text.includes("prenecta")
    ) {
        return "prenecta";
    }

    if (
        text.includes("specialexamination") ||
        text.includes("specialexam")
    ) {
        return "specialexamination";
    }

    if (
        text.includes("necta")
    ) {
        return "necta";
    }

    return "";
}


/* =========================================================
   SEARCH TYPE ALIASES
========================================================= */

function getPaperTypeAliases(value) {

    const canonical =
        getCanonicalPaperType(value);

    switch (canonical) {

        case "midterm":
            return [
                "midterm",
                "mid term",
                "mid-term",
                "mid_term",
                "mid examination",
                "mid exam"
            ];

        case "terminal":
            return [
                "terminal",
                "terminal exam",
                "terminal examination",
                "terminal exams"
            ];

        case "annual":
            return [
                "annual",
                "annual exam",
                "annual examination",
                "annual exams"
            ];

        case "mock":
            return [
                "mock",
                "mock exam",
                "mock examination",
                "mock exams"
            ];

        case "joint":
            return [
                "joint",
                "joint exam",
                "joint examination",
                "joint exams"
            ];

        case "prenecta":
            return [
                "prenecta",
                "pre necta",
                "pre-necta",
                "pre_necta",
                "pre necta examination",
                "pre-necta examination",
                "pre necta exam",
                "pre-necta exam"
            ];

        case "specialexamination":
            return [
                "specialexamination",
                "special examination",
                "special-examination",
                "special_examination",
                "special exam",
                "special-exam",
                "special_exam",
                "special exams"
            ];

        case "necta":
            return [
                "necta",
                "necta exam",
                "necta examination"
            ];

        default:
            return [];
    }
}


/* =========================================================
   BUILD CANONICAL SEARCH TEXT
========================================================= */

function buildCanonicalSearchText(value) {

    const original =
        normalizeText(value);

    const canonical =
        getCanonicalPaperType(value);

    const aliases =
        getPaperTypeAliases(value);

    return [
        original,
        canonical,
        aliases.join(" ")
    ].join(" ");
}


/* =========================================================
   PERFORM SEARCH
========================================================= */

function performSearch(query) {

    const cleanQuery =
        normalizeText(query);

    if (!cleanQuery) {
        showInitialState();
        return;
    }


    /*
     * ---------------------------------------------------------
     * TOKENS
     * ---------------------------------------------------------
     */

    const tokens =
        cleanQuery
            .split(/\s+/)
            .filter(Boolean);


    /*
     * ---------------------------------------------------------
     * SEARCH INDEX
     * ---------------------------------------------------------
     */

    const index =
        buildSearchIndex();


    /*
     * ---------------------------------------------------------
     * DETECT REQUESTED PAPER TYPE
     * ---------------------------------------------------------
     */

    const requestedPaperType =
        getCanonicalPaperType(
            cleanQuery
        );


    /*
     * ---------------------------------------------------------
     * RESULTS
     * ---------------------------------------------------------
     */

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

                    const itemPaperType =
                        getCanonicalPaperType(
                            [
                                item.paperType,
                                item.category,
                                item.specialExam,
                                item.searchText
                            ].join(" ")
                        );

                    let score = 0;

                    let isPriority =
                        false;


                    /*
                     * -------------------------------------------------
                     * EXACT FULL QUERY
                     * -------------------------------------------------
                     */

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


                    /*
                     * -------------------------------------------------
                     * TOKEN MATCHING
                     * -------------------------------------------------
                     */

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


                    /*
                     * -------------------------------------------------
                     * ALL TOKENS MATCH
                     * -------------------------------------------------
                     */

                    if (
                        matchedTokens ===
                            tokens.length &&
                        tokens.length > 1
                    ) {
                        isPriority = true;
                        score += 15;
                    }


                    /*
                     * -------------------------------------------------
                     * PAPER TYPE EXACT MATCH
                     * -------------------------------------------------
                     *
                     * Mfano:
                     *
                     * pre necta
                     * special examination
                     * mid term
                     * terminal
                     * annual
                     * mock
                     * joint
                     * -------------------------------------------------
                     */

                    if (
                        requestedPaperType &&
                        item.type === "papers"
                    ) {

                        if (
                            itemPaperType ===
                            requestedPaperType
                        ) {
                            score += 80;
                            isPriority = true;

                        } else {

                            /*
                             * User ameomba aina maalum
                             * ya paper, hivyo hatutaki
                             * aina nyingine ichanganyike
                             * kwenye priority/relevant.
                             */

                            score = 0;
                        }
                    }


                    /*
                     * -------------------------------------------------
                     * NOTES QUERY
                     * -------------------------------------------------
                     */

                    if (
                        wantsNotesQuery(
                            cleanQuery
                        ) &&
                        item.type === "papers"
                    ) {
                        score = 0;
                    }


                    /*
                     * -------------------------------------------------
                     * PAST PAPER QUERY
                     * -------------------------------------------------
                     */

                    if (
                        wantsPapersQuery(
                            cleanQuery
                        ) &&
                        (
                            item.type === "notes" ||
                            item.type === "topics" ||
                            item.type === "practical"
                        )
                    ) {
                        score = 0;
                    }


                    /*
                     * -------------------------------------------------
                     * PAPER TYPE REQUEST
                     * -------------------------------------------------
                     */

                    if (
                        requestedPaperType &&
                        item.type === "papers" &&
                        itemPaperType !==
                            requestedPaperType
                    ) {
                        score = 0;
                    }


                    return {
                        ...item,
                        score:
                            score,
                        isPriority:
                            isPriority
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
                    return (
                        b.score -
                        a.score
                    );
                }
            );


    /*
     * ---------------------------------------------------------
     * SEARCH TITLE
     * ---------------------------------------------------------
     */

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

    const text =
        normalizeText(query);

    return (
        text.includes("note") ||
        text.includes("notes") ||
        text.includes("topic") ||
        text.includes("topics") ||
        text.includes("practical")
    );
}


function wantsPapersQuery(query) {

    const text =
        normalizeText(query);

    return (
        text.includes("paper") ||
        text.includes("papers") ||
        text.includes("past") ||
        text.includes("exam") ||
        text.includes("examination") ||
        text.includes("mock") ||
        text.includes("midterm") ||
        text.includes("terminal") ||
        text.includes("annual") ||
        text.includes("joint") ||
        text.includes("prenecta") ||
        text.includes("specialexamination") ||
        text.includes("special")
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

                    const form =
                        extractFormFromKey(
                            key
                        );

                    const subject =
                        extractSubjectFromKey(
                            key
                        );

                    const syllabus =
                        extractSyllabusFromKey(
                            key
                        );

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

                        notesId:
                            full.id,

                        form:
                            form,

                        subject:
                            subject,

                        syllabus:
                            syllabus,

                        actionUrl:
                            "",

                        searchText:
                            [
                                full.title,
                                full.description,
                                key,
                                form,
                                subject,
                                syllabus,
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

                            const form =
                                extractFormFromKey(
                                    key
                                );

                            const subject =
                                extractSubjectFromKey(
                                    key
                                );

                            const syllabus =
                                extractSyllabusFromKey(
                                    key
                                );

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

                                notesId:
                                    topic.id,

                                form:
                                    form,

                                subject:
                                    subject,

                                syllabus:
                                    syllabus,

                                actionUrl:
                                    "",

                                searchText:
                                    [
                                        topic.title,
                                        topic.description,
                                        key,
                                        form,
                                        subject,
                                        syllabus,
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
     * Logic imeboreshwa hapa bila kubadilisha
     * structure ya data yako.
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


                const paperType =
                    paper.type ||
                    "";

                const category =
                    paper.category ||
                    "";

                const specialExam =
                    paper.specialExam ||
                    "";


                /*
                 * -------------------------------------------------
                 * CANONICAL TYPE
                 * -------------------------------------------------
                 */

                const canonicalType =
                    getCanonicalPaperType(
                        [
                            paperType,
                            category,
                            specialExam,
                            paper.title,
                            paper.name
                        ].join(" ")
                    );


                /*
                 * -------------------------------------------------
                 * TYPE ALIASES
                 * -------------------------------------------------
                 */

                const typeAliases =
                    getPaperTypeAliases(
                        [
                            paperType,
                            category,
                            specialExam
                        ].join(" ")
                    );


                /*
                 * -------------------------------------------------
                 * SEARCH TEXT
                 * -------------------------------------------------
                 *
                 * specialExam sasa imejumuishwa.
                 *
                 * Hii ndiyo ilikuwa sehemu muhimu
                 * iliyokuwa missing kwenye version ya zamani.
                 * -------------------------------------------------
                 */

                const paperSearchText =
                    [
                        paper.title,
                        paper.name,
                        paper.description,
                        paper.year,
                        paper.form,
                        paper.subject,

                        paperType,
                        category,
                        paper.region,
                        specialExam,

                        canonicalType,

                        typeAliases.join(" "),

                        "past papers",
                        "past paper",
                        "papers",
                        "examination",
                        "exam"
                    ].join(" ");


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
                        paperType,

                    category:
                        category,

                    region:
                        paper.region ||
                        "",

                    specialExam:
                        specialExam,

                    canonicalPaperType:
                        canonicalType,

                    actionUrl:
                        buildPaperUrl(
                            paper
                        ),

                    searchText:
                        paperSearchText
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

    const seen =
        new Set();

    const output =
        [];

    items.forEach(
        function (item) {

            const key =
                item.uniqueKey ||
                (
                    item.type +
                    "-" +
                    item.title
                );

            if (
                seen.has(key)
            ) {
                return;
            }

            seen.add(key);

            output.push(
                item
            );
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
            .match(
                /form\s*([1-6])/i
            );

    if (
        !match ||
        !match[1]
    ) {
        return "";
    }

    return (
        "Form " +
        match[1]
    );
}


/* =========================================================
   EXTRACT SUBJECT
========================================================= */

function extractSubjectFromKey(key) {

    const value =
        normalizeText(key);

    if (
        value.includes(
            "physics"
        )
    ) {
        return "Physics";
    }

    if (
        value.includes(
            "chemistry"
        )
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
        value.includes(
            "old"
        )
    ) {
        return "Old Syllabus";
    }

    if (
        value.includes(
            "new"
        )
    ) {
        return "New Syllabus";
    }

    return "";
}


/* =========================================================
   NORMAL NOTES URL
========================================================= */

function buildNotesUrl(key) {

    const match =
        String(key || "")
            .match(
                /form\s*([1-6])/i
            );

    if (
        !match ||
        !match[1]
    ) {
        return "notes.html";
    }

    return (
        "notes.html?form=" +
        encodeURIComponent(
            "form" +
            match[1]
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


    /*
     * ---------------------------------------------------------
     * CURRENT FILTER
     * ---------------------------------------------------------
     */

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


    /*
     * ---------------------------------------------------------
     * NO RESULTS
     * ---------------------------------------------------------
     */

    if (!count) {

        container.innerHTML =
            '<div class="empty-state">' +

            '<h3>No results found</h3>' +

            '<p>' +
            'Try another keyword such as ' +
            '<strong>Physics</strong>, ' +
            '<strong>Chemistry</strong>, ' +
            '<strong>Waves</strong>, ' +
            '<strong>Midterm</strong>, ' +
            '<strong>Terminal</strong>, ' +
            '<strong>Mock</strong>, ' +
            '<strong>Pre-NECTA</strong> ' +
            'or ' +
            '<strong>Special Examination</strong>.' +
            '</p>' +

            '</div>';

        return;
    }


    /*
     * ---------------------------------------------------------
     * PRIORITY RESULTS
     * ---------------------------------------------------------
     */

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


    /*
     * ---------------------------------------------------------
     * BEST MATCHES
     * ---------------------------------------------------------
     */

    if (
        priorityItems.length > 0
    ) {

        htmlOutput +=
            '<div class="search-section-title">' +
            'Best Matches (Priority)' +
            '</div>';


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


    /*
     * ---------------------------------------------------------
     * OTHER RELEVANT
     * ---------------------------------------------------------
     */

    if (
        relevantItems.length > 0
    ) {

        htmlOutput +=
            '<div class="search-section-title">' +
            'Other Relevant Resources' +
            '</div>';


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
     * SPECIAL EXAM DISPLAY
     * ---------------------------------------------------------
     */

    if (
        item.specialExam
    ) {

        meta +=
            '<span class="meta-item">' +

            escapeHtml(
                item.specialExam
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
            '<div class="price">' +

            'TZS ' +

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
     * Nunua → Email → PesaPal
     *
     * PAPERS:
     * Open Paper → PDF
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
     * Kama notes.js haijapakiwa,
     * i-load hapa.
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
        function (
            resolve,
            reject
        ) {


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

            '<p>' +
            'Search for a subject, topic, form, year, exam type or keyword.' +
            '</p>' +

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

    return escapeHtml(
        value
    );
}
