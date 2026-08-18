/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE v2
   Compatible with:
   - pastpapers.data.js
   - window.pastPaperConfig
   - window.pastPapers

   FLOW:
   FORM
      ↓
   SUBJECT
      ↓
   TYPE
      ↓
   YEAR
      ↓
   REGION / SCHOOL
      ↓
   PAPERS
      ↓
   OPEN PDF
========================================================= */

(function () {

    "use strict";

    /* =====================================================
       WAIT UNTIL PAGE + DATA ARE READY
    ===================================================== */

    function startPastPapers() {

        console.log("=================================");
        console.log("GEPAM PAST PAPERS ENGINE STARTING");
        console.log("=================================");

        /* =================================================
           GET DATA FROM WINDOW
        ================================================= */

        const config = window.pastPaperConfig || null;
        const database = window.pastPapers || null;

        console.log("pastPaperConfig:", config);
        console.log("pastPapers:", database);

        /* =================================================
           GET DOM ELEMENTS
        ================================================= */

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


        /* =================================================
           CHECK DOM
        ================================================= */

        if (!formOptions) {

            console.error(
                "GEPAM ERROR: #formOptions haipo kwenye HTML."
            );

            return;

        }


        /* =================================================
           CURRENT YEAR
        ================================================= */

        if (currentYear) {

            currentYear.textContent =
                new Date().getFullYear();

        }


        /* =================================================
           DATA VALIDATION
        ================================================= */

        if (
            !database ||
            typeof database !== "object" ||
            Array.isArray(database)
        ) {

            showDataError(
                formOptions,
                "window.pastPapers haijapatikana."
            );

            return;

        }


        const databaseKeys =
            Object.keys(database);


        console.log(
            "GEPAM DATA FORMS:",
            databaseKeys
        );


        if (!databaseKeys.length) {

            showDataError(
                formOptions,
                "pastPapers ipo lakini haina Form yoyote."
            );

            return;

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

        function escapeHTML(value) {

            return String(value ?? "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");

        }


        function capitalize(value) {

            if (!value) {
                return "";
            }

            const text =
                String(value)
                    .replace(/_/g, " ");

            return text.charAt(0).toUpperCase()
                + text.slice(1);

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
                chemistry: "Chemistry"

            };

            return labels[String(subject).toLowerCase()]
                || capitalize(subject);

        }


        function formatType(type) {

            const key =
                String(type || "")
                    .toLowerCase();

            const labels = {

                midterm: "Midterm",
                terminal: "Terminal",
                annual: "Annual",
                joint: "Joint",
                ftna: "FTNA",
                necta: "NECTA",
                mock: "Mock",
                pre_necta: "Pre-NECTA",
                prenecta: "Pre-NECTA",
                acsee: "ACSEE"

            };

            return labels[key]
                || capitalize(key);

        }


        function formatLocation(location) {

            if (!location) {
                return "Unknown";
            }

            const key =
                String(location)
                    .toLowerCase();

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

            return labels[key]
                || capitalize(key);

        }


        function getPaperLocation(paper) {

            return (
                paper.region
                ||
                paper.school
                ||
                paper.zone
                ||
                "unknown"
            );

        }


        function getPaperFile(paper) {

            return (
                paper.file
                ||
                paper.pdf
                ||
                paper.url
                ||
                ""
            );

        }


        function safeFilePath(file) {

            let path =
                String(file || "")
                    .trim();

            if (!path) {
                return "";
            }


            /* Absolute URL */

            if (
                /^https?:\/\//i.test(path)
                ||
                /^data:/i.test(path)
            ) {

                return path;

            }


            /*
             * Remove leading slash.
             */

            path =
                path.replace(/^\/+/, "");


            /*
             * Encode each folder/file separately.
             * This preserves /
             */

            return path
                .split("/")
                .map(
                    part =>
                        encodeURIComponent(part)
                )
                .join("/");

        }


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
                pre_necta: "📋",
                prenecta: "📋"

            };

            return icons[String(type).toLowerCase()]
                || "📄";

        }


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
                "option-card selection-card";

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


        function showMessage(
            container,
            icon,
            title,
            text,
            error = false
        ) {

            if (!container) {
                return;
            }

            container.innerHTML = `

                <div class="message ${error ? "error-message" : ""}">

                    <div class="message-icon">
                        ${icon}
                    </div>

                    <strong>
                        ${escapeHTML(title)}
                    </strong>

                    <div>
                        ${escapeHTML(text)}
                    </div>

                </div>

            `;

        }


        function hide(element) {

            if (element) {
                element.hidden = true;
            }

        }


        function show(element) {

            if (element) {
                element.hidden = false;
            }

        }


        function clear(element) {

            if (element) {
                element.innerHTML = "";
            }

        }


        function scrollToSection(element) {

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
                100
            );

        }


        /* =================================================
           BREADCRUMB
        ================================================= */

        function updateBreadcrumb() {

            if (!breadcrumb) {
                return;
            }

            const parts = ["Past Papers"];


            if (selectedForm) {

                parts.push(
                    formatForm(selectedForm)
                );

            }


            if (selectedSubject) {

                parts.push(
                    formatSubject(selectedSubject)
                );

            }


            if (selectedType) {

                parts.push(
                    formatType(selectedType)
                );

            }


            if (selectedYear !== null) {

                parts.push(
                    String(selectedYear)
                );

            }


            if (selectedLocation) {

                parts.push(
                    formatLocation(selectedLocation)
                );

            }


            breadcrumb.innerHTML =
                parts
                    .map(
                        function (part, index) {

                            const last =
                                index ===
                                parts.length - 1;

                            return last

                                ?

                                `
                                <span class="current">
                                    ${escapeHTML(part)}
                                </span>
                                `

                                :

                                `
                                <span>
                                    ${escapeHTML(part)}
                                </span>

                                <span class="breadcrumb-arrow">
                                    →
                                </span>
                                `;

                        }
                    )
                    .join("");

        }


        /* =================================================
           GET SUBJECT PAPERS
        ================================================= */

        function getCurrentPapers() {

            if (
                !selectedForm ||
                !selectedSubject
            ) {

                return [];

            }


            const formData =
                database[selectedForm];


            if (
                !formData ||
                typeof formData !== "object"
            ) {

                return [];

            }


            const subjectData =
                formData[selectedSubject];


            return Array.isArray(subjectData)
                ? subjectData
                : [];

        }


        /* =================================================
           COUNT FORM PAPERS
        ================================================= */

        function countFormPapers(form) {

            const formData =
                database[form];

            if (
                !formData ||
                typeof formData !== "object"
            ) {

                return 0;

            }


            let total = 0;


            Object.keys(formData)
                .forEach(
                    function (subject) {

                        if (
                            Array.isArray(
                                formData[subject]
                            )
                        ) {

                            total +=
                                formData[subject].length;

                        }

                    }
                );


            return total;

        }


        /* =================================================
           SORT FORMS
        ================================================= */

        function sortForms(a, b) {

            const na =
                Number(
                    String(a)
                        .match(/\d+/)?.[0]
                    || 0
                );

            const nb =
                Number(
                    String(b)
                        .match(/\d+/)?.[0]
                    || 0
                );

            return na - nb;

        }


        /* =================================================
           LOAD FORMS
        ================================================= */

        function loadForms() {

            clear(formOptions);


            const forms =
                Object.keys(database)
                    .filter(
                        function (form) {

                            const data =
                                database[form];

                            if (
                                !data ||
                                typeof data !== "object"
                            ) {

                                return false;

                            }

                            return Object.keys(data)
                                .some(
                                    subject =>
                                        Array.isArray(
                                            data[subject]
                                        )
                                );

                        }
                    )
                    .sort(sortForms);


            console.log(
                "GEPAM AVAILABLE FORMS:",
                forms
            );


            if (!forms.length) {

                showMessage(
                    formOptions,
                    "⚠️",
                    "No Forms Available",
                    "Hakuna past paper data yenye muundo unaotambulika.",
                    true
                );

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


        /* =================================================
           SELECT FORM
        ================================================= */

        function selectForm(form) {

            selectedForm = form;

            selectedSubject = null;
            selectedType = null;
            selectedYear = null;
            selectedLocation = null;


            clear(subjectOptions);
            clear(typeOptions);
            clear(yearOptions);
            clear(locationOptions);
            clear(paperResults);


            hide(typeSection);
            hide(yearSection);
            hide(locationSection);
            hide(resultsSection);


            if (resultCount) {
                resultCount.textContent = "0 Papers";
            }


            updateBreadcrumb();

            loadSubjects();

            show(subjectSection);

            scrollToSection(
                subjectSection
            );

        }


        /* =================================================
           LOAD SUBJECTS
        ================================================= */

        function loadSubjects() {

            clear(subjectOptions);


            const formData =
                database[selectedForm];


            if (
                !formData ||
                typeof formData !== "object"
            ) {

                showMessage(
                    subjectOptions,
                    "📭",
                    "No Subjects Available",
                    "Hakuna subjects zilizopatikana kwa Form hii."
                );

                return;

            }


            const subjects =
                Object.keys(formData)
                    .filter(
                        subject =>
                            Array.isArray(
                                formData[subject]
                            )
                    );


            /*
             * Keep Physics first,
             * Chemistry second.
             */

            subjects.sort(
                function (a, b) {

                    const order = [
                        "physics",
                        "chemistry"
                    ];

                    const ia =
                        order.indexOf(
                            String(a).toLowerCase()
                        );

                    const ib =
                        order.indexOf(
                            String(b).toLowerCase()
                        );

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


            if (!subjects.length) {

                showMessage(
                    subjectOptions,
                    "📭",
                    "No Subjects Available",
                    "Hakuna Physics au Chemistry papers zilizopatikana."
                );

                return;

            }


            subjects.forEach(
                function (subject) {

                    const count =
                        formData[subject].length;


                    const icon =
                        String(subject).toLowerCase()
                        === "physics"
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


        /* =================================================
           SELECT SUBJECT
        ================================================= */

        function selectSubject(subject) {

            selectedSubject = subject;

            selectedType = null;
            selectedYear = null;
            selectedLocation = null;


            clear(typeOptions);
            clear(yearOptions);
            clear(locationOptions);
            clear(paperResults);


            hide(yearSection);
            hide(locationSection);
            hide(resultsSection);


            if (resultCount) {
                resultCount.textContent = "0 Papers";
            }


            updateBreadcrumb();

            loadTypes();

            show(typeSection);

            scrollToSection(
                typeSection
            );

        }


        /* =================================================
           LOAD TYPES
        ================================================= */

        function loadTypes() {

            clear(typeOptions);


            const papers =
                getCurrentPapers();


            const typeMap =
                new Map();


            papers.forEach(
                function (paper) {

                    if (!paper) {
                        return;
                    }


                    const type =
                        String(
                            paper.type || ""
                        )
                        .trim()
                        .toLowerCase();


                    if (!type) {
                        return;
                    }


                    typeMap.set(
                        type,
                        (typeMap.get(type) || 0) + 1
                    );

                }
            );


            const types =
                Array.from(
                    typeMap.keys()
                );


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


            if (!types.length) {

                showMessage(
                    typeOptions,
                    "📭",
                    "No Examination Types",
                    "Hakuna examination type iliyopatikana kwa subject hii."
                );

                return;

            }


            types.forEach(
                function (type) {

                    const count =
                        typeMap.get(type);


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

                }
            );

        }


        /* =================================================
           SELECT TYPE
        ================================================= */

        function selectType(type) {

            selectedType = type;

            selectedYear = null;
            selectedLocation = null;


            clear(yearOptions);
            clear(locationOptions);
            clear(paperResults);


            hide(locationSection);
            hide(resultsSection);


            if (resultCount) {
                resultCount.textContent = "0 Papers";
            }


            updateBreadcrumb();

            loadYears();

            show(yearSection);

            scrollToSection(
                yearSection
            );

        }


        /* =================================================
           LOAD YEARS
        ================================================= */

        function loadYears() {

            clear(yearOptions);


            const papers =
                getCurrentPapers()
                    .filter(
                        function (paper) {

                            return (
                                String(
                                    paper.type || ""
                                )
                                .toLowerCase()
                                ===
                                String(
                                    selectedType
                                )
                                .toLowerCase()
                            );

                        }
                    );


            const yearMap =
                new Map();


            papers.forEach(
                function (paper) {

                    const year =
                        Number(paper.year);


                    if (
                        Number.isFinite(year)
                    ) {

                        yearMap.set(
                            year,
                            (yearMap.get(year) || 0) + 1
                        );

                    }

                }
            );


            const years =
                Array.from(
                    yearMap.keys()
                )
                .sort(
                    (a, b) => b - a
                );


            if (!years.length) {

                showMessage(
                    yearOptions,
                    "📭",
                    "No Years Available",
                    "Hakuna mwaka uliopatikana kwa examination type hii."
                );

                return;

            }


            years.forEach(
                function (year) {

                    const count =
                        yearMap.get(year);


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


        /* =================================================
           SELECT YEAR
        ================================================= */

        function selectYear(year) {

            selectedYear = Number(year);

            selectedLocation = null;


            clear(locationOptions);
            clear(paperResults);


            hide(resultsSection);


            if (resultCount) {
                resultCount.textContent = "0 Papers";
            }


            updateBreadcrumb();

            loadLocations();

            show(locationSection);

            scrollToSection(
                locationSection
            );

        }


        /* =================================================
           LOAD LOCATIONS
        ================================================= */

        function loadLocations() {

            clear(locationOptions);


            const papers =
                getCurrentPapers()
                    .filter(
                        function (paper) {

                            return (

                                String(
                                    paper.type || ""
                                )
                                .toLowerCase()
                                ===
                                String(
                                    selectedType
                                )
                                .toLowerCase()

                                &&

                                Number(
                                    paper.year
                                )
                                ===
                                Number(
                                    selectedYear
                                )

                            );

                        }
                    );


            const locationMap =
                new Map();


            papers.forEach(
                function (paper) {

                    const location =
                        getPaperLocation(paper);


                    locationMap.set(
                        location,
                        (locationMap.get(location) || 0) + 1
                    );

                }
            );


            const locations =
                Array.from(
                    locationMap.keys()
                )
                .sort(
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
                    "No Region / School Available",
                    "Hakuna region, school au source iliyopatikana."
                );

                return;

            }


            locations.forEach(
                function (location) {

                    const count =
                        locationMap.get(location);


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


        /* =================================================
           SELECT LOCATION
        ================================================= */

        function selectLocation(location) {

            selectedLocation =
                location;


            updateBreadcrumb();

            loadPapers();

            show(resultsSection);

            scrollToSection(
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
                                getPaperLocation(paper);


                            return (

                                String(
                                    paper.type || ""
                                )
                                .toLowerCase()
                                ===
                                String(
                                    selectedType
                                )
                                .toLowerCase()

                                &&

                                Number(
                                    paper.year
                                )
                                ===
                                Number(
                                    selectedYear
                                )

                                &&

                                location
                                ===
                                selectedLocation

                            );

                        }
                    );


            console.log(
                "GEPAM SELECTED PAPERS:",
                papers
            );


            if (resultCount) {

                resultCount.textContent =
                    `${papers.length} ${
                        papers.length === 1
                        ? "Paper"
                        : "Papers"
                    }`;

            }


            clear(paperResults);


            if (!papers.length) {

                showMessage(
                    paperResults,
                    "📭",
                    "No Papers Found",
                    "Hakuna paper inayolingana na uchaguzi wako."
                );

                return;

            }


            const chain =
                document.createElement("div");

            chain.className =
                "paper-chain";


            /* =================================================
               CHAIN HEADER
            ================================================= */

            const header =
                document.createElement("div");

            header.className =
                "chain-header";


            header.innerHTML = `

                <div>

                    <strong>
                        📚 ${escapeHTML(formatSubject(selectedSubject))}
                    </strong>

                    <span>—</span>

                    <strong>
                        ${escapeHTML(formatType(selectedType))}
                    </strong>

                    <span>—</span>

                    <strong>
                        ${escapeHTML(String(selectedYear))}
                    </strong>

                    <span>—</span>

                    <strong>
                        ${escapeHTML(formatLocation(selectedLocation))}
                    </strong>

                </div>

                <span class="paper-total">
                    ${papers.length}
                    ${papers.length === 1 ? "Paper" : "Papers"}
                </span>

            `;


            chain.appendChild(header);


            /* =================================================
               PAPER ITEMS
            ================================================= */

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


            paperResults.appendChild(
                chain
            );

        }


        /* =================================================
           CREATE PAPER ITEM
        ================================================= */

        function createPaperItem(
            paper,
            number
        ) {

            const item =
                document.createElement("div");


            item.className =
                "paper-chain-item";


            const file =
                getPaperFile(paper);


            const safePath =
                safeFilePath(file);


            const location =
                getPaperLocation(paper);


            const title =
                paper.title
                ||
                `${formatSubject(selectedSubject)} ${formatType(selectedType)} Exam`;


            const itemNumber =
                document.createElement("div");

            itemNumber.className =
                "paper-chain-number";

            itemNumber.textContent =
                number;


            const info =
                document.createElement("div");

            info.className =
                "paper-info";


            info.innerHTML = `

                <h4>
                    ${escapeHTML(title)}
                </h4>

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

            `;


            const action =
                document.createElement("div");

            action.className =
                "paper-action";


            if (safePath) {

                const link =
                    document.createElement("a");

                link.className =
                    "open-pdf-button";

                link.href =
                    safePath;

                link.target =
                    "_blank";

                link.rel =
                    "noopener noreferrer";

                link.textContent =
                    "📄 Fungua PDF";


                action.appendChild(
                    link
                );

            } else {

                const unavailable =
                    document.createElement("span");

                unavailable.className =
                    "open-pdf-button";

                unavailable.style.background =
                    "#8a8a8a";

                unavailable.textContent =
                    "PDF haipo";


                action.appendChild(
                    unavailable
                );

            }


            item.appendChild(
                itemNumber
            );

            item.appendChild(
                info
            );

            item.appendChild(
                action
            );


            return item;

        }


        /* =================================================
           BACK BUTTON
        ================================================= */

        if (backButton) {

            backButton.addEventListener(
                "click",
                function () {


                    /* Location → Year */

                    if (selectedLocation !== null) {

                        selectedLocation =
                            null;

                        hide(resultsSection);

                        clear(locationOptions);

                        updateBreadcrumb();

                        loadLocations();

                        scrollToSection(
                            locationSection
                        );

                        return;

                    }


                    /* Year → Type */

                    if (selectedYear !== null) {

                        selectedYear =
                            null;

                        selectedLocation =
                            null;

                        hide(locationSection);

                        hide(resultsSection);

                        clear(yearOptions);

                        clear(locationOptions);

                        updateBreadcrumb();

                        loadYears();

                        scrollToSection(
                            yearSection
                        );

                        return;

                    }


                    /* Type → Subject */

                    if (selectedType !== null) {

                        selectedType =
                            null;

                        selectedYear =
                            null;

                        selectedLocation =
                            null;

                        hide(yearSection);

                        hide(locationSection);

                        hide(resultsSection);

                        clear(typeOptions);

                        clear(yearOptions);

                        clear(locationOptions);

                        updateBreadcrumb();

                        loadTypes();

                        scrollToSection(
                            typeSection
                        );

                        return;

                    }


                    /* Subject → Form */

                    if (selectedSubject !== null) {

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

                        clear(subjectOptions);

                        clear(typeOptions);

                        clear(yearOptions);

                        clear(locationOptions);

                        updateBreadcrumb();

                        loadSubjects();

                        scrollToSection(
                            subjectSection
                        );

                        return;

                    }


                    /* Form → Home */

                    if (selectedForm !== null) {

                        selectedForm =
                            null;

                        hide(subjectSection);
                        hide(typeSection);
                        hide(yearSection);
                        hide(locationSection);
                        hide(resultsSection);

                        clear(subjectOptions);
                        clear(typeOptions);
                        clear(yearOptions);
                        clear(locationOptions);
                        clear(paperResults);

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


        /* =================================================
           INITIAL STATE
        ================================================= */

        hide(subjectSection);
        hide(typeSection);
        hide(yearSection);
        hide(locationSection);
        hide(resultsSection);


        updateBreadcrumb();

        loadForms();


        console.log(
            "GEPAM PAST PAPERS ENGINE READY."
        );

    }


    /* =====================================================
       DATA ERROR
    ===================================================== */

    function showDataError(
        container,
        reason
    ) {

        container.innerHTML = `

            <div class="message error-message">

                <div class="message-icon">
                    ⚠️
                </div>

                <strong>
                    Past paper data haijapatikana.
                </strong>

                <div style="margin-top:10px;">

                    ${reason}

                </div>

                <div style="margin-top:15px;">

                    Hakikisha:

                    <br>

                    <b>
                        pastpapers.data.js
                    </b>

                    ipo kwenye repository yako na
                    ime-load kabla ya

                    <b>
                        pastpapers.js
                    </b>.

                </div>

                <div style="margin-top:12px;font-size:12px;opacity:.8;">

                    Angalia Browser Console kama bado kuna error.

                </div>

            </div>

        `;

        console.error(
            "GEPAM PAST PAPERS DATA ERROR:",
            reason
        );

    }


    /* =====================================================
       START
    ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            startPastPapers
        );

    } else {

        startPastPapers();

    }

})();
