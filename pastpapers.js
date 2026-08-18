// ============================================================
// GEPAM SCIENCE HUB
// PAST PAPERS NAVIGATION ENGINE
//
// Flow:
//
// Past Papers
//      ↓
// Form
//      ↓
// Subject
//      ↓
// Exam Type
//      ↓
// Year
//      ↓
// Region / School
//      ↓
// Paper Chain
//      ↓
// Open PDF
//
// Uses:
//   pastPaperConfig
//   pastPapers
// from data.js
// ============================================================


document.addEventListener("DOMContentLoaded", function () {

    const app = document.getElementById("pastPaperApp");
    const breadcrumb = document.getElementById("breadcrumb");


    // ---------------------------------------------------------
    // SECURITY CHECK
    // ---------------------------------------------------------

    if (!app) {
        console.error("GEPAM ERROR: #pastPaperApp haipo kwenye HTML.");
        return;
    }


    if (typeof pastPaperConfig === "undefined") {

        app.innerHTML = `
            <div class="error-box">
                <h3>⚠️ Data Error</h3>
                <p>
                    Past paper configuration haijapatikana.
                </p>
                <p>
                    Hakikisha <strong>data.js</strong>
                    imewekwa kabla ya <strong>pastpapers.js</strong>.
                </p>
            </div>
        `;

        console.error(
            "GEPAM ERROR: pastPaperConfig haijapatikana."
        );

        return;
    }


    if (typeof pastPapers === "undefined") {

        app.innerHTML = `
            <div class="error-box">
                <h3>⚠️ Data Error</h3>
                <p>
                    Past paper database haijapatikana.
                </p>
            </div>
        `;

        console.error(
            "GEPAM ERROR: pastPapers haijapatikana."
        );

        return;
    }


    // ---------------------------------------------------------
    // STATE
    // ---------------------------------------------------------

    let currentForm = null;
    let currentSubject = null;
    let currentType = null;
    let currentYear = null;
    let currentRegion = null;


    // =========================================================
    // INITIAL PAGE
    // =========================================================

    showForms();


    // =========================================================
    // FORM
    // =========================================================

    function showForms() {

        resetState();

        updateBreadcrumb([
            {
                label: "Past Papers",
                action: showForms
            }
        ]);

        const forms = Object.keys(pastPaperConfig);

        if (!forms.length) {

            showEmpty(
                "No Forms Available",
                "No past paper configuration was found."
            );

            return;
        }


        app.innerHTML = `

            <div class="step-heading">

                <span class="step-number">1</span>

                <div>
                    <h3>Choose Form</h3>

                    <p>
                        Select the class whose past papers you want.
                    </p>
                </div>

            </div>


            <div class="choice-grid">

                ${forms.map(form => `

                    <button
                        class="choice-card form-card"
                        data-form="${form}">

                        <span class="choice-icon">📚</span>

                        <span class="choice-title">
                            ${formatForm(form)}
                        </span>

                        <span class="choice-arrow">
                            →
                        </span>

                    </button>

                `).join("")}

            </div>
        `;


        document
            .querySelectorAll("[data-form]")
            .forEach(button => {

                button.addEventListener("click", function () {

                    currentForm = this.dataset.form;

                    showSubjects();

                });

            });

    }


    // =========================================================
    // SUBJECT
    // =========================================================

    function showSubjects() {

        const config = pastPaperConfig[currentForm];

        if (!config || !config.subjects) {

            showEmpty(
                "No Subjects Available",
                "Hakuna subjects zilizowekwa kwa kidato hiki."
            );

            return;
        }


        updateBreadcrumb([

            {
                label: "Past Papers",
                action: showForms
            },

            {
                label: formatForm(currentForm)
            }

        ]);


        app.innerHTML = `

            <div class="step-heading">

                <span class="step-number">2</span>

                <div>

                    <h3>
                        ${formatForm(currentForm)}
                    </h3>

                    <p>
                        Choose Subject
                    </p>

                </div>

            </div>


            <div class="choice-grid subject-grid">

                ${config.subjects.map(subject => `

                    <button
                        class="choice-card subject-card"
                        data-subject="${subject}">

                        <span class="choice-icon">
                            ${subjectIcon(subject)}
                        </span>

                        <span class="choice-title">
                            ${formatSubject(subject)}
                        </span>

                        <span class="choice-arrow">
                            →
                        </span>

                    </button>

                `).join("")}

            </div>


            <button
                class="back-button"
                id="backToForms">

                ← Back to Forms

            </button>
        `;


        document
            .querySelectorAll("[data-subject]")
            .forEach(button => {

                button.addEventListener("click", function () {

                    currentSubject = this.dataset.subject;

                    showExamTypes();

                });

            });


        document
            .getElementById("backToForms")
            .addEventListener("click", showForms);

    }


    // =========================================================
    // EXAM TYPE
    // =========================================================

    function showExamTypes() {

        const config = pastPaperConfig[currentForm];

        if (!config || !config.types) {

            showEmpty(
                "No Exam Types Available",
                "Hakuna aina za mitihani zilizowekwa."
            );

            return;
        }


        updateBreadcrumb([

            {
                label: "Past Papers",
                action: showForms
            },

            {
                label: formatForm(currentForm),
                action: showSubjects
            },

            {
                label: formatSubject(currentSubject)
            }

        ]);


        app.innerHTML = `

            <div class="step-heading">

                <span class="step-number">3</span>

                <div>

                    <h3>
                        ${formatSubject(currentSubject)}
                    </h3>

                    <p>
                        Choose Exam Type
                    </p>

                </div>

            </div>


            <div class="choice-grid">

                ${config.types.map(type => `

                    <button
                        class="choice-card"
                        data-type="${type}">

                        <span class="choice-icon">
                            ${typeIcon(type)}
                        </span>

                        <span class="choice-title">
                            ${formatType(type)}
                        </span>

                        <span class="choice-arrow">
                            →
                        </span>

                    </button>

                `).join("")}

            </div>


            <button
                class="back-button"
                id="backToSubjects">

                ← Back to Subjects

            </button>
        `;


        document
            .querySelectorAll("[data-type]")
            .forEach(button => {

                button.addEventListener("click", function () {

                    currentType = this.dataset.type;

                    showYears();

                });

            });


        document
            .getElementById("backToSubjects")
            .addEventListener("click", showSubjects);

    }


    // =========================================================
    // YEAR
    // =========================================================

    function showYears() {

        const papers = getCurrentPapers();


        const years = uniqueSorted(
            papers.map(paper => paper.year)
        );


        updateBreadcrumb([

            {
                label: "Past Papers",
                action: showForms
            },

            {
                label: formatForm(currentForm),
                action: showSubjects
            },

            {
                label: formatSubject(currentSubject),
                action: showExamTypes
            },

            {
                label: formatType(currentType)
            }

        ]);


        if (!years.length) {

            showEmpty(
                "No Years Available",
                "Hakuna mitihani ya aina hii iliyowekwa."
            );

            return;
        }


        app.innerHTML = `

            <div class="step-heading">

                <span class="step-number">4</span>

                <div>

                    <h3>
                        ${formatType(currentType)}
                    </h3>

                    <p>
                        Choose Year
                    </p>

                </div>

            </div>


            <div class="year-grid">

                ${years.map(year => `

                    <button
                        class="year-card"
                        data-year="${year}">

                        📅 ${year}

                    </button>

                `).join("")}

            </div>


            <button
                class="back-button"
                id="backToTypes">

                ← Back to Exam Types

            </button>
        `;


        document
            .querySelectorAll("[data-year]")
            .forEach(button => {

                button.addEventListener("click", function () {

                    currentYear = Number(this.dataset.year);

                    showRegions();

                });

            });


        document
            .getElementById("backToTypes")
            .addEventListener("click", showExamTypes);

    }


    // =========================================================
    // REGION / SCHOOL
    // =========================================================

    function showRegions() {

        const papers = getCurrentPapers()
            .filter(paper =>
                Number(paper.year) === Number(currentYear)
            );


        const regions = unique(
            papers.map(paper => paper.region)
        );


        updateBreadcrumb([

            {
                label: "Past Papers",
                action: showForms
            },

            {
                label: formatForm(currentForm),
                action: showSubjects
            },

            {
                label: formatSubject(currentSubject),
                action: showExamTypes
            },

            {
                label: formatType(currentType),
                action: showYears
            },

            {
                label: currentYear
            }

        ]);


        if (!regions.length) {

            showEmpty(
                "No Regions Available",
                `Hakuna papers za ${currentYear}.`
            );

            return;
        }


        app.innerHTML = `

            <div class="step-heading">

                <span class="step-number">5</span>

                <div>

                    <h3>
                        ${currentYear}
                    </h3>

                    <p>
                        Choose Region / School
                    </p>

                </div>

            </div>


            <div class="choice-grid">

                ${regions.map(region => `

                    <button
                        class="choice-card"
                        data-region="${escapeAttr(region)}">

                        <span class="choice-icon">
                            📍
                        </span>

                        <span class="choice-title">

                            ${formatRegion(region)}

                        </span>

                        <span class="choice-arrow">
                            →
                        </span>

                    </button>

                `).join("")}

            </div>


            <button
                class="back-button"
                id="backToYears">

                ← Back to Years

            </button>
        `;


        document
            .querySelectorAll("[data-region]")
            .forEach(button => {

                button.addEventListener("click", function () {

                    currentRegion = this.dataset.region;

                    showPapers();

                });

            });


        document
            .getElementById("backToYears")
            .addEventListener("click", showYears);

    }


    // =========================================================
    // PAPER CHAIN
    // =========================================================

    function showPapers() {

        const papers = getCurrentPapers()
            .filter(paper =>

                Number(paper.year) === Number(currentYear)

                && String(paper.region).toLowerCase()
                    === String(currentRegion).toLowerCase()

            );


        updateBreadcrumb([

            {
                label: "Past Papers",
                action: showForms
            },

            {
                label: formatForm(currentForm),
                action: showSubjects
            },

            {
                label: formatSubject(currentSubject),
                action: showExamTypes
            },

            {
                label: formatType(currentType),
                action: showYears
            },

            {
                label: currentYear,
                action: showRegions
            },

            {
                label: formatRegion(currentRegion)
            }

        ]);


        if (!papers.length) {

            showEmpty(
                "No Papers Available",
                "Hakuna paper iliyopatikana kwenye selection hii."
            );

            return;
        }


        app.innerHTML = `

            <div class="step-heading">

                <span class="step-number">6</span>

                <div>

                    <h3>
                        ${formatRegion(currentRegion)}
                    </h3>

                    <p>
                        Available Papers
                    </p>

                </div>

            </div>


            <div class="paper-list">

                ${papers.map((paper, index) => `

                    <div class="paper-card">

                        <div class="paper-info">

                            <div class="paper-number">
                                ${index + 1}
                            </div>

                            <div>

                                <h4>
                                    ${escapeHTML(
                                        paper.title || "Past Paper"
                                    )}
                                </h4>

                                <p>

                                    ${formatSubject(currentSubject)}
                                    ·
                                    ${formatType(currentType)}
                                    ·
                                    ${paper.year}

                                </p>

                            </div>

                        </div>


                        <a
                            class="open-paper-button"
                            href="${escapeAttr(paper.file)}"
                            target="_blank"
                            rel="noopener noreferrer">

                            📄 Fungua PDF

                        </a>

                    </div>

                `).join("")}

            </div>


            <button
                class="back-button"
                id="backToRegions">

                ← Back to Regions

            </button>
        `;


        document
            .getElementById("backToRegions")
            .addEventListener("click", showRegions);

    }


    // =========================================================
    // GET CURRENT PAPERS
    // =========================================================

    function getCurrentPapers() {

        if (!pastPapers[currentForm]) {
            return [];
        }

        if (!pastPapers[currentForm][currentSubject]) {
            return [];
        }

        return pastPapers[currentForm][currentSubject]
            .filter(paper =>

                String(paper.type).toLowerCase()
                === String(currentType).toLowerCase()

            );

    }


    // =========================================================
    // EMPTY STATE
    // =========================================================

    function showEmpty(title, message) {

        app.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    📂
                </div>

                <h3>
                    ${title}
                </h3>

                <p>
                    ${message}
                </p>

                <button
                    class="back-button"
                    onclick="location.reload()">

                    ← Start Again

                </button>

            </div>

        `;

    }


    // =========================================================
    // BREADCRUMB
    // =========================================================

    function updateBreadcrumb(items) {

        if (!breadcrumb) return;


        breadcrumb.innerHTML = items.map(
            (item, index) => {

                const isLast =
                    index === items.length - 1;


                if (!isLast && item.action) {

                    return `

                        <button
                            class="breadcrumb-link"
                            data-breadcrumb="${index}">

                            ${escapeHTML(
                                String(item.label)
                            )}

                        </button>

                        <span class="breadcrumb-separator">
                            ›
                        </span>

                    `;

                }


                return `

                    <span
                        class="breadcrumb-current">

                        ${escapeHTML(
                            String(item.label)
                        )}

                    </span>

                `;

            }
        ).join("");


        items.forEach((item, index) => {

            if (!item.action) return;

            const button =
                breadcrumb.querySelector(
                    `[data-breadcrumb="${index}"]`
                );

            if (button) {

                button.addEventListener(
                    "click",
                    item.action
                );

            }

        });

    }


    // =========================================================
    // RESET
    // =========================================================

    function resetState() {

        currentForm = null;
        currentSubject = null;
        currentType = null;
        currentYear = null;
        currentRegion = null;

    }


    // =========================================================
    // HELPERS
    // =========================================================

    function formatForm(form) {

        const number =
            String(form)
                .replace("form", "");

        return `Form ${number}`;

    }


    function formatSubject(subject) {

        if (!subject) return "";

        return subject.charAt(0).toUpperCase()
            + subject.slice(1);

    }


    function formatType(type) {

        const names = {

            "midterm": "Midterm Examination",

            "terminal": "Terminal Examination",

            "annual": "Annual Examination",

            "ftna": "FTNA",

            "joint": "Joint Examination",

            "mock": "Mock Examination",

            "pre_necta": "Pre-NECTA Examination",

            "necta": "NECTA",

            "acsee": "ACSEE"

        };


        return names[type]
            || String(type)
                .replaceAll("_", " ")
                .replace(/\b\w/g, c =>
                    c.toUpperCase()
                );

    }


    function formatRegion(region) {

        const names = {

            "dar_es_salaam": "Dar es Salaam",

            "dodoma": "Dodoma",

            "arusha": "Arusha",

            "mbeya": "Mbeya",

            "kagera": "Kagera",

            "shinyanga": "Shinyanga",

            "necta": "NECTA"

        };


        return names[region]
            || String(region)
                .replaceAll("_", " ")
                .replace(/\b\w/g, c =>
                    c.toUpperCase()
                );

    }


    function subjectIcon(subject) {

        if (subject === "physics") {
            return "⚡";
        }

        if (subject === "chemistry") {
            return "🧪";
        }

        return "📘";

    }


    function typeIcon(type) {

        const icons = {

            "mock": "📝",

            "joint": "🤝",

            "pre_necta": "🎯",

            "acsee": "🏆",

            "necta": "🏛️",

            "annual": "📅",

            "midterm": "📖",

            "terminal": "📚",

            "ftna": "🎓"

        };

        return icons[type] || "📄";

    }


    function unique(array) {

        return [...new Set(array)];

    }


    function uniqueSorted(array) {

        return [...new Set(array)]
            .filter(value =>
                value !== undefined &&
                value !== null
            )
            .sort((a, b) => Number(b) - Number(a));

    }


    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    function escapeAttr(value) {

        return escapeHTML(value);

    }

});
