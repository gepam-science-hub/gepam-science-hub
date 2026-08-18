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
       STATE
    ===================================================== */

    let selectedForm = null;
    let selectedSubject = null;
    let selectedType = null;
    let selectedYear = null;
    let selectedLocation = null;

    let currentPapers = [];

    /* =====================================================
       DATA
    ===================================================== */

    function getConfig() {
        if (typeof pastPaperConfig !== "undefined") {
            return pastPaperConfig;
        }

        if (window.pastPaperConfig) {
            return window.pastPaperConfig;
        }

        return null;
    }

    function getDatabase() {
        if (typeof pastPapers !== "undefined") {
            return pastPapers;
        }

        if (window.pastPapers) {
            return window.pastPapers;
        }

        return null;
    }

    const config = getConfig();
    const database = getDatabase();

    /* =====================================================
       DOM
    ===================================================== */

    const formOptions = document.getElementById("formOptions");

    const subjectSection = document.getElementById("subjectSection");
    const subjectOptions = document.getElementById("subjectOptions");

    const typeSection = document.getElementById("typeSection");
    const typeOptions = document.getElementById("typeOptions");

    const locationSection = document.getElementById("locationSection");
    const locationOptions = document.getElementById("locationOptions");

    const yearSection = document.getElementById("yearSection");
    const yearOptions = document.getElementById("yearOptions");

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
       STARTUP
    ===================================================== */

    document.addEventListener("DOMContentLoaded", init);

    function init() {

        if (currentYear) {
            currentYear.textContent = new Date().getFullYear();
        }

        setupMobileMenu();

        if (!config || !database) {
            showDataError();
            return;
        }

        renderForms();

        showEmptyState(
            "Select a form to begin",
            "Choose Form 1–6 above to view available papers."
        );

        if (backButton) {
            backButton.addEventListener("click", goBack);
        }

        if (searchInput) {
            searchInput.addEventListener("input", handleSearch);
        }
    }

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function setupMobileMenu() {

        const menuToggle = document.getElementById("menuToggle");
        const mainNav = document.getElementById("mainNav");

        if (!menuToggle || !mainNav) return;

        menuToggle.addEventListener("click", function () {

            const opened = mainNav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                opened ? "true" : "false"
            );
        });
    }

    /* =====================================================
       FORM
    ===================================================== */

    function renderForms() {

        if (!formOptions) return;

        formOptions.innerHTML = "";

        const forms = Object.keys(config);

        if (!forms.length) {
            showEmptyState(
                "No Forms Available",
                "No past paper configuration was found."
            );
            return;
        }

        forms.forEach(function (formKey, index) {

            const button = createOptionButton(
                formatForm(formKey),
                index + 1
            );

            button.addEventListener("click", function () {
                selectForm(formKey, button);
            });

            formOptions.appendChild(button);
        });
    }

    function selectForm(formKey, button) {

        selectedForm = formKey;

        selectedSubject = null;
        selectedType = null;
        selectedYear = null;
        selectedLocation = null;

        markSelected(formOptions, button);

        resetFrom("subject");

        const formConfig = config[selectedForm];

        if (!formConfig) {
            showEmptyState(
                "No Data",
                "No configuration was found for this form."
            );
            return;
        }

        renderSubjects(formConfig.subjects || []);

        showSection(subjectSection);

        hideSection(typeSection);
        hideSection(locationSection);
        hideSection(yearSection);
        hideSection(seriesSection);
        hideSection(searchSection);

        showEmptyState(
            "Select a subject",
            "Choose Physics or Chemistry to continue."
        );
    }

    /* =====================================================
       SUBJECT
    ===================================================== */

    function renderSubjects(subjects) {

        if (!subjectOptions) return;

        subjectOptions.innerHTML = "";

        subjects.forEach(function (subject, index) {

            const button = createOptionButton(
                formatSubject(subject),
                getSubjectIcon(subject)
            );

            button.addEventListener("click", function () {
                selectSubject(subject, button);
            });

            subjectOptions.appendChild(button);
        });
    }

    function selectSubject(subject, button) {

        selectedSubject = subject;

        selectedType = null;
        selectedYear = null;
        selectedLocation = null;

        markSelected(subjectOptions, button);

        const types = getAvailableTypes();

        if (!types.length) {

            hideSection(typeSection);
            hideSection(locationSection);
            hideSection(yearSection);
            hideSection(seriesSection);
            hideSection(searchSection);

            showEmptyState(
                "No Examination Types",
                "No papers are currently available for this subject."
            );

            return;
        }

        renderTypes(types);

        showSection(typeSection);

        hideSection(locationSection);
        hideSection(yearSection);
        hideSection(seriesSection);
        hideSection(searchSection);

        showEmptyState(
            "Select examination type",
            "Choose the type of examination you want."
        );

        scrollToSection(typeSection);
    }

    /* =====================================================
       EXAM TYPE
    ===================================================== */

    function getAvailableTypes() {

        const formConfig = config[selectedForm];

        if (
            formConfig &&
            Array.isArray(formConfig.types)
        ) {
            return formConfig.types;
        }

        return unique(
            getSubjectPapers().map(function (paper) {
                return paper.type;
            })
        );
    }

    function renderTypes(types) {

        if (!typeOptions) return;

        typeOptions.innerHTML = "";

        types.forEach(function (type) {

            const papers = getSubjectPapers().filter(function (paper) {
                return normalize(paper.type) === normalize(type);
            });

            if (!papers.length) return;

            const button = createOptionButton(
                formatType(type),
                getTypeIcon(type)
            );

            button.addEventListener("click", function () {
                selectType(type, button);
            });

            typeOptions.appendChild(button);
        });

        if (!typeOptions.children.length) {

            showEmptyState(
                "No papers found",
                "This subject has no papers for the configured examination types."
            );
        }
    }

    function selectType(type, button) {

        selectedType = type;

        selectedYear = null;
        selectedLocation = null;

        markSelected(typeOptions, button);

        const papers = getSubjectPapers().filter(function (paper) {
            return normalize(paper.type) === normalize(selectedType);
        });

        const years = unique(
            papers
                .map(function (paper) {
                    return paper.year;
                })
                .filter(Boolean)
        ).sort(function (a, b) {
            return Number(b) - Number(a);
        });

        if (!years.length) {

            hideSection(yearSection);
            hideSection(locationSection);
            hideSection(seriesSection);

            showEmptyState(
                "No Years Available",
                "No papers were found for this examination type."
            );

            return;
        }

        renderYears(years);

        showSection(yearSection);

        hideSection(locationSection);
        hideSection(seriesSection);
        hideSection(searchSection);

        showEmptyState(
            "Select year",
            "Choose the examination year."
        );

        scrollToSection(yearSection);
    }

    /* =====================================================
       YEAR
    ===================================================== */

    function renderYears(years) {

        if (!yearOptions) return;

        yearOptions.innerHTML = "";

        years.forEach(function (year) {

            const button = document.createElement("button");

            button.type = "button";
            button.className = "option-btn";

            button.innerHTML =
                "📅 " + escapeHTML(String(year));

            button.addEventListener("click", function () {
                selectYear(year, button);
            });

            yearOptions.appendChild(button);
        });
    }

    function selectYear(year, button) {

        selectedYear = year;
        selectedLocation = null;

        markSelected(yearOptions, button);

        const papers = getFilteredPapers({
            type: selectedType,
            year: selectedYear
        });

        const locations = getLocations(papers);

        /*
         * If there is more than one region/school,
         * show location step.
         *
         * If there is only one location, we still show it
         * because the requested chain includes Region/School
         * where applicable.
         */

        if (locations.length) {

            renderLocations(locations);

            showSection(locationSection);

            hideSection(seriesSection);
            hideSection(searchSection);

            showEmptyState(
                "Select Region / School",
                "Choose the region or school associated with the paper."
            );

            scrollToSection(locationSection);

        } else {

            selectedLocation = null;

            hideSection(locationSection);

            showPaperChain(papers);
        }
    }

    /* =====================================================
       REGION / SCHOOL
    ===================================================== */

    function getLocations(papers) {

        const locations = [];

        papers.forEach(function (paper) {

            if (paper.region) {

                locations.push({
                    key: "region:" + normalize(paper.region),
                    value: paper.region,
                    label: formatLocation(paper.region),
                    kind: "Region"
                });

            } else if (paper.school) {

                locations.push({
                    key: "school:" + normalize(paper.school),
                    value: paper.school,
                    label: paper.school,
                    kind: "School"
                });

            } else if (paper.zone) {

                locations.push({
                    key: "zone:" + normalize(paper.zone),
                    value: paper.zone,
                    label: formatLocation(paper.zone),
                    kind: "Zone"
                });
            }
        });

        const map = new Map();

        locations.forEach(function (item) {

            if (!map.has(item.key)) {
                map.set(item.key, item);
            }
        });

        return Array.from(map.values());
    }

    function renderLocations(locations) {

        if (!locationOptions) return;

        locationOptions.innerHTML = "";

        locations.forEach(function (location) {

            const button = createOptionButton(
                getLocationIcon(location.kind) +
                " " +
                location.label,
                ""
            );

            button.addEventListener("click", function () {

                selectedLocation = location;

                markSelected(locationOptions, button);

                const papers = getFilteredPapers({
                    type: selectedType,
                    year: selectedYear,
                    location: selectedLocation
                });

                showPaperChain(papers);
            });

            locationOptions.appendChild(button);
        });
    }

    /* =====================================================
       PAPER CHAIN
    ===================================================== */

    function showPaperChain(papers) {

        currentPapers = papers || [];

        hideSection(seriesSection);
        hideSection(searchSection);

        if (!currentPapers.length) {

            showEmptyState(
                "No Papers Found",
                "No paper matches the selections you have made."
            );

            updateCount(0);
            return;
        }

        renderPaperChain(currentPapers);

        showSection(searchSection);

        scrollToResults();
    }

    function renderPaperChain(papers) {

        if (!paperResults) return;

        paperResults.innerHTML = "";

        updateCount(papers.length);

        /*
         * PAPER CHAIN
         */

        const chain = document.createElement("div");

        chain.className = "paper-chain";

        const header = document.createElement("div");

        header.className = "chain-header";

        header.innerHTML = `
            <div>
                <strong>📚 ${escapeHTML(formatSubject(selectedSubject))}</strong>
                <span>›</span>
                <span>${escapeHTML(formatType(selectedType))}</span>
                <span>›</span>
                <span>${escapeHTML(String(selectedYear || ""))}</span>
            </div>

            <span class="paper-total">
                ${papers.length} paper${papers.length === 1 ? "" : "s"}
            </span>
        `;

        chain.appendChild(header);

        papers.forEach(function (paper, index) {

            const item = document.createElement("div");

            item.className = "paper-chain-item";

            const number = document.createElement("div");

            number.className = "paper-chain-number";
            number.textContent = index + 1;

            const info = document.createElement("div");

            info.className = "paper-info";

            const title = document.createElement("h4");

            title.textContent =
                paper.title ||
                formatSubject(selectedSubject) + " Examination";

            const meta = document.createElement("div");

            meta.className = "paper-meta";

            addMeta(meta, "📚 " + formatSubject(selectedSubject));
            addMeta(meta, "📝 " + formatType(paper.type));

            if (paper.year) {
                addMeta(meta, "📅 " + paper.year);
            }

            if (paper.region) {
                addMeta(meta, "📍 " + formatLocation(paper.region));
            }

            if (paper.school) {
                addMeta(meta, "🏫 " + paper.school);
            }

            if (paper.zone) {
                addMeta(meta, "🗺️ " + formatLocation(paper.zone));
            }

            info.appendChild(title);
            info.appendChild(meta);

            const action = document.createElement("div");

            action.className = "paper-action";

            const open = document.createElement("a");

            open.className = "open-pdf-button";
            open.href = getFileURL(paper.file);
            open.target = "_blank";
            open.rel = "noopener";

            open.innerHTML = "📄 Fungua PDF";

            action.appendChild(open);

            item.appendChild(number);
            item.appendChild(info);
            item.appendChild(action);

            chain.appendChild(item);
        });

        paperResults.appendChild(chain);

        createBottomActions();
    }

    /* =====================================================
       SEARCH
    ===================================================== */

    function handleSearch() {

        const query = normalize(
            searchInput ? searchInput.value : ""
        );

        if (!query) {

            renderPaperChain(currentPapers);

            return;
        }

        const filtered = currentPapers.filter(function (paper) {

            const text = [
                paper.title,
                paper.type,
                paper.region,
                paper.school,
                paper.zone,
                paper.year
            ]
                .filter(Boolean)
                .join(" ");

            return normalize(text).includes(query);
        });

        renderPaperChain(filtered);
    }

    /* =====================================================
       BACK BUTTON
    ===================================================== */

    function goBack() {

        if (selectedLocation) {

            selectedLocation = null;

            hideSection(seriesSection);
            hideSection(searchSection);

            showSection(locationSection);

            showEmptyState(
                "Select Region / School",
                "Choose a region or school."
            );

            scrollToSection(locationSection);

            return;
        }

        if (selectedYear) {

            selectedYear = null;

            hideSection(locationSection);
            hideSection(seriesSection);
            hideSection(searchSection);

            showSection(yearSection);

            showEmptyState(
                "Select year",
                "Choose the examination year."
            );

            scrollToSection(yearSection);

            return;
        }

        if (selectedType) {

            selectedType = null;

            hideSection(yearSection);
            hideSection(locationSection);
            hideSection(seriesSection);
            hideSection(searchSection);

            showSection(typeSection);

            showEmptyState(
                "Select examination type",
                "Choose the examination type."
            );

            scrollToSection(typeSection);

            return;
        }

        if (selectedSubject) {

            selectedSubject = null;

            hideSection(typeSection);
            hideSection(yearSection);
            hideSection(locationSection);
            hideSection(seriesSection);
            hideSection(searchSection);

            showSection(subjectSection);

            showEmptyState(
                "Select a subject",
                "Choose Physics or Chemistry."
            );

            scrollToSection(subjectSection);

            return;
        }

        if (selectedForm) {

            selectedForm = null;

            hideSection(subjectSection);
            hideSection(typeSection);
            hideSection(yearSection);
            hideSection(locationSection);
            hideSection(seriesSection);
            hideSection(searchSection);

            showEmptyState(
                "Select a form to begin",
                "Choose Form 1–6 above to view available papers."
            );

            scrollToSection(formOptions);

            return;
        }

        window.location.href = "index.html";
    }

    /* =====================================================
       FILTERING
    ===================================================== */

    function getSubjectPapers() {

        if (!database || !selectedForm || !selectedSubject) {
            return [];
        }

        const formData = database[selectedForm];

        if (!formData) return [];

        const papers = formData[selectedSubject];

        return Array.isArray(papers) ? papers : [];
    }

    function getFilteredPapers(options) {

        const papers = getSubjectPapers();

        return papers.filter(function (paper) {

            if (
                options.type &&
                normalize(paper.type) !== normalize(options.type)
            ) {
                return false;
            }

            if (
                options.year &&
                Number(paper.year) !== Number(options.year)
            ) {
                return false;
            }

            if (options.location) {

                const location = options.location;

                if (location.kind === "Region") {

                    if (
                        normalize(paper.region) !==
                        normalize(location.value)
                    ) {
                        return false;
                    }

                } else if (location.kind === "School") {

                    if (
                        normalize(paper.school) !==
                        normalize(location.value)
                    ) {
                        return false;
                    }

                } else if (location.kind === "Zone") {

                    if (
                        normalize(paper.zone) !==
                        normalize(location.value)
                    ) {
                        return false;
                    }
                }
            }

            return true;
        });
    }

    /* =====================================================
       UI HELPERS
    ===================================================== */

    function createOptionButton(label, icon) {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "option-btn";

        button.innerHTML =
            (icon ? icon + " " : "") +
            escapeHTML(label);

        return button;
    }

    function markSelected(container, selectedButton) {

        if (!container) return;

        Array.from(container.children).forEach(function (child) {
            child.classList.remove("selected");
        });

        if (selectedButton) {
            selectedButton.classList.add("selected");
        }
    }

    function showSection(section) {

        if (section) {
            section.hidden = false;
        }
    }

    function hideSection(section) {

        if (section) {
            section.hidden = true;
        }
    }

    function resetFrom(level) {

        if (level === "subject") {

            hideSection(typeSection);
            hideSection(yearSection);
            hideSection(locationSection);
            hideSection(seriesSection);
            hideSection(searchSection);

            if (typeOptions) typeOptions.innerHTML = "";
            if (yearOptions) yearOptions.innerHTML = "";
            if (locationOptions) locationOptions.innerHTML = "";
            if (seriesOptions) seriesOptions.innerHTML = "";
        }
    }

    function showEmptyState(title, message) {

        if (!paperResults) return;

        paperResults.innerHTML = `
            <div class="empty-state">
                <strong>${escapeHTML(title)}</strong>
                ${escapeHTML(message)}
            </div>
        `;

        updateCount(0);
    }

    function showDataError() {

        if (!paperResults) return;

        paperResults.innerHTML = `
            <div class="empty-state">
                <strong>⚠️ Data Error</strong>
                Past paper data haikupatikana.
                Hakikisha <b>pastpapers.data.js</b>
                imewekwa kabla ya <b>pastpapers.js</b>.
            </div>
        `;

        updateCount(0);
    }

    function updateCount(count) {

        if (!resultCount) return;

        resultCount.textContent =
            count + " paper" + (count === 1 ? "" : "s");
    }

    function addMeta(container, text) {

        const span = document.createElement("span");

        span.className = "meta";
        span.textContent = text;

        container.appendChild(span);
    }

    function createBottomActions() {

        if (!paperResults) return;

        const actions = document.createElement("div");

        actions.className = "paper-actions-bottom";

        const back = document.createElement("button");

        back.type = "button";
        back.className = "back-button";
        back.textContent = "← Back";

        back.addEventListener("click", goBack);

        const restart = document.createElement("button");

        restart.type = "button";
        restart.className = "restart-button";
        restart.textContent = "↻ Start Again";

        restart.addEventListener("click", restartSystem);

        actions.appendChild(back);
        actions.appendChild(restart);

        paperResults.appendChild(actions);
    }

    function restartSystem() {

        selectedForm = null;
        selectedSubject = null;
        selectedType = null;
        selectedYear = null;
        selectedLocation = null;

        currentPapers = [];

        if (formOptions) {
            Array.from(formOptions.children).forEach(function (child) {
                child.classList.remove("selected");
            });
        }

        if (subjectOptions) subjectOptions.innerHTML = "";
        if (typeOptions) typeOptions.innerHTML = "";
        if (yearOptions) yearOptions.innerHTML = "";
        if (locationOptions) locationOptions.innerHTML = "";
        if (seriesOptions) seriesOptions.innerHTML = "";

        hideSection(subjectSection);
        hideSection(typeSection);
        hideSection(yearSection);
        hideSection(locationSection);
        hideSection(seriesSection);
        hideSection(searchSection);

        if (searchInput) {
            searchInput.value = "";
        }

        showEmptyState(
            "Select a form to begin",
            "Choose Form 1–6 above to view available papers."
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    /* =====================================================
       FORMATTERS
    ===================================================== */

    function formatForm(form) {

        const value = String(form)
            .toLowerCase()
            .replace("form", "")
            .trim();

        return "Form " + value;
    }

    function formatSubject(subject) {

        const value = String(subject || "")
            .toLowerCase();

        if (value === "physics") return "Physics";
        if (value === "chemistry") return "Chemistry";

        return capitalizeWords(value.replace(/_/g, " "));
    }

    function formatType(type) {

        const labels = {

            midterm: "Midterm",
            terminal: "Terminal",
            annual: "Annual",
            ftna: "FTNA",
            joint: "Joint",
            necta: "NECTA",
            mock: "Mock",
            pre_necta: "Pre-NECTA",
            acsee: "ACSEE"
        };

        return labels[normalize(type)] ||
            capitalizeWords(
                String(type || "").replace(/_/g, " ")
            );
    }

    function formatLocation(location) {

        return capitalizeWords(
            String(location || "")
                .replace(/_/g, " ")
        );
    }

    function capitalizeWords(value) {

        return value
            .split(" ")
            .filter(Boolean)
            .map(function (word) {
                return word.charAt(0).toUpperCase() +
                    word.slice(1);
            })
            .join(" ");
    }

    function getSubjectIcon(subject) {

        return normalize(subject) === "physics"
            ? "⚛️"
            : "🧪";
    }

    function getTypeIcon(type) {

        const icons = {
            midterm: "📝",
            terminal: "📘",
            annual: "📚",
            ftna: "🎓",
            joint: "🤝",
            necta: "🏛️",
            mock: "📋",
            pre_necta: "🎯",
            acsee: "🎓"
        };

        return icons[normalize(type)] || "📄";
    }

    function getLocationIcon(kind) {

        if (kind === "School") return "🏫";
        if (kind === "Zone") return "🗺️";

        return "📍";
    }

    /* =====================================================
       FILE PATH
    ===================================================== */

    function getFileURL(file) {

        if (!file) {
            return "#";
        }

        /*
         * GitHub Pages / same-site relative path.
         *
         * Example:
         * papers/form6/chemistry/necta/2026/file.pdf
         */

        return String(file).replace(/^\/+/, "");
    }

    /* =====================================================
       UTILITIES
    ===================================================== */

    function normalize(value) {

        return String(value == null ? "" : value)
            .trim()
            .toLowerCase();
    }

    function unique(array) {

        return Array.from(new Set(array));
    }

    function escapeHTML(value) {

        return String(value == null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function scrollToSection(element) {

        if (!element) return;

        setTimeout(function () {

            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);
    }

    function scrollToResults() {

        if (!resultsSection) return;

        setTimeout(function () {

            resultsSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);
    }

})();
