/* =========================================================
   GEPAM SCIENCE HUB
   PAST PAPERS NAVIGATION ENGINE

   Flow:

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
   Paper Chain
       ↓
   Open PDF
========================================================= */


let currentStep = "form";

let selected = {
    form: null,
    subject: null,
    type: null,
    year: null,
    region: null
};


/* =========================================================
   HELPER: FIND DATA OBJECT
========================================================= */

function getPastPaperData() {

    /*
       Your pastpapers.data.js is expected to expose:

       const pastPapersData = {
           form1: {...},
           form2: {...},
           ...
           form6: {...}
       };

       If your variable has another name, change only the
       variable below.
    */

    if (typeof pastPapersData !== "undefined") {
        return pastPapersData;
    }

    if (typeof pastpapersData !== "undefined") {
        return pastpapersData;
    }

    if (typeof PAST_PAPERS_DATA !== "undefined") {
        return PAST_PAPERS_DATA;
    }

    console.error("Past papers data was not found.");

    return {};
}


/* =========================================================
   FORM LABELS
========================================================= */

const formLabels = {
    form1: "Form 1",
    form2: "Form 2",
    form3: "Form 3",
    form4: "Form 4",
    form5: "Form 5",
    form6: "Form 6"
};


/* =========================================================
   SUBJECT LABELS
========================================================= */

const subjectLabels = {
    physics: "Physics",
    chemistry: "Chemistry"
};


/* =========================================================
   EXAM TYPE LABELS
========================================================= */

const typeLabels = {
    annual: "Annual Examination",
    terminal: "Terminal Examination",
    midterm: "Midterm Examination",
    joint: "Joint Examination",
    mock: "Mock Examination",
    pre_necta: "Pre-NECTA Examination",
    necta: "NECTA Examination",
    csee: "CSEE Examination",
    acsee: "ACSEE Examination"
};


/* =========================================================
   REGION LABELS
========================================================= */

const regionLabels = {
    dar_es_salaam: "Dar es Salaam",
    dodoma: "Dodoma",
    arusha: "Arusha",
    mbeya: "Mbeya",
    kagera: "Kagera",
    shinyanga: "Shinyanga",
    mwanza: "Mwanza",
    tanga: "Tanga",
    morogoro: "Morogoro",
    singida: "Singida",
    tabora: "Tabora",
    kigoma: "Kigoma",
    iringa: "Iringa",
    njombe: "Njombe",
    rukwa: "Rukwa",
    katavi: "Katavi",
    mtwara: "Mtwara",
    lindi: "Lindi",
    manyara: "Manyara",
    mara: "Mara",
    simiyu: "Simiyu",
    songwe: "Songwe",
    pwani: "Pwani",
    geita: "Geita",
    zanzibar: "Zanzibar",
    necta: "NECTA"
};


/* =========================================================
   DISPLAY LABEL
========================================================= */

function prettyLabel(value, type = "general") {

    if (!value) return "";

    if (type === "form") {
        return formLabels[value] || value;
    }

    if (type === "subject") {
        return subjectLabels[value] || value;
    }

    if (type === "type") {
        return typeLabels[value] || value;
    }

    if (type === "region") {
        return regionLabels[value] || formatText(value);
    }

    return formatText(value);
}


/* =========================================================
   FORMAT UNKNOWN TEXT
========================================================= */

function formatText(value) {

    return String(value)
        .replace(/_/g, " ")
        .replace(/\b\w/g, letter => letter.toUpperCase());
}


/* =========================================================
   SCREEN CONTROL
========================================================= */

function showScreen(screenName) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById("screen-" + screenName);

    if (target) {
        target.classList.add("active");
    }

    currentStep = screenName;

    updateBreadcrumb();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   BREADCRUMB
========================================================= */

function updateBreadcrumb() {

    const breadcrumb = document.getElementById("breadcrumb");

    if (!breadcrumb) return;

    const items = [];

    items.push({
        label: "Past Papers",
        step: "form"
    });

    if (selected.form) {
        items.push({
            label: prettyLabel(selected.form, "form"),
            step: "subject"
        });
    }

    if (selected.subject) {
        items.push({
            label: prettyLabel(selected.subject, "subject"),
            step: "type"
        });
    }

    if (selected.type) {
        items.push({
            label: prettyLabel(selected.type, "type"),
            step: "year"
        });
    }

    if (selected.year) {
        items.push({
            label: selected.year,
            step: "region"
        });
    }

    if (selected.region) {
        items.push({
            label: prettyLabel(selected.region, "region"),
            step: "papers"
        });
    }

    breadcrumb.innerHTML = items.map((item, index) => {

        const arrow = index < items.length - 1
            ? `<span style="cursor:default;">›</span>`
            : "";

        return `
            <span
                class="${item.step === currentStep ? "active" : ""}"
                onclick="breadcrumbGo('${item.step}')"
            >
                ${item.label}
            </span>
            ${arrow}
        `;

    }).join("");
}


/* =========================================================
   BREADCRUMB NAVIGATION
========================================================= */

function breadcrumbGo(step) {

    if (step === "form") {

        selected = {
            form: null,
            subject: null,
            type: null,
            year: null,
            region: null
        };

        renderForms();
        showScreen("form");
        return;
    }


    if (step === "subject" && selected.form) {

        selected.subject = null;
        selected.type = null;
        selected.year = null;
        selected.region = null;

        renderSubjects();
        showScreen("subject");
        return;
    }


    if (step === "type" && selected.subject) {

        selected.type = null;
        selected.year = null;
        selected.region = null;

        renderExamTypes();
        showScreen("type");
        return;
    }


    if (step === "year" && selected.type) {

        selected.year = null;
        selected.region = null;

        renderYears();
        showScreen("year");
        return;
    }


    if (step === "region" && selected.year) {

        selected.region = null;

        renderRegions();
        showScreen("region");
        return;
    }


    if (step === "papers" && selected.region) {

        renderPapers();
        showScreen("papers");
    }
}


/* =========================================================
   STEP 1: FORMS
========================================================= */

function renderForms() {

    const data = getPastPaperData();

    const container = document.getElementById("formChoices");

    container.innerHTML = "";

    Object.keys(data)
        .filter(key => /^form[1-6]$/i.test(key))
        .sort((a, b) => {

            const numA = Number(a.replace(/\D/g, ""));
            const numB = Number(b.replace(/\D/g, ""));

            return numA - numB;

        })
        .forEach(form => {

            container.innerHTML += `
                <div
                    class="choice-card"
                    onclick="selectForm('${form}')"
                >
                    <div class="choice-icon">📚</div>

                    <h3>
                        ${prettyLabel(form, "form")}
                    </h3>

                    <p>
                        View available past papers
                    </p>
                </div>
            `;
        });


    if (!container.innerHTML) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>No Forms Available</h3>
                <p>
                    No past paper data was found.
                </p>
            </div>
        `;
    }
}


/* =========================================================
   SELECT FORM
========================================================= */

function selectForm(form) {

    selected.form = form;
    selected.subject = null;
    selected.type = null;
    selected.year = null;
    selected.region = null;

    renderSubjects();

    showScreen("subject");
}


/* =========================================================
   STEP 2: SUBJECT
========================================================= */

function renderSubjects() {

    const data = getPastPaperData();

    const formData = data[selected.form];

    const container = document.getElementById("subjectChoices");

    container.innerHTML = "";

    if (!formData) {

        showEmpty(
            container,
            "No Data",
            "No past paper data is available for this form."
        );

        return;
    }


    Object.keys(formData)
        .filter(subject => {

            return Array.isArray(formData[subject]);

        })
        .forEach(subject => {

            container.innerHTML += `
                <div
                    class="choice-card"
                    onclick="selectSubject('${subject}')"
                >
                    <div class="choice-icon">
                        ${subject === "physics" ? "⚛️" : "🧪"}
                    </div>

                    <h3>
                        ${prettyLabel(subject, "subject")}
                    </h3>

                    <p>
                        Past examination papers
                    </p>
                </div>
            `;
        });


    if (!container.innerHTML) {

        showEmpty(
            container,
            "No Subjects Available",
            "There are no Physics or Chemistry papers available here."
        );
    }
}


/* =========================================================
   SELECT SUBJECT
========================================================= */

function selectSubject(subject) {

    selected.subject = subject;
    selected.type = null;
    selected.year = null;
    selected.region = null;

    renderExamTypes();

    showScreen("type");
}


/* =========================================================
   GET CURRENT PAPERS
========================================================= */

function getCurrentPapers() {

    const data = getPastPaperData();

    if (!selected.form) return [];

    if (!data[selected.form]) return [];

    if (!selected.subject) return [];

    if (!Array.isArray(data[selected.form][selected.subject])) {
        return [];
    }

    return data[selected.form][selected.subject];
}


/* =========================================================
   STEP 3: EXAM TYPES
========================================================= */

function renderExamTypes() {

    const papers = getCurrentPapers();

    const container = document.getElementById("typeChoices");

    container.innerHTML = "";

    const types = [
        ...new Set(
            papers
                .map(paper => paper.type)
                .filter(Boolean)
        )
    ];


    types.sort((a, b) => {

        const labelA = prettyLabel(a, "type");
        const labelB = prettyLabel(b, "type");

        return labelA.localeCompare(labelB);
    });


    types.forEach(type => {

        const count = papers.filter(
            paper => paper.type === type
        ).length;

        container.innerHTML += `
            <div
                class="choice-card"
                onclick="selectExamType('${type}')"
            >
                <div class="choice-icon">📝</div>

                <h3>
                    ${prettyLabel(type, "type")}
                </h3>

                <p>
                    ${count} paper${count === 1 ? "" : "s"} available
                </p>
            </div>
        `;
    });


    if (!container.innerHTML) {

        showEmpty(
            container,
            "No Exam Types",
            "No examination type is available for this selection."
        );
    }
}


/* =========================================================
   SELECT EXAM TYPE
========================================================= */

function selectExamType(type) {

    selected.type = type;
    selected.year = null;
    selected.region = null;

    renderYears();

    showScreen("year");
}


/* =========================================================
   STEP 4: YEARS
========================================================= */

function renderYears() {

    const papers = getCurrentPapers();

    const container = document.getElementById("yearChoices");

    container.innerHTML = "";

    const years = [
        ...new Set(
            papers
                .filter(paper => paper.type === selected.type)
                .map(paper => Number(paper.year))
                .filter(year => !Number.isNaN(year))
        )
    ];


    years.sort((a, b) => b - a);


    years.forEach(year => {

        const count = papers.filter(paper =>
            paper.type === selected.type &&
            Number(paper.year) === year
        ).length;

        container.innerHTML += `
            <div
                class="choice-card"
                onclick="selectYear(${year})"
            >
                <div class="choice-icon">📅</div>

                <h3>${year}</h3>

                <p>
                    ${count} paper${count === 1 ? "" : "s"} available
                </p>
            </div>
        `;
    });


    if (!container.innerHTML) {

        showEmpty(
            container,
            "No Years Available",
            "There are no papers for this examination type."
        );
    }
}


/* =========================================================
   SELECT YEAR
========================================================= */

function selectYear(year) {

    selected.year = year;
    selected.region = null;

    renderRegions();

    showScreen("region");
}


/* =========================================================
   STEP 5: REGION / SCHOOL
========================================================= */

function renderRegions() {

    const papers = getCurrentPapers();

    const container = document.getElementById("regionChoices");

    container.innerHTML = "";


    const filtered = papers.filter(paper =>

        paper.type === selected.type &&
        Number(paper.year) === Number(selected.year)

    );


    const regions = [
        ...new Set(
            filtered
                .map(paper => paper.region)
                .filter(Boolean)
        )
    ];


    regions.sort((a, b) => {

        return prettyLabel(a, "region")
            .localeCompare(
                prettyLabel(b, "region")
            );
    });


    regions.forEach(region => {

        const count = filtered.filter(
            paper => paper.region === region
        ).length;

        container.innerHTML += `
            <div
                class="choice-card"
                onclick="selectRegion('${region}')"
            >
                <div class="choice-icon">📍</div>

                <h3>
                    ${prettyLabel(region, "region")}
                </h3>

                <p>
                    ${count} paper${count === 1 ? "" : "s"} available
                </p>
            </div>
        `;
    });


    if (!container.innerHTML) {

        showEmpty(
            container,
            "No Region / School",
            "No region or school data is available for this selection."
        );
    }
}


/* =========================================================
   SELECT REGION
========================================================= */

function selectRegion(region) {

    selected.region = region;

    renderPapers();

    showScreen("papers");
}


/* =========================================================
   STEP 6: PAPER CHAIN
========================================================= */

function renderPapers() {

    const papers = getCurrentPapers();

    const container = document.getElementById("paperList");

    const description =
        document.getElementById("paperDescription");


    container.innerHTML = "";


    const filtered = papers.filter(paper =>

        paper.type === selected.type &&
        Number(paper.year) === Number(selected.year) &&
        paper.region === selected.region

    );


    description.textContent =
        `${prettyLabel(selected.form, "form")} → ` +
        `${prettyLabel(selected.subject, "subject")} → ` +
        `${prettyLabel(selected.type, "type")} → ` +
        `${selected.year} → ` +
        `${prettyLabel(selected.region, "region")}`;


    /*
       PAPER CHAIN

       Sort naturally:

       Paper 1
       Paper 2
       Paper 3A
       Paper 3B
    */

    filtered.sort(comparePapers);


    filtered.forEach(paper => {

        const safeFile = encodeURI(paper.file);

        container.innerHTML += `

            <div class="paper-card">

                <div class="paper-info">

                    <h3>
                        📄 ${escapeHTML(paper.title)}
                    </h3>

                    <p>
                        ${prettyLabel(selected.subject, "subject")}
                        •
                        ${selected.year}
                        •
                        ${prettyLabel(selected.region, "region")}
                    </p>

                </div>


                <a
                    class="open-pdf"
                    href="${safeFile}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📖 Fungua PDF
                </a>

            </div>

        `;
    });


    if (!container.innerHTML) {

        showEmpty(
            container,
            "No Papers Found",
            "There is no PDF available for this exact selection."
        );
    }
}


/* =========================================================
   PAPER SORTING
========================================================= */

function comparePapers(a, b) {

    const titleA = String(a.title || "").toLowerCase();
    const titleB = String(b.title || "").toLowerCase();


    function paperNumber(title) {

        const match = title.match(/(\d+)/);

        return match
            ? Number(match[1])
            : 999;
    }


    const numA = paperNumber(titleA);
    const numB = paperNumber(titleB);


    if (numA !== numB) {
        return numA - numB;
    }


    /*
       3A before 3B
    */

    return titleA.localeCompare(titleB);
}


/* =========================================================
   BACK BUTTON
========================================================= */

function goBack() {

    if (currentStep === "subject") {

        selected.form = null;

        renderForms();

        showScreen("form");

        return;
    }


    if (currentStep === "type") {

        selected.subject = null;

        renderSubjects();

        showScreen("subject");

        return;
    }


    if (currentStep === "year") {

        selected.type = null;

        renderExamTypes();

        showScreen("type");

        return;
    }


    if (currentStep === "region") {

        selected.year = null;

        renderYears();

        showScreen("year");

        return;
    }


    if (currentStep === "papers") {

        selected.region = null;

        renderRegions();

        showScreen("region");

        return;
    }
}


/* =========================================================
   EMPTY STATE
========================================================= */

function showEmpty(container, title, message) {

    container.innerHTML = `

        <div class="empty-state">

            <h3>${escapeHTML(title)}</h3>

            <p>${escapeHTML(message)}</p>

        </div>

    `;
}


/* =========================================================
   BASIC HTML ESCAPE
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    renderForms();

    updateBreadcrumb();

});
