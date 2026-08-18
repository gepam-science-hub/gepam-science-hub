/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const formSelect =
        document.getElementById("formSelect");

    const subjectSelect =
        document.getElementById("subjectSelect");

    const typeSelect =
        document.getElementById("typeSelect");

    const regionSelect =
        document.getElementById("regionSelect");

    const yearSelect =
        document.getElementById("yearSelect");

    const schoolInput =
        document.getElementById("schoolInput");

    const zoneInput =
        document.getElementById("zoneInput");

    const seriesInput =
        document.getElementById("seriesInput");

    const resetFilters =
        document.getElementById("resetFilters");

    const papersGrid =
        document.getElementById("papersGrid");

    const papersCount =
        document.getElementById("papersCount");

    const emptyState =
        document.getElementById("emptyState");


    /* =====================================================
       DATA SOURCE
       IMPORTANT:
       Your data.js uses:

       pastPaperConfig = {
           form1: {
               physics: [],
               chemistry: []
           },
           form2: {},
           ...
       }
       ===================================================== */

    function getDatabase() {

        if (
            typeof pastPaperConfig !== "undefined" &&
            pastPaperConfig
        ) {
            return pastPaperConfig;
        }

        console.error(
            "GEPAM ERROR: pastPaperConfig was not found."
        );

        return {};
    }


    /* =====================================================
       FORMATTING
       ===================================================== */

    function formatText(value) {

        if (
            value === undefined ||
            value === null ||
            value === ""
        ) {
            return "";
        }

        return String(value)
            .replace(/_/g, " ")
            .replace(/\b\w/g, function (letter) {
                return letter.toUpperCase();
            });
    }


    function formatType(type) {

        const names = {

            pre_necta: "Pre-NECTA",

            acsee: "NECTA / ACSEE",

            necta: "NECTA",

            mock: "Mock",

            joint: "Joint",

            annual: "Annual",

            terminal: "Terminal",

            midterm: "Midterm",

            monthly: "Monthly",

            weekly: "Weekly"

        };

        return names[type] || formatText(type);
    }


    function formatSubject(subject) {

        if (subject === "physics") {
            return "Physics";
        }

        if (subject === "chemistry") {
            return "Chemistry";
        }

        return formatText(subject);
    }


    /* =====================================================
       GET ALL PAPERS FOR SELECTED FORM
       ===================================================== */

    function getFormPapers(form) {

        const db = getDatabase();

        if (
            !form ||
            !db[form] ||
            typeof db[form] !== "object"
        ) {
            return [];
        }

        const papers = [];

        Object.keys(db[form]).forEach(function (subject) {

            const subjectPapers =
                db[form][subject];

            if (!Array.isArray(subjectPapers)) {
                return;
            }

            subjectPapers.forEach(function (paper) {

                if (!paper || typeof paper !== "object") {
                    return;
                }

                papers.push({

                    ...paper,

                    subject: paper.subject || subject

                });

            });

        });

        return papers;
    }


    /* =====================================================
       UNIQUE VALUES
       ===================================================== */

    function uniqueValues(papers, property) {

        return [
            ...new Set(
                papers
                    .map(function (paper) {
                        return paper[property];
                    })
                    .filter(function (value) {
                        return (
                            value !== undefined &&
                            value !== null &&
                            value !== ""
                        );
                    })
            )
        ];

    }


    /* =====================================================
       UPDATE SUBJECT FILTER
       ===================================================== */

    function updateSubjects() {

        const form =
            formSelect.value;

        const papers =
            getFormPapers(form);

        subjectSelect.innerHTML =
            `<option value="">All Subjects</option>`;

        const subjects =
            uniqueValues(papers, "subject")
                .sort();

        subjects.forEach(function (subject) {

            const option =
                document.createElement("option");

            option.value = subject;

            option.textContent =
                formatSubject(subject);

            subjectSelect.appendChild(option);

        });

    }


    /* =====================================================
       UPDATE TYPE FILTER
       ===================================================== */

    function updateTypes() {

        const form =
            formSelect.value;

        const subject =
            subjectSelect.value;

        let papers =
            getFormPapers(form);

        if (subject) {

            papers =
                papers.filter(function (paper) {

                    return paper.subject === subject;

                });

        }

        typeSelect.innerHTML =
            `<option value="">All Types</option>`;

        const types =
            uniqueValues(papers, "type")
                .sort();

        types.forEach(function (type) {

            const option =
                document.createElement("option");

            option.value = type;

            option.textContent =
                formatType(type);

            typeSelect.appendChild(option);

        });

    }


    /* =====================================================
       UPDATE REGION FILTER
       ===================================================== */

    function updateRegions() {

        const form =
            formSelect.value;

        const subject =
            subjectSelect.value;

        const type =
            typeSelect.value;

        let papers =
            getFormPapers(form);


        if (subject) {

            papers =
                papers.filter(function (paper) {

                    return paper.subject === subject;

                });

        }


        if (type) {

            papers =
                papers.filter(function (paper) {

                    return paper.type === type;

                });

        }


        regionSelect.innerHTML =
            `<option value="">All Regions</option>`;


        const regions =
            uniqueValues(papers, "region")
                .sort();


        regions.forEach(function (region) {

            const option =
                document.createElement("option");

            option.value = region;

            option.textContent =
                formatText(region);

            regionSelect.appendChild(option);

        });

    }


    /* =====================================================
       UPDATE YEAR FILTER
       ===================================================== */

    function updateYears() {

        const form =
            formSelect.value;

        const subject =
            subjectSelect.value;

        const type =
            typeSelect.value;

        const region =
            regionSelect.value;


        let papers =
            getFormPapers(form);


        if (subject) {

            papers =
                papers.filter(function (paper) {

                    return paper.subject === subject;

                });

        }


        if (type) {

            papers =
                papers.filter(function (paper) {

                    return paper.type === type;

                });

        }


        if (region) {

            papers =
                papers.filter(function (paper) {

                    return paper.region === region;

                });

        }


        yearSelect.innerHTML =
            `<option value="">All Years</option>`;


        const years =
            uniqueValues(papers, "year")
                .sort(function (a, b) {
                    return Number(b) - Number(a);
                });


        years.forEach(function (year) {

            const option =
                document.createElement("option");

            option.value = year;

            option.textContent = year;

            yearSelect.appendChild(option);

        });

    }


    /* =====================================================
       FILTER PAPERS
       ===================================================== */

    function getFilteredPapers() {

        const form =
            formSelect.value;

        if (!form) {
            return [];
        }


        let papers =
            getFormPapers(form);


        const subject =
            subjectSelect.value;

        const type =
            typeSelect.value;

        const region =
            regionSelect.value;

        const year =
            yearSelect.value;

        const school =
            schoolInput.value
                .trim()
                .toLowerCase();

        const zone =
            zoneInput.value
                .trim()
                .toLowerCase();

        const series =
            seriesInput.value
                .trim()
                .toLowerCase();


        /* SUBJECT */

        if (subject) {

            papers =
                papers.filter(function (paper) {

                    return paper.subject === subject;

                });

        }


        /* TYPE */

        if (type) {

            papers =
                papers.filter(function (paper) {

                    return paper.type === type;

                });

        }


        /* REGION */

        if (region) {

            papers =
                papers.filter(function (paper) {

                    return paper.region === region;

                });

        }


        /* YEAR */

        if (year) {

            papers =
                papers.filter(function (paper) {

                    return String(paper.year) ===
                        String(year);

                });

        }


        /* SCHOOL */

        if (school) {

            papers =
                papers.filter(function (paper) {

                    return String(
                        paper.school || ""
                    )
                    .toLowerCase()
                    .includes(school);

                });

        }


        /* ZONE */

        if (zone) {

            papers =
                papers.filter(function (paper) {

                    return String(
                        paper.zone || ""
                    )
                    .toLowerCase()
                    .includes(zone);

                });

        }


        /* SERIES */

        if (series) {

            papers =
                papers.filter(function (paper) {

                    return String(
                        paper.series || ""
                    )
                    .toLowerCase()
                    .includes(series);

                });

        }


        /* SORT */

        papers.sort(function (a, b) {

            const yearA =
                Number(a.year) || 0;

            const yearB =
                Number(b.year) || 0;

            return yearB - yearA;

        });


        return papers;

    }


    /* =====================================================
       PDF PATH
       ===================================================== */

    function getPdfUrl(file) {

        if (!file) {
            return "#";
        }

        /*
         * Your paths are already relative to the
         * GitHub Pages website root.
         *
         * Example:
         * papers/form6/physics/...
         */

        let cleanPath =
            String(file)
                .replace(/^\/+/, "");

        /*
         * Encode only spaces.
         * We DO NOT rename your files.
         */

        cleanPath =
            cleanPath.replace(/ /g, "%20");

        return cleanPath;

    }


    /* =====================================================
       CREATE PAPER CARD
       ===================================================== */

    function createPaperCard(paper) {

        const card =
            document.createElement("article");

        card.className =
            "paper-card";


        const title =
            paper.title ||
            "Examination Paper";


        const year =
            paper.year ||
            "";


        const subject =
            formatSubject(paper.subject);


        const type =
            formatType(paper.type);


        const region =
            paper.region
                ? formatText(paper.region)
                : "";


        const school =
            paper.school
                ? formatText(paper.school)
                : "";


        const zone =
            paper.zone
                ? formatText(paper.zone)
                : "";


        const series =
            paper.series
                ? formatText(paper.series)
                : "";


        const pdfUrl =
            getPdfUrl(paper.file);


        let extraMeta = "";


        if (school) {

            extraMeta += `
                <span class="paper-tag">
                    🏫 ${school}
                </span>
            `;

        }


        if (zone) {

            extraMeta += `
                <span class="paper-tag">
                    🗺️ ${zone}
                </span>
            `;

        }


        if (series) {

            extraMeta += `
                <span class="paper-tag">
                    📑 ${series}
                </span>
            `;

        }


        card.innerHTML = `

            <div class="paper-top">

                <div class="paper-icon">
                    ${
                        paper.subject === "chemistry"
                            ? "⚗️"
                            : "⚛️"
                    }
                </div>

                ${
                    year
                        ? `<div class="paper-year">
                              ${year}
                           </div>`
                        : ""
                }

            </div>


            <h3 class="paper-title">
                ${title}
            </h3>


            <div class="paper-meta">

                ${
                    subject
                        ? `<span class="paper-tag">
                              📚 ${subject}
                           </span>`
                        : ""
                }

                ${
                    type
                        ? `<span class="paper-tag">
                              📝 ${type}
                           </span>`
                        : ""
                }

                ${
                    region
                        ? `<span class="paper-tag">
                              📍 ${region}
                           </span>`
                        : ""
                }

                ${extraMeta}

            </div>


            <div class="paper-actions">

                <a
                    class="open-paper-btn"
                    href="${pdfUrl}"
                    target="_blank"
                    rel="noopener">

                    📄 Open Paper

                </a>

            </div>

        `;


        return card;

    }


    /* =====================================================
       RENDER
       ===================================================== */

    function renderPapers() {

        const papers =
            getFilteredPapers();


        papersGrid.innerHTML = "";


        papersCount.textContent =
            `${papers.length} ${
                papers.length === 1
                    ? "paper"
                    : "papers"
            }`;


        if (!formSelect.value) {

            emptyState.style.display =
                "block";

            emptyState.innerHTML = `

                <div class="empty-icon">
                    📚
                </div>

                <h3>
                    Select a Form
                </h3>

                <p>
                    Choose Form 1 to Form 6
                    to view available papers.
                </p>

            `;

            return;

        }


        if (papers.length === 0) {

            emptyState.style.display =
                "block";

            return;

        }


        emptyState.style.display =
            "none";


        papers.forEach(function (paper) {

            papersGrid.appendChild(
                createPaperCard(paper)
            );

        });

    }


    /* =====================================================
       REFRESH FILTERS
       ===================================================== */

    function refreshFilters() {

        updateSubjects();

        updateTypes();

        updateRegions();

        updateYears();

        renderPapers();

    }


    /* =====================================================
       FORM CHANGE
       ===================================================== */

    formSelect.addEventListener(
        "change",
        function () {

            subjectSelect.value = "";

            typeSelect.value = "";

            regionSelect.value = "";

            yearSelect.value = "";

            refreshFilters();

        }
    );


    /* =====================================================
       SUBJECT CHANGE
       ===================================================== */

    subjectSelect.addEventListener(
        "change",
        function () {

            const oldType =
                typeSelect.value;

            updateTypes();

            /*
             * Keep type if still available.
             */

            const availableTypes =
                [...typeSelect.options]
                    .map(function (option) {
                        return option.value;
                    });


            if (
                availableTypes.includes(oldType)
            ) {

                typeSelect.value =
                    oldType;

            }


            updateRegions();

            updateYears();

            renderPapers();

        }
    );


    /* =====================================================
       TYPE CHANGE
       ===================================================== */

    typeSelect.addEventListener(
        "change",
        function () {

            updateRegions();

            updateYears();

            renderPapers();

        }
    );


    /* =====================================================
       REGION CHANGE
       ===================================================== */

    regionSelect.addEventListener(
        "change",
        function () {

            updateYears();

            renderPapers();

        }
    );


    /* =====================================================
       YEAR CHANGE
       ===================================================== */

    yearSelect.addEventListener(
        "change",
        function () {

            renderPapers();

        }
    );


    /* =====================================================
       TEXT FILTERS
       ===================================================== */

    schoolInput.addEventListener(
        "input",
        renderPapers
    );


    zoneInput.addEventListener(
        "input",
        renderPapers
    );


    seriesInput.addEventListener(
        "input",
        renderPapers
    );


    /* =====================================================
       RESET
       ===================================================== */

    resetFilters.addEventListener(
        "click",
        function () {

            formSelect.value = "";

            subjectSelect.innerHTML =
                `<option value="">
                    All Subjects
                 </option>`;

            typeSelect.innerHTML =
                `<option value="">
                    All Types
                 </option>`;

            regionSelect.innerHTML =
                `<option value="">
                    All Regions
                 </option>`;

            yearSelect.innerHTML =
                `<option value="">
                    All Years
                 </option>`;

            schoolInput.value = "";

            zoneInput.value = "";

            seriesInput.value = "";

            renderPapers();

        }
    );


    /* =====================================================
       INITIAL STATE
       ===================================================== */

    renderPapers();


    /* =====================================================
       DEBUG MESSAGE
       ===================================================== */

    console.log(
        "GEPAM Past Papers Engine loaded successfully."
    );

});
