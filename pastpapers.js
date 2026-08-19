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
   PAPERS
      ↓
   PDF

   DATA SOURCE:
   window.pastPapers
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
   DATA CHECK
========================================================= */

function getPastPapersData() {

    if (
        typeof window.pastPapers ===
        "undefined"
    ) {

        return null;

    }

    if (
        !window.pastPapers ||
        typeof window.pastPapers !==
        "object"
    ) {

        return null;

    }

    return window.pastPapers;

}


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

    necta: "NECTA",

    mock: "Mock",

    pre_necta: "Pre-NECTA",

    acsee: "ACSEE"

};


/* =========================================================
   REGION NAMES
========================================================= */

const regionNames = {

    dar_es_salaam:
        "Dar es Salaam",

    dodoma:
        "Dodoma",

    arusha:
        "Arusha",

    mbeya:
        "Mbeya",

    kagera:
        "Kagera",

    shinyanga:
        "Shinyanga",

    kigoma:
        "Kigoma",

    mwanza:
        "Mwanza",

    morogoro:
        "Morogoro",

    tanga:
        "Tanga",

    tabora:
        "Tabora",

    singida:
        "Singida",

    iringa:
        "Iringa",

    ruvuma:
        "Ruvuma",

    mtwara:
        "Mtwara",

    lindi:
        "Lindi",

    pwani:
        "Pwani",

    manyara:
        "Manyara",

    katavi:
        "Katavi",

    njombe:
        "Njombe",

    songwe:
        "Songwe",

    mara:
        "Mara",

    simiyu:
        "Simiyu",

    geita:
        "Geita",

    tanzania:
        "Tanzania",

    necta:
        "NECTA"

};


/* =========================================================
   INITIALIZE
========================================================= */

function initializePastPapers() {

    const data =
        getPastPapersData();


    if (!data) {

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


    history.replaceState(

        currentState,

        "",

        window.location.href

    );


    renderForms();

}


/* =========================================================
   DATA ERROR
========================================================= */

function showDataError() {

    backButton.style.display =
        "none";


    breadcrumb.innerHTML = `

        <span>
            Past Papers
        </span>

    `;


    container.innerHTML = `

        <div class="message-card">

            <div class="message-icon">
                ⚠️
            </div>

            <h3>
                Past Paper Data Error
            </h3>

            <p>
                <strong>
                    pastpapers.data.js
                </strong>
                haijasomeka au
                <strong>
                    window.pastPapers
                </strong>
                haipo.
            </p>

            <p>
                Hakikisha files hizi zipo
                kwenye folder moja:
            </p>

            <p>
                pastpapers.html<br>
                pastpapers.data.js<br>
                pastpapers.js
            </p>

        </div>

    `;

}


/* =========================================================
   HISTORY
========================================================= */

function pushNavigationState() {

    history.pushState(

        {
            ...currentState
        },

        "",

        window.location.href

    );

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


    backButton.style.display =
        "none";


    let html = `

        <div class="step-title">

            <div class="step-number">
                STEP 1
            </div>

            <h2>
                🎓 Chagua Kidato
            </h2>

            <p>
                Chagua kidato unachotaka
                kupata past papers.
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

            <div class="selection-card form-card">

                <div>

                    <div class="form-icon">
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
                    onclick="
                        openForm('${formId}')
                    ">

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

function openForm(form) {

    const data =
        getPastPapersData();


    if (
        !data ||
        !data[form]
    ) {

        showEmpty(
            "Hakuna data ya " +
            formNames[form] +
            " iliyowekwa bado."
        );

        return;

    }


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


    pushNavigationState();


    renderSubjects();

}


/* =========================================================
   RENDER SUBJECTS
========================================================= */

function renderSubjects() {

    const data =
        getPastPapersData();


    const formData =
        data[
            currentState.form
        ];


    if (!formData) {

        renderForms();

        return;

    }


    updateBreadcrumb();


    backButton.style.display =
        "inline-flex";


    let html = `

        <div class="step-title">

            <div class="step-number">
                STEP 2
            </div>

            <h2>
                📚 Chagua Subject
            </h2>

            <p>
                ${formNames[
                    currentState.form
                ]}
                — chagua somo.
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

            const list =
                Array.isArray(
                    formData[subject]
                )
                ? formData[subject]
                : [];


            const icon =
                subject === "physics"
                ? "⚛️"
                : "🧪";


            html += `

                <div class="selection-card subject-card">

                    <div>

                        <div class="subject-icon">
                            ${icon}
                        </div>

                        <h3>
                            ${subjectNames[
                                subject
                            ]}
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


    pushNavigationState();


    renderTypes();

}


/* =========================================================
   RENDER TYPES
========================================================= */

function renderTypes() {

    const list =
        getCurrentPaperList();


    updateBreadcrumb();


    let html = `

        <div class="step-title">

            <div class="step-number">
                STEP 3
            </div>

            <h2>
                📝 Chagua Aina ya Paper
            </h2>

            <p>
                ${subjectNames[
                    currentState.subject
                ]}
                —
                chagua examination type.
            </p>

        </div>

        <div class="selection-grid">

    `;


    const types = [];


    list.forEach(
        paper => {

            if (
                paper &&
                paper.type &&
                !types.includes(
                    paper.type
                )
            ) {

                types.push(
                    paper.type
                );

            }

        }
    );


    if (
        types.length === 0
    ) {

        html += emptyCardHtml(
            "📭",
            "Hakuna Paper",
            "Hakuna paper iliyowekwa kwa subject hii bado."
        );

    }


    types
        .sort()
        .forEach(
            type => {

                html += `

                    <div
                        class="
                            selection-card
                            type-card
                            ${getTypeClass(type)}
                        ">

                        <div>

                            <div class="type-icon">
                                ${getTypeIcon(type)}
                            </div>

                            <h3>
                                ${getTypeName(type)}
                            </h3>

                            <p>
                                ${subjectNames[
                                    currentState.subject
                                ]}
                                examination papers.
                            </p>

                        </div>

                        <button
                            class="open-btn"
                            onclick="
                                openType('${type}')
                            ">

                            FUNGUA

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


    pushNavigationState();


    renderRegions();

}


/* =========================================================
   RENDER REGIONS
========================================================= */

function renderRegions() {

    const list =
        getCurrentPaperList();


    updateBreadcrumb();


    let html = `

        <div class="step-title">

            <div class="step-number">
                STEP 4
            </div>

            <h2>
                📍 Chagua Mkoa
            </h2>

            <p>
                ${getTypeName(
                    currentState.type
                )}
                —
                chagua region.
            </p>

        </div>

        <div class="selection-grid">

    `;


    const regions = [];


    list.forEach(
        paper => {

            if (
                paper &&
                paper.type ===
                    currentState.type &&
                paper.region &&
                !regions.includes(
                    paper.region
                )
            ) {

                regions.push(
                    paper.region
                );

            }

        }
    );


    if (
        regions.length === 0
    ) {

        html += emptyCardHtml(
            "📭",
            "Hakuna Region",
            "Hakuna region yenye papers kwa uchaguzi huu."
        );

    }


    regions
        .sort(
            (a, b) =>
                getRegionName(a)
                    .localeCompare(
                        getRegionName(b)
                    )
        )
        .forEach(
            region => {

                html += `

                    <div class="selection-card region-card">

                        <div>

                            <div class="region-icon">
                                📍
                            </div>

                            <h3>
                                ${getRegionName(
                                    region
                                )}
                            </h3>

                            <p>
                                ${getTypeName(
                                    currentState.type
                                )}
                                papers
                            </p>

                        </div>

                        <button
                            class="open-btn"
                            onclick="
                                openRegion('${region}')
                            ">

                            FUNGUA

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


    pushNavigationState();


    renderYears();

}


/* =========================================================
   RENDER YEARS
========================================================= */

function renderYears() {

    const list =
        getCurrentPaperList();


    updateBreadcrumb();


    let html = `

        <div class="step-title">

            <div class="step-number">
                STEP 5
            </div>

            <h2>
                📅 Chagua Mwaka
            </h2>

            <p>
                ${getRegionName(
                    currentState.region
                )}
                —
                chagua mwaka.
            </p>

        </div>

        <div class="selection-grid">

    `;


    const years = [];


    list.forEach(
        paper => {

            if (
                paper &&
                paper.type ===
                    currentState.type &&
                paper.region ===
                    currentState.region &&
                paper.year &&
                !years.includes(
                    Number(paper.year)
                )
            ) {

                years.push(
                    Number(paper.year)
                );

            }

        }
    );


    if (
        years.length === 0
    ) {

        html += emptyCardHtml(
            "📭",
            "Hakuna Mwaka",
            "Hakuna mwaka wenye paper kwa uchaguzi huu."
        );

    }


    years
        .sort(
            (a, b) => b - a
        )
        .forEach(
            year => {

                html += `

                    <div class="selection-card year-card">

                        <div>

                            <div class="year-number">
                                ${year}
                            </div>

                            <p>
                                ${getRegionName(
                                    currentState.region
                                )}
                            </p>

                        </div>

                        <button
                            class="open-btn"
                            onclick="
                                openYear(${year})
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


    pushNavigationState();


    renderPapers();

}


/* =========================================================
   RENDER PAPERS
========================================================= */

function renderPapers() {

    const list =
        getCurrentPaperList();


    updateBreadcrumb();


    let html = `

        <div class="step-title">

            <div class="step-number">
                STEP 6
            </div>

            <h2>
                📄 Papers
            </h2>

            <p>
                Chagua paper unayotaka
                kufungua.
            </p>

        </div>

        <div class="selection-grid">

    `;


    const papers =
        list.filter(
            paper => {

                return (

                    paper.type ===
                        currentState.type &&

                    paper.region ===
                        currentState.region &&

                    Number(paper.year) ===
                        Number(currentState.year)

                );

            }
        );


    if (
        papers.length === 0
    ) {

        html += emptyCardHtml(
            "📭",
            "Hakuna Paper",
            "Hakuna paper inayolingana na uchaguzi huu."
        );

    }


    papers.forEach(
        paper => {

            html += `

                <div class="selection-card paper-card">

                    <div>

                        <div class="paper-icon">
                            📄
                        </div>

                        <div class="paper-title">
                            ${safeText(
                                paper.title ||
                                "Examination Paper"
                            )}
                        </div>

                        <p>
                            ${getRegionName(
                                paper.region
                            )}
                            —
                            ${paper.year}
                        </p>

                    </div>

                    <button
                        class="pdf-btn"
                        onclick="
                            openPDF('${escapeAttribute(
                                paper.file
                            )}')
                        ">

                        📖 FUNGUA PDF

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
   GET CURRENT PAPER LIST
========================================================= */

function getCurrentPaperList() {

    const data =
        getPastPapersData();


    if (!data) {

        return [];

    }


    if (
        !currentState.form ||
        !currentState.subject
    ) {

        return [];

    }


    const formData =
        data[
            currentState.form
        ];


    if (!formData) {

        return [];

    }


    const subjectData =
        formData[
            currentState.subject
        ];


    if (
        !Array.isArray(subjectData)
    ) {

        return [];

    }


    return subjectData;

}


/* =========================================================
   PDF
========================================================= */

function openPDF(file) {

    if (
        !file
    ) {

        alert(
            "PDF file haijawekwa kwenye data."
        );

        return;

    }


    const cleanPath =
        String(file)
            .replace(/^\/+/, "");


    window.open(
        cleanPath,
        "_blank"
    );

}


/* =========================================================
   EMPTY CARD
========================================================= */

function emptyCardHtml(
    icon,
    title,
    message
) {

    return `

        <div class="message-card">

            <div class="message-icon">
                ${icon}
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
   TYPE ICON
========================================================= */

function getTypeIcon(type) {

    const icons = {

        acsee: "🎓",

        necta: "🏛️",

        mock: "📝",

        pre_necta: "📚",

        joint: "🤝",

        midterm: "📘",

        terminal: "📗",

        annual: "📕",

        ftna: "📑"

    };


    return (
        icons[type] ||
        "📄"
    );

}


/* =========================================================
   TYPE NAME
========================================================= */

function getTypeName(type) {

    return (
        typeNames[type] ||
        formatName(type)
    );

}


/* =========================================================
   REGION NAME
========================================================= */

function getRegionName(region) {

    return (
        regionNames[region] ||
        formatName(region)
    );

}


/* =========================================================
   TYPE CSS
========================================================= */

function getTypeClass(type) {

    if (
        type === "pre_necta"
    ) {

        return "type-pre";

    }


    return (
        "type-" +
        String(type)
            .toLowerCase()
            .replace(
                /[^a-z0-9_-]/g,
                ""
            )
    );

}


/* =========================================================
   FORMAT UNKNOWN NAMES
========================================================= */

function formatName(value) {

    if (
        !value
    ) {

        return "";

    }


    return String(value)

        .replaceAll(
            "_",
            " "
        )

        .replace(
            /\b\w/g,
            letter =>
                letter.toUpperCase()
        );

}


/* =========================================================
   SAFE TEXT
========================================================= */

function safeText(value) {

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
   ESCAPE ATTRIBUTE
========================================================= */

function escapeAttribute(value) {

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
            getTypeName(
                currentState.type
            )
        );

    }


    if (
        currentState.region
    ) {

        parts.push(
            getRegionName(
                currentState.region
            )
        );

    }


    if (
        currentState.year
    ) {

        parts.push(
            String(
                currentState.year
            )
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
                            ${safeText(part)}
                        </span>

                    `;

                }


                return `

                    <span class="separator">
                        ›
                    </span>

                    <span>
                        ${safeText(part)}
                    </span>

                `;

            }
        )
        .join("");

}


/* =========================================================
   BACK
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

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializePastPapers
    );

} else {

    initializePastPapers();

}
