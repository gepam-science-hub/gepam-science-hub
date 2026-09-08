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
        new URLSearchParams(window.location.search);

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

    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(
            /[\u2010-\u2015\u2212]/g,
            "-"
        )
        .replace(
            /[_-]+/g,
            " "
        )
        .replace(
            /\s+/g,
            " "
        )
        .trim();
}


/* =========================================================
   NORMALIZE SEARCH VALUE
========================================================= */

function normalizeSearchValue(value) {

    return normalizeText(value)
        .replace(
            /\bpre\s+necta\b/g,
            "prenecta"
        )
        .replace(
            /\bpre\s+necta\b/g,
            "prenecta"
        )
        .replace(
            /\bmid\s+term\b/g,
            "midterm"
        )
        .replace(
            /\bspecial\s+examinations?\b/g,
            "specialexaminations"
        )
        .replace(
            /\bspecial\s+exams?\b/g,
            "specialexaminations"
        )
        .replace(
            /\bspecial\s+school\b/g,
            "specialschool"
        )
        .trim();
}


/* =========================================================
   PAPER TYPE / SOURCE NORMALIZATION
========================================================= */

function normalizePaperType(value) {

    const text =
        normalizeSearchValue(value);

    if (!text) {
        return "";
    }


    /* -------------------------------------------------------
       PRE-NECTA
    ------------------------------------------------------- */

    if (
        text.includes("prenecta") ||
        text.includes("pre necta")
    ) {
        return "prenecta";
    }


    /* -------------------------------------------------------
       SPECIAL EXAMINATIONS
    ------------------------------------------------------- */

    if (
        text.includes("specialexaminations") ||
        text.includes("special examination") ||
        text.includes("specialexams") ||
        text.includes("special exam")
    ) {
        return "specialexaminations";
    }


    /* -------------------------------------------------------
       MIDTERM
    ------------------------------------------------------- */

    if (
        text.includes("midterm") ||
        text.includes("mid term")
    ) {
        return "midterm";
    }


    /* -------------------------------------------------------
       TERMINAL
    ------------------------------------------------------- */

    if (
        text.includes("terminal")
    ) {
        return "terminal";
    }


    /* -------------------------------------------------------
       ANNUAL
    ------------------------------------------------------- */

    if (
        text.includes("annual")
    ) {
        return "annual";
    }


    /* -------------------------------------------------------
       JOINT
    ------------------------------------------------------- */

    if (
        text.includes("joint")
    ) {
        return "joint";
    }


    /* -------------------------------------------------------
       MOCK
    ------------------------------------------------------- */

    if (
        text.includes("mock")
    ) {
        return "mock";
    }


    /* -------------------------------------------------------
       NECTA
    ------------------------------------------------------- */

    if (
        text === "necta" ||
        text.includes("necta examination") ||
        text.includes("necta exam")
    ) {
        return "necta";
    }


    return "";
}


/* =========================================================
   SPECIAL EXAMINATION SOURCE NORMALIZATION
========================================================= */

function normalizeSpecialExamSource(value) {

    const text =
        normalizeText(value);

    if (!text) {
        return "";
    }


    /* ISESE */

    if (
        text.includes("isese")
    ) {
        return "isese";
    }


    /* JEPGOS */

    if (
        text.includes("jepgos")
    ) {
        return "jepgos";
    }


    /* TAHOSSA */

    if (
        text.includes("tahossa")
    ) {
        return "tahossa";
    }


    /* CSSC */

    if (
        text.includes("cssc")
    ) {
        return "cssc";
    }


    /* SPECIAL SCHOOL */

    if (
        text.includes("special school") ||
        text.includes("specialschool")
    ) {
        return "specialschool";
    }


    return "";
}


/* =========================================================
   PAPER SEARCH TEXT
========================================================= */

function buildPaperSearchText(paper) {

    const values = [];


    /*
     * Collect ordinary values.
     */

    function collect(value) {

        if (
            value === null ||
            value === undefined
        ) {
            return;
        }


        if (
            typeof value === "string" ||
            typeof value === "number"
        ) {
            values.push(
                String(value)
            );

            return;
        }


        /*
         * Arrays
         */

        if (
            Array.isArray(value)
        ) {

            value.forEach(
                function (item) {
                    collect(item);
                }
            );

            return;
        }


        /*
         * Objects
         */

        if (
            typeof value === "object"
        ) {

            Object.keys(value).forEach(
                function (key) {

                    /*
                     * Include field name too.
                     */

                    values.push(key);

                    collect(
                        value[key]
                    );
                }
            );
        }
    }


    collect(paper);


    /*
     * Add useful generic search terms.
     */

    values.push(
        "past papers",
        "past paper",
        "papers",
        "paper",
        "exam",
        "exams",
        "examination",
        "examinations"
    );


    /*
     * ---------------------------------------------------------
     * SPECIAL EXAMINATIONS
     * ---------------------------------------------------------
     *
     * These are sources/sub-types inside
     * Special Examinations:
     *
     * ISESE
     * JEPGOS
     * TAHOSSA
     * CSSC
     * Special School
     *
     * We include the canonical names and aliases.
     * ---------------------------------------------------------
     */

    const combined =
        normalizeText(
            values.join(" ")
        );


    if (
        combined.includes("isese")
    ) {
        values.push(
            "ISESE"
        );
    }


    if (
        combined.includes("jepgos")
    ) {
        values.push(
            "JEPGOS"
        );
    }


    if (
        combined.includes("tahossa")
    ) {
        values.push(
            "TAHOSSA"
        );
    }


    if (
        combined.includes("cssc")
    ) {
        values.push(
            "CSSC"
        );
    }


    if (
        combined.includes("special school") ||
        combined.includes("specialschool")
    ) {
        values.push(
            "Special School",
            "SpecialSchool"
        );
    }


    /*
     * ---------------------------------------------------------
     * SPECIAL EXAMINATIONS ALIASES
     * ---------------------------------------------------------
     */

    if (
        combined.includes("special examination") ||
        combined.includes("special examinations") ||
        combined.includes("special exam") ||
        combined.includes("special exams") ||
        combined.includes("special_examination") ||
        combined.includes("special-examination")
    ) {

        values.push(
            "Special Examinations",
            "Special Examination",
            "Special Exam",
            "Special Exams",
            "specialexaminations"
        );
    }


    /*
     * ---------------------------------------------------------
     * PRE-NECTA ALIASES
     * ---------------------------------------------------------
     */

    if (
        combined.includes("pre necta") ||
        combined.includes("pre-necta") ||
        combined.includes("pre_necta") ||
        combined.includes("prenecta")
    ) {

        values.push(
            "Pre-NECTA",
            "Pre NECTA",
            "Pre_NECTA",
            "PreNecta",
            "prenecta"
        );
    }


    /*
     * ---------------------------------------------------------
     * RETURN SEARCH TEXT
     * ---------------------------------------------------------
     */

    return values.join(" ");
}


/* =========================================================
   PERFORM SEARCH
========================================================= */

function performSearch(query) {

    const cleanQuery =
        normalizeSearchValue(query);

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


    /*
     * ---------------------------------------------------------
     * DETECT EXAM TYPE REQUEST
     * ---------------------------------------------------------
     */

    const requestedPaperType =
        normalizePaperType(
            cleanQuery
        );


    /*
     * ---------------------------------------------------------
     * DETECT SPECIAL EXAM SOURCE
     * ---------------------------------------------------------
     */

    const requestedSpecialSource =
        normalizeSpecialExamSource(
            cleanQuery
        );


    allSearchResults =
        index
            .map(
                function (item) {

                    const searchable =
                        normalizeSearchValue(
                            item.searchText
                        );

                    const titleClean =
                        normalizeSearchValue(
                            item.title
                        );


                    let score = 0;

                    let isPriority =
                        false;


                    /*
                     * -------------------------------------------------
                     * FULL QUERY MATCH
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
                     * TOKEN MATCH
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

                        score += 15;

                        isPriority = true;
                    }


                    /*
                     * -------------------------------------------------
                     * SPECIAL SOURCE SEARCH
                     * -------------------------------------------------
                     *
                     * ISESE
                     * JEPGOS
                     * TAHOSSA
                     * CSSC
                     * Special School
                     * -------------------------------------------------
                     */

                    if (
                        requestedSpecialSource &&
                        item.type === "papers"
                    ) {

                        const itemSpecialSource =
                            normalizeSpecialExamSource(
                                [
                                    item.specialExam,
                                    item.category,
                                    item.paperType,
                                    item.searchText
                                ].join(" ")
                            );


                        if (
                            itemSpecialSource ===
                            requestedSpecialSource
                        ) {

                            score += 100;

                            isPriority = true;

                        } else {

                            score = 0;
                        }
                    }


                    /*
                     * -------------------------------------------------
                     * SPECIAL EXAMINATIONS SEARCH
                     * -------------------------------------------------
                     *
                     * Search:
                     *
                     * "special examination"
                     * "special examinations"
                     * "special exam"
                     * "special exams"
                     *
                     * should return all five:
                     *
                     * ISESE
                     * JEPGOS
                     * TAHOSSA
                     * CSSC
                     * Special School
                     * -------------------------------------------------
                     */

                    const isSpecialExamQuery =
                        cleanQuery ===
                            "specialexaminations" ||
                        cleanQuery ===
                            "specialexamination" ||
                        cleanQuery ===
                            "special exam" ||
                        cleanQuery ===
                            "special exams" ||
                        cleanQuery.includes(
                            "specialexaminations"
                        );


                    if (
                        isSpecialExamQuery &&
                        item.type === "papers"
                    ) {

                        const itemText =
                            normalizeSearchValue(
                                item.searchText
                            );


                        const isSpecialPaper =
                            itemText.includes(
                                "specialexaminations"
                            ) ||
                            itemText.includes(
                                "isese"
                            ) ||
                            itemText.includes(
                                "jepgos"
                            ) ||
                            itemText.includes(
                                "tahossa"
                            ) ||
                            itemText.includes(
                                "cssc"
                            ) ||
                            itemText.includes(
                                "specialschool"
                            ) ||
                            itemText.includes(
                                "special school"
                            );


                        if (
                            isSpecialPaper
                        ) {

                            score += 100;

                            isPriority = true;

                        } else {

                            score = 0;
                        }
                    }


                    /*
                     * -------------------------------------------------
                     * EXACT PAPER TYPE
                     * -------------------------------------------------
                     */

                    if (
                        requestedPaperType &&
                        item.type === "papers"
                    ) {

                        const itemPaperType =
                            normalizePaperType(
                                [
                                    item.paperType,
                                    item.category,
                                    item.searchText
                                ].join(" ")
                            );


                        if (
                            itemPaperType ===
                            requestedPaperType
                        ) {

                            score += 80;

                            isPriority = true;

                        } else {

                            /*
                             * Don't remove Special Examination
                             * source results when the query itself
                             * is Special Examination.
                             */

                            if (
                                requestedPaperType !==
                                "specialexaminations"
                            ) {

                                score = 0;
                            }
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
        normalizeSearchValue(query);

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
        normalizeSearchValue(query);

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
     */

    const paperSource =
        getPastPaperSource();


    if (
        Array.isArray(
            paperSource
        )
    ) {

        paperSource.forEach(
            function (
                paper,
                indexNumber
            ) {

                if (!paper) {
                    return;
                }


                /*
                 * -------------------------------------------------
                 * BASIC PAPER DATA
                 * -------------------------------------------------
                 */

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
                 * SEARCH TEXT
                 * -------------------------------------------------
                 *
                 * Hapa tunakusanya taarifa zote za paper.
                 * Hii ndiyo sehemu muhimu kwa:
                 *
                 * ISESE
                 * JEPGOS
                 * TAHOSSA
                 * CSSC
                 * Special School
                 *
                 * pamoja na sources nyingine mpya.
                 * -------------------------------------------------
                 */

                const paperSearchText =
                    buildPaperSearchText(
                        paper
                    );


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

            '<p>' +
            'Try another keyword such as ' +
            '<strong>Physics</strong>, ' +
            '<strong>Chemistry</strong>, ' +
            '<strong>Waves</strong>, ' +
            '<strong>Mock</strong>, ' +
            '<strong>Pre-NECTA</strong>, ' +
            '<strong>Special Examinations</strong>, ' +
            '<strong>ISESE</strong>, ' +
            '<strong>JEPGOS</strong>, ' +
            '<strong>TAHOSSA</strong>, ' +
            '<strong>CSSC</strong> ' +
            'or ' +
            '<strong>Special School</strong>.' +
            '</p>' +

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
     * META
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


    if (item.specialExam) {

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

            if (
                typeof window.anzishaUnunuziWaNotes ===
                "function"
            ) {

                resolve();

                return;
            }


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

Mkuu, hii ndiyo version ya kujaribu sasa. Kitu nilichokilenga hasa ni kwamba "Special Examinations" isiwe sawa na "ISESE" pekee: search ya “Special Examinations” inapaswa kuonyesha ISESE + JEPGOS + TAHOSSA + CSSC + Special School, wakati ukitafuta jina moja inapaswa kulenga hiyo source.

Baada ya kuweka hii, refresh kwa nguvu (Ctrl+F5 kwenye PC, au clear/reload kwenye simu) kisha jaribu kwanza "ISESE", "JEPGOS", "TAHOSSA", "CSSC", "Special School", halafu "Special Examinations".
