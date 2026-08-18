/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE - STABLE VERSION
   FLOW:
   FORM
      ↓
   SUBJECT
      ↓
   EXAM TYPE
      ↓
   YEAR
      ↓
   REGION / SCHOOL / ZONE
      ↓
   PAPERS
      ↓
   OPEN PDF
========================================================= */

(function () {

    "use strict";

    /* =====================================================
       DOM
    ===================================================== */

    const formOptions = document.getElementById("formOptions");
    const subjectSection = document.getElementById("subjectSection");
    const subjectOptions = document.getElementById("subjectOptions");

    const typeSection = document.getElementById("typeSection");
    const typeOptions = document.getElementById("typeOptions");

    const yearSection = document.getElementById("yearSection");
    const yearOptions = document.getElementById("yearOptions");

    const locationSection = document.getElementById("locationSection");
    const locationOptions = document.getElementById("locationOptions");

    const seriesSection = document.getElementById("seriesSection");
    const seriesOptions = document.getElementById("seriesOptions");

    const searchSection = document.getElementById("searchSection");
    const searchInput = document.getElementById("searchInput");

    const resultsSection = document.getElementById("resultsSection");
    const paperResults = document.getElementById("paperResults");
    const resultCount = document.getElementById("resultCount");

    const backButton = document.getElementById("backButton");
    const currentYear = document.getElementById("currentYear");

    /* =====================================================
       DATA
    ===================================================== */

    const config =
        window.pastPaperConfig || {};

    const database =
        window.pastPapers || {};

    /* =====================================================
       STATE
    ===================================================== */

    let selectedForm = null;
    let selectedSubject = null;
    let selectedType = null;
    let selectedYear = null;
    let selectedLocation = null;
    let selectedSeries = null;

    let currentDisplayedPapers = [];

    /* =====================================================
       YEAR
    ===================================================== */

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }

    /* =====================================================
       DATA CHECK
    ===================================================== */

    if (
        !database ||
        typeof database !== "object" ||
        Object.keys(database).length === 0
    ) {

        showDataError();

        return;
    }

    /* =====================================================
       HELPERS
    ===================================================== */

    function escapeHTML(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }

    function capitalize(value) {

        if (!value) return "";

        return String(value)
            .replace(/_/g, " ")
            .replace(/\b\w/g, c => c.toUpperCase());

    }

    function formatForm(form) {

        const match =
            String(form).match(/form\s*(\d+)/i);

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

        const labels = {

            midterm: "Midterm",
            terminal: "Terminal",
            annual: "Annual",
            joint: "Joint",
            mock: "Mock",
            pre_necta: "Pre-NECTA",
            pre_necta: "Pre-NECTA",
            necta: "NECTA",
            ftna: "FTNA",
            acsee: "ACSEE",
            national: "National",
            school: "School Examination"

        };

        const key =
            String(type || "")
                .toLowerCase();

        return labels[key] || capitalize(key);
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

        const key =
            String(location || "")
                .toLowerCase();

        return labels[key] || capitalize(key);
    }

    function formatSeries(series) {

        if (!series) return "";

        return String(series)
            .replace(/_/g, " ")
            .replace(/\b\w/g, c => c.toUpperCase());
    }

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

        return icons[String(type).toLowerCase()]
            || "📄";
    }

    function getSubjectIcon(subject) {

        return String(subject).toLowerCase() === "physics"
            ? "⚛️"
            : "🧪";

    }

    /* =====================================================
       GET FORM DATA
    ===================================================== */

    function getFormData() {

        return database[selectedForm] || {};

    }

    /* =====================================================
       GET CURRENT PAPERS
    ===================================================== */

    function getCurrentPapers() {

        const formData =
            getFormData();

        const papers =
            formData[selectedSubject];

        return Array.isArray(papers)
            ? papers
            : [];

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
            "selection-card option-card";

        button.innerHTML = `

            <span class="card-number">
                ${escapeHTML(icon)}
            </span>

            <span class="card-info">

                <strong class="card-title">
                    ${escapeHTML(title)}
                </strong>

                ${
                    subtitle
                    ?
                    `<small>${escapeHTML(subtitle)}</small>`
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
       SHOW / HIDE
    ===================================================== */

    function show(section) {

        if (section) {
            section.hidden = false;
        }

    }

    function hide(section) {

        if (section) {
            section.hidden = true;
        }

    }

    /* =====================================================
       CLEAR
    ===================================================== */

    function clear(element) {

        if (element) {
            element.innerHTML = "";
        }

    }

    /* =====================================================
       RESET AFTER FORM
    ===================================================== */

    function resetAfterForm() {

        selectedSubject = null;
        selectedType = null;
        selectedYear = null;
        selectedLocation = null;
        selectedSeries = null;

        clear(subjectOptions);
        clear(typeOptions);
        clear(yearOptions);
        clear(locationOptions);
        clear(seriesOptions);
        clear(paperResults);

        hide(typeSection);
        hide(yearSection);
        hide(locationSection);
        hide(seriesSection);
        hide(searchSection);

        if (resultsSection) {
            resultsSection.hidden = false;
        }

        if (resultCount) {
            resultCount.textContent = "0 Papers";
        }

    }

    /* =====================================================
       RESET AFTER SUBJECT
    ===================================================== */

    function resetAfterSubject() {

        selectedType = null;
        selectedYear = null;
        selectedLocation = null;
        selectedSeries = null;

        clear(typeOptions);
        clear(yearOptions);
        clear(locationOptions);
        clear(seriesOptions);
        clear(paperResults);

        hide(yearSection);
        hide(locationSection);
        hide(seriesSection);
        hide(searchSection);

        if (resultsSection) {
            resultsSection.hidden = false;
        }

        if (resultCount) {
            resultCount.textContent = "0 Papers";
        }

    }

    /* =====================================================
       RESET AFTER TYPE
    ===================================================== */

    function resetAfterType() {

        selectedYear = null;
        selectedLocation = null;
        selectedSeries = null;

        clear(yearOptions);
        clear(locationOptions);
        clear(seriesOptions);
        clear(paperResults);

        hide(locationSection);
        hide(seriesSection);
        hide(searchSection);

        if (resultsSection) {
            resultsSection.hidden = false;
        }

        if (resultCount) {
            resultCount.textContent = "0 Papers";
        }

    }

    /* =====================================================
       RESET AFTER YEAR
    ===================================================== */

    function resetAfterYear() {

        selectedLocation = null;
        selectedSeries = null;

        clear(locationOptions);
        clear(seriesOptions);
        clear(paperResults);

        hide(seriesSection);
        hide(searchSection);

        if (resultsSection) {
            resultsSection.hidden = false;
        }

        if (resultCount) {
            resultCount.textContent = "0 Papers";
        }

    }

    /* =====================================================
       LOAD FORMS
    ===================================================== */

    function loadForms() {

        clear(formOptions);

        const forms =
            Object.keys(database)
                .filter(key => {

                    const data =
                        database[key];

                    return (
                        data &&
                        typeof data === "object"
                    );

                })
                .sort(sortForms);

        if (!forms.length) {

            showDataError();

            return;
        }

        forms.forEach(form => {

            let total = 0;

            const formData =
                database[form];

            Object.keys(formData || {})
                .forEach(subject => {

                    if (
                        Array.isArray(
                            formData[subject]
                        )
                    ) {
                        total +=
                            formData[subject].length;
                    }

                });

            const card =
                createOption(
                    "📚",
                    formatForm(form),
                    `${total} paper${total === 1 ? "" : "s"}`,
                    () => {

                        selectedForm = form;

                        resetAfterForm();

                        loadSubjects();

                        show(subjectSection);

                        scrollTo(subjectSection);

                    }
                );

            formOptions.appendChild(card);

        });

    }

    /* =====================================================
       SORT FORMS
    ===================================================== */

    function sortForms(a, b) {

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
    }

    /* =====================================================
       LOAD SUBJECTS
    ===================================================== */

    function loadSubjects() {

        clear(subjectOptions);

        const formData =
            getFormData();

        const subjects =
            Object.keys(formData)
                .filter(subject =>
                    Array.isArray(
                        formData[subject]
                    )
                );

        if (!subjects.length) {

            subjectOptions.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📭</div>
                    <h3>No Subjects Available</h3>
                    <p>
                        No Physics or Chemistry papers
                        are available for this form.
                    </p>
                </div>
            `;

            return;
        }

        subjects.forEach(subject => {

            const papers =
                formData[subject];

            const card =
                createOption(
                    getSubjectIcon(subject),
                    formatSubject(subject),
                    `${papers.length} paper${papers.length === 1 ? "" : "s"}`,
                    () => {

                        selectedSubject =
                            subject;

                        resetAfterSubject();

                        loadTypes();

                        show(typeSection);

                        scrollTo(typeSection);

                    }
                );

            subjectOptions.appendChild(card);

        });

    }

    /* =====================================================
       LOAD TYPES
    ===================================================== */

    function loadTypes() {

        clear(typeOptions);

        const papers =
            getCurrentPapers();

        const types =
            unique(
                papers.map(
                    paper =>
                        String(
                            paper.type || ""
                        ).trim()
                ).filter(Boolean)
            );

        types.sort(sortTypes);

        if (!types.length) {

            typeOptions.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📭</div>
                    <h3>No Examination Types</h3>
                    <p>
                        No examination type was found
                        for this subject.
                    </p>
                </div>
            `;

            return;
        }

        types.forEach(type => {

            const count =
                papers.filter(
                    paper =>
                        String(
                            paper.type || ""
                        ).trim() === type
                ).length;

            const card =
                createOption(
                    getTypeIcon(type),
                    formatType(type),
                    `${count} paper${count === 1 ? "" : "s"}`,
                    () => {

                        selectedType =
                            type;

                        resetAfterType();

                        loadYears();

                        show(yearSection);

                        scrollTo(yearSection);

                    }
                );

            typeOptions.appendChild(card);

        });

    }

    /* =====================================================
       SORT TYPES
    ===================================================== */

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

        if (ia === -1) return 1;

        if (ib === -1) return -1;

        return ia - ib;
    }

    /* =====================================================
       LOAD YEARS
    ===================================================== */

    function loadYears() {

        clear(yearOptions);

        const papers =
            getCurrentPapers()
                .filter(
                    paper =>
                        String(
                            paper.type || ""
                        ).trim() ===
                        String(
                            selectedType
                        ).trim()
                );

        const years =
            unique(
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
            .sort(
                (a, b) => b - a
            );

        if (!years.length) {

            yearOptions.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📭</div>
                    <h3>No Years Available</h3>
                    <p>
                        No papers were found for
                        ${escapeHTML(formatType(selectedType))}.
                    </p>
                </div>
            `;

            return;
        }

        years.forEach(year => {

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
                    () => {

                        selectedYear =
                            year;

                        resetAfterYear();

                        loadLocations();

                        show(locationSection);

                        scrollTo(locationSection);

                    }
                );

            yearOptions.appendChild(card);

        });

    }

    /* =====================================================
       LOAD LOCATIONS
    ===================================================== */

    function loadLocations() {

        clear(locationOptions);

        const papers =
            getCurrentPapers()
                .filter(
                    paper =>

                        String(
                            paper.type || ""
                        ).trim() ===
                        String(
                            selectedType
                        ).trim()

                        &&

                        Number(
                            paper.year
                        ) ===
                        Number(
                            selectedYear
                        )
                );

        const locations = [];

        papers.forEach(paper => {

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

                locations.push(location);

            }

        });

        locations.sort(
            (a, b) =>
                formatLocation(a)
                    .localeCompare(
                        formatLocation(b)
                    )
        );

        if (!locations.length) {

            locationOptions.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📭</div>
                    <h3>No Region / School Available</h3>
                    <p>
                        No source was found for
                        the selected papers.
                    </p>
                </div>
            `;

            return;
        }

        locations.forEach(location => {

            const count =
                papers.filter(
                    paper =>
                        (
                            paper.region
                            ||
                            paper.school
                            ||
                            paper.zone
                            ||
                            "unknown"
                        ) === location
                ).length;

            const card =
                createOption(
                    "📍",
                    formatLocation(location),
                    `${count} paper${count === 1 ? "" : "s"}`,
                    () => {

                        selectedLocation =
                            location;

                        loadSeries();

                    }
                );

            locationOptions.appendChild(card);

        });

    }

    /* =====================================================
       LOAD SERIES
       ===================================================== */

    function loadSeries() {

        const papers =
            getFilteredLocationPapers();

        const series =
            unique(
                papers
                    .map(
                        paper =>
                            paper.series
                    )
                    .filter(Boolean)
                    .map(
                        value =>
                            String(value)
                    )
            );

        /*
         * Series is OPTIONAL.
         *
         * If data has no series,
         * go directly to papers.
         */

        if (
            !seriesSection ||
            !seriesOptions ||
            !series.length
        ) {

            selectedSeries = null;

            showResults(
                papers
            );

            return;
        }

        clear(seriesOptions);

        series.sort(
            (a, b) =>
                a.localeCompare(b)
        );

        series.forEach(item => {

            const count =
                papers.filter(
                    paper =>
                        String(
                            paper.series
                        ) === item
                ).length;

            const card =
                createOption(
                    "📂",
                    formatSeries(item),
                    `${count} paper${count === 1 ? "" : "s"}`,
                    () => {

                        selectedSeries =
                            item;

                        showResults(
                            getFilteredLocationPapers()
                                .filter(
                                    paper =>
                                        String(
                                            paper.series
                                        ) ===
                                        String(
                                            selectedSeries
                                        )
                                )
                        );

                    }
                );

            seriesOptions.appendChild(card);

        });

        show(seriesSection);

        scrollTo(seriesSection);

    }

    /* =====================================================
       FILTER LOCATION PAPERS
    ===================================================== */

    function getFilteredLocationPapers() {

        return getCurrentPapers()
            .filter(paper => {

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
                        paper.type || ""
                    ).trim() ===
                    String(
                        selectedType
                    ).trim()

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

            });

    }

    /* =====================================================
       SHOW RESULTS
    ===================================================== */

    function showResults(papers) {

        currentDisplayedPapers =
            Array.isArray(papers)
                ? papers
                : [];

        hide(seriesSection);

        show(searchSection);

        show(resultsSection);

        renderPapers(
            currentDisplayedPapers
        );

        scrollTo(resultsSection);

    }

    /* =====================================================
       RENDER PAPERS
    ===================================================== */

    function renderPapers(papers) {

        clear(paperResults);

        if (resultCount) {

            resultCount.textContent =
                `${papers.length} ${
                    papers.length === 1
                    ? "Paper"
                    : "Papers"
                }`;

        }

        if (!papers.length) {

            paperResults.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📭</div>
                    <h3>No Papers Found</h3>
                    <p>
                        There are no papers matching
                        your selected options.
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
                    📚 ${escapeHTML(
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

        papers.forEach(
            (paper, index) => {

                chain.appendChild(
                    createPaperItem(
                        paper,
                        index + 1
                    )
                );

            }
        );

        paperResults.appendChild(chain);

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
            `${formatSubject(
                selectedSubject
            )} ${formatType(
                selectedType
            )} Examination`;

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
                        📚 ${escapeHTML(
                            formatSubject(
                                selectedSubject
                            )
                        )}
                    </span>

                    <span>
                        📝 ${escapeHTML(
                            formatType(
                                selectedType
                            )
                        )}
                    </span>

                    <span>
                        📅 ${escapeHTML(
                            String(
                                paper.year
                            )
                        )}
                    </span>

                    <span>
                        📍 ${escapeHTML(
                            formatLocation(
                                location
                            )
                        )}
                    </span>

                    ${
                        paper.series
                        ?
                        `
                        <span>
                            📂 ${escapeHTML(
                                formatSeries(
                                    paper.series
                                )
                            )}
                        </span>
                        `
                        :
                        ""
                    }

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
       SAFE FILE PATH
    ===================================================== */

    function safeFilePath(file) {

        let path =
            String(file || "")
                .trim();

        if (
            /^https?:\/\//i.test(path)
        ) {

            return escapeHTML(path);

        }

        path =
            path.replace(/^\/+/, "");

        return path
            .split("/")
            .map(
                part =>
                    encodeURIComponent(part)
            )
            .join("/");

    }

    /* =====================================================
       SEARCH
    ===================================================== */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const query =
                    String(
                        searchInput.value || ""
                    )
                    .trim()
                    .toLowerCase();

                if (!query) {

                    renderPapers(
                        currentDisplayedPapers
                    );

                    return;
                }

                const filtered =
                    currentDisplayedPapers
                        .filter(paper => {

                            const text = [

                                paper.title,
                                paper.type,
                                paper.year,
                                paper.region,
                                paper.school,
                                paper.zone,
                                paper.series

                            ]
                            .filter(Boolean)
                            .join(" ")
                            .toLowerCase();

                            return text.includes(
                                query
                            );

                        });

                renderPapers(
                    filtered
                );

            }
        );

    }

    /* =====================================================
       BACK BUTTON
    ===================================================== */

    if (backButton) {

        backButton.addEventListener(
            "click",
            function () {

                if (
                    currentDisplayedPapers.length
                ) {

                    currentDisplayedPapers = [];

                    hide(resultsSection);
                    hide(searchSection);

                    if (selectedSeries) {

                        selectedSeries = null;

                        show(seriesSection);

                        scrollTo(
                            seriesSection
                        );

                        return;

                    }

                }

                if (selectedLocation) {

                    selectedLocation = null;

                    hide(resultsSection);
                    hide(searchSection);
                    hide(seriesSection);

                    scrollTo(
                        locationSection
                    );

                    return;

                }

                if (selectedYear !== null) {

                    selectedYear = null;

                    hide(locationSection);
                    hide(resultsSection);
                    hide(searchSection);

                    scrollTo(
                        yearSection
                    );

                    return;

                }

                if (selectedType) {

                    selectedType = null;

                    hide(yearSection);
                    hide(locationSection);
                    hide(seriesSection);
                    hide(resultsSection);
                    hide(searchSection);

                    scrollTo(
                        typeSection
                    );

                    return;

                }

                if (selectedSubject) {

                    selectedSubject = null;

                    hide(typeSection);
                    hide(yearSection);
                    hide(locationSection);
                    hide(seriesSection);
                    hide(resultsSection);
                    hide(searchSection);

                    scrollTo(
                        subjectSection
                    );

                    return;

                }

                if (selectedForm) {

                    selectedForm = null;

                    hide(subjectSection);
                    hide(typeSection);
                    hide(yearSection);
                    hide(locationSection);
                    hide(seriesSection);
                    hide(resultsSection);
                    hide(searchSection);

                    scrollTo(
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
       UTILS
    ===================================================== */

    function unique(array) {

        return [
            ...new Set(array)
        ];

    }

    function scrollTo(element) {

        if (!element) return;

        setTimeout(
            () => {

                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            },
            100
        );

    }

    /* =====================================================
       DATA ERROR
    ===================================================== */

    function showDataError() {

        if (!formOptions) return;

        formOptions.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    ⚠️
                </div>

                <h3>
                    Data Error
                </h3>

                <p>
                    Past paper data haijapatikana.
                    <br><br>

                    Hakikisha
                    <b>pastpapers.data.js</b>
                    ime-load kabla ya
                    <b>pastpapers.js</b>.
                </p>

            </div>

        `;

    }

    /* =====================================================
       START
    ===================================================== */

    loadForms();

})();
