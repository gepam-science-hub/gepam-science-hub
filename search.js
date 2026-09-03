// ==========================================================
// GEPAM SCIENCE HUB
// SMART SITE SEARCH
// ==========================================================
// Searches:
//   - Premium Notes
//   - Topics
//   - Practical Notes
//   - Past Papers
//
// IMPORTANT:
// - Does NOT modify notesData
// - Does NOT modify practicalNotes
// - Does NOT modify pastPaperRecords
// - Does NOT touch the payment engine
// ==========================================================


// ==========================================================
// BASIC HELPERS
// ==========================================================

function normalizeText(value) {

    return String(value ?? "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[-_/]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

}


function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// ==========================================================
// FORM DETECTION
// ==========================================================

function detectForm(query) {

    const q = normalizeText(query);

    const match = q.match(
        /\b(?:form|f)\s*([1-6])\b/
    );

    if (match) {
        return `form${match[1]}`;
    }

    const words = q.split(" ");

    for (let i = 1; i <= 6; i++) {

        if (
            words.includes(
                `form${i}`
            )
        ) {
            return `form${i}`;
        }

    }

    return null;

}


// ==========================================================
// SUBJECT DETECTION
// ==========================================================

function detectSubject(query) {

    const q = normalizeText(query);

    if (
        /\bphysics\b/.test(q)
    ) {
        return "physics";
    }

    if (
        /\bchemistry\b/.test(q)
    ) {
        return "chemistry";
    }

    return null;

}


// ==========================================================
// YEAR DETECTION
// ==========================================================

function detectYear(query) {

    const q = normalizeText(query);

    const match = q.match(
        /\b(20\d{2})\b/
    );

    return match
        ? Number(match[1])
        : null;

}


// ==========================================================
// PAPER TYPE DETECTION
// ==========================================================

function detectPaperType(query) {

    const q = normalizeText(query);

    if (
        /\bpre\s*necta\b/.test(q) ||
        /\bprenecta\b/.test(q)
    ) {
        return "pre_necta";
    }

    if (
        /\bnecta\b/.test(q)
    ) {
        return "necta";
    }

    if (
        /\bmock\b/.test(q)
    ) {
        return "mock";
    }

    if (
        /\bannual\b/.test(q)
    ) {
        return "annual";
    }

    if (
        /\bjoint\b/.test(q)
    ) {
        return "joint";
    }

    if (
        /\bspecial\b/.test(q) ||
        /\bisese\b/.test(q) ||
        /\btahossa\b/.test(q) ||
        /\bjepgos\b/.test(q) ||
        /\bcssc\b/.test(q)
    ) {
        return "special";
    }

    return null;

}


// ==========================================================
// SYLLABUS DETECTION
// ==========================================================

function detectSyllabus(query) {

    const q = normalizeText(query);

    if (
        /\bold\s+syllabus\b/.test(q) ||
        /\bold\b/.test(q)
    ) {
        return "old";
    }

    if (
        /\bnew\s+syllabus\b/.test(q) ||
        /\bnew\b/.test(q)
    ) {
        return "new";
    }

    return null;

}


// ==========================================================
// SPECIAL EXAM DETECTION
// ==========================================================

function detectSpecialExam(query) {

    const q = normalizeText(query);

    const names = [
        "isese",
        "tahossa",
        "jepgos",
        "cssc",
        "special school"
    ];

    for (const name of names) {

        if (
            q.includes(
                normalizeText(name)
            )
        ) {
            return name;
        }

    }

    return null;

}


// ==========================================================
// NOTES DATA SOURCE
// ==========================================================

function getNotesDatabase() {

    if (
        typeof notesData !== "undefined"
    ) {
        return notesData;
    }

    if (
        window.gepamNotesData
    ) {
        return window.gepamNotesData;
    }

    return {};

}


// ==========================================================
// PRACTICAL NOTES SOURCE
// ==========================================================

function getPracticalDatabase() {

    if (
        typeof practicalNotes !== "undefined"
    ) {
        return practicalNotes;
    }

    if (
        window.gepamPracticalNotes
    ) {
        return window.gepamPracticalNotes;
    }

    return {};

}


// ==========================================================
// PAST PAPERS DATA SOURCE
// ==========================================================
// We deliberately support several common variable names so
// the search does not break if the existing Past Papers file
// uses one of these names.
// ==========================================================

function getPastPapersDatabase() {

    // ------------------------------------------------------
    // First: try direct global variables.
    // This is important because the existing
    // pastpapers-data.js may use "const" or "let".
    // ------------------------------------------------------

    try {

        if (
            typeof pastPaperRecords !== "undefined" &&
            Array.isArray(pastPaperRecords)
        ) {
            return pastPaperRecords;
        }

    } catch (error) {
        // Continue.
    }


    try {

        if (
            typeof pastPapers !== "undefined" &&
            Array.isArray(pastPapers)
        ) {
            return pastPapers;
        }

    } catch (error) {
        // Continue.
    }


    try {

        if (
            typeof pastPaperData !== "undefined" &&
            Array.isArray(pastPaperData)
        ) {
            return pastPaperData;
        }

    } catch (error) {
        // Continue.
    }


    try {

        if (
            typeof pastpapers !== "undefined" &&
            Array.isArray(pastpapers)
        ) {
            return pastpapers;
        }

    } catch (error) {
        // Continue.
    }


    try {

        if (
            typeof pastpapersData !== "undefined" &&
            Array.isArray(pastpapersData)
        ) {
            return pastpapersData;
        }

    } catch (error) {
        // Continue.
    }


    try {

        if (
            typeof pastPapersData !== "undefined" &&
            Array.isArray(pastPapersData)
        ) {
            return pastPapersData;
        }

    } catch (error) {
        // Continue.
    }


    // ------------------------------------------------------
    // Second: try window properties.
    // ------------------------------------------------------

    const possibleNames = [

        "pastPaperRecords",
        "pastPapers",
        "pastPaperData",
        "pastpapers",
        "pastpapersData",
        "pastPapersData"

    ];


    for (
        const name of possibleNames
    ) {

        try {

            if (
                Array.isArray(
                    window[name]
                )
            ) {

                return window[name];

            }

        } catch (error) {

            // Continue checking.

        }

    }


    return [];

}


// ==========================================================
// BUILD NOTES RESULTS
// ==========================================================

function buildNotesResults(
    query,
    filters
) {

    const database =
        getNotesDatabase();

    const results = [];

    const q =
        normalizeText(query);


    Object.entries(
        database
    ).forEach(
        ([key, data]) => {

            if (
                !data
            ) {
                return;
            }


            const keyNormalized =
                normalizeText(key);


            // ----------------------------------------------
            // Detect form / subject / syllabus from key
            // ----------------------------------------------

            const formMatch =
                keyNormalized.match(
                    /\bform\s*([1-6])\b/
                );

            const form =
                formMatch
                    ? `form${formMatch[1]}`
                    : null;


            let subject = null;

            if (
                keyNormalized.includes(
                    "physics"
                )
            ) {
                subject = "physics";
            }

            if (
                keyNormalized.includes(
                    "chemistry"
                )
            ) {
                subject = "chemistry";
            }


            let syllabus = null;

            if (
                keyNormalized.includes(
                    "old"
                )
            ) {
                syllabus = "old";
            }

            if (
                keyNormalized.includes(
                    "new"
                )
            ) {
                syllabus = "new";
            }


            // ----------------------------------------------
            // Strong filtering
            // ----------------------------------------------

            if (
                filters.form &&
                form !== filters.form
            ) {
                return;
            }


            if (
                filters.subject &&
                subject !== filters.subject
            ) {
                return;
            }


            if (
                filters.syllabus &&
                syllabus !== filters.syllabus
            ) {
                return;
            }


            // ----------------------------------------------
            // FULL NOTES
            // ----------------------------------------------

            if (
                data.full
            ) {

                const full =
                    data.full;


                const searchable =
                    normalizeText(
                        [
                            key,
                            full.id,
                            full.title,
                            full.description,
                            form,
                            subject,
                            syllabus,
                            "full notes",
                            "premium notes"
                        ].join(" ")
                    );


                const score =
                    calculateScore(
                        q,
                        searchable,
                        {
                            form,
                            subject,
                            syllabus,
                            title:
                                full.title
                        }
                    );


                if (
                    score > 0
                ) {

                    results.push({

                        category: "notes",

                        subtype: "full",

                        title:
                            full.title,

                        description:
                            full.description,

                        price:
                            full.price,

                        id:
                            full.id,

                        form,

                        subject,

                        syllabus,

                        score

                    });

                }

            }


            // ----------------------------------------------
            // TOPICS
            // ----------------------------------------------

            if (
                Array.isArray(
                    data.topics
                )
            ) {

                data.topics.forEach(
                    topic => {

                        if (
                            !topic
                        ) {
                            return;
                        }


                        const searchable =
                            normalizeText(
                                [
                                    key,
                                    topic.id,
                                    topic.title,
                                    topic.description,
                                    form,
                                    subject,
                                    syllabus,
                                    "topic"
                                ].join(" ")
                            );


                        const score =
                            calculateScore(
                                q,
                                searchable,
                                {
                                    form,
                                    subject,
                                    syllabus,
                                    title:
                                        topic.title
                                }
                            );


                        if (
                            score > 0
                        ) {

                            results.push({

                                category: "topics",

                                subtype: "topic",

                                title:
                                    topic.title,

                                description:
                                    topic.description,

                                price:
                                    topic.price,

                                id:
                                    topic.id,

                                form,

                                subject,

                                syllabus,

                                score

                            });

                        }

                    }
                );

            }

        }
    );


    return results;

}


// ==========================================================
// BUILD PRACTICAL NOTES RESULTS
// ==========================================================

function buildPracticalResults(
    query,
    filters
) {

    const database =
        getPracticalDatabase();

    const results = [];

    const q =
        normalizeText(query);


    Object.entries(
        database
    ).forEach(
        ([level, items]) => {

            if (
                !Array.isArray(items)
            ) {
                return;
            }


            items.forEach(
                item => {

                    if (
                        !item
                    ) {
                        return;
                    }


                    const titleNormalized =
                        normalizeText(
                            item.title
                        );


                    let subject = null;

                    if (
                        titleNormalized.includes(
                            "physics"
                        )
                    ) {
                        subject =
                            "physics";
                    }


                    if (
                        titleNormalized.includes(
                            "chemistry"
                        )
                    ) {
                        subject =
                            "chemistry";
                    }


                    if (
                        filters.subject &&
                        subject !==
                            filters.subject
                    ) {
                        return;
                    }


                    const searchable =
                        normalizeText(
                            [
                                level,
                                item.id,
                                item.title,
                                item.description,
                                subject,
                                "practical",
                                "practical notes"
                            ].join(" ")
                        );


                    const score =
                        calculateScore(
                            q,
                            searchable,
                            {
                                subject,
                                title:
                                    item.title
                            }
                        );


                    if (
                        score > 0
                    ) {

                        results.push({

                            category:
                                "practical",

                            subtype:
                                "practical",

                            title:
                                item.title,

                            description:
                                item.description,

                            price:
                                item.price,

                            id:
                                item.id,

                            level,

                            subject,

                            score

                        });

                    }

                }
            );

        }
    );


    return results;

}


// ==========================================================
// BUILD PAST PAPER RESULTS
// ==========================================================

function buildPastPaperResults(
    query,
    filters
) {

    const database =
        getPastPapersDatabase();

    const results = [];

    const q =
        normalizeText(query);


    if (
        !Array.isArray(database)
    ) {
        return results;
    }


    database.forEach(
        paper => {

            if (
                !paper
            ) {
                return;
            }


            const form =
                normalizeText(
                    paper.form
                );


            const subject =
                normalizeText(
                    paper.subject
                );


            const year =
                Number(
                    paper.year
                ) || null;


            const type =
                normalizeText(
                    paper.type
                );


            const specialExam =
                normalizeText(
                    paper.specialExam
                );


            // ----------------------------------------------
            // FORM FILTER
            // ----------------------------------------------

            if (
                filters.form &&
                form !== filters.form
            ) {
                return;
            }


            // ----------------------------------------------
            // SUBJECT FILTER
            // ----------------------------------------------

            if (
                filters.subject &&
                subject !==
                    filters.subject
            ) {
                return;
            }


            // ----------------------------------------------
            // YEAR FILTER
            // ----------------------------------------------

            if (
                filters.year &&
                year !== filters.year
            ) {
                return;
            }


            // ----------------------------------------------
            // TYPE FILTER
            // ----------------------------------------------

            if (
                filters.paperType &&
                filters.paperType !==
                    "special" &&
                type !==
                    filters.paperType
            ) {
                return;
            }


            // ----------------------------------------------
            // SPECIAL EXAM FILTER
            // ----------------------------------------------

            if (
                filters.specialExam
            ) {

                if (
                    specialExam !==
                    normalizeText(
                        filters.specialExam
                    )
                ) {
                    return;
                }

            }


            // ----------------------------------------------
            // SEARCHABLE TEXT
            // ----------------------------------------------

            const searchable =
                normalizeText(
                    [
                        paper.title,
                        paper.form,
                        paper.subject,
                        paper.year,
                        paper.type,
                        paper.region,
                        paper.category,
                        paper.specialExam,
                        paper.series,
                        paper.branch,
                        paper.file,
                        paper.id
                    ].join(" ")
                );


            const score =
                calculateScore(
                    q,
                    searchable,
                    {
                        form:
                            form ||
                            null,

                        subject:
                            subject ||
                            null,

                        year,

                        type,

                        title:
                            paper.title
                    }
                );


            if (
                score > 0
            ) {

                results.push({

                    category:
                        "pastpapers",

                    subtype:
                        "pastpaper",

                    title:
                        paper.title ||
                        "Past Paper",

                    description:
                        buildPaperDescription(
                            paper
                        ),

                    form:
                        paper.form,

                    subject:
                        paper.subject,

                    year,

                    type:
                        paper.type,

                    region:
                        paper.region,

                    specialExam:
                        paper.specialExam,

                    file:
                        paper.file,

                    markingScheme:
                        paper.markingScheme,

                    score

                });

            }

        }
    );


    return results;

}


// ==========================================================
// PAPER DESCRIPTION
// ==========================================================

function buildPaperDescription(
    paper
) {

    const parts = [];


    if (
        paper.form
    ) {
        parts.push(
            formatForm(
                paper.form
            )
        );
    }


    if (
        paper.subject
    ) {
        parts.push(
            formatSubject(
                paper.subject
            )
        );
    }


    if (
        paper.year
    ) {
        parts.push(
            String(
                paper.year
            )
        );
    }


    if (
        paper.type
    ) {
        parts.push(
            formatPaperType(
                paper.type
            )
        );
    }


    if (
        paper.region
    ) {

        parts.push(
            formatRegion(
                paper.region
            )
        );

    }


    if (
        paper.specialExam
    ) {

        parts.push(
            String(
                paper.specialExam
            )
        );

    }


    return parts.join(" • ");

}


// ==========================================================
// SMART SCORE
// ==========================================================

function calculateScore(
    query,
    searchable,
    context = {}
) {

    const q =
        normalizeText(query);

    const text =
        normalizeText(searchable);


    if (
        !q
    ) {
        return 0;
    }


    const queryWords =
        q
            .split(" ")
            .filter(Boolean);


    let score = 0;


    // ------------------------------------------------------
    // Exact complete phrase
    // ------------------------------------------------------

    if (
        text.includes(q)
    ) {

        score += 30;

    }


    // ------------------------------------------------------
    // Individual query words
    // ------------------------------------------------------

    queryWords.forEach(
        word => {

            if (
                text.includes(word)
            ) {

                score += 8;

            }

        }
    );


    // ------------------------------------------------------
    // FORM BOOST
    // ------------------------------------------------------

    const requestedForm =
        detectForm(q);


    if (
        requestedForm
    ) {

        if (
            context.form ===
            requestedForm
        ) {

            score += 35;

        } else if (
            text.includes(
                requestedForm
            )
        ) {

            score += 15;

        }

    }


    // ------------------------------------------------------
    // SUBJECT BOOST
    // ------------------------------------------------------

    const requestedSubject =
        detectSubject(q);


    if (
        requestedSubject
    ) {

        if (
            context.subject ===
            requestedSubject
        ) {

            score += 35;

        } else if (
            text.includes(
                requestedSubject
            )
        ) {

            score += 15;

        }

    }


    // ------------------------------------------------------
    // YEAR BOOST
    // ------------------------------------------------------

    const requestedYear =
        detectYear(q);


    if (
        requestedYear
    ) {

        if (
            Number(
                context.year
            ) === requestedYear
        ) {

            score += 40;

        } else if (
            text.includes(
                String(
                    requestedYear
                )
            )
        ) {

            score += 15;

        }

    }


    // ------------------------------------------------------
    // TITLE BOOST
    // ------------------------------------------------------

    if (
        context.title
    ) {

        const title =
            normalizeText(
                context.title
            );


        if (
            title === q
        ) {

            score += 100;

        }


        queryWords.forEach(
            word => {

                if (
                    title.includes(
                        word
                    )
                ) {

                    score += 12;

                }

            }
        );

    }


    // ------------------------------------------------------
    // IMPORTANT: prevent unrelated subject pollution
    // ------------------------------------------------------

    if (
        requestedSubject &&
        context.subject &&
        context.subject !==
            requestedSubject
    ) {

        score -= 35;

    }


    // ------------------------------------------------------
    // IMPORTANT: prevent unrelated form pollution
    // ------------------------------------------------------

    if (
        requestedForm &&
        context.form &&
        context.form !==
            requestedForm
    ) {

        score -= 35;

    }


    // ------------------------------------------------------
    // Avoid weak accidental matches
    // ------------------------------------------------------

    return Math.max(
        score,
        0
    );

}


// ==========================================================
// FORMATTING
// ==========================================================

function formatForm(
    form
) {

    const value =
        normalizeText(
            form
        );


    const match =
        value.match(
            /form\s*([1-6])/
        );


    if (
        match
    ) {

        return `Form ${match[1]}`;

    }


    return form || "";

}


function formatSubject(
    subject
) {

    if (
        !subject
    ) {
        return "";
    }


    const value =
        normalizeText(
            subject
        );


    if (
        value === "physics"
    ) {
        return "Physics";
    }


    if (
        value === "chemistry"
    ) {
        return "Chemistry";
    }


    return subject;

}


function formatPaperType(
    type
) {

    const value =
        normalizeText(
            type
        );


    const names = {

        "pre necta":
            "Pre-NECTA",

        "pre_necta":
            "Pre-NECTA",

        "necta":
            "NECTA",

        "mock":
            "Mock",

        "annual":
            "Annual",

        "joint":
            "Joint",

        "series":
            "Series"

    };


    return (
        names[value] ||
        type ||
        ""
    );

}


function formatRegion(
    region
) {

    if (
        !region
    ) {
        return "";
    }


    return String(
        region
    )
        .replace(/_/g, " ")
        .replace(/\b\w/g, char =>
            char.toUpperCase()
        );

}


// ==========================================================
// RESULT SORTING
// ==========================================================

function sortResults(
    results
) {

    return results.sort(
        (a, b) => {

            // Highest relevance first
            if (
                b.score !==
                a.score
            ) {

                return (
                    b.score -
                    a.score
                );

            }


            // Topics before full notes
            if (
                a.category ===
                    "topics" &&
                b.category !==
                    "topics"
            ) {

                return -1;

            }


            if (
                b.category ===
                    "topics" &&
                a.category !==
                    "topics"
            ) {

                return 1;

            }


            // Newer papers first
            if (
                a.year &&
                b.year &&
                a.year !==
                    b.year
            ) {

                return (
                    b.year -
                    a.year
                );

            }


            return String(
                a.title || ""
            ).localeCompare(
                String(
                    b.title || ""
                )
            );

        }
    );

}


// ==========================================================
// RESULT RENDERING
// ==========================================================

function renderResultCard(
    result
) {

    if (
        result.category ===
        "notes"
    ) {

        return `
            <article class="search-result-card notes-result">

                <div class="search-result-type">
                    Notes
                </div>

                <h3>
                    ${escapeHTML(
                        result.title
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        result.description
                    )}
                </p>

                <div class="search-meta">

                    ${
                        result.form
                            ? `<span>${escapeHTML(
                                formatForm(
                                    result.form
                            )
                            )}</span>`
                            : ""
                    }

                    ${
                        result.subject
                            ? `<span>${escapeHTML(
                                formatSubject(
                                    result.subject
                            )
                            )}</span>`
                            : ""
                    }

                    ${
                        result.syllabus
                            ? `<span>${escapeHTML(
                                result.syllabus === "old"
                                    ? "Old Syllabus"
                                    : "New Syllabus"
                            )}</span>`
                            : ""
                    }

                </div>

                <div class="search-result-bottom">

                    <strong>
                        TZS ${Number(
                            result.price || 0
                        ).toLocaleString()}
                    </strong>

                    <a
                        href="notes.html?form=${encodeURIComponent(
                            result.form || ""
                        )}"
                        class="search-action"
                    >
                        View Notes
                    </a>

                </div>

            </article>
        `;

    }


    if (
        result.category ===
        "topics"
    ) {

        return `
            <article class="search-result-card topic-result">

                <div class="search-result-type">
                    Topic
                </div>

                <h3>
                    ${escapeHTML(
                        result.title
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        result.description
                    )}
                </p>

                <div class="search-meta">

                    ${
                        result.form
                            ? `<span>${escapeHTML(
                                formatForm(
                                    result.form
                            )
                            )}</span>`
                            : ""
                    }

                    ${
                        result.subject
                            ? `<span>${escapeHTML(
                                formatSubject(
                                    result.subject
                            )
                            )}</span>`
                            : ""
                    }

                    ${
                        result.syllabus
                            ? `<span>${escapeHTML(
                                result.syllabus === "old"
                                    ? "Old Syllabus"
                                    : "New Syllabus"
                            )}</span>`
                            : ""
                    }

                </div>

                <div class="search-result-bottom">

                    <strong>
                        TZS ${Number(
                            result.price || 0
                        ).toLocaleString()}
                    </strong>

                    <a
                        href="notes.html?form=${encodeURIComponent(
                            result.form || ""
                        )}"
                        class="search-action"
                    >
                        View Notes
                    </a>

                </div>

            </article>
        `;

    }


    if (
        result.category ===
        "practical"
    ) {

        return `
            <article class="search-result-card practical-result">

                <div class="search-result-type">
                    Practical Notes
                </div>

                <h3>
                    ${escapeHTML(
                        result.title
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        result.description
                    )}
                </p>

                <div class="search-meta">

                    ${
                        result.level
                            ? `<span>${escapeHTML(
                                result.level === "olevel"
                                    ? "O-Level"
                                    : "A-Level"
                            )}</span>`
                            : ""
                    }

                    ${
                        result.subject
                            ? `<span>${escapeHTML(
                                formatSubject(
                                    result.subject
                            )
                            )}</span>`
                            : ""
                    }

                </div>

                <div class="search-result-bottom">

                    <strong>
                        TZS ${Number(
                            result.price || 0
                        ).toLocaleString()}
                    </strong>

                    <a
                        href="notes.html"
                        class="search-action"
                    >
                        View Notes
                    </a>

                </div>

            </article>
        `;

    }


    if (
        result.category ===
        "pastpapers"
    ) {

        return `
            <article class="search-result-card paper-result">

                <div class="search-result-type">
                    Past Paper
                </div>

                <h3>
                    ${escapeHTML(
                        result.title
                    )}
                </h3>

                <div class="search-meta">

                    ${
                        result.form
                            ? `<span>${escapeHTML(
                                formatForm(
                                    result.form
                            )
                            )}</span>`
                            : ""
                    }

                    ${
                        result.subject
                            ? `<span>${escapeHTML(
                                formatSubject(
                                    result.subject
                            )
                            )}</span>`
                            : ""
                    }

                    ${
                        result.year
                            ? `<span>${escapeHTML(
                                result.year
                            )}</span>`
                            : ""
                    }

                    ${
                        result.type
                            ? `<span>${escapeHTML(
                                formatPaperType(
                                    result.type
                            )
                            )}</span>`
                            : ""
                    }

                    ${
                        result.region
                            ? `<span>${escapeHTML(
                                formatRegion(
                                    result.region
                            )
                            )}</span>`
                            : ""
                    }

                    ${
                        result.specialExam
                            ? `<span>${escapeHTML(
                                result.specialExam
                            )}</span>`
                            : ""
                    }

                </div>

                <div class="search-result-bottom">

                    ${
                        result.file
                            ? `
                                <a
                                    href="${escapeHTML(
                                        result.file
                                    )}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="search-action"
                                >
                                    Open Paper
                                </a>
                            `
                            : `
                                <span class="search-unavailable">
                                    Paper unavailable
                                </span>
                            `
                    }

                </div>

            </article>
        `;

    }


    return "";

}


// ==========================================================
// CATEGORY COUNTS
// ==========================================================

function updateCategoryCounts(
    results
) {

    const all =
        document.querySelector(
            '[data-filter="all"]'
        );

    const notes =
        document.querySelector(
            '[data-filter="notes"]'
        );

    const topics =
        document.querySelector(
            '[data-filter="topics"]'
        );

    const practical =
        document.querySelector(
            '[data-filter="practical"]'
        );

    const papers =
        document.querySelector(
            '[data-filter="pastpapers"]'
        );


    if (
        all
    ) {
        all.textContent =
            `All (${results.length})`;
    }


    if (
        notes
    ) {

        notes.textContent =
            `Notes (${
                results.filter(
                    r =>
                        r.category ===
                        "notes"
                ).length
            })`;

    }


    if (
        topics
    ) {

        topics.textContent =
            `Topics (${
                results.filter(
                    r =>
                        r.category ===
                        "topics"
                ).length
            })`;

    }


    if (
        practical
    ) {

        practical.textContent =
            `Practical Notes (${
                results.filter(
                    r =>
                        r.category ===
                        "practical"
                ).length
            })`;

    }


    if (
        papers
    ) {

        papers.textContent =
            `Past Papers (${
                results.filter(
                    r =>
                        r.category ===
                        "pastpapers"
                ).length
            })`;

    }

}


// ==========================================================
// DISPLAY RESULTS
// ==========================================================

function displayResults(
    results,
    query
) {

    const container =
        document.getElementById(
            "searchResults"
        );


    const count =
        document.getElementById(
            "resultsCount"
        );


    const heading =
        document.getElementById(
            "searchHeading"
        );


    if (
        heading
    ) {

        heading.textContent =
            query
                ? `Search results for "${query}"`
                : "Search GEPAM";

    }


    if (
        count
    ) {

        count.textContent =
            `${results.length} result${
                results.length === 1
                    ? ""
                    : "s"
            } found.`;

    }


    updateCategoryCounts(
        results
    );


    if (
        !container
    ) {
        return;
    }


    if (
        !results.length
    ) {

        container.innerHTML = `

            <div class="no-search-results">

                <h3>
                    No results found
                </h3>

                <p>
                    Try another search such as
                    <strong>Form 4 Physics</strong>,
                    <strong>Waves</strong>,
                    <strong>2026 Mock</strong>
                    or
                    <strong>Chemistry Practical</strong>.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        results
            .map(
                renderResultCard
            )
            .join("");

}


// ==========================================================
// CATEGORY FILTER
// ==========================================================

function filterDisplayedResults(
    results,
    category
) {

    if (
        category ===
        "all"
    ) {

        return results;

    }


    return results.filter(
        result =>
            result.category ===
            category
    );

}


// ==========================================================
// RUN SEARCH
// ==========================================================

let currentSearchResults = [];

let currentSearchQuery = "";

let currentSearchCategory =
    "all";


function runSearch(
    query
) {

    const cleanQuery =
        String(
            query ?? ""
        ).trim();


    currentSearchQuery =
        cleanQuery;


    if (
        !cleanQuery
    ) {

        currentSearchResults = [];

        displayResults(
            [],
            ""
        );

        return;

    }


    const filters = {

        form:
            detectForm(
                cleanQuery
            ),

        subject:
            detectSubject(
                cleanQuery
            ),

        year:
            detectYear(
                cleanQuery
            ),

        paperType:
            detectPaperType(
                cleanQuery
            ),

        syllabus:
            detectSyllabus(
                cleanQuery
            ),

        specialExam:
            detectSpecialExam(
                cleanQuery
            )

    };


    const notesResults =
        buildNotesResults(
            cleanQuery,
            filters
        );


    const practicalResults =
        buildPracticalResults(
            cleanQuery,
            filters
        );


    const paperResults =
        buildPastPaperResults(
            cleanQuery,
            filters
        );


    currentSearchResults =
        sortResults(
            [
                ...notesResults,
                ...practicalResults,
                ...paperResults
            ]
        );


    currentSearchCategory =
        "all";


    displayResults(
        currentSearchResults,
        cleanQuery
    );

}


// ==========================================================
// SEARCH FORM
// ==========================================================

function setupSearchForm() {

    const form =
        document.getElementById(
            "searchForm"
        );


    const input =
        document.getElementById(
            "searchInput"
        );


    if (
        !form ||
        !input
    ) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            runSearch(
                input.value
            );


            const params =
                new URLSearchParams(
                    window.location.search
                );


            params.set(
                "q",
                input.value.trim()
            );


            const newUrl =
                `${window.location.pathname}?${params.toString()}`;


            window.history.replaceState(
                {},
                "",
                newUrl
            );

        }
    );

}


// ==========================================================
// CATEGORY BUTTONS
// ==========================================================

function setupCategoryFilters() {

    const buttons =
        document.querySelectorAll(
            "[data-filter]"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                function () {

                    currentSearchCategory =
                        button.dataset.filter ||
                        "all";


                    const filtered =
                        filterDisplayedResults(
                            currentSearchResults,
                            currentSearchCategory
                        );


                    displayResults(
                        filtered,
                        currentSearchQuery
                    );


                    buttons.forEach(
                        item => {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );

                }
            );

        }
    );

}


// ==========================================================
// LOAD QUERY FROM URL
// ==========================================================

function loadSearchFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const query =
        params.get(
            "q"
        );


    const input =
        document.getElementById(
            "searchInput"
        );


    if (
        query &&
        input
    ) {

        input.value =
            query;

        runSearch(
            query
        );

    }

}


// ==========================================================
// INITIALIZE
// ==========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupSearchForm();

        setupCategoryFilters();

        loadSearchFromURL();

    }
);
