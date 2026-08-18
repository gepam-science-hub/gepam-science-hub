/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DATA
    ===================================================== */

    const database =
        window.pastPapers || null;


    const config =
        window.pastPaperConfig || null;


    /* =====================================================
       DOM
    ===================================================== */

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

        showDataError();

        return;

    }


    /* =====================================================
       HELPERS
    ===================================================== */

    function capitalize(value) {

        if (!value) {
            return "";
        }

        const text =
            String(value);

        return (
            text.charAt(0).toUpperCase() +
            text.slice(1)
        );

    }


    function formatForm(form) {

        const match =
            String(form).match(
                /form\s*(\d+)/i
            );

        if (match) {

            return "Form " + match[1];

        }

        return String(form);

    }


    function formatSubject(subject) {

        const labels = {

            physics: "Physics",

            chemistry: "Chemistry"

        };

        return (
            labels[
                String(subject).toLowerCase()
            ] ||
            capitalize(subject)
        );

    }


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
                String(location)
                    .replace(/_/g, " ")
            )
        );

    }


    function escapeHTML(value) {

        return String(
            value ?? ""
        )
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    }


    /* =====================================================
       CREATE CARD
    ===================================================== */

    function createCard(
        icon,
        title,
        subtitle,
        callback
    ) {

        const button =
            document.createElement(
                "button"
            );


        button.type = "button";

        button.className =
            "selection-card";


        button.innerHTML = `

            <span class="card-icon">
                ${icon}
            </span>

            <span class="card-content">

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

            <span class="card-arrow">
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
       LOAD FORMS
    ===================================================== */

    function loadForms() {

        formOptions.innerHTML = "";


        const forms =
            Object.keys(database)
                .filter(
                    function (form) {

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

                        return (
                            formNumber(a) -
                            formNumber(b)
                        );

                    }
                );


        if (!forms.length) {

            showNoForms();

            return;

        }


        forms.forEach(
            function (form) {

                const card =
                    createCard(
                        "🎓",
                        formatForm(form),
                        "",
                        function () {

                            selectForm(form);

                        }
                    );


                formOptions.appendChild(
                    card
                );

            }
        );

    }


    function formNumber(form) {

        const number =
            parseInt(
                String(form)
                    .replace(/\D/g, ""),
                10
            );

        return (
            Number.isFinite(number)
            ? number
            : 999
        );

    }


    /* =====================================================
       SELECT FORM
    ===================================================== */

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


        hideAfter(
            subjectSection
        );

        hideAfter(
            typeSection
        );

        hideAfter(
            yearSection
        );

        hideAfter(
            locationSection
        );

        hideAfter(
            resultsSection
        );


        updateBreadcrumb();

        loadSubjects();


        subjectSection.hidden =
            false;


        setStep(2);

        scrollTo(
            subjectSection
        );

    }


    /* =====================================================
       LOAD SUBJECTS
    ===================================================== */

    function loadSubjects() {

        subjectOptions.innerHTML =
            "";


        const formData =
            database[
                selectedForm
            ];


        if (
            !formData ||
            typeof formData !== "object"
        ) {

            return;

        }


        let subjects =
            Object.keys(formData)
                .filter(
                    function (subject) {

                        return Array.isArray(
                            formData[subject]
                        );

                    }
                );


        /*
         * Prefer subjects from config
         * when available.
         */

        if (
            config &&
            config[selectedForm] &&
            Array.isArray(
                config[selectedForm].subjects
            )
        ) {

            const configured =
                config[selectedForm]
                    .subjects;


            subjects =
                configured.filter(
                    function (subject) {

                        return Array.isArray(
                            formData[subject]
                        );

                    }
                );

        }


        subjects.forEach(
            function (subject) {

                const icon =
                    subject === "physics"
                    ? "⚛️"
                    : "🧪";


                const card =
                    createCard(
                        icon,
                        formatSubject(subject),
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

    }


    /* =====================================================
       SELECT SUBJECT
    ===================================================== */

    function selectSubject(subject) {

        selectedSubject =
            subject;

        selectedType =
            null;

        selectedYear =
            null;

        selectedLocation =
            null;


        hideAfter(
            typeSection
        );

        hideAfter(
            yearSection
        );

        hideAfter(
            locationSection
        );

        hideAfter(
            resultsSection
        );


        updateBreadcrumb();

        loadTypes();


        typeSection.hidden =
            false;


        setStep(3);

        scrollTo(
            typeSection
        );

    }


    /* =====================================================
       CURRENT PAPERS
    ===================================================== */

    function getPapers() {

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


        const papers =
            form[
                selectedSubject
            ];


        return Array.isArray(papers)
            ? papers
            : [];

    }


    /* =====================================================
       LOAD TYPES
    ===================================================== */

    function loadTypes() {

        typeOptions.innerHTML =
            "";


        const papers =
            getPapers();


        const types =
            [
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

                const icon =
                    getTypeIcon(type);


                const card =
                    createCard(
                        icon,
                        formatType(type),
                        "",
                        function () {

                            selectType(type);

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


        return (
            icons[type] ||
            "📄"
        );

    }


    /* =====================================================
       SELECT TYPE
    ===================================================== */

    function selectType(type) {

        selectedType =
            type;

        selectedYear =
            null;

        selectedLocation =
            null;


        hideAfter(
            yearSection
        );

        hideAfter(
            locationSection
        );

        hideAfter(
            resultsSection
        );


        updateBreadcrumb();

        loadYears();


        yearSection.hidden =
            false;


        setStep(4);

        scrollTo(
            yearSection
        );

    }


    /* =====================================================
       LOAD YEARS
    ===================================================== */

    function loadYears() {

        yearOptions.innerHTML =
            "";


        const papers =
            getPapers()
                .filter(
                    function (paper) {

                        return (
                            String(
                                paper.type
                            ) ===
                            String(
                                selectedType
                            )
                        );

                    }
                );


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
                            Number.isFinite
                        )
                )
            ]
            .sort(
                (a, b) => b - a
            );


        years.forEach(
            function (year) {

                const card =
                    createCard(
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


    /* =====================================================
       SELECT YEAR
    ===================================================== */

    function selectYear(year) {

        selectedYear =
            year;

        selectedLocation =
            null;


        hideAfter(
            locationSection
        );

        hideAfter(
            resultsSection
        );


        updateBreadcrumb();

        loadLocations();


        locationSection.hidden =
            false;


        setStep(5);

        scrollTo(
            locationSection
        );

    }


    /* =====================================================
       LOAD LOCATIONS
    ===================================================== */

    function loadLocations() {

        locationOptions.innerHTML =
            "";


        const papers =
            getPapers()
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


        const locations =
            [];


        papers.forEach(
            function (paper) {

                const location =
                    paper.region ||
                    paper.school ||
                    paper.zone ||
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


        locations.forEach(
            function (location) {

                const card =
                    createCard(
                        "📍",
                        formatLocation(
                            location
                        ),
                        "",
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


        setStep(6);

        scrollTo(
            resultsSection
        );

    }


    /* =====================================================
       LOAD PAPERS
    ===================================================== */

    function loadPapers() {

        paperResults.innerHTML =
            "";


        const papers =
            getPapers()
                .filter(
                    function (paper) {

                        const location =
                            paper.region ||
                            paper.school ||
                            paper.zone ||
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
                ? " Paper"
                : " Papers"
            );


        papers.forEach(
            function (
                paper,
                index
            ) {

                paperResults.appendChild(
                    createPaper(
                        paper,
                        index + 1
                    )
                );

            }
        );

    }


    /* =====================================================
       CREATE PAPER
    ===================================================== */

    function createPaper(
        paper,
        number
    ) {

        const article =
            document.createElement(
                "article"
            );


        article.className =
            "paper-card";


        const file =
            paper.file ||
            paper.pdf ||
            paper.url ||
            "";


        const title =
            paper.title ||
            "Past Paper";


        article.innerHTML = `

            <div class="paper-left">

                <div class="paper-number">
                    ${number}
                </div>

                <div class="paper-document-icon">
                    📄
                </div>

            </div>


            <div class="paper-main">

                <h3>
                    ${escapeHTML(title)}
                </h3>

                <div class="paper-details">

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

                    <span>
                        ${escapeHTML(
                            formatLocation(
                                selectedLocation
                            )
                        )}
                    </span>

                </div>

            </div>


            <div class="paper-open">

                ${
                    file
                    ?
                    `
                    <a
                        href="${safePath(file)}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Fungua PDF
                        →
                    </a>
                    `
                    :
                    `
                    <span>
                        PDF haipo
                    </span>
                    `
                }

            </div>

        `;


        return article;

    }


    /* =====================================================
       SAFE FILE PATH
    ===================================================== */

    function safePath(file) {

        let path =
            String(file || "")
                .trim();


        if (
            /^https?:\/\//i.test(path)
        ) {

            return escapeHTML(path);

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
                function (
                    part,
                    index
                ) {

                    return `
                        <span
                            class="${
                                index ===
                                parts.length - 1
                                ? "current"
                                : ""
                            }"
                        >
                            ${escapeHTML(part)}
                        </span>
                        ${
                            index <
                            parts.length - 1
                            ? "<b>→</b>"
                            : ""
                        }
                    `;

                }
            )
            .join("");

    }


    /* =====================================================
       BACK
    ===================================================== */

    backButton.addEventListener(
        "click",
        function () {

            if (
                selectedLocation
            ) {

                selectedLocation =
                    null;

                resultsSection.hidden =
                    true;

                setStep(5);

                updateBreadcrumb();

                return;

            }


            if (
                selectedYear !== null
            ) {

                selectedYear =
                    null;

                locationSection.hidden =
                    true;

                resultsSection.hidden =
                    true;

                setStep(4);

                updateBreadcrumb();

                return;

            }


            if (
                selectedType
            ) {

                selectedType =
                    null;

                yearSection.hidden =
                    true;

                locationSection.hidden =
                    true;

                resultsSection.hidden =
                    true;

                setStep(3);

                updateBreadcrumb();

                return;

            }


            if (
                selectedSubject
            ) {

                selectedSubject =
                    null;

                typeSection.hidden =
                    true;

                yearSection.hidden =
                    true;

                locationSection.hidden =
                    true;

                resultsSection.hidden =
                    true;

                setStep(2);

                updateBreadcrumb();

                return;

            }


            if (
                selectedForm
            ) {

                selectedForm =
                    null;

                subjectSection.hidden =
                    true;

                typeSection.hidden =
                    true;

                yearSection.hidden =
                    true;

                locationSection.hidden =
                    true;

                resultsSection.hidden =
                    true;

                setStep(1);

                updateBreadcrumb();

                return;

            }


            window.location.href =
                "index.html";

        }
    );


    /* =====================================================
       STEPS
    ===================================================== */

    function setStep(number) {

        const steps =
            document.querySelectorAll(
                ".step"
            );


        steps.forEach(
            function (
                step,
                index
            ) {

                step.classList.toggle(
                    "active",
                    index <
                    number
                );

            }
        );

    }


    /* =====================================================
       HIDE
    ===================================================== */

    function hideAfter(element) {

        if (element) {

            element.hidden =
                true;

        }

    }


    /* =====================================================
       SCROLL
    ===================================================== */

    function scrollTo(element) {

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


    /* =====================================================
       ERROR
    ===================================================== */

    function showDataError() {

        formOptions.innerHTML = `

            <div class="data-error">

                <div class="error-symbol">
                    ⚠️
                </div>

                <h3>
                    Past Paper Data Error
                </h3>

                <p>
                    <b>pastpapers.data.js</b>
                    haijasomeka.
                </p>

                <p>
                    Hakikisha iko kwenye folder
                    moja na:
                </p>

                <div class="file-list">

                    <span>
                        📄 pastpapers.html
                    </span>

                    <span>
                        📄 pastpapers.data.js
                    </span>

                    <span>
                        📄 pastpapers.js
                    </span>

                </div>

            </div>

        `;

    }


    function showNoForms() {

        formOptions.innerHTML = `

            <div class="data-error">

                <div class="error-symbol">
                    📭
                </div>

                <h3>
                    Hakuna Forms
                </h3>

                <p>
                    Hakuna past paper data
                    iliyopatikana.
                </p>

            </div>

        `;

    }


    /* =====================================================
       START
    ===================================================== */

    loadForms();


})();
