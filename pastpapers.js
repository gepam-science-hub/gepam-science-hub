/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS NAVIGATION ENGINE

   STRUCTURE:

   FORM
      ↓
   SUBJECT
      ↓
   TYPE
      ↓
   REGION
      ↓
   YEAR
      ↓
   PDF

   IMPORTANT:
   - Haitumii idadi ya papers.
   - Haitaki old/new syllabus.
   - Inatumia window.pastPapers.
   - Inajaribu kusoma structures tofauti za data.
========================================================= */


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentState = {

    level: "forms",

    form: null,

    subject: null,

    type: null,

    region: null,

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

let papers = [];


/* =========================================================
   FORM CONFIG
========================================================= */

const forms = {

    form1: {
        name: "Form 1",
        icon: "📘"
    },

    form2: {
        name: "Form 2",
        icon: "📗"
    },

    form3: {
        name: "Form 3",
        icon: "📙"
    },

    form4: {
        name: "Form 4",
        icon: "📕"
    },

    form5: {
        name: "Form 5",
        icon: "📔"
    },

    form6: {
        name: "Form 6",
        icon: "📓"
    }

};


/* =========================================================
   NORMALIZE TEXT
========================================================= */

function cleanText(value) {

    if (
        value === undefined ||
        value === null
    ) {

        return "";

    }


    return String(value)
        .trim();

}


/* =========================================================
   NORMALIZE FORM
========================================================= */

function normalizeForm(value) {

    const text =
        cleanText(value).toLowerCase();


    if (!text) {

        return "";

    }


    const match =
        text.match(/form[\s_-]*(1|2|3|4|5|6)/i);


    if (match) {

        return "form" + match[1];

    }


    const numberMatch =
        text.match(/^([1-6])$/);


    if (numberMatch) {

        return "form" + numberMatch[1];

    }


    return text;

}


/* =========================================================
   NORMALIZE SUBJECT
========================================================= */

function normalizeSubject(value) {

    const text =
        cleanText(value).toLowerCase();


    if (
        text.includes("physics") ||
        text.includes("phy")
    ) {

        return "Physics";

    }


    if (
        text.includes("chemistry") ||
        text.includes("chem")
    ) {

        return "Chemistry";

    }


    return cleanText(value);

}


/* =========================================================
   NORMALIZE TYPE
========================================================= */

function normalizeType(value) {

    const text =
        cleanText(value)
            .toLowerCase()
            .replace(/[_-]+/g, " ")
            .trim();


    if (!text) {

        return "";

    }


    if (text.includes("annual")) {

        return "Annual";

    }


    if (text.includes("terminal")) {

        return "Terminal";

    }


    if (text.includes("midterm")) {

        return "Midterm";

    }


    if (text.includes("mock")) {

        return "Mock";

    }


    if (text.includes("joint")) {

        return "Joint";

    }


    if (
        text.includes("pre necta") ||
        text.includes("prenecta") ||
        text.includes("pre-necta")
    ) {

        return "Pre-NECTA";

    }


    if (
        text === "necta" ||
        text.includes("necta")
    ) {

        return "NECTA";

    }


    return cleanText(value);

}


/* =========================================================
   FIND VALUE FROM OBJECT
========================================================= */

function getFirstValue(
    object,
    keys
) {

    if (
        !object ||
        typeof object !== "object"
    ) {

        return "";

    }


    for (
        const key of keys
    ) {

        if (
            object[key] !== undefined &&
            object[key] !== null &&
            object[key] !== ""
        ) {

            return object[key];

        }

    }


    return "";

}


/* =========================================================
   EXTRACT FORM FROM FILE PATH
========================================================= */

function formFromPath(file) {

    const path =
        cleanText(file)
            .toLowerCase();


    const match =
        path.match(
            /form[\s_-]*(1|2|3|4|5|6)/
        );


    if (match) {

        return "form" + match[1];

    }


    return "";

}


/* =========================================================
   EXTRACT SUBJECT FROM FILE PATH
========================================================= */

function subjectFromPath(file) {

    const path =
        cleanText(file)
            .toLowerCase();


    if (
        path.includes("/physics/") ||
        path.includes("\\physics\\") ||
        path.includes("physics")
    ) {

        return "Physics";

    }


    if (
        path.includes("/chemistry/") ||
        path.includes("\\chemistry\\") ||
        path.includes("chemistry")
    ) {

        return "Chemistry";

    }


    return "";

}


/* =========================================================
   NORMALIZE RECORD
========================================================= */

function normalizeRecord(record) {

    if (
        !record ||
        typeof record !== "object"
    ) {

        return null;

    }


    const file =
        getFirstValue(
            record,
            [
                "file",
                "pdf",
                "url",
                "path",
                "href",
                "download"
            ]
        );


    if (!file) {

        return null;

    }


    let form =
        getFirstValue(
            record,
            [
                "form",
                "class",
                "level",
                "grade"
            ]
        );


    let subject =
        getFirstValue(
            record,
            [
                "subject",
                "subj"
            ]
        );


    let type =
        getFirstValue(
            record,
            [
                "type",
                "paperType",
                "paper_type",
                "category",
                "examType",
                "exam_type"
            ]
        );


    let region =
        getFirstValue(
            record,
            [
                "region",
                "mkoa",
                "location"
            ]
        );


    let year =
        getFirstValue(
            record,
            [
                "year",
                "Year"
            ]
        );


    const title =
        getFirstValue(
            record,
            [
                "title",
                "name",
                "paper",
                "label"
            ]
        );


    /* -----------------------------------------------------
       FALLBACK FROM FILE PATH
    ----------------------------------------------------- */

    if (!form) {

        form =
            formFromPath(file);

    }


    if (!subject) {

        subject =
            subjectFromPath(file);

    }


    /* -----------------------------------------------------
       IF TITLE CONTAINS SUBJECT
    ----------------------------------------------------- */

    if (!subject && title) {

        subject =
            normalizeSubject(title);

    }


    /* -----------------------------------------------------
       IF TYPE IS MISSING, CHECK PATH/TITLE
    ----------------------------------------------------- */

    if (!type) {

        type =
            normalizeType(
                file + " " + title
            );

    }


    /* -----------------------------------------------------
       RETURN
    ----------------------------------------------------- */

    return {

        form:
            normalizeForm(form),

        subject:
            normalizeSubject(subject),

        type:
            normalizeType(type),

        region:
            cleanText(region),

        year:
            cleanText(year),

        title:
            title ||
            "Past Paper",

        file:
            String(file)

    };

}


/* =========================================================
   FLATTEN DATA
========================================================= */

function flattenData(
    value,
    output = []
) {

    if (!value) {

        return output;

    }


    if (Array.isArray(value)) {

        value.forEach(
            item => {

                if (
                    item &&
                    typeof item === "object" &&
                    !Array.isArray(item)
                ) {

                    const record =
                        normalizeRecord(item);


                    if (record) {

                        output.push(record);

                    }


                    /*
                     * Also search nested arrays/objects.
                     */

                    Object.keys(item)
                        .forEach(key => {

                            const child =
                                item[key];


                            if (
                                child &&
                                typeof child === "object"
                            ) {

                                flattenData(
                                    child,
                                    output
                                );

                            }

                        });

                }

                else if (
                    Array.isArray(item)
                ) {

                    flattenData(
                        item,
                        output
                    );

                }

            }
        );


        return output;

    }


    if (
        typeof value === "object"
    ) {

        /*
         * Try object itself as record.
         */

        const record =
            normalizeRecord(value);


        if (record) {

            output.push(record);

        }


        /*
         * Search children.
         */

        Object.keys(value)
            .forEach(key => {

                const child =
                    value[key];


                if (
                    child &&
                    typeof child === "object"
                ) {

                    flattenData(
                        child,
                        output
                    );

                }

            });

    }


    return output;

}


/* =========================================================
   LOAD DATA
========================================================= */

function loadData() {

    /*
     * Check if data exists.
     */

    if (
        typeof window.pastPapers ===
        "undefined"
    ) {

        showDataError();

        return false;

    }


    papers = [];


    flattenData(
        window.pastPapers,
        papers
    );


    /*
     * Remove duplicates.
     */

    const seen =
        new Set();


    papers =
        papers.filter(
            paper => {

                const key =
                    [
                        paper.form,
                        paper.subject,
                        paper.type,
                        paper.region,
                        paper.year,
                        paper.file
                    ].join("|");


                if (
                    seen.has(key)
                ) {

                    return false;

                }


                seen.add(key);

                return true;

            }
        );


    if (
        papers.length === 0
    ) {

        showDataError(
            "Data imeonekana lakini hakuna PDF records zilizopatikana."
        );

        return false;

    }


    return true;

}


/* =========================================================
   DATA ERROR
========================================================= */

function showDataError(
    message
) {

    const text =
        message ||
        "pastpapers.data.js haijasomeka au window.pastPapers haipo.";


    container.innerHTML = `

        <div class="gp-error-card">

            <div class="gp-error-icon">
                ⚠️
            </div>

            <h2>
                Past Paper Data Error
            </h2>

            <p>
                ${text}
            </p>

            <div class="gp-error-files">

                <strong>
                    Hakikisha files hizi zipo:
                </strong>

                <span>
                    pastpapers.html
                </span>

                <span>
                    pastpapers.data.js
                </span>

                <span>
                    pastpapers.js
                </span>

                <span>
                    pastpapers.css
                </span>

            </div>

        </div>

    `;


    backButton.style.display =
        "none";

}


/* =========================================================
   BREADCRUMB
========================================================= */

function updateBreadcrumb() {

    const parts = [
        "📚 Past Papers"
    ];


    if (
        currentState.form
    ) {

        parts.push(
            forms[
                currentState.form
            ]?.name ||
            currentState.form
        );

    }


    if (
        currentState.subject
    ) {

        parts.push(
            currentState.subject
        );

    }


    if (
        currentState.type
    ) {

        parts.push(
            currentState.type
        );

    }


    if (
        currentState.region
    ) {

        parts.push(
            currentState.region
        );

    }


    if (
        currentState.year
    ) {

        parts.push(
            currentState.year
        );

    }


    breadcrumb.innerHTML =
        parts.map(
            (part, index) => {

                if (
                    index === 0
                ) {

                    return `
                        <span class="current">
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
        ).join("");

}


/* =========================================================
   BACK BUTTON
========================================================= */

function updateBackButton() {

    if (
        currentState.level ===
        "forms"
    ) {

        backButton.style.display =
            "none";

    } else {

        backButton.style.display =
            "inline-flex";

    }

}


/* =========================================================
   RENDER FORMS
========================================================= */

function renderForms() {

    currentState = {

        level: "forms",

        form: null,

        subject: null,

        type: null,

        region: null,

        year: null

    };


    updateBreadcrumb();

    updateBackButton();


    let html = `

        <div class="gp-step-header">

            <div class="gp-step-number">
                1
            </div>

            <div>

                <h2>
                    Chagua Kidato
                </h2>

                <p>
                    Chagua kidato unachotaka
                    kupata Past Papers.
                </p>

            </div>

        </div>


        <div class="gp-selection-grid">

    `;


    for (
        let i = 1;
        i <= 6;
        i++
    ) {

        const formId =
            "form" + i;


        const form =
            forms[formId];


        html += `

            <article
                class="gp-card gp-form-card"
            >

                <div class="gp-card-icon">

                    ${form.icon}

                </div>


                <div class="gp-card-body">

                    <h3>
                        ${form.name}
                    </h3>

                    <p>
                        Physics & Chemistry
                        Past Papers
                    </p>

                </div>


                <button
                    class="gp-open-btn"
                    onclick="openForm('${formId}')"
                >

                    FUNGUA FORM ${i}

                    <span>
                        →
                    </span>

                </button>

            </article>

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

    currentState.level =
        "subjects";

    currentState.form =
        form;

    currentState.subject =
        null;

    currentState.type =
        null;

    currentState.region =
        null;

    currentState.year =
        null;


    history.pushState(
        currentState,
        "",
        "#form=" + form
    );


    renderSubjects();

}


/* =========================================================
   GET SUBJECTS FOR FORM
========================================================= */

function getSubjects(
    form
) {

    const set =
        new Set();


    papers.forEach(
        paper => {

            if (
                paper.form === form &&
                paper.subject
            ) {

                set.add(
                    paper.subject
                );

            }

        }
    );


    /*
     * We only display subjects that
     * actually have records.
     *
     * If your data has Physics and
     * Chemistry, both appear.
     */

    return Array.from(set)
        .sort(
            (a, b) =>
                a.localeCompare(b)
        );

}


/* =========================================================
   RENDER SUBJECTS
========================================================= */

function renderSubjects() {

    updateBreadcrumb();

    updateBackButton();


    const subjects =
        getSubjects(
            currentState.form
        );


    let html = `

        <div class="gp-step-header">

            <div class="gp-step-number">
                2
            </div>

            <div>

                <h2>
                    Chagua Subject
                </h2>

                <p>
                    ${forms[
                        currentState.form
                    ]?.name || ""}
                    — Chagua somo.
                </p>

            </div>

        </div>


        <div class="gp-selection-grid">

    `;


    if (
        subjects.length === 0
    ) {

        html += emptyMessage(
            "Hakuna subject yenye papers iliyopatikana kwenye data ya kidato hiki."
        );

    }


    subjects.forEach(
        subject => {

            const icon =
                subject === "Physics"
                    ? "⚛️"
                    : subject === "Chemistry"
                        ? "🧪"
                        : "📚";


            html += `

                <article
                    class="gp-card gp-subject-card"
                >

                    <div class="gp-card-icon">
                        ${icon}
                    </div>

                    <div class="gp-card-body">

                        <h3>
                            ${escapeHtml(subject)}
                        </h3>

                        <p>
                            Chagua aina ya
                            Past Paper.
                        </p>

                    </div>

                    <button
                        class="gp-open-btn"
                        onclick="openSubject('${escapeJs(subject)}')"
                    >

                        FUNGUA ${escapeHtml(
                            subject.toUpperCase()
                        )}

                        <span>
                            →
                        </span>

                    </button>

                </article>

            `;

        }
    );


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

    currentState.level =
        "types";

    currentState.subject =
        subject;

    currentState.type =
        null;

    currentState.region =
        null;

    currentState.year =
        null;


    history.pushState(
        currentState,
        "",
        "#form=" +
        currentState.form +
        "&subject=" +
        encodeURIComponent(subject)
    );


    renderTypes();

}


/* =========================================================
   GET TYPES
========================================================= */

function getTypes() {

    const set =
        new Set();


    papers.forEach(
        paper => {

            if (
                paper.form ===
                    currentState.form &&

                paper.subject ===
                    currentState.subject &&

                paper.type
            ) {

                set.add(
                    paper.type
                );

            }

        }
    );


    return Array.from(set);

}


/* =========================================================
   RENDER TYPES
========================================================= */

function renderTypes() {

    updateBreadcrumb();

    updateBackButton();


    const types =
        getTypes();


    let html = `

        <div class="gp-step-header">

            <div class="gp-step-number">
                3
            </div>

            <div>

                <h2>
                    Chagua Aina ya Paper
                </h2>

                <p>
                    Chagua aina ya mtihani
                    unaotafuta.
                </p>

            </div>

        </div>


        <div class="gp-selection-grid">

    `;


    if (
        types.length === 0
    ) {

        html += emptyMessage(
            "Hakuna aina ya paper iliyopatikana kwa subject hii."
        );

    }


    types.forEach(
        type => {

            html += `

                <article
                    class="gp-card gp-type-card"
                >

                    <div class="gp-card-icon">
                        📝
                    </div>

                    <div class="gp-card-body">

                        <h3>
                            ${escapeHtml(type)}
                        </h3>

                        <p>
                            Fungua papers za
                            ${escapeHtml(type)}.
                        </p>

                    </div>

                    <button
                        class="gp-open-btn"
                        onclick="openType('${escapeJs(type)}')"
                    >

                        FUNGUA ${escapeHtml(
                            type.toUpperCase()
                        )}

                        <span>
                            →
                        </span>

                    </button>

                </article>

            `;

        }
    );


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

    currentState.level =
        "regions";

    currentState.type =
        type;

    currentState.region =
        null;

    currentState.year =
        null;


    history.pushState(
        currentState,
        "",
        "#type=" +
        encodeURIComponent(type)
    );


    renderRegions();

}


/* =========================================================
   GET REGIONS
========================================================= */

function getRegions() {

    const set =
        new Set();


    papers.forEach(
        paper => {

            if (
                paper.form ===
                    currentState.form &&

                paper.subject ===
                    currentState.subject &&

                paper.type ===
                    currentState.type &&

                paper.region
            ) {

                set.add(
                    paper.region
                );

            }

        }
    );


    return Array.from(set)
        .sort(
            (a, b) =>
                a.localeCompare(b)
        );

}


/* =========================================================
   RENDER REGIONS
========================================================= */

function renderRegions() {

    updateBreadcrumb();

    updateBackButton();


    const regions =
        getRegions();


    let html = `

        <div class="gp-step-header">

            <div class="gp-step-number">
                4
            </div>

            <div>

                <h2>
                    Chagua Mkoa
                </h2>

                <p>
                    Chagua mkoa wenye
                    Past Papers.
                </p>

            </div>

        </div>


        <div class="gp-selection-grid">

    `;


    if (
        regions.length === 0
    ) {

        html += emptyMessage(
            "Hakuna mikoa iliyopatikana kwa uchaguzi huu."
        );

    }


    regions.forEach(
        region => {

            html += `

                <article
                    class="gp-card gp-region-card"
                >

                    <div class="gp-card-icon">
                        📍
                    </div>

                    <div class="gp-card-body">

                        <h3>
                            ${escapeHtml(region)}
                        </h3>

                        <p>
                            Past Papers za
                            mkoa huu.
                        </p>

                    </div>

                    <button
                        class="gp-open-btn"
                        onclick="openRegion('${escapeJs(region)}')"
                    >

                        FUNGUA MOA

                        <span>
                            →
                        </span>

                    </button>

                </article>

            `;

        }
    );


    html += `

        </div>

    `;


    container.innerHTML =
        html;

}


/* =========================================================
   OPEN REGION
========================================================= */

function openRegion(
    region
) {

    currentState.level =
        "years";

    currentState.region =
        region;

    currentState.year =
        null;


    history.pushState(
        currentState,
        "",
        "#region=" +
        encodeURIComponent(region)
    );


    renderYears();

}


/* =========================================================
   GET YEARS
========================================================= */

function getYears() {

    const set =
        new Set();


    papers.forEach(
        paper => {

            if (
                paper.form ===
                    currentState.form &&

                paper.subject ===
                    currentState.subject &&

                paper.type ===
                    currentState.type &&

                paper.region ===
                    currentState.region &&

                paper.year
            ) {

                set.add(
                    String(paper.year)
                );

            }

        }
    );


    return Array.from(set)
        .sort(
            (a, b) =>
                Number(b) -
                Number(a)
        );

}


/* =========================================================
   RENDER YEARS
========================================================= */

function renderYears() {

    updateBreadcrumb();

    updateBackButton();


    const years =
        getYears();


    let html = `

        <div class="gp-step-header">

            <div class="gp-step-number">
                5
            </div>

            <div>

                <h2>
                    Chagua Mwaka
                </h2>

                <p>
                    Chagua mwaka wa
                    Past Paper.
                </p>

            </div>

        </div>


        <div class="gp-selection-grid">

    `;


    if (
        years.length === 0
    ) {

        html += emptyMessage(
            "Hakuna mwaka uliopatikana kwa uchaguzi huu."
        );

    }


    years.forEach(
        year => {

            html += `

                <article
                    class="gp-card gp-year-card"
                >

                    <div class="gp-card-icon">
                        📅
                    </div>

                    <div class="gp-card-body">

                        <h3>
                            ${escapeHtml(year)}
                        </h3>

                        <p>
                            Papers za mwaka
                            ${escapeHtml(year)}.
                        </p>

                    </div>

                    <button
                        class="gp-open-btn"
                        onclick="openYear('${escapeJs(year)}')"
                    >

                        FUNGUA ${escapeHtml(year)}

                        <span>
                            →
                        </span>

                    </button>

                </article>

            `;

        }
    );


    html += `

        </div>

    `;


    container.innerHTML =
        html;

}


/* =========================================================
   OPEN YEAR
========================================================= */

function openYear(
    year
) {

    currentState.level =
        "papers";

    currentState.year =
        year;


    history.pushState(
        currentState,
        "",
        "#year=" +
        encodeURIComponent(year)
    );


    renderPapers();

}


/* =========================================================
   GET PAPERS
========================================================= */

function getSelectedPapers() {

    return papers.filter(
        paper => {

            return (

                paper.form ===
                    currentState.form &&

                paper.subject ===
                    currentState.subject &&

                paper.type ===
                    currentState.type &&

                paper.region ===
                    currentState.region &&

                String(paper.year) ===
                    String(currentState.year)

            );

        }
    );

}


/* =========================================================
   RENDER FINAL PDF LIST
========================================================= */

function renderPapers() {

    updateBreadcrumb();

    updateBackButton();


    const selected =
        getSelectedPapers();


    let html = `

        <div class="gp-step-header">

            <div class="gp-step-number">
                6
            </div>

            <div>

                <h2>
                    Past Papers
                </h2>

                <p>
                    Chagua PDF unayotaka
                    kufungua.
                </p>

            </div>

        </div>


        <div class="gp-paper-list">

    `;


    if (
        selected.length === 0
    ) {

        html += emptyMessage(
            "Hakuna PDF iliyopatikana kwa uchaguzi huu."
        );

    }


    selected.forEach(
        (paper, index) => {

            html += `

                <article
                    class="gp-paper-card"
                >

                    <div class="gp-paper-icon">
                        📄
                    </div>


                    <div class="gp-paper-info">

                        <h3>
                            ${escapeHtml(
                                paper.title
                            )}
                        </h3>

                        <div class="gp-paper-meta">

                            <span>
                                ${escapeHtml(
                                    paper.subject
                                )}
                            </span>

                            <span>
                                ${escapeHtml(
                                    paper.type
                                )}
                            </span>

                            <span>
                                ${escapeHtml(
                                    paper.region
                                )}
                            </span>

                            <span>
                                ${escapeHtml(
                                    paper.year
                                )}
                            </span>

                        </div>

                    </div>


                    <a
                        class="gp-pdf-btn"
                        href="${escapeAttribute(
                            paper.file
                        )}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        📄 OPEN PDF

                    </a>

                </article>

            `;

        }
    );


    html += `

        </div>

    `;


    container.innerHTML =
        html;

}


/* =========================================================
   EMPTY MESSAGE
========================================================= */

function emptyMessage(
    message
) {

    return `

        <div class="gp-empty-card">

            <div class="gp-empty-icon">
                📂
            </div>

            <h3>
                Hakuna Papers
            </h3>

            <p>
                ${escapeHtml(message)}
            </p>

        </div>

    `;

}


/* =========================================================
   BACK NAVIGATION
========================================================= */

function goBack() {

    if (
        currentState.level ===
        "forms"
    ) {

        window.location.href =
            "index.html";

        return;

    }


    history.back();

}


/* =========================================================
   POPSTATE
========================================================= */

window.addEventListener(
    "popstate",
    function(event) {

        const state =
            event.state;


        if (!state) {

            renderForms();

            return;

        }


        currentState = {

            level:
                state.level ||
                "forms",

            form:
                state.form ||
                null,

            subject:
                state.subject ||
                null,

            type:
                state.type ||
                null,

            region:
                state.region ||
                null,

            year:
                state.year ||
                null

        };


        renderCurrentLevel();

    }
);


/* =========================================================
   RENDER CURRENT LEVEL
========================================================= */

function renderCurrentLevel() {

    switch (
        currentState.level
    ) {

        case "forms":

            renderForms();

            break;


        case "subjects":

            renderSubjects();

            break;


        case "types":

            renderTypes();

            break;


        case "regions":

            renderRegions();

            break;


        case "years":

            renderYears();

            break;


        case "papers":

            renderPapers();

            break;


        default:

            renderForms();

    }

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHtml(
    value
) {

    return String(
        value ?? ""
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
   ESCAPE JS
========================================================= */

function escapeJs(
    value
) {

    return String(
        value ?? ""
    )
        .replaceAll(
            "\\",
            "\\\\"
        )
        .replaceAll(
            "'",
            "\\'"
        )
        .replaceAll(
            "\n",
            "\\n"
        )
        .replaceAll(
            "\r",
            "\\r"
        );

}


/* =========================================================
   ESCAPE ATTRIBUTE
========================================================= */

function escapeAttribute(
    value
) {

    return escapeHtml(value);

}


/* =========================================================
   INITIALIZE
========================================================= */

function initializePastPapers() {

    const loaded =
        loadData();


    if (!loaded) {

        return;

    }


    /*
     * Start at Form 1–6.
     */

    history.replaceState(
        {
            level: "forms",

            form: null,

            subject: null,

            type: null,

            region: null,

            year: null

        },
        "",
        window.location.href
    );


    renderForms();

}


/* =========================================================
   START
========================================================= */

initializePastPapers();
