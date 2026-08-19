/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS NAVIGATION ENGINE

   ORDER:

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
   This file reads:
   window.pastPaperConfig
   window.pastPapers

   from pastpapers.data.js
========================================================= */


/* =========================================================
   GLOBAL STATE
========================================================= */

const PP_STATE = {

    level: "forms",

    form: null,

    subject: null,

    type: null,

    region: null,

    year: null

};


/* =========================================================
   DOM
========================================================= */

const ppContent =
    document.getElementById("ppContent");

const ppBreadcrumb =
    document.getElementById("ppBreadcrumb");

const ppBack =
    document.getElementById("ppBack");


/* =========================================================
   BASIC CHECK
========================================================= */

function ppCheckData() {

    if (
        typeof window.pastPapers !== "object" ||
        window.pastPapers === null
    ) {

        ppShowError(
            "pastpapers.data.js haijasomeka au window.pastPapers haipo."
        );

        return false;

    }


    return true;

}


/* =========================================================
   START
========================================================= */

function ppStart() {

    if (!ppCheckData()) {
        return;
    }


    PP_STATE.level = "forms";

    PP_STATE.form = null;
    PP_STATE.subject = null;
    PP_STATE.type = null;
    PP_STATE.region = null;
    PP_STATE.year = null;


    ppRenderForms();

}


/* =========================================================
   FORM 1 - 6
========================================================= */

function ppRenderForms() {

    PP_STATE.level = "forms";

    PP_STATE.form = null;
    PP_STATE.subject = null;
    PP_STATE.type = null;
    PP_STATE.region = null;
    PP_STATE.year = null;


    ppBack.style.display = "none";


    ppSetBreadcrumb([
        "📚 Past Papers"
    ]);


    let html = `

        <div class="pp-step">

            <div class="pp-step-number">
                1
            </div>

            <h2>
                Chagua Kidato
            </h2>

            <p>
                Chagua kidato unachotaka kupata
                past papers.
            </p>

        </div>

        <div class="pp-grid">

    `;


    for (
        let i = 1;
        i <= 6;
        i++
    ) {

        const formId =
            "form" + i;


        html += `

            <article class="pp-card">

                <div class="pp-card-icon">
                    📘
                </div>

                <h3>
                    Form ${i}
                </h3>

                <p>
                    Physics & Chemistry
                    Past Papers
                </p>

                <button
                    class="pp-open"
                    onclick="ppOpenForm('${formId}')">

                    FUNGUA FORM ${i}

                </button>

            </article>

        `;

    }


    html += `

        </div>

    `;


    ppContent.innerHTML =
        html;

}


/* =========================================================
   OPEN FORM
========================================================= */

function ppOpenForm(
    form
) {

    if (
        !window.pastPapers[form]
    ) {

        ppShowEmpty(
            `Hakuna past paper data ya Form ${form.replace("form", "")}.`
        );

        return;

    }


    PP_STATE.level =
        "subjects";

    PP_STATE.form =
        form;

    PP_STATE.subject =
        null;

    PP_STATE.type =
        null;

    PP_STATE.region =
        null;

    PP_STATE.year =
        null;


    ppRenderSubjects();

}


/* =========================================================
   SUBJECT
========================================================= */

function ppRenderSubjects() {

    ppBack.style.display =
        "inline-flex";


    ppSetBreadcrumb([
        "📚 Past Papers",
        ppFormName(PP_STATE.form)
    ]);


    const formData =
        window.pastPapers[
            PP_STATE.form
        ];


    let subjects = [];


    if (
        formData &&
        typeof formData === "object"
    ) {

        subjects =
            Object.keys(formData);

    }


    /*
    =========================================================
    FILTER ONLY PHYSICS & CHEMISTRY
    =========================================================
    */

    subjects =
        subjects.filter(
            subject =>
                subject.toLowerCase() === "physics" ||
                subject.toLowerCase() === "chemistry"
        );


    let html = `

        <div class="pp-step">

            <div class="pp-step-number">
                2
            </div>

            <h2>
                ${ppFormName(PP_STATE.form)}
            </h2>

            <p>
                Chagua subject.
            </p>

        </div>

        <div class="pp-grid">

    `;


    if (
        subjects.length === 0
    ) {

        html += `

            <div class="pp-empty">

                ⚠️ Hakuna subjects
                zilizopatikana kwenye
                ${ppFormName(PP_STATE.form)}.

            </div>

        `;

    }


    subjects.forEach(
        subject => {

            const icon =
                subject.toLowerCase() === "physics"
                ? "⚛️"
                : "🧪";


            html += `

                <article class="pp-card">

                    <div class="pp-card-icon">
                        ${icon}
                    </div>

                    <h3>
                        ${ppTitle(subject)}
                    </h3>

                    <p>
                        ${ppFormName(PP_STATE.form)}
                        ${ppTitle(subject)}
                        examination papers.
                    </p>

                    <button
                        class="pp-open"
                        onclick="ppOpenSubject('${ppEscape(subject)}')">

                        FUNGUA ${ppTitle(subject).toUpperCase()}

                    </button>

                </article>

            `;

        }
    );


    html += `

        </div>

    `;


    ppContent.innerHTML =
        html;

}


/* =========================================================
   OPEN SUBJECT
========================================================= */

function ppOpenSubject(
    subject
) {

    PP_STATE.level =
        "types";

    PP_STATE.subject =
        subject;

    PP_STATE.type =
        null;

    PP_STATE.region =
        null;

    PP_STATE.year =
        null;


    ppRenderTypes();

}


/* =========================================================
   TYPE
========================================================= */

function ppRenderTypes() {

    ppSetBreadcrumb([
        "📚 Past Papers",
        ppFormName(PP_STATE.form),
        ppTitle(PP_STATE.subject)
    ]);


    const papers =
        ppGetSubjectPapers();


    const types =
        ppUnique(
            papers.map(
                paper => paper.type
            )
        );


    let html = `

        <div class="pp-step">

            <div class="pp-step-number">
                3
            </div>

            <h2>
                ${ppTitle(PP_STATE.subject)}
            </h2>

            <p>
                Chagua aina ya examination paper.
            </p>

        </div>

        <div class="pp-grid">

    `;


    if (
        types.length === 0
    ) {

        html += `

            <div class="pp-empty">

                ⚠️ Hakuna paper type
                iliyopatikana.

            </div>

        `;

    }


    types.forEach(
        type => {

            html += `

                <article class="pp-card">

                    <div class="pp-card-icon">
                        📝
                    </div>

                    <h3>
                        ${ppTypeName(type)}
                    </h3>

                    <p>
                        ${ppTitle(PP_STATE.subject)}
                        — ${ppTypeName(type)}
                    </p>

                    <button
                        class="pp-open"
                        onclick="ppOpenType('${ppEscape(type)}')">

                        FUNGUA

                    </button>

                </article>

            `;

        }
    );


    html += `

        </div>

    `;


    ppContent.innerHTML =
        html;

}


/* =========================================================
   OPEN TYPE
========================================================= */

function ppOpenType(
    type
) {

    PP_STATE.level =
        "regions";

    PP_STATE.type =
        type;

    PP_STATE.region =
        null;

    PP_STATE.year =
        null;


    ppRenderRegions();

}


/* =========================================================
   REGION
========================================================= */

function ppRenderRegions() {

    ppSetBreadcrumb([
        "📚 Past Papers",
        ppFormName(PP_STATE.form),
        ppTitle(PP_STATE.subject),
        ppTypeName(PP_STATE.type)
    ]);


    const papers =
        ppGetSubjectPapers()
            .filter(
                paper =>
                    ppNormalize(
                        paper.type
                    ) ===
                    ppNormalize(
                        PP_STATE.type
                    )
            );


    const regions =
        ppUnique(
            papers.map(
                paper => paper.region
            )
        );


    let html = `

        <div class="pp-step">

            <div class="pp-step-number">
                4
            </div>

            <h2>
                Chagua Mkoa
            </h2>

            <p>
                Chagua mkoa wenye papers
                unazotaka.
            </p>

        </div>

        <div class="pp-grid">

    `;


    if (
        regions.length === 0
    ) {

        html += `

            <div class="pp-empty">

                ⚠️ Hakuna mkoa
                uliopatikana kwa
                ${ppTypeName(PP_STATE.type)}.

            </div>

        `;

    }


    regions.forEach(
        region => {

            html += `

                <article class="pp-card">

                    <div class="pp-card-icon">
                        📍
                    </div>

                    <h3>
                        ${ppRegionName(region)}
                    </h3>

                    <p>
                        ${ppTypeName(PP_STATE.type)}
                        papers
                    </p>

                    <button
                        class="pp-open"
                        onclick="ppOpenRegion('${ppEscape(region)}')">

                        FUNGUA

                    </button>

                </article>

            `;

        }
    );


    html += `

        </div>

    `;


    ppContent.innerHTML =
        html;

}


/* =========================================================
   OPEN REGION
========================================================= */

function ppOpenRegion(
    region
) {

    PP_STATE.level =
        "years";

    PP_STATE.region =
        region;

    PP_STATE.year =
        null;


    ppRenderYears();

}


/* =========================================================
   YEAR
========================================================= */

function ppRenderYears() {

    ppSetBreadcrumb([
        "📚 Past Papers",
        ppFormName(PP_STATE.form),
        ppTitle(PP_STATE.subject),
        ppTypeName(PP_STATE.type),
        ppRegionName(PP_STATE.region)
    ]);


    const papers =
        ppGetSubjectPapers()
            .filter(
                paper =>
                    ppNormalize(paper.type) ===
                        ppNormalize(PP_STATE.type)
                    &&
                    ppNormalize(paper.region) ===
                        ppNormalize(PP_STATE.region)
            );


    const years =
        ppUnique(
            papers.map(
                paper => Number(paper.year)
            )
        )
        .sort(
            (a, b) => b - a
        );


    let html = `

        <div class="pp-step">

            <div class="pp-step-number">
                5
            </div>

            <h2>
                Chagua Mwaka
            </h2>

            <p>
                Chagua mwaka wa examination paper.
            </p>

        </div>

        <div class="pp-grid">

    `;


    if (
        years.length === 0
    ) {

        html += `

            <div class="pp-empty">

                ⚠️ Hakuna miaka
                iliyopatikana.

            </div>

        `;

    }


    years.forEach(
        year => {

            html += `

                <article class="pp-card">

                    <div class="pp-card-icon">
                        📅
                    </div>

                    <h3>
                        ${year}
                    </h3>

                    <p>
                        ${ppRegionName(
                            PP_STATE.region
                        )}
                        — ${ppTypeName(
                            PP_STATE.type
                        )}
                    </p>

                    <button
                        class="pp-open"
                        onclick="ppOpenYear(${year})">

                        FUNGUA ${year}

                    </button>

                </article>

            `;

        }
    );


    html += `

        </div>

    `;


    ppContent.innerHTML =
        html;

}


/* =========================================================
   OPEN YEAR
========================================================= */

function ppOpenYear(
    year
) {

    PP_STATE.level =
        "papers";

    PP_STATE.year =
        Number(year);


    ppRenderPapers();

}


/* =========================================================
   FINAL PAPERS
========================================================= */

function ppRenderPapers() {

    ppSetBreadcrumb([
        "📚 Past Papers",
        ppFormName(PP_STATE.form),
        ppTitle(PP_STATE.subject),
        ppTypeName(PP_STATE.type),
        ppRegionName(PP_STATE.region),
        String(PP_STATE.year)
    ]);


    const papers =
        ppGetSubjectPapers()
            .filter(
                paper =>
                    ppNormalize(paper.type) ===
                        ppNormalize(PP_STATE.type)
                    &&
                    ppNormalize(paper.region) ===
                        ppNormalize(PP_STATE.region)
                    &&
                    Number(paper.year) ===
                        Number(PP_STATE.year)
            );


    let html = `

        <div class="pp-step">

            <div class="pp-step-number">
                6
            </div>

            <h2>
                Papers
            </h2>

            <p>
                ${ppTitle(PP_STATE.subject)}
                — ${ppTypeName(PP_STATE.type)}
                — ${ppRegionName(PP_STATE.region)}
                — ${PP_STATE.year}
            </p>

        </div>

        <div class="pp-grid">

    `;


    if (
        papers.length === 0
    ) {

        html += `

            <div class="pp-empty">

                ⚠️ Hakuna paper
                iliyopatikana.

            </div>

        `;

    }


    papers.forEach(
        paper => {

            const file =
                String(
                    paper.file || ""
                );


            const title =
                paper.title ||
                `${ppTitle(PP_STATE.subject)} Paper`;


            html += `

                <article class="pp-card pp-pdf">

                    <div class="pp-card-icon">
                        📄
                    </div>

                    <h3>
                        ${ppSafeText(title)}
                    </h3>

                    <p>
                        ${ppTitle(PP_STATE.subject)}
                        <br>
                        ${ppTypeName(PP_STATE.type)}
                        <br>
                        ${ppRegionName(PP_STATE.region)}
                        — ${PP_STATE.year}
                    </p>

                    ${
                        file
                        ?
                        `
                        <button
                            class="pp-open"
                            onclick="ppOpenPDF('${ppEscape(file)}')">

                            📄 FUNGUA PDF

                        </button>
                        `
                        :
                        `
                        <button
                            class="pp-open"
                            disabled>

                            PDF HAIPO

                        </button>
                        `
                    }

                </article>

            `;

        }
    );


    html += `

        </div>

    `;


    ppContent.innerHTML =
        html;

}


/* =========================================================
   OPEN PDF
========================================================= */

function ppOpenPDF(
    file
) {

    if (
        !file
    ) {

        alert(
            "PDF file haijawekwa kwenye data."
        );

        return;

    }


    /*
    =========================================================
    GITHUB PAGES

    File path mfano:

    papers/form6/chemistry/...
    
    Kwa hiyo tunafungua moja kwa moja
    kutoka kwenye root ya website.
    =========================================================
    */

    const cleanFile =
        file
            .replace(/^\/+/, "");


    window.open(
        cleanFile,
        "_blank",
        "noopener"
    );

}


/* =========================================================
   GET SUBJECT PAPERS
========================================================= */

function ppGetSubjectPapers() {

    if (
        !PP_STATE.form ||
        !PP_STATE.subject
    ) {

        return [];

    }


    const formData =
        window.pastPapers[
            PP_STATE.form
        ];


    if (
        !formData ||
        typeof formData !== "object"
    ) {

        return [];

    }


    const subjectKey =
        Object.keys(formData)
            .find(
                key =>
                    ppNormalize(key) ===
                    ppNormalize(
                        PP_STATE.subject
                    )
            );


    if (
        !subjectKey
    ) {

        return [];

    }


    const papers =
        formData[
            subjectKey
        ];


    if (
        !Array.isArray(papers)
    ) {

        return [];

    }


    return papers;

}


/* =========================================================
   UNIQUE VALUES
========================================================= */

function ppUnique(
    array
) {

    return [
        ...new Set(
            array
                .filter(
                    value =>
                        value !== undefined &&
                        value !== null &&
                        String(value).trim() !== ""
                )
        )
    ];

}


/* =========================================================
   NORMALIZE
========================================================= */

function ppNormalize(
    value
) {

    return String(
        value || ""
    )
        .trim()
        .toLowerCase()
        .replace(/[\s-]+/g, "_");

}


/* =========================================================
   FORM NAME
========================================================= */

function ppFormName(
    form
) {

    const number =
        String(form || "")
            .replace(
                /[^0-9]/g,
                ""
            );


    return number
        ? `Form ${number}`
        : "Form";

}


/* =========================================================
   TITLE
========================================================= */

function ppTitle(
    value
) {

    const text =
        String(value || "");


    if (
        !text
    ) {

        return "";

    }


    return text
        .replace(
            /_/g,
            " "
        )
        .replace(
            /\b\w/g,
            letter =>
                letter.toUpperCase()
        );

}


/* =========================================================
   TYPE NAME
========================================================= */

function ppTypeName(
    type
) {

    const names = {

        annual:
            "Annual Examination",

        midterm:
            "Midterm Examination",

        terminal:
            "Terminal Examination",

        joint:
            "Joint Examination",

        mock:
            "Mock Examination",

        pre_necta:
            "Pre-NECTA Examination",

        ftna:
            "FTNA Examination",

        acsee:
            "ACSEE Examination"

    };


    const key =
        ppNormalize(type);


    return (
        names[key] ||
        ppTitle(type)
    );

}


/* =========================================================
   REGION NAME
========================================================= */

function ppRegionName(
    region
) {

    const names = {

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

        mwanza:
            "Mwanza",

        morogoro:
            "Morogoro",

        tanga:
            "Tanga",

        kigoma:
            "Kigoma",

        tabora:
            "Tabora",

        singida:
            "Singida",

        rukwa:
            "Rukwa",

        katavi:
            "Katavi",

        lindi:
            "Lindi",

        mtwara:
            "Mtwara",

        pwani:
            "Pwani",

        coast:
            "Coast",

        mara:
            "Mara",

        manyara:
            "Manyara",

        njombe:
            "Njombe",

        iringa:
            "Iringa",

        songwe:
            "Songwe",

        tanzania:
            "Tanzania",

        necta:
            "NECTA"

    };


    const key =
        ppNormalize(region);


    return (
        names[key] ||
        ppTitle(region)
    );

}


/* =========================================================
   BREADCRUMB
========================================================= */

function ppSetBreadcrumb(
    parts
) {

    ppBreadcrumb.innerHTML =
        parts
            .map(
                (
                    part,
                    index
                ) => {

                    if (
                        index === 0
                    ) {

                        return `
                            <span>
                                ${ppSafeText(part)}
                            </span>
                        `;

                    }


                    return `

                        <span class="arrow">
                            ›
                        </span>

                        <span>
                            ${ppSafeText(part)}
                        </span>

                    `;

                }
            )
            .join("");

}


/* =========================================================
   BACK BUTTON
========================================================= */

function ppGoBack() {

    switch (
        PP_STATE.level
    ) {

        case "subjects":

            ppRenderForms();

            break;


        case "types":

            ppRenderSubjects();

            break;


        case "regions":

            ppRenderTypes();

            break;


        case "years":

            ppRenderRegions();

            break;


        case "papers":

            ppRenderYears();

            break;


        default:

            ppRenderForms();

            break;

    }

}


/* =========================================================
   BROWSER / ANDROID BACK
========================================================= */

window.addEventListener(
    "popstate",
    function() {

        ppGoBack();

    }
);


/* =========================================================
   ERROR
========================================================= */

function ppShowError(
    message
) {

    ppContent.innerHTML = `

        <div class="pp-error">

            <strong>
                ⚠️ Past Paper Data Error
            </strong>

            <p>
                ${ppSafeText(message)}
            </p>

            <p>
                Hakikisha files hizi zipo
                kwenye folder moja:
            </p>

            <ul>

                <li>
                    pastpapers.html
                </li>

                <li>
                    pastpapers.data.js
                </li>

                <li>
                    pastpapers.js
                </li>

            </ul>

        </div>

    `;

}


/* =========================================================
   EMPTY
========================================================= */

function ppShowEmpty(
    message
) {

    ppContent.innerHTML = `

        <div class="pp-empty">

            ⚠️ ${ppSafeText(message)}

        </div>

    `;

}


/* =========================================================
   SAFE TEXT
========================================================= */

function ppSafeText(
    value
) {

    return String(
        value ?? ""
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
   ESCAPE FOR INLINE JS
========================================================= */

function ppEscape(
    value
) {

    return String(
        value ?? ""
    )
        .replace(
            /\\/g,
            "\\\\"
        )
        .replace(
            /'/g,
            "\\'"
        );

}


/* =========================================================
   START ENGINE
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        ppStart
    );

} else {

    ppStart();

}
