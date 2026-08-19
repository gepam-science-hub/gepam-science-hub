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
   PAPER
      ↓
   PDF

   DATA SOURCE:
   window.pastPapers
========================================================= */


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
   STATE
========================================================= */

let currentState = {

    level: "forms",

    form: null,

    subject: null,

    type: null,

    region: null,

    year: null,

    paper: null

};


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

    arusha:
        "Arusha",

    dar_es_salaam:
        "Dar es Salaam",

    dodoma:
        "Dodoma",

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

    kilimanjaro:
        "Kilimanjaro",

    singida:
        "Singida",

    tabora:
        "Tabora",

    iringa:
        "Iringa",

    mtwara:
        "Mtwara",

    lindi:
        "Lindi",

    ruvuma:
        "Ruvuma",

    katavi:
        "Katavi",

    njombe:
        "Njombe",

    geita:
        "Geita",

    simiyu:
        "Simiyu",

    mara:
        "Mara",

    songwe:
        "Songwe",

    pwani:
        "Pwani",

    zanzibar:
        "Zanzibar",

    necta:
        "NECTA"

};


/* =========================================================
   ICONS
========================================================= */

const typeIcons = {

    midterm: "📝",

    terminal: "📝",

    annual: "📘",

    joint: "🤝",

    ftna: "🏫",

    mock: "📋",

    pre_necta: "🎓",

    acsee: "🏆"

};


/* =========================================================
   SAFE DATA CHECK
========================================================= */

function checkData() {

    if (
        typeof window.pastPapers !==
        "object" ||

        window.pastPapers === null
    ) {

        container.innerHTML = `

            <div class="empty-box">

                <h3>
                    ⚠️ Past Paper Data Error
                </h3>

                <p>
                    <strong>
                        window.pastPapers
                    </strong>
                    haijapatikana.
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

        return false;

    }


    return true;

}


/* =========================================================
   GET FORM DATA
========================================================= */

function getFormData(
    formId
) {

    if (
        !window.pastPapers
    ) {

        return null;

    }


    return (
        window.pastPapers[
            formId
        ] || null
    );

}


/* =========================================================
   GET SUBJECT DATA
========================================================= */

function getSubjectData(
    formId,
    subject
) {

    const form =
        getFormData(
            formId
        );


    if (!form) {

        return [];

    }


    const data =
        form[
            subject
        ];


    return Array.isArray(data)
        ? data
        : [];

}


/* =========================================================
   INITIALIZE
========================================================= */

function initialize() {

    if (
        !checkData()
    ) {

        return;

    }


    /*
    ---------------------------------------------------------
    IMPORTANT

    Tunasoma state iliyopo kwenye URL/history kama ipo.
    ---------------------------------------------------------
    */

    const state =
        history.state;


    if (
        state &&
        state.gpamPastPaper
    ) {

        restoreState(
            state
        );

        renderCurrent();

        return;

    }


    /*
    ---------------------------------------------------------
    INITIAL STATE
    ---------------------------------------------------------
    */

    currentState = {

        level: "forms",

        form: null,

        subject: null,

        type: null,

        region: null,

        year: null,

        paper: null

    };


    history.replaceState(

        {
            gpamPastPaper: true,

            level: "forms"

        },

        "",

        window.location.href

    );


    renderForms();

}


/* =========================================================
   SAVE HISTORY
========================================================= */

function saveHistory(
    level
) {

    const state = {

        gpamPastPaper: true,

        level:
            level,

        form:
            currentState.form,

        subject:
            currentState.subject,

        type:
            currentState.type,

        region:
            currentState.region,

        year:
            currentState.year,

        paper:
            currentState.paper

    };


    history.pushState(

        state,

        "",

        window.location.href

    );

}


/* =========================================================
   RESTORE STATE
========================================================= */

function restoreState(
    state
) {

    currentState = {

        level:
            state.level || "forms",

        form:
            state.form || null,

        subject:
            state.subject || null,

        type:
            state.type || null,

        region:
            state.region || null,

        year:
            state.year || null,

        paper:
            state.paper || null

    };

}


/* =========================================================
   RENDER CURRENT
========================================================= */

function renderCurrent() {

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

    currentState.paper =
        null;


    updateBreadcrumb();

    backButton.style.display =
        "none";


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
    formId
) {

    if (
        !getFormData(formId)
    ) {

        showEmpty(
            "Past Papers za " +
            formNames[formId] +
            " hazijapatikana."
        );

        return;

    }


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

    currentState.paper =
        null;


    saveHistory(
        "subjects"
    );


    renderSubjects();

}


/* =========================================================
   RENDER SUBJECTS
========================================================= */

function renderSubjects() {

    updateBreadcrumb();

    backButton.style.display =
        "inline-flex";


    const form =
        getFormData(
            currentState.form
        );


    if (!form) {

        renderForms();

        return;

    }


    let html = `

        <div class="step-title">

            <div class="step-number">
                2
            </div>

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
                getSubjectData(
                    currentState.form,
                    subject
                );


            const icon =
                subject === "physics"
                ? "⚛️"
                : "🧪";


            const cardClass =
                subject === "physics"
                ? "physics-card"
                : "chemistry-card";


            html += `

                <div class="
                    selection-card
                    ${cardClass}
                ">

                    <div>

                        <div class="card-icon">
                            ${icon}
                        </div>

                        <h3>
                            ${subjectNames[
                                subject
                            ]}
                        </h3>

                        <p>
                            ${subjectNames[
                                subject
                            ]}
                            examination papers
                            for ${
                                formNames[
                                    currentState.form
                                ]
                            }.
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        onclick="openSubject('${subject}')">

                        FUNGUA ${
                            subjectNames[
                                subject
                            ].toUpperCase()
                        }

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

function openSubject(
    subject
) {

    const data =
        getSubjectData(
            currentState.form,
            subject
        );


    if (
        data.length === 0
    ) {

        showEmpty(
            "Hakuna Past Papers za " +
            subjectNames[subject] +
            " zilizowekwa hapa bado."
        );

        return;

    }


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

    currentState.paper =
        null;


    saveHistory(
        "types"
    );


    renderTypes();

}


/* =========================================================
   RENDER TYPES
========================================================= */

function renderTypes() {

    updateBreadcrumb();


    const papers =
        getSubjectData(
            currentState.form,
            currentState.subject
        );


    if (
        papers.length === 0
    ) {

        showEmpty(
            "Hakuna papers zilizopatikana."
        );

        return;

    }


    /*
    ---------------------------------------------------------
    GET UNIQUE TYPES
    ---------------------------------------------------------
    */

    const types =
        [
            ...new Set(
                papers
                    .map(
                        paper =>
                            String(
                                paper.type ||
                                ""
                            ).toLowerCase()
                    )
                    .filter(
                        type =>
                            type !== ""
                    )
            )
        ];


    let html = `

        <div class="step-title">

            <div class="step-number">
                3
            </div>

            <h2>
                ${subjectNames[
                    currentState.subject
                ]}
            </h2>

            <p>
                Chagua aina ya examination paper.
            </p>

        </div>

        <div class="selection-grid">

    `;


    types.forEach(
        type => {

            const count =
                papers.filter(
                    paper =>
                        String(
                            paper.type ||
                            ""
                        ).toLowerCase() ===
                        type
                ).length;


            html += `

                <div class="
                    selection-card
                    type-card
                ">

                    <div>

                        <div class="card-icon">

                            ${
                                typeIcons[type]
                                || "📝"
                            }

                        </div>

                        <h3>
                            ${
                                typeNames[type]
                                || formatName(type)
                            }
                        </h3>

                        <p>
                            ${
                                type === "pre_necta"
                                ? "Pre-NECTA examination papers."
                                : "School and examination papers."
                            }
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        onclick="openType('${escapeJS(type)}')">

                        FUNGUA ${
                            (
                                typeNames[type]
                                || formatName(type)
                            ).toUpperCase()
                        }

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

    currentState.paper =
        null;


    saveHistory(
        "regions"
    );


    renderRegions();

}


/* =========================================================
   RENDER REGIONS
========================================================= */

function renderRegions() {

    updateBreadcrumb();


    const papers =
        getFilteredPapers();


    if (
        papers.length === 0
    ) {

        showEmpty(
            "Hakuna papers za aina hii."
        );

        return;

    }


    /*
    ---------------------------------------------------------
    UNIQUE REGIONS
    ---------------------------------------------------------
    */

    const regions =
        [
            ...new Set(
                papers
                    .map(
                        paper =>
                            String(
                                paper.region ||
                                ""
                            ).toLowerCase()
                    )
                    .filter(
                        region =>
                            region !== ""
                    )
            )
        ];


    /*
    SORT ALPHABETICALLY
    ---------------------------------------------------------
    */

    regions.sort(
        (a,b) =>
            getRegionName(a)
                .localeCompare(
                    getRegionName(b)
                )
    );


    let html = `

        <div class="step-title">

            <div class="step-number">
                4
            </div>

            <h2>
                ${
                    typeNames[
                        currentState.type
                    ] ||
                    formatName(
                        currentState.type
                    )
                }
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

                <div class="
                    selection-card
                    region-card
                ">

                    <div>

                        <div class="card-icon">
                            📍
                        </div>

                        <h3>
                            ${getRegionName(
                                region
                            )}
                        </h3>

                        <p>
                            ${
                                subjectNames[
                                    currentState.subject
                                ]
                            }
                            ${
                                typeNames[
                                    currentState.type
                                ] ||
                                formatName(
                                    currentState.type
                                )
                            }
                            papers
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        onclick="openRegion('${escapeJS(region)}')">

                        FUNGUA ${
                            getRegionName(
                                region
                            ).toUpperCase()
                        }

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

function openRegion(
    region
) {

    currentState.level =
        "years";

    currentState.region =
        region;

    currentState.year =
        null;

    currentState.paper =
        null;


    saveHistory(
        "years"
    );


    renderYears();

}


/* =========================================================
   RENDER YEARS
========================================================= */

function renderYears() {

    updateBreadcrumb();


    const papers =
        getFilteredPapers();


    if (
        papers.length === 0
    ) {

        showEmpty(
            "Hakuna papers zilizopatikana."
        );

        return;

    }


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
                            Number.isFinite(
                                year
                            )
                    )
            )
        ];


    years.sort(
        (a,b) =>
            b - a
    );


    let html = `

        <div class="step-title">

            <div class="step-number">
                5
            </div>

            <h2>
                ${getRegionName(
                    currentState.region
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
                            ${
                                subjectNames[
                                    currentState.subject
                                ]
                            }
                            ${
                                typeNames[
                                    currentState.type
                                ] ||
                                formatName(
                                    currentState.type
                                )
                            }
                            papers
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        onclick="openYear(${year})">

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

function openYear(
    year
) {

    currentState.level =
        "papers";

    currentState.year =
        Number(year);

    currentState.paper =
        null;


    saveHistory(
        "papers"
    );


    renderPapers();

}


/* =========================================================
   RENDER PAPERS
========================================================= */

function renderPapers() {

    updateBreadcrumb();


    const papers =
        getFilteredPapers();


    if (
        papers.length === 0
    ) {

        showEmpty(
            "Hakuna PDF/paper iliyopatikana kwa uchaguzi huu."
        );

        return;

    }


    let html = `

        <div class="step-title">

            <div class="step-number">
                6
            </div>

            <h2>
                Papers
            </h2>

            <p>
                Chagua paper unayotaka kufungua.
            </p>

        </div>

        <div class="selection-grid">

    `;


    papers.forEach(
        (paper, index) => {

            const title =
                paper.title ||
                (
                    "Past Paper " +
                    (index + 1)
                );


            const file =
                paper.file ||
                "";


            if (
                !file
            ) {

                return;

            }


            const safeFile =
                encodeURI(
                    file
                );


            html += `

                <div class="
                    selection-card
                    paper-card
                ">

                    <div>

                        <div class="card-icon">
                            📄
                        </div>

                        <h3>
                            ${escapeHTML(
                                title
                            )}
                        </h3>

                        <p>
                            ${
                                subjectNames[
                                    currentState.subject
                                ]
                            }
                            —
                            ${
                                typeNames[
                                    currentState.type
                                ] ||
                                formatName(
                                    currentState.type
                                )
                            }
                            —
                            ${currentState.year}
                        </p>

                    </div>

                    <button
                        class="
                            open-btn
                            pdf-btn
                        "
                        onclick="openPDF(
                            '${escapeJS(safeFile)}'
                        )">

                        📄 FUNGUA PDF

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
   OPEN PDF
========================================================= */

function openPDF(
    file
) {

    /*
    ---------------------------------------------------------
    PDF inafunguka kwenye tab mpya.
    ---------------------------------------------------------
    */

    if (
        !file
    ) {

        alert(
            "PDF file haijapatikana."
        );

        return;

    }


    window.open(
        file,
        "_blank"
    );

}


/* =========================================================
   FILTER PAPERS
========================================================= */

function getFilteredPapers() {

    let papers =
        getSubjectData(
            currentState.form,
            currentState.subject
        );


    /*
    TYPE
    */

    if (
        currentState.type
    ) {

        papers =
            papers.filter(
                paper =>

                    String(
                        paper.type ||
                        ""
                    ).toLowerCase() ===

                    String(
                        currentState.type
                    ).toLowerCase()
            );

    }


    /*
    REGION
    */

    if (
        currentState.region
    ) {

        papers =
            papers.filter(
                paper =>

                    String(
                        paper.region ||
                        ""
                    ).toLowerCase() ===

                    String(
                        currentState.region
                    ).toLowerCase()
            );

    }


    /*
    YEAR
    */

    if (
        currentState.year
    ) {

        papers =
            papers.filter(
                paper =>

                    Number(
                        paper.year
                    ) ===

                    Number(
                        currentState.year
                    )
            );

    }


    return papers;

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
            ] ||
            formatName(
                currentState.subject
            )
        );

    }


    if (
        currentState.type
    ) {

        parts.push(
            typeNames[
                currentState.type
            ] ||
            formatName(
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
            currentState.year
        );

    }


    breadcrumb.innerHTML =
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
                                ${escapeHTML(
                                    part
                                )}
                            </span>
                        `;

                    }


                    return `

                        <span
                            class="separator">
                            ›
                        </span>

                        <span>
                            ${escapeHTML(
                                String(
                                    part
                                )
                            )}
                        </span>

                    `;

                }
            )
            .join("");

}


/* =========================================================
   BACK BUTTON
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
   BROWSER / ANDROID BACK
========================================================= */

window.addEventListener(
    "popstate",
    function(event) {

        const state =
            event.state;


        if (
            state &&
            state.gpamPastPaper
        ) {

            restoreState(
                state
            );

            renderCurrent();

            return;

        }


        /*
        -----------------------------------------------------
        Ikiwa tumerudi nje ya Past Papers,
        browser yenyewe itaendelea na page iliyopita.
        -----------------------------------------------------
        */

    }
);


/* =========================================================
   EMPTY MESSAGE
========================================================= */

function showEmpty(
    message
) {

    updateBreadcrumb();

    backButton.style.display =
        "inline-flex";


    container.innerHTML = `

        <div class="empty-box">

            <h3>
                📚 Hakuna Data
            </h3>

            <p>
                ${escapeHTML(
                    message
                )}
            </p>

        </div>

    `;

}


/* =========================================================
   REGION NAME
========================================================= */

function getRegionName(
    region
) {

    if (
        regionNames[
            region
        ]
    ) {

        return regionNames[
            region
        ];

    }


    return formatName(
        region
    );

}


/* =========================================================
   FORMAT NAME
========================================================= */

function formatName(
    value
) {

    if (
        !value
    ) {

        return "";

    }


    return String(
        value
    )
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
   ESCAPE JAVASCRIPT
========================================================= */

function escapeJS(
    value
) {

    return String(
        value
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
   START
========================================================= */

initialize();
