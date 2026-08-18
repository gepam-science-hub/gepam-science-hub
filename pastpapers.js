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
       START
    ===================================================== */

    document.addEventListener("DOMContentLoaded", function () {

        const config =
            typeof pastPaperConfig !== "undefined"
                ? pastPaperConfig
                : window.pastPaperConfig;

        const database =
            typeof pastPapers !== "undefined"
                ? pastPapers
                : window.pastPapers;


        /* =================================================
           CHECK DATA
        ================================================= */

        if (!config || typeof config !== "object") {

            showError(
                "Past paper configuration haijapatikana.",
                "Hakikisha pastpapers.data.js imewekwa kabla ya pastpapers.js."
            );

            return;
        }


        if (!database || typeof database !== "object") {

            showError(
                "Past paper database haijapatikana.",
                "Hakikisha pastpapers.data.js ina database ya pastPapers."
            );

            return;
        }


        /* =================================================
           ELEMENTS
        ================================================= */

        const optionsContainer =
            document.getElementById("optionsContainer");

        const selectionTitle =
            document.getElementById("selectionTitle");

        const selectionDescription =
            document.getElementById("selectionDescription");

        const selectionIcon =
            document.getElementById("selectionIcon");

        const breadcrumb =
            document.getElementById("breadcrumb");

        const paperResults =
            document.getElementById("paperResults");

        const resultCount =
            document.getElementById("resultCount");

        const backButton =
            document.getElementById("backButton");

        const restartButton =
            document.getElementById("restartButton");


        /* =================================================
           STATE
        ================================================= */

        let currentStep = 1;

        let selectedForm = null;

        let selectedSubject = null;

        let selectedType = null;

        let selectedYear = null;

        let selectedLocation = null;


        /* =================================================
           LABELS
        ================================================= */

        const formLabels = {

            form1: "Form 1",
            form2: "Form 2",
            form3: "Form 3",
            form4: "Form 4",
            form5: "Form 5",
            form6: "Form 6"

        };


        const subjectLabels = {

            physics: "Physics",
            chemistry: "Chemistry"

        };


        const typeLabels = {

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


        /* =================================================
           REGION LABELS
        ================================================= */

        const locationLabels = {

            dar_es_salaam: "Dar es Salaam",

            dodoma: "Dodoma",

            arusha: "Arusha",

            mbeya: "Mbeya",

            kagera: "Kagera",

            shinyanga: "Shinyanga",

            mwanza: "Mwanza",

            morogoro: "Morogoro",

            tanga: "Tanga",

            kilimanjaro: "Kilimanjaro",

            singida: "Singida",

            tabora: "Tabora",

            iringa: "Iringa",

            njombe: "Njombe",

            ruvuma: "Ruvuma",

            lindi: "Lindi",

            mtwara: "Mtwara",

            pwani: "Pwani",

            geita: "Geita",

            katavi: "Katavi",

            kigoma: "Kigoma",

            simiyu: "Simiyu",

            songwe: "Songwe",

            mara: "Mara",

            manyara: "Manyara",

            zanzibar: "Zanzibar",

            north: "North",

            south: "South",

            central: "Central",

            zone: "Zone",

            school: "School",

            necta: "NECTA"

        };


        /* =================================================
           ICONS
        ================================================= */

        const typeIcons = {

            midterm: "📝",
            terminal: "📘",
            annual: "📚",
            ftna: "🏫",
            joint: "🤝",
            necta: "🏛️",
            mock: "📋",
            pre_necta: "📑",
            acsee: "🎓"

        };


        /* =================================================
           INITIALIZE
        ================================================= */

        renderForms();


        /* =================================================
           RENDER FORMS
        ================================================= */

        function renderForms() {

            currentStep = 1;

            optionsContainer.innerHTML = "";

            selectionTitle.textContent =
                "Choose Form";

            selectionDescription.textContent =
                "Select the class whose past papers you want.";

            selectionIcon.textContent = "🎓";


            const forms = Object.keys(config);


            if (!forms.length) {

                showEmpty(
                    "No Forms Available",
                    "No past paper configuration was found."
                );

                return;
            }


            forms.forEach(function (formKey, index) {

                createOption({

                    title:
                        formLabels[formKey] ||
                        formatText(formKey),

                    subtitle:
                        getFormPaperCount(formKey) +
                        " papers available",

                    icon: "🎓",

                    number: index + 1,

                    onClick: function () {

                        selectForm(formKey);

                    }

                });

            });


            updateNavigation();

            updateBreadcrumb();

            clearResults();

            updateProgress(1);
        }


        /* =================================================
           SELECT FORM
        ================================================= */

        function selectForm(form) {

            selectedForm = form;

            selectedSubject = null;
            selectedType = null;
            selectedYear = null;
            selectedLocation = null;

            currentStep = 2;

            renderSubjects();

            updateBreadcrumb();

            updateNavigation();

            updateProgress(2);

        }


        /* =================================================
           SUBJECTS
        ================================================= */

        function renderSubjects() {

            optionsContainer.innerHTML = "";

            selectionTitle.textContent =
                formLabels[selectedForm] ||
                formatText(selectedForm);

            selectionDescription.textContent =
                "Choose the subject.";

            selectionIcon.textContent =
                "📚";


            const subjects =
                config[selectedForm]?.subjects || [];


            subjects.forEach(function (subject) {

                const count =
                    getSubjectPaperCount(
                        selectedForm,
                        subject
                    );


                createOption({

                    title:
                        subjectLabels[subject] ||
                        formatText(subject),

                    subtitle:
                        count + " papers available",

                    icon:
                        subject === "physics"
                            ? "⚛️"
                            : "🧪",

                    onClick: function () {

                        selectSubject(subject);

                    }

                });

            });


            if (!subjects.length) {

                showEmpty(
                    "No Subjects Available",
                    "No subjects have been configured for this form."
                );

            }


            updateBreadcrumb();

        }


        /* =================================================
           SELECT SUBJECT
        ================================================= */

        function selectSubject(subject) {

            selectedSubject = subject;

            selectedType = null;
            selectedYear = null;
            selectedLocation = null;

            currentStep = 3;

            renderTypes();

            updateBreadcrumb();

            updateNavigation();

            updateProgress(3);

        }


        /* =================================================
           EXAM TYPES
        ================================================= */

        function renderTypes() {

            optionsContainer.innerHTML = "";

            selectionTitle.textContent =
                subjectLabels[selectedSubject];

            selectionDescription.textContent =
                "Choose the examination type.";

            selectionIcon.textContent =
                selectedSubject === "physics"
                    ? "⚛️"
                    : "🧪";


            const types =
                config[selectedForm]?.types || [];


            const actualTypes =
                getAvailableTypes(types);


            actualTypes.forEach(function (type) {

                const count =
                    getTypePaperCount(
                        selectedForm,
                        selectedSubject,
                        type
                    );


                createOption({

                    title:
                        typeLabels[type] ||
                        formatText(type),

                    subtitle:
                        count + " papers available",

                    icon:
                        typeIcons[type] || "📄",

                    onClick: function () {

                        selectType(type);

                    }

                });

            });


            if (!actualTypes.length) {

                showEmpty(
                    "No Examination Types",
                    "No examination type has available papers for this subject."
                );

            }


            updateBreadcrumb();

        }


        /* =================================================
           SELECT TYPE
        ================================================= */

        function selectType(type) {

            selectedType = type;

            selectedYear = null;
            selectedLocation = null;

            currentStep = 4;

            renderYears();

            updateBreadcrumb();

            updateNavigation();

            updateProgress(4);

        }


        /* =================================================
           YEARS
        ================================================= */

        function renderYears() {

            optionsContainer.innerHTML = "";

            selectionTitle.textContent =
                typeLabels[selectedType] ||
                formatText(selectedType);

            selectionDescription.textContent =
                "Choose the examination year.";

            selectionIcon.textContent =
                "📅";


            const papers =
                getCurrentPapers();


            const years = uniqueSorted(

                papers
                    .map(function (paper) {
                        return Number(paper.year);
                    })
                    .filter(Boolean)

            ).reverse();


            years.forEach(function (year) {

                const count =
                    papers.filter(function (paper) {

                        return Number(paper.year) === year;

                    }).length;


                createOption({

                    title: String(year),

                    subtitle:
                        count +
                        (count === 1
                            ? " paper"
                            : " papers"),

                    icon: "📅",

                    onClick: function () {

                        selectYear(year);

                    }

                });

            });


            if (!years.length) {

                showEmpty(
                    "No Years Available",
                    "There are no papers available for this examination type."
                );

            }


            updateBreadcrumb();

        }


        /* =================================================
           SELECT YEAR
        ================================================= */

        function selectYear(year) {

            selectedYear = Number(year);

            selectedLocation = null;

            currentStep = 5;

            renderLocations();

            updateBreadcrumb();

            updateNavigation();

            updateProgress(5);

        }


        /* =================================================
           REGIONS / SCHOOLS
        ================================================= */

        function renderLocations() {

            optionsContainer.innerHTML = "";

            selectionTitle.textContent =
                String(selectedYear);

            selectionDescription.textContent =
                "Choose the region, school or examination location.";

            selectionIcon.textContent =
                "📍";


            const papers =
                getCurrentPapers();


            const locations = unique(

                papers
                    .filter(function (paper) {

                        return Number(paper.year) ===
                            Number(selectedYear);

                    })
                    .map(function (paper) {

                        return normalize(
                            paper.region ||
                            paper.school ||
                            paper.zone ||
                            "general"
                        );

                    })

            );


            locations.sort(function (a, b) {

                return getLocationName(a)
                    .localeCompare(
                        getLocationName(b)
                    );

            });


            locations.forEach(function (location) {

                const count =
                    papers.filter(function (paper) {

                        return Number(paper.year) ===
                            Number(selectedYear)
                        &&
                        normalize(
                            paper.region ||
                            paper.school ||
                            paper.zone ||
                            "general"
                        ) === location;

                    }).length;


                createOption({

                    title:
                        getLocationName(location),

                    subtitle:
                        count +
                        (count === 1
                            ? " paper"
                            : " papers"),

                    icon: "📍",

                    onClick: function () {

                        selectLocation(location);

                    }

                });

            });


            if (!locations.length) {

                showEmpty(
                    "No Regions / Schools Available",
                    "No location has papers for the selected year."
                );

            }


            updateBreadcrumb();

        }


        /* =================================================
           SELECT LOCATION
        ================================================= */

        function selectLocation(location) {

            selectedLocation = location;

            currentStep = 6;

            renderPaperChain();

            updateBreadcrumb();

            updateNavigation();

            updateProgress(6);

        }


        /* =================================================
           PAPER CHAIN
        ================================================= */

        function renderPaperChain() {

            const papers =
                getCurrentPapers()
                    .filter(function (paper) {

                        return Number(paper.year) ===
                            Number(selectedYear);

                    })
                    .filter(function (paper) {

                        return normalize(
                            paper.region ||
                            paper.school ||
                            paper.zone ||
                            "general"
                        ) === selectedLocation;

                    });


            optionsContainer.innerHTML = "";

            selectionTitle.textContent =
                getLocationName(selectedLocation);

            selectionDescription.textContent =
                "Choose and open an examination paper.";

            selectionIcon.textContent =
                "📄";


            if (!papers.length) {

                showEmpty(
                    "No Papers Found",
                    "There are no papers matching your selection."
                );

                updateResultCount(0);

                return;

            }


            updateResultCount(papers.length);


            const chain =
                document.createElement("div");

            chain.className =
                "paper-chain";


            const header =
                document.createElement("div");

            header.className =
                "chain-header";


            const title =
                document.createElement("div");

            title.className =
                "chain-title";

            title.textContent =
                buildChainTitle();


            const count =
                document.createElement("div");

            count.className =
                "chain-count";

            count.textContent =
                papers.length +
                (papers.length === 1
                    ? " paper"
                    : " papers");


            header.appendChild(title);

            header.appendChild(count);

            chain.appendChild(header);


            papers.forEach(function (paper, index) {

                chain.appendChild(
                    createPaperItem(
                        paper,
                        index + 1
                    )
                );

            });


            optionsContainer.appendChild(chain);

            updateBreadcrumb();

        }


        /* =================================================
           CREATE PAPER ITEM
        ================================================= */

        function createPaperItem(paper, number) {

            const item =
                document.createElement("div");

            item.className =
                "paper-item";


            const numberBox =
                document.createElement("div");

            numberBox.className =
                "paper-number";

            numberBox.textContent =
                number;


            const info =
                document.createElement("div");

            info.className =
                "paper-info";


            const title =
                document.createElement("h3");

            title.textContent =
                paper.title ||
                "Examination Paper";


            const meta =
                document.createElement("div");

            meta.className =
                "paper-meta";


            addMeta(
                meta,
                "Form " +
                selectedForm.replace("form", "")
            );

            addMeta(
                meta,
                subjectLabels[selectedSubject] ||
                selectedSubject
            );

            addMeta(
                meta,
                typeLabels[selectedType] ||
                selectedType
            );

            addMeta(
                meta,
                String(paper.year)
            );


            if (paper.region) {

                addMeta(
                    meta,
                    getLocationName(
                        normalize(paper.region)
                    )
                );

            }


            info.appendChild(title);

            info.appendChild(meta);


            const action =
                document.createElement("div");

            action.className =
                "paper-action";


            const link =
                document.createElement("a");

            link.className =
                "open-pdf";

            link.href =
                getPDFPath(paper.file);

            link.target =
                "_blank";

            link.rel =
                "noopener noreferrer";

            link.textContent =
                "📖 Fungua PDF";


            action.appendChild(link);


            item.appendChild(numberBox);

            item.appendChild(info);

            item.appendChild(action);


            return item;

        }


        /* =================================================
           PDF PATH
        ================================================= */

        function getPDFPath(file) {

            if (!file) {

                return "#";

            }


            let path =
                String(file).trim();


            /* Remove accidental leading slash */

            path =
                path.replace(/^\/+/, "");


            /*
             * GitHub Pages project site:
             *
             * /gepam-science-hub/
             *
             * We use relative path so it works
             * from pastpapers.html.
             */

            return path;

        }


        /* =================================================
           CURRENT PAPERS
        ================================================= */

        function getCurrentPapers() {

            if (!selectedForm ||
                !selectedSubject) {

                return [];

            }


            const formData =
                database[selectedForm];


            if (!formData) {

                return [];

            }


            const subjectData =
                formData[selectedSubject];


            if (!Array.isArray(subjectData)) {

                return [];

            }


            return subjectData.slice();

        }


        /* =================================================
           AVAILABLE TYPES
        ================================================= */

        function getAvailableTypes(types) {

            const papers =
                getCurrentPapers();


            return types.filter(function (type) {

                return papers.some(function (paper) {

                    return normalize(paper.type) ===
                        normalize(type);

                });

            });

        }


        /* =================================================
           FORM PAPER COUNT
        ================================================= */

        function getFormPaperCount(form) {

            if (!database[form]) {

                return 0;

            }


            let count = 0;


            Object.keys(database[form])
                .forEach(function (subject) {

                    if (
                        Array.isArray(
                            database[form][subject]
                        )
                    ) {

                        count +=
                            database[form][subject].length;

                    }

                });


            return count;

        }


        /* =================================================
           SUBJECT PAPER COUNT
        ================================================= */

        function getSubjectPaperCount(
            form,
            subject
        ) {

            const data =
                database[form]?.[subject];


            return Array.isArray(data)
                ? data.length
                : 0;

        }


        /* =================================================
           TYPE PAPER COUNT
        ================================================= */

        function getTypePaperCount(
            form,
            subject,
            type
        ) {

            const data =
                database[form]?.[subject];


            if (!Array.isArray(data)) {

                return 0;

            }


            return data.filter(function (paper) {

                return normalize(paper.type) ===
                    normalize(type);

            }).length;

        }


        /* =================================================
           OPTION CREATOR
        ================================================= */

        function createOption(options) {

            const card =
                document.createElement("div");

            card.className =
                "option-card";

            card.setAttribute(
                "role",
                "button"
            );

            card.setAttribute(
                "tabindex",
                "0"
            );


            const icon =
                document.createElement("div");

            icon.className =
                "option-icon";

            icon.textContent =
                options.icon || "📄";


            const info =
                document.createElement("div");

            info.className =
                "option-info";


            const title =
                document.createElement("div");

            title.className =
                "option-title";

            title.textContent =
                options.title;


            const subtitle =
                document.createElement("div");

            subtitle.className =
                "option-subtitle";

            subtitle.textContent =
                options.subtitle || "";


            info.appendChild(title);

            info.appendChild(subtitle);


            const arrow =
                document.createElement("div");

            arrow.className =
                "option-arrow";

            arrow.textContent =
                "›";


            card.appendChild(icon);

            card.appendChild(info);

            card.appendChild(arrow);


            card.addEventListener(
                "click",
                options.onClick
            );


            card.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        options.onClick();

                    }

                }
            );


            optionsContainer.appendChild(card);

        }


        /* =================================================
           META
        ================================================= */

        function addMeta(container, text) {

            const span =
                document.createElement("span");

            span.className =
                "meta";

            span.textContent =
                text;

            container.appendChild(span);

        }


        /* =================================================
           BREADCRUMB
        ================================================= */

        function updateBreadcrumb() {

            const parts = [

                "Past Papers"

            ];


            if (selectedForm) {

                parts.push(
                    formLabels[selectedForm] ||
                    formatText(selectedForm)
                );

            }


            if (selectedSubject) {

                parts.push(
                    subjectLabels[selectedSubject] ||
                    formatText(selectedSubject)
                );

            }


            if (selectedType) {

                parts.push(
                    typeLabels[selectedType] ||
                    formatText(selectedType)
                );

            }


            if (selectedYear) {

                parts.push(
                    String(selectedYear)
                );

            }


            if (selectedLocation) {

                parts.push(
                    getLocationName(
                        selectedLocation
                    )
                );

            }


            breadcrumb.innerHTML =
                parts
                    .map(function (part, index) {

                        if (index === 0) {

                            return (
                                "<strong>" +
                                escapeHTML(part) +
                                "</strong>"
                            );

                        }


                        return (
                            '<span class="breadcrumb-arrow">›</span>' +
                            "<span>" +
                            escapeHTML(part) +
                            "</span>"
                        );

                    })
                    .join("");

        }


        /* =================================================
           NAVIGATION
        ================================================= */

        function updateNavigation() {

            backButton.hidden =
                currentStep <= 1;

            restartButton.hidden =
                currentStep <= 1;

        }


        /* =================================================
           BACK
        ================================================= */

        backButton.addEventListener(
            "click",
            function () {

                if (currentStep === 6) {

                    selectedLocation = null;

                    currentStep = 5;

                    renderLocations();

                }

                else if (currentStep === 5) {

                    selectedYear = null;

                    currentStep = 4;

                    renderYears();

                }

                else if (currentStep === 4) {

                    selectedType = null;

                    currentStep = 3;

                    renderTypes();

                }

                else if (currentStep === 3) {

                    selectedSubject = null;

                    currentStep = 2;

                    renderSubjects();

                }

                else if (currentStep === 2) {

                    selectedForm = null;

                    currentStep = 1;

                    renderForms();

                }


                updateNavigation();

                updateBreadcrumb();

                updateProgress(currentStep);

            }
        );


        /* =================================================
           RESTART
        ================================================= */

        restartButton.addEventListener(
            "click",
            function () {

                selectedForm = null;

                selectedSubject = null;

                selectedType = null;

                selectedYear = null;

                selectedLocation = null;

                renderForms();

            }
        );


        /* =================================================
           PROGRESS
        ================================================= */

        function updateProgress(step) {

            document
                .querySelectorAll(".progress-step")
                .forEach(function (element) {

                    const number =
                        Number(
                            element.dataset.step
                        );


                    element.classList.remove(
                        "active",
                        "done"
                    );


                    if (number === step) {

                        element.classList.add(
                            "active"
                        );

                    }

                    else if (number < step) {

                        element.classList.add(
                            "done"
                        );

                    }

                });

        }


        /* =================================================
           RESULT COUNT
        ================================================= */

        function updateResultCount(count) {

            resultCount.textContent =
                count +
                (count === 1
                    ? " paper"
                    : " papers");

        }


        /* =================================================
           CLEAR RESULTS
        ================================================= */

        function clearResults() {

            paperResults.innerHTML = `

                <div class="empty-state">

                    <div class="empty-icon">
                        📚
                    </div>

                    <strong>
                        Select a form to begin
                    </strong>

                    Choose Form 1–6 above to view
                    available papers.

                </div>

            `;

            updateResultCount(0);

        }


        /* =================================================
           EMPTY STATE
        ================================================= */

        function showEmpty(
            title,
            message
        ) {

            optionsContainer.innerHTML = `

                <div class="empty-state"
                     style="grid-column:1/-1;">

                    <div class="empty-icon">
                        📭
                    </div>

                    <strong>
                        ${escapeHTML(title)}
                    </strong>

                    ${escapeHTML(message)}

                </div>

            `;

        }


        /* =================================================
           ERROR STATE
        ================================================= */

        function showError(
            title,
            message
        ) {

            const container =
                document.getElementById(
                    "optionsContainer"
                );


            if (container) {

                container.innerHTML = `

                    <div class="empty-state error-state"
                         style="grid-column:1/-1;">

                        <div class="empty-icon">
                            ⚠️
                        </div>

                        <strong>
                            ${escapeHTML(title)}
                        </strong>

                        ${escapeHTML(message)}

                    </div>

                `;

            }


            console.error(
                "GEPAM Past Papers Error:",
                title,
                message
            );

        }


        /* =================================================
           CHAIN TITLE
        ================================================= */

        function buildChainTitle() {

            return (

                (formLabels[selectedForm] ||
                    selectedForm)

                + " • " +

                (subjectLabels[selectedSubject] ||
                    selectedSubject)

                + " • " +

                (typeLabels[selectedType] ||
                    selectedType)

                + " • " +

                selectedYear

                + " • " +

                getLocationName(
                    selectedLocation
                )

            );

        }


        /* =================================================
           LOCATION NAME
        ================================================= */

        function getLocationName(location) {

            if (!location) {

                return "General";

            }


            if (
                locationLabels[location]
            ) {

                return locationLabels[location];

            }


            return formatText(location);

        }


        /* =================================================
           NORMALIZE
        ================================================= */

        function normalize(value) {

            if (
                value === undefined ||
                value === null
            ) {

                return "";

            }


            return String(value)
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "_")
                .replace(/-/g, "_");

        }


        /* =================================================
           FORMAT TEXT
        ================================================= */

        function formatText(value) {

            if (!value) {

                return "";

            }


            return String(value)
                .replace(/_/g, " ")
                .replace(/\b\w/g, function (letter) {

                    return letter.toUpperCase();

                });

        }


        /* =================================================
           UNIQUE
        ================================================= */

        function unique(array) {

            return [
                ...new Set(array)
            ];

        }


        /* =================================================
           SORTED UNIQUE NUMBERS
        ================================================= */

        function uniqueSorted(array) {

            return [
                ...new Set(array)
            ].sort(function (a, b) {

                return a - b;

            });

        }


        /* =================================================
           ESCAPE HTML
        ================================================= */

        function escapeHTML(value) {

            return String(value)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");

        }

    });

})();
