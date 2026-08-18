/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE

   FLOW:

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
           DOM
        ================================================= */

        const formSection =
            document.getElementById(
                "formSection"
            );

        const subjectSection =
            document.getElementById(
                "subjectSection"
            );

        const typeSection =
            document.getElementById(
                "typeSection"
            );

        const locationSection =
            document.getElementById(
                "locationSection"
            );

        const yearSection =
            document.getElementById(
                "yearSection"
            );

        const resultsSection =
            document.getElementById(
                "resultsSection"
            );


        const formOptions =
            document.getElementById(
                "formOptions"
            );

        const subjectOptions =
            document.getElementById(
                "subjectOptions"
            );

        const typeOptions =
            document.getElementById(
                "typeOptions"
            );

        const locationOptions =
            document.getElementById(
                "locationOptions"
            );

        const yearOptions =
            document.getElementById(
                "yearOptions"
            );

        const paperResults =
            document.getElementById(
                "paperResults"
            );


        const breadcrumb =
            document.getElementById(
                "breadcrumb"
            );


        const backButton =
            document.getElementById(
                "backButton"
            );


        /* =================================================
           CHECK DATA
        ================================================= */

        if (
            !database ||
            typeof database !== "object"
        ) {

            showDataError(
                formOptions
            );

            return;

        }


        /* =================================================
           STATE
        ================================================= */

        let selectedForm =
            null;

        let selectedSubject =
            null;

        let selectedType =
            null;

        let selectedRegion =
            null;

        let selectedYear =
            null;


        /* =================================================
           HELPERS
        ================================================= */

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


        function escapeHTML(value) {

            return String(value ?? "")
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
                        /form\s*(\d+)/i
                    );


            if (match) {

                return (
                    "Form " +
                    match[1]
                );

            }


            return capitalize(
                String(form)
            );

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
                        .replace(
                            /_/g,
                            " "
                        )
                )
            );

        }


        function formatRegion(region) {

            if (!region) {
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


            if (
                labels[
                    String(region)
                        .toLowerCase()
                ]
            ) {

                return labels[
                    String(region)
                        .toLowerCase()
                ];

            }


            return capitalize(
                String(region)
                    .replace(
                        /_/g,
                        " "
                    )
            );

        }


        function getPaperRegion(paper) {

            return (
                paper.region ||
                paper.school ||
                paper.zone ||
                "unknown"
            );

        }


        function getPapersForSelection() {

            if (
                !selectedForm ||
                !selectedSubject
            ) {

                return [];

            }


            const form =
                database[
                    selectedForm
                ];


            if (!form) {
                return [];
            }


            const subject =
                form[
                    selectedSubject
                ];


            if (
                !Array.isArray(subject)
            ) {

                return [];

            }


            return subject;

        }


        function safePath(file) {

            let path =
                String(
                    file || ""
                ).trim();


            if (!path) {
                return "";
            }


            /*
             * Absolute URLs
             */

            if (
                /^https?:\/\//i
                    .test(path)
            ) {

                return path;

            }


            /*
             * Remove leading slash
             */

            path =
                path.replace(
                    /^\/+/,
                    ""
                );


            /*
             * Encode each filename/folder
             * without breaking /
             */

            return path
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
           OPTION CARD
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
           STEP CONTROL
        ================================================= */

        function activateStep(stepNumber) {

            for (
                let i = 1;
                i <= 6;
                i++
            ) {

                const step =
                    document.getElementById(
                        "step" + i
                    );


                if (!step) {
                    continue;
                }


                step.classList.remove(
                    "active"
                );

                step.classList.remove(
                    "completed"
                );


                if (
                    i < stepNumber
                ) {

                    step.classList.add(
                        "completed"
                    );

                }


                if (
                    i === stepNumber
                ) {

                    step.classList.add(
                        "active"
                    );

                }

            }

        }


        /* =================================================
           SHOW SECTION
        ================================================= */

        function showSection(section) {

            if (!section) {
                return;
            }


            section.hidden =
                false;


            setTimeout(
                function () {

                    section.scrollIntoView({
                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                },
                70
            );

        }


        /* =================================================
           HIDE SECTION
        ================================================= */

        function hideSection(section) {

            if (section) {

                section.hidden =
                    true;

            }

        }


        /* =================================================
           RESET AFTER FORM
        ================================================= */

        function resetAfterForm() {

            selectedSubject =
                null;

            selectedType =
                null;

            selectedRegion =
                null;

            selectedYear =
                null;


            subjectOptions.innerHTML =
                "";

            typeOptions.innerHTML =
                "";

            locationOptions.innerHTML =
                "";

            yearOptions.innerHTML =
                "";

            paperResults.innerHTML =
                "";


            hideSection(
                typeSection
            );

            hideSection(
                locationSection
            );

            hideSection(
                yearSection
            );

            hideSection(
                resultsSection
            );

        }


        /* =================================================
           RESET AFTER SUBJECT
        ================================================= */

        function resetAfterSubject() {

            selectedType =
                null;

            selectedRegion =
                null;

            selectedYear =
                null;


            typeOptions.innerHTML =
                "";

            locationOptions.innerHTML =
                "";

            yearOptions.innerHTML =
                "";

            paperResults.innerHTML =
                "";


            hideSection(
                locationSection
            );

            hideSection(
                yearSection
            );

            hideSection(
                resultsSection
            );

        }


        /* =================================================
           RESET AFTER TYPE
        ================================================= */

        function resetAfterType() {

            selectedRegion =
                null;

            selectedYear =
                null;


            locationOptions.innerHTML =
                "";

            yearOptions.innerHTML =
                "";

            paperResults.innerHTML =
                "";


            hideSection(
                locationSection
            );

            hideSection(
                yearSection
            );

            hideSection(
                resultsSection
            );

        }


        /* =================================================
           RESET AFTER REGION
        ================================================= */

        function resetAfterRegion() {

            selectedYear =
                null;


            yearOptions.innerHTML =
                "";

            paperResults.innerHTML =
                "";


            hideSection(
                yearSection
            );

            hideSection(
                resultsSection
            );

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


            if (selectedRegion) {

                parts.push(
                    formatRegion(
                        selectedRegion
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


            breadcrumb.innerHTML =
                parts
                    .map(
                        function (
                            part,
                            index
                        ) {

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
                    function (form) {

                        const data =
                            database[
                                form
                            ];


                        return (
                            data &&
                            typeof data ===
                                "object"
                        );

                    }
                )
                .sort(
                    function (a, b) {

                        return (
                            getFormNumber(a) -
                            getFormNumber(b)
                        );

                    }
                );


            console.log(
                "Forms found:",
                forms
            );


            if (
                !forms.length
            ) {

                showMessage(
                    formOptions,
                    "⚠️",
                    "No Forms Available",
                    "Hakuna Form iliyopatikana kwenye pastPapers."
                );

                return;

            }


            forms.forEach(
                function (form) {

                    const card =
                        createOption(
                            "🎓",
                            formatForm(form),
                            "",
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


        function getFormNumber(form) {

            const match =
                String(form)
                    .match(
                        /\d+/
                    );


            return match
                ? Number(
                    match[0]
                )
                : 999;

        }


        /* =================================================
           SELECT FORM
        ================================================= */

        function selectForm(form) {

            selectedForm =
                form;


            resetAfterForm();


            updateBreadcrumb();


            loadSubjects();


            activateStep(2);


            showSection(
                subjectSection
            );

        }


        /* =================================================
           LOAD SUBJECTS
        ================================================= */

        function loadSubjects() {

            subjectOptions.innerHTML =
                "";


            const form =
                database[
                    selectedForm
                ];


            if (
                !form ||
                typeof form !==
                    "object"
            ) {

                showMessage(
                    subjectOptions,
                    "📭",
                    "No Subjects",
                    "Hakuna subjects zilizopatikana."
                );

                return;

            }


            let subjects =
                Object.keys(form)
                .filter(
                    function (subject) {

                        return Array.isArray(
                            form[
                                subject
                            ]
                        );

                    }
                );


            /*
             * Respect config if available
             */

            if (
                config &&
                config[
                    selectedForm
                ] &&
                Array.isArray(
                    config[
                        selectedForm
                    ].subjects
                )
            ) {

                const configured =
                    config[
                        selectedForm
                    ].subjects;


                const valid =
                    configured.filter(
                        function (subject) {

                            return subjects.includes(
                                subject
                            );

                        }
                    );


                if (
                    valid.length
                ) {

                    subjects =
                        valid;

                }

            }


            subjects.forEach(
                function (subject) {

                    const icon =
                        subject ===
                        "physics"
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
                            "",
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


            if (
                !subjects.length
            ) {

                showMessage(
                    subjectOptions,
                    "📭",
                    "No Subjects",
                    "Hakuna Physics au Chemistry kwenye Form hii."
                );

            }

        }


        /* =================================================
           SELECT SUBJECT
        ================================================= */

        function selectSubject(
            subject
        ) {

            selectedSubject =
                subject;


            resetAfterSubject();


            updateBreadcrumb();


            loadTypes();


            activateStep(3);


            showSection(
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
                getPapersForSelection();


            const types =
                [
                    ...new Set(
                        papers
                            .map(
                                function (
                                    paper
                                ) {

                                    return String(
                                        paper.type ||
                                        ""
                                    ).trim();

                                }
                            )
                            .filter(Boolean)
                    )
                ];


            /*
             * Config order
             */

            const configTypes =
                config &&
                config[
                    selectedForm
                ] &&
                Array.isArray(
                    config[
                        selectedForm
                    ].types
                )
                ?
                config[
                    selectedForm
                ].types
                :
                [];


            types.sort(
                function (a, b) {

                    const ia =
                        configTypes.indexOf(
                            a
                        );

                    const ib =
                        configTypes.indexOf(
                            b
                        );


                    if (
                        ia !== -1 &&
                        ib !== -1
                    ) {

                        return ia - ib;

                    }


                    if (
                        ia !== -1
                    ) {

                        return -1;

                    }


                    if (
                        ib !== -1
                    ) {

                        return 1;

                    }


                    return a.localeCompare(
                        b
                    );

                }
            );


            if (
                !types.length
            ) {

                showMessage(
                    typeOptions,
                    "📭",
                    "No Examination Types",
                    "Hakuna examination type kwenye subject hii."
                );

                return;

            }


            types.forEach(
                function (type) {

                    const card =
                        createOption(
                            getTypeIcon(
                                type
                            ),
                            formatType(
                                type
                            ),
                            "",
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
                icons[type] ||
                "📄"
            );

        }


        /* =================================================
           SELECT TYPE
        ================================================= */

        function selectType(type) {

            selectedType =
                type;


            resetAfterType();


            updateBreadcrumb();


            loadRegions();


            activateStep(4);


            showSection(
                locationSection
            );

        }


        /* =================================================
           LOAD REGIONS
        ================================================= */

        function loadRegions() {

            locationOptions.innerHTML =
                "";


            const papers =
                getPapersForSelection()
                .filter(
                    function (paper) {

                        return String(
                            paper.type
                        ) === String(
                            selectedType
                        );

                    }
                );


            const regions =
                [
                    ...new Set(
                        papers.map(
                            function (paper) {

                                return getPaperRegion(
                                    paper
                                );

                            }
                        )
                    )
                ];


            regions.sort(
                function (a, b) {

                    return formatRegion(
                        a
                    ).localeCompare(
                        formatRegion(
                            b
                        )
                    );

                }
            );


            if (
                !regions.length
            ) {

                showMessage(
                    locationOptions,
                    "📭",
                    "No Regions Available",
                    "Hakuna region yenye papers kwa aina hii."
                );

                return;

            }


            regions.forEach(
                function (region) {

                    const card =
                        createOption(
                            "📍",
                            formatRegion(
                                region
                            ),
                            "",
                            function () {

                                selectRegion(
                                    region
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
           SELECT REGION
        ================================================= */

        function selectRegion(region) {

            selectedRegion =
                region;


            resetAfterRegion();


            updateBreadcrumb();


            loadYears();


            activateStep(5);


            showSection(
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
                getPapersForSelection()
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

                            getPaperRegion(
                                paper
                            ) ===
                            selectedRegion

                        );

                    }
                );


            const years =
                [
                    ...new Set(
                        papers
                            .map(
                                function (
                                    paper
                                ) {

                                    return Number(
                                        paper.year
                                    );

                                }
                            )
                            .filter(
                                Number.isFinite
                            )
                    )
                ]
                .sort(
                    function (a, b) {

                        return b - a;

                    }
                );


            if (
                !years.length
            ) {

                showMessage(
                    yearOptions,
                    "📭",
                    "No Years Available",
                    "Hakuna mwaka wenye paper kwa region hii."
                );

                return;

            }


            years.forEach(
                function (year) {

                    const card =
                        createOption(
                            "📅",
                            String(year),
                            "",
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


            updateBreadcrumb();


            loadPapers();


            activateStep(6);


            showSection(
                resultsSection
            );

        }


        /* =================================================
           LOAD PAPERS
        ================================================= */

        function loadPapers() {

            paperResults.innerHTML =
                "";


            const papers =
                getPapersForSelection()
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

                            getPaperRegion(
                                paper
                            ) ===
                            selectedRegion

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


            /*
             * Sort:
             * Theory first,
             * then Practical.
             */

            papers.sort(
                function (a, b) {

                    return String(
                        a.title || ""
                    ).localeCompare(
                        String(
                            b.title || ""
                        )
                    );

                }
            );


            if (
                !papers.length
            ) {

                showMessage(
                    paperResults,
                    "📭",
                    "No Papers Found",
                    "Hakuna paper inayolingana na uchaguzi wako."
                );

                return;

            }


            papers.forEach(
                function (
                    paper,
                    index
                ) {

                    const card =
                        createPaperCard(
                            paper,
                            index + 1
                        );


                    paperResults.appendChild(
                        card
                    );

                }
            );

        }


        /* =================================================
           CREATE PAPER CARD
        ================================================= */

        function createPaperCard(
            paper,
            number
        ) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "paper-card";


            const file =
                paper.file ||
                paper.pdf ||
                paper.url ||
                "";


            const title =
                paper.title ||
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
                    " Exam"
                );


            const filePath =
                safePath(
                    file
                );


            card.innerHTML = `

                <div class="paper-icon">
                    📄
                </div>

                <div class="paper-info">

                    <h3>
                        ${escapeHTML(title)}
                    </h3>

                    <div class="paper-meta">

                        <span>
                            ${escapeHTML(
                                formatSubject(
                                    selectedSubject
                                )
                            )}
                        </span>

                        <span>
                            ${escapeHTML(
                                formatType(
                                    selectedType
                                )
                            )}
                        </span>

                        <span>
                            ${escapeHTML(
                                String(
                                    selectedYear
                                )
                            )}
                        </span>

                    </div>

                </div>

                ${
                    filePath
                    ?
                    `
                    <a
                        class="open-pdf"
                        href="${escapeHTML(
                            filePath
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
                            background:#9aa5af;
                            cursor:not-allowed;
                        "
                    >
                        PDF haipo
                    </span>
                    `
                }

            `;


            return card;

        }


        /* =================================================
           BACK BUTTON
        ================================================= */

        backButton.addEventListener(
            "click",
            function () {


                /*
                 * Papers → Year
                 */

                if (
                    selectedYear !== null
                ) {

                    selectedYear =
                        null;

                    hideSection(
                        resultsSection
                    );

                    activateStep(5);

                    updateBreadcrumb();

                    showSection(
                        yearSection
                    );

                    return;

                }


                /*
                 * Year → Region
                 */

                if (
                    selectedRegion !== null
                ) {

                    selectedRegion =
                        null;

                    hideSection(
                        yearSection
                    );

                    activateStep(4);

                    updateBreadcrumb();

                    showSection(
                        locationSection
                    );

                    return;

                }


                /*
                 * Region → Type
                 */

                if (
                    selectedType !== null
                ) {

                    selectedType =
                        null;

                    hideSection(
                        locationSection
                    );

                    activateStep(3);

                    updateBreadcrumb();

                    showSection(
                        typeSection
                    );

                    return;

                }


                /*
                 * Type → Subject
                 */

                if (
                    selectedSubject !== null
                ) {

                    selectedSubject =
                        null;

                    hideSection(
                        typeSection
                    );

                    activateStep(2);

                    updateBreadcrumb();

                    showSection(
                        subjectSection
                    );

                    return;

                }


                /*
                 * Subject → Form
                 */

                if (
                    selectedForm !== null
                ) {

                    selectedForm =
                        null;

                    hideSection(
                        subjectSection
                    );

                    activateStep(1);

                    updateBreadcrumb();

                    showSection(
                        formSection
                    );

                    return;

                }


                /*
                 * Home
                 */

                window.location.href =
                    "index.html";

            }
        );


        /* =================================================
           ERROR MESSAGE
        ================================================= */

        function showDataError(container) {

            if (!container) {
                return;
            }


            container.innerHTML = `

                <div class="message error-message">

                    <div class="message-icon">
                        ⚠️
                    </div>

                    <strong>
                        Past Paper Data Error
                    </strong>

                    <p>
                        pastpapers.data.js
                        haijasomeka au
                        <b>window.pastPapers</b>
                        haipo.
                    </p>

                    <br>

                    <p>
                        Hakikisha files hizi zipo
                        kwenye folder moja:
                    </p>

                    <p>
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
                    </p>

                </div>

            `;

        }


        /* =================================================
           NORMAL MESSAGE
        ================================================= */

        function showMessage(
            container,
            icon,
            title,
            text
        ) {

            container.innerHTML = `

                <div class="message">

                    <div class="message-icon">
                        ${icon}
                    </div>

                    <strong>
                        ${escapeHTML(title)}
                    </strong>

                    <p>
                        ${escapeHTML(text)}
                    </p>

                </div>

            `;

        }


        /* =================================================
           START
        ================================================= */

        loadForms();

        activateStep(1);

    }

})();
