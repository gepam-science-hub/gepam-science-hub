/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE
   STABLE VERSION
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       WAIT FOR PAGE
    ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        init
    );


    function init() {

        /* =================================================
           GET DATA
        ================================================= */

        const config =
            window.pastPaperConfig || null;

        const database =
            window.pastPapers || null;


        console.log(
            "GEPAM Past Papers:",
            {
                config: config,
                database: database
            }
        );


        /* =================================================
           GET DOM
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


        if (currentYear) {

            currentYear.textContent =
                new Date().getFullYear();

        }


        /* =================================================
           CHECK DATA
        ================================================= */

        if (
            !database ||
            typeof database !== "object"
        ) {

            showError(
                "Past paper data haijapatikana.",
                "pastpapers.data.js haijasomeka au data yake haipo katika muundo unaotambulika."
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
           DATA NORMALIZER
        ================================================= */

        function getDatabase() {

            let data =
                database;


            /*
             * Support:
             *
             * {
             *   form1: {...},
             *   form2: {...}
             * }
             */

            if (
                data &&
                typeof data === "object"
            ) {

                return data;

            }


            return {};

        }


        /* =================================================
           FORM KEYS
        ================================================= */

        function getForms() {

            const data =
                getDatabase();


            return Object.keys(data)
                .filter(
                    function (key) {

                        const value =
                            data[key];


                        if (
                            !value ||
                            typeof value !== "object"
                        ) {

                            return false;

                        }


                        /*
                         * Form must contain
                         * physics or chemistry
                         */

                        return (
                            Array.isArray(
                                value.physics
                            )
                            ||
                            Array.isArray(
                                value.chemistry
                            )
                        );

                    }
                )
                .sort(
                    sortForms
                );

        }


        /* =================================================
           SORT FORMS
        ================================================= */

        function sortForms(a, b) {

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


        /* =================================================
           FORMAT FORM
        ================================================= */

        function formatForm(form) {

            const match =
                String(form)
                    .match(/form\s*(\d+)/i);


            if (match) {

                return "Form " + match[1];

            }


            return String(form);

        }


        /* =================================================
           FORMAT SUBJECT
        ================================================= */

        function formatSubject(subject) {

            const value =
                String(subject)
                    .toLowerCase();


            if (
                value === "physics"
            ) {

                return "Physics";

            }


            if (
                value === "chemistry"
            ) {

                return "Chemistry";

            }


            return capitalize(value);

        }


        /* =================================================
           FORMAT TYPE
        ================================================= */

        function formatType(type) {

            const value =
                String(type)
                    .toLowerCase()
                    .replace(/-/g, "_");


            const labels = {

                midterm:
                    "Midterm",

                terminal:
                    "Terminal",

                annual:
                    "Annual",

                joint:
                    "Joint",

                mock:
                    "Mock",

                necta:
                    "NECTA",

                pre_necta:
                    "Pre-NECTA",

                ftna:
                    "FTNA",

                acsee:
                    "ACSEE"

            };


            return (
                labels[value]
                ||
                capitalize(
                    value.replace(
                        /_/g,
                        " "
                    )
                )
            );

        }


        /* =================================================
           FORMAT LOCATION
        ================================================= */

        function formatLocation(location) {

            if (
                !location
            ) {

                return "Unknown";

            }


            const value =
                String(location)
                    .toLowerCase();


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
                labels[value]
                ||
                capitalize(
                    value.replace(
                        /_/g,
                        " "
                    )
                )
            );

        }


        /* =================================================
           CAPITALIZE
        ================================================= */

        function capitalize(value) {

            const text =
                String(value || "");


            if (!text) {

                return "";

            }


            return (
                text.charAt(0)
                    .toUpperCase()
                +
                text.slice(1)
            );

        }


        /* =================================================
           GET SUBJECT PAPERS
        ================================================= */

        function getSubjectPapers() {

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


            const papers =
                formData[
                    selectedSubject
                ];


            /*
             * Standard structure
             */

            if (
                Array.isArray(papers)
            ) {

                return papers;

            }


            return [];

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
           LOAD FORMS
        ================================================= */

        function loadForms() {

            formOptions.innerHTML = "";


            const forms =
                getForms();


            if (
                !forms.length
            ) {

                showError(
                    "Hakuna Forms zilizopatikana.",
                    "Data ipo lakini muundo wa Form 1–6 haujatambulika."
                );

                return;

            }


            forms.forEach(
                function (form) {

                    const total =
                        countFormPapers(
                            form
                        );


                    const button =
                        createOption(
                            "📚",
                            formatForm(form),
                            total +
                            (
                                total === 1
                                ? " paper"
                                : " papers"
                            ),
                            function () {

                                selectForm(
                                    form
                                );

                            }
                        );


                    formOptions.appendChild(
                        button
                    );

                }
            );

        }


        /* =================================================
           COUNT FORM
        ================================================= */

        function countFormPapers(form) {

            const formData =
                database[form];


            if (
                !formData
            ) {

                return 0;

            }


            let total = 0;


            [
                "physics",
                "chemistry"
            ]
            .forEach(
                function (subject) {

                    if (
                        Array.isArray(
                            formData[subject]
                        )
                    ) {

                        total +=
                            formData[subject]
                                .length;

                    }

                }
            );


            return total;

        }


        /* =================================================
           SELECT FORM
        ================================================= */

        function selectForm(form) {

            selectedForm =
                form;


            selectedSubject =
                null;

            selectedType =
                null;

            selectedYear =
                null;

            selectedLocation =
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


            resultCount.textContent =
                "0 Papers";


            loadSubjects();


            show(
                subjectSection
            );


            updateProgress(
                2
            );


            updateBreadcrumb();


            scrollTo(
                subjectSection
            );

        }


        /* =================================================
           LOAD SUBJECTS
        ================================================= */

        function loadSubjects() {

            subjectOptions.innerHTML =
                "";


            const formData =
                database[
                    selectedForm
                ];


            const subjects = [
                "physics",
                "chemistry"
            ]
            .filter(
                function (subject) {

                    return Array.isArray(
                        formData &&
                        formData[subject]
                    );

                }
            );


            if (
                !subjects.length
            ) {

                subjectOptions.innerHTML = `
                    <div class="empty-state">
                        <div class="icon">📭</div>

                        <strong>
                            No Subjects Available
                        </strong>

                        Hakuna Physics au Chemistry
                        papers kwa form hii.
                    </div>
                `;

                return;

            }


            subjects.forEach(
                function (subject) {

                    const count =
                        formData[
                            subject
                        ].length;


                    const icon =
                        subject === "physics"
                        ? "⚛️"
                        : "🧪";


                    const button =
                        createOption(
                            icon,
                            formatSubject(
                                subject
                            ),
                            count +
                            (
                                count === 1
                                ? " paper"
                                : " papers"
                            ),
                            function () {

                                selectSubject(
                                    subject
                                );

                            }
                        );


                    subjectOptions.appendChild(
                        button
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


            selectedType =
                null;

            selectedYear =
                null;

            selectedLocation =
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


            typeOptions.innerHTML =
                "";

            yearOptions.innerHTML =
                "";

            locationOptions.innerHTML =
                "";

            paperResults.innerHTML =
                "";


            resultCount.textContent =
                "0 Papers";


            loadTypes();


            show(
                typeSection
            );


            updateProgress(
                3
            );


            updateBreadcrumb();


            scrollTo(
                typeSection
            );

        }


        /* =================================================
           LOAD TYPES
        ================================================= */

        function loadTypes() {

            typeOptions.innerHTML =
                "";


            const papers =
                getSubjectPapers();


            const typeMap =
                {};


            papers.forEach(
                function (paper) {

                    const type =
                        getPaperType(
                            paper
                        );


                    if (
                        type
                    ) {

                        if (
                            !typeMap[type]
                        ) {

                            typeMap[type] =
                                0;

                        }


                        typeMap[type]++;

                    }

                }
            );


            const types =
                Object.keys(
                    typeMap
                );


            types.sort(
                sortTypes
            );


            if (
                !types.length
            ) {

                typeOptions.innerHTML = `
                    <div class="empty-state">
                        <div class="icon">📭</div>

                        <strong>
                            No Examination Types
                        </strong>

                        Hakuna examination type
                        iliyopatikana kwenye data.
                    </div>
                `;

                return;

            }


            types.forEach(
                function (type) {

                    const button =
                        createOption(
                            getTypeIcon(type),
                            formatType(type),
                            typeMap[type] +
                            (
                                typeMap[type] === 1
                                ? " paper"
                                : " papers"
                            ),
                            function () {

                                selectType(
                                    type
                                );

                            }
                        );


                    typeOptions.appendChild(
                        button
                    );

                }
            );

        }


        /* =================================================
           GET PAPER TYPE
        ================================================= */

        function getPaperType(paper) {

            if (
                !paper ||
                typeof paper !== "object"
            ) {

                return "";

            }


            return String(
                paper.type
                ||
                paper.examType
                ||
                paper.exam_type
                ||
                paper.category
                ||
                ""
            )
            .trim()
            .toLowerCase()
            .replace(/-/g, "_");

        }


        /* =================================================
           SORT TYPES
        ================================================= */

        function sortTypes(a, b) {

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


            if (
                ia === -1
            ) {

                return 1;

            }


            if (
                ib === -1
            ) {

                return -1;

            }


            return ia - ib;

        }


        /* =================================================
           TYPE ICON
        ================================================= */

        function getTypeIcon(type) {

            const icons = {

                annual: "📘",

                midterm: "📝",

                terminal: "📗",

                joint: "🤝",

                mock: "📑",

                necta: "🏛️",

                pre_necta: "📋",

                ftna: "🏛️",

                acsee: "🎓"

            };


            return (
                icons[type]
                ||
                "📄"
            );

        }


        /* =================================================
           SELECT TYPE
        ================================================= */

        function selectType(type) {

            selectedType =
                type;


            selectedYear =
                null;

            selectedLocation =
                null;


            hide(
                locationSection
            );

            hide(
                resultsSection
            );


            yearOptions.innerHTML =
                "";

            locationOptions.innerHTML =
                "";

            paperResults.innerHTML =
                "";


            resultCount.textContent =
                "0 Papers";


            loadYears();


            show(
                yearSection
            );


            updateProgress(
                4
            );


            updateBreadcrumb();


            scrollTo(
                yearSection
            );

        }


        /* =================================================
           LOAD YEARS
        ================================================= */

        function loadYears() {

            yearOptions.innerHTML =
                "";


            const papers =
                getSubjectPapers()
                    .filter(
                        function (paper) {

                            return (
                                getPaperType(
                                    paper
                                )
                                ===
                                selectedType
                            );

                        }
                    );


            const yearMap =
                {};


            papers.forEach(
                function (paper) {

                    const year =
                        getPaperYear(
                            paper
                        );


                    if (
                        year
                    ) {

                        yearMap[year] =
                            (
                                yearMap[year]
                                ||
                                0
                            ) + 1;

                    }

                }
            );


            const years =
                Object.keys(
                    yearMap
                )
                .map(
                    Number
                )
                .sort(
                    function (a, b) {
                        return b - a;
                    }
                );


            if (
                !years.length
            ) {

                yearOptions.innerHTML = `
                    <div class="empty-state">
                        <div class="icon">📭</div>

                        <strong>
                            No Years Available
                        </strong>

                        Hakuna mwaka uliopatikana.
                    </div>
                `;

                return;

            }


            years.forEach(
                function (year) {

                    const button =
                        createOption(
                            "📅",
                            String(year),
                            yearMap[year] +
                            (
                                yearMap[year] === 1
                                ? " paper"
                                : " papers"
                            ),
                            function () {

                                selectYear(
                                    year
                                );

                            }
                        );


                    yearOptions.appendChild(
                        button
                    );

                }
            );

        }


        /* =================================================
           GET YEAR
        ================================================= */

        function getPaperYear(paper) {

            if (
                !paper
            ) {

                return null;

            }


            const year =
                Number(
                    paper.year
                    ||
                    paper.examYear
                    ||
                    paper.exam_year
                    ||
                    0
                );


            return Number.isFinite(
                year
            )
            &&
            year > 0
                ? year
                : null;

        }


        /* =================================================
           SELECT YEAR
        ================================================= */

        function selectYear(year) {

            selectedYear =
                Number(year);


            selectedLocation =
                null;


            hide(
                resultsSection
            );


            locationOptions.innerHTML =
                "";

            paperResults.innerHTML =
                "";


            resultCount.textContent =
                "0 Papers";


            loadLocations();


            show(
                locationSection
            );


            updateProgress(
                5
            );


            updateBreadcrumb();


            scrollTo(
                locationSection
            );

        }


        /* =================================================
           GET PAPER LOCATION
        ================================================= */

        function getPaperLocation(paper) {

            if (
                !paper
            ) {

                return "unknown";

            }


            return String(
                paper.region
                ||
                paper.school
                ||
                paper.zone
                ||
                paper.location
                ||
                "unknown"
            )
            .trim();

        }


        /* =================================================
           LOAD LOCATIONS
        ================================================= */

        function loadLocations() {

            locationOptions.innerHTML =
                "";


            const papers =
                getSubjectPapers()
                    .filter(
                        function (paper) {

                            return (

                                getPaperType(
                                    paper
                                )
                                ===
                                selectedType

                                &&

                                getPaperYear(
                                    paper
                                )
                                ===
                                Number(
                                    selectedYear
                                )

                            );

                        }
                    );


            const locationMap =
                {};


            papers.forEach(
                function (paper) {

                    const location =
                        getPaperLocation(
                            paper
                        );


                    if (
                        !locationMap[
                            location
                        ]
                    ) {

                        locationMap[
                            location
                        ] = 0;

                    }


                    locationMap[
                        location
                    ]++;

                }
            );


            const locations =
                Object.keys(
                    locationMap
                );


            locations.sort(
                function (a, b) {

                    return formatLocation(a)
                        .localeCompare(
                            formatLocation(b)
                        );

                }
            );


            /*
             * If papers have no
             * region/school/zone,
             * still show one option.
             */

            if (
                !locations.length
            ) {

                locationOptions.innerHTML = `
                    <div class="empty-state">
                        <div class="icon">📭</div>

                        <strong>
                            No Region / School Available
                        </strong>

                        Hakuna source ya paper
                        iliyopatikana.
                    </div>
                `;

                return;

            }


            locations.forEach(
                function (location) {

                    const button =
                        createOption(
                            "📍",
                            formatLocation(
                                location
                            ),
                            locationMap[
                                location
                            ] +
                            (
                                locationMap[
                                    location
                                ] === 1
                                ? " paper"
                                : " papers"
                            ),
                            function () {

                                selectLocation(
                                    location
                                );

                            }
                        );


                    locationOptions.appendChild(
                        button
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


            loadPapers();


            show(
                resultsSection
            );


            updateProgress(
                6
            );


            updateBreadcrumb();


            scrollTo(
                resultsSection
            );

        }


        /* =================================================
           LOAD PAPERS
        ================================================= */

        function loadPapers() {

            const papers =
                getSubjectPapers()
                    .filter(
                        function (paper) {

                            return (

                                getPaperType(
                                    paper
                                )
                                ===
                                selectedType

                                &&

                                getPaperYear(
                                    paper
                                )
                                ===
                                Number(
                                    selectedYear
                                )

                                &&

                                getPaperLocation(
                                    paper
                                )
                                ===
                                selectedLocation

                            );

                        }
                    );


            resultCount.textContent =
                papers.length +
                (
                    papers.length === 1
                    ? " Paper"
                    : " Papers"
                );


            if (
                !papers.length
            ) {

                paperResults.innerHTML = `
                    <div class="empty-state">

                        <div class="icon">
                            📭
                        </div>

                        <strong>
                            No Papers Found
                        </strong>

                        Hakuna paper inayolingana
                        na uchaguzi wako.

                    </div>
                `;

                return;

            }


            const list =
                document.createElement(
                    "div"
                );


            list.className =
                "paper-list";


            const header =
                document.createElement(
                    "div"
                );


            header.className =
                "paper-list-header";


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

                    —
                    ${escapeHTML(
                        formatLocation(
                            selectedLocation
                        )
                    )}
                </strong>

                <span>
                    ${papers.length}
                    ${
                        papers.length === 1
                        ? "Paper"
                        : "Papers"
                    }
                </span>

            `;


            list.appendChild(
                header
            );


            papers.forEach(
                function (
                    paper,
                    index
                ) {

                    list.appendChild(
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
                list
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
                document.createElement(
                    "div"
                );


            item.className =
                "paper-item";


            const title =
                paper.title
                ||
                paper.name
                ||
                `${formatSubject(
                    selectedSubject
                )} ${formatType(
                    selectedType
                )} Examination`;


            const file =
                paper.file
                ||
                paper.pdf
                ||
                paper.url
                ||
                paper.link
                ||
                "";


            const location =
                getPaperLocation(
                    paper
                );


            item.innerHTML = `

                <div class="paper-number">
                    ${number}
                </div>


                <div class="paper-info">

                    <h3>
                        ${escapeHTML(
                            title
                        )}
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
                                    selectedYear
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
                            href="${safePath(
                                file
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
                            style="background:#888;"
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
           SAFE FILE PATH
        ================================================= */

        function safePath(file) {

            const path =
                String(
                    file || ""
                )
                .trim();


            if (
                /^https?:\/\//i.test(
                    path
                )
            ) {

                return escapeHTML(
                    path
                );

            }


            const clean =
                path.replace(
                    /^\/+/,
                    ""
                );


            return clean
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


        /* =================================================
           BREADCRUMB
        ================================================= */

        function updateBreadcrumb() {

            const parts = [
                "Past Papers"
            ];


            if (
                selectedForm
            ) {

                parts.push(
                    formatForm(
                        selectedForm
                    )
                );

            }


            if (
                selectedSubject
            ) {

                parts.push(
                    formatSubject(
                        selectedSubject
                    )
                );

            }


            if (
                selectedType
            ) {

                parts.push(
                    formatType(
                        selectedType
                    )
                );

            }


            if (
                selectedYear
            ) {

                parts.push(
                    String(
                        selectedYear
                    )
                );

            }


            if (
                selectedLocation
            ) {

                parts.push(
                    formatLocation(
                        selectedLocation
                    )
                );

            }


            breadcrumb.innerHTML =
                parts
                    .map(
                        function (
                            part,
                            index
                        ) {

                            const arrow =
                                index <
                                parts.length - 1
                                ? `<span>→</span>`
                                : "";


                            return `
                                <span
                                    class="${
                                        index ===
                                        parts.length - 1
                                        ? "current"
                                        : ""
                                    }"
                                >
                                    ${escapeHTML(
                                        part
                                    )}
                                </span>

                                ${arrow}
                            `;

                        }
                    )
                    .join("");

        }


        /* =================================================
           BACK BUTTON
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


                    loadLocations();


                    updateProgress(
                        5
                    );


                    updateBreadcrumb();


                    scrollTo(
                        locationSection
                    );


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


                    updateProgress(
                        4
                    );


                    updateBreadcrumb();


                    scrollTo(
                        yearSection
                    );


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


                    updateProgress(
                        3
                    );


                    updateBreadcrumb();


                    scrollTo(
                        typeSection
                    );


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


                    updateProgress(
                        2
                    );


                    updateBreadcrumb();


                    scrollTo(
                        subjectSection
                    );


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


                    updateProgress(
                        1
                    );


                    updateBreadcrumb();


                    scrollTo(
                        document.getElementById(
                            "formSection"
                        )
                    );


                    return;

                }


                window.location.href =
                    "index.html";

            }
        );


        /* =================================================
           UI HELPERS
        ================================================= */

        function show(element) {

            if (
                element
            ) {

                element.hidden =
                    false;

            }

        }


        function hide(element) {

            if (
                element
            ) {

                element.hidden =
                    true;

            }

        }


        function scrollTo(element) {

            if (
                !element
            ) {

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
           PROGRESS
        ================================================= */

        function updateProgress(
            activeStep
        ) {

            document
                .querySelectorAll(
                    ".progress-step"
                )
                .forEach(
                    function (
                        step
                    ) {

                        const number =
                            Number(
                                step.dataset.step
                            );


                        step.classList.remove(
                            "active",
                            "done"
                        );


                        if (
                            number ===
                            activeStep
                        ) {

                            step.classList.add(
                                "active"
                            );

                        }
                        else if (
                            number <
                            activeStep
                        ) {

                            step.classList.add(
                                "done"
                            );

                        }

                    }
                );

        }


        /* =================================================
           ERROR
        ================================================= */

        function showError(
            title,
            message
        ) {

            formOptions.innerHTML = `

                <div class="empty-state">

                    <div class="icon">
                        ⚠️
                    </div>

                    <strong>
                        ${escapeHTML(
                            title
                        )}
                    </strong>

                    ${escapeHTML(
                        message
                    )}

                    <br><br>

                    <small>
                        Fungua browser console
                        (F12) kuangalia taarifa
                        ya data.
                    </small>

                </div>

            `;

        }


        /* =================================================
           ESCAPE
        ================================================= */

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


        /* =================================================
           START
        ================================================= */

        loadForms();


    }

})();
