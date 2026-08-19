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
   PAPER / PDF

========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const ppContainer =
    document.getElementById(
        "ppStepContainer"
    );

const ppBreadcrumb =
    document.getElementById(
        "ppBreadcrumb"
    );

const ppBackButton =
    document.getElementById(
        "ppBackButton"
    );


/* =========================================================
   STATE
========================================================= */

let ppState = {

    level: "forms",

    form: null,

    subject: null,

    type: null,

    region: null,

    year: null

};


/* =========================================================
   DATA CHECK
========================================================= */

function ppGetData() {

    if (
        typeof window.pastPapers !==
        "object"
    ) {

        console.error(
            "window.pastPapers haipo."
        );

        return null;

    }


    return window.pastPapers;

}


/* =========================================================
   FORM CONFIG
========================================================= */

function ppGetForms() {

    const config =
        window.pastPaperConfig;


    if (
        config &&
        typeof config === "object"
    ) {

        return Object.keys(
            config
        );

    }


    return [
        "form1",
        "form2",
        "form3",
        "form4",
        "form5",
        "form6"
    ];

}


/* =========================================================
   FORM NAME
========================================================= */

function ppFormName(
    form
) {

    const number =
        String(form)
            .replace(
                "form",
                ""
            );

    return `Form ${number}`;

}


/* =========================================================
   INITIALIZE
========================================================= */

function ppInitialize() {

    /*
    ---------------------------------------------------------
    DO NOT SHOW DATA ERROR HERE.

    Even if data has a problem, Form 1–6 must still appear.
    ---------------------------------------------------------
    */


    ppState = {

        level: "forms",

        form: null,

        subject: null,

        type: null,

        region: null,

        year: null

    };


    ppRenderForms();


    history.replaceState(

        {
            level: "forms"
        },

        "",

        window.location.href

    );

}


/* =========================================================
   HISTORY
========================================================= */

function ppPushHistory() {

    history.pushState(

        {
            level:
                ppState.level,

            form:
                ppState.form,

            subject:
                ppState.subject,

            type:
                ppState.type,

            region:
                ppState.region,

            year:
                ppState.year

        },

        "",

        window.location.href

    );

}


/* =========================================================
   BREADCRUMB
========================================================= */

function ppUpdateBreadcrumb() {

    const items = [
        "📚 Past Papers"
    ];


    if (ppState.form) {

        items.push(
            ppFormName(
                ppState.form
            )
        );

    }


    if (ppState.subject) {

        items.push(
            ppPrettySubject(
                ppState.subject
            )
        );

    }


    if (ppState.type) {

        items.push(
            ppPrettyType(
                ppState.type
            )
        );

    }


    if (ppState.region) {

        items.push(
            ppPrettyRegion(
                ppState.region
            )
        );

    }


    if (ppState.year) {

        items.push(
            String(
                ppState.year
            )
        );

    }


    ppBreadcrumb.innerHTML =
        items.map(

            (item, index) => {

                if (
                    index === 0
                ) {

                    return `
                        <span
                            class="pp-breadcrumb-current">
                            ${item}
                        </span>
                    `;

                }


                return `

                    <span
                        class="pp-breadcrumb-arrow">
                        ›
                    </span>

                    <span>
                        ${item}
                    </span>

                `;

            }

        ).join("");

}


/* =========================================================
   BACK BUTTON
========================================================= */

function ppUpdateBackButton() {

    if (
        ppState.level ===
        "forms"
    ) {

        ppBackButton.style.display =
            "none";

    } else {

        ppBackButton.style.display =
            "inline-flex";

    }

}


/* =========================================================
   RENDER FORMS
========================================================= */

function ppRenderForms() {

    ppState.level =
        "forms";

    ppState.form =
        null;

    ppState.subject =
        null;

    ppState.type =
        null;

    ppState.region =
        null;

    ppState.year =
        null;


    ppUpdateBreadcrumb();

    ppUpdateBackButton();


    let html = `

        <div class="pp-step-header">

            <div class="pp-step-number">
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


        <div class="pp-card-grid">

    `;


    for (
        let i = 1;
        i <= 6;
        i++
    ) {

        const form =
            `form${i}`;


        const icons = [
            "📘",
            "📗",
            "📙",
            "📕",
            "📔",
            "📓"
        ];


        html += `

            <article
                class="pp-card pp-form-card">

                <div>

                    <div class="pp-card-icon">
                        ${icons[i - 1]}
                    </div>

                    <h3>
                        Form ${i}
                    </h3>

                    <p>
                        Physics & Chemistry
                        Past Papers
                    </p>

                </div>


                <button
                    class="pp-action-btn"
                    onclick="ppOpenForm('${form}')">

                    FUNGUA FORM ${i}

                </button>

            </article>

        `;

    }


    html += `

        </div>

    `;


    ppContainer.innerHTML =
        html;

}


/* =========================================================
   OPEN FORM
========================================================= */

function ppOpenForm(
    form
) {

    ppState.level =
        "subjects";

    ppState.form =
        form;

    ppState.subject =
        null;

    ppState.type =
        null;

    ppState.region =
        null;

    ppState.year =
        null;


    ppPushHistory();

    ppRenderSubjects();

}


/* =========================================================
   RENDER SUBJECTS
========================================================= */

function ppRenderSubjects() {

    ppUpdateBreadcrumb();

    ppUpdateBackButton();


    const formData =
        window.pastPapers &&
        window.pastPapers[
            ppState.form
        ];


    const availableSubjects = [];


    if (
        formData &&
        typeof formData ===
        "object"
    ) {

        if (
            Array.isArray(
                formData.physics
            )
        ) {

            availableSubjects.push(
                "physics"
            );

        }


        if (
            Array.isArray(
                formData.chemistry
            )
        ) {

            availableSubjects.push(
                "chemistry"
            );

        }

    }


    /*
    ---------------------------------------------------------
    IMPORTANT:

    Even if current data is empty,
    Physics and Chemistry still appear.
    ---------------------------------------------------------
    */

    if (
        availableSubjects.length === 0
    ) {

        availableSubjects.push(
            "physics",
            "chemistry"
        );

    }


    let html = `

        <div class="pp-step-header">

            <div class="pp-step-number">
                2
            </div>

            <h2>
                ${ppFormName(
                    ppState.form
                )}
            </h2>

            <p>
                Chagua somo.
            </p>

        </div>


        <div class="pp-card-grid">

    `;


    availableSubjects.forEach(
        subject => {

            const physics =
                subject ===
                "physics";


            html += `

                <article
                    class="
                        pp-card
                        pp-subject-card
                        ${
                            physics
                            ? "pp-physics"
                            : "pp-chemistry"
                        }
                    ">

                    <div>

                        <div
                            class="pp-card-icon">

                            ${
                                physics
                                ? "⚛️"
                                : "🧪"
                            }

                        </div>

                        <h3>
                            ${ppPrettySubject(
                                subject
                            )}
                        </h3>

                        <p>
                            ${ppFormName(
                                ppState.form
                            )}
                            ${
                                ppPrettySubject(
                                    subject
                                )
                            }
                            Past Papers
                        </p>

                    </div>


                    <button
                        class="pp-action-btn"
                        onclick="ppOpenSubject('${subject}')">

                        FUNGUA
                        ${subject.toUpperCase()}

                    </button>

                </article>

            `;

        }

    );


    html += `
        </div>
    `;


    ppContainer.innerHTML =
        html;

}


/* =========================================================
   OPEN SUBJECT
========================================================= */

function ppOpenSubject(
    subject
) {

    ppState.level =
        "types";

    ppState.subject =
        subject;

    ppState.type =
        null;

    ppState.region =
        null;

    ppState.year =
        null;


    ppPushHistory();

    ppRenderTypes();

}


/* =========================================================
   RENDER TYPES
========================================================= */

function ppRenderTypes() {

    ppUpdateBreadcrumb();

    ppUpdateBackButton();


    const papers =
        ppGetCurrentPapers();


    const types =
        ppUniqueValues(
            papers,
            "type"
        );


    let html = `

        <div class="pp-step-header">

            <div class="pp-step-number">
                3
            </div>

            <h2>
                Aina ya Mtihani
            </h2>

            <p>
                Chagua aina ya Past Paper.
            </p>

        </div>


        <div class="pp-card-grid">

    `;


    if (
        types.length === 0
    ) {

        html += ppEmptyCard(
            "📝",
            "Hakuna aina ya paper",
            "Hakuna records zilizopatikana kwa hatua hii."
        );

    }


    types.forEach(
        type => {

            html += `

                <article
                    class="pp-card pp-type-card">

                    <div>

                        <div
                            class="pp-card-icon">
                            📝
                        </div>

                        <h3>
                            ${ppPrettyType(
                                type
                            )}
                        </h3>

                        <p>
                            Chagua ili kuona
                            mikoa yenye papers.
                        </p>

                    </div>


                    <button
                        class="pp-action-btn"
                        onclick="ppOpenType('${escapeJS(type)}')">

                        FUNGUA

                    </button>

                </article>

            `;

        }
    );


    html += `</div>`;


    ppContainer.innerHTML =
        html;

}


/* =========================================================
   OPEN TYPE
========================================================= */

function ppOpenType(
    type
) {

    ppState.level =
        "regions";

    ppState.type =
        type;

    ppState.region =
        null;

    ppState.year =
        null;


    ppPushHistory();

    ppRenderRegions();

}


/* =========================================================
   RENDER REGIONS
========================================================= */

function ppRenderRegions() {

    ppUpdateBreadcrumb();

    ppUpdateBackButton();


    const papers =
        ppGetCurrentPapers();


    const regions =
        ppUniqueValues(
            papers,
            "region"
        );


    let html = `

        <div class="pp-step-header">

            <div class="pp-step-number">
                4
            </div>

            <h2>
                Chagua Mkoa
            </h2>

            <p>
                Chagua mkoa wenye
                Past Papers.
            </p>

        </div>


        <div class="pp-card-grid">

    `;


    if (
        regions.length === 0
    ) {

        html += ppEmptyCard(
            "📍",
            "Hakuna mkoa",
            "Hakuna papers zilizopatikana kwa aina hii."
        );

    }


    regions.forEach(
        region => {

            html += `

                <article
                    class="pp-card pp-region-card">

                    <div>

                        <div
                            class="pp-card-icon">
                            📍
                        </div>

                        <h3>
                            ${ppPrettyRegion(
                                region
                            )}
                        </h3>

                        <p>
                            Chagua mkoa
                            kuendelea kwenye miaka.
                        </p>

                    </div>


                    <button
                        class="pp-action-btn"
                        onclick="ppOpenRegion('${escapeJS(region)}')">

                        FUNGUA

                    </button>

                </article>

            `;

        }
    );


    html += `</div>`;


    ppContainer.innerHTML =
        html;

}


/* =========================================================
   OPEN REGION
========================================================= */

function ppOpenRegion(
    region
) {

    ppState.level =
        "years";

    ppState.region =
        region;

    ppState.year =
        null;


    ppPushHistory();

    ppRenderYears();

}


/* =========================================================
   RENDER YEARS
========================================================= */

function ppRenderYears() {

    ppUpdateBreadcrumb();

    ppUpdateBackButton();


    const papers =
        ppGetCurrentPapers();


    const years =
        [
            ...new Set(

                papers

                    .map(
                        paper =>
                            Number(
                                paper.year
                            )
                    )

                    .filter(
                        year =>
                            !Number.isNaN(
                                year
                            )
                    )

            )
        ];


    years.sort(
        (a, b) =>
            b - a
    );


    let html = `

        <div class="pp-step-header">

            <div class="pp-step-number">
                5
            </div>

            <h2>
                Chagua Mwaka
            </h2>

            <p>
                Chagua mwaka wa paper.
            </p>

        </div>


        <div class="pp-card-grid">

    `;


    if (
        years.length === 0
    ) {

        html += ppEmptyCard(
            "📅",
            "Hakuna mwaka",
            "Hakuna papers zilizopatikana kwa mkoa huu."
        );

    }


    years.forEach(
        year => {

            html += `

                <article
                    class="pp-card pp-year-card">

                    <div>

                        <div
                            class="pp-card-icon">
                            📅
                        </div>

                        <h3>
                            ${year}
                        </h3>

                        <p>
                            Past Papers
                        </p>

                    </div>


                    <button
                        class="pp-action-btn"
                        onclick="ppOpenYear(${year})">

                        FUNGUA ${year}

                    </button>

                </article>

            `;

        }
    );


    html += `</div>`;


    ppContainer.innerHTML =
        html;

}


/* =========================================================
   OPEN YEAR
========================================================= */

function ppOpenYear(
    year
) {

    ppState.level =
        "papers";

    ppState.year =
        Number(year);


    ppPushHistory();

    ppRenderPapers();

}


/* =========================================================
   RENDER PAPERS
========================================================= */

function ppRenderPapers() {

    ppUpdateBreadcrumb();

    ppUpdateBackButton();


    const papers =
        ppGetCurrentPapers();


    let html = `

        <div class="pp-step-header">

            <div class="pp-step-number">
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


        <div class="pp-card-grid">

    `;


    if (
        papers.length === 0
    ) {

        html += ppEmptyCard(
            "📄",
            "Hakuna PDF",
            "Hakuna paper iliyopatikana kwa uchaguzi huu."
        );

    }


    papers.forEach(
        paper => {

            html += `

                <article
                    class="pp-card pp-paper-card">

                    <div>

                        <div
                            class="pp-card-icon">
                            📄
                        </div>

                        <div
                            class="pp-paper-title">

                            ${safeHTML(
                                paper.title ||
                                "Past Paper"
                            )}

                        </div>


                        <div
                            class="pp-paper-meta">

                            <span
                                class="pp-badge">

                                ${ppPrettyType(
                                    paper.type
                                )}

                            </span>


                            <span
                                class="pp-badge">

                                ${ppPrettyRegion(
                                    paper.region
                                )}

                            </span>


                            <span
                                class="pp-badge">

                                ${paper.year}

                            </span>

                        </div>

                    </div>


                    <a
                        class="pp-pdf-btn"
                        href="${safeAttribute(
                            paper.file
                        )}"
                        target="_blank"
                        rel="noopener">

                        📄 FUNGUA PDF

                    </a>

                </article>

            `;

        }

    );


    html += `</div>`;


    ppContainer.innerHTML =
        html;

}


/* =========================================================
   GET CURRENT PAPERS
========================================================= */

function ppGetCurrentPapers() {

    const data =
        ppGetData();


    if (!data) {

        return [];

    }


    const form =
        data[
            ppState.form
        ];


    if (!form) {

        return [];

    }


    const subject =
        form[
            ppState.subject
        ];


    if (
        !Array.isArray(
            subject
        )
    ) {

        return [];

    }


    return subject.filter(
        paper => {

            if (
                ppState.type &&
                paper.type !==
                ppState.type
            ) {

                return false;

            }


            if (
                ppState.region &&
                paper.region !==
                ppState.region
            ) {

                return false;

            }


            if (
                ppState.year &&
                Number(
                    paper.year
                ) !==
                Number(
                    ppState.year
                )
            ) {

                return false;

            }


            return true;

        }
    );

}


/* =========================================================
   UNIQUE VALUES
========================================================= */

function ppUniqueValues(
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
                        undefined &&
                        value !==
                        null &&
                        value !== ""
                )

        )
    ];

}


/* =========================================================
   PRETTY SUBJECT
========================================================= */

function ppPrettySubject(
    subject
) {

    if (
        subject ===
        "physics"
    ) {

        return "Physics";

    }


    if (
        subject ===
        "chemistry"
    ) {

        return "Chemistry";

    }


    return String(subject)
        .replace(
            /_/g,
            " "
        );

}


/* =========================================================
   PRETTY TYPE
========================================================= */

function ppPrettyType(
    type
) {

    const names = {

        "midterm":
            "Midterm",

        "terminal":
            "Terminal",

        "annual":
            "Annual",

        "joint":
            "Joint",

        "ftna":
            "FTNA",

        "mock":
            "Mock",

        "pre_necta":
            "Pre-NECTA",

        "acsee":
            "ACSEE"

    };


    return (
        names[type] ||
        String(type)
            .replace(
                /_/g,
                " "
            )
            .replace(
                /\b\w/g,
                letter =>
                    letter.toUpperCase()
            )
    );

}


/* =========================================================
   PRETTY REGION
========================================================= */

function ppPrettyRegion(
    region
) {

    const names = {

        "dar_es_salaam":
            "Dar es Salaam",

        "dodoma":
            "Dodoma",

        "arusha":
            "Arusha",

        "mbeya":
            "Mbeya",

        "kagera":
            "Kagera",

        "shinyanga":
            "Shinyanga",

        "necta":
            "NECTA"

    };


    return (
        names[region] ||
        String(region)
            .replace(
                /_/g,
                " "
            )
            .replace(
                /\b\w/g,
                letter =>
                    letter.toUpperCase()
            )
    );

}


/* =========================================================
   EMPTY CARD
========================================================= */

function ppEmptyCard(
    icon,
    title,
    message
) {

    return `

        <article
            class="pp-empty-card">

            <div
                class="pp-empty-icon">

                ${icon}

            </div>

            <h3>
                ${title}
            </h3>

            <p>
                ${message}
            </p>

        </article>

    `;

}


/* =========================================================
   ESCAPE
========================================================= */

function escapeJS(
    value
) {

    return String(value)
        .replace(
            /\\/g,
            "\\\\"
        )
        .replace(
            /'/g,
            "\\'"
        );

}


function safeHTML(
    value
) {

    return String(value)
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


function safeAttribute(
    value
) {

    return safeHTML(
        value
    );

}


/* =========================================================
   BACK BUTTON
========================================================= */

function ppGoBack() {

    if (
        ppState.level ===
        "forms"
    ) {

        window.location.href =
            "index.html";

        return;

    }


    history.back();

}


/* =========================================================
   ANDROID / BROWSER BACK
========================================================= */

window.addEventListener(
    "popstate",
    function(event) {

        const state =
            event.state;


        if (!state) {

            ppRenderForms();

            return;

        }


        ppState.level =
            state.level ||
            "forms";

        ppState.form =
            state.form ||
            null;

        ppState.subject =
            state.subject ||
            null;

        ppState.type =
            state.type ||
            null;

        ppState.region =
            state.region ||
            null;

        ppState.year =
            state.year ||
            null;


        switch (
            ppState.level
        ) {

            case "forms":

                ppRenderForms();

                break;


            case "subjects":

                ppRenderSubjects();

                break;


            case "types":

                ppRenderTypes();

                break;


            case "regions":

                ppRenderRegions();

                break;


            case "years":

                ppRenderYears();

                break;


            case "papers":

                ppRenderPapers();

                break;


            default:

                ppRenderForms();

        }

    }
);


/* =========================================================
   START
========================================================= */

ppInitialize();
