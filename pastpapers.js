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


(function () {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const app =
        document.getElementById("ppApp");

    const breadcrumb =
        document.getElementById("ppBreadcrumb");

    const backButton =
        document.getElementById("ppBackButton");


    /* =====================================================
       CHECK DATA
    ===================================================== */

    if (!app) {

        console.error(
            "GEPAM Past Papers: #ppApp haijapatikana."
        );

        return;
    }


    /*
    ---------------------------------------------------------
    WAIT/CHECK DATABASE
    ---------------------------------------------------------
    */

    const pastPapers =
        window.pastPapers;

    const pastPaperConfig =
        window.pastPaperConfig;


    if (
        !pastPapers ||
        typeof pastPapers !== "object"
    ) {

        showDataError();

        return;
    }


    /* =====================================================
       STATE
    ===================================================== */

    let state = {

        level: "forms",

        form: null,

        subject: null,

        type: null,

        region: null,

        year: null

    };


    /* =====================================================
       HELPERS
    ===================================================== */

    function safeText(value) {

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


    /* =====================================================
       LABELS
    ===================================================== */

    const labels = {

        physics:
            "Physics",

        chemistry:
            "Chemistry",

        midterm:
            "Midterm",

        terminal:
            "Terminal",

        annual:
            "Annual",

        joint:
            "Joint",

        ftna:
            "FTNA",

        mock:
            "Mock",

        pre_necta:
            "Pre-NECTA",

        necta:
            "NECTA",

        acsee:
            "ACSEE"

    };


    /* =====================================================
       REGION LABELS
    ===================================================== */

    const regionLabels = {

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

        kilimanjaro:
            "Kilimanjaro",

        singida:
            "Singida",

        tabora:
            "Tabora",

        kigoma:
            "Kigoma",

        lindi:
            "Lindi",

        mtwara:
            "Mtwara",

        pwani:
            "Pwani",

        rukwa:
            "Rukwa",

        katavi:
            "Katavi",

        njombe:
            "Njombe",

        iringa:
            "Iringa",

        geita:
            "Geita",

        mara:
            "Mara",

        simiyu:
            "Simiyu",

        songwe:
            "Songwe",

        zanzibar:
            "Zanzibar",

        necta:
            "NECTA"

    };


    /* =====================================================
       ICONS
    ===================================================== */

    function formIcon(form) {

        const icons = {

            form1: "📘",

            form2: "📗",

            form3: "📙",

            form4: "📕",

            form5: "📒",

            form6: "📓"

        };

        return icons[form] || "📚";

    }


    function subjectIcon(subject) {

        if (
            subject === "physics"
        ) {

            return "⚛️";

        }

        if (
            subject === "chemistry"
        ) {

            return "🧪";

        }

        return "📚";

    }


    function typeIcon(type) {

        const icons = {

            annual: "📅",

            midterm: "📝",

            terminal: "📄",

            joint: "🤝",

            ftna: "🎓",

            mock: "📋",

            pre_necta: "📚",

            necta: "🏆",

            acsee: "🏆"

        };

        return icons[type] || "📄";

    }


    function regionIcon() {

        return "📍";

    }


    function yearIcon() {

        return "📅";

    }


    /* =====================================================
       DISPLAY LABEL
    ===================================================== */

    function label(value) {

        if (!value) {

            return "";

        }


        if (
            labels[
                value
            ]
        ) {

            return labels[
                value
            ];

        }


        if (
            regionLabels[
                value
            ]
        ) {

            return regionLabels[
                value
            ];

        }


        return String(value)
            .replaceAll(
                "_",
                " "
            )
            .replace(
                /\b\w/g,
                function (letter) {

                    return letter
                        .toUpperCase();

                }
            );

    }


    /* =====================================================
       NORMALIZE FORM
    ===================================================== */

    function formLabel(form) {

        return String(form)
            .replace(
                /^form/i,
                "Form "
            );

    }


    /* =====================================================
       DATA ERROR
    ===================================================== */

    function showDataError() {

        if (!app) {

            return;

        }


        app.innerHTML = `

            <div class="pp-step">

                <div class="pp-empty">

                    <div class="pp-empty-icon">
                        ⚠️
                    </div>

                    <h3>
                        Past Paper Data Error
                    </h3>

                    <p>
                        pastpapers.data.js
                        haijasomeka au
                        <strong>
                            window.pastPapers
                        </strong>
                        haipo.
                    </p>

                    <p style="margin-top:10px;">
                        Hakikisha files hizi zipo
                        kwenye folder moja:
                    </p>

                    <p>
                        <strong>
                            pastpapers.html
                        </strong>
                        <br>
                        <strong>
                            pastpapers.data.js
                        </strong>
                        <br>
                        <strong>
                            pastpapers.js
                        </strong>
                    </p>

                </div>

            </div>

        `;


        if (backButton) {

            backButton.style.display =
                "none";

        }

    }


    /* =====================================================
       GET FORM DATA
    ===================================================== */

    function getFormData(form) {

        if (
            !pastPapers[
                form
            ]
        ) {

            return {};

        }


        return pastPapers[
            form
        ];

    }


    /* =====================================================
       GET SUBJECT DATA
    ===================================================== */

    function getSubjectData(
        form,
        subject
    ) {

        const formData =
            getFormData(
                form
            );


        if (
            !formData[
                subject
            ]
        ) {

            return [];

        }


        if (
            !Array.isArray(
                formData[
                    subject
                ]
            )
        ) {

            return [];

        }


        return formData[
            subject
        ];

    }


    /* =====================================================
       GET AVAILABLE SUBJECTS
    ===================================================== */

    function getSubjects(form) {

        const formData =
            getFormData(
                form
            );


        return Object.keys(
            formData
        )
        .filter(
            function (key) {

                return Array.isArray(
                    formData[key]
                );

            }
        );

    }


    /* =====================================================
       GET TYPES
    ===================================================== */

    function getTypes(
        form,
        subject
    ) {

        const papers =
            getSubjectData(
                form,
                subject
            );


        const types = [];


        papers.forEach(
            function (paper) {

                if (
                    !paper ||
                    !paper.type
                ) {

                    return;

                }


                if (
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


        /*
        -----------------------------------------------------
        Use config order when available.
        -----------------------------------------------------
        */

        if (
            pastPaperConfig &&
            pastPaperConfig[
                form
            ] &&
            Array.isArray(
                pastPaperConfig[
                    form
                ].types
            )
        ) {

            const configured =
                pastPaperConfig[
                    form
                ].types;


            const ordered = [];


            configured.forEach(
                function (type) {

                    if (
                        types.includes(
                            type
                        )
                    ) {

                        ordered.push(
                            type
                        );

                    }

                }
            );


            types.forEach(
                function (type) {

                    if (
                        !ordered.includes(
                            type
                        )
                    ) {

                        ordered.push(
                            type
                        );

                    }

                }
            );


            return ordered;

        }


        return types;

    }


    /* =====================================================
       GET REGIONS
    ===================================================== */

    function getRegions(
        form,
        subject,
        type
    ) {

        const papers =
            getSubjectData(
                form,
                subject
            );


        const regions = [];


        papers.forEach(
            function (paper) {

                if (
                    !paper ||
                    paper.type !== type ||
                    !paper.region
                ) {

                    return;

                }


                if (
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


        return regions;

    }


    /* =====================================================
       GET YEARS
    ===================================================== */

    function getYears(
        form,
        subject,
        type,
        region
    ) {

        const papers =
            getSubjectData(
                form,
                subject
            );


        const years = [];


        papers.forEach(
            function (paper) {

                if (
                    !paper ||
                    paper.type !== type ||
                    paper.region !== region ||
                    paper.year === undefined ||
                    paper.year === null
                ) {

                    return;

                }


                const year =
                    Number(
                        paper.year
                    );


                if (
                    !years.includes(
                        year
                    )
                ) {

                    years.push(
                        year
                    );

                }

            }
        );


        return years.sort(
            function (a, b) {

                return b - a;

            }
        );

    }


    /* =====================================================
       GET PAPERS
    ===================================================== */

    function getPapers(
        form,
        subject,
        type,
        region,
        year
    ) {

        const papers =
            getSubjectData(
                form,
                subject
            );


        return papers.filter(
            function (paper) {

                return (

                    paper &&
                    paper.type === type &&
                    paper.region === region &&
                    Number(
                        paper.year
                    ) === Number(
                        year
                    )

                );

            }
        );

    }


    /* =====================================================
       UPDATE BREADCRUMB
    ===================================================== */

    function updateBreadcrumb() {

        if (!breadcrumb) {

            return;

        }


        const parts = [];


        parts.push(
            "Past Papers"
        );


        if (
            state.form
        ) {

            parts.push(
                formLabel(
                    state.form
                )
            );

        }


        if (
            state.subject
        ) {

            parts.push(
                label(
                    state.subject
                )
            );

        }


        if (
            state.type
        ) {

            parts.push(
                label(
                    state.type
                )
            );

        }


        if (
            state.region
        ) {

            parts.push(
                label(
                    state.region
                )
            );

        }


        if (
            state.year
        ) {

            parts.push(
                String(
                    state.year
                )
            );

        }


        breadcrumb.innerHTML =
            parts.map(
                function (
                    part,
                    index
                ) {

                    if (
                        index === 0
                    ) {

                        return `
                            <strong>
                                ${safeText(part)}
                            </strong>
                        `;

                    }


                    return `

                        <span class="arrow">
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


    /* =====================================================
       BACK BUTTON
    ===================================================== */

    function updateBackButton() {

        if (!backButton) {

            return;

        }


        if (
            state.level ===
            "forms"
        ) {

            backButton.style.display =
                "none";

        } else {

            backButton.style.display =
                "inline-flex";

        }

    }


    /* =====================================================
       SAVE HISTORY
    ===================================================== */

    function saveHistory(
        replace
    ) {

        const stateCopy = {

            app:
                "gepam-pastpapers",

            level:
                state.level,

            form:
                state.form,

            subject:
                state.subject,

            type:
                state.type,

            region:
                state.region,

            year:
                state.year

        };


        if (replace) {

            history.replaceState(
                stateCopy,
                "",
                window.location.href
            );

        } else {

            history.pushState(
                stateCopy,
                "",
                window.location.href
            );

        }

    }


    /* =====================================================
       RENDER FORMS
    ===================================================== */

    function renderForms() {

        state = {

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


        updateBreadcrumb();

        updateBackButton();


        let html = `

            <div class="pp-step">

                <div class="pp-step-heading">

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

                <div class="pp-grid">

        `;


        for (
            let i = 1;
            i <= 6;
            i++
        ) {

            const form =
                "form" + i;


            html += `

                <div class="pp-card">

                    <div>

                        <div class="pp-icon">
                            ${formIcon(form)}
                        </div>

                        <h3>
                            ${formLabel(form)}
                        </h3>

                        <p>
                            Physics & Chemistry
                            Past Papers
                        </p>

                    </div>

                    <button
                        class="pp-open-btn"
                        onclick="window.GEPAMPastPapers.openForm('${form}')">

                        FUNGUA ${formLabel(form).toUpperCase()}

                    </button>

                </div>

            `;

        }


        html += `

                </div>

            </div>

        `;


        app.innerHTML =
            html;

    }


    /* =====================================================
       OPEN FORM
    ===================================================== */

    function openForm(form) {

        state = {

            level:
                "subjects",

            form:
                form,

            subject:
                null,

            type:
                null,

            region:
                null,

            year:
                null

        };


        saveHistory(false);

        renderSubjects();

    }


    /* =====================================================
       RENDER SUBJECTS
    ===================================================== */

    function renderSubjects() {

        updateBreadcrumb();

        updateBackButton();


        const subjects =
            getSubjects(
                state.form
            );


        let html = `

            <div class="pp-step">

                <div class="pp-step-heading">

                    <div class="pp-step-number">
                        2
                    </div>

                    <h2>
                        ${safeText(
                            formLabel(
                                state.form
                            )
                        )}
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

                    <div class="pp-empty-icon">
                        📚
                    </div>

                    <h3>
                        Hakuna subject
                    </h3>

                    <p>
                        Hakuna Physics au Chemistry
                        iliyopatikana kwenye database
                        ya ${safeText(
                            formLabel(
                                state.form
                            )
                        )}.
                    </p>

                </div>

            `;

        }


        subjects.forEach(
            function (subject) {

                const paperCount =
                    getSubjectData(
                        state.form,
                        subject
                    ).length;


                /*
                ------------------------------------------------
                We do NOT display number of papers.
                The count is only used internally.
                ------------------------------------------------
                */

                html += `

                    <div class="pp-card">

                        <div>

                            <div class="pp-icon">
                                ${subjectIcon(subject)}
                            </div>

                            <h3>
                                ${safeText(
                                    label(subject)
                                )}
                            </h3>

                            <p>
                                Chagua aina ya
                                examination paper.
                            </p>

                        </div>

                        <button
                            class="pp-open-btn"
                            onclick="window.GEPAMPastPapers.openSubject('${safeText(subject)}')">

                            FUNGUA
                            ${safeText(
                                label(subject)
                            ).toUpperCase()}

                        </button>

                    </div>

                `;

            }
        );


        html += `

                </div>

            </div>

        `;


        app.innerHTML =
            html;

    }


    /* =====================================================
       OPEN SUBJECT
    ===================================================== */

    function openSubject(subject) {

        state.level =
            "types";

        state.subject =
            subject;

        state.type =
            null;

        state.region =
            null;

        state.year =
            null;


        saveHistory(false);

        renderTypes();

    }


    /* =====================================================
       RENDER TYPES
    ===================================================== */

    function renderTypes() {

        updateBreadcrumb();

        updateBackButton();


        const types =
            getTypes(
                state.form,
                state.subject
            );


        let html = `

            <div class="pp-step">

                <div class="pp-step-heading">

                    <div class="pp-step-number">
                        3
                    </div>

                    <h2>
                        ${safeText(
                            label(
                                state.subject
                            )
                        )}
                    </h2>

                    <p>
                        Chagua aina ya paper.
                    </p>

                </div>

                <div class="pp-grid">

        `;


        if (
            types.length === 0
        ) {

            html += emptyMessage(
                "Hakuna Type",
                "Hakuna aina ya paper iliyopatikana kwa subject hii."
            );

        }


        types.forEach(
            function (type) {

                html += `

                    <div class="pp-card">

                        <div>

                            <div class="pp-icon">
                                ${typeIcon(type)}
                            </div>

                            <h3>
                                ${safeText(
                                    label(type)
                                )}
                            </h3>

                            <p>
                                Fungua kuona
                                regions zilizopo.
                            </p>

                        </div>

                        <button
                            class="pp-open-btn"
                            onclick="window.GEPAMPastPapers.openType('${safeText(type)}')">

                            FUNGUA
                            ${safeText(
                                label(type)
                            ).toUpperCase()}

                        </button>

                    </div>

                `;

            }
        );


        html += `

                </div>

            </div>

        `;


        app.innerHTML =
            html;

    }


    /* =====================================================
       OPEN TYPE
    ===================================================== */

    function openType(type) {

        state.level =
            "regions";

        state.type =
            type;

        state.region =
            null;

        state.year =
            null;


        saveHistory(false);

        renderRegions();

    }


    /* =====================================================
       RENDER REGIONS
    ===================================================== */

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

            <div class="pp-step">

                <div class="pp-step-heading">

                    <div class="pp-step-number">
                        4
                    </div>

                    <h2>
                        ${safeText(
                            label(
                                state.type
                            )
                        )}
                    </h2>

                    <p>
                        Chagua region.
                    </p>

                </div>

                <div class="pp-grid">

        `;


        if (
            regions.length === 0
        ) {

            html += emptyMessage(
                "Hakuna Region",
                "Hakuna region yenye papers za aina hii kwenye database."
            );

        }


        regions.forEach(
            function (region) {

                html += `

                    <div class="pp-card">

                        <div>

                            <div class="pp-icon">
                                ${regionIcon()}
                            </div>

                            <h3>
                                ${safeText(
                                    label(region)
                                )}
                            </h3>

                            <p>
                                Fungua kuona
                                miaka iliyopo.
                            </p>

                        </div>

                        <button
                            class="pp-open-btn"
                            onclick="window.GEPAMPastPapers.openRegion('${safeText(region)}')">

                            FUNGUA REGION

                        </button>

                    </div>

                `;

            }
        );


        html += `

                </div>

            </div>

        `;


        app.innerHTML =
            html;

    }


    /* =====================================================
       OPEN REGION
    ===================================================== */

    function openRegion(region) {

        state.level =
            "years";

        state.region =
            region;

        state.year =
            null;


        saveHistory(false);

        renderYears();

    }


    /* =====================================================
       RENDER YEARS
    ===================================================== */

    function renderYears() {

        updateBreadcrumb();

        updateBackButton();


        const years =
            getYears(
                state.form,
                state.subject,
                state.type,
                state.region
            );


        let html = `

            <div class="pp-step">

                <div class="pp-step-heading">

                    <div class="pp-step-number">
                        5
                    </div>

                    <h2>
                        ${safeText(
                            label(
                                state.region
                            )
                        )}
                    </h2>

                    <p>
                        Chagua mwaka.
                    </p>

                </div>

                <div class="pp-grid">

        `;


        if (
            years.length === 0
        ) {

            html += emptyMessage(
                "Hakuna Mwaka",
                "Hakuna mwaka wenye paper iliyopatikana hapa."
            );

        }


        years.forEach(
            function (year) {

                html += `

                    <div class="pp-card">

                        <div>

                            <div class="pp-icon">
                                ${yearIcon()}
                            </div>

                            <h3>
                                ${safeText(
                                    String(year)
                                )}
                            </h3>

                            <p>
                                Fungua papers
                                za mwaka huu.
                            </p>

                        </div>

                        <button
                            class="pp-open-btn"
                            onclick="window.GEPAMPastPapers.openYear(${Number(year)})">

                            FUNGUA ${Number(year)}

                        </button>

                    </div>

                `;

            }
        );


        html += `

                </div>

            </div>

        `;


        app.innerHTML =
            html;

    }


    /* =====================================================
       OPEN YEAR
    ===================================================== */

    function openYear(year) {

        state.level =
            "papers";

        state.year =
            Number(year);


        saveHistory(false);

        renderPapers();

    }


    /* =====================================================
       RENDER PAPERS
    ===================================================== */

    function renderPapers() {

        updateBreadcrumb();

        updateBackButton();


        const papers =
            getPapers(
                state.form,
                state.subject,
                state.type,
                state.region,
                state.year
            );


        let html = `

            <div class="pp-step">

                <div class="pp-step-heading">

                    <div class="pp-step-number">
                        6
                    </div>

                    <h2>
                        Papers
                    </h2>

                    <p>
                        ${safeText(
                            label(
                                state.subject
                            )
                        )}
                        —
                        ${safeText(
                            label(
                                state.type
                            )
                        )}
                        —
                        ${safeText(
                            label(
                                state.region
                            )
                        )}
                        —
                        ${safeText(
                            String(
                                state.year
                            )
                        )}
                    </p>

                </div>

                <div
                    style="
                        display:flex;
                        flex-direction:column;
                        gap:12px;
                    ">

        `;


        if (
            papers.length === 0
        ) {

            html += emptyMessage(
                "Paper Haijapatikana",
                "Hakuna PDF iliyopatikana kwa uchaguzi huu."
            );

        }


        papers.forEach(
            function (paper) {

                const title =
                    paper.title ||
                    "Past Paper";


                const file =
                    paper.file ||
                    "";


                if (!file) {

                    html += `

                        <div class="pp-paper-card">

                            <div class="pp-paper-info">

                                <div class="pp-paper-icon">
                                    ⚠️
                                </div>

                                <div>

                                    <h3>
                                        ${safeText(
                                            title
                                        )}
                                    </h3>

                                    <p>
                                        PDF path haijawekwa
                                        kwenye database.
                                    </p>

                                </div>

                            </div>

                        </div>

                    `;

                    return;

                }


                /*
                ------------------------------------------------
                IMPORTANT:

                GitHub Pages / static website:
                file path in database is used directly.

                Example:

                papers/form6/chemistry/
                pre_necta/dar_es_salaam/
                2026/F6_dsm_prenecta_2026_chem1.pdf
                ------------------------------------------------
                */


                const pdfUrl =
                    encodePDFPath(
                        file
                    );


                html += `

                    <div class="pp-paper-card">

                        <div class="pp-paper-info">

                            <div class="pp-paper-icon">
                                📄
                            </div>

                            <div>

                                <h3>
                                    ${safeText(
                                        title
                                    )}
                                </h3>

                                <p>
                                    ${safeText(
                                        label(
                                            state.subject
                                        )
                                    )}
                                    •
                                    ${safeText(
                                        label(
                                            state.type
                                        )
                                    )}
                                    •
                                    ${safeText(
                                        label(
                                            state.region
                                        )
                                    )}
                                    •
                                    ${safeText(
                                        String(
                                            state.year
                                        )
                                    )}
                                </p>

                            </div>

                        </div>


                        <a
                            class="pp-pdf-btn"
                            href="${safeText(pdfUrl)}"
                            target="_blank"
                            rel="noopener">

                            📄 FUNGUA PDF

                        </a>

                    </div>

                `;

            }
        );


        html += `

                </div>

            </div>

        `;


        app.innerHTML =
            html;

    }


    /* =====================================================
       PDF PATH
    ===================================================== */

    function encodePDFPath(
        path
    ) {

        /*
        -----------------------------------------------------
        Do NOT encode the entire path.

        Encode each folder/file separately so that spaces
        inside file names are handled correctly.
        -----------------------------------------------------
        */

        return String(path)
            .split("/")
            .map(
                function (part) {

                    return encodeURIComponent(
                        part
                    );

                }
            )
            .join("/");

    }


    /* =====================================================
       EMPTY MESSAGE
    ===================================================== */

    function emptyMessage(
        title,
        message
    ) {

        return `

            <div
                class="pp-empty"
                style="
                    grid-column:
                    1 / -1;
                ">

                <div class="pp-empty-icon">
                    📭
                </div>

                <h3>
                    ${safeText(title)}
                </h3>

                <p>
                    ${safeText(message)}
                </p>

            </div>

        `;

    }


    /* =====================================================
       BACK BUTTON ACTION
    ===================================================== */

    function goBack() {

        if (
            state.level ===
            "forms"
        ) {

            window.location.href =
                "index.html";

            return;

        }


        history.back();

    }


    /* =====================================================
       RESTORE STATE
    ===================================================== */

    function restoreState(
        savedState
    ) {

        if (
            !savedState ||
            savedState.app !==
                "gepam-pastpapers"
        ) {

            renderForms();

            return;

        }


        state = {

            level:
                savedState.level ||
                "forms",

            form:
                savedState.form ||
                null,

            subject:
                savedState.subject ||
                null,

            type:
                savedState.type ||
                null,

            region:
                savedState.region ||
                null,

            year:
                savedState.year ||
                null

        };


        renderCurrentLevel();

    }


    /* =====================================================
       RENDER CURRENT LEVEL
    ===================================================== */

    function renderCurrentLevel() {

        switch (
            state.level
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

                break;

        }

    }


    /* =====================================================
       BROWSER BACK / FORWARD
    ===================================================== */

    window.addEventListener(
        "popstate",
        function (event) {

            restoreState(
                event.state
            );

        }
    );


    /* =====================================================
       PUBLIC API
    ===================================================== */

    window.GEPAMPastPapers = {

        openForm:
            openForm,

        openSubject:
            openSubject,

        openType:
            openType,

        openRegion:
            openRegion,

        openYear:
            openYear,

        goBack:
            goBack,

        renderForms:
            renderForms

    };


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    const initialState = {

        app:
            "gepam-pastpapers",

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


    /*
    ---------------------------------------------------------
    Replace current browser history entry with our initial
    state.

    This is important so Android/browser Back can return
    correctly through the navigation levels.

    History API is designed for exactly this kind of
    same-page navigation. 
    ---------------------------------------------------------
    */

    history.replaceState(
        initialState,
        "",
        window.location.href
    );


    state = {

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


})();
