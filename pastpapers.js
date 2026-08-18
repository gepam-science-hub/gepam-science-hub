/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE
   VERSION: FINAL DATA-SAFE ENGINE
========================================================= */

(function () {

    "use strict";

    /* =====================================================
       DOM
    ===================================================== */

    const $ = (id) => document.getElementById(id);

    const formOptions = $("formOptions");
    const subjectSection = $("subjectSection");
    const subjectOptions = $("subjectOptions");
    const typeSection = $("typeSection");
    const typeOptions = $("typeOptions");
    const yearSection = $("yearSection");
    const yearOptions = $("yearOptions");
    const locationSection = $("locationSection");
    const locationOptions = $("locationOptions");
    const resultsSection = $("resultsSection");
    const paperResults = $("paperResults");
    const resultCount = $("resultCount");
    const breadcrumb = $("breadcrumb");
    const backButton = $("backButton");
    const currentYear = $("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    /* =====================================================
       STATE
    ===================================================== */

    let selectedForm = null;
    let selectedSubject = null;
    let selectedType = null;
    let selectedYear = null;
    let selectedLocation = null;

    let database = null;
    let config = null;

    /* =====================================================
       DATA LOADER
       Supports:
       window.pastPapers
       window.pastPaperConfig
    ===================================================== */

    function loadData() {

        try {

            if (
                window.pastPapers &&
                typeof window.pastPapers === "object"
            ) {
                database = window.pastPapers;
            }

            if (
                window.pastPaperConfig &&
                typeof window.pastPaperConfig === "object"
            ) {
                config = window.pastPaperConfig;
            }

        } catch (error) {

            console.error(
                "GEPAM DATA ERROR:",
                error
            );

        }

        /*
         * Make sure data has actual forms.
         */

        if (
            database &&
            typeof database === "object"
        ) {

            const keys = Object.keys(database);

            if (keys.length > 0) {
                return true;
            }

        }

        return false;
    }

    /* =====================================================
       HTML ESCAPE
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
       FORM LABEL
    ===================================================== */

    function formatForm(form) {

        const value = String(form || "");

        const match = value.match(/form\s*(\d+)/i);

        if (match) {
            return "Form " + match[1];
        }

        return capitalize(value);

    }

    /* =====================================================
       SUBJECT LABEL
    ===================================================== */

    function formatSubject(subject) {

        const labels = {
            physics: "Physics",
            chemistry: "Chemistry"
        };

        const key = String(subject || "").toLowerCase();

        return labels[key] || capitalize(key);

    }

    /* =====================================================
       TYPE LABEL
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

        const key = String(type || "").toLowerCase();

        return (
            labels[key] ||
            capitalize(
                key.replace(/_/g, " ")
            )
        );

    }

    /* =====================================================
       LOCATION LABEL
    ===================================================== */

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

        const key = String(location || "").toLowerCase();

        if (labels[key]) {
            return labels[key];
        }

        return capitalize(
            key.replace(/_/g, " ")
        );

    }

    /* =====================================================
       CAPITALIZE
    ===================================================== */

    function capitalize(value) {

        if (!value) {
            return "";
        }

        const text = String(value);

        return (
            text.charAt(0).toUpperCase() +
            text.slice(1)
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
            document.createElement("button");

        button.type = "button";

        button.className = "option-card";

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
       SCROLL
    ===================================================== */

    function scrollToSection(section) {

        if (!section) {
            return;
        }

        setTimeout(function () {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }

    /* =====================================================
       GET FORM DATA
    ===================================================== */

    function getFormData(form) {

        if (!database) {
            return null;
        }

        return database[form] || null;

    }

    /* =====================================================
       GET CURRENT PAPERS
    ===================================================== */

    function getCurrentPapers() {

        if (
            !selectedForm ||
            !selectedSubject
        ) {
            return [];
        }

        const formData =
            getFormData(selectedForm);

        if (!formData) {
            return [];
        }

        const papers =
            formData[selectedSubject];

        return Array.isArray(papers)
            ? papers
            : [];

    }

    /* =====================================================
       LOAD FORMS
    ===================================================== */

    function loadForms() {

        if (!formOptions) {
            return;
        }

        formOptions.innerHTML = "";

        const forms =
            Object.keys(database || {})
                .filter(function (form) {

                    const data =
                        database[form];

                    if (
                        !data ||
                        typeof data !== "object"
                    ) {
                        return false;
                    }

                    return (
                        Array.isArray(data.physics) ||
                        Array.isArray(data.chemistry)
                    );

                })
                .sort(function (a, b) {

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

                });

        if (!forms.length) {

            showDataError(
                "Database imefunguka lakini hakuna Form 1–6 yenye Physics au Chemistry."
            );

            return;
        }

        forms.forEach(function (form) {

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

        });

    }

    /* =====================================================
       COUNT FORM PAPERS
    ===================================================== */

    function countFormPapers(form) {

        const data =
            getFormData(form);

        if (!data) {
            return 0;
        }

        let total = 0;

        Object.keys(data)
            .forEach(function (subject) {

                if (
                    Array.isArray(
                        data[subject]
                    )
                ) {

                    total +=
                        data[subject].length;

                }

            });

        return total;

    }

    /* =====================================================
       SELECT FORM
    ===================================================== */

    function selectForm(form) {

        selectedForm = form;

        selectedSubject = null;
        selectedType = null;
        selectedYear = null;
        selectedLocation = null;

        clearAfterForm();

        updateBreadcrumb();

        loadSubjects();

        show(subjectSection);

        scrollToSection(
            subjectSection
        );

    }

    /* =====================================================
       CLEAR AFTER FORM
    ===================================================== */

    function clearAfterForm() {

        hide(typeSection);
        hide(yearSection);
        hide(locationSection);
        hide(resultsSection);

        if (subjectOptions) {
            subjectOptions.innerHTML = "";
        }

        if (typeOptions) {
            typeOptions.innerHTML = "";
        }

        if (yearOptions) {
            yearOptions.innerHTML = "";
        }

        if (locationOptions) {
            locationOptions.innerHTML = "";
        }

        if (paperResults) {
            paperResults.innerHTML = "";
        }

        if (resultCount) {
            resultCount.textContent = "0 Papers";
        }

    }

    /* =====================================================
       LOAD SUBJECTS
    ===================================================== */

    function loadSubjects() {

        if (!subjectOptions) {
            return;
        }

        subjectOptions.innerHTML = "";

        const formData =
            getFormData(selectedForm);

        if (!formData) {
            return;
        }

        const subjects =
            Object.keys(formData)
                .filter(function (subject) {

                    return Array.isArray(
                        formData[subject]
                    );

                });

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

        subjects.forEach(function (subject) {

            const count =
                formData[subject].length;

            const icon =
                subject.toLowerCase() === "physics"
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

        });

    }

    /* =====================================================
       SELECT SUBJECT
    ===================================================== */

    function selectSubject(subject) {

        selectedSubject = subject;

        selectedType = null;
        selectedYear = null;
        selectedLocation = null;

        clearAfterSubject();

        updateBreadcrumb();

        loadTypes();

        show(typeSection);

        scrollToSection(
            typeSection
        );

    }

    /* =====================================================
       CLEAR AFTER SUBJECT
    ===================================================== */

    function clearAfterSubject() {

        hide(yearSection);
        hide(locationSection);
        hide(resultsSection);

        if (typeOptions) {
            typeOptions.innerHTML = "";
        }

        if (yearOptions) {
            yearOptions.innerHTML = "";
        }

        if (locationOptions) {
            locationOptions.innerHTML = "";
        }

        if (paperResults) {
            paperResults.innerHTML = "";
        }

        if (resultCount) {
            resultCount.textContent = "0 Papers";
        }

    }

    /* =====================================================
       LOAD TYPES
    ===================================================== */

    function loadTypes() {

        if (!typeOptions) {
            return;
        }

        typeOptions.innerHTML = "";

        const papers =
            getCurrentPapers();

        const types = [
            ...new Set(
                papers
                    .map(function (paper) {

                        return String(
                            paper?.type || ""
                        ).trim().toLowerCase();

                    })
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

        types.sort(function (a, b) {

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

        });

        if (!types.length) {

            typeOptions.innerHTML = `

                <div class="message">

                    <div class="message-icon">
                        📭
                    </div>

                    <strong>
                        No Examination Types
                    </strong>

                    Hakuna aina ya mtihani
                    iliyopatikana.

                </div>

            `;

            return;
        }

        types.forEach(function (type) {

            const count =
                papers.filter(function (paper) {

                    return (
                        String(
                            paper?.type || ""
                        ).trim().toLowerCase()
                        ===
                        type
                    );

                }).length;

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

        });

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

        selectedType = String(
            type
        ).trim().toLowerCase();

        selectedYear = null;
        selectedLocation = null;

        clearAfterType();

        updateBreadcrumb();

        loadYears();

        show(yearSection);

        scrollToSection(
            yearSection
        );

    }

    /* =====================================================
       CLEAR AFTER TYPE
    ===================================================== */

    function clearAfterType() {

        hide(locationSection);
        hide(resultsSection);

        if (yearOptions) {
            yearOptions.innerHTML = "";
        }

        if (locationOptions) {
            locationOptions.innerHTML = "";
        }

        if (paperResults) {
            paperResults.innerHTML = "";
        }

        if (resultCount) {
            resultCount.textContent = "0 Papers";
        }

    }

    /* =====================================================
       LOAD YEARS
    ===================================================== */

    function loadYears() {

        if (!yearOptions) {
            return;
        }

        yearOptions.innerHTML = "";

        const papers =
            getCurrentPapers()
                .filter(function (paper) {

                    return (
                        String(
                            paper?.type || ""
                        )
                        .trim()
                        .toLowerCase()
                        ===
                        selectedType
                    );

                });

        const years = [
            ...new Set(
                papers
                    .map(function (paper) {

                        return Number(
                            paper?.year
                        );

                    })
                    .filter(function (year) {

                        return Number.isFinite(
                            year
                        );

                    })
            )
        ]
        .sort(function (a, b) {

            return b - a;

        });

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

            return;
        }

        years.forEach(function (year) {

            const count =
                papers.filter(function (paper) {

                    return (
                        Number(
                            paper?.year
                        ) === year
                    );

                }).length;

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

        });

    }

    /* =====================================================
       SELECT YEAR
    ===================================================== */

    function selectYear(year) {

        selectedYear = Number(year);

        selectedLocation = null;

        clearAfterYear();

        updateBreadcrumb();

        loadLocations();

        show(locationSection);

        scrollToSection(
            locationSection
        );

    }

    /* =====================================================
       CLEAR AFTER YEAR
    ===================================================== */

    function clearAfterYear() {

        hide(resultsSection);

        if (locationOptions) {
            locationOptions.innerHTML = "";
        }

        if (paperResults) {
            paperResults.innerHTML = "";
        }

        if (resultCount) {
            resultCount.textContent = "0 Papers";
        }

    }

    /* =====================================================
       GET LOCATION
    ===================================================== */

    function getPaperLocation(paper) {

        if (
            paper &&
            paper.region
        ) {
            return String(
                paper.region
            );
        }

        if (
            paper &&
            paper.school
        ) {
            return String(
                paper.school
            );
        }

        if (
            paper &&
            paper.zone
        ) {
            return String(
                paper.zone
            );
        }

        return "unknown";

    }

    /* =====================================================
       LOAD LOCATIONS
    ===================================================== */

    function loadLocations() {

        if (!locationOptions) {
            return;
        }

        locationOptions.innerHTML = "";

        const papers =
            getCurrentPapers()
                .filter(function (paper) {

                    return (

                        String(
                            paper?.type || ""
                        )
                        .trim()
                        .toLowerCase()
                        ===
                        selectedType

                        &&

                        Number(
                            paper?.year
                        )
                        ===
                        Number(
                            selectedYear
                        )

                    );

                });

        const locations = [
            ...new Set(
                papers.map(
                    getPaperLocation
                )
            )
        ];

        locations.sort(function (a, b) {

            return formatLocation(a)
                .localeCompare(
                    formatLocation(b)
                );

        });

        if (!locations.length) {

            locationOptions.innerHTML = `

                <div class="message">

                    <div class="message-icon">
                        📭
                    </div>

                    <strong>
                        No Region / School
                    </strong>

                    Hakuna source ya paper
                    iliyopatikana.

                </div>

            `;

            return;
        }

        locations.forEach(function (location) {

            const count =
                papers.filter(function (paper) {

                    return (
                        getPaperLocation(paper)
                        ===
                        location
                    );

                }).length;

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

        });

    }

    /* =====================================================
       SELECT LOCATION
    ===================================================== */

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

    /* =====================================================
       LOAD PAPERS
    ===================================================== */

    function loadPapers() {

        const papers =
            getCurrentPapers()
                .filter(function (paper) {

                    return (

                        String(
                            paper?.type || ""
                        )
                        .trim()
                        .toLowerCase()
                        ===
                        selectedType

                        &&

                        Number(
                            paper?.year
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

                });

        if (resultCount) {

            resultCount.textContent =
                `${papers.length} ${
                    papers.length === 1
                        ? "Paper"
                        : "Papers"
                }`;

        }

        if (!paperResults) {
            return;
        }

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
                    na uchaguzi wako.

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

            </strong>

            <span>
                ${papers.length}
                ${papers.length === 1
                    ? "Paper"
                    : "Papers"}
            </span>

        `;

        chain.appendChild(header);

        papers.forEach(function (
            paper,
            index
        ) {

            chain.appendChild(
                createPaperItem(
                    paper,
                    index + 1
                )
            );

        });

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
            getPaperLocation(
                paper
            );

        const file =
            paper?.file
            ||
            paper?.pdf
            ||
            paper?.url
            ||
            "";

        const title =
            paper?.title
            ||
            `${formatSubject(
                selectedSubject
            )} ${formatType(
                selectedType
            )} Exam`;

        const fileURL =
            safeFilePath(file);

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
                                paper?.year || ""
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
                    fileURL
                    ?
                    `
                    <a
                        class="open-pdf"
                        href="${fileURL}"
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

    /* =====================================================
       SAFE FILE PATH
    ===================================================== */

    function safeFilePath(file) {

        let path =
            String(file || "")
                .trim();

        if (!path) {
            return "";
        }

        /*
         * External URL
         */

        if (
            /^https?:\/\//i.test(path)
        ) {

            return escapeHTML(path);

        }

        /*
         * Remove leading /
         */

        path =
            path.replace(
                /^\/+/,
                ""
            );

        /*
         * Keep GitHub paths intact.
         */

        const parts =
            path
                .split("/")
                .map(function (part) {

                    return encodeURIComponent(
                        part
                    );

                });

        return parts.join("/");

    }

    /* =====================================================
       BREADCRUMB
    ===================================================== */

    function updateBreadcrumb() {

        if (!breadcrumb) {
            return;
        }

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

        if (
            selectedYear !== null &&
            selectedYear !== undefined
        ) {

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
            ).join("");

    }

    /* =====================================================
       BACK BUTTON
    ===================================================== */

    if (backButton) {

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

                    return;
                }

                if (
                    selectedYear !== null &&
                    selectedYear !== undefined
                ) {

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

                    updateBreadcrumb();

                    return;
                }

                if (selectedType) {

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

                    updateBreadcrumb();

                    return;
                }

                if (selectedSubject) {

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

                    updateBreadcrumb();

                    return;
                }

                if (selectedForm) {

                    selectedForm =
                        null;

                    selectedSubject =
                        null;

                    selectedType =
                        null;

                    selectedYear =
                        null;

                    selectedLocation =
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

    }

    /* =====================================================
       DATA ERROR
    ===================================================== */

    function showDataError(message) {

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

                <br><br>

                ${escapeHTML(
                    message ||
                    "Past paper data haijapatikana."
                )}

                <br><br>

                Hakikisha files hizi zipo
                kwenye folder moja:

                <br>

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

        console.error(
            "GEPAM Science Hub: past paper database unavailable.",
            {
                database,
                config
            }
        );

    }

    /* =====================================================
       START
    ===================================================== */

    function start() {

        const success =
            loadData();

        if (!success) {

            showDataError(
                "pastpapers.data.js haijasomeka au window.pastPapers haipo."
            );

            return;
        }

        console.log(
            "GEPAM Science Hub Past Papers loaded successfully."
        );

        console.log(
            "Forms:",
            Object.keys(database)
        );

        loadForms();

    }

    /* =====================================================
       DOM READY
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            start
        );

    } else {

        start();

    }

})();
