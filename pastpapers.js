/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS ENGINE
   FORM 1 - FORM 6
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const content = document.getElementById("paperContent");
    const breadcrumb = document.getElementById("breadcrumb");
    const progressWrapper =
        document.getElementById("progressWrapper");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!content) {
        console.error(
            "GEPAM ERROR: #paperContent haijapatikana."
        );
        return;
    }


    /*
       data.js must provide:

       pastPaperConfig
       pastPapers
    */

    if (
        typeof pastPaperConfig === "undefined" ||
        typeof pastPapers === "undefined"
    ) {

        content.innerHTML = `
            <div class="empty-state">

                <div class="empty-icon">
                    ⚠️
                </div>

                <h3>Data Error</h3>

                <p>
                    Past paper configuration haijapatikana.
                    Hakikisha data.js imewekwa kabla ya
                    pastpapers.js.
                </p>

            </div>
        `;

        console.error(
            "GEPAM ERROR: pastPaperConfig au pastPapers haipo."
        );

        return;
    }


    /* =====================================================
       STATE
    ===================================================== */

    let currentStep = 0;

    let selectedForm = null;
    let selectedSubject = null;
    let selectedType = null;
    let selectedYear = null;
    let selectedRegion = null;


    /* =====================================================
       STEP NAMES
    ===================================================== */

    const steps = [
        "Form",
        "Subject",
        "Exam Type",
        "Year",
        "Region",
        "Papers"
    ];


    /* =====================================================
       FORM LABELS
    ===================================================== */

    const formLabels = {
        form1: "Form 1",
        form2: "Form 2",
        form3: "Form 3",
        form4: "Form 4",
        form5: "Form 5",
        form6: "Form 6"
    };


    /* =====================================================
       SUBJECT LABELS
    ===================================================== */

    const subjectLabels = {
        physics: "Physics",
        chemistry: "Chemistry"
    };


    /* =====================================================
       EXAM TYPE LABELS
    ===================================================== */

    const typeLabels = {
        midterm: "Midterm",
        terminal: "Terminal",
        annual: "Annual",
        ftna: "FTNA",
        joint: "Joint",
        mock: "Mock",
        pre_necta: "Pre-NECTA",
        necta: "NECTA",
        acsee: "ACSEE"
    };


    /* =====================================================
       REGION LABELS
    ===================================================== */

    const regionLabels = {
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
        singida: "Singida",
        iringa: "Iringa",
        mtwara: "Mtwara",
        lindi: "Lindi",
        rukwa: "Rukwa",
        katavi: "Katavi",
        njombe: "Njombe",
        songwe: "Songwe",
        mara: "Mara",
        simiyu: "Simiyu",
        manyara: "Manyara",
        pwani: "Pwani",
        zanzibar: "Zanzibar",
        necta: "NECTA"
    };


    /* =====================================================
       HELPERS
    ===================================================== */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    function getRegionLabel(region) {

        if (regionLabels[region]) {
            return regionLabels[region];
        }

        return String(region)
            .replace(/_/g, " ")
            .replace(/\b\w/g, function (letter) {
                return letter.toUpperCase();
            });

    }


    function getTypeLabel(type) {

        return typeLabels[type] || type;

    }


    function getSubjectLabel(subject) {

        return subjectLabels[subject] || subject;

    }


    function getFormLabel(form) {

        return formLabels[form] || form;

    }


    function getPapers() {

        if (
            !selectedForm ||
            !selectedSubject
        ) {
            return [];
        }

        if (
            !pastPapers[selectedForm] ||
            !pastPapers[selectedForm][selectedSubject]
        ) {
            return [];
        }

        return pastPapers[selectedForm][selectedSubject];

    }


    /* =====================================================
       PROGRESS
    ===================================================== */

    function renderProgress() {

        progressWrapper.innerHTML = "";

        steps.forEach(function (step, index) {

            const stepElement =
                document.createElement("div");

            stepElement.className =
                "progress-step";

            if (index === currentStep) {
                stepElement.classList.add("active");
            }

            if (index < currentStep) {
                stepElement.classList.add("completed");
            }

            stepElement.innerHTML = `
                <span>${index + 1}</span>
                <small>${step}</small>
            `;

            progressWrapper.appendChild(stepElement);


            if (index < steps.length - 1) {

                const line =
                    document.createElement("div");

                line.className = "progress-line";

                progressWrapper.appendChild(line);

            }

        });

    }


    /* =====================================================
       BREADCRUMB
    ===================================================== */

    function renderBreadcrumb() {

        breadcrumb.innerHTML = "";

        const items = [];

        items.push("Past Papers");

        if (selectedForm) {
            items.push(getFormLabel(selectedForm));
        }

        if (selectedSubject) {
            items.push(
                getSubjectLabel(selectedSubject)
            );
        }

        if (selectedType) {
            items.push(
                getTypeLabel(selectedType)
            );
        }

        if (selectedYear) {
            items.push(String(selectedYear));
        }

        if (selectedRegion) {
            items.push(
                getRegionLabel(selectedRegion)
            );
        }


        items.forEach(function (item, index) {

            if (index > 0) {

                const arrow =
                    document.createElement("span");

                arrow.className =
                    "breadcrumb-arrow";

                arrow.textContent = "›";

                breadcrumb.appendChild(arrow);

            }

            const span =
                document.createElement("span");

            span.textContent = item;

            breadcrumb.appendChild(span);

        });

    }


    /* =====================================================
       CONTENT CARD HEADER
    ===================================================== */

    function heading(icon, title, description) {

        return `
            <div class="selection-heading">

                <div class="selection-icon">
                    ${icon}
                </div>

                <div>

                    <h3>${title}</h3>

                    <p>${description}</p>

                </div>

            </div>
        `;

    }


    /* =====================================================
       RENDER FORM
    ===================================================== */

    function renderForms() {

        currentStep = 0;

        selectedForm = null;
        selectedSubject = null;
        selectedType = null;
        selectedYear = null;
        selectedRegion = null;

        renderProgress();
        renderBreadcrumb();


        const forms =
            Object.keys(pastPaperConfig || {});


        if (!forms.length) {

            content.innerHTML = `
                <div class="empty-state">

                    <div class="empty-icon">
                        📚
                    </div>

                    <h3>No Forms Available</h3>

                    <p>
                        No past paper configuration
                        was found.
                    </p>

                </div>
            `;

            return;
        }


        let html = heading(
            "📚",
            "Choose Form",
            "Select the class whose past papers you want."
        );


        html += `<div class="selection-grid">`;


        forms.forEach(function (form, index) {

            const config =
                pastPaperConfig[form];

            const subjectCount =
                config &&
                Array.isArray(config.subjects)
                    ? config.subjects.length
                    : 0;


            html += `
                <div
                    class="selection-card"
                    role="button"
                    tabindex="0"
                    data-form="${escapeHTML(form)}"
                >

                    <div class="card-number">
                        ${index + 1}
                    </div>

                    <div class="card-title">
                        ${escapeHTML(
                            getFormLabel(form)
                        )}
                    </div>

                    <div class="card-info">
                        <small>
                            ${subjectCount}
                            subject${subjectCount !== 1 ? "s" : ""}
                        </small>
                    </div>

                    <div class="card-arrow">
                        →
                    </div>

                </div>
            `;

        });


        html += `</div>`;

        content.innerHTML = html;


        document
            .querySelectorAll("[data-form]")
            .forEach(function (card) {

                card.addEventListener(
                    "click",
                    function () {

                        selectForm(
                            this.dataset.form
                        );

                    }
                );


                card.addEventListener(
                    "keydown",
                    function (event) {

                        if (
                            event.key === "Enter" ||
                            event.key === " "
                        ) {

                            event.preventDefault();

                            selectForm(
                                this.dataset.form
                            );

                        }

                    }
                );

            });

    }


    /* =====================================================
       SELECT FORM
    ===================================================== */

    function selectForm(form) {

        selectedForm = form;

        selectedSubject = null;
        selectedType = null;
        selectedYear = null;
        selectedRegion = null;

        renderSubjects();

    }


    /* =====================================================
       SUBJECTS
    ===================================================== */

    function renderSubjects() {

        currentStep = 1;

        renderProgress();
        renderBreadcrumb();


        const config =
            pastPaperConfig[selectedForm];


        const subjects =
            config &&
            Array.isArray(config.subjects)
                ? config.subjects
                : [];


        if (!subjects.length) {

            showEmpty(
                "📚",
                "No Subjects Available",
                "Hakuna subjects zilizowekwa kwa "
                + getFormLabel(selectedForm)
            );

            return;
        }


        let html = heading(
            "🔬",
            "Choose Subject",
            getFormLabel(selectedForm)
            + " — Select the subject you want."
        );


        html += `<div class="selection-grid">`;


        subjects.forEach(function (subject) {

            const icon =
                subject === "physics"
                    ? "⚛️"
                    : "🧪";


            html += `
                <div
                    class="selection-card subject-card"
                    role="button"
                    tabindex="0"
                    data-subject="${escapeHTML(subject)}"
                >

                    <div class="subject-icon">
                        ${icon}
                    </div>

                    <div class="card-title">
                        ${escapeHTML(
                            getSubjectLabel(subject)
                        )}
                    </div>

                    <div class="card-arrow">
                        →
                    </div>

                </div>
            `;

        });


        html += `</div>`;

        content.innerHTML = html;


        document
            .querySelectorAll("[data-subject]")
            .forEach(function (card) {

                card.addEventListener(
                    "click",
                    function () {

                        selectedSubject =
                            this.dataset.subject;

                        selectedType = null;
                        selectedYear = null;
                        selectedRegion = null;

                        renderTypes();

                    }
                );

            });

    }


    /* =====================================================
       EXAM TYPES
    ===================================================== */

    function renderTypes() {

        currentStep = 2;

        renderProgress();
        renderBreadcrumb();


        const config =
            pastPaperConfig[selectedForm];


        const configuredTypes =
            config &&
            Array.isArray(config.types)
                ? config.types
                : [];


        const papers =
            getPapers();


        /*
           Only show types that actually have data.
        */

        const availableTypes =
            configuredTypes.filter(function (type) {

                return papers.some(function (paper) {

                    return paper.type === type;

                });

            });


        if (!availableTypes.length) {

            showEmpty(
                "📄",
                "No Exam Types Available",
                "Hakuna mitihani iliyowekwa kwa "
                + getFormLabel(selectedForm)
                + " — "
                + getSubjectLabel(selectedSubject)
            );

            return;
        }


        let html = heading(
            "📝",
            "Choose Exam Type",
            "Select the examination type."
        );


        html += `<div class="selection-grid">`;


        availableTypes.forEach(function (type) {

            const count =
                papers.filter(function (paper) {

                    return paper.type === type;

                }).length;


            html += `
                <div
                    class="selection-card type-card"
                    role="button"
                    tabindex="0"
                    data-type="${escapeHTML(type)}"
                >

                    <div class="type-icon">
                        📄
                    </div>

                    <div class="card-info">

                        <strong>
                            ${escapeHTML(
                                getTypeLabel(type)
                            )}
                        </strong>

                        <small>
                            ${count}
                            paper${count !== 1 ? "s" : ""}
                        </small>

                    </div>

                    <div class="card-arrow">
                        →
                    </div>

                </div>
            `;

        });


        html += `</div>`;

        content.innerHTML = html;


        document
            .querySelectorAll("[data-type]")
            .forEach(function (card) {

                card.addEventListener(
                    "click",
                    function () {

                        selectedType =
                            this.dataset.type;

                        selectedYear = null;
                        selectedRegion = null;

                        renderYears();

                    }
                );

            });

    }


    /* =====================================================
       YEARS
    ===================================================== */

    function renderYears() {

        currentStep = 3;

        renderProgress();
        renderBreadcrumb();


        const papers =
            getPapers().filter(function (paper) {

                return paper.type === selectedType;

            });


        const years =
            [...new Set(
                papers.map(function (paper) {
                    return Number(paper.year);
                })
            )]
            .filter(function (year) {
                return !Number.isNaN(year);
            })
            .sort(function (a, b) {
                return b - a;
            });


        if (!years.length) {

            showEmpty(
                "📅",
                "No Years Available",
                "Hakuna mwaka uliowekwa kwa aina hii ya mtihani."
            );

            return;
        }


        let html = heading(
            "📅",
            "Choose Year",
            getTypeLabel(selectedType)
            + " — Select examination year."
        );


        html += `<div class="selection-grid">`;


        years.forEach(function (year) {

            const count =
                papers.filter(function (paper) {

                    return Number(paper.year) === year;

                }).length;


            html += `
                <div
                    class="selection-card year-card"
                    role="button"
                    tabindex="0"
                    data-year="${year}"
                >

                    <div class="year-number">
                        ${year}
                    </div>

                    <div class="year-count">
                        ${count}
                        paper${count !== 1 ? "s" : ""}
                    </div>

                    <div class="card-arrow">
                        →
                    </div>

                </div>
            `;

        });


        html += `</div>`;

        content.innerHTML = html;


        document
            .querySelectorAll("[data-year]")
            .forEach(function (card) {

                card.addEventListener(
                    "click",
                    function () {

                        selectedYear =
                            Number(
                                this.dataset.year
                            );

                        selectedRegion = null;

                        renderRegions();

                    }
                );

            });

    }


    /* =====================================================
       REGIONS
    ===================================================== */

    function renderRegions() {

        currentStep = 4;

        renderProgress();
        renderBreadcrumb();


        const papers =
            getPapers().filter(function (paper) {

                return (
                    paper.type === selectedType &&
                    Number(paper.year) === selectedYear
                );

            });


        /*
           Region is the grouping level.
           For data such as NECTA:
           region = "necta"
        */

        const regions =
            [...new Set(
                papers.map(function (paper) {
                    return paper.region;
                })
            )];


        if (!regions.length) {

            showEmpty(
                "📍",
                "No Regions Available",
                "Hakuna region/school iliyowekwa kwa mwaka huu."
            );

            return;
        }


        let html = heading(
            "📍",
            "Choose Region / School",
            "Select the region or examination source."
        );


        html += `<div class="selection-grid">`;


        regions.forEach(function (region) {

            const count =
                papers.filter(function (paper) {

                    return paper.region === region;

                }).length;


            html += `
                <div
                    class="selection-card region-card"
                    role="button"
                    tabindex="0"
                    data-region="${escapeHTML(region)}"
                >

                    <div class="region-icon">
                        📍
                    </div>

                    <div class="card-info">

                        <strong>
                            ${escapeHTML(
                                getRegionLabel(region)
                            )}
                        </strong>

                        <small>
                            ${count}
                            paper${count !== 1 ? "s" : ""}
                        </small>

                    </div>

                    <div class="card-arrow">
                        →
                    </div>

                </div>
            `;

        });


        html += `</div>`;

        content.innerHTML = html;


        document
            .querySelectorAll("[data-region]")
            .forEach(function (card) {

                card.addEventListener(
                    "click",
                    function () {

                        selectedRegion =
                            this.dataset.region;

                        renderPapers();

                    }
                );

            });

    }


    /* =====================================================
       PAPER CHAIN
    ===================================================== */

    function renderPapers() {

        currentStep = 5;

        renderProgress();
        renderBreadcrumb();


        const papers =
            getPapers().filter(function (paper) {

                return (
                    paper.type === selectedType &&
                    Number(paper.year) === selectedYear &&
                    paper.region === selectedRegion
                );

            });


        if (!papers.length) {

            showEmpty(
                "📄",
                "No Papers Available",
                "Hakuna PDF iliyopatikana kwa uchaguzi huu."
            );

            return;
        }


        /*
           Sort papers naturally:
           Physics 1
           Physics 2
           Physics 3A
           Physics 3B
        */

        papers.sort(function (a, b) {

            return naturalPaperSort(
                a.title,
                b.title
            );

        });


        let html = `

            <div class="selection-heading">

                <div class="selection-icon">
                    📚
                </div>

                <div>

                    <h3>
                        Available Papers
                    </h3>

                    <p>
                        ${escapeHTML(
                            getFormLabel(selectedForm)
                        )}
                        →
                        ${escapeHTML(
                            getSubjectLabel(selectedSubject)
                        )}
                        →
                        ${escapeHTML(
                            getTypeLabel(selectedType)
                        )}
                        →
                        ${selectedYear}
                        →
                        ${escapeHTML(
                            getRegionLabel(selectedRegion)
                        )}
                    </p>

                </div>

            </div>


            <div class="paper-chain">

                <div class="chain-header">

                    <div>
                        <strong>
                            📄 Paper Chain
                        </strong>

                        <span>
                            ${escapeHTML(
                                getRegionLabel(
                                    selectedRegion
                                )
                            )}
                        </span>
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


                    <div class="paper-info">

                        <h4>
                            ${escapeHTML(
                                paper.title ||
                                "Examination Paper"
                            )}
                        </h4>

                        <div class="paper-meta">

                            <span>
                                ${escapeHTML(
                                    getSubjectLabel(
                                        selectedSubject
                                    )
                                )}
                            </span>

                            <span>
                                ${escapeHTML(
                                    getTypeLabel(
                                        paper.type
                                    )
                                )}
                            </span>

                            <span>
                                ${paper.year}
                            </span>

                            <span>
                                ${escapeHTML(
                                    getRegionLabel(
                                        paper.region
                                    )
                                )}
                            </span>

                        </div>

                    </div>


                    <div class="paper-action">

                        <a
                            class="open-pdf-button"
                            href="${escapeHTML(
                                paper.file
                            )}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📄 Fungua PDF
                        </a>

                    </div>

                </div>

            `;

        });


        html += `
            </div>

            <div class="paper-actions-bottom">

                <button
                    type="button"
                    class="back-button"
                    id="backToRegions"
                >
                    ← Back
                </button>

                <button
                    type="button"
                    class="restart-button"
                    id="restartPapers"
                >
                    🔄 Start Again
                </button>

            </div>
        `;


        content.innerHTML = html;


        document
            .getElementById("backToRegions")
            .addEventListener(
                "click",
                function () {

                    renderRegions();

                }
            );


        document
            .getElementById("restartPapers")
            .addEventListener(
                "click",
                function () {

                    renderForms();

                }
            );

    }


    /* =====================================================
       NATURAL PAPER SORT
    ===================================================== */

    function naturalPaperSort(a, b) {

        const extract = function (text) {

            const match =
                String(text)
                    .match(/(\d+)([A-Za-z]*)/);

            if (!match) {

                return {
                    number: 999,
                    suffix: String(text)
                };

            }

            return {
                number: Number(match[1]),
                suffix: match[2] || ""
            };

        };


        const A = extract(a);
        const B = extract(b);


        if (A.number !== B.number) {
            return A.number - B.number;
        }


        return A.suffix.localeCompare(
            B.suffix
        );

    }


    /* =====================================================
       EMPTY STATE
    ===================================================== */

    function showEmpty(
        icon,
        title,
        message
    ) {

        renderProgress();
        renderBreadcrumb();


        content.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    ${icon}
                </div>

                <h3>
                    ${escapeHTML(title)}
                </h3>

                <p>
                    ${escapeHTML(message)}
                </p>

            </div>

            <div class="paper-actions-bottom">

                <button
                    type="button"
                    class="back-button"
                    id="emptyBack"
                >
                    ← Back
                </button>

                <button
                    type="button"
                    class="restart-button"
                    id="emptyRestart"
                >
                    🔄 Start Again
                </button>

            </div>
        `;


        document
            .getElementById("emptyBack")
            .addEventListener(
                "click",
                function () {

                    goBack();

                }
            );


        document
            .getElementById("emptyRestart")
            .addEventListener(
                "click",
                function () {

                    renderForms();

                }
            );

    }


    /* =====================================================
       BACK NAVIGATION
    ===================================================== */

    function goBack() {

        if (currentStep === 5) {

            renderRegions();

        }

        else if (currentStep === 4) {

            renderYears();

        }

        else if (currentStep === 3) {

            renderTypes();

        }

        else if (currentStep === 2) {

            renderSubjects();

        }

        else if (currentStep === 1) {

            renderForms();

        }

        else {

            renderForms();

        }

    }


    /* =====================================================
       INITIAL LOAD
    ===================================================== */

    renderForms();

});
