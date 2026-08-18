/* ============================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE
   Form 1 - Form 6
   ============================================================ */

(function () {

    "use strict";


    /* ========================================================
       1. GLOBAL STATE
    ======================================================== */

    const state = {

        form: null,

        subject: null,

        type: null,

        location: null,

        year: null,

        series: null,

        search: ""

    };


    /* ========================================================
       2. DOM ELEMENTS
    ======================================================== */

    const formOptions =
        document.getElementById("formOptions");

    const subjectOptions =
        document.getElementById("subjectOptions");

    const typeOptions =
        document.getElementById("typeOptions");

    const locationOptions =
        document.getElementById("locationOptions");

    const yearOptions =
        document.getElementById("yearOptions");

    const seriesOptions =
        document.getElementById("seriesOptions");

    const subjectSection =
        document.getElementById("subjectSection");

    const typeSection =
        document.getElementById("typeSection");

    const locationSection =
        document.getElementById("locationSection");

    const yearSection =
        document.getElementById("yearSection");

    const seriesSection =
        document.getElementById("seriesSection");

    const searchSection =
        document.getElementById("searchSection");

    const searchInput =
        document.getElementById("searchInput");

    const paperResults =
        document.getElementById("paperResults");

    const resultCount =
        document.getElementById("resultCount");

    const backButton =
        document.getElementById("backButton");

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    /* ========================================================
       3. FORM LABELS
    ======================================================== */

    const FORM_LABELS = {

        form1: "Form 1",

        form2: "Form 2",

        form3: "Form 3",

        form4: "Form 4",

        form5: "Form 5",

        form6: "Form 6"

    };


    /* ========================================================
       4. SUBJECT LABELS
    ======================================================== */

    const SUBJECT_LABELS = {

        physics: "Physics",

        chemistry: "Chemistry"

    };


    /* ========================================================
       5. TYPE LABELS
    ======================================================== */

    const TYPE_LABELS = {

        midterm: "Midterm",

        terminal: "Terminal",

        annual: "Annual",

        joint: "Joint",

        mock: "Mock",

        pre_necta: "Pre-NECTA",

        necta: "NECTA",

        acsee: "ACSEE",

        o_level: "O-Level",

        other: "Other"

    };


    /* ========================================================
       6. REGION LABELS
    ======================================================== */

    const REGION_LABELS = {

        dar_es_salaam: "Dar es Salaam",

        dodoma: "Dodoma",

        arusha: "Arusha",

        mbeya: "Mbeya",

        kagera: "Kagera",

        shinyanga: "Shinyanga",

        mwanza: "Mwanza",

        morogoro: "Morogoro",

        tanga: "Tanga",

        singida: "Singida",

        tabora: "Tabora",

        kigoma: "Kigoma",

        rukwa: "Rukwa",

        iringa: "Iringa",

        mtwara: "Mtwara",

        lindi: "Lindi",

        pwani: "Pwani",

        njombe: "Njombe",

        katavi: "Katavi",

        simiyu: "Simiyu",

        geita: "Geita",

        mara: "Mara",

        manyara: "Manyara",

        songwe: "Songwe",

        zanzibar: "Zanzibar",

        necta: "NECTA"

    };


    /* ========================================================
       7. SAFE DATA ACCESS
    ======================================================== */

    function getDatabase() {

        /*
         * Your existing data.js should expose:
         *
         * const pastPaperConfig = {...};
         *
         * or
         *
         * var pastPaperConfig = {...};
         *
         */

        if (
            typeof pastPaperConfig !== "undefined"
            &&
            pastPaperConfig
        ) {

            return pastPaperConfig;

        }


        console.error(
            "GEPAM: pastPaperConfig was not found."
        );

        return {};

    }


    /* ========================================================
       8. NORMALIZE VALUE
    ======================================================== */

    function normalize(value) {

        return String(value ?? "")
            .trim()
            .toLowerCase();

    }


    /* ========================================================
       9. GET FORM DATA
    ======================================================== */

    function getFormData(form) {

        const db = getDatabase();

        return db[form] || {};

    }


    /* ========================================================
       10. GET PAPERS
    ======================================================== */

    function getPapers(form, subject) {

        const formData =
            getFormData(form);

        const papers =
            formData[subject];

        return Array.isArray(papers)
            ? papers
            : [];

    }


    /* ========================================================
       11. GET ALL PAPERS FROM SELECTED FORM
    ======================================================== */

    function getAllFormPapers(form) {

        const formData =
            getFormData(form);

        let all = [];

        Object.keys(formData).forEach(subject => {

            if (
                Array.isArray(formData[subject])
            ) {

                all = all.concat(
                    formData[subject]
                );

            }

        });

        return all;

    }


    /* ========================================================
       12. UNIQUE VALUES
    ======================================================== */

    function uniqueValues(values) {

        return [
            ...new Set(
                values
                    .filter(
                        value =>
                            value !== undefined
                            &&
                            value !== null
                            &&
                            String(value).trim() !== ""
                    )
                    .map(value => String(value))
            )
        ];

    }


    /* ========================================================
       13. SORT YEARS
    ======================================================== */

    function sortYears(values) {

        return uniqueValues(values)
            .sort(
                (a, b) =>
                    Number(b) - Number(a)
            );

    }


    /* ========================================================
       14. CLEAR DOWNSTREAM SELECTIONS
    ======================================================== */

    function clearAfter(level) {

        if (level === "form") {

            state.subject = null;
            state.type = null;
            state.location = null;
            state.year = null;
            state.series = null;

        }

        if (level === "subject") {

            state.type = null;
            state.location = null;
            state.year = null;
            state.series = null;

        }

        if (level === "type") {

            state.location = null;
            state.year = null;
            state.series = null;

        }

        if (level === "location") {

            state.year = null;
            state.series = null;

        }

        if (level === "year") {

            state.series = null;

        }

    }


    /* ========================================================
       15. SHOW / HIDE SECTION
    ======================================================== */

    function show(element) {

        if (element) {

            element.hidden = false;

        }

    }


    function hide(element) {

        if (element) {

            element.hidden = true;

        }

    }


    /* ========================================================
       16. CREATE OPTION BUTTON
    ======================================================== */

    function createOptionButton(
        label,
        value,
        selected,
        onClick
    ) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "option-btn";

        if (selected) {

            button.classList.add(
                "selected"
            );

        }

        button.textContent = label;

        button.addEventListener(
            "click",
            () => onClick(value)
        );

        return button;

    }


    /* ========================================================
       17. RENDER FORM OPTIONS
    ======================================================== */

    function renderForms() {

        formOptions.innerHTML = "";

        Object.keys(FORM_LABELS)
            .forEach(form => {

                const button =
                    createOptionButton(
                        FORM_LABELS[form],
                        form,
                        state.form === form,
                        selectForm
                    );

                formOptions.appendChild(
                    button
                );

            });

    }


    /* ========================================================
       18. SELECT FORM
    ======================================================== */

    function selectForm(form) {

        state.form = form;

        clearAfter("form");

        renderForms();

        renderSubjects();

        hide(typeSection);
        hide(locationSection);
        hide(yearSection);
        hide(seriesSection);

        clearResults();

    }


    /* ========================================================
       19. RENDER SUBJECTS
    ======================================================== */

    function renderSubjects() {

        subjectOptions.innerHTML = "";

        const formData =
            getFormData(state.form);

        const subjects =
            Object.keys(formData)
                .filter(
                    subject =>
                        Array.isArray(
                            formData[subject]
                        )
                );

        if (!subjects.length) {

            hide(subjectSection);

            return;

        }

        show(subjectSection);

        subjects.forEach(subject => {

            const label =
                SUBJECT_LABELS[subject]
                ||
                prettify(subject);

            const button =
                createOptionButton(
                    label,
                    subject,
                    state.subject === subject,
                    selectSubject
                );

            subjectOptions.appendChild(
                button
            );

        });

    }


    /* ========================================================
       20. SELECT SUBJECT
    ======================================================== */

    function selectSubject(subject) {

        state.subject = subject;

        clearAfter("subject");

        renderSubjects();

        renderTypes();

        hide(locationSection);
        hide(yearSection);
        hide(seriesSection);

        clearResults();

    }


    /* ========================================================
       21. GET CURRENT PAPERS
    ======================================================== */

    function getCurrentPapers() {

        if (
            !state.form
            ||
            !state.subject
        ) {

            return [];

        }

        return getPapers(
            state.form,
            state.subject
        );

    }


    /* ========================================================
       22. RENDER TYPES
    ======================================================== */

    function renderTypes() {

        typeOptions.innerHTML = "";

        const papers =
            getCurrentPapers();

        const types =
            uniqueValues(
                papers.map(
                    paper => paper.type
                )
            );

        if (!types.length) {

            hide(typeSection);

            return;

        }

        show(typeSection);

        types.forEach(type => {

            const label =
                TYPE_LABELS[
                    normalize(type)
                ]
                ||
                prettify(type);

            const button =
                createOptionButton(
                    label,
                    type,
                    state.type === type,
                    selectType
                );

            typeOptions.appendChild(
                button
            );

        });

    }


    /* ========================================================
       23. SELECT TYPE
    ======================================================== */

    function selectType(type) {

        state.type = type;

        clearAfter("type");

        renderTypes();

        renderLocations();

        hide(yearSection);
        hide(seriesSection);

        clearResults();

    }


    /* ========================================================
       24. GET TYPE PAPERS
    ======================================================== */

    function getTypePapers() {

        return getCurrentPapers()
            .filter(
                paper =>
                    normalize(paper.type)
                    ===
                    normalize(state.type)
            );

    }


    /* ========================================================
       25. LOCATION KEY
    ======================================================== */

    function getLocationKey(paper) {

        /*
         * Priority:
         *
         * school
         * zone
         * region
         */

        if (
            paper.school
            &&
            String(paper.school).trim()
        ) {

            return "school:" +
                String(paper.school);

        }

        if (
            paper.zone
            &&
            String(paper.zone).trim()
        ) {

            return "zone:" +
                String(paper.zone);

        }

        if (
            paper.region
            &&
            String(paper.region).trim()
        ) {

            return "region:" +
                String(paper.region);

        }

        return "all";

    }


    /* ========================================================
       26. LOCATION LABEL
    ======================================================== */

    function getLocationLabel(paper) {

        if (
            paper.school
            &&
            String(paper.school).trim()
        ) {

            return "School: " +
                paper.school;

        }

        if (
            paper.zone
            &&
            String(paper.zone).trim()
        ) {

            return "Zone: " +
                paper.zone;

        }

        if (
            paper.region
            &&
            String(paper.region).trim()
        ) {

            return (
                REGION_LABELS[
                    normalize(paper.region)
                ]
                ||
                prettify(paper.region)
            );

        }

        return "All Locations";

    }


    /* ========================================================
       27. RENDER LOCATIONS
    ======================================================== */

    function renderLocations() {

        locationOptions.innerHTML = "";

        const papers =
            getTypePapers();

        if (!papers.length) {

            hide(locationSection);

            return;

        }

        /*
         * Build unique locations.
         */

        const locationMap =
            new Map();

        papers.forEach(paper => {

            const key =
                getLocationKey(paper);

            if (
                !locationMap.has(key)
            ) {

                locationMap.set(
                    key,
                    getLocationLabel(paper)
                );

            }

        });


        show(locationSection);


        /*
         * Add All option only when
         * there is more than one location.
         */

        if (
            locationMap.size > 1
        ) {

            const allButton =
                createOptionButton(
                    "All Locations",
                    "all",
                    state.location === "all",
                    selectLocation
                );

            locationOptions.appendChild(
                allButton
            );

        }


        [...locationMap.entries()]
            .sort(
                (a, b) =>
                    a[1].localeCompare(
                        b[1]
                    )
            )
            .forEach(
                ([key, label]) => {

                    const button =
                        createOptionButton(
                            label,
                            key,
                            state.location === key,
                            selectLocation
                        );

                    locationOptions.appendChild(
                        button
                    );

                }
            );

    }


    /* ========================================================
       28. SELECT LOCATION
    ======================================================== */

    function selectLocation(location) {

        state.location = location;

        clearAfter("location");

        renderLocations();

        renderYears();

        hide(seriesSection);

        clearResults();

    }


    /* ========================================================
       29. FILTER LOCATION
    ======================================================== */

    function filterByLocation(
        papers
    ) {

        if (
            !state.location
            ||
            state.location === "all"
        ) {

            return papers;

        }

        return papers.filter(
            paper =>
                getLocationKey(paper)
                ===
                state.location
        );

    }


    /* ========================================================
       30. RENDER YEARS
    ======================================================== */

    function renderYears() {

        yearOptions.innerHTML = "";

        let papers =
            filterByLocation(
                getTypePapers()
            );

        const years =
            sortYears(
                papers.map(
                    paper => paper.year
                )
            );

        if (!years.length) {

            hide(yearSection);

            renderSeries();

            return;

        }

        show(yearSection);

        years.forEach(year => {

            const button =
                createOptionButton(
                    year,
                    year,
                    String(state.year)
                    ===
                    String(year),
                    selectYear
                );

            yearOptions.appendChild(
                button
            );

        });

    }


    /* ========================================================
       31. SELECT YEAR
    ======================================================== */

    function selectYear(year) {

        state.year = year;

        clearAfter("year");

        renderYears();

        renderSeries();

        clearResults();

    }


    /* ========================================================
       32. FILTER YEAR
    ======================================================== */

    function filterByYear(
        papers
    ) {

        if (!state.year) {

            return papers;

        }

        return papers.filter(
            paper =>
                String(paper.year)
                ===
                String(state.year)
        );

    }


    /* ========================================================
       33. RENDER SERIES
    ======================================================== */

    function renderSeries() {

        seriesOptions.innerHTML = "";

        let papers =
            filterByYear(
                filterByLocation(
                    getTypePapers()
                )
            );


        const series =
            uniqueValues(
                papers.map(
                    paper => paper.series
                )
            );


        /*
         * If no series exists,
         * hide the section.
         */

        if (!series.length) {

            hide(seriesSection);

            renderResults();

            return;

        }


        show(seriesSection);


        /*
         * All Series option.
         */

        if (series.length > 1) {

            const allButton =
                createOptionButton(
                    "All Series",
                    "all",
                    state.series === "all",
                    selectSeries
                );

            seriesOptions.appendChild(
                allButton
            );

        }


        series
            .sort(
                (a, b) =>
                    a.localeCompare(b)
            )
            .forEach(
                value => {

                    const button =
                        createOptionButton(
                            value,
                            value,
                            state.series === value,
                            selectSeries
                        );

                    seriesOptions.appendChild(
                        button
                    );

                }
            );

    }


    /* ========================================================
       34. SELECT SERIES
    ======================================================== */

    function selectSeries(series) {

        state.series = series;

        renderSeries();

        renderResults();

    }


    /* ========================================================
       35. FILTER SERIES
    ======================================================== */

    function filterBySeries(
        papers
    ) {

        if (
            !state.series
            ||
            state.series === "all"
        ) {

            return papers;

        }

        return papers.filter(
            paper =>
                String(
                    paper.series ?? ""
                )
                ===
                String(
                    state.series
                )
        );

    }


    /* ========================================================
       36. SEARCH
    ======================================================== */

    function filterBySearch(
        papers
    ) {

        const query =
            normalize(
                state.search
            );

        if (!query) {

            return papers;

        }

        return papers.filter(
            paper => {

                const text =
                    [

                        paper.title,

                        paper.type,

                        paper.region,

                        paper.school,

                        paper.zone,

                        paper.series,

                        paper.year

                    ]
                    .filter(Boolean)
                    .join(" ");

                return normalize(text)
                    .includes(query);

            }
        );

    }


    /* ========================================================
       37. GET FINAL PAPERS
    ======================================================== */

    function getFinalPapers() {

        let papers =
            getTypePapers();


        papers =
            filterByLocation(
                papers
            );


        papers =
            filterByYear(
                papers
            );


        papers =
            filterBySeries(
                papers
            );


        papers =
            filterBySearch(
                papers
            );


        return papers;

    }


    /* ========================================================
       38. RENDER RESULTS
    ======================================================== */

    function renderResults() {

        const papers =
            getFinalPapers();


        /*
         * Search should appear
         * once user reaches type.
         */

        if (
            state.type
        ) {

            show(searchSection);

        } else {

            hide(searchSection);

        }


        paperResults.innerHTML = "";


        resultCount.textContent =
            `${papers.length} ${
                papers.length === 1
                    ? "paper"
                    : "papers"
            }`;


        if (!papers.length) {

            paperResults.innerHTML = `

                <div class="empty-state">

                    <strong>
                        No papers found
                    </strong>

                    Try another
                    year, region,
                    school, zone or series.

                </div>

            `;

            return;

        }


        /*
         * Sort newest first.
         */

        papers.sort(
            (a, b) => {

                const yearDiff =
                    Number(b.year || 0)
                    -
                    Number(a.year || 0);

                if (yearDiff !== 0) {

                    return yearDiff;

                }

                return String(
                    a.title || ""
                ).localeCompare(
                    String(
                        b.title || ""
                    )
                );

            }
        );


        papers.forEach(
            paper => {

                paperResults.appendChild(
                    createPaperCard(
                        paper
                    )
                );

            }
        );

    }


    /* ========================================================
       39. CREATE PAPER CARD
    ======================================================== */

    function createPaperCard(
        paper
    ) {

        const card =
            document.createElement("article");

        card.className =
            "paper-card";


        const title =
            paper.title
            ||
            "Examination Paper";


        const typeLabel =
            TYPE_LABELS[
                normalize(
                    paper.type
                )
            ]
            ||
            prettify(
                paper.type
            );


        const regionLabel =
            paper.region
                ? (
                    REGION_LABELS[
                        normalize(
                            paper.region
                        )
                    ]
                    ||
                    prettify(
                        paper.region
                    )
                )
                : "";


        const location =
            paper.school
                ? `School: ${escapeHTML(
                    paper.school
                )}`
                : paper.zone
                    ? `Zone: ${escapeHTML(
                        paper.zone
                    )}`
                    : regionLabel
                        ? escapeHTML(
                            regionLabel
                        )
                        : "";


        const series =
            paper.series
                ? escapeHTML(
                    paper.series
                )
                : "";


        card.innerHTML = `

            <div class="paper-icon">
                📄
            </div>

            <h3>
                ${escapeHTML(title)}
            </h3>

            <div class="paper-meta">

                ${
                    typeLabel
                    ? `
                        <span class="meta">
                            ${escapeHTML(
                                typeLabel
                            )}
                        </span>
                    `
                    : ""
                }

                ${
                    paper.year
                    ? `
                        <span class="meta">
                            ${escapeHTML(
                                paper.year
                            )}
                        </span>
                    `
                    : ""
                }

                ${
                    location
                    ? `
                        <span class="meta">
                            ${location}
                        </span>
                    `
                    : ""
                }

                ${
                    series
                    ? `
                        <span class="meta">
                            ${series}
                        </span>
                    `
                    : ""
                }

            </div>

            <div class="paper-actions">

                <a
                    class="open-btn"
                    href="${safeURL(
                        paper.file
                    )}"
                    target="_blank"
                    rel="noopener"
                >
                    Open Paper
                </a>

            </div>

        `;


        return card;

    }


    /* ========================================================
       40. CLEAR RESULTS
    ======================================================== */

    function clearResults() {

        renderResults();

    }


    /* ========================================================
       41. PRETTIFY
    ======================================================== */

    function prettify(value) {

        return String(value ?? "")
            .replace(/_/g, " ")
            .replace(/\b\w/g, char =>
                char.toUpperCase()
            );

    }


    /* ========================================================
       42. ESCAPE HTML
    ======================================================== */

    function escapeHTML(value) {

        return String(value ?? "")
            .replace(
                /[&<>"']/g,
                char => ({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#039;"

                }[char])
            );

    }


    /* ========================================================
       43. SAFE URL
    ======================================================== */

    function safeURL(value) {

        if (!value) {

            return "#";

        }

        /*
         * These are your own GitHub Pages
         * relative PDF paths.
         *
         * We preserve them exactly.
         */

        return String(value);

    }


    /* ========================================================
       44. BACK BUTTON
    ======================================================== */

    backButton.addEventListener(
        "click",
        function () {

            /*
             * history.back() behaves like
             * the browser's own Back button.
             */

            if (
                window.history.length > 1
            ) {

                window.history.back();

            } else {

                window.location.href =
                    "index.html";

            }

        }
    );


    /* ========================================================
       45. MOBILE MENU
    ======================================================== */

    menuToggle.addEventListener(
        "click",
        function () {

            const opened =
                mainNav.classList.toggle(
                    "open"
                );


            menuToggle.setAttribute(
                "aria-expanded",
                String(opened)
            );

        }
    );


    /* ========================================================
       46. CLOSE MOBILE MENU
       WHEN LINK IS CLICKED
    ======================================================== */

    mainNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mainNav.classList.remove(
                        "open"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });


    /* ========================================================
       47. SEARCH INPUT
    ======================================================== */

    searchInput.addEventListener(
        "input",
        function () {

            state.search =
                this.value;

            renderResults();

        }
    );


    /* ========================================================
       48. BROWSER BACK / FORWARD
    ======================================================== */

    window.addEventListener(
        "popstate",
        function () {

            renderAll();

        }
    );


    /* ========================================================
       49. RENDER ALL
    ======================================================== */

    function renderAll() {

        renderForms();

        if (state.form) {

            renderSubjects();

        }

        if (
            state.form
            &&
            state.subject
        ) {

            renderTypes();

        }

        if (
            state.form
            &&
            state.subject
            &&
            state.type
        ) {

            renderLocations();

        }

        if (
            state.form
            &&
            state.subject
            &&
            state.type
            &&
            state.location
        ) {

            renderYears();

        }

        if (
            state.form
            &&
            state.subject
            &&
            state.type
        ) {

            renderResults();

        }

    }


    /* ========================================================
       50. INITIALIZE
    ======================================================== */

    function init() {

        document.getElementById(
            "currentYear"
        ).textContent =
            new Date().getFullYear();


        hide(subjectSection);
        hide(typeSection);
        hide(locationSection);
        hide(yearSection);
        hide(seriesSection);
        hide(searchSection);


        renderForms();

        renderResults();

    }


    init();


})();
