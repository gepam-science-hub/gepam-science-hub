/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE
   FLOW:

   FORM
      ↓
   SUBJECT
      ↓
   EXAM TYPE
      ↓
   YEAR
      ↓
   REGION / SCHOOL
      ↓
   PAPER CHAIN
      ↓
   OPEN PDF
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       GET DATA
    ===================================================== */

    let config = null;
    let database = null;


    try {

        /*
         * Works with:
         *
         * const pastPaperConfig = {...}
         * const pastPapers = {...}
         *
         * from pastpapers.data.js
         */

        if (
            typeof pastPaperConfig !== "undefined"
        ) {
            config = pastPaperConfig;
        }


        if (
            typeof pastPapers !== "undefined"
        ) {
            database = pastPapers;
        }


        /*
         * Also support window variables if
         * they are exported from data.js.
         */

        if (
            !config &&
            window.pastPaperConfig
        ) {
            config = window.pastPaperConfig;
        }


        if (
            !database &&
            window.pastPapers
        ) {
            database = window.pastPapers;
        }

    } catch (error) {

        console.error(
            "Past paper data error:",
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
       CHECK DATA
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
       FORM LABEL
    ===================================================== */

    function formatForm(form) {

        const match =
            String(form)
                .match(/form(\d+)/i);

        if (match) {

            return "Form " + match[1];

        }

        return form;

    }


    /* =====================================================
       SUBJECT LABEL
    ===================================================== */

    function formatSubject(subject) {

        const labels = {

            physics: "Physics",

            chemistry: "Chemistry"

        };


        return (
            labels[subject] ||
            capitalize(subject)
        );

    }


    /* =====================================================
       EXAM TYPE LABEL
    ===================================================== */

    function formatType(type) {

        const labels = {

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


        return (
            labels[type] ||
            capitalize(
                String(type)
                    .replace(/_/g, " ")
            )
        );

    }


    /* =====================================================
       LOCATION LABEL
    ===================================================== */

    function formatLocation(location) {

        if (!location) {
            return "Unknown";
        }


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


        if (labels[location]) {

            return labels[location];

        }


        return capitalize(
            String(location)
                .replace(/_/g, " ")
        );

    }


    /* =====================================================
       CAPITALIZE
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


    /* =====================================================
       CREATE OPTION
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

        button.className =
            "option-card";


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
       ESCAPE HTML
    ===================================================== */

    function escapeHTML(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =====================================================
       RESET SECTION
    ===================================================== */

    function resetSection(section) {

        if (section) {

            section.hidden = true;

        }

    }


    /* =====================================================
       RESET EVERYTHING AFTER FORM
    ===================================================== */

    function resetAfterForm() {

        selectedSubject = null;

        selectedType = null;

        selectedYear = null;

        selectedLocation = null;


        resetSection(typeSection);

        resetSection(yearSection);

        resetSection(locationSection);

        resetSection(resultsSection);


        subjectOptions.innerHTML = "";

        typeOptions.innerHTML = "";

        yearOptions.innerHTML = "";

        locationOptions.innerHTML = "";

        paperResults.innerHTML = "";


        resultCount.textContent =
            "0 Papers";

    }


    /* =====================================================
       RESET AFTER SUBJECT
    ===================================================== */

    function resetAfterSubject() {

        selectedType = null;

        selectedYear = null;

        selectedLocation = null;


        resetSection(yearSection);

        resetSection(locationSection);

        resetSection(resultsSection);


        typeOptions.innerHTML = "";

        yearOptions.innerHTML = "";

        locationOptions.innerHTML = "";

        paperResults.innerHTML = "";


        resultCount.textContent =
            "0 Papers";

    }


    /* =====================================================
       RESET AFTER TYPE
    ===================================================== */

    function resetAfterType() {

        selectedYear = null;

        selectedLocation = null;


        resetSection(locationSection);

        resetSection(resultsSection);


        yearOptions.innerHTML = "";

        locationOptions.innerHTML = "";

        paperResults.innerHTML = "";


        resultCount.textContent =
            "0 Papers";

    }


    /* =====================================================
       RESET AFTER YEAR
    ===================================================== */

    function resetAfterYear() {

        selectedLocation = null;


        resetSection(resultsSection);


        locationOptions.innerHTML = "";

        paperResults.innerHTML = "";


        resultCount.textContent =
            "0 Papers";

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
                .filter(
                    form =>
                        Array.isArray(
                            database[form]?.physics
                        )
                        ||
                        Array.isArray(
                            database[form]?.chemistry
                        )
                )
                .sort(
                    naturalFormSort
                );


        if (!forms.length) {

            formOptions.innerHTML = `

                <div class="message error-message">

                    <div class="message-icon">
                        ⚠️
                    </div>

                    <strong>
                        No Forms Available
                    </strong>

                    No past paper data was found.

                </div>

            `;

            return;

        }


        forms.forEach(
            function (form) {

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
       COUNT FORM PAPERS
    ===================================================== */

    function countFormPapers(form) {

        let total = 0;


        const subjects =
            database[form] || {};


        Object.keys(subjects)
            .forEach(
                function (subject) {

                    if (
                        Array.isArray(
                            subjects[subject]
                        )
                    ) {

                        total +=
                            subjects[subject].length;

                    }

                }
            );


        return total;

    }


    /* =====================================================
       SELECT FORM
    ===================================================== */

    function selectForm(form) {

        selectedForm = form;


        resetAfterForm();


        updateBreadcrumb();


        loadSubjects();


        subjectSection.hidden = false;


        scrollToSection(
            subjectSection
        );

    }


    /* =====================================================
       LOAD SUBJECTS
    ===================================================== */

    function loadSubjects() {

        subjectOptions.innerHTML = "";


        const formData =
            database[selectedForm];


        const subjects =
            Object.keys(formData || {})
                .filter(
                    subject =>
                        Array.isArray(
                            formData[subject]
                        )
                );


        if (!subjects.length) {

            subjectOptions.innerHTML = `

                <div class="message">

                    <div class="message-icon">
                        📭
                    </div>

                    <strong>
                        No Subjects Available
                    </strong>

                    No Physics or Chemistry papers
                    are currently available for
                    this Form.

                </div>

            `;

            return;

        }


        subjects.forEach(
            function (subject) {

                const count =
                    formData[subject].length;


                let icon =
                    subject === "physics"
                    ? "⚛️"
                    : "🧪";


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

            }
        );

    }


    /* =====================================================
       SELECT SUBJECT
    ===================================================== */

    function selectSubject(subject) {

        selectedSubject = subject;


        resetAfterSubject();


        updateBreadcrumb();


        loadTypes();


        typeSection.hidden = false;


        scrollToSection(
            typeSection
        );

    }


    /* =====================================================
       LOAD EXAM TYPES
    ===================================================== */

    function loadTypes() {

        typeOptions.innerHTML = "";


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

            typeOptions.innerHTML = `

                <div class="message">

                    <div class="message-icon">
                        📭
                    </div>

                    <strong>
                        No Examination Types
                    </strong>

                    No examination types were
                    found for this subject.

                </div>

            `;

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


                if (ia === -1 && ib === -1) {

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

                const count =
                    papers.filter(
                        paper =>
                            String(
                                paper.type
                            ) === type
                    ).length;


                const icon =
                    getTypeIcon(type);


                const card =
                    createOption(
                        icon,
                        formatType(type),
                        `${count} paper${count === 1 ? "" : "s"}`,
                        function () {

                            selectType(type);

                        }
                    );


                typeOptions.appendChild(card);

            }
        );

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

            ftna: "🏛️",

            necta: "🏛️",

            acsee: "🎓",

            mock: "📑",

            pre_necta: "📋"

        };


        return icons[type] || "📄";

    }


    /* =====================================================
       SELECT TYPE
    ===================================================== */

    function selectType(type) {

        selectedType = type;


        resetAfterType();


        updateBreadcrumb();


        loadYears();


        yearSection.hidden = false;


        scrollToSection(
            yearSection
        );

    }


    /* =====================================================
       LOAD YEARS
    ===================================================== */

    function loadYears() {

        yearOptions.innerHTML = "";


        const papers =
            getCurrentPapers()
                .filter(
                    paper =>
                        String(
                            paper.type
                        ) === String(
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
                            Number.isFinite(year)
                    )
            )
        ]
        .sort(
            (a, b) => b - a
        );


        if (!years.length) {

            yearOptions.innerHTML = `

                <div class="message">

                    <div class="message-icon">
                        📭
                    </div>

                    <strong>
                        No Years Available
                    </strong>

                    No papers were found for this
                    examination type.

                </div>

            `;

            return;

        }


        years.forEach(
            function (year) {

                const count =
                    papers.filter(
                        paper =>
                            Number(
                                paper.year
                            ) === year
                    ).length;


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

            }
        );

    }


    /* =====================================================
       SELECT YEAR
    ===================================================== */

    function selectYear(year) {

        selectedYear = year;


        resetAfterYear();


        updateBreadcrumb();


        loadLocations();


        locationSection.hidden = false;


        scrollToSection(
            locationSection
        );

    }


    /* =====================================================
       LOAD LOCATIONS
    ===================================================== */

    function loadLocations() {

        locationOptions.innerHTML = "";


        const papers =
            getCurrentPapers()
                .filter(
                    paper =>

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

            locationOptions.innerHTML = `

                <div class="message">

                    <div class="message-icon">
                        📭
                    </div>

                    <strong>
                        No Region / School Available
                    </strong>

                    No paper source was found.

                </div>

            `;

            return;

        }


        locations.forEach(
            function (location) {

                const count =
                    papers.filter(
                        function (paper) {

                            return (
                                (
                                    paper.region
                                    ||
                                    paper.school
                                    ||
                                    paper.zone
                                    ||
                                    "unknown"
                                )
                                ===
                                location
                            );

                        }
                    ).length;


                const card =
                    createOption(
                        "📍",
                        formatLocation(location),
                        `${count} paper${count === 1 ? "" : "s"}`,
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


        loadPapers();


        resultsSection.hidden =
            false;


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

                            location ===
                                selectedLocation

                        );

                    }
                );


        resultCount.textContent =
            `${papers.length} ${
                papers.length === 1
                ? "Paper"
                : "Papers"
            }`;


        if (!papers.length) {

            paperResults.innerHTML = `

                <div class="message">

                    <div class="message-icon">
                        📭
                    </div>

                    <strong>
                        No Papers Found
                    </strong>

                    There are no papers matching
                    your selected options.

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
            "paper-chain-header";


        header.innerHTML = `

            <strong>
                📚 ${escapeHTML(formatSubject(selectedSubject))}
                — ${escapeHTML(formatType(selectedType))}
                — ${escapeHTML(String(selectedYear))}
            </strong>

            <span>
                ${papers.length}
                ${papers.length === 1 ? "Paper" : "Papers"}
            </span>

        `;


        chain.appendChild(
            header
        );


        papers.forEach(
            function (paper, index) {

                const item =
                    createPaperItem(
                        paper,
                        index + 1
                    );


                chain.appendChild(
                    item
                );

            }
        );


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
            "paper-item";


        const location =
            paper.region
            ||
            paper.school
            ||
            paper.zone
            ||
            "Unknown";


        const file =
            paper.file
            ||
            paper.pdf
            ||
            paper.url
            ||
            "";


        const title =
            paper.title
            ||
            `${formatSubject(selectedSubject)} ${formatType(selectedType)} Exam`;


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
                        📚 ${escapeHTML(formatSubject(selectedSubject))}
                    </span>

                    <span>
                        📝 ${escapeHTML(formatType(selectedType))}
                    </span>

                    <span>
                        📅 ${escapeHTML(String(paper.year))}
                    </span>

                    <span>
                        📍 ${escapeHTML(formatLocation(location))}
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
                        style="background:#999;"
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
       SAFE FILE PATH
    ===================================================== */

    function safeFilePath(file) {

        let path =
            String(file || "")
                .trim();


        /*
         * If the file is already an absolute URL,
         * keep it unchanged.
         */

        if (
            /^https?:\/\//i.test(path)
        ) {

            return escapeHTML(path);

        }


        /*
         * Remove leading slash so that
         * GitHub Pages resolves relative
         * to the current repository.
         */

        path =
            path.replace(/^\/+/, "");


        /*
         * Encode spaces and special characters
         * without destroying slashes.
         */

        const parts =
            path
                .split("/")
                .map(
                    part =>
                        encodeURIComponent(part)
                );


        return parts.join("/");

    }


    /* =====================================================
       BREADCRUMB
    ===================================================== */

    function updateBreadcrumb() {

        const parts = [];


        parts.push(
            "Past Papers"
        );


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

    backButton.addEventListener(
        "click",
        function () {

            if (
                selectedLocation
            ) {

                selectedLocation =
                    null;

                resetSection(
                    resultsSection
                );

                locationOptions
                    .innerHTML = "";

                updateBreadcrumb();

                loadLocations();

                return;

            }


            if (
                selectedYear
            ) {

                selectedYear =
                    null;

                resetSection(
                    locationSection
                );

                resetSection(
                    resultsSection
                );

                updateBreadcrumb();

                return;

            }


            if (
                selectedType
            ) {

                selectedType =
                    null;

                resetSection(
                    yearSection
                );

                resetSection(
                    locationSection
                );

                resetSection(
                    resultsSection
                );

                updateBreadcrumb();

                return;

            }


            if (
                selectedSubject
            ) {

                selectedSubject =
                    null;

                resetSection(
                    typeSection
                );

                resetSection(
                    yearSection
                );

                resetSection(
                    locationSection
                );

                resetSection(
                    resultsSection
                );

                updateBreadcrumb();

                return;

            }


            if (
                selectedForm
            ) {

                selectedForm =
                    null;

                resetSection(
                    subjectSection
                );

                resetSection(
                    typeSection
                );

                resetSection(
                    yearSection
                );

                resetSection(
                    locationSection
                );

                resetSection(
                    resultsSection
                );

                updateBreadcrumb();

                return;

            }


            window.location.href =
                "index.html";

        }
    );


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

                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            },
            80
        );

    }


    /* =====================================================
       FATAL ERROR
    ===================================================== */

    function showFatalError() {

        formOptions.innerHTML = `

            <div class="message error-message">

                <div class="message-icon">
                    ⚠️
                </div>

                <strong>
                    Data Error
                </strong>

                Past paper data haijapatikana.

                <br><br>

                Hakikisha:

                <br>

                <b>
                    pastpapers.data.js
                </b>

                ipo kwenye folder moja na
                <b>pastpapers.html</b>.

            </div>

        `;

    }


    /* =====================================================
       START SYSTEM
    ===================================================== */

    loadForms();

})();
