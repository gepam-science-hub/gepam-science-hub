/* ============================================================
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

   IMPORTANT:
   - DO NOT PUT PAPER DATA HERE.
   - DATA COMES FROM pastpapers.data.js
   - EXPECTED:
       window.pastPapers
       window.pastPaperConfig
============================================================ */


/* ============================================================
   GLOBAL STATE
============================================================ */

const PPState = {

    level: "forms",

    form: null,

    subject: null,

    type: null,

    region: null,

    year: null

};


/* ============================================================
   ELEMENTS
============================================================ */

const stepContainer =
    document.getElementById("stepContainer");

const breadcrumb =
    document.getElementById("breadcrumb");

const backButton =
    document.getElementById("backButton");


/* ============================================================
   CHECK DATA
============================================================ */

function checkPastPaperData() {

    if (
        !window.pastPapers
    ) {

        showDataError();

        return false;

    }

    return true;

}


/* ============================================================
   DATA ERROR
============================================================ */

function showDataError() {

    if (!stepContainer) {
        return;
    }

    stepContainer.innerHTML = `

        <div class="data-error-card">

            <div class="data-error-icon">
                ⚠️
            </div>

            <h2>
                Past Paper Data Error
            </h2>

            <p>
                <strong>
                    pastpapers.data.js
                </strong>
                haijasomeka au data yake haijapatikana.
            </p>

            <div class="data-error-files">

                <p>
                    Hakikisha files hizi zipo
                    kwenye folder moja:
                </p>

                <code>
                    pastpapers.html
                </code>

                <code>
                    pastpapers.data.js
                </code>

                <code>
                    pastpapers.js
                </code>

            </div>

        </div>

    `;

    if (backButton) {
        backButton.style.display = "none";
    }

}


/* ============================================================
   UTILITY
============================================================ */

function safeText(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }

    return String(value);

}


function cleanName(value) {

    return safeText(value)
        .replaceAll("_", " ")
        .replaceAll("-", " ")
        .replace(/\s+/g, " ")
        .trim();

}


function titleCase(value) {

    return cleanName(value)
        .replace(/\b\w/g, function(letter) {

            return letter.toUpperCase();

        });

}


function normalize(value) {

    return safeText(value)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "_")
        .replace(/-/g, "_");

}


/* ============================================================
   GET CONFIG
============================================================ */

function getConfig() {

    if (
        window.pastPaperConfig &&
        typeof window.pastPaperConfig === "object"
    ) {

        return window.pastPaperConfig;

    }

    return null;

}


/* ============================================================
   GET ALL PAPERS
============================================================ */

function getAllPapers() {

    if (
        !Array.isArray(window.pastPapers)
    ) {

        return [];

    }

    return window.pastPapers;

}


/* ============================================================
   GET FORM VALUE
============================================================ */

function getFormValue(paper) {

    return (
        paper.form ||
        paper.level ||
        paper.class ||
        paper.formLevel ||
        paper.form_id ||
        ""
    );

}


/* ============================================================
   GET SUBJECT VALUE
============================================================ */

function getSubjectValue(paper) {

    return (
        paper.subject ||
        paper.subjectName ||
        ""
    );

}


/* ============================================================
   GET TYPE VALUE
============================================================ */

function getTypeValue(paper) {

    return (
        paper.type ||
        paper.paperType ||
        paper.category ||
        ""
    );

}


/* ============================================================
   GET REGION VALUE
============================================================ */

function getRegionValue(paper) {

    return (
        paper.region ||
        paper.mkoa ||
        paper.location ||
        ""
    );

}


/* ============================================================
   GET YEAR VALUE
============================================================ */

function getYearValue(paper) {

    return (
        paper.year ||
        paper.examYear ||
        paper.mwaka ||
        ""
    );

}


/* ============================================================
   GET FILE VALUE
============================================================ */

function getFileValue(paper) {

    return (
        paper.file ||
        paper.url ||
        paper.pdf ||
        paper.path ||
        paper.href ||
        ""
    );

}


/* ============================================================
   GET TITLE
============================================================ */

function getPaperTitle(paper) {

    return (
        paper.title ||
        paper.name ||
        paper.paper ||
        "Past Paper"
    );

}


/* ============================================================
   FORM MATCH
============================================================ */

function matchesForm(paper, formId) {

    const value =
        normalize(getFormValue(paper));

    const target =
        normalize(formId);

    if (
        value === target
    ) {

        return true;

    }

    if (
        value === target.replace("form", "")
    ) {

        return true;

    }

    if (
        value === "form_" +
        target.replace("form", "")
    ) {

        return true;

    }

    if (
        value === "form " +
        target.replace("form", "")
    ) {

        return true;

    }

    return false;

}


/* ============================================================
   GENERIC UNIQUE VALUES
============================================================ */

function uniqueValues(
    papers,
    getter
) {

    const values = [];

    papers.forEach(function(paper) {

        const value =
            getter(paper);

        if (
            value === null ||
            value === undefined ||
            value === ""
        ) {

            return;

        }

        const exists =
            values.some(function(existing) {

                return normalize(existing) ===
                       normalize(value);

            });

        if (!exists) {

            values.push(value);

        }

    });

    return values;

}


/* ============================================================
   FILTER PAPERS
============================================================ */

function filterPapers() {

    let papers =
        getAllPapers();


    /* FORM */

    if (
        PPState.form
    ) {

        papers =
            papers.filter(function(paper) {

                return matchesForm(
                    paper,
                    PPState.form
                );

            });

    }


    /* SUBJECT */

    if (
        PPState.subject
    ) {

        const target =
            normalize(PPState.subject);

        papers =
            papers.filter(function(paper) {

                return normalize(
                    getSubjectValue(paper)
                ) === target;

            });

    }


    /* TYPE */

    if (
        PPState.type
    ) {

        const target =
            normalize(PPState.type);

        papers =
            papers.filter(function(paper) {

                return normalize(
                    getTypeValue(paper)
                ) === target;

            });

    }


    /* REGION */

    if (
        PPState.region
    ) {

        const target =
            normalize(PPState.region);

        papers =
            papers.filter(function(paper) {

                return normalize(
                    getRegionValue(paper)
                ) === target;

            });

    }


    /* YEAR */

    if (
        PPState.year
    ) {

        const target =
            String(PPState.year);

        papers =
            papers.filter(function(paper) {

                return String(
                    getYearValue(paper)
                ) === target;

            });

    }


    return papers;

}


/* ============================================================
   HISTORY
============================================================ */

function saveHistory() {

    history.pushState(
        {
            level:
                PPState.level,

            form:
                PPState.form,

            subject:
                PPState.subject,

            type:
                PPState.type,

            region:
                PPState.region,

            year:
                PPState.year

        },

        "",

        window.location.href
    );

}


/* ============================================================
   UPDATE BREADCRUMB
============================================================ */

function updateBreadcrumb() {

    if (!breadcrumb) {
        return;
    }


    const parts = [];


    parts.push("Past Papers");


    if (
        PPState.form
    ) {

        parts.push(
            titleCase(PPState.form)
        );

    }


    if (
        PPState.subject
    ) {

        parts.push(
            titleCase(PPState.subject)
        );

    }


    if (
        PPState.type
    ) {

        parts.push(
            titleCase(PPState.type)
        );

    }


    if (
        PPState.region
    ) {

        parts.push(
            titleCase(PPState.region)
        );

    }


    if (
        PPState.year
    ) {

        parts.push(
            PPState.year
        );

    }


    breadcrumb.innerHTML =
        parts.map(function(part, index) {

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

        }).join("");

}


/* ============================================================
   BACK BUTTON
============================================================ */

function updateBackButton() {

    if (!backButton) {
        return;
    }


    if (
        PPState.level === "forms"
    ) {

        backButton.style.display =
            "none";

    } else {

        backButton.style.display =
            "inline-flex";

    }

}


/* ============================================================
   CARD
============================================================ */

function createCard(
    icon,
    title,
    description,
    buttonText,
    onclick,
    extraClass = ""
) {

    return `

        <div class="
            selection-card
            past-paper-card
            ${extraClass}
        ">

            <div>

                <div class="paper-card-icon">
                    ${icon}
                </div>

                <h3>
                    ${title}
                </h3>

                <p>
                    ${description}
                </p>

            </div>

            <button
                class="open-btn"
                onclick="${onclick}">

                ${buttonText}

            </button>

        </div>

    `;

}


/* ============================================================
   RENDER FORMS
============================================================ */

function renderForms() {

    PPState.level =
        "forms";

    PPState.form =
        null;

    PPState.subject =
        null;

    PPState.type =
        null;

    PPState.region =
        null;

    PPState.year =
        null;


    updateBreadcrumb();

    updateBackButton();


    let html = `

        <div class="step-title">

            <div class="step-number">
                1
            </div>

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


    const icons = [
        "📘",
        "📗",
        "📙",
        "📕",
        "📔",
        "📓"
    ];


    for (
        let i = 1;
        i <= 6;
        i++
    ) {

        const form =
            "form" + i;

        html += createCard(

            icons[i - 1],

            "Form " + i,

            "Physics & Chemistry Past Papers",

            "FUNGUA FORM " + i,

            `openForm('${form}')`

        );

    }


    html += `

        </div>

    `;


    stepContainer.innerHTML =
        html;

}


/* ============================================================
   OPEN FORM
============================================================ */

function openForm(form) {

    PPState.level =
        "subjects";

    PPState.form =
        form;

    PPState.subject =
        null;

    PPState.type =
        null;

    PPState.region =
        null;

    PPState.year =
        null;


    saveHistory();

    renderSubjects();

}


/* ============================================================
   RENDER SUBJECTS
============================================================ */

function renderSubjects() {

    updateBreadcrumb();

    updateBackButton();


    const papers =
        filterOnlyForm();


    const subjects =
        uniqueValues(
            papers,
            getSubjectValue
        );


    let html = `

        <div class="step-title">

            <div class="step-number">
                2
            </div>

            <h2>
                Chagua Subject
            </h2>

            <p>
                ${titleCase(PPState.form)}
                — Chagua somo.
            </p>

        </div>

        <div class="selection-grid">

    `;


    if (
        subjects.length === 0
    ) {

        html += emptyCard(
            "Hakuna Subject",
            "Hakuna Past Paper iliyopatikana kwa Form hii."
        );

    }


    subjects.forEach(function(subject) {

        const icon =
            normalize(subject)
                .includes("physics")
                ? "⚛️"
                : "🧪";


        html += createCard(

            icon,

            titleCase(subject),

            "Past Papers za " +
            titleCase(subject),

            "FUNGUA " +
            titleCase(subject).toUpperCase(),

            `openSubject('${escapeJS(subject)}')`

        );

    });


    html += `
        </div>
    `;


    stepContainer.innerHTML =
        html;

}


/* ============================================================
   FILTER ONLY FORM
============================================================ */

function filterOnlyForm() {

    return getAllPapers()
        .filter(function(paper) {

            return matchesForm(
                paper,
                PPState.form
            );

        });

}


/* ============================================================
   OPEN SUBJECT
============================================================ */

function openSubject(subject) {

    PPState.level =
        "types";

    PPState.subject =
        subject;

    PPState.type =
        null;

    PPState.region =
        null;

    PPState.year =
        null;


    saveHistory();

    renderTypes();

}


/* ============================================================
   RENDER TYPES
============================================================ */

function renderTypes() {

    updateBreadcrumb();

    updateBackButton();


    const papers =
        filterPapers();


    const types =
        uniqueValues(
            papers,
            getTypeValue
        );


    let html = `

        <div class="step-title">

            <div class="step-number">
                3
            </div>

            <h2>
                Chagua Aina ya Paper
            </h2>

            <p>
                Chagua aina ya examination paper.
            </p>

        </div>

        <div class="selection-grid">

    `;


    if (
        types.length === 0
    ) {

        html += emptyCard(
            "Hakuna Paper",
            "Hakuna aina ya Past Paper iliyopatikana kwa subject hii."
        );

    }


    types.forEach(function(type) {

        html += createCard(

            "📝",

            titleCase(type),

            "Past Papers — " +
            titleCase(type),

            "FUNGUA " +
            titleCase(type).toUpperCase(),

            `openType('${escapeJS(type)}')`

        );

    });


    html += `
        </div>
    `;


    stepContainer.innerHTML =
        html;

}


/* ============================================================
   OPEN TYPE
============================================================ */

function openType(type) {

    PPState.level =
        "regions";

    PPState.type =
        type;

    PPState.region =
        null;

    PPState.year =
        null;


    saveHistory();

    renderRegions();

}


/* ============================================================
   RENDER REGIONS
============================================================ */

function renderRegions() {

    updateBreadcrumb();

    updateBackButton();


    const papers =
        filterPapers();


    const regions =
        uniqueValues(
            papers,
            getRegionValue
        );


    let html = `

        <div class="step-title">

            <div class="step-number">
                4
            </div>

            <h2>
                Chagua Mkoa
            </h2>

            <p>
                Chagua mkoa wa Past Paper.
            </p>

        </div>

        <div class="selection-grid">

    `;


    if (
        regions.length === 0
    ) {

        html += emptyCard(
            "Hakuna Mkoa",
            "Hakuna Past Paper yenye mkoa kwa uchaguzi huu."
        );

    }


    regions
        .sort(function(a, b) {

            return titleCase(a)
                .localeCompare(
                    titleCase(b)
                );

        })
        .forEach(function(region) {

            html += createCard(

                "📍",

                titleCase(region),

                "Past Papers kutoka " +
                titleCase(region),

                "FUNGUA " +
                titleCase(region).toUpperCase(),

                `openRegion('${escapeJS(region)}')`

            );

        });


    html += `
        </div>
    `;


    stepContainer.innerHTML =
        html;

}


/* ============================================================
   OPEN REGION
============================================================ */

function openRegion(region) {

    PPState.level =
        "years";

    PPState.region =
        region;

    PPState.year =
        null;


    saveHistory();

    renderYears();

}


/* ============================================================
   RENDER YEARS
============================================================ */

function renderYears() {

    updateBreadcrumb();

    updateBackButton();


    const papers =
        filterPapers();


    const years =
        uniqueValues(
            papers,
            getYearValue
        );


    years.sort(function(a, b) {

        return Number(b) -
               Number(a);

    });


    let html = `

        <div class="step-title">

            <div class="step-number">
                5
            </div>

            <h2>
                Chagua Mwaka
            </h2>

            <p>
                ${titleCase(PPState.region)}
                —
                Chagua mwaka.
            </p>

        </div>

        <div class="selection-grid">

    `;


    if (
        years.length === 0
    ) {

        html += emptyCard(
            "Hakuna Mwaka",
            "Hakuna mwaka wa Past Paper uliopatikana."
        );

    }


    years.forEach(function(year) {

        html += createCard(

            "📅",

            String(year),

            "Past Papers za mwaka " +
            year,

            "FUNGUA " +
            year,

            `openYear('${escapeJS(String(year))}')`

        );

    });


    html += `
        </div>
    `;


    stepContainer.innerHTML =
        html;

}


/* ============================================================
   OPEN YEAR
============================================================ */

function openYear(year) {

    PPState.level =
        "papers";

    PPState.year =
        year;


    saveHistory();

    renderPapers();

}


/* ============================================================
   RENDER PAPERS
============================================================ */

function renderPapers() {

    updateBreadcrumb();

    updateBackButton();


    const papers =
        filterPapers();


    let html = `

        <div class="step-title">

            <div class="step-number">
                6
            </div>

            <h2>
                Papers
            </h2>

            <p>
                Chagua paper unayotaka
                kufungua.
            </p>

        </div>

        <div class="selection-grid">

    `;


    if (
        papers.length === 0
    ) {

        html += emptyCard(
            "Hakuna Papers",
            "Hakuna PDF iliyopatikana kwa uchaguzi huu."
        );

    }


    papers.forEach(function(paper, index) {

        const title =
            getPaperTitle(paper);

        const file =
            getFileValue(paper);


        html += `

            <div class="
                selection-card
                paper-file-card
            ">

                <div>

                    <div class="paper-card-icon">
                        📄
                    </div>

                    <h3>
                        ${escapeHTML(title)}
                    </h3>

                    <p>
                        ${titleCase(
                            getSubjectValue(paper)
                        )}
                        —
                        ${titleCase(
                            getTypeValue(paper)
                        )}
                        —
                        ${getYearValue(paper)}
                    </p>

                </div>

                ${
                    file
                    ? `

                        <button
                            class="open-btn pdf-btn"
                            onclick="
                                openPDF(
                                    '${escapeJS(file)}'
                                )
                            ">

                            📄 FUNGUA PDF

                        </button>

                    `
                    :
                    `

                        <button
                            class="open-btn"
                            disabled>

                            PDF HAIPO

                        </button>

                    `
                }

            </div>

        `;

    });


    html += `
        </div>
    `;


    stepContainer.innerHTML =
        html;

}


/* ============================================================
   OPEN PDF
============================================================ */

function openPDF(file) {

    if (
        !file
    ) {

        alert(
            "PDF haijapatikana."
        );

        return;

    }


    /*
       Kama file inaanza na http/https,
       tumia moja kwa moja.
    */

    if (
        /^https?:\/\//i.test(file)
    ) {

        window.open(
            file,
            "_blank"
        );

        return;

    }


    /*
       Kama ni relative path kama:

       papers/form6/physics/...
       
       tunatengeneza URL sahihi
       kulingana na location ya website.
    */

    const cleanFile =
        String(file)
            .replace(/^\/+/, "");


    const pdfURL =
        new URL(
            cleanFile,
            window.location.origin +
            window.location.pathname
        ).href;


    window.open(
        pdfURL,
        "_blank"
    );

}


/* ============================================================
   EMPTY CARD
============================================================ */

function emptyCard(
    title,
    message
) {

    return `

        <div class="
            selection-card
            empty-card
        ">

            <div>

                <div class="paper-card-icon">
                    📂
                </div>

                <h3>
                    ${title}
                </h3>

                <p>
                    ${message}
                </p>

            </div>

        </div>

    `;

}


/* ============================================================
   HTML ESCAPE
============================================================ */

function escapeHTML(value) {

    return safeText(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* ============================================================
   JAVASCRIPT ESCAPE
============================================================ */

function escapeJS(value) {

    return safeText(value)
        .replaceAll("\\", "\\\\")
        .replaceAll("'", "\\'")
        .replaceAll("\n", "\\n")
        .replaceAll("\r", "\\r");

}


/* ============================================================
   BACK BUTTON CLICK
============================================================ */

function goBack() {

    if (
        PPState.level === "forms"
    ) {

        window.location.href =
            "index.html";

        return;

    }


    history.back();

}


/* ============================================================
   POPSTATE
============================================================ */

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


        PPState.level =
            state.level ||
            "forms";

        PPState.form =
            state.form ||
            null;

        PPState.subject =
            state.subject ||
            null;

        PPState.type =
            state.type ||
            null;

        PPState.region =
            state.region ||
            null;

        PPState.year =
            state.year ||
            null;


        renderCurrentLevel();

    }
);


/* ============================================================
   RENDER CURRENT LEVEL
============================================================ */

function renderCurrentLevel() {

    switch (
        PPState.level
    ) {

        case "forms":

            renderForms();

            break;


       
