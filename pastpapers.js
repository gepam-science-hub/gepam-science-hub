// ============================================================
// GEPAM SCIENCE HUB
// PAST PAPERS NAVIGATION ENGINE
//
// FLOW:
//
// Past Papers
//     ↓
// Form
//     ↓
// Subject
//     ↓
// Exam Type
//     ↓
// Year
//     ↓
// Region / School
//     ↓
// Paper
//     ↓
// Open PDF
//
// DATA SOURCE:
// data.js
// ============================================================

(function () {

    "use strict";

    // ------------------------------------------------------------
    // GLOBAL STATE
    // ------------------------------------------------------------

    let currentForm = null;
    let currentSubject = null;
    let currentType = null;
    let currentYear = null;
    let currentRegion = null;
    let currentSchool = null;

    const content = document.getElementById("pastPaperContent");
    const breadcrumb = document.getElementById("breadcrumb");


    // ------------------------------------------------------------
    // CHECK DATA
    // ------------------------------------------------------------

    if (
        typeof pastPaperConfig === "undefined" ||
        typeof pastPapers === "undefined"
    ) {

        content.innerHTML = `
            <div class="error-message">
                <strong>⚠️ Past paper data haijapakiwa.</strong><br><br>

                Hakikisha kwamba:
                <br>1. <strong>data.js</strong> ipo kwenye folder moja na pastpapers.html
                <br>2. <strong>pastpapers.js</strong> imewekwa baada ya data.js
                <br>3. data.js ina <strong>pastPaperConfig</strong> na <strong>pastPapers</strong>.
            </div>
        `;

        return;
    }


    // ------------------------------------------------------------
    // HELPER: FORMAT NAME
    // ------------------------------------------------------------

    function formatName(value) {

        if (!value) return "";

        const specialNames = {
            "dar_es_salaam": "Dar es Salaam",
            "pre_necta": "Pre-NECTA",
            "acsee": "ACSEE",
            "ftna": "FTNA"
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


    // ------------------------------------------------------------
    // UPDATE BREADCRUMB
    // ------------------------------------------------------------

    function updateBreadcrumb() {

        const items = ["Past Papers"];

        if (currentForm) {
            items.push(formatName(currentForm));
        }

        if (currentSubject) {
            items.push(formatName(currentSubject));
        }

        if (currentType) {
            items.push(formatName(currentType));
        }

        if (currentYear) {
            items.push(String(currentYear));
        }

        if (currentRegion) {
            items.push(formatName(currentRegion));
        }

        if (currentSchool) {
            items.push(currentSchool);
        }

        breadcrumb.innerHTML = items.map(function (item, index) {

            const isLast = index === items.length - 1;

            return `
                <span class="${isLast ? "active" : ""}">
                    ${escapeHTML(item)}
                </span>
                ${!isLast ? "<span>›</span>" : ""}
            `;

        }).join("");
    }


    // ------------------------------------------------------------
    // ESCAPE HTML
    // ------------------------------------------------------------

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    // ------------------------------------------------------------
    // BUTTON CREATOR
    // ------------------------------------------------------------

    function createChoice(title, icon, callback) {

        const button = document.createElement("button");

        button.className = "choice-card";

        button.innerHTML = `
            <span class="choice-icon">${icon}</span>
            ${escapeHTML(title)}
        `;

        button.addEventListener("click", callback);

        return button;
    }


    // ------------------------------------------------------------
    // RENDER CHOICES
    // ------------------------------------------------------------

    function renderChoices(title, choices, icon) {

        content.innerHTML = "";

        updateBreadcrumb();

        const heading = document.createElement("h2");

        heading.className = "step-title";

        heading.textContent = title;

        content.appendChild(heading);


        const grid = document.createElement("div");

        grid.className = "choice-grid";


        choices.forEach(function (choice) {

            grid.appendChild(
                createChoice(
                    choice.label,
                    choice.icon || icon,
                    choice.action
                )
            );

        });


        content.appendChild(grid);
    }


    // ------------------------------------------------------------
    // BACK BUTTON
    // ------------------------------------------------------------

    function addBackButton(callback) {

        const button = document.createElement("button");

        button.className = "back-button";

        button.innerHTML = "← Back";

        button.addEventListener("click", callback);

        content.appendChild(button);
    }


    // ============================================================
    // STEP 1
    // FORM 1 - FORM 6
    // ============================================================

    function showForms() {

        currentForm = null;
        currentSubject = null;
        currentType = null;
        currentYear = null;
        currentRegion = null;
        currentSchool = null;

        const forms = Object.keys(pastPaperConfig);

        const choices = forms.map(function (form) {

            return {
                label: formatName(form),
                icon: "📚",
                action: function () {
                    selectForm(form);
                }
            };

        });


        renderChoices(
            "Choose Form",
            choices,
            "📚"
        );
    }


    // ============================================================
    // STEP 2
    // SUBJECT
    // ============================================================

    function selectForm(form) {

        currentForm = form;

        currentSubject = null;
        currentType = null;
        currentYear = null;
        currentRegion = null;
        currentSchool = null;

        const config = pastPaperConfig[form];

        if (!config || !Array.isArray(config.subjects)) {

            showEmpty("Hakuna subjects zilizowekwa kwa " + formatName(form));

            return;
        }


        const choices = config.subjects.map(function (subject) {

            return {
                label: formatName(subject),
                icon: subject === "physics" ? "⚛️" : "🧪",
                action: function () {
                    selectSubject(subject);
                }
            };

        });


        renderChoices(
            formatName(form) + " → Choose Subject",
            choices,
            "📘"
        );


        addBackButton(showForms);
    }


    // ============================================================
    // STEP 3
    // EXAM TYPE
    // ============================================================

    function selectSubject(subject) {

        currentSubject = subject;

        currentType = null;
        currentYear = null;
        currentRegion = null;
        currentSchool = null;

        const config = pastPaperConfig[currentForm];

        if (!config || !Array.isArray(config.types)) {

            showEmpty("Hakuna exam types zilizowekwa.");

            return;
        }


        /*
         * TUNACHUKUA TYPES ZILIZOWEKWA KWENYE data.js
         *
         * Form 6:
         * acsee
         * mock
         * pre_necta
         * joint
         */

        const choices = config.types.map(function (type) {

            return {
                label: formatName(type),
                icon: getTypeIcon(type),
                action: function () {
                    selectType(type);
                }
            };

        });


        renderChoices(
            formatName(currentForm) +
            " → " +
            formatName(currentSubject) +
            " → Exam Type",

            choices,

            "📝"
        );


        addBackButton(function () {
            selectForm(currentForm);
        });
    }


    // ------------------------------------------------------------
    // EXAM TYPE ICON
    // ------------------------------------------------------------

    function getTypeIcon(type) {

        const icons = {
            "mock": "📝",
            "joint": "🤝",
            "pre_necta": "📋",
            "necta": "🏛️",
            "acsee": "🎓",
            "ftna": "📄",
            "annual": "📚",
            "terminal": "📑",
            "midterm": "📘"
        };

        return icons[type] || "📄";
    }


    // ============================================================
    // STEP 4
    // YEAR
    // ============================================================

    function selectType(type) {

        currentType = type;

        currentYear = null;
        currentRegion = null;
        currentSchool = null;

        const papers = getCurrentPapers();


        const years = uniqueSorted(
            papers.map(function (paper) {
                return paper.year;
            })
        );


        if (years.length === 0) {

            showEmpty(
                "Hakuna papers za " +
                formatName(currentForm) +
                " " +
                formatName(currentSubject) +
                " " +
                formatName(currentType)
            );

            return;
        }


        const choices = years.map(function (year) {

            return {
                label: String(year),
                icon: "📅",
                action: function () {
                    selectYear(year);
                }
            };

        });


        renderChoices(
            formatName(currentForm) +
            " → " +
            formatName(currentSubject) +
            " → " +
            formatName(currentType) +
            " → Year",

            choices,

            "📅"
        );


        addBackButton(function () {
            selectSubject(currentSubject);
        });
    }


    // ============================================================
    // STEP 5
    // REGION / SCHOOL
    // ============================================================

    function selectYear(year) {

        currentYear = year;

        currentRegion = null;
        currentSchool = null;

        const papers = getCurrentPapers().filter(function (paper) {

            return Number(paper.year) === Number(currentYear);

        });


        if (papers.length === 0) {

            showEmpty("Hakuna papers kwa mwaka " + year);

            return;
        }


        /*
         * REGIONS
         */

        const regions = unique(
            papers
                .map(function (paper) {
                    return paper.region;
                })
                .filter(Boolean)
        );


        /*
         * SCHOOLS
         *
         * Ikiwa baadaye utaongeza:
         *
         * school: "Jangwani Secondary School"
         *
         * mfumo utaweza kuitumia.
         */

        const schools = unique(
            papers
                .map(function (paper) {
                    return paper.school;
                })
                .filter(Boolean)
        );


        const choices = [];


        regions.forEach(function (region) {

            choices.push({

                label: formatName(region),

                icon: "📍",

                action: function () {
                    selectRegion(region);
                }

            });

        });


        /*
         * Kama kuna school data
         */

        schools.forEach(function (school) {

            choices.push({

                label: school,

                icon: "🏫",

                action: function () {

                    currentSchool = school;

                    currentRegion = null;

                    showPapers();

                }

            });

        });


        if (choices.length === 0) {

            showPapers();

            return;
        }


        renderChoices(
            formatName(currentForm) +
            " → " +
            formatName(currentSubject) +
            " → " +
            formatName(currentType) +
            " → " +
            currentYear +
            " → Region / School",

            choices,

            "📍"
        );


        addBackButton(function () {
            selectType(currentType);
        });
    }


    // ============================================================
    // REGION SELECTED
    // ============================================================

    function selectRegion(region) {

        currentRegion = region;

        currentSchool = null;

        showPapers();
    }


    // ============================================================
    // STEP 6
    // PAPER CHAIN
    // ============================================================

    function showPapers() {

        const papers = getCurrentPapers().filter(function (paper) {

            if (Number(paper.year) !== Number(currentYear)) {
                return false;
            }


            if (currentRegion) {

                if (paper.region !== currentRegion) {
                    return false;
                }

            }


            if (currentSchool) {

                if (paper.school !== currentSchool) {
                    return false;
                }

            }


            return true;

        });


        content.innerHTML = "";

        updateBreadcrumb();


        const heading = document.createElement("h2");

        heading.className = "step-title";

        heading.textContent = "Available Papers";

        content.appendChild(heading);


        if (papers.length === 0) {

            showEmpty(
                "Hakuna paper iliyopatikana kwenye uchaguzi huu."
            );

            addBackButton(function () {

                selectYear(currentYear);

            });

            return;
        }


        const list = document.createElement("div");

        list.className = "paper-list";


        papers.forEach(function (paper) {

            const card = document.createElement("div");

            card.className = "paper-card";


            const info = document.createElement("div");

            info.className = "paper-info";


            let extraInfo = "";

            if (paper.school) {

                extraInfo += `
                    <p>🏫 School: ${escapeHTML(paper.school)}</p>
                `;

            }


            info.innerHTML = `
                <h3>${escapeHTML(
                    paper.title || "Past Paper"
                )}</h3>

                <p>📚 ${escapeHTML(
                    formatName(currentSubject)
                )}</p>

                <p>📝 ${escapeHTML(
                    formatName(currentType)
                )}</p>

                <p>📅 ${escapeHTML(
                    paper.year
                )}</p>

                <p>📍 ${escapeHTML(
                    formatName(paper.region || "")
                )}</p>

                ${extraInfo}
            `;


            const openButton = document.createElement("a");

            openButton.className = "open-pdf";

            openButton.href = paper.file;

            openButton.target = "_blank";

            openButton.rel = "noopener";

            openButton.textContent = "📖 Fungua PDF";


            card.appendChild(info);

            card.appendChild(openButton);

            list.appendChild(card);

        });


        content.appendChild(list);


        addBackButton(function () {

            selectYear(currentYear);

        });
    }


    // ============================================================
    // GET CURRENT PAPERS
    // ============================================================

    function getCurrentPapers() {

        if (!currentForm) {
            return [];
        }

        if (!currentSubject) {
            return [];
        }

        if (!pastPapers[currentForm]) {
            return [];
        }

        if (!Array.isArray(
            pastPapers[currentForm][currentSubject]
        )) {
            return [];
        }

        return pastPapers[currentForm][currentSubject];
    }


    // ============================================================
    // UNIQUE
    // ============================================================

    function unique(array) {

        return [...new Set(array)];

    }


    // ============================================================
    // UNIQUE SORTED
    // ============================================================

    function uniqueSorted(array) {

        return unique(array)
            .sort(function (a, b) {

                return Number(b) - Number(a);

            });

    }


    // ============================================================
    // EMPTY
    // ============================================================

    function showEmpty(message) {

        content.innerHTML = `
            <div class="empty-message">
                <strong>📭 No past paper found.</strong>
                <br><br>
                ${escapeHTML(message)}
            </div>
        `;
    }


    // ============================================================
    // START SYSTEM
    // ============================================================

    showForms();

})();
