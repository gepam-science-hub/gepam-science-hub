/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS SYSTEM
   =========================================================

   SYSTEM:

   Past Papers
       ↓
   Form
       ↓
   Physics / Chemistry
       ↓
   Exam Type
       ↓
   Year
       ↓
   Region
       ↓
   Paper Chain
       ↓
   Open PDF

   DATA SOURCE:
   data.js

   Variables used directly:
   - pastPaperConfig
   - pastPapers
========================================================= */


document.addEventListener("DOMContentLoaded", function () {

    const content = document.getElementById("paperContent");
    const breadcrumb = document.getElementById("selectionBreadcrumb");

    let selected = {
        form: null,
        subject: null,
        type: null,
        year: null,
        region: null
    };


    /* =====================================================
       UTILITY FUNCTIONS
    ===================================================== */

    function escapeHTML(value) {

        if (value === null || value === undefined) {
            return "";
        }

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    function formatName(value) {

        if (!value) {
            return "";
        }

        const specialNames = {
            "dar_es_salaam": "Dar es Salaam",
            "pre_necta": "Pre-NECTA",
            "acsee": "ACSEE",
            "ftna": "FTNA",
            "necta": "NECTA"
        };

        if (specialNames[value]) {
            return specialNames[value];
        }

        return value
            .replace(/_/g, " ")
            .replace(/\b\w/g, function (letter) {
                return letter.toUpperCase();
            });
    }


    function formatSubject(subject) {

        if (subject === "physics") {
            return "Physics";
        }

        if (subject === "chemistry") {
            return "Chemistry";
        }

        return formatName(subject);
    }


    function formatExamType(type) {

        const names = {
            "midterm": "Midterm Examination",
            "terminal": "Terminal Examination",
            "annual": "Annual Examination",
            "joint": "Joint Examination",
            "mock": "Mock Examination",
            "pre_necta": "Pre-NECTA Examination",
            "necta": "NECTA Examination",
            "acsee": "ACSEE Examination",
            "ftna": "FTNA Examination"
        };

        return names[type] || formatName(type);
    }


    function getCurrentPapers() {

        if (!selected.form || !selected.subject) {
            return [];
        }

        if (
            !pastPapers[selected.form] ||
            !pastPapers[selected.form][selected.subject]
        ) {
            return [];
        }

        return pastPapers[selected.form][selected.subject];
    }


    /* =====================================================
       PROGRESS
    ===================================================== */

    function updateProgress(step) {

        document.querySelectorAll(".progress-step").forEach(function (item) {

            const itemStep = Number(item.dataset.step);

            item.classList.remove("active");
            item.classList.remove("completed");

            if (itemStep === step) {
                item.classList.add("active");
            }

            if (itemStep < step) {
                item.classList.add("completed");
            }
        });
    }


    /* =====================================================
       BREADCRUMB
    ===================================================== */

    function updateBreadcrumb() {

        let items = ["Past Papers"];

        if (selected.form) {
            items.push(formatName(selected.form));
        }

        if (selected.subject) {
            items.push(formatSubject(selected.subject));
        }

        if (selected.type) {
            items.push(formatExamType(selected.type));
        }

        if (selected.year) {
            items.push(String(selected.year));
        }

        if (selected.region) {
            items.push(formatName(selected.region));
        }

        breadcrumb.innerHTML = items
            .map(function (item, index) {

                if (index === 0) {
                    return `<span>${escapeHTML(item)}</span>`;
                }

                return `
                    <span class="breadcrumb-arrow">›</span>
                    <span>${escapeHTML(item)}</span>
                `;

            })
            .join("");
    }


    /* =====================================================
       STEP 1
       FORM
    ===================================================== */

    function showForms() {

        selected.subject = null;
        selected.type = null;
        selected.year = null;
        selected.region = null;

        updateProgress(1);
        updateBreadcrumb();

        let html = `
            <div class="selection-heading">
                <span class="selection-icon">📚</span>

                <div>
                    <h3>Select Form</h3>
                    <p>
                        Choose the class level for the past paper.
                    </p>
                </div>
            </div>

            <div class="selection-grid form-grid">
        `;


        for (let i = 1; i <= 6; i++) {

            const form = "form" + i;

            html += `
                <button
                    class="selection-card form-card"
                    data-form="${form}"
                    type="button"
                >

                    <span class="card-number">
                        ${i}
                    </span>

                    <span class="card-title">
                        Form ${i}
                    </span>

                    <span class="card-arrow">
                        →
                    </span>

                </button>
            `;
        }


        html += `</div>`;

        content.innerHTML = html;


        document.querySelectorAll("[data-form]").forEach(function (button) {

            button.addEventListener("click", function () {

                selected.form = this.dataset.form;

                showSubjects();

            });

        });
    }


    /* =====================================================
       STEP 2
       SUBJECT
    ===================================================== */

    function showSubjects() {

        selected.type = null;
        selected.year = null;
        selected.region = null;

        updateProgress(2);
        updateBreadcrumb();

        const config = pastPaperConfig[selected.form];

        let subjects = config && Array.isArray(config.subjects)
            ? config.subjects
            : ["physics", "chemistry"];


        let html = `
            <div class="selection-heading">

                <span class="selection-icon">🔬</span>

                <div>
                    <h3>
                        Form ${selected.form.replace("form", "")}
                    </h3>

                    <p>
                        Choose a subject.
                    </p>
                </div>

            </div>

            <div class="selection-grid subject-grid">
        `;


        subjects.forEach(function (subject) {

            html += `
                <button
                    class="selection-card subject-card ${subject}"
                    data-subject="${subject}"
                    type="button"
                >

                    <span class="subject-icon">
                        ${subject === "physics" ? "⚛️" : "🧪"}
                    </span>

                    <span class="card-title">
                        ${escapeHTML(formatSubject(subject))}
                    </span>

                    <span class="card-arrow">
                        →
                    </span>

                </button>
            `;

        });


        html += `</div>`;


        html += `
            <button
                class="back-button"
                id="backToForms"
                type="button"
            >
                ← Back to Forms
            </button>
        `;


        content.innerHTML = html;


        document.querySelectorAll("[data-subject]").forEach(function (button) {

            button.addEventListener("click", function () {

                selected.subject = this.dataset.subject;

                showExamTypes();

            });

        });


        document
            .getElementById("backToForms")
            .addEventListener("click", showForms);
    }


    /* =====================================================
       STEP 3
       EXAM TYPE
    ===================================================== */

    function showExamTypes() {

        selected.year = null;
        selected.region = null;

        updateProgress(3);
        updateBreadcrumb();


        const config = pastPaperConfig[selected.form];

        let types = config && Array.isArray(config.types)
            ? config.types
            : [];


        /*
           Only show exam types which actually have papers
           for this subject.
        */

        const papers = getCurrentPapers();

        const availableTypes = types.filter(function (type) {

            return papers.some(function (paper) {

                return paper.type === type;

            });

        });


        let html = `
            <div class="selection-heading">

                <span class="selection-icon">📝</span>

                <div>
                    <h3>Exam Type</h3>

                    <p>
                        Choose the type of examination.
                    </p>
                </div>

            </div>

            <div class="selection-grid type-grid">
        `;


        availableTypes.forEach(function (type) {

            const count = papers.filter(function (paper) {

                return paper.type === type;

            }).length;


            html += `
                <button
                    class="selection-card type-card"
                    data-type="${escapeHTML(type)}"
                    type="button"
                >

                    <span class="type-icon">
                        📄
                    </span>

                    <span class="card-info">

                        <strong>
                            ${escapeHTML(formatExamType(type))}
                        </strong>

                        <small>
                            ${count} paper${count !== 1 ? "s" : ""}
                        </small>

                    </span>

                    <span class="card-arrow">
                        →
                    </span>

                </button>
            `;

        });


        html += `</div>`;


        if (availableTypes.length === 0) {

            html += `
                <div class="empty-state">

                    <div class="empty-icon">📭</div>

                    <h3>No papers available</h3>

                    <p>
                        There are currently no papers for
                        this subject in this form.
                    </p>

                </div>
            `;
        }


        html += `
            <button
                class="back-button"
                id="backToSubjects"
                type="button"
            >
                ← Back to Subjects
            </button>
        `;


        content.innerHTML = html;


        document.querySelectorAll("[data-type]").forEach(function (button) {

            button.addEventListener("click", function () {

                selected.type = this.dataset.type;

                showYears();

            });

        });


        document
            .getElementById("backToSubjects")
            .addEventListener("click", showSubjects);
    }


    /* =====================================================
       STEP 4
       YEAR
    ===================================================== */

    function showYears() {

        selected.region = null;

        updateProgress(4);
        updateBreadcrumb();


        const papers = getCurrentPapers().filter(function (paper) {

            return paper.type === selected.type;

        });


        const years = [...new Set(
            papers.map(function (paper) {
                return Number(paper.year);
            })
        )].sort(function (a, b) {

            return b - a;

        });


        let html = `
            <div class="selection-heading">

                <span class="selection-icon">📅</span>

                <div>
                    <h3>Select Year</h3>

                    <p>
                        Choose the examination year.
                    </p>
                </div>

            </div>

            <div class="selection-grid year-grid">
        `;


        years.forEach(function (year) {

            const count = papers.filter(function (paper) {

                return Number(paper.year) === Number(year);

            }).length;


            html += `
                <button
                    class="selection-card year-card"
                    data-year="${year}"
                    type="button"
                >

                    <span class="year-number">
                        ${year}
                    </span>

                    <span class="year-count">
                        ${count}
                        paper${count !== 1 ? "s" : ""}
                    </span>

                    <span class="card-arrow">
                        →
                    </span>

                </button>
            `;

        });


        html += `</div>`;


        if (years.length === 0) {

            html += `
                <div class="empty-state">

                    <div class="empty-icon">📭</div>

                    <h3>No years available</h3>

                </div>
            `;
        }


        html += `
            <button
                class="back-button"
                id="backToTypes"
                type="button"
            >
                ← Back to Exam Type
            </button>
        `;


        content.innerHTML = html;


        document.querySelectorAll("[data-year]").forEach(function (button) {

            button.addEventListener("click", function () {

                selected.year = Number(this.dataset.year);

                showRegions();

            });

        });


        document
            .getElementById("backToTypes")
            .addEventListener("click", showExamTypes);
    }


    /* =====================================================
       STEP 5
       REGION
    ===================================================== */

    function showRegions() {

        updateProgress(5);
        updateBreadcrumb();


        const papers = getCurrentPapers().filter(function (paper) {

            return (
                paper.type === selected.type &&
                Number(paper.year) === Number(selected.year)
            );

        });


        const regions = [...new Set(
            papers.map(function (paper) {
                return paper.region;
            })
        )].sort();


        let html = `
            <div class="selection-heading">

                <span class="selection-icon">📍</span>

                <div>
                    <h3>Select Region / Source</h3>

                    <p>
                        Choose the region or examination source.
                    </p>
                </div>

            </div>

            <div class="selection-grid region-grid">
        `;


        regions.forEach(function (region) {

            const count = papers.filter(function (paper) {

                return paper.region === region;

            }).length;


            html += `
                <button
                    class="selection-card region-card"
                    data-region="${escapeHTML(region)}"
                    type="button"
                >

                    <span class="region-icon">
                        📍
                    </span>

                    <span class="card-info">

                        <strong>
                            ${escapeHTML(formatName(region))}
                        </strong>

                        <small>
                            ${count}
                            paper${count !== 1 ? "s" : ""}
                        </small>

                    </span>

                    <span class="card-arrow">
                        →
                    </span>

                </button>
            `;

        });


        html += `</div>`;


        if (regions.length === 0) {

            html += `
                <div class="empty-state">

                    <div class="empty-icon">📭</div>

                    <h3>No region available</h3>

                </div>
            `;
        }


        html += `
            <button
                class="back-button"
                id="backToYears"
                type="button"
            >
                ← Back to Years
            </button>
        `;


        content.innerHTML = html;


        document.querySelectorAll("[data-region]").forEach(function (button) {

            button.addEventListener("click", function () {

                selected.region = this.dataset.region;

                showPapers();

            });

        });


        document
            .getElementById("backToYears")
            .addEventListener("click", showYears);
    }


    /* =====================================================
       STEP 6
       PAPER CHAIN
    ===================================================== */

    function showPapers() {

        updateProgress(6);
        updateBreadcrumb();


        /*
           THIS IS THE CORE FILTER.

           We use the exact data structure supplied
           in data.js:

           pastPapers
             ↓
           form
             ↓
           subject
             ↓
           array of papers
        */

        const papers = getCurrentPapers().filter(function (paper) {

            return (
                paper.type === selected.type &&
                Number(paper.year) === Number(selected.year) &&
                paper.region === selected.region
            );

        });


        let html = `
            <div class="selection-heading">

                <span class="selection-icon">📑</span>

                <div>
                    <h3>Paper Chain</h3>

                    <p>
                        Select a paper below to open the PDF.
                    </p>
                </div>

            </div>
        `;


        if (papers.length === 0) {

            html += `
                <div class="empty-state">

                    <div class="empty-icon">📭</div>

                    <h3>No paper found</h3>

                    <p>
                        No paper matches the selected
                        Form, Subject, Exam Type, Year
                        and Region.
                    </p>

                </div>
            `;

        } else {

            html += `
                <div class="paper-chain">

                    <div class="chain-header">

                        <div>
                            <strong>
                                ${escapeHTML(formatSubject(selected.subject))}
                            </strong>

                            <span>•</span>

                            <strong>
                                ${escapeHTML(formatExamType(selected.type))}
                            </strong>

                            <span>•</span>

                            <strong>
                                ${selected.year}
                            </strong>

                            <span>•</span>

                            <strong>
                                ${escapeHTML(formatName(selected.region))}
                            </strong>
                        </div>

                        <span class="paper-total">
                            ${papers.length}
                            paper${papers.length !== 1 ? "s" : ""}
                        </span>

                    </div>
            `;


            papers.forEach(function (paper, index) {

                html += `
                    <div class="paper-chain-item">

                        <div class="paper-chain-number">
                            ${index + 1}
                        </div>

                        <div class="paper-chain-line"></div>

                        <div class="paper-info">

                            <h4>
                                ${escapeHTML(paper.title)}
                            </h4>

                            <div class="paper-meta">

                                <span>
                                    📚
                                    ${escapeHTML(
                                        formatSubject(selected.subject)
                                    )}
                                </span>

                                <span>
                                    📅
                                    ${escapeHTML(String(paper.year))}
                                </span>

                                <span>
                                    📍
                                    ${escapeHTML(
                                        formatName(paper.region)
                                    )}
                                </span>

                            </div>

                        </div>

                        <div class="paper-action">

                            <a
                                class="open-pdf-button"
                                href="${escapeHTML(paper.file)}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>📄</span>
                                Fungua PDF
                            </a>

                        </div>

                    </div>
                `;

            });


            html += `</div>`;
        }


        html += `
            <div class="paper-actions-bottom">

                <button
                    class="back-button"
                    id="backToRegions"
                    type="button"
                >
                    ← Back to Regions
                </button>

                <button
                    class="restart-button"
                    id="restartPapers"
                    type="button"
                >
                    ↻ Start Again
                </button>

            </div>
        `;


        content.innerHTML = html;


        const backButton =
            document.getElementById("backToRegions");

        if (backButton) {

            backButton.addEventListener("click", showRegions);

        }


        const restartButton =
            document.getElementById("restartPapers");

        if (restartButton) {

            restartButton.addEventListener("click", showForms);

        }
    }


    /* =====================================================
       START SYSTEM
    ===================================================== */

    showForms();

});
