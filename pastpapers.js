/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS NAVIGATION ENGINE

   FLOW:

   Past Papers
        ↓
   Form
        ↓
   Subject
        ↓
   Exam Type
        ↓
   Year
        ↓
   Region / School
        ↓
   Paper
        ↓
   Open PDF
   ========================================================= */


document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. CHECK DATA.JS
       ===================================================== */

    const content = document.getElementById("stepContent");
    const breadcrumb = document.getElementById("breadcrumb");
    const backBtn = document.getElementById("backBtn");
    const resetBtn = document.getElementById("resetBtn");

    if (!content) {
        console.error("GEPAM: stepContent element not found.");
        return;
    }

    if (
        typeof pastPapers === "undefined" ||
        typeof pastPaperConfig === "undefined"
    ) {

        content.innerHTML = `
            <div class="message-box error-box">
                <div class="big-icon">⚠️</div>

                <h3>Past Papers data haijapatikana</h3>

                <p style="margin-top:8px;">
                    Hakikisha <strong>data.js</strong> imeunganishwa
                    kabla ya <strong>pastpapers.js</strong>.
                </p>
            </div>
        `;

        console.error(
            "GEPAM ERROR: pastPaperConfig au pastPapers haipo. " +
            "Hakikisha data.js imewekwa kabla ya pastpapers.js."
        );

        return;
    }


    /* =====================================================
       2. APPLICATION STATE
       ===================================================== */

    const state = {
        form: null,
        subject: null,
        type: null,
        year: null,
        region: null
    };


    /* =====================================================
       3. HUMAN READABLE NAMES
       ===================================================== */

    const labels = {

        physics: "Physics",

        chemistry: "Chemistry",

        mock: "Mock Examination",

        joint: "Joint Examination",

        pre_necta: "Pre-NECTA Examination",

        acsee: "NECTA / ACSEE",

        ftna: "FTNA",

        midterm: "Midterm Examination",

        terminal: "Terminal Examination",

        annual: "Annual Examination",

        necta: "NECTA",

        form1: "Form 1",

        form2: "Form 2",

        form3: "Form 3",

        form4: "Form 4",

        form5: "Form 5",

        form6: "Form 6",

        dar_es_salaam: "Dar es Salaam",

        dodoma: "Dodoma",

        arusha: "Arusha",

        mbeya: "Mbeya",

        kagera: "Kagera",

        shinyanga: "Shinyanga",

        necta: "NECTA"

    };


    /* =====================================================
       4. ICONS
       ===================================================== */

    const icons = {

        form: "🎓",

        physics: "⚛️",

        chemistry: "🧪",

        mock: "📝",

        joint: "🤝",

        pre_necta: "📘",

        acsee: "🏆",

        ftna: "📋",

        midterm: "📄",

        terminal: "📑",

        annual: "📚",

        year: "📅",

        region: "📍",

        paper: "📄"

    };


    /* =====================================================
       5. HELPERS
       ===================================================== */

    function getLabel(value) {

        if (value === null || value === undefined) {
            return "";
        }

        return labels[value] ||
            String(value)
                .replace(/_/g, " ")
                .replace(/\b\w/g, function (letter) {
                    return letter.toUpperCase();
                });
    }


    function getIcon(value, fallback) {

        return icons[value] || fallback || "📄";
    }


    function escapeHTML(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    function normalize(value) {

        return String(value ?? "")
            .trim()
            .toLowerCase();
    }


    /* =====================================================
       6. GET PAPERS SAFELY
       ===================================================== */

    function getAllPapers(form, subject) {

        if (
            !pastPapers ||
            !pastPapers[form] ||
            !Array.isArray(pastPapers[form][subject])
        ) {
            return [];
        }

        return pastPapers[form][subject];
    }


    /* =====================================================
       7. GET TYPES FROM CONFIG + ACTUAL DATA
       ===================================================== */

    function getAvailableTypes(form, subject) {

        const papers = getAllPapers(form, subject);

        const dataTypes = papers
            .map(function (paper) {
                return paper.type;
            })
            .filter(Boolean);

        const configTypes =
            pastPaperConfig[form] &&
            Array.isArray(pastPaperConfig[form].types)
                ? pastPaperConfig[form].types
                : [];

        /*
         * Combine config + actual data.
         *
         * This prevents a paper from disappearing simply because
         * the configuration forgot to list its type.
         */

        const combined = [
            ...configTypes,
            ...dataTypes
        ];

        return [...new Set(combined)]
            .filter(function (type) {

                return papers.some(function (paper) {

                    return normalize(paper.type) ===
                        normalize(type);

                });

            });
    }


    /* =====================================================
       8. UPDATE BREADCRUMB
       ===================================================== */

    function updateBreadcrumb(stepName) {

        const items = [
            {
                name: "Past Papers",
                value: null
            }
        ];

        if (state.form) {
            items.push({
                name: getLabel(state.form),
                value: "form"
            });
        }

        if (state.subject) {
            items.push({
                name: getLabel(state.subject),
                value: "subject"
            });
        }

        if (state.type) {
            items.push({
                name: getLabel(state.type),
                value: "type"
            });
        }

        if (state.year) {
            items.push({
                name: state.year,
                value: "year"
            });
        }

        if (state.region) {
            items.push({
                name: getLabel(state.region),
                value: "region"
            });
        }

        breadcrumb.innerHTML = items
            .map(function (item, index) {

                const isLast =
                    index === items.length - 1;

                return `
                    ${index > 0
                        ? `<span class="breadcrumb-arrow">›</span>`
                        : ""
                    }

                    <span class="breadcrumb-item ${
                        isLast ? "active" : ""
                    }">
                        ${escapeHTML(item.name)}
                    </span>
                `;

            })
            .join("");

    }


    /* =====================================================
       9. CARD GENERATOR
       ===================================================== */

    function createOptionCard(
        title,
        subtitle,
        icon,
        onclick
    ) {

        return `
            <div
                class="option-card"
                role="button"
                tabindex="0"
                onclick="${onclick}"
                onkeydown="if(event.key==='Enter'||event.key===' ') ${onclick}"
            >

                <div class="option-icon">
                    ${icon}
                </div>

                <div class="option-title">
                    ${escapeHTML(title)}
                </div>

                <div class="option-subtitle">
                    ${escapeHTML(subtitle)}
                </div>

            </div>
        `;
    }


    /* =====================================================
       10. SHOW STEP HEADER
       ===================================================== */

    function stepHeader(
        stepNumber,
        title,
        description
    ) {

        return `
            <div class="step-label">
                STEP ${stepNumber}
            </div>

            <h3 class="step-title">
                ${escapeHTML(title)}
            </h3>

            <p class="step-description">
                ${escapeHTML(description)}
            </p>
        `;
    }


    /* =====================================================
       11. STEP 1 — FORM
       ===================================================== */

    function showForms() {

        state.form = null;
        state.subject = null;
        state.type = null;
        state.year = null;
        state.region = null;

        updateBreadcrumb();

        backBtn.style.display = "none";
        resetBtn.style.display = "none";

        const forms = Object.keys(pastPapers)
            .filter(function (form) {

                return (
                    pastPapers[form] &&
                    typeof pastPapers[form] === "object"
                );

            })
            .sort(function (a, b) {

                const numA = parseInt(
                    a.replace(/\D/g, ""),
                    10
                );

                const numB = parseInt(
                    b.replace(/\D/g, ""),
                    10
                );

                return numA - numB;

            });


        if (!forms.length) {

            content.innerHTML = `
                <div class="message-box">
                    <div class="big-icon">📭</div>

                    <h3>No Forms Available</h3>

                    <p style="margin-top:8px;">
                        No past paper data was found.
                    </p>
                </div>
            `;

            return;
        }


        content.innerHTML =
            stepHeader(
                1,
                "Choose Form",
                "Select the class whose past papers you want."
            )

            + `
                <div class="options-grid">

                    ${
                        forms.map(function (form) {

                            const subjectCount =
                                Object.keys(
                                    pastPapers[form] || {}
                                ).length;

                            return createOptionCard(
                                getLabel(form),
                                `${subjectCount} subject(s) available`,
                                "🎓",
                                `selectForm('${form}')`
                            );

                        }).join("")
                    }

                </div>
            `;


        window.selectForm = selectForm;
    }


    /* =====================================================
       12. STEP 2 — SUBJECT
       ===================================================== */

    function selectForm(form) {

        state.form = form;
        state.subject = null;
        state.type = null;
        state.year = null;
        state.region = null;

        updateBreadcrumb();

        backBtn.style.display = "inline-block";
        resetBtn.style.display = "inline-block";

        const subjects =
            pastPaperConfig[form] &&
            Array.isArray(
                pastPaperConfig[form].subjects
            )
                ? pastPaperConfig[form].subjects
                : Object.keys(
                    pastPapers[form] || {}
                );


        const validSubjects =
            subjects.filter(function (subject) {

                return getAllPapers(
                    form,
                    subject
                ).length > 0;

            });


        if (!validSubjects.length) {

            content.innerHTML = `
                <div class="message-box">
                    <div class="big-icon">📭</div>

                    <h3>No Subjects Available</h3>

                    <p style="margin-top:8px;">
                        Hakuna papers zilizowekwa kwa
                        ${escapeHTML(getLabel(form))}.
                    </p>
                </div>
            `;

            return;
        }


        content.innerHTML =
            stepHeader(
                2,
                `${getLabel(form)} — Choose Subject`,
                "Choose the subject you want to study."
            )

            + `
                <div class="options-grid">

                    ${
                        validSubjects.map(function (subject) {

                            const count =
                                getAllPapers(
                                    form,
                                    subject
                                ).length;

                            return createOptionCard(
                                getLabel(subject),
                                `${count} paper(s) available`,
                                getIcon(subject, "📚"),
                                `selectSubject('${subject}')`
                            );

                        }).join("")
                    }

                </div>
            `;


        window.selectSubject = selectSubject;
    }


    /* =====================================================
       13. STEP 3 — EXAM TYPE
       ===================================================== */

    function selectSubject(subject) {

        state.subject = subject;
        state.type = null;
        state.year = null;
        state.region = null;

        updateBreadcrumb();

        const types =
            getAvailableTypes(
                state.form,
                state.subject
            );


        if (!types.length) {

            content.innerHTML = `
                <div class="message-box">
                    <div class="big-icon">📭</div>

                    <h3>No Exam Types Available</h3>

                    <p style="margin-top:8px;">
                        Hakuna aina ya mtihani
                        kwa ${escapeHTML(
                            getLabel(state.subject)
                        )}.
                    </p>
                </div>
            `;

            return;
        }


        content.innerHTML =
            stepHeader(
                3,
                `${getLabel(state.subject)} — Exam Type`,
                "Choose the type of examination."
            )

            + `
                <div class="options-grid">

                    ${
                        types.map(function (type) {

                            const count =
                                getAllPapers(
                                    state.form,
                                    state.subject
                                )
                                .filter(function (paper) {

                                    return normalize(
                                        paper.type
                                    ) === normalize(type);

                                }).length;

                            return createOptionCard(
                                getLabel(type),
                                `${count} paper(s) available`,
                                getIcon(type, "📝"),
                                `selectType('${type}')`
                            );

                        }).join("")
                    }

                </div>
            `;


        window.selectType = selectType;
    }


    /* =====================================================
       14. STEP 4 — YEAR
       ===================================================== */

    function selectType(type) {

        state.type = type;
        state.year = null;
        state.region = null;

        updateBreadcrumb();

        const papers =
            getAllPapers(
                state.form,
                state.subject
            ).filter(function (paper) {

                return normalize(paper.type) ===
                    normalize(state.type);

            });


        const years = [
            ...new Set(
                papers
                    .map(function (paper) {
                        return paper.year;
                    })
                    .filter(function (year) {
                        return year !== undefined &&
                               year !== null;
                    })
            )
        ].sort(function (a, b) {

            return Number(b) - Number(a);

        });


        if (!years.length) {

            content.innerHTML = `
                <div class="message-box">
                    <div class="big-icon">📭</div>

                    <h3>No Years Available</h3>

                    <p style="margin-top:8px;">
                        Hakuna papers za aina hii.
                    </p>
                </div>
            `;

            return;
        }


        content.innerHTML =
            stepHeader(
                4,
                `${getLabel(state.type)} — Choose Year`,
                "Select the examination year."
            )

            + `
                <div class="options-grid">

                    ${
                        years.map(function (year) {

                            const count =
                                papers.filter(function (paper) {

                                    return Number(
                                        paper.year
                                    ) === Number(year);

                                }).length;

                            return createOptionCard(
                                String(year),
                                `${count} paper(s) available`,
                                "📅",
                                `selectYear('${year}')`
                            );

                        }).join("")
                    }

                </div>
            `;


        window.selectYear = selectYear;
    }


    /* =====================================================
       15. STEP 5 — REGION / SCHOOL
       ===================================================== */

    function selectYear(year) {

        state.year = Number(year);
        state.region = null;

        updateBreadcrumb();

        const papers =
            getAllPapers(
                state.form,
                state.subject
            ).filter(function (paper) {

                return (
                    normalize(paper.type) ===
                        normalize(state.type)
                    &&
                    Number(paper.year) ===
                        Number(state.year)
                );

            });


        /*
         * Group by region.
         *
         * If a paper contains a school property,
         * school information will also be displayed.
         */

        const groups = {};

        papers.forEach(function (paper) {

            const region =
                paper.region ||
                paper.school ||
                "other";

            if (!groups[region]) {
                groups[region] = [];
            }

            groups[region].push(paper);

        });


        const regions = Object.keys(groups);


        if (!regions.length) {

            content.innerHTML = `
                <div class="message-box">
                    <div class="big-icon">📭</div>

                    <h3>No Region / School Available</h3>

                    <p style="margin-top:8px;">
                        Hakuna paper iliyopatikana
                        kwa mwaka ${state.year}.
                    </p>
                </div>
            `;

            return;
        }


        content.innerHTML =
            stepHeader(
                5,
                `Choose Region / School`,
                `Select where the ${state.year} paper comes from.`
            )

            + `
                <div class="options-grid">

                    ${
                        regions.map(function (region) {

                            const count =
                                groups[region].length;

                            const schoolCount =
                                new Set(
                                    groups[region]
                                        .map(function (paper) {
                                            return paper.school;
                                        })
                                        .filter(Boolean)
                                ).size;


                            let subtitle =
                                `${count} paper(s) available`;

                            if (schoolCount > 0) {

                                subtitle +=
                                    ` • ${schoolCount} school(s)`;

                            }


                            return createOptionCard(
                                getLabel(region),
                                subtitle,
                                "📍",
                                `selectRegion('${region}')`
                            );

                        }).join("")
                    }

                </div>
            `;


        window.selectRegion = selectRegion;
    }


    /* =====================================================
       16. STEP 6 — PAPERS / PAPER CHAIN
       ===================================================== */

    function selectRegion(region) {

        state.region = region;

        updateBreadcrumb();

        const papers =
            getAllPapers(
                state.form,
                state.subject
            ).filter(function (paper) {

                return (
                    normalize(paper.type) ===
                        normalize(state.type)
                    &&
                    Number(paper.year) ===
                        Number(state.year)
                    &&
                    normalize(
                        paper.region || "other"
                    ) === normalize(region)
                );

            });


        /*
         * Sort papers naturally:
         *
         * Physics 1
         * Physics 2
         * Physics 3A
         * Physics 3B
         *
         * Chemistry 1
         * Chemistry 2
         * Chemistry 3A
         * Chemistry 3B
         */

        papers.sort(function (a, b) {

            const titleA =
                normalize(a.title);

            const titleB =
                normalize(b.title);


            function paperOrder(title) {

                if (title.includes("3b")) return 4;
                if (title.includes("3a")) return 3;
                if (title.includes("2")) return 2;
                if (title.includes("1")) return 1;

                return 99;
            }


            return paperOrder(titleA) -
                   paperOrder(titleB);

        });


        if (!papers.length) {

            content.innerHTML = `
                <div class="message-box">
                    <div class="big-icon">📭</div>

                    <h3>No Papers Available</h3>

                    <p style="margin-top:8px;">
                        Hakuna PDF iliyopatikana
                        kwa uchaguzi huu.
                    </p>
                </div>
            `;

            return;
        }


        content.innerHTML =
            stepHeader(
                6,
                "Available Papers",
                "Choose the paper you want to open."
            )

            + `
                <div class="papers-list">

                    ${
                        papers.map(function (paper) {

                            return createPaperItem(
                                paper
                            );

                        }).join("")
                    }

                </div>
            `;
    }


    /* =====================================================
       17. PAPER CARD
       ===================================================== */

    function createPaperItem(paper) {

        const title =
            paper.title ||
            "Examination Paper";


        const school =
            paper.school ||
            "";


        const region =
            paper.region
                ? getLabel(paper.region)
                : "";


        const file =
            String(
                paper.file || ""
            ).trim();


        /*
         * Convert path into a safe relative URL.
         */

        const pdfURL =
            createPDFURL(file);


        return `
            <div class="paper-item">

                <div class="paper-info">

                    <div class="paper-title">
                        ${escapeHTML(title)}
                    </div>

                    <div class="paper-meta">

                        <span class="meta-badge">
                            ${escapeHTML(
                                getLabel(state.subject)
                            )}
                        </span>

                        <span class="meta-badge">
                            ${escapeHTML(
                                getLabel(state.type)
                            )}
                        </span>

                        <span class="meta-badge">
                            📅 ${escapeHTML(
                                state.year
                            )}
                        </span>

                        ${
                            region
                                ? `
                                    <span class="meta-badge">
                                        📍 ${escapeHTML(
                                            region
                                        )}
                                    </span>
                                  `
                                : ""
                        }

                        ${
                            school
                                ? `
                                    <span class="meta-badge">
                                        🏫 ${escapeHTML(
                                            school
                                        )}
                                    </span>
                                  `
                                : ""
                        }

                    </div>

                </div>


                ${
                    pdfURL
                        ? `
                            <a
                                class="open-pdf"
                                href="${escapeHTML(pdfURL)}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                📖 Fungua PDF
                            </a>
                          `
                        : `
                            <span
                                style="
                                    color:#b42318;
                                    font-size:12px;
                                    font-weight:bold;
                                "
                            >
                                PDF haijawekwa
                            </span>
                          `
                }

            </div>
        `;
    }


    /* =====================================================
       18. PDF URL
       ===================================================== */

    function createPDFURL(file) {

        if (!file) {
            return "";
        }


        /*
         * IMPORTANT:
         *
         * Your data.js paths look like:
         *
         * papers/form6/physics/...
         *
         * If pastpapers.html is in the root of GitHub Pages,
         * this relative path works directly.
         */

        let cleanFile =
            file
                .replace(/^\/+/, "")
                .replace(/\\/g, "/");


        /*
         * Encode each path segment while preserving /
         */

        cleanFile =
            cleanFile
                .split("/")
                .map(function (part) {
                    return encodeURIComponent(part);
                })
                .join("/");


        return cleanFile;
    }


    /* =====================================================
       19. BACK BUTTON
       ===================================================== */

    backBtn.addEventListener(
        "click",
        function () {

            if (!state.form) {

                showForms();

                return;
            }


            if (
                state.form &&
                !state.subject
            ) {

                showForms();

                return;
            }


            if (
                state.subject &&
                !state.type
            ) {

                selectForm(
                    state.form
                );

                return;
            }


            if (
                state.type &&
                !state.year
            ) {

                selectSubject(
                    state.subject
                );

                return;
            }


            if (
                state.year &&
                !state.region
            ) {

                selectType(
                    state.type
                );

                return;
            }


            if (state.region) {

                selectYear(
                    state.year
                );

            }

        }
    );


    /* =====================================================
       20. RESET
       ===================================================== */

    resetBtn.addEventListener(
        "click",
        function () {

            showForms();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       21. START APPLICATION
       ===================================================== */

    showForms();

});
