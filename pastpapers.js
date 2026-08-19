/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS NAVIGATION ENGINE
   =========================================================

   STRUCTURE

   FORM 1–4
   Form
      ↓
   Subject
      ↓
   Type
      ↓
   NECTA / FTNA
      ↓
   Year
      ↓
   PDF

   FORM 5–6
   Form
      ↓
   Subject
      ↓
   Type
      ↓
   Region
      ↓
   Year
      ↓
   PDF

   IMPORTANT:
   - HATUBUNI regions
   - HATUBUNI years
   - HATUBUNI papers
   - Tunatumia data iliyopo window.pastPapers
   - PDF inatumia field ya "file" kutoka data.js
========================================================= */


/* =========================================================
   STATE
========================================================= */

const state = {

    level: "forms",

    form: null,

    subject: null,

    type: null,

    category: null,

    year: null

};


/* =========================================================
   ELEMENTS
========================================================= */

const container =
    document.getElementById("stepContainer");

const breadcrumb =
    document.getElementById("breadcrumb");

const backButton =
    document.getElementById("backButton");


/* =========================================================
   DATA
========================================================= */

function getData() {

    if (
        !window.pastPapers
    ) {

        console.error(
            "window.pastPapers haipo."
        );

        return [];

    }


    /*
     * Kama data ni array moja kwa moja
     */

    if (
        Array.isArray(
            window.pastPapers
        )
    ) {

        return window.pastPapers;

    }


    /*
     * Kama data imefungwa ndani ya object
     * tunajaribu keys zinazowezekana.
     */

    if (
        Array.isArray(
            window.pastPapers.papers
        )
    ) {

        return window.pastPapers.papers;

    }


    if (
        Array.isArray(
            window.pastPapers.data
        )
    ) {

        return window.pastPapers.data;

    }


    /*
     * Kama object yenye forms
     */

    const possibleArrays = [];

    Object.values(
        window.pastPapers
    ).forEach(
        value => {

            if (
                Array.isArray(value)
            ) {

                possibleArrays.push(
                    ...value
                );

            }

        }
    );


    return possibleArrays;

}


const papers = getData();


/* =========================================================
   NORMALIZE
   ========================================================= */

function clean(value) {

    return String(
        value ?? ""
    )
    .trim()
    .toLowerCase()
    .replaceAll(
        "-",
        "_"
    )
    .replaceAll(
        " ",
        "_"
    );

}


/* =========================================================
   FORM NORMALIZATION
========================================================= */

function normalizeForm(value) {

    const v =
        clean(value);

    if (
        /^form[_]?1$/.test(v) ||
        v === "1"
    ) return "form1";

    if (
        /^form[_]?2$/.test(v) ||
        v === "2"
    ) return "form2";

    if (
        /^form[_]?3$/.test(v) ||
        v === "3"
    ) return "form3";

    if (
        /^form[_]?4$/.test(v) ||
        v === "4"
    ) return "form4";

    if (
        /^form[_]?5$/.test(v) ||
        v === "5"
    ) return "form5";

    if (
        /^form[_]?6$/.test(v) ||
        v === "6"
    ) return "form6";

    return v;

}


/* =========================================================
   GET FORM FROM PAPER
========================================================= */

function getPaperForm(
    paper
) {

    return normalizeForm(
        paper.form ||
        paper.class ||
        paper.kidato ||
        paper.level ||
        ""
    );

}


/* =========================================================
   SUBJECT
========================================================= */

function normalizeSubject(
    value
) {

    const v =
        clean(value);

    if (
        v.includes("physics")
    ) {

        return "physics";

    }

    if (
        v.includes("chemistry")
    ) {

        return "chemistry";

    }

    return v;

}


/* =========================================================
   TYPE LABEL
========================================================= */

function formatType(
    value
) {

    const v =
        clean(value);

    const names = {

        annual:
            "Annual",

        terminal:
            "Terminal",

        midterm:
            "Midterm",

        joint:
            "Joint",

        mock:
            "Mock",

        pre_necta:
            "Pre-NECTA",

        prenecta:
            "Pre-NECTA",

        pre_necta_exam:
            "Pre-NECTA",

        necta:
            "NECTA",

        ftna:
            "FTNA"

    };


    return names[v]
        || String(
            value || ""
        )
        .replaceAll(
            "_",
            " "
        )
        .replace(
            /\b\w/g,
            char =>
                char.toUpperCase()
        );

}


/* =========================================================
   CATEGORY LABEL
========================================================= */

function formatCategory(
    value
) {

    const v =
        clean(value);

    if (
        v === "necta"
    ) {

        return "NECTA";

    }

    if (
        v === "ftna"
    ) {

        return "FTNA";

    }

    return String(
        value || ""
    )
    .replaceAll(
        "_",
        " "
    )
    .replace(
        /\b\w/g,
        char =>
            char.toUpperCase()
    );

}


/* =========================================================
   UNIQUE VALUES
========================================================= */

function uniqueValues(
    list
) {

    const result = [];

    const seen =
        new Set();


    list.forEach(
        value => {

            const key =
                clean(value);

            if (
                !key ||
                seen.has(key)
            ) {

                return;

            }

            seen.add(key);

            result.push(
                value
            );

        }
    );


    return result;

}


/* =========================================================
   FILTER FORM
========================================================= */

function papersForForm(
    form
) {

    return papers.filter(
        paper =>
            getPaperForm(
                paper
            ) === form
    );

}


/* =========================================================
   FILTER SUBJECT
========================================================= */

function papersForSubject(
    form,
    subject
) {

    return papersForForm(
        form
    )
    .filter(
        paper =>
            normalizeSubject(
                paper.subject
            ) ===
            normalizeSubject(
                subject
            )
    );

}


/* =========================================================
   TYPES FROM REAL DATA
========================================================= */

function getTypes(
    form,
    subject
) {

    const list =
        papersForSubject(
            form,
            subject
        )
        .map(
            paper =>
                paper.type
        );


    return uniqueValues(
        list
    );

}


/* =========================================================
   FORM 1–4 CATEGORY
========================================================= */

function getCategoriesForOLevel(
    form,
    subject,
    type
) {

    const list =
        papersForSubject(
            form,
            subject
        )
        .filter(
            paper =>
                clean(
                    paper.type
                ) ===
                clean(
                    type
                )
        )
        .map(
            paper =>
                paper.category ||
                paper.exam ||
                paper.board ||
                paper.source
        );


    /*
     * Kama category ipo kwenye data
     */

    const categories =
        uniqueValues(
            list
        );


    /*
     * Kama data yako imetumia type yenyewe
     * kama necta / ftna, tumia type.
     */

    if (
        categories.length
    ) {

        return categories;

    }


    const typeClean =
        clean(type);


    if (
        typeClean ===
        "necta"
    ) {

        return [
            "NECTA"
        ];

    }


    if (
        typeClean ===
        "ftna"
    ) {

        return [
            "FTNA"
        ];

    }


    /*
     * Search ndani ya title/file
     * bila kutengeneza categories za uongo.
     */

    const inferred = [];

    const relevant =
        papersForSubject(
            form,
            subject
        )
        .filter(
            paper =>
                clean(
                    paper.type
                ) ===
                typeClean
        );


    relevant.forEach(
        paper => {

            const text =
                (
                    String(
                        paper.title || ""
                    ) +
                    " " +
                    String(
                        paper.file || ""
                    )
                )
                .toLowerCase();


            if (
                text.includes(
                    "necta"
                )
            ) {

                inferred.push(
                    "NECTA"
                );

            }


            if (
                text.includes(
                    "ftna"
                )
            ) {

                inferred.push(
                    "FTNA"
                );

            }

        }
    );


    return uniqueValues(
        inferred
    );

}


/* =========================================================
   REGIONS FROM REAL DATA
========================================================= */

function getRegions(
    form,
    subject,
    type
) {

    return uniqueValues(

        papersForSubject(
            form,
            subject
        )
        .filter(
            paper =>
                clean(
                    paper.type
                ) ===
                clean(
                    type
                )
        )
        .map(
            paper =>
                paper.region ||
                paper.mkoa
        )

    );

}


/* =========================================================
   YEARS
========================================================= */

function getYears(
    form,
    subject,
    type,
    category
) {

    let list =
        papersForSubject(
            form,
            subject
        );


    list =
        list.filter(
            paper =>
                clean(
                    paper.type
                ) ===
                clean(
                    type
                )
        );


    if (
        category
    ) {

        const categoryClean =
            clean(category);


        const filtered =
            list.filter(
                paper => {

                    const paperCategory =
                        clean(
                            paper.category ||
                            paper.exam ||
                            paper.board ||
                            paper.source ||
                            ""
                        );


                    if (
                        paperCategory ===
                        categoryClean
                    ) {

                        return true;

                    }


                    /*
                     * NECTA / FTNA inaweza kuwa
                     * ndani ya title/file.
                     */

                    const text =
                        (
                            String(
                                paper.title ||
                                ""
                            ) +
                            " " +
                            String(
                                paper.file ||
                                ""
                            )
                        )
                        .toLowerCase();


                    return text.includes(
                        categoryClean
                    );

                }
            );


        if (
            filtered.length
        ) {

            list =
                filtered;

        }

    }


    /*
     * Kwa Form 5–6 lazima region
     * ichujwe.
     */

    if (
        state.form === "form5" ||
        state.form === "form6"
    ) {

        if (
            state.category
        ) {

            list =
                list.filter(
                    paper =>
                        clean(
                            paper.region ||
                            paper.mkoa
                        ) ===
                        clean(
                            state.category
                        )
                );

        }

    }


    return uniqueValues(

        list.map(
            paper =>
                paper.year
        )
        .filter(
            year =>
                year !==
                undefined &&
                year !==
                null &&
                String(
                    year
                ).trim() !== ""
        )
        .map(
            year =>
                String(
                    year
                )
        )

    )
    .sort(
        (a, b) =>
            Number(b) -
            Number(a)
    );

}


/* =========================================================
   PAPERS FOR YEAR
========================================================= */

function getFinalPapers() {

    let list =
        papersForSubject(
            state.form,
            state.subject
        );


    list =
        list.filter(
            paper =>
                clean(
                    paper.type
                ) ===
                clean(
                    state.type
                )
        );


    if (
        state.form ===
            "form1" ||
        state.form ===
            "form2" ||
        state.form ===
            "form3" ||
        state.form ===
            "form4"
    ) {

        /*
         * NECTA / FTNA
         */

        if (
            state.category
        ) {

            const category =
                clean(
                    state.category
                );


            list =
                list.filter(
                    paper => {

                        const paperCategory =
                            clean(
                                paper.category ||
                                paper.exam ||
                                paper.board ||
                                paper.source ||
                                ""
                            );


                        if (
                            paperCategory ===
                            category
                        ) {

                            return true;

                        }


                        const text =
                            (
                                String(
                                    paper.title ||
                                    ""
                                ) +
                                " " +
                                String(
                                    paper.file ||
                                    ""
                                )
                            )
                            .toLowerCase();


                        return text.includes(
                            category
                        );

                    }
                );

        }

    }


    else {

        /*
         * FORM 5–6
         * category = REGION
         */

        if (
            state.category
        ) {

            list =
                list.filter(
                    paper =>
                        clean(
                            paper.region ||
                            paper.mkoa
                        ) ===
                        clean(
                            state.category
                        )
                );

        }

    }


    list =
        list.filter(
            paper =>
                String(
                    paper.year
                ) ===
                String(
                    state.year
                )
        );


    return list;

}


/* =========================================================
   HISTORY
========================================================= */

function saveHistory() {

    history.pushState(
        {
            level:
                state.level,

            form:
                state.form,

            subject:
                state.subject,

            type:
                state.type,

            category:
                state.category,

            year:
                state.year
        },
        "",
        window.location.href
    );

}


/* =========================================================
   BREADCRUMB
========================================================= */

function updateBreadcrumb() {

    const parts = [
        "Past Papers"
    ];


    if (
        state.form
    ) {

        parts.push(
            state.form
                .replace(
                    "form",
                    "Form "
                )
        );

    }


    if (
        state.subject
    ) {

        parts.push(
            state.subject
                .charAt(0)
                .toUpperCase() +
            state.subject.slice(1)
        );

    }


    if (
        state.type
    ) {

        parts.push(
            formatType(
                state.type
            )
        );

    }


    if (
        state.category
    ) {

        parts.push(
            formatCategory(
                state.category
            )
        );

    }


    if (
        state.year
    ) {

        parts.push(
            state.year
        );

    }


    breadcrumb.innerHTML =
        parts.map(
            (part, index) => {

                if (
                    index === 0
                ) {

                    return `
                        <span>
                            ${part}
                        </span>
                    `;

                }


                return `
                    <span class="separator">
                        ›
                    </span>
                    <span>
                        ${part}
                    </span>
                `;

            }
        )
        .join("");

}


/* =========================================================
   BACK BUTTON
========================================================= */

function updateBackButton() {

    if (
        state.level ===
        "forms"
    ) {

        backButton.style.display =
            "none";

    }

    else {

        backButton.style.display =
            "inline-flex";

    }

}


/* =========================================================
   RENDER FORMS
========================================================= */

function renderForms() {

    state.level =
        "forms";

    state.form =
        null;

    state.subject =
        null;

    state.type =
        null;

    state.category =
        null;

    state.year =
        null;


    updateBreadcrumb();

    updateBackButton();


    let html = `

        <div class="step-title">

            <h2>
                Chagua Kidato
            </h2>

            <p>
                Chagua kidato unachotaka
                kupata Past Papers.
            </p>

        </div>

        <div class="selection-grid">
    `;


    for (
        let i = 1;
        i <= 6;
        i++
    ) 
        html += `

            <div class="selection-card">

                <div>

                    <h3>
                        Form ${i}
                    </h3>

                    <p>
                        Physics & Chemistry
                        Past Papers
                    </p>

                </div>

                <button
                    class="open-btn"
                    onclick="openForm('form${i}')">

                    FUNGUA FORM ${i}

                </button>

            </div>

        `;

    }


    html += `
        </div>
    `;


    container.innerHTML =
        html;

}


/* =========================================================
   OPEN FORM
========================================================= */

function openForm(
    form
) {

    state.level =
        "subjects";

    state.form =
        form;

    state.subject =
        null;

    state.type =
        null;

    state.category =
        null;

    state.year =
        null;


    saveHistory();

    renderSubjects();

}


/* =========================================================
   SUBJECTS
========================================================= */

function renderSubjects() {

    updateBreadcrumb();

    updateBackButton();


    const formPapers =
        papersForForm(
            state.form
        );


    const subjects =
        uniqueValues(

            formPapers.map(
                paper =>
                    normalizeSubject(
                        paper.subject
                    )
            )

        );


    let html = `

        <div class="step-title">

            <h2>
                ${state.form
                    .replace(
                        "form",
                        "Form "
                    )}
            </h2>

            <p>
                Chagua somo.
            </p>

        </div>

        <div class="selection-grid">
    `;


    /*
     * Kama data ina Physics/Chemistry,
     * zitaonekana.
     */

    subjects.forEach(
        subject => {

            const icon =
                subject ===
                "physics"
                ? "⚛️"
                : "🧪";


            html += `

                <div class="selection-card subject-card">

                    <div>

                        <div class="subject-icon">
                            ${icon}
                        </div>

                        <h3>
                            ${subject
                                .charAt(0)
                                .toUpperCase() +
                              subject.slice(1)}
                        </h3>

                        <p>
                            Past Papers
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        onclick="openSubject('${subject}')">

                        FUNGUA
                        ${subject.toUpperCase()}

                    </button>

                </div>

            `;

        }
    );


    /*
     * Fallback kama hakuna subject
     */

    if (
        subjects.length === 0
    ) {

        html += `

            <div class="empty-card">

                <h3>
                    ⚠️ Hakuna Subject
                </h3>

                <p>
                    Hakuna records za
                    ${state.form}
                    kwenye data.js.
                </p>

            </div>

        `;

    }


    html += `
        </div>
    `;


    container.innerHTML =
        html;

}


/* =========================================================
   OPEN SUBJECT
========================================================= */

function openSubject(
    subject
) {

    state.level =
        "types";

    state.subject =
        subject;

    state.type =
        null;

    state.category =
        null;

    state.year =
        null;


    saveHistory();

    renderTypes();

}


/* =========================================================
   TYPES
========================================================= */

function renderTypes() {

    updateBreadcrumb();

    updateBackButton();


    const types =
        getTypes(
            state.form,
            state.subject
        );


    let html = `

        <div class="step-title">

            <h2>
                ${state.subject
                    .charAt(0)
                    .toUpperCase() +
                  state.subject.slice(1)}
            </h2>

            <p>
                Chagua aina ya Past Paper.
            </p>

        </div>

        <div class="selection-grid">
    `;


    types.forEach(
        type => {

            html += `

                <div class="selection-card">

                    <div>

                        <h3>
                            📚
                            ${formatType(type)}
                        </h3>

                        <p>
                            Fungua ${formatType(type)}
                            kuona papers zilizopo.
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        onclick="openType('${String(type)
                            .replaceAll(
                                "'",
                                "\\'"
                            )}')">

                        FUNGUA

                    </button>

                </div>

            `;

        }
    );


    if (
        types.length === 0
    ) {

        html += `

            <div class="empty-card">

                <h3>
                    ⚠️ Hakuna papers
                </h3>

                <p>
                    Hakuna Type iliyopatikana
                    kwenye data yako kwa
                    ${state.form}
                    ${state.subject}.
                </p>

            </div>

        `;

    }


    html += `
        </div>
    `;


    container.innerHTML =
        html;

}


/* =========================================================
   OPEN TYPE
========================================================= */

function openType(
    type
) {

    state.level =
        "category";

    state.type =
        type;

    state.category =
        null;

    state.year =
        null;


    saveHistory();


    /*
     * FORM 1–4
     */

    if (
        state.form === "form1" ||
        state.form === "form2" ||
        state.form === "form3" ||
        state.form === "form4"
    ) {

        renderOLevelCategories();

    }

    /*
     * FORM 5–6
     */

    else {

        renderRegions();

    }

}


/* =========================================================
   FORM 1–4
   NECTA / FTNA
========================================================= */

function renderOLevelCategories() {

    updateBreadcrumb();

    updateBackButton();


    const categories =
        getCategoriesForOLevel(
            state.form,
            state.subject,
            state.type
        );


    let html = `

        <div class="step-title">

            <h2>
                ${formatType(
                    state.type
                )}
            </h2>

            <p>
                Chagua mfumo wa examination.
            </p>

        </div>

        <div class="selection-grid">
    `;


    categories.forEach(
        category => {

            html += `

                <div class="selection-card">

                    <div>

                        <h3>
                            🎓
                            ${formatCategory(
                                category
                            )}
                        </h3>

                        <p>
                            Past Papers za
                            ${formatCategory(
                                category
                            )}.
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        onclick="openCategory('${String(category)
                            .replaceAll(
                                "'",
                                "\\'"
                            )}')">

                        FUNGUA

                    </button>

                </div>

            `;

        }
    );


    if (
        categories.length === 0
    ) {

        /*
         * Kama type yenyewe ni NECTA/FTNA,
         * category inakuwa moja kwa moja.
         */

        const t =
            clean(
                state.type
            );


        if (
            t === "necta" ||
            t === "ftna"
        ) {

            openCategory(
                t === "necta"
                    ? "NECTA"
                    : "FTNA"
            );

            return;

        }


        html += `

            <div class="empty-card">

                <h3>
                    ⚠️ Hakuna NECTA / FTNA
                </h3>

                <p>
                    Data ya ${formatType(
                        state.type
                    )}
                    haina NECTA au FTNA
                    inayoweza kuonyeshwa.
                </p>

            </div>

        `;

    }


    html += `
        </div>
    `;


    container.innerHTML =
        html;

}


/* =========================================================
   FORM 5–6 REGIONS
   DATA ONLY
========================================================= */

function renderRegions() {

    updateBreadcrumb();

    updateBackButton();


    const regions =
        getRegions(
            state.form,
            state.subject,
            state.type
        );


    let html = `

        <div class="step-title">

            <h2>
                ${formatType(
                    state.type
                )}
            </h2>

            <p>
                Chagua mkoa.
            </p>

        </div>

        <div class="selection-grid">
    `;


    regions.forEach(
        region => {

            html += `

                <div class="selection-card">

                    <div>

                        <h3>
                            📍
                            ${formatCategory(
                                region
                            )}
                        </h3>

                        <p>
                            Past Papers za
                            ${formatCategory(
                                region
                            )}.
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        onclick="openCategory('${String(region)
                            .replaceAll(
                                "'",
                                "\\'"
                            )}')">

                        FUNGUA

                    </button>

                </div>

            `;

        }
    );


    if (
        regions.length === 0
    ) {

        html += `

            <div class="empty-card">

                <h3>
                    ⚠️ Hakuna Mkoa
                </h3>

                <p>
                    Hakuna region iliyopo
                    kwenye data.js kwa
                    ${state.form},
                    ${state.subject},
                    ${formatType(
                        state.type
                    )}.
                </p>

            </div>

        `;

    }


    html += `
        </div>
    `;


    container.innerHTML =
        html;

}


/* =========================================================
   CATEGORY → YEARS
========================================================= */

function openCategory(
    category
) {

    state.level =
        "years";

    state.category =
        category;

    state.year =
        null;


    saveHistory();

    renderYears();

}


/* =========================================================
   YEARS
========================================================= */

function renderYears() {

    updateBreadcrumb();

    updateBackButton();


    const years =
        getYears(
            state.form,
            state.subject,
            state.type,
            state.category
        );


    let html = `

        <div class="step-title">

            <h2>
                ${formatCategory(
                    state.category
                )}
            </h2>

            <p>
                Chagua mwaka.
            </p>

        </div>

        <div class="selection-grid">
    `;


    years.forEach(
        year => {

            html += `

                <div class="selection-card">

                    <div>

                        <h3>
                            📅
                            ${year}
                        </h3>

                        <p>
                            Past Papers za
                            mwaka ${year}.
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        onclick="openYear('${year}')">

                        FUNGUA ${year}

                    </button>

                </div>

            `;

        }
    );


    if (
        years.length === 0
    ) {

        html += `

            <div class="empty-card">

                <h3>
                    ⚠️ Hakuna Year
                </h3>

                <p>
                    Hakuna mwaka wenye
                    paper inayolingana
                    na uchaguzi wako.
                </p>

            </div>

        `;

    }


    html += `
        </div>
    `;


    container.innerHTML =
        html;

}


/* =========================================================
   YEAR → PDF
========================================================= */

function openYear(
    year
) {

    state.level =
        "papers";

    state.year =
        year;


    saveHistory();

    renderPapers();

}


/* =========================================================
   FINAL PDF LIST
========================================================= */

function renderPapers() {

    updateBreadcrumb();

    updateBackButton();


    const finalPapers =
        getFinalPapers();


    let html = `

        <div class="step-title">

            <h2>
                📄 Past Papers
            </h2>

            <p>
                Chagua paper unayotaka
                kufungua.
            </p>

        </div>

        <div class="selection-grid">
    `;


    finalPapers.forEach(
        (paper, index) => {

            const file =
                String(
                    paper.file ||
                    paper.pdf ||
                    paper.url ||
                    ""
                ).trim();


            if (
                !file
            ) {

                return;

            }


            const title =
                paper.title ||
                `Past Paper ${index + 1}`;


            html += `

                <div class="selection-card topic-card">

                    <div>

                        <h3>
                            📄
                            ${escapeHTML(
                                title
                            )}
                        </h3>

                        <p>
                            ${formatCategory(
                                state.form
                            )}
                            •
                            ${escapeHTML(
                                state.subject
                            )}
                            •
                            ${escapeHTML(
                                state.year
                            )}
                        </p>

                    </div>

                    <a
                        class="open-btn"
                        href="${escapeAttribute(
                            file
                        )}"
                        target="_blank"
                        rel="noopener">

                        📥 FUNGUA PDF

                    </a>

                </div>

            `;

        }
    );


    if (
        finalPapers.filter(
            paper =>
                String(
                    paper.file ||
                    paper.pdf ||
                    paper.url ||
                    ""
                ).trim()
        ).length === 0
    ) {

        html += `

            <div class="empty-card">

                <h3>
                    ⚠️ PDF Haijapatikana
                </h3>

                <p>
                    Record ipo lakini
                    field ya <b>file</b>
                    haina path ya PDF.
                </p>

                <p>
                    Angalia record hii
                    kwenye
                    <b>pastpapers.data.js</b>.
                </p>

            </div>

        `;

    }


    html += `
        </div>
    `;


    container.innerHTML =
        html;

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(
    value
) {

    return String(
        value
    )
    .replaceAll(
        "&",
        "&amp;"
    )
    .replaceAll(
        "<",
        "&lt;"
    )
    .replaceAll(
        ">",
        "&gt;"
    )
    .replaceAll(
        '"',
        "&quot;"
    )
    .replaceAll(
        "'",
        "&#039;"
    );

}


/* =========================================================
   ESCAPE ATTRIBUTE
========================================================= */

function escapeAttribute(
    value
) {

    return escapeHTML(
        value
    );

}


/* =========================================================
   BACK
========================================================= */

function goBack() {

    history.back();

}


/* =========================================================
   BROWSER / ANDROID BACK
========================================================= */

window.addEventListener(
    "popstate",
    function(event) {

        const s =
            event.state;


        if (
            !s
        ) {

            renderForms();

            return;

        }


        state.level =
            s.level ||
            "forms";

        state.form =
            s.form ||
            null;

        state.subject =
            s.subject ||
            null;

        state.type =
            s.type ||
            null;

        state.category =
            s.category ||
            null;

        state.year =
            s.year ||
            null;


        renderCurrent();

    }
);


/* =========================================================
   RENDER CURRENT
========================================================= */

function renderCurrent() {

    if (
        state.level ===
        "forms"
    ) {

        renderForms();

    }

    else if (
        state.level ===
        "subjects"
    ) {

        renderSubjects();

    }

    else if (
        state.level ===
        "types"
    ) {

        renderTypes();

    }

    else if (
        state.level ===
        "category"
    ) {

        if (
            state.form === "form1" ||
            state.form === "form2" ||
            state.form === "form3" ||
            state.form === "form4"
        ) {

            renderOLevelCategories();

        }

        else {

            renderRegions();

        }

    }

    else if (
        state.level ===
        "years"
    ) {

        renderYears();

    }

    else if (
        state.level ===
        "papers"
    ) {

        renderPapers();

    }

    else {

        renderForms();

    }

}


/* =========================================================
   SIDEBAR
========================================================= */

function toggleMenu() {

    const sidebar =
        document.getElementById(
            "sidebarMenu"
        );

    const overlay =
        document.getElementById(
            "menuOverlay"
        );


    if (
        !sidebar
    ) return;


    sidebar.classList.toggle(
        "active"
    );


    if (
        overlay
    ) {

        overlay.style.display =
            sidebar.classList.contains(
                "active"
            )
            ? "block"
            : "none";

    }

}


/* =========================================================
   START
========================================================= */

function initialize() {

    /*
     * Hakikisha DOM iko tayari
     */

    if (
        !container
    ) {

        console.error(
            "stepContainer haipo kwenye HTML."
        );

        return;

    }


    /*
     * Kama data haijafika
     */

    if (
        !Array.isArray(
            papers
        ) ||
        papers.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-card">

                <h3>
                    ⚠️ Past Paper Data Error
                </h3>

                <p>
                    pastpapers.data.js
                    haijasomeka au
                    window.pastPapers
                    haina records.
                </p>

                <p>
                    Hakikisha files zipo
                    pamoja:
                </p>

                <p>
                    <b>pastpapers.html</b><br>
                    <b>pastpapers.data.js</b><br>
                    <b>pastpapers.js</b>
                </p>

            </div>

        `;

        return;

    }


    /*
     * URL inaweza kuwa na form
     */

    const params =
        new URLSearchParams(
            window.location.search
        );


    const requestedForm =
        params.get("form");


    if (
        requestedForm &&
        /^form[1-6]$/.test(
            requestedForm
        )
    ) {

        state.level =
            "subjects";

        state.form =
            requestedForm;


        history.replaceState(
            {
                level:
                    "subjects",

                form:
                    requestedForm
            },
            "",
            window.location.href
        );


        renderSubjects();

        return;

    }


    /*
     * START
     */

    history.replaceState(
        {
            level:
                "forms"
        },
        "",
        window.location.href
    );


    renderForms();

}


/* =========================================================
   RUN
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialize
    );

}

else {

    initialize();

}
