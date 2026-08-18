/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE
   VERSION 2
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DOM READY
    ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        startPastPapers
    );


    function startPastPapers() {

        console.log(
            "GEPAM Past Papers Engine starting..."
        );


        /* =================================================
           CHECK DATA
        ================================================= */

        const config =
            window.pastPaperConfig;

        const database =
            window.pastPapers;


        console.log(
            "pastPaperConfig:",
            config
        );

        console.log(
            "pastPapers:",
            database
        );


        if (
            !config ||
            !database ||
            typeof database !== "object"
        ) {

            showFatalError();

            return;

        }


        console.log(
            "Past paper database loaded successfully."
        );


        /* =================================================
           DOM
        ================================================= */

        const formOptions =
            document.getElementById(
                "formOptions"
            );

        const subjectSection =
            document.getElementById(
                "subjectSection"
            );

        const subjectOptions =
            document.getElementById(
                "subjectOptions"
            );

        const typeSection =
            document.getElementById(
                "typeSection"
            );

        const typeOptions =
            document.getElementById(
                "typeOptions"
            );

        const yearSection =
            document.getElementById(
                "yearSection"
            );

        const yearOptions =
            document.getElementById(
                "yearOptions"
            );

        const locationSection =
            document.getElementById(
                "locationSection"
            );

        const locationOptions =
            document.getElementById(
                "locationOptions"
            );

        const resultsSection =
            document.getElementById(
                "resultsSection"
            );

        const paperResults =
            document.getElementById(
                "paperResults"
            );

        const resultCount =
            document.getElementById(
                "resultCount"
            );

        const breadcrumb =
            document.getElementById(
                "breadcrumb"
            );

        const backButton =
            document.getElementById(
                "backButton"
            );

        const currentYear =
            document.getElementById(
                "currentYear"
            );


        /* =================================================
           CURRENT YEAR
        ================================================= */

        if (currentYear) {

            currentYear.textContent =
                new Date().getFullYear();

        }


        /* =================================================
           STATE
        ================================================= */

        let selectedForm = null;

        let selectedSubject = null;

        let selectedType = null;

        let selectedYear = null;

        let selectedLocation = null;


        /* =================================================
           HELPERS
        ================================================= */

        function capitalize(value) {

            if (!value) {

                return "";

            }


            const text =
                String(value);

            return (
                text.charAt(0).toUpperCase()
                +
                text.slice(1)
            );

        }


        function escapeHTML(value) {

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


        function formatForm(form) {

            const match =
                String(form)
                    .match(
                        /form(\d+)/i
                    );


            if (match) {

                return (
                    "Form " +
                    match[1]
                );

            }


            return form;

        }


        function formatSubject(subject) {

            const labels = {

                physics:
                    "Physics",

                chemistry:
                    "Chemistry"

            };


            return (
                labels[subject]
                ||
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
                labels[type]
                ||
                capitalize(
                    String(type)
                        .replace(
                            /_/g,
                            " "
                        )
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
                labels[location]
                ||
                capitalize(
                    String(location)
                        .replace(
                            /_/g,
                            " "
                        )
                )
            );

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


            return (
                icons[type]
                ||
                "📄"
            );

        }


        function safeFilePath(file) {

            let path =
                String(file || "")
                    .trim();


            if (!path) {

                return "";

            }


            if (
                /^https?:\/\//i.test(path)
            ) {

                return path;

            }


            path =
                path.replace(
                    /^\/+/,
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


        /* =================================================
           CREATE OPTION
        ================================================= */

        function createOption(
            icon,
            title,
            subtitle,
            callback
        ) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


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


        /* =================================================
           RESET
        ================================================= */

        function hide(element) {

            if (element) {

                element.classList.add(
                    "hidden-section"
                );

            }

        }


        function show(element) {

            if (element) {

                element.classList.remove(
                    "hidden-section"
                );

            }

        }


        function clearAfterForm() {

            selectedSubject =
                null;

            selectedType =
                null;

            selectedYear =
                null;

            selectedLocation =
                null;


            hide(typeSection);

            hide(yearSection);

            hide(locationSection);

            hide(resultsSection);


            subjectOptions.innerHTML =
                "";

            typeOptions.innerHTML =
                "";

            yearOptions.innerHTML =
                "";

            locationOptions.innerHTML =
                "";

            paperResults.innerHTML =
                "";

        }


        function clearAfterSubject() {

            selectedType =
                null;

            selectedYear =
                null;

            selectedLocation =
                null;


            hide(yearSection);

            hide(locationSection);

            hide(resultsSection);


            typeOptions.innerHTML =
                "";

            yearOptions.innerHTML =
                "";

            locationOptions.innerHTML =
                "";

            paperResults.innerHTML =
                "";

        }


        function clearAfterType() {

            selectedYear =
                null;

            selectedLocation =
                null;


            hide(locationSection);

            hide(resultsSection);


            yearOptions.innerHTML =
                "";

            locationOptions.innerHTML =
                "";

            paperResults.innerHTML =
                "";

        }


        function clearAfterYear() {

            selectedLocation =
                null;


            hide(resultsSection);


            locationOptions.innerHTML =
                "";

            paperResults.innerHTML =
                "";

        }


        /* =================================================
           GET PAPERS
        ================================================= */

        function getCurrentPapers() {

            if (
                !selectedForm ||
                !selectedSubject
            ) {

                return [];

            }


            const formData =
                database[
                    selectedForm
                ];


            if (!formData) {

                return [];

            }


            const subjectData =
                formData[
                    selectedSubject
                ];


            return Array.isArray(
                subjectData
            )
                ?
                subjectData
                :
                [];

        }


        /* =================================================
           LOAD FORMS
        ================================================= */

        function loadForms() {

            formOptions.innerHTML =
                "";


            const forms =
                Object.keys(
                    database
                )

                .filter(
                    form => {

                        const data =
                            database[form];

                        return (
                            data &&
                            typeof data ===
                                "object"
                        );

                    }
                )

                .sort(
                    function (a, b) {

                        const na =
                            parseInt(
                                a.replace(
                                    /\D/g,
                                    ""
                                ),
                                10
                            ) || 0;

                        const nb =
                            parseInt(
                                b.replace(
                                    /\D/g,
                                    ""
                                ),
                                10
                            ) || 0;

                        return na - nb;

                    }
                );


            console.log(
                "Available forms:",
                forms
            );


            if (!forms.length) {

                formOptions.innerHTML = `

                    <div class="message">

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

                    const card =
                        createOption(
                            "🎓",
                            formatForm(form),
                            "Choose this class",
                            function () {

                                selectForm(
                                    form
                                );

                            }
                        );


                    formOptions.appendChild(
                        card
                    );

                }
            );

        }


        /* =================================================
           SELECT FORM
        ================================================= */

        function selectForm(form) {

            selectedForm =
                form;


            clearAfterForm();


            updateBreadcrumb();


            loadSubjects();


            show(
                subjectSection
            );


            scrollTo(
                subjectSection
            );

        }


        /* =================================================
           SUBJECTS
        ================================================= */

        function loadSubjects() {

            subjectOptions.innerHTML =
                "";


            const formData =
                database[
                    selectedForm
                ];


            const subjects =
                Object.keys(
                    formData || {}
                )

                .filter(
                    subject =>
                        Array.isArray(
                            formData[
                                subject
                            ]
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

                        No Physics or Chemistry
                        papers are currently
                        available for this Form.

                    </div>

                `;

                return;

            }


            subjects.forEach(
                function (subject) {

                    const icon =
                        subject === "physics"
                        ?
                        "⚛️"
                        :
                        "🧪";


                    const card =
                        createOption(
                            icon,
                            formatSubject(
                                subject
                            ),
                            "Choose subject",
                            function () {

                                selectSubject(
                                    subject
                                );

                            }
                        );


                    subjectOptions.appendChild(
                        card
                    );

                }
            );

        }


        /* =================================================
           SELECT SUBJECT
        ================================================= */

        function selectSubject(subject) {

            selectedSubject =
                subject;


            clearAfterSubject();


            updateBreadcrumb();


            loadTypes();


            show(
                typeSection
            );


            scrollTo(
                typeSection
            );

        }


        /* =================================================
           TYPES
        ================================================= */

        function loadTypes() {

            typeOptions.innerHTML =
                "";


            const papers =
                getCurrentPapers();


            const types = [
                ...new Set(
                    papers
                        .map(
                            paper =>
                                String(
                                    paper.type ||
                                    ""
                                )
                        )
                        .filter(Boolean)
                )
            ];


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


            types.sort(
                function (a, b) {

                    const ia =
                        order.indexOf(a);

                    const ib =
                        order.indexOf(b);


                    if (
                        ia === -1 &&
                        ib === -1
                    ) {

                        return a.localeCompare(
                            b
                        );

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


            if (!types.length) {

                typeOptions.innerHTML = `

                    <div class="message">

                        <div class="message-icon">
                            📭
                        </div>

                        <strong>
                            No Examination Types
                        </strong>

                        No examination types
                        were found.

                    </div>

                `;

                return;

            }


            types.forEach(
                function (type) {

                    const card =
                        createOption(
                            getTypeIcon(type),
                            formatType(type),
                            "Choose examination type",
                            function () {

                                selectType(
                                    type
                                );

                            }
                        );


                    typeOptions.appendChild(
                        card
                    );

                }
            );

        }


        /* =================================================
           SELECT TYPE
        ================================================= */

        function selectType(type) {

            selectedType =
                type;


            clearAfterType();


            updateBreadcrumb();


            loadYears();


            show(
                yearSection
            );


            scrollTo(
                yearSection
            );

        }


        /* =================================================
           YEARS
        ================================================= */

        function loadYears() {

            yearOptions.innerHTML =
                "";


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
                            Number.isFinite
                        )
                )
            ]
            .sort(
                (a, b) =>
                    b - a
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

                        No papers were found
                        for this type.

                    </div>

                `;

                return;

            }


            years.forEach(
                function (year) {

                    const card =
                        createOption(
                            "📅",
                            String(year),
                            "Open papers from " +
                            year,
                            function () {

                                selectYear(
                                    year
                                );

                            }
                        );


                    yearOptions.appendChild(
                        card
                    );

                }
            );

        }


        /* =================================================
           SELECT YEAR
        ================================================= */

        function selectYear(year) {

            selectedYear =
                year;


            clearAfterYear();


            updateBreadcrumb();


            loadLocations();


            show(
                locationSection
            );


            scrollTo(
                locationSection
            );

        }


        /* =================================================
           LOCATIONS
        ================================================= */

        function loadLocations() {

            locationOptions.innerHTML =
                "";


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

                            &&

                            Number(
                                paper.year
                            ) ===
                            Number(
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
                            No Region Available
                        </strong>

                        No paper source was found.

                    </div>

                `;

                return;

            }


            locations.forEach(
                function (location) {

                    const card =
                        createOption(
                            "📍",
                            formatLocation(
                                location
                            ),
                            "Open available papers",
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


        /* =================================================
           SELECT LOCATION
        ================================================= */

        function selectLocation(location) {

            selectedLocation =
                location;


            updateBreadcrumb();


            loadPapers();


            show(
                resultsSection
            );


            scrollTo(
                resultsSection
            );

        }


        /* =================================================
           LOAD PAPERS
        ================================================= */

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


            resultCount.textContent =
                papers.length +
                (
                    papers.length === 1
                    ?
                    " Paper"
                    :
                    " Papers"
                );


            if (!papers.length) {

                paperResults.innerHTML = `

                    <div class="message">

                        <div class="message-icon">
                            📭
                        </div>

                        <strong>
                            No Papers Found
                        </strong>

                        There are no papers
                        matching your selection.

                    </div>

                `;

                return;

            }


            const chain =
                document.createElement(
                    "div"
                );


            chain.className =
                "paper-chain";


            const header =
                document.createElement(
                    "div"
                );


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
                        String(
                            selectedYear
                        )
                    )}
                </strong>

                <span>
                    ${papers.length}
                    ${
                        papers.length === 1
                        ?
                        "Paper"
                        :
                        "Papers"
                    }
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


        /* =================================================
           PAPER ITEM
        ================================================= */

        function createPaperItem(
            paper,
            number
        ) {

            const item =
                document.createElement(
                    "div"
                );


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


            const safeFile =
                safeFilePath(
                    file
                );


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
                        safeFile
                        ?
                        `
                        <a
                            class="open-pdf"
                            href="${escapeHTML(
                                safeFile
                            )}"
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


        /* =================================================
           BREADCRUMB
        ================================================= */

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
                                    ${escapeHTML(
                                        part
                                    )}
                                </span>
                            `;

                        }


                        return `
                            <span>
                                ${escapeHTML(
                                    part
                                )}
                            </span>

                            <span>
                                →
                            </span>
                        `;

                    }
                )
                .join("");

        }


        /* =================================================
           BACK
        ================================================= */

        backButton.addEventListener(
            "click",
            function () {

                if (
                    selectedLocation
                ) {

                    selectedLocation =
                        null;

                    hide(
                        resultsSection
                    );

                    updateBreadcrumb();

                    loadLocations();

                    return;

                }


                if (
                    selectedYear
                ) {

                    selectedYear =
                        null;

                    hide(
                        locationSection
                    );

                    hide(
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

                    hide(
                        yearSection
                    );

                    hide(
                        locationSection
                    );

                    hide(
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

                    hide(
                        typeSection
                    );

                    hide(
                        yearSection
                    );

                    hide(
                        locationSection
                    );

                    hide(
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

                    hide(
                        subjectSection
                    );

                    hide(
                        typeSection
                    );

                    hide(
                        yearSection
                    );

                    hide(
                        locationSection
                    );

                    hide(
                        resultsSection
                    );

                    updateBreadcrumb();

                    return;

                }


                window.location.href =
                    "index.html";

            }
        );


        /* =================================================
           SCROLL
        ================================================= */

        function scrollTo(element) {

            if (!element) {

                return;

            }


            setTimeout(
                function () {

                    element.scrollIntoView({
                        behavior:
                            "smooth",

                        block:
                            "start"
                    });

                },
                100
            );

        }


        /* =================================================
           FATAL ERROR
        ================================================= */

        function showFatalError() {

            const formOptions =
                document.getElementById(
                    "formOptions"
                );


            if (!formOptions) {

                return;

            }


            formOptions.innerHTML = `

                <div class="message error-message">

                    <div class="message-icon">
                        ⚠️
                    </div>

                    <strong>
                        Past Paper Data Error
                    </strong>

                    <p>
                        <b>
                            pastpapers.data.js
                        </b>
                        haijasomeka au data yake
                        haijapatikana.
                    </p>

                    <br>

                    <small>
                        Hakikisha files hizi zipo
                        kwenye folder moja:
                    </small>

                    <br><br>

                    <b>
                        pastpapers.html
                    </b>

                    <br>

                    <b>
                        pastpapers.data.js
                    </b>

                    <br>

                    <b>
                        pastpapers.js
                    </b>

                </div>

            `;

        }


        /* =================================================
           START
        ================================================= */

        loadForms();

    }

})();
