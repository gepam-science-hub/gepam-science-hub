/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE
   VERSION: CLEAN CARD UI
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DATA
    ===================================================== */

    const config =
        window.pastPaperConfig || null;

    const database =
        window.pastPapers || null;


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

    const resultDescription =
        document.getElementById("resultDescription");

    const breadcrumb =
        document.getElementById("breadcrumb");

    const backButton =
        document.getElementById("backButton");

    const currentYear =
        document.getElementById("currentYear");

    const menuButton =
        document.getElementById("menuButton");

    const mobileNav =
        document.getElementById("mobileNav");

    const progressFill =
        document.getElementById("progressFill");

    const progressSteps =
        document.querySelectorAll(
            ".progress-step"
        );


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuButton && mobileNav) {

        menuButton.addEventListener(
            "click",
            function () {

                mobileNav.classList.toggle(
                    "open"
                );

            }
        );

    }


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
       DATA VALIDATION
    ===================================================== */

    if (
        !config ||
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

        if (!value) {

            return "";

        }

        return String(value)
            .charAt(0)
            .toUpperCase()
            +
            String(value)
                .slice(1);

    }


    function formatForm(form) {

        const match =
            String(form)
                .match(/form(\d+)/i);

        return match
            ? "Form " + match[1]
            : capitalize(form);

    }


    function formatSubject(subject) {

        const labels = {

            physics:
                "Physics",

            chemistry:
                "Chemistry"

        };

        return (
            labels[subject] ||
            capitalize(subject)
        );

    }


    function formatType(type) {

        const labels = {

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

            necta:
                "NECTA",

            mock:
                "Mock",

            pre_necta:
                "Pre-NECTA",

            acsee:
                "ACSEE"

        };

        return (
            labels[type] ||
            capitalize(
                String(type)
                    .replace(/_/g, " ")
            )
        );

    }


    function formatLocation(location) {

        const labels = {

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

            morogoro:
                "Morogoro",

            mwanza:
                "Mwanza",

            tanga:
                "Tanga",

            tabora:
                "Tabora",

            kigoma:
                "Kigoma",

            geita:
                "Geita",

            katavi:
                "Katavi",

            lindi:
                "Lindi",

            mtwara:
                "Mtwara",

            pwani:
                "Pwani",

            rukwa:
                "Rukwa",

            singida:
                "Singida",

            simiyu:
                "Simiyu",

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

            zanzibar:
                "Zanzibar",

            necta:
                "NECTA"

        };

        return (
            labels[location] ||
            capitalize(
                String(location || "")
                    .replace(/_/g, " ")
            )
        );

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
       ICONS
    ===================================================== */

    function getFormIcon(form) {

        const icons = {

            form1: "🌱",

            form2: "📘",

            form3: "📗",

            form4: "📕",

            form5: "📙",

            form6: "🎓"

        };

        return icons[form] || "📚";

    }


    function getSubjectIcon(subject) {

        if (
            String(subject)
                .toLowerCase()
                === "physics"
        ) {

            return "⚛️";

        }

        if (
            String(subject)
                .toLowerCase()
                === "chemistry"
        ) {

            return "🧪";

        }

        return "📚";

    }


    function getTypeIcon(type) {

        const icons = {

            annual:
                "📘",

            midterm:
                "📝",

            terminal:
                "📗",

            joint:
                "🤝",

            ftna:
                "🏛️",

            necta:
                "🏛️",

            acsee:
                "🎓",

            mock:
                "📑",

            pre_necta:
                "📋"

        };

        return icons[type] || "📄";

    }


    /* =====================================================
       OPTION CARD
    ===================================================== */

    function createOptionCard(
        icon,
        title,
        subtitle,
        callback,
        extraClass
    ) {

        const button =
            document.createElement("button");

        button.type =
            "button";

        button.className =
            "option-card"
            +
            (
                extraClass
                    ? " " + extraClass
                    : ""
            );

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
                    `
                    <small>
                        ${escapeHTML(subtitle)}
                    </small>
                    `
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
       SECTIONS
    ===================================================== */

    function hideSection(section) {

        if (section) {

            section.hidden = true;

        }

    }


    function showSection(section) {

        if (section) {

            section.hidden = false;

        }

    }


    /* =====================================================
       RESET
    ===================================================== */

    function clearElement(element) {

        if (element) {

            element.innerHTML = "";

        }

    }


    function resetAfterForm() {

        selectedSubject = null;

        selectedType = null;

        selectedYear = null;

        selectedLocation = null;

        hideSection(typeSection);

        hideSection(yearSection);

        hideSection(locationSection);

        hideSection(resultsSection);

        clearElement(subjectOptions);

        clearElement(typeOptions);

        clearElement(yearOptions);

        clearElement(locationOptions);

        clearElement(paperResults);

    }


    function resetAfterSubject() {

        selectedType = null;

        selectedYear = null;

        selectedLocation = null;

        hideSection(yearSection);

        hideSection(locationSection);

        hideSection(resultsSection);

        clearElement(typeOptions);

        clearElement(yearOptions);

        clearElement(locationOptions);

        clearElement(paperResults);

    }


    function resetAfterType() {

        selectedYear = null;

        selectedLocation = null;

        hideSection(locationSection);

        hideSection(resultsSection);

        clearElement(yearOptions);

        clearElement(locationOptions);

        clearElement(paperResults);

    }


    function resetAfterYear() {

        selectedLocation = null;

        hideSection(resultsSection);

        clearElement(locationOptions);

        clearElement(paperResults);

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

        clearElement(formOptions);

        const forms =
            Object.keys(database)
                .filter(
                    form => {

                        const data =
                            database[form];

                        return (
                            data &&
                            (
                                Array.isArray(
                                    data.physics
                                )
                                ||
                                Array.isArray(
                                    data.chemistry
                                )
                            )
                        );

                    }
                )
                .sort(
                    naturalFormSort
                );


        if (!forms.length) {

            showMessage(
                formOptions,
                "📭",
                "No Forms Available",
                "No past paper data was found."
            );

            return;

        }


        forms.forEach(
            function (form) {

                const card =
                    createOptionCard(
                        getFormIcon(form),
                        formatForm(form),
                        "Open Form",
                        function () {

                            selectForm(form);

                        }
                    );

                formOptions.appendChild(card);

            }
        );

    }


    /* =====================================================
       FORM SORT
    ===================================================== */

    function naturalFormSort(a, b) {

        const na =
            parseInt(
                String(a)
                    .replace(/\D/g, ""),
                10
            ) || 0;

        const nb =
            parseInt(
                String(b)
                    .replace(/\D/g, ""),
                10
            ) || 0;

        return na - nb;

    }


    /* =====================================================
       SELECT FORM
    ===================================================== */

    function selectForm(form) {

        selectedForm =
            form;

        resetAfterForm();

        updateBreadcrumb();

        updateProgress(1);

        loadSubjects();

        showSection(
            subjectSection
        );

        scrollToSection(
            subjectSection
        );

    }


    /* =====================================================
       LOAD SUBJECTS
    ===================================================== */

    function loadSubjects() {

        clearElement(subjectOptions);

        const formData =
            database[selectedForm];

        const subjects =
            Object.keys(
                formData || {}
            )
            .filter(
                subject =>
                    Array.isArray(
                        formData[subject]
                    )
            );


        if (!subjects.length) {

            showMessage(
                subjectOptions,
                "📭",
                "No Subjects Available",
                "No Physics or Chemistry papers are currently available for this Form."
            );

            return;

        }


        subjects.forEach(
            function (subject) {

                const card =
                    createOptionCard(
                        getSubjectIcon(subject),
                        formatSubject(subject),
                        "Explore papers",
                        function () {

                            selectSubject(subject);

                        }
                    );

                subjectOptions.appendChild(card);

            }
        );

    }


    /* =====================================================
       SELECT SUBJECT
    ===================================================== */

    function selectSubject(subject) {

        selectedSubject =
            subject;

        resetAfterSubject();

        updateBreadcrumb();

        updateProgress(2);

        loadTypes();

        showSection(
            typeSection
        );

        scrollToSection(
            typeSection
        );

    }


    /* =====================================================
       LOAD TYPES
    ===================================================== */

    function loadTypes() {

        clearElement(typeOptions);

        const papers =
            getCurrentPapers();

        const types = [
            ...new Set(
                papers
                    .map(
                        paper =>
                            String(
                                paper.type || ""
                            )
                    )
                    .filter(Boolean)
            )
        ];


        if (!types.length) {

            showMessage(
                typeOptions,
                "📭",
                "No Examination Types",
                "No examination types were found for this subject."
            );

            return;

        }


        types.sort(
            function (a, b) {

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

                const ia =
                    order.indexOf(a);

                const ib =
                    order.indexOf(b);


                if (
                    ia === -1 &&
                    ib === -1
                ) {

                    return a.localeCompare(b);

                }


                if (ia === -1) {

                    return 1;

                }


                if (ib === -1) {

                    return -1;

                }


                return ia - ib;

            }
        );


        types.forEach(
            function (type) {

                const card =
                    createOptionCard(
                        getTypeIcon(type),
                        formatType(type),
                        "View examination years",
                        function () {

                            selectType(type);

                        }
                    );

                typeOptions.appendChild(card);

            }
        );

    }


    /* =====================================================
       SELECT TYPE
    ===================================================== */

    function selectType(type) {

        selectedType =
            type;

        resetAfterType();

        updateBreadcrumb();

        updateProgress(3);

        loadYears();

        showSection(
            yearSection
        );

        scrollToSection(
            yearSection
        );

    }


    /* =====================================================
       LOAD YEARS
    ===================================================== */

    function loadYears() {

        clearElement(yearOptions);

        const papers =
            getCurrentPapers()
                .filter(
                    paper =>
                        String(
                            paper.type
                        ) ===
                        String(
                            selectedType
                        )
                );


        const years = [
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
        ]
        .sort(
            (a, b) =>
                b - a
        );


        if (!years.length) {

            showMessage(
                yearOptions,
                "📭",
                "No Years Available",
                "No papers were found for this examination type."
            );

            return;

        }


        years.forEach(
            function (year) {

                const card =
                    createOptionCard(
                        "📅",
                        String(year),
                        "Open year",
                        function () {

                            selectYear(year);

                        }
                    );

                yearOptions.appendChild(card);

            }
        );

    }


    /* =====================================================
       SELECT YEAR
    ===================================================== */

    function selectYear(year) {

        selectedYear =
            year;

        resetAfterYear();

        updateBreadcrumb();

        updateProgress(4);

        loadLocations();

        showSection(
            locationSection
        );

        scrollToSection(
            locationSection
        );

    }


    /* =====================================================
       LOAD LOCATIONS
    ===================================================== */

    function loadLocations() {

        clearElement(
            locationOptions
        );

        const papers =
            getCurrentPapers()
                .filter(
                    function (paper) {

                        return (

                            String(
                                paper.type
                            ) ===
                            String(
                                selectedType
                            )

                            &&

                            Number(
                                paper.year
                            ) ===
                            Number(
                                selectedYear
                            )

                        );

                    }
                );


        const locations = [];


        papers.forEach(
            function (paper) {

                const location =
                    paper.region
                    ||
                    paper.school
                    ||
                    paper.zone
                    ||
                    "unknown";


                if (
                    !locations.includes(
                        location
                    )
                ) {

                    locations.push(
                        location
                    );

                }

            }
        );


        locations.sort(
            function (a, b) {

                return formatLocation(a)
                    .localeCompare(
                        formatLocation(b)
                    );

            }
        );


        if (!locations.length) {

            showMessage(
                locationOptions,
                "📭",
                "No Region / Source",
                "No paper source was found for this selection."
            );

            return;

        }


        locations.forEach(
            function (location) {

                const card =
                    createOptionCard(
                        "📍",
                        formatLocation(location),
                        "View available papers",
                        function () {

                            selectLocation(
                                location
                            );

                        }
                    );

                locationOptions.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       SELECT LOCATION
    ===================================================== */

    function selectLocation(location) {

        selectedLocation =
            location;

        updateBreadcrumb();

        updateProgress(5);

        loadPapers();

        showSection(
            resultsSection
        );

        scrollToSection(
            resultsSection
        );

    }


    /* =====================================================
       LOAD PAPERS
    ===================================================== */

    function loadPapers() {

        const papers =
            getCurrentPapers()
                .filter(
                    function (paper) {

                        const location =
                            paper.region
                            ||
                            paper.school
                            ||
                            paper.zone
                            ||
                            "unknown";


                        return (

                            String(
                                paper.type
                            ) ===
                            String(
                                selectedType
                            )

                            &&

                            Number(
                                paper.year
                            ) ===
                            Number(
                                selectedYear
                            )

                            &&

                            location ===
                            selectedLocation

                        );

                    }
                );


        updateProgress(6);


        if (resultDescription) {

            resultDescription.textContent =
                formatSubject(selectedSubject)
                +
                " • "
                +
                formatType(selectedType)
                +
                " • "
                +
                selectedYear
                +
                " • "
                +
                formatLocation(selectedLocation);

        }


        if (!papers.length) {

            showMessage(
                paperResults,
                "📭",
                "No Papers Found",
                "There are no papers matching your selected options."
            );

            return;

        }


        const chain =
            document.createElement("div");

        chain.className =
            "paper-chain";


        const header =
            document.createElement("div");

        header.className =
            "paper-chain-header";


        header.innerHTML = `

            <strong>
                📚
                ${escapeHTML(
                    formatSubject(
                        selectedSubject
                    )
                )}

                —
                ${escapeHTML(
                    formatType(
                        selectedType
                    )
                )}

                —
                ${escapeHTML(
                    String(selectedYear)
                )}

                —
                ${escapeHTML(
                    formatLocation(
                        selectedLocation
                    )
                )}
            </strong>

            <span>
                Select a paper to open
            </span>

        `;


        chain.appendChild(
            header
        );


        papers.forEach(
            function (paper, index) {

                chain.appendChild(
                    createPaperItem(
                        paper,
                        index + 1
                    )
                );

            }
        );


        paperResults.innerHTML =
            "";

        paperResults.appendChild(
            chain
        );

    }


    /* =====================================================
       CREATE PAPER
    ===================================================== */

    function createPaperItem(
        paper,
        number
    ) {

        const item =
            document.createElement("article");

        item.className =
            "paper-item";


        const title =
            paper.title
            ||
            (
                formatSubject(
                    selectedSubject
                )
                +
                " "
                +
                formatType(
                    selectedType
                )
                +
                " Examination"
            );


        const file =
            paper.file
            ||
            paper.pdf
            ||
            paper.url
            ||
            "";


        const location =
            paper.region
            ||
            paper.school
            ||
            paper.zone
            ||
            "unknown";


        item.innerHTML = `

            <div class="paper-number">
                ${number}
            </div>


            <div class="paper-info">

                <h3>
                    ${escapeHTML(title)}
                </h3>


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
                        class="open-pdf"
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
                        class="open-pdf"
                        style="
                            background:#8b95a5;
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
       SAFE PDF PATH
    ===================================================== */

    function safeFilePath(file) {

        let path =
            String(file || "")
                .trim();


        if (!path) {

            return "";

        }


        /* Absolute HTTPS/HTTP URL */

        if (
            /^https?:\/\//i.test(path)
        ) {

            return path;

        }


        /*
         * Keep relative path.
         *
         * Do NOT put "/" before it.
         *
         * This is important for GitHub Pages
         * project sites.
         */

        path =
            path.replace(
                /^\.?\//,
                ""
            );


        return path
            .split("/")
            .map(
                part =>
                    encodeURIComponent(
                        part
                    )
            )
            .join("/");

    }


    /* =====================================================
       BREADCRUMB
    ===================================================== */

    function updateBreadcrumb() {

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
            parts.map(
                function (part, index) {

                    if (
                        index ===
                        parts.length - 1
                    ) {

                        return `
                            <span class="current">
                                ${escapeHTML(part)}
                            </span>
                        `;

                    }


                    return `
                        <span>
                            ${escapeHTML(part)}
                        </span>

                        <span>
                            →
                        </span>
                    `;

                }
            )
            .join("");

    }


    /* =====================================================
       BACK BUTTON
    ===================================================== */

    if (backButton) {

        backButton.addEventListener(
            "click",
            function () {

                if (selectedLocation) {

                    selectedLocation =
                        null;

                    hideSection(
                        resultsSection
                    );

                    clearElement(
                        paperResults
                    );

                    updateProgress(5);

                    updateBreadcrumb();

                    return;

                }


                if (selectedYear) {

                    selectedYear =
                        null;

                    hideSection(
                        locationSection
                    );

                    hideSection(
                        resultsSection
                    );

                    clearElement(
                        locationOptions
                    );

                    updateProgress(4);

                    updateBreadcrumb();

                    return;

                }


                if (selectedType) {

                    selectedType =
                        null;

                    hideSection(
                        yearSection
                    );

                    hideSection(
                        locationSection
                    );

                    hideSection(
                        resultsSection
                    );

                    updateProgress(3);

                    updateBreadcrumb();

                    return;

                }


                if (selectedSubject) {

                    selectedSubject =
                        null;

                    hideSection(
                        typeSection
                    );

                    hideSection(
                        yearSection
                    );

                    hideSection(
                        locationSection
                    );

                    hideSection(
                        resultsSection
                    );

                    updateProgress(2);

                    updateBreadcrumb();

                    return;

                }


                if (selectedForm) {

                    selectedForm =
                        null;

                    hideSection(
                        subjectSection
                    );

                    hideSection(
                        typeSection
                    );

                    hideSection(
                        yearSection
                    );

                    hideSection(
                        locationSection
                    );

                    hideSection(
                        resultsSection
                    );

                    updateProgress(1);

                    updateBreadcrumb();

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                    return;

                }


                window.location.href =
                    "./index.html";

            }
        );

    }


    /* =====================================================
       PROGRESS
    ===================================================== */

    function updateProgress(step) {

        if (progressFill) {

            const percentage =
                ((step - 1) / 5) * 100;

            progressFill.style.width =
                percentage + "%";

        }


        progressSteps.forEach(
            function (element) {

                const number =
                    Number(
                        element.dataset.step
                    );


                element.classList.remove(
                    "active"
                );

                element.classList.remove(
                    "completed"
                );


                if (
                    number === step
                ) {

                    element.classList.add(
                        "active"
                    );

                }


                if (
                    number < step
                ) {

                    element.classList.add(
                        "completed"
                    );

                }

            }
        );

    }


    /* =====================================================
       MESSAGE
    ===================================================== */

    function showMessage(
        container,
        icon,
        title,
        text
    ) {

        if (!container) {

            return;

        }


        container.innerHTML = `

            <div class="message">

                <div class="message-icon">
                    ${icon}
                </div>

                <strong>
                    ${escapeHTML(title)}
                </strong>

                ${escapeHTML(text)}

            </div>

        `;

    }


    /* =====================================================
       FATAL ERROR
    ===================================================== */

    function showFatalError() {

        showMessage(
            formOptions,
            "⚠️",
            "Past Paper Data Error",
            "pastpapers.data.js haijasomeka au window.pastPapers haipo."
        );


        console.error(
            "GEPAM Past Papers: Data missing.",
            {
                config: config,
                database: database
            }
        );

    }


    /* =====================================================
       SCROLL
    ===================================================== */

    function scrollToSection(
        element
    ) {

        if (!element) {

            return;

        }


        setTimeout(
            function () {

                const offset =
                    92;

                const top =
                    element.getBoundingClientRect()
                        .top
                    +
                    window.pageYOffset
                    -
                    offset;


                window.scrollTo({

                    top:
                        Math.max(
                            top,
                            0
                        ),

                    behavior:
                        "smooth"

                });

            },
            100
        );

    }


    /* =====================================================
       START
    ===================================================== */

    updateProgress(1);

    loadForms();

})();
