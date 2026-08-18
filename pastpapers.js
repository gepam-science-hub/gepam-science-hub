/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE
   VERSION: STABLE
========================================================= */

(function () {

    "use strict";

    /* =====================================================
       DATA
    ===================================================== */

    let config = null;
    let database = null;

    try {

        /*
         * First try window exports.
         */
        if (window.pastPaperConfig) {
            config = window.pastPaperConfig;
        }

        if (window.pastPapers) {
            database = window.pastPapers;
        }

        /*
         * Then try normal global declarations.
         */
        if (!config && typeof pastPaperConfig !== "undefined") {
            config = pastPaperConfig;
        }

        if (!database && typeof pastPapers !== "undefined") {
            database = pastPapers;
        }

    } catch (error) {

        console.error(
            "GEPAM Past Papers Data Error:",
            error
        );

    }


    /* =====================================================
       DOM
    ===================================================== */

    const formOptions =
        document.getElementById("formOptions");

    const subjectSection =
        document.getElementById("subjectSection");

    const subjectOptions =
        document.getElementById("subjectOptions");

    const typeSection =
        document.getElementById("typeSection");

    const typeOptions =
        document.getElementById("typeOptions");

    const yearSection =
        document.getElementById("yearSection");

    const yearOptions =
        document.getElementById("yearOptions");

    const locationSection =
        document.getElementById("locationSection");

    const locationOptions =
        document.getElementById("locationOptions");

    const resultsSection =
        document.getElementById("resultsSection");

    const paperResults =
        document.getElementById("paperResults");

    const resultCount =
        document.getElementById("resultCount");

    const breadcrumb =
        document.getElementById("breadcrumb");

    const backButton =
        document.getElementById("backButton");

    const currentYear =
        document.getElementById("currentYear");


    /* =====================================================
       YEAR
    ===================================================== */

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       STATE
    ===================================================== */

    let selectedForm = null;
    let selectedSubject = null;
    let selectedType = null;
    let selectedYear = null;
    let selectedLocation = null;


    /* =====================================================
       DATA CHECK
    ===================================================== */

    if (
        !database ||
        typeof database !== "object"
    ) {

        showFatalError();

        return;
    }


    /* =====================================================
       HELPERS
    ===================================================== */

    function capitalize(value) {

        if (!value) return "";

        return String(value)
            .replace(/_/g, " ")
            .replace(/\b\w/g, function (letter) {
                return letter.toUpperCase();
            });
    }


    function formatForm(form) {

        const match =
            String(form)
                .match(/form\s*(\d+)/i);

        if (match) {
            return "Form " + match[1];
        }

        return capitalize(form);
    }


    function formatSubject(subject) {

        const labels = {

            physics: "Physics",
            chemistry: "Chemistry",
            biology: "Biology",
            mathematics: "Mathematics",
            english: "English",
            kiswahili: "Kiswahili",
            geography: "Geography",
            history: "History",
            civics: "Civics"

        };

        return labels[subject]
            || capitalize(subject);
    }


    function formatType(type) {

        const labels = {

            annual: "Annual Examination",
            midterm: "Midterm Examination",
            terminal: "Terminal Examination",
            mock: "Mock Examination",
            joint: "Joint Examination",
            pre_necta: "Pre-NECTA",
            necta: "NECTA",
            ftna: "FTNA",
            acsee: "ACSEE"

        };

        return labels[type]
            || capitalize(type);
    }


    function formatLocation(location) {

        const labels = {

            dar_es_salaam: "Dar es Salaam",
            dodoma: "Dodoma",
            arusha: "Arusha",
            mbeya: "Mbeya",
            kagera: "Kagera",
            shinyanga: "Shinyanga",
            morogoro: "Morogoro",
            mwanza: "Mwanza",
            tanga: "Tanga",
            tabora: "Tabora",
            kigoma: "Kigoma",
            geita: "Geita",
            katavi: "Katavi",
            lindi: "Lindi",
            mtwara: "Mtwara",
            pwani: "Pwani",
            rukwa: "Rukwa",
            singida: "Singida",
            simiyu: "Simiyu",
            mara: "Mara",
            manyara: "Manyara",
            njombe: "Njombe",
            iringa: "Iringa",
            songwe: "Songwe",
            zanzibar: "Zanzibar",
            necta: "NECTA"

        };

        return labels[location]
            || capitalize(location);
    }


    function escapeHTML(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    /* =====================================================
       OPTION CARD
    ===================================================== */

    function createOption(
        icon,
        title,
        subtitle,
        callback
    ) {

        const button =
            document.createElement("button");

        button.type = "button";

        /*
         * Use both classes so the existing CSS
         * and the new system can work together.
         */
        button.className =
            "selection-card option-card";

        button.innerHTML = `

            <span class="option-icon">
                ${icon}
            </span>

            <span class="option-text">

                <strong>
                    ${escapeHTML(title)}
                </strong>

                ${
                    subtitle
                    ?
                    `<small>
                        ${escapeHTML(subtitle)}
                    </small>`
                    :
                    ""
                }

            </span>

            <span class="option-arrow">
                →
            </span>

        `;

        button.addEventListener(
            "click",
            callback
        );

        return button;
    }


    /* =====================================================
       SECTION CONTROL
    ===================================================== */

    function hide(section) {

        if (section) {
            section.hidden = true;
        }
    }


    function show(section) {

        if (section) {
            section.hidden = false;
        }
    }


    /* =====================================================
       GET PAPERS
    ===================================================== */

    function getCurrentPapers() {

        if (
            !selectedForm ||
            !selectedSubject
        ) {
            return [];
        }

        const formData =
            database[selectedForm];

        if (!formData) {
            return [];
        }

        const subjectData =
            formData[selectedSubject];

        if (!Array.isArray(subjectData)) {
            return [];
        }

        return subjectData;
    }


    /* =====================================================
       LOAD FORMS
    ===================================================== */

    function loadForms() {

        formOptions.innerHTML = "";

        const forms =
            Object.keys(database)
                .filter(function (form) {

                    return (
                        database[form] &&
                        typeof database[form] === "object"
                    );

                })
                .sort(function (a, b) {

                    const na =
                        parseInt(
                            String(a).replace(/\D/g, ""),
                            10
                        ) || 0;

                    const nb =
                        parseInt(
                            String(b).replace(/\D/g, ""),
                            10
                        ) || 0;

                    return na - nb;
                });


        if (!forms.length) {

            formOptions.innerHTML = `
                <div class="message error-message">
                    ⚠️ Hakuna Form zilizopatikana.
                </div>
            `;

            return;
        }


        forms.forEach(function (form) {

            const total =
                countFormPapers(form);

            const card =
                createOption(
                    "📚",
                    formatForm(form),
                    `${total} paper${total === 1 ? "" : "s"}`,
                    function () {

                        selectForm(form);

                    }
                );

            formOptions.appendChild(card);

        });

    }


    /* =====================================================
       COUNT FORM PAPERS
    ===================================================== */

    function countFormPapers(form) {

        let total = 0;

        const formData =
            database[form] || {};

        Object.keys(formData)
            .forEach(function (subject) {

                if (
                    Array.isArray(
                        formData[subject]
                    )
                ) {

                    total +=
                        formData[subject].length;

                }

            });

        return total;
    }


    /* =====================================================
       SELECT FORM
    ===================================================== */

    function selectForm(form) {

        selectedForm = form;

        selectedSubject = null;
        selectedType = null;
        selectedYear = null;
        selectedLocation = null;

        hide(typeSection);
        hide(yearSection);
        hide(locationSection);
        hide(resultsSection);

        typeOptions.innerHTML = "";
        yearOptions.innerHTML = "";
        locationOptions.innerHTML = "";
        paperResults.innerHTML = "";

        resultCount.textContent = "0 Papers";

        updateBreadcrumb();

        loadSubjects();

        show(subjectSection);

        scrollToSection(subjectSection);
    }


    /* =====================================================
       LOAD SUBJECTS
    ===================================================== */

    function loadSubjects() {

        subjectOptions.innerHTML = "";

        const formData =
            database[selectedForm] || {};

        /*
         * Prefer the subjects declared in config
         * when available.
         */
        let subjects = [];

        if (
            config &&
            config[selectedForm] &&
            Array.isArray(
                config[selectedForm].subjects
            )
        ) {

            subjects =
                config[selectedForm].subjects
                    .filter(function (subject) {

                        return Array.isArray(
                            formData[subject]
                        );

                    });

        } else {

            subjects =
                Object.keys(formData)
                    .filter(function (subject) {

                        return Array.isArray(
                            formData[subject]
                        );

                    });

        }


        if (!subjects.length) {

            subjectOptions.innerHTML = `
                <div class="message">
                    📭 Hakuna masomo yaliyopatikana
                    kwa ${escapeHTML(formatForm(selectedForm))}.
                </div>
            `;

            return;
        }


        subjects.forEach(function (subject) {

            const count =
                formData[subject].length;

            let icon = "📘";

            if (subject === "physics") {
                icon = "⚛️";
            }

            if (subject === "chemistry") {
                icon = "🧪";
            }

            const card =
                createOption(
                    icon,
                    formatSubject(subject),
                    `${count} paper${count === 1 ? "" : "s"}`,
                    function () {

                        selectSubject(subject);

                    }
                );

            subjectOptions.appendChild(card);

        });

    }


    /* =====================================================
       SELECT SUBJECT
    ===================================================== */

    function selectSubject(subject) {

        selectedSubject = subject;

        selectedType = null;
        selectedYear = null;
        selectedLocation = null;

        hide(yearSection);
        hide(locationSection);
        hide(resultsSection);

        yearOptions.innerHTML = "";
        locationOptions.innerHTML = "";
        paperResults.innerHTML = "";

        resultCount.textContent = "0 Papers";

        updateBreadcrumb();

        loadTypes();

        show(typeSection);

        scrollToSection(typeSection);
    }


    /* =====================================================
       LOAD TYPES
    ===================================================== */

    function loadTypes() {

        typeOptions.innerHTML = "";

        const papers =
            getCurrentPapers();

        const types =
            [
                ...new Set(
                    papers
                        .map(function (paper) {
                            return String(
                                paper.type || ""
                            ).trim();
                        })
                        .filter(Boolean)
                )
            ];


        if (!types.length) {

            typeOptions.innerHTML = `
                <div class="message">
                    📭 Hakuna examination type
                    iliyopatikana.
                </div>
            `;

            return;
        }


        const order = [
            "necta",
            "acsee",
            "ftna",
            "annual",
            "terminal",
            "midterm",
            "joint",
            "mock",
            "pre_necta"
        ];


        types.sort(function (a, b) {

            const ia =
                order.indexOf(a);

            const ib =
                order.indexOf(b);

            if (ia === -1 && ib === -1) {
                return a.localeCompare(b);
            }

            if (ia === -1) return 1;

            if (ib === -1) return -1;

            return ia - ib;

        });


        types.forEach(function (type) {

            const count =
                papers.filter(function (paper) {

                    return String(
                        paper.type
                    ) === type;

                }).length;


            const card =
                createOption(
                    getTypeIcon(type),
                    formatType(type),
                    `${count} paper${count === 1 ? "" : "s"}`,
                    function () {

                        selectType(type);

                    }
                );

            typeOptions.appendChild(card);

        });

    }


    /* =====================================================
       TYPE ICON
    ===================================================== */

    function getTypeIcon(type) {

        const icons = {

            annual: "📘",
            midterm: "📝",
            terminal: "📗",
            joint: "🤝",
            mock: "📑",
            pre_necta: "📋",
            necta: "🏛️",
            ftna: "🏛️",
            acsee: "🎓"

        };

        return icons[type] || "📄";
    }


    /* =====================================================
       SELECT TYPE
    ===================================================== */

    function selectType(type) {

        selectedType = type;

        selectedYear = null;
        selectedLocation = null;

        hide(locationSection);
        hide(resultsSection);

        locationOptions.innerHTML = "";
        paperResults.innerHTML = "";

        resultCount.textContent = "0 Papers";

        updateBreadcrumb();

        loadYears();

        show(yearSection);

        scrollToSection(yearSection);
    }


    /* =====================================================
       LOAD YEARS
    ===================================================== */

    function loadYears() {

        yearOptions.innerHTML = "";

        const papers =
            getCurrentPapers()
                .filter(function (paper) {

                    return String(
                        paper.type
                    ) === String(
                        selectedType
                    );

                });


        const years =
            [
                ...new Set(
                    papers
                        .map(function (paper) {

                            return Number(
                                paper.year
                            );

                        })
                        .filter(function (year) {

                            return Number.isFinite(
                                year
                            );

                        })
                )
            ]
            .sort(function (a, b) {

                return b - a;

            });


        if (!years.length) {

            yearOptions.innerHTML = `
                <div class="message">
                    📭 Hakuna mwaka uliopatikana
                    kwa ${escapeHTML(formatType(selectedType))}.
                </div>
            `;

            return;
        }


        years.forEach(function (year) {

            const count =
                papers.filter(function (paper) {

                    return Number(
                        paper.year
                    ) === Number(year);

                }).length;


            const card =
                createOption(
                    "📅",
                    String(year),
                    `${count} paper${count === 1 ? "" : "s"}`,
                    function () {

                        selectYear(year);

                    }
                );

            yearOptions.appendChild(card);

        });

    }


    /* =====================================================
       SELECT YEAR
    ===================================================== */

    function selectYear(year) {

        selectedYear = Number(year);

        selectedLocation = null;

        hide(resultsSection);

        locationOptions.innerHTML = "";
        paperResults.innerHTML = "";

        resultCount.textContent = "0 Papers";

        updateBreadcrumb();

        loadLocations();

        show(locationSection);

        scrollToSection(locationSection);
    }


    /* =====================================================
       LOCATION KEY
    ===================================================== */

    function getPaperLocation(paper) {

        return (
            paper.region ||
            paper.school ||
            paper.zone ||
            "unknown"
        );

    }


    /* =====================================================
       LOAD LOCATIONS
    ===================================================== */

    function loadLocations() {

        locationOptions.innerHTML = "";

        const papers =
            getCurrentPapers()
                .filter(function (paper) {

                    return (

                        String(
                            paper.type
                        ) === String(
                            selectedType
                        )

                        &&

                        Number(
                            paper.year
                        ) === Number(
                            selectedYear
                        )

                    );

                });


        const locations = [];


        papers.forEach(function (paper) {

            const location =
                getPaperLocation(paper);

            if (
                !locations.includes(location)
            ) {

                locations.push(location);

            }

        });


        locations.sort(function (a, b) {

            return formatLocation(a)
                .localeCompare(
                    formatLocation(b)
                );

        });


        if (!locations.length) {

            locationOptions.innerHTML = `
                <div class="message">
                    📭 Hakuna Region / School / Zone
                    iliyopatikana.
                </div>
            `;

            return;
        }


        locations.forEach(function (location) {

            const count =
                papers.filter(function (paper) {

                    return (
                        getPaperLocation(paper)
                        ===
                        location
                    );

                }).length;


            const card =
                createOption(
                    "📍",
                    formatLocation(location),
                    `${count} paper${count === 1 ? "" : "s"}`,
                    function () {

                        selectLocation(location);

                    }
                );


            locationOptions.appendChild(card);

        });

    }


    /* =====================================================
       SELECT LOCATION
    ===================================================== */

    function selectLocation(location) {

        selectedLocation =
            location;

        updateBreadcrumb();

        loadPapers();

        show(resultsSection);

        scrollToSection(resultsSection);
    }


    /* =====================================================
       LOAD PAPERS
    ===================================================== */

    function loadPapers() {

        const papers =
            getCurrentPapers()
                .filter(function (paper) {

                    return (

                        String(
                            paper.type
                        ) === String(
                            selectedType
                        )

                        &&

                        Number(
                            paper.year
                        ) === Number(
                            selectedYear
                        )

                        &&

                        getPaperLocation(paper)
                        ===
                        selectedLocation

                    );

                });


        resultCount.textContent =
            `${papers.length} ${
                papers.length === 1
                ? "Paper"
                : "Papers"
            }`;


        if (!papers.length) {

            paperResults.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📭</div>

                    <h3>No Papers Found</h3>

                    <p>
                        Hakuna paper inayolingana
                        na uchaguzi wako.
                    </p>
                </div>
            `;

            return;
        }


        const chain =
            document.createElement("div");

        chain.className =
            "paper-chain";


        const header =
            document.createElement("div");

        header.className =
            "chain-header";


        header.innerHTML = `

            <div>

                <strong>
                    📚
                    ${escapeHTML(
                        formatSubject(
                            selectedSubject
                        )
                    )}
                </strong>

                <span>→</span>

                <strong>
                    ${escapeHTML(
                        formatType(
                            selectedType
                        )
                    )}
                </strong>

                <span>→</span>

                <strong>
                    ${escapeHTML(
                        String(selectedYear)
                    )}
                </strong>

                <span>→</span>

                <strong>
                    ${escapeHTML(
                        formatLocation(
                            selectedLocation
                        )
                    )}
                </strong>

            </div>

            <span class="paper-total">
                ${papers.length}
                ${papers.length === 1 ? "Paper" : "Papers"}
            </span>

        `;


        chain.appendChild(header);


        papers.forEach(function (paper, index) {

            chain.appendChild(
                createPaperItem(
                    paper,
                    index + 1
                )
            );

        });


        paperResults.innerHTML = "";

        paperResults.appendChild(
            chain
        );

    }


    /* =====================================================
       CREATE PAPER ITEM
    ===================================================== */

    function createPaperItem(
        paper,
        number
    ) {

        const item =
            document.createElement("div");

        item.className =
            "paper-chain-item";


        const file =
            paper.file ||
            paper.pdf ||
            paper.url ||
            "";


        const title =
            paper.title ||
            `${formatSubject(selectedSubject)}
             ${formatType(selectedType)}
             ${selectedYear}`;


        const location =
            getPaperLocation(paper);


        item.innerHTML = `

            <div class="paper-chain-number">

                ${number}

            </div>


            <div class="paper-info">

                <h4>
                    ${escapeHTML(title)}
                </h4>


                <div class="paper-meta">

                    <span>
                        📚
                        ${escapeHTML(
                            formatSubject(
                                selectedSubject
                            )
                        )}
                    </span>

                    <span>
                        📝
                        ${escapeHTML(
                            formatType(
                                selectedType
                            )
                        )}
                    </span>

                    <span>
                        📅
                        ${escapeHTML(
                            String(
                                paper.year
                            )
                        )}
                    </span>

                    <span>
                        📍
                        ${escapeHTML(
                            formatLocation(
                                location
                            )
                        )}
                    </span>

                </div>

            </div>


            <div class="paper-action">

                ${
                    file
                    ?
                    `
                    <a
                        class="open-pdf-button"
                        href="${safeFilePath(file)}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📄 Fungua PDF
                    </a>
                    `
                    :
                    `
                    <span
                        class="open-pdf-button"
                        style="
                            background:#999;
                            cursor:not-allowed;
                        "
                    >
                        PDF haipo
                    </span>
                    `
                }

            </div>

        `;


        return item;
    }


    /* =====================================================
       FILE PATH
    ===================================================== */

    function safeFilePath(file) {

        let path =
            String(file || "")
                .trim();


        if (!path) {
            return "#";
        }


        /*
         * External URL
         */
        if (
            /^https?:\/\//i.test(path)
        ) {

            return path;

        }


        /*
         * Remove leading slash.
         */
        path =
            path.replace(/^\/+/, "");


        /*
         * Preserve folders.
         */
        return path
            .split("/")
            .map(function (part) {

                return encodeURIComponent(part);

            })
            .join("/");
    }


    /* =====================================================
       BREADCRUMB
    ===================================================== */

    function updateBreadcrumb() {

        /*
         * IMPORTANT:
         * Do not crash if breadcrumb is absent.
         */
        if (!breadcrumb) {
            return;
        }


        const parts = [
            "Past Papers"
        ];


        if (selectedForm) {
            parts.push(
                formatForm(
                    selectedForm
                )
            );
        }


        if (selectedSubject) {
            parts.push(
                formatSubject(
                    selectedSubject
                )
            );
        }


        if (selectedType) {
            parts.push(
                formatType(
                    selectedType
                )
            );
        }


        if (selectedYear) {
            parts.push(
                String(
                    selectedYear
                )
            );
        }


        if (selectedLocation) {
            parts.push(
                formatLocation(
                    selectedLocation
                )
            );
        }


        breadcrumb.innerHTML =
            parts.map(function (part, index) {

                return `
                    <span>
                        ${escapeHTML(part)}
                    </span>
                    ${
                        index <
                        parts.length - 1
                        ?
                        `<span class="breadcrumb-arrow">
                            →
                        </span>`
                        :
                        ""
                    }
                `;

            }).join("");

    }


    /* =====================================================
       BACK BUTTON
    ===================================================== */

    if (backButton) {

        backButton.addEventListener(
            "click",
            function () {

                if (selectedLocation) {

                    selectedLocation = null;

                    hide(resultsSection);

                    paperResults.innerHTML = "";

                    updateBreadcrumb();

                    return;
                }


                if (selectedYear) {

                    selectedYear = null;

                    selectedLocation = null;

                    hide(locationSection);
                    hide(resultsSection);

                    locationOptions.innerHTML = "";
                    paperResults.innerHTML = "";

                    updateBreadcrumb();

                    scrollToSection(
                        typeSection
                    );

                    return;
                }


                if (selectedType) {

                    selectedType = null;

                    selectedYear = null;
                    selectedLocation = null;

                    hide(yearSection);
                    hide(locationSection);
                    hide(resultsSection);

                    yearOptions.innerHTML = "";
                    locationOptions.innerHTML = "";
                    paperResults.innerHTML = "";

                    updateBreadcrumb();

                    scrollToSection(
                        typeSection
                    );

                    return;
                }


                if (selectedSubject) {

                    selectedSubject = null;

                    selectedType = null;
                    selectedYear = null;
                    selectedLocation = null;

                    hide(typeSection);
                    hide(yearSection);
                    hide(locationSection);
                    hide(resultsSection);

                    typeOptions.innerHTML = "";
                    yearOptions.innerHTML = "";
                    locationOptions.innerHTML = "";
                    paperResults.innerHTML = "";

                    updateBreadcrumb();

                    scrollToSection(
                        subjectSection
                    );

                    return;
                }


                if (selectedForm) {

                    selectedForm = null;

                    selectedSubject = null;
                    selectedType = null;
                    selectedYear = null;
                    selectedLocation = null;

                    hide(subjectSection);
                    hide(typeSection);
                    hide(yearSection);
                    hide(locationSection);
                    hide(resultsSection);

                    updateBreadcrumb();

                    scrollToSection(
                        formOptions
                    );

                    return;
                }


                window.location.href =
                    "index.html";

            }
        );

    }


    /* =====================================================
       SCROLL
    ===================================================== */

    function scrollToSection(element) {

        if (!element) {
            return;
        }

        setTimeout(function () {

            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }


    /* =====================================================
       FATAL ERROR
    ===================================================== */

    function showFatalError() {

        if (!formOptions) {
            return;
        }


        formOptions.innerHTML = `

            <div class="message error-message">

                <div class="message-icon">
                    ⚠️
                </div>

                <strong>
                    Data Error
                </strong>

                <p>
                    Past paper data haijapatikana.
                </p>

                <br>

                <p>
                    Hakikisha:
                </p>

                <p>
                    <b>
                        pastpapers.data.js
                    </b>
                    imewekwa kabla ya
                    <b>
                        pastpapers.js
                    </b>.
                </p>

            </div>

        `;

        console.error(
            "GEPAM: pastPapers data haikupatikana."
        );
    }


    /* =====================================================
       START
    ===================================================== */

    loadForms();

})();
