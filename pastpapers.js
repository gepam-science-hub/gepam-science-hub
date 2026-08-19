/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS NAVIGATION ENGINE
   =========================================================

   NAVIGATION:

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
   window.pastPaperConfig

   IMPORTANT:
   HATUWEKI DATA YA PAPERS HUMU.
   TUNASOMA DATA ILIYOPO KWENYE
   pastpapers.data.js
========================================================= */


/* =========================================================
   GLOBAL STATE
========================================================= */

const PP = {

    level: "forms",

    form: null,

    subject: null,

    type: null,

    region: null,

    year: null

};



/* =========================================================
   DOM ELEMENTS
========================================================= */

let container;
let breadcrumb;
let backButton;
let errorBox;
let errorText;
let loadingBox;



/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        container =
            document.getElementById(
                "stepContainer"
            );

        breadcrumb =
            document.getElementById(
                "breadcrumb"
            );

        backButton =
            document.getElementById(
                "backButton"
            );

        errorBox =
            document.getElementById(
                "errorMessage"
            );

        errorText =
            document.getElementById(
                "errorText"
            );

        loadingBox =
            document.getElementById(
                "loadingMessage"
            );


        /*
        -----------------------------------------------------
        CHECK DATA
        -----------------------------------------------------
        */

        if (
            !window.pastPapers ||
            typeof window.pastPapers !== "object"
        ) {

            showDataError(
                "pastpapers.data.js haijasomeka au window.pastPapers haipo."
            );

            return;

        }


        /*
        -----------------------------------------------------
        HIDE ERROR
        -----------------------------------------------------
        */

        hideDataError();


        /*
        -----------------------------------------------------
        INITIAL HISTORY STATE
        -----------------------------------------------------
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


        /*
        -----------------------------------------------------
        READ URL FORM IF AVAILABLE
        -----------------------------------------------------
        */

        const params =
            new URLSearchParams(
                window.location.search
            );

        const requestedForm =
            params.get("form");


        /*
        -----------------------------------------------------
        IF FORM WAS PASSED IN URL
        -----------------------------------------------------
        */

        if (
            requestedForm &&
            getFormData(requestedForm)
        ) {

            PP.level =
                "subjects";

            PP.form =
                requestedForm;


            history.replaceState(
                {
                    level: "subjects",
                    form: requestedForm,
                    subject: null,
                    type: null,
                    region: null,
                    year: null
                },
                "",
                window.location.href
            );


            renderSubjects();

        }

        else {

            renderForms();

        }


        /*
        -----------------------------------------------------
        BACK BUTTON
        -----------------------------------------------------
        */

        if (backButton) {

            backButton.addEventListener(
                "click",
                function () {

                    goBack();

                }
            );

        }

    }
);



/* =========================================================
   DATA VALIDATION
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
    subjectId
) {

    const form =
        getFormData(
            formId
        );


    if (!form) {

        return [];

    }


    return (
        form[
            subjectId
        ] || []
    );

}



/* =========================================================
   NORMALIZE TEXT
========================================================= */

function normalize(
    value
) {

    return String(
        value ?? ""
    )
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/-/g, "_");

}



/* =========================================================
   DISPLAY FORM NAME
========================================================= */

function formName(
    formId
) {

    const match =
        String(formId)
            .match(/form(\d+)/i);


    if (match) {

        return "Form " +
            match[1];

    }


    return String(
        formId
    );

}



/* =========================================================
   DISPLAY SUBJECT NAME
========================================================= */

function subjectName(
    subjectId
) {

    const key =
        normalize(
            subjectId
        );


    if (
        key === "physics"
    ) {

        return "Physics";

    }


    if (
        key === "chemistry"
    ) {

        return "Chemistry";

    }


    return String(
        subjectId
    )
    .replace(
        /_/g,
        " "
    )
    .replace(
        /\b\w/g,
        function (letter) {

            return letter.toUpperCase();

        }
    );

}



/* =========================================================
   DISPLAY TYPE NAME
========================================================= */

function typeName(
    type
) {

    const key =
        normalize(
            type
        );


    const names = {

        "annual":
            "Annual Examination",

        "midterm":
            "Midterm Examination",

        "terminal":
            "Terminal Examination",

        "joint":
            "Joint Examination",

        "ftna":
            "FTNA",

        "necta":
            "NECTA",

        "acsee":
            "ACSEE",

        "mock":
            "Mock Examination",

        "pre_necta":
            "Pre-NECTA",

        "pre_necta_exam":
            "Pre-NECTA Examination"

    };


    return (
        names[key] ||
        String(type)
            .replace(
                /_/g,
                " "
            )
            .replace(
                /\b\w/g,
                function (letter) {

                    return letter.toUpperCase();

                }
            )
    );

}



/* =========================================================
   DISPLAY REGION NAME
========================================================= */

function regionName(
    region
) {

    const key =
        normalize(
            region
        );


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
        names[key] ||
        String(region)
            .replace(
                /_/g,
                " "
            )
            .replace(
                /\b\w/g,
                function (letter) {

                    return letter.toUpperCase();

                }
            )
    );

}



/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(
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
   ESCAPE JS VALUE
========================================================= */

function escapeJS(
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
    )
    .replace(
        /\n/g,
        "\\n"
    )
    .replace(
        /\r/g,
        "\\r"
    );

}



/* =========================================================
   GET UNIQUE VALUES
========================================================= */

function uniqueValues(
    papers,
    property
) {

    const values =
        papers
            .map(
                function (paper) {

                    return paper
                        ? paper[property]
                        : null;

                }
            )
            .filter(
                function (value) {

                    return (
                        value !== null &&
                        value !== undefined &&
                        String(value).trim() !== ""
                    );

                }
            );


    return [
        ...new Set(
            values.map(
                function (value) {

                    return String(
                        value
                    );

                }
            )
        )
    ];

}



/* =========================================================
   SORT YEARS
========================================================= */

function sortYears(
    years
) {

    return years.sort(
        function (a, b) {

            return Number(b) -
                   Number(a);

        }
    );

}



/* =========================================================
   SORT TEXT
========================================================= */

function sortText(
    values
) {

    return values.sort(
        function (a, b) {

            return String(a)
                .localeCompare(
                    String(b),
                    undefined,
                    {
                        sensitivity:
                            "base"
                    }
                );

        }
    );

}



/* =========================================================
   SET BREADCRUMB
========================================================= */

function updateBreadcrumb() {

    if (!breadcrumb) {

        return;

    }


    const parts = [
        {
            text:
                "Past Papers"
        }
    ];


    if (
        PP.form
    ) {

        parts.push({
            text:
                formName(
                    PP.form
                )
        });

    }


    if (
        PP.subject
    ) {

        parts.push({
            text:
                subjectName(
                    PP.subject
                )
        });

    }


    if (
        PP.type
    ) {

        parts.push({
            text:
                typeName(
                    PP.type
                )
        });

    }


    if (
        PP.region
    ) {

        parts.push({
            text:
                regionName(
                    PP.region
                )
        });

    }


    if (
        PP.year
    ) {

        parts.push({
            text:
                String(
                    PP.year
                )
        });

    }


    breadcrumb.innerHTML =
        parts.map(
            function (
                item,
                index
            ) {

                if (
                    index === 0
                ) {

                    return `
                        <span>
                            ${escapeHTML(
                                item.text
                            )}
                        </span>
                    `;

                }


                return `
                    <span class="separator">
                        ›
                    </span>

                    <span>
                        ${escapeHTML(
                            item.text
                        )}
                    </span>
                `;

            }
        ).join("");

}



/* =========================================================
   UPDATE BACK BUTTON
========================================================= */

function updateBackButton() {

    if (!backButton) {

        return;

    }


    if (
        PP.level ===
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
   PUSH HISTORY
========================================================= */

function navigate(
    state
) {

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

    PP.level =
        "forms";

    PP.form =
        null;

    PP.subject =
        null;

    PP.type =
        null;

    PP.region =
        null;

    PP.year =
        null;


    updateBreadcrumb();

    updateBackButton();


    const forms = [
        "form1",
        "form2",
        "form3",
        "form4",
        "form5",
        "form6"
    ];


    let html = `

        <div class="step-title">

            <h2>
                🎓 Chagua Kidato
            </h2>

            <p>
                Chagua kidato kupata
                Past Papers za Physics
                na Chemistry.
            </p>

        </div>

        <div class="selection-grid">

    `;


    forms.forEach(
        function (
            formId
        ) {

            html += `

                <div class="selection-card form-card">

                    <div class="card-icon">
                        🎓
                    </div>

                    <div>

                        <h3>
                            ${formName(
                                formId
                            )}
                        </h3>

                        <p>
                            Physics & Chemistry
                            Past Papers
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        type="button"
                        onclick="
                            openForm(
                                '${escapeJS(
                                    formId
                                )}'
                            )
                        ">

                        FUNGUA
                        ${formName(
                            formId
                        ).toUpperCase()}

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
   OPEN FORM
========================================================= */

function openForm(
    formId
) {

    if (
        !getFormData(
            formId
        )
    ) {

        showDataError(
            "Data ya " +
            formName(
                formId
            ) +
            " haijapatikana kwenye pastpapers.data.js."
        );

        return;

    }


    PP.level =
        "subjects";

    PP.form =
        formId;

    PP.subject =
        null;

    PP.type =
        null;

    PP.region =
        null;

    PP.year =
        null;


    navigate({

        level:
            "subjects",

        form:
            formId,

        subject:
            null,

        type:
            null,

        region:
            null,

        year:
            null

    });


    renderSubjects();

}



/* =========================================================
   RENDER SUBJECTS
========================================================= */

function renderSubjects() {

    updateBreadcrumb();

    updateBackButton();


    const form =
        getFormData(
            PP.form
        );


    if (!form) {

        renderForms();

        return;

    }


    const subjects =
        Object.keys(
            form
        );


    /*
    ---------------------------------------------------------
    FILTER ONLY ACTUAL SUBJECTS
    ---------------------------------------------------------
    */

    const validSubjects =
        subjects.filter(
            function (
                subject
            ) {

                return Array.isArray(
                    form[
                        subject
                    ]
                );

            }
        );


    let html = `

        <div class="step-title">

            <h2>
                📚 ${formName(
                    PP.form
                )}
            </h2>

            <p>
                Chagua somo unalotaka
                kuona Past Papers.
            </p>

        </div>

        <div class="selection-grid">

    `;


    validSubjects.forEach(
        function (
            subjectId
        ) {

            const papers =
                getSubjectData(
                    PP.form,
                    subjectId
                );


            const icon =
                normalize(
                    subjectId
                ) === "physics"
                ? "⚛️"
                : "🧪";


            html += `

                <div class="selection-card subject-card">

                    <div class="card-icon">
                        ${icon}
                    </div>

                    <div>

                        <h3>
                            ${escapeHTML(
                                subjectName(
                                    subjectId
                                )
                            )}
                        </h3>

                        <p>
                            ${escapeHTML(
                                formName(
                                    PP.form
                                )
                            )}
                            —
                            Past Papers
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        type="button"
                        onclick="
                            openSubject(
                                '${escapeJS(
                                    subjectId
                                )}'
                            )
                        ">

                        FUNGUA
                        ${escapeHTML(
                            subjectName(
                                subjectId
                            ).toUpperCase()
                        )}

                    </button>

                </div>

            `;

        }
    );


    if (
        validSubjects.length === 0
    ) {

        html += `

            <div class="status-box empty-box">

                <div class="status-icon">
                    📚
                </div>

                <h3>
                    Hakuna Subject
                </h3>

                <p>
                    Hakuna Physics au Chemistry
                    records zilizopatikana
                    kwenye ${escapeHTML(
                        formName(
                            PP.form
                        )
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
   OPEN SUBJECT
========================================================= */

function openSubject(
    subjectId
) {

    const papers =
        getSubjectData(
            PP.form,
            subjectId
        );


    if (
        !Array.isArray(
            papers
        )
    ) {

        return;

    }


    PP.level =
        "types";

    PP.subject =
        subjectId;

    PP.type =
        null;

    PP.region =
        null;

    PP.year =
        null;


    navigate({

        level:
            "types",

        form:
            PP.form,

        subject:
            subjectId,

        type:
            null,

        region:
            null,

        year:
            null

    });


    renderTypes();

}



/* =========================================================
   RENDER TYPES
========================================================= */

function renderTypes() {

    updateBreadcrumb();

    updateBackButton();


    const papers =
        getSubjectData(
            PP.form,
            PP.subject
        );


    const types =
        sortText(
            uniqueValues(
                papers,
                "type"
            )
        );


    let html = `

        <div class="step-title">

            <h2>
                📝 ${escapeHTML(
                    subjectName(
                        PP.subject
                    )
                )}
            </h2>

            <p>
                Chagua aina ya
                examination paper.
            </p>

        </div>

        <div class="selection-grid">

    `;


    types.forEach(
        function (
            type
        ) {

            const typePapers =
                papers.filter(
                    function (
                        paper
                    ) {

                        return normalize(
                            paper.type
                        ) === normalize(
                            type
                        );

                    }
                );


            html += `

                <div class="selection-card type-card">

                    <div class="card-icon">
                        📝
                    </div>

                    <div>

                        <h3>
                            ${escapeHTML(
                                typeName(
                                    type
                                )
                            )}
                        </h3>

                        <p>
                            ${escapeHTML(
                                subjectName(
                                    PP.subject
                                )
                            )}
                            —
                            ${escapeHTML(
                                formName(
                                    PP.form
                                )
                            )}
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        type="button"
                        onclick="
                            openType(
                                '${escapeJS(
                                    type
                                )}'
                            )
                        ">

                        FUNGUA TYPE

                    </button>

                </div>

            `;

        }
    );


    if (
        types.length === 0
    ) {

        html += `

            <div class="status-box empty-box">

                <div class="status-icon">
                    📄
                </div>

                <h3>
                    Hakuna Papers
                </h3>

                <p>
                    ${escapeHTML(
                        subjectName(
                            PP.subject
                        )
                    )}
                    haina papers
                    zilizowekwa kwenye
                    ${escapeHTML(
                        formName(
                            PP.form
                        )
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
   OPEN TYPE
========================================================= */

function openType(
    type
) {

    PP.level =
        "regions";

    PP.type =
        type;

    PP.region =
        null;

    PP.year =
        null;


    navigate({

        level:
            "regions",

        form:
            PP.form,

        subject:
            PP.subject,

        type:
            type,

        region:
            null,

        year:
            null

    });


    renderRegions();

}



/* =========================================================
   RENDER REGIONS
========================================================= */

function renderRegions() {

    updateBreadcrumb();

    updateBackButton();


    const papers =
        getSubjectData(
            PP.form,
            PP.subject
        );


    const filtered =
        papers.filter(
            function (
                paper
            ) {

                return (
                    normalize(
                        paper.type
                    ) ===
                    normalize(
                        PP.type
                    )
                );

            }
        );


    const regions =
        sortText(
            uniqueValues(
                filtered,
                "region"
            )
        );


    let html = `

        <div class="step-title">

            <h2>
                📍 ${escapeHTML(
                    typeName(
                        PP.type
                    )
                )}
            </h2>

            <p>
                Chagua mkoa
                wenye papers.
            </p>

        </div>

        <div class="selection-grid">

    `;


    regions.forEach(
        function (
            region
        ) {

            html += `

                <div class="selection-card region-card">

                    <div class="card-icon">
                        📍
                    </div>

                    <div>

                        <h3>
                            ${escapeHTML(
                                regionName(
                                    region
                                )
                            )}
                        </h3>

                        <p>
                            ${escapeHTML(
                                typeName(
                                    PP.type
                                )
                            )}
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        type="button"
                        onclick="
                            openRegion(
                                '${escapeJS(
                                    region
                                )}'
                            )
                        ">

                        FUNGUA MKOA

                    </button>

                </div>

            `;

        }
    );


    if (
        regions.length === 0
    ) {

        html += `

            <div class="status-box empty-box">

                <div class="status-icon">
                    📍
                </div>

                <h3>
                    Hakuna Mkoa
                </h3>

                <p>
                    Hakuna paper
                    iliyopatikana
                    kwa aina hii.
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
   OPEN REGION
========================================================= */

function openRegion(
    region
) {

    PP.level =
        "years";

    PP.region =
        region;

    PP.year =
        null;


    navigate({

        level:
            "years",

        form:
            PP.form,

        subject:
            PP.subject,

        type:
            PP.type,

        region:
            region,

        year:
            null

    });


    renderYears();

}



/* =========================================================
   RENDER YEARS
========================================================= */

function renderYears() {

    updateBreadcrumb();

    updateBackButton();


    const papers =
        getSubjectData(
            PP.form,
            PP.subject
        );


    const filtered =
        papers.filter(
            function (
                paper
            ) {

                return (

                    normalize(
                        paper.type
                    ) ===
                    normalize(
                        PP.type
                    )

                    &&

                    normalize(
                        paper.region
                    ) ===
                    normalize(
                        PP.region
                    )

                );

            }
        );


    const years =
        sortYears(
            uniqueValues(
                filtered,
                "year"
            )
        );


    let html = `

        <div class="step-title">

            <h2>
                📅 ${escapeHTML(
                    regionName(
                        PP.region
                    )
                )}
            </h2>

            <p>
                Chagua mwaka.
            </p>

        </div>

        <div class="selection-grid">

    `;


    years.forEach(
        function (
            year
        ) {

            html += `

                <div class="selection-card year-card">

                    <div class="card-icon">
                        📅
                    </div>

                    <div>

                        <h3>
                            ${escapeHTML(
                                year
                            )}
                        </h3>

                        <p>
                            ${escapeHTML(
                                typeName(
                                    PP.type
                                )
                            )}
                        </p>

                    </div>

                    <button
                        class="open-btn"
                        type="button"
                        onclick="
                            openYear(
                                '${escapeJS(
                                    year
                                )}'
                            )
                        ">

                        FUNGUA ${escapeHTML(
                            year
                        )}

                    </button>

                </div>

            `;

        }
    );


    if (
        years.length === 0
    ) {

        html += `

            <div class="status-box empty-box">

                <div class="status-icon">
                    📅
                </div>

                <h3>
                    Hakuna Mwaka
                </h3>

                <p>
                    Hakuna paper
                    iliyowekwa kwa
                    ${escapeHTML(
                        regionName(
                            PP.region
                        )
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
   OPEN YEAR
========================================================= */

function openYear(
    year
) {

    PP.level =
        "papers";

    PP.year =
        String(
            year
        );


    navigate({

        level:
            "papers",

        form:
            PP.form,

        subject:
            PP.subject,

        type:
            PP.type,

        region:
            PP.region,

        year:
            PP.year

    });


    renderPapers();

}/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS NAVIGATION ENGINE
   JS — SEHEMU YA 2
   ========================================================= */


/* =========================================================
   STEP 5
   REGION
========================================================= */

function renderRegions() {

    const regions = getAvailableRegions();

    updateBreadcrumb();

    let html = `

        <div class="step-title">

            <h2>
                📍 Chagua Mkoa
            </h2>

            <p>
                Chagua mkoa wenye mitihani
                unayotaka.
            </p>

        </div>

        <div class="selection-grid">

    `;


    if (regions.length === 0) {

        html += `

            <div class="empty-card">

                <div class="empty-icon">
                    📂
                </div>

                <h3>
                    Hakuna Mkoa
                </h3>

                <p>
                    Hakuna papers zilizowekwa
                    kwa uchaguzi huu.
                </p>

            </div>

        `;

    }


    regions.forEach(region => {

        html += `

            <div class="selection-card region-card">

                <div>

                    <div class="card-icon">
                        📍
                    </div>

                    <h3>
                        ${formatRegion(region)}
                    </h3>

                    <p>
                        Fungua papers za
                        ${formatRegion(region)}.
                    </p>

                </div>

                <button
                    class="open-btn"
                    onclick="openRegion('${escapeValue(region)}')">

                    FUNGUA MKOA

                </button>

            </div>

        `;

    });


    html += `

        </div>

    `;

    container.innerHTML = html;
}


/* =========================================================
   GET AVAILABLE REGIONS
========================================================= */

function getAvailableRegions() {

    const papers =
        getCurrentPaperList();

    const regions = [];

    papers.forEach(paper => {

        if (
            paper.region &&
            !regions.includes(
                paper.region
            )
        ) {

            regions.push(
                paper.region
            );

        }

    });

    return regions.sort();

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
   STEP 6
   YEAR
========================================================= */

function renderYears() {

    const years =
        getAvailableYears();

    updateBreadcrumb();

    let html = `

        <div class="step-title">

            <h2>
                📅 Chagua Mwaka
            </h2>

            <p>
                Chagua mwaka wa
                examination paper.
            </p>

        </div>

        <div class="selection-grid">

    `;


    if (years.length === 0) {

        html += `

            <div class="empty-card">

                <div class="empty-icon">
                    📅
                </div>

                <h3>
                    Hakuna Mwaka
                </h3>

                <p>
                    Hakuna papers zilizowekwa
                    kwa mkoa huu.
                </p>

            </div>

        `;

    }


    years.forEach(year => {

        html += `

            <div class="selection-card year-card">

                <div>

                    <div class="card-icon">
                        📅
                    </div>

                    <h3>
                        ${year}
                    </h3>

                    <p>
                        Examination papers
                        za mwaka ${year}.
                    </p>

                </div>

                <button
                    class="open-btn"
                    onclick="openYear(${year})">

                    FUNGUA ${year}

                </button>

            </div>

        `;

    });


    html += `

        </div>

    `;

    container.innerHTML = html;
}


/* =========================================================
   GET AVAILABLE YEARS
========================================================= */

function getAvailableYears() {

    const papers =
        getCurrentPaperList();

    const years = [];

    papers.forEach(paper => {

        if (
            paper.year &&
            !years.includes(
                Number(paper.year)
            )
        ) {

            years.push(
                Number(paper.year)
            );

        }

    });

    return years.sort(
        (a, b) => b - a
    );

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
   STEP 7
   PAPERS / PDF
========================================================= */

function renderPapers() {

    const papers =
        getCurrentPaperList();

    updateBreadcrumb();

    let html = `

        <div class="step-title">

            <h2>
                📚 Examination Papers
            </h2>

            <p>
                Chagua paper unayotaka
                kufungua.
            </p>

        </div>

        <div class="papers-list">

    `;


    if (papers.length === 0) {

        html += `

            <div class="empty-card">

                <div class="empty-icon">
                    📄
                </div>

                <h3>
                    Hakuna Paper
                </h3>

                <p>
                    Hakuna PDF inayopatikana
                    kwa uchaguzi huu.
                </p>

            </div>

        `;

    }


    papers.forEach((paper, index) => {

        html += `

            <div class="paper-card">

                <div class="paper-number">
                    ${index + 1}
                </div>

                <div class="paper-info">

                    <h3>
                        ${paper.title || "Examination Paper"}
                    </h3>

                    <div class="paper-meta">

                        <span>
                            📚 ${formatSubject(
                                currentState.subject
                            )}
                        </span>

                        <span>
                            📝 ${formatType(
                                currentState.type
                            )}
                        </span>

                        <span>
                            📍 ${formatRegion(
                                currentState.region
                            )}
                        </span>

                        <span>
                            📅 ${paper.year}
                        </span>

                    </div>

                </div>

                <a
                    class="pdf-btn"
                    href="${paper.file}"
                    target="_blank"
                    rel="noopener">

                    📄 FUNGUA PDF

                </a>

            </div>

        `;

    });


    html += `

        </div>

    `;

    container.innerHTML = html;
}


/* =========================================================
   GET CURRENT PAPER LIST
========================================================= */

function getCurrentPaperList() {

    if (
        !window.pastPapers
    ) {

        return [];

    }


    const form =
        currentState.form;

    const subject =
        currentState.subject;


    if (
        !window.pastPapers[form]
    ) {

        return [];

    }


    let papers =
        window.pastPapers[form][subject];


    if (
        !Array.isArray(papers)
    ) {

        return [];

    }


    /*
    =========================================================
    FILTER TYPE
    =========================================================
    */

    if (
        currentState.type
    ) {

        papers =
            papers.filter(
                paper =>
                    String(
                        paper.type
                    ).toLowerCase()
                    ===
                    String(
                        currentState.type
                    ).toLowerCase()
            );

    }


    /*
    =========================================================
    FILTER REGION
    =========================================================
    */

    if (
        currentState.region
    ) {

        papers =
            papers.filter(
                paper =>
                    String(
                        paper.region
                    ).toLowerCase()
                    ===
                    String(
                        currentState.region
                    ).toLowerCase()
            );

    }


    /*
    =========================================================
    FILTER YEAR
    =========================================================
    */

    if (
        currentState.year
    ) {

        papers =
            papers.filter(
                paper =>
                    Number(
                        paper.year
                    )
                    ===
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
            formatForm(
                currentState.form
            )
        );

    }


    if (
        currentState.subject
    ) {

        parts.push(
            formatSubject(
                currentState.subject
            )
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
   FORMAT FORM
========================================================= */

function formatForm(form) {

    return String(form)
        .replace(
            "form",
            "Form "
        );

}


/* =========================================================
   FORMAT SUBJECT
========================================================= */

function formatSubject(subject) {

    if (
        !subject
    ) {

        return "";

    }


    return subject
        .charAt(0)
        .toUpperCase()
        +
        subject
            .slice(1)
            .toLowerCase();

}


/* =========================================================
   FORMAT TYPE
========================================================= */

function formatType(type) {

    if (
        !type
    ) {

        return "";

    }


    const names = {

        annual:
            "Annual",

        midterm:
            "Midterm",

        terminal:
            "Terminal",

        joint:
            "Joint",

        ftna:
            "FTNA",

        mock:
            "Mock",

        pre_necta:
            "Pre-NECTA",

        acsee:
            "ACSEE",

        necta:
            "NECTA"

    };


    return names[
        String(type).toLowerCase()
    ]
    ||
    String(type)
        .replaceAll(
            "_",
            " "
        )
        .replace(
            /^\w/,
            c =>
                c.toUpperCase()
        );

}


/* =========================================================
   FORMAT REGION
========================================================= */

function formatRegion(region) {

    if (
        !region
    ) {

        return "";

    }


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

        necta:
            "NECTA"

    };


    return names[
        String(region).toLowerCase()
    ]
    ||
    String(region)
        .replaceAll(
            "_",
            " "
        )
        .replace(
            /\b\w/g,
            c =>
                c.toUpperCase()
        );

}


/* =========================================================
   ESCAPE VALUE
========================================================= */

function escapeValue(value) {

    return String(value)
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
   NAVIGATION HISTORY
========================================================= */

function pushNavigationState() {

    history.pushState(
        {
            level:
                currentState.level,

            form:
                currentState.form,

            subject:
                currentState.subject,

            type:
                currentState.type,

            region:
                currentState.region,

            year:
                currentState.year

        },

        "",

        window.location.href
    );

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
            !state
        ) {

            currentState = {

                level:
                    "forms",

                form:
                    null,

                subject:
                    null,

                type:
                    null,

                region:
                    null,

                year:
                    null

            };

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
   INITIAL HISTORY STATE
========================================================= */

if (
    !history.state ||
    !history.state.level
) {

    history.replaceState(

        {
            level:
                "forms",

            form:
                null,

            subject:
                null,

            type:
                null,

            region:
                null,

            year:
                null

        },

        "",

        window.location.href

    );

}


/* =========================================================
   START APPLICATION
========================================================= */

initializePastPapers();
