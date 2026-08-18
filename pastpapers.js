/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE
   VERSION 2
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DATA CHECK
    ===================================================== */

    const database =
        window.pastPapers || null;


    const config =
        window.pastPaperConfig || null;


    console.log(
        "GEPAM Past Papers:",
        {
            config: config,
            database: database
        }
    );


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


    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       FATAL DATA ERROR
    ===================================================== */

    if (
        !database ||
        typeof database !== "object"
    ) {

        showError(
            "Past paper data haijasomeka."
        );

        return;

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
       HELPERS
    ===================================================== */

    function capitalize(value) {

        if (!value) {
            return "";
        }

        return String(value)
            .replace(/_/g, " ")
            .replace(
                /\b\w/g,
                function (char) {
                    return char.toUpperCase();
                }
            );

    }


    function formLabel(form) {

        const match =
            String(form)
                .match(/form(\d+)/i);

        return match
            ? "Form " + match[1]
            : capitalize(form);

    }


    function subjectLabel(subject) {

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


    function typeLabel(type) {

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
            capitalize(type)
        );

    }


    function locationLabel(location) {

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
            capitalize(location)
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

                <small>
                    ${escapeHTML(subtitle)}
                </small>

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
       RESET
    ===================================================== */

    function hide(section) {

        if (section) {
            section.hidden = true;
        }

    }


    function clearAfterForm() {

        selectedSubject = null;
        selectedType = null;
        selectedYear = null;
        selectedLocation = null;

        hide(typeSection);
        hide(yearSection);
        hide(locationSection);
        hide(resultsSection);

        subjectOptions.innerHTML = "";
        typeOptions.innerHTML = "";
        yearOptions.innerHTML = "";
        locationOptions.innerHTML = "";
        paperResults.innerHTML = "";

    }


    function clearAfterSubject() {

        selectedType = null;
        selectedYear = null;
        selectedLocation = null;

        hide(yearSection);
        hide(locationSection);
        hide(resultsSection);

        typeOptions.innerHTML = "";
        yearOptions.innerHTML = "";
        locationOptions.innerHTML = "";
        paperResults.innerHTML = "";

    }


    function clearAfterType() {

        selectedYear = null;
        selectedLocation = null;

        hide(locationSection);
        hide(resultsSection);

        yearOptions.innerHTML = "";
        locationOptions.innerHTML = "";
        paperResults.innerHTML = "";

    }


    function clearAfterYear() {

        selectedLocation = null;

        hide(resultsSection);

        locationOptions.innerHTML = "";
        paperResults.innerHTML = "";

    }


    /* =====================================================
       CURRENT PAPERS
    ===================================================== */

    function currentPapers() {

        if (
            !selectedForm ||
            !selectedSubject
        ) {
            return [];
        }


        const form =
            database[selectedForm];


        if (!form) {
            return [];
        }


        const papers =
            form[selectedSubject];


        return Array.isArray(papers)
            ? papers
            : [];

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

                        return (
                            database[form] &&
                            typeof database[form] === "object"
                        );

                    }
                )
                .sort(
                    function (a, b) {

                        const x =
                            parseInt(
                                a.replace(/\D/g, ""),
                                10
                            ) || 0;

                        const y =
                            parseInt(
                                b.replace(/\D/g, ""),
                                10
                            ) || 0;

                        return x - y;

                    }
                );


        console.log(
            "Available Forms:",
            forms
        );


        if (!forms.length) {

            showError(
                "Hakuna Form zilizopatikana kwenye database."
            );

            return;

        }


        forms.forEach(
            function (form) {

                const total =
                    countPapers(
                        database[form]
                    );


                const card =
                    createOption(
                        "📚",
                        formLabel(form),
                        `${total} paper${total === 1 ? "" : "s"}`,
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


    /* =====================================================
       COUNT
    ===================================================== */

    function countPapers(formData) {

        let total = 0;


        if (!formData) {
            return 0;
        }


        Object.keys(formData)
            .forEach(
                function (key) {

                    if (
                        Array.isArray(
                            formData[key]
                        )
                    ) {

                        total +=
                            formData[key].length;

                    }

                }
            );


        return total;

    }


    /* =====================================================
       SELECT FORM
    ===================================================== */

    function selectForm(form) {

        selectedForm =
            form;

        clearAfterForm();

        updateBreadcrumb();

        loadSubjects();

        subjectSection.hidden =
            false;

        scrollTo(
            subjectSection
        );

    }


    /* =====================================================
       SUBJECTS
    ===================================================== */

    function loadSubjects() {

        subjectOptions.innerHTML = "";


        const formData =
            database[selectedForm];


        const subjects =
            Object.keys(formData || {})
                .filter(
                    function (subject) {

                        return Array.isArray(
                            formData[subject]
                        );

                    }
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

                    Hakuna Physics au Chemistry
                    papers kwenye Form hii.

                </div>

            `;

            return;

        }


        subjects.forEach(
            function (subject) {

                const count =
                    formData[subject].length;


                const icon =
                    subject === "physics"
                        ? "⚛️"
                        : "🧪";


                const card =
                    createOption(
                        icon,
                        subjectLabel(subject),
                        `${count} paper${count === 1 ? "" : "s"}`,
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

        clearAfterSubject();

        updateBreadcrumb();

        loadTypes();

        typeSection.hidden =
            false;

        scrollTo(
            typeSection
        );

    }


    /* =====================================================
       TYPES
    ===================================================== */

    function loadTypes() {

        typeOptions.innerHTML = "";


        const papers =
            currentPapers();


        const types =
            [
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

                const count =
                    papers.filter(
                        paper =>
                            String(
                                paper.type
                            ) === type
                    ).length;


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


                const card =
                    createOption(
                        icons[type] || "📄",
                        typeLabel(type),
                        `${count} paper${count === 1 ? "" : "s"}`,
                        function () {

                            selectType(type);

                        }
                    );


                typeOptions.appendChild(
                    card
                );

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

                    Hakuna examination type
                    iliyopatikana.

                </div>

            `;

        }

    }


    /* =====================================================
       SELECT TYPE
    ===================================================== */

    function selectType(type) {

        selectedType =
            type;

        clearAfterType();

        updateBreadcrumb();

        loadYears();

        yearSection.hidden =
            false;

        scrollTo(
            yearSection
        );

    }


    /* =====================================================
       YEARS
    ===================================================== */

    function loadYears() {

        yearOptions.innerHTML = "";


        const papers =
            currentPapers()
                .filter(
                    paper =>
                        String(
                            paper.type
                        ) === String(
                            selectedType
                        )
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


                yearOptions.appendChild(
                    card
                );

            }
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

                    Hakuna mwaka uliopatikana.

                </div>

            `;

        }

    }


    /* =====================================================
       SELECT YEAR
    ===================================================== */

    function selectYear(year) {

        selectedYear =
            year;

        clearAfterYear();

        updateBreadcrumb();

        loadLocations();

        locationSection.hidden =
            false;

        scrollTo(
            locationSection
        );

    }


    /* =====================================================
       LOCATIONS
    ===================================================== */

    function getPaperLocation(paper) {

        return (
            paper.region ||
            paper.school ||
            paper.zone ||
            "unknown"
        );

    }


    function loadLocations() {

        locationOptions.innerHTML = "";


        const papers =
            currentPapers()
                .filter(
                    function (paper) {

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

                    }
                );


        const locations =
            [
                ...new Set(
                    papers.map(
                        getPaperLocation
                    )
                )
            ]
            .sort(
                function (a, b) {

                    return locationLabel(a)
                        .localeCompare(
                            locationLabel(b)
                        );

                }
            );


        locations.forEach(
            function (location) {

                const count =
                    papers.filter(
                        paper =>
                            getPaperLocation(
                                paper
                            ) === location
                    ).length;


                const card =
                    createOption(
                        "📍",
                        locationLabel(location),
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


        if (!locations.length) {

            locationOptions.innerHTML = `

                <div class="message">

                    <div class="message-icon">
                        📭
                    </div>

                    <strong>
                        No Region / Source
                    </strong>

                    Hakuna source iliyopatikana.

                </div>

            `;

        }

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

        scrollTo(
            resultsSection
        );

    }


    /* =====================================================
       LOAD PAPERS
    ===================================================== */

    function loadPapers() {

        const papers =
            currentPapers()
                .filter(
                    function (paper) {

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

                            getPaperLocation(
                                paper
                            ) === selectedLocation

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

                    Hakuna paper inayolingana
                    na chaguo lako.

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
                    subjectLabel(
                        selectedSubject
                    )
                )}

                —
                ${escapeHTML(
                    typeLabel(
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
                ${papers.length === 1
                    ? "Paper"
                    : "Papers"}
            </span>

        `;


        chain.appendChild(
            header
        );


        papers.forEach(
            function (paper, index) {

                chain.appendChild(
                    createPaper(
                        paper,
                        index + 1
                    )
                );

            }
        );


        paperResults.innerHTML = "";

        paperResults.appendChild(
            chain
        );

    }


    /* =====================================================
       CREATE PAPER
    ===================================================== */

    function createPaper(
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
            getPaperLocation(
                paper
            );


        const file =
            paper.file ||
            paper.pdf ||
            paper.url ||
            "";


        const title =
            paper.title ||
            `${subjectLabel(
                selectedSubject
            )} ${typeLabel(
                selectedType
            )} Exam`;


        const safePath =
            file
                ? safeFilePath(file)
                : "";


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
                            subjectLabel(
                                selectedSubject
                            )
                        )}
                    </span>

                    <span>
                        📝
                        ${escapeHTML(
                            typeLabel(
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
                            locationLabel(
                                location
                            )
                        )}
                    </span>

                </div>

            </div>


            <div class="paper-action">

                ${
                    safePath

                    ?

                    `
                    <a
                        class="open-pdf"
                        href="${safePath}"
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
       FILE PATH
    ===================================================== */

    function safeFilePath(file) {

        let path =
            String(
                file || ""
            ).trim();


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


    /* =====================================================
       BREADCRUMB
    ===================================================== */

    function updateBreadcrumb() {

        const parts = [
            "Past Papers"
        ];


        if (selectedForm) {

            parts.push(
                formLabel(
                    selectedForm
                )
            );

        }


        if (selectedSubject) {

            parts.push(
                subjectLabel(
                    selectedSubject
                )
            );

        }


        if (selectedType) {

            parts.push(
                typeLabel(
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
                locationLabel(
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

            if (selectedLocation) {

                selectedLocation =
                    null;

                hide(
                    resultsSection
                );

                updateBreadcrumb();

                return;

            }


            if (selectedYear) {

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


            if (selectedType) {

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


            if (selectedSubject) {

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


            if (selectedForm) {

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

    function showError(message) {

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

                ${escapeHTML(message)}

                <br><br>

                Hakikisha files zifuatazo zipo
                kwenye folder moja:

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


    /* =====================================================
       START
    ===================================================== */

    loadForms();

})();
