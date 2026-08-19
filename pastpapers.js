/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS NAVIGATION ENGINE

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
   PAPERS
      ↓
   PDF
========================================================= */


/* =========================================================
   STATE
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
    document.getElementById(
        "stepContainer"
    );

const breadcrumb =
    document.getElementById(
        "breadcrumb"
    );

const backButton =
    document.getElementById(
        "backButton"
    );


/* =========================================================
   FORM NAMES
========================================================= */

const formNames = {

    form1: "Form 1",

    form2: "Form 2",

    form3: "Form 3",

    form4: "Form 4",

    form5: "Form 5",

    form6: "Form 6"

};


/* =========================================================
   SUBJECT NAMES
========================================================= */

const subjectNames = {

    physics: "Physics",

    chemistry: "Chemistry"

};


/* =========================================================
   TYPE NAMES
========================================================= */

const typeNames = {

    midterm: "Midterm",

    terminal: "Terminal",

    annual: "Annual",

    joint: "Joint",

    ftna: "FTNA",

    mock: "Mock",

    pre_necta: "Pre-NECTA",

    acsee: "ACSEE"

};


/* =========================================================
   REGION NAMES
========================================================= */

const regionNames = {

    dar_es_salaam: "Dar es Salaam",

    dodoma: "Dodoma",

    arusha: "Arusha",

    mbeya: "Mbeya",

    kagera: "Kagera",

    shinyanga: "Shinyanga",

    necta: "NECTA"

};


/* =========================================================
   ICONS
========================================================= */

const subjectIcons = {

    physics: "⚛️",

    chemistry: "🧪"

};


/* =========================================================
   VALIDATE DATA
========================================================= */

function dataIsReady() {

    return (
        typeof window.pastPapers ===
        "object"
        &&
        window.pastPapers !== null
    );

}


/* =========================================================
   INITIALIZE
========================================================= */

function initializePastPapers() {

    if (!dataIsReady()) {

        showDataError();

        return;

    }


    currentState = {

        level: "forms",

        form: null,

        subject: null,

        type: null,

        region: null,

        year: null

    };


    renderForms();


    history.replaceState(

        {
            level: "forms"
        },

        "",

        window.location.href

    );

}


/* =========================================================
   DATA ERROR
========================================================= */

function showDataError() {

    container.innerHTML = `

        <div class="empty-card">

            <div class="empty-icon">
                ⚠️
            </div>

            <h3>
                Past Paper Data Error
            </h3>

            <p>
                pastpapers.data.js haijasomeka
                au <b>window.pastPapers</b>
                haipo.
            </p>

            <p>
                Hakikisha files hizi zipo
                kwenye folder moja:
            </p>

            <p>

                <b>
                    pastpapers.html
                </b>
                <br>

                <b>
                    pastpapers.data.js
                </b>
                <br>

                <b>
                    pastpapers.js
                </b>

            </p>

        </div>

    `;

}


/* =========================================================
   HISTORY
========================================================= */

function pushNavigationState(state) {

    history.pushState(

        state,

        "",

        window.location.href

    );

}


/* =========================================================
   RENDER FORMS
========================================================= */

function renderForms() {

    currentState.level =
        "forms";

    currentState.form =
        null;

    currentState.subject =
        null;

    currentState.type =
        null;

    currentState.region =
        null;

    currentState.year =
        null;


    updateBreadcrumb();

    backButton.style.display =
        "none";


    let html = `

        <div class="step-title">

            <span class="step-badge">
                STEP 1
            </span>

            <h2>
                Chagua Form
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
    ) {

        const formId =
            "form" + i;


        html += `

            <div class="selection-card">

                <div>

                    <div class="card-icon">
                        🎓
                    </div>

                    <h3>
                        ${formNames[formId]}
                    </h3>

                    <p>
                        Physics & Chemistry
                        Past Papers
                    </p>

                </div>

                <button
                    class="open-btn"
                    onclick="openForm('${formId}')">

                    FUNGUA ${formNames[formId].toUpperCase()}

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

function openForm(formId) {

    currentState.level =
        "subjects";

    currentState.form =
        formId;

    currentState.subject =
        null;

    currentState.type =
        null;

    currentState.region =
        null;

    currentState.year =
        null;


    pushNavigationState({

        level: "subjects",

        form: formId

    });


    renderSubjects();

}


/* =========================================================
   GET PAPERS FOR FORM
========================================================= */

function getFormData(formId) {

    if (
        !window.pastPapers
        ||
        !window.pastPapers[formId]
    ) {

        return null;

    }


    return window.pastPapers[
        formId
    ];

}


/* =========================================================
   RENDER SUBJECTS
========================================================= */

function renderSubjects() {

    const formData =
        getFormData(
            currentState.form
        );


    updateBreadcrumb();

    backButton.style.display =
        "inline-flex";


    let html = `

        <div class="step-title">

            <span class="step-badge">
                STEP 2
            </span>

            <h2>
                ${formNames[
                    currentState.form
                ]}
            </h2>

            <p>
                Chagua subject.
            </p>

        </div>

        <div class="selection-grid">

    `;


    const subjects = [

        "physics",

        "chemistry"

    ];


    subjects.forEach(
        subject => {

            const papers =
                formData &&
                Array.isArray(
                    formData[subject]
                )
                    ? formData[subject]
                    : [];


            html += `

                <div class="
                    selection-card
                    subject-card
                    ${
                        subject === "physics"
                        ? "physics-card"
                        : "chemistry-card"
                    }
                ">

                    <div>

                        <div class="card-icon">
                            ${subjectIcons[subject]}
                        </div>

                        <h3>
                            ${subjectNames[subject]}
                        </h3>

                        <p>
                            Chagua aina ya
                            examination paper.
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        onclick="
                            openSubject('${subject}')
                        ">

                        FUNGUA
                        ${subjectNames[
                            subject
                        ].toUpperCase()}

                    </button>

                </div>

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

function openSubject(subject) {

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


    pushNavigationState({

        level: "types",

        form:
            currentState.form,

        subject:
            subject

    });


    renderTypes();

}


/* =========================================================
   GET SUBJECT PAPERS
========================================================= */

function getSubjectPapers() {

    const formData =
        getFormData(
            currentState.form
        );


    if (
        !formData
        ||
        !Array.isArray(
            formData[
                currentState.subject
            ]
        )
    ) {

        return [];

    }


    return formData[
        currentState.subject
    ];

}


/* =========================================================
   UNIQUE VALUES
========================================================= */

function uniqueValues(
    array,
    key
) {

    return [
        ...new Set(

            array

                .map(
                    item =>
                        item[key]
                )

                .filter(
                    value =>
                        value !==
                        undefined
                        &&
                        value !==
                        null
                )

        )

    ];

}


/* =========================================================
   RENDER TYPES
========================================================= */

function renderTypes() {

    const papers =
        getSubjectPapers();


    const types =
        uniqueValues(
            papers,
            "type"
        );


    updateBreadcrumb();


    let html = `

        <div class="step-title">

            <span class="step-badge">
                STEP 3
            </span>

            <h2>
                ${subjectIcons[
                    currentState.subject
                ]}
                ${subjectNames[
                    currentState.subject
                ]}
            </h2>

            <p>
                Chagua aina ya paper.
            </p>

        </div>

        <div class="selection-grid">

    `;


    if (
        types.length === 0
    ) {

        html += emptyMessage(
            "Hakuna paper",
            "Hakuna paper iliyowekwa kwa subject hii bado."
        );

    }


    types.forEach(
        type => {

            html += `

                <div class="
                    selection-card
                    type-card
                ">

                    <div>

                        <div class="card-icon">
                            📝
                        </div>

                        <h3>
                            ${formatType(type)}
                        </h3>

                        <p>
                            ${subjectNames[
                                currentState.subject
                            ]}
                            ${formatType(type)}
                            Papers
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        onclick="
                            openType('${escapeJs(type)}')
                        ">

                        FUNGUA
                        ${formatType(type).toUpperCase()}

                    </button>

                </div>

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

function openType(type) {

    currentState.level =
        "regions";

    currentState.type =
        type;

    currentState.region =
        null;

    currentState.year =
        null;


    pushNavigationState({

        level: "regions",

        form:
            currentState.form,

        subject:
            currentState.subject,

        type:
            type

    });


    renderRegions();

}


/* =========================================================
   RENDER REGIONS
========================================================= */

function renderRegions() {

    const papers =
        getSubjectPapers().filter(

            paper =>
                String(
                    paper.type
                )
                .toLowerCase()
                ===
                String(
                    currentState.type
                )
                .toLowerCase()

        );


    const regions =
        uniqueValues(
            papers,
            "region"
        );


    updateBreadcrumb();


    let html = `

        <div class="step-title">

            <span class="step-badge">
                STEP 4
            </span>

            <h2>
                ${formatType(
                    currentState.type
                )}
            </h2>

            <p>
                Chagua mkoa.
            </p>

        </div>

        <div class="selection-grid">

    `;


    if (
        regions.length === 0
    ) {

        html += emptyMessage(
            "Hakuna mkoa",
            "Hakuna paper iliyowekwa kwenye aina hii."
        );

    }


    regions.forEach(
        region => {

            html += `

                <div class="
                    selection-card
                    region-card
                ">

                    <div>

                        <div class="card-icon">
                            📍
                        </div>

                        <h3>
                            ${formatRegion(
                                region
                            )}
                        </h3>

                        <p>
                            ${formNames[
                                currentState.form
                            ]}
                            —
                            ${subjectNames[
                                currentState.subject
                            ]}
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        onclick="
                            openRegion('${escapeJs(region)}')
                        ">

                        FUNGUA MKOA

                    </button>

                </div>

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

function openRegion(region) {

    currentState.level =
        "years";

    currentState.region =
        region;

    currentState.year =
        null;


    pushNavigationState({

        level: "years",

        form:
            currentState.form,

        subject:
            currentState.subject,

        type:
            currentState.type,

        region:
            region

    });


    renderYears();

}


/* =========================================================
   RENDER YEARS
========================================================= */

function renderYears() {

    const papers =
        getSubjectPapers().filter(

            paper =>

                String(
                    paper.type
                ).toLowerCase()
                ===
                String(
                    currentState.type
                ).toLowerCase()

                &&

                String(
                    paper.region
                ).toLowerCase()
                ===
                String(
                    currentState.region
                ).toLowerCase()

        );


    const years =
        uniqueValues(
            papers,
            "year"
        )
        .sort(
            (a,b) =>
                Number(b) -
                Number(a)
        );


    updateBreadcrumb();


    let html = `

        <div class="step-title">

            <span class="step-badge">
                STEP 5
            </span>

            <h2>
                ${formatRegion(
                    currentState.region
                )}
            </h2>

            <p>
                Chagua mwaka.
            </p>

        </div>

        <div class="selection-grid">

    `;


    if (
        years.length === 0
    ) {

        html += emptyMessage(
            "Hakuna mwaka",
            "Hakuna paper iliyopatikana kwa uchaguzi huu."
        );

    }


    years.forEach(
        year => {

            html += `

                <div class="
                    selection-card
                    year-card
                ">

                    <div>

                        <div class="card-icon">
                            📅
                        </div>

                        <h3>
                            ${year}
                        </h3>

                        <p>
                            ${formatType(
                                currentState.type
                            )}
                            —
                            ${formatRegion(
                                currentState.region
                            )}
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        onclick="
                            openYear(${Number(year)})
                        ">

                        FUNGUA ${year}

                    </button>

                </div>

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

function openYear(year) {

    currentState.level =
        "papers";

    currentState.year =
        Number(year);


    pushNavigationState({

        level: "papers",

        form:
            currentState.form,

        subject:
            currentState.subject,

        type:
            currentState.type,

        region:
            currentState.region,

        year:
            Number(year)

    });


    renderPapers();

}


/* =========================================================
   RENDER PAPERS
========================================================= */

function renderPapers() {

    const papers =
        getSubjectPapers().filter(

            paper =>

                String(
                    paper.type
                ).toLowerCase()
                ===
                String(
                    currentState.type
                ).toLowerCase()

                &&

                String(
                    paper.region
                ).toLowerCase()
                ===
                String(
                    currentState.region
                ).toLowerCase()

                &&

                Number(
                    paper.year
                )
                ===
                Number(
                    currentState.year
                )

        );


    updateBreadcrumb();


    let html = `

        <div class="step-title">

            <span class="step-badge">
                STEP 6
            </span>

            <h2>
                📄 Available Papers
            </h2>

            <p>
                ${subjectNames[
                    currentState.subject
                ]}
                —
                ${formatType(
                    currentState.type
                )}
                —
                ${formatRegion(
                    currentState.region
                )}
                —
                ${currentState.year}
            </p>

        </div>

        <div class="selection-grid">

    `;


    if (
        papers.length === 0
    ) {

        html += emptyMessage(
            "Hakuna PDF",
            "Hakuna paper iliyowekwa kwa uchaguzi huu."
        );

    }


    papers.forEach(
        (paper, index) => {

            const file =
                String(
                    paper.file || ""
                ).trim();


            if (!file) {

                return;

            }


            html += `

                <div class="
                    selection-card
                    paper-card
                ">

                    <div>

                        <div class="card-icon">
                            📄
                        </div>

                        <h3 class="paper-title">
                            ${escapeHtml(
                                paper.title
                                ||
                                (
                                    subjectNames[
                                        currentState.subject
                                    ]
                                    +
                                    " Paper"
                                )
                            )}
                        </h3>

                        <p>

                            ${subjectNames[
                                currentState.subject
                            ]}

                            •
                            ${formatType(
                                currentState.type
                            )}

                            •
                            ${formatRegion(
                                currentState.region
                            )}

                            •
                            ${currentState.year}

                        </p>

                    </div>


                    <a
                        class="pdf-btn"
                        href="${escapeAttribute(file)}"
                        target="_blank"
                        rel="noopener noreferrer">

                        📖 FUNGUA PDF

                    </a>

                </div>

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
    title,
    message
) {

    return `

        <div class="empty-card">

            <div class="empty-icon">
                📂
            </div>

            <h3>
                ${title}
            </h3>

            <p>
                ${message}
            </p>

        </div>

    `;

}


/* =========================================================
   FORMAT TYPE
========================================================= */

function formatType(type) {

    if (
        typeNames[type]
    ) {

        return typeNames[type];

    }


    return String(type)

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
   FORMAT REGION
========================================================= */

function formatRegion(region) {

    if (
        regionNames[region]
    ) {

        return regionNames[region];

    }


    return String(region)

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
   BREADCRUMB
========================================================= */

function updateBreadcrumb() {

    const parts = [

        "Past Papers"

    ];


    if (
        currentState.form
    ) {

        parts.push(
            formNames[
                currentState.form
            ]
        );

    }


    if (
        currentState.subject
    ) {

        parts.push(
            subjectNames[
                currentState.subject
            ]
        );

    }


    if (
        currentState.type
    ) {

        parts.push(
            formatType(
                currentState.type
            )
        );

    }


    if (
        currentState.region
    ) {

        parts.push(
            formatRegion(
                currentState.region
            )
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
                            ${escapeHtml(part)}
                        </span>

                    `;

                }


                return `

                    <span class="separator">
                        ›
                    </span>

                    <span>
                        ${escapeHtml(part)}
                    </span>

                `;

            }

        ).join("");

}


/* =========================================================
   BACK
========================================================= */

function goBack() {

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


        if (
            !state
        ) {

            renderForms();

            return;

        }


        currentState.level =
            state.level
            ||
            "forms";

        currentState.form =
            state.form
            ||
            null;

        currentState.subject =
            state.subject
            ||
            null;

        currentState.type =
            state.type
            ||
            null;

        currentState.region =
            state.region
            ||
            null;

        currentState.year =
            state.year
            ||
            null;


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
);


/* =========================================================
   ESCAPE JS
========================================================= */

function escapeJs(value) {

    return String(value)

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
   ESCAPE HTML
========================================================= */

function escapeHtml(value) {

    return String(value)

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

function escapeAttribute(value) {

    return escapeHtml(value);

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


    sidebar.classList.toggle(
        "active"
    );


    overlay.style.display =

        sidebar.classList.contains(
            "active"
        )

        ? "block"

        : "none";

}


/* =========================================================
   START
========================================================= */

initializePastPapers();
