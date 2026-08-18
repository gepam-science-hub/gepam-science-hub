/* ============================================================
   GEPAM SCIENCE HUB
   PAST PAPERS CHAIN ENGINE
   ============================================================ */

const container = document.getElementById("chainContainer");
const title = document.getElementById("chainTitle");
const breadcrumb = document.getElementById("breadcrumb");
const backBtn = document.getElementById("backBtn");
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

let navigationStack = [];

/* ============================================================
   MOBILE MENU
   ============================================================ */

menuBtn.addEventListener("click", () => {

    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }

});


/* ============================================================
   HELPERS
   ============================================================ */

function prettyName(value) {

    if (!value) return "";

    const names = {
        "physics": "Physics",
        "chemistry": "Chemistry",

        "midterm": "Midterm Examination",
        "terminal": "Terminal Examination",
        "annual": "Annual Examination",
        "joint": "Joint Examination",
        "mock": "Mock Examination",
        "pre_necta": "Pre-NECTA",
        "ftna": "FTNA",
        "csee": "CSEE",
        "acsee": "ACSEE",
        "necta": "NECTA",

        "dar_es_salaam": "Dar es Salaam",
        "dodoma": "Dodoma",
        "arusha": "Arusha",
        "mbeya": "Mbeya",
        "kagera": "Kagera",
        "shinyanga": "Shinyanga"
    };

    if (names[value]) {
        return names[value];
    }

    return value
        .replaceAll("_", " ")
        .replace(/\b\w/g, letter => letter.toUpperCase());
}


function formName(form) {

    return form
        .replace("form", "Form ")
        .trim();
}


/* ============================================================
   GET FORM DATA SAFELY
   ============================================================ */

function getFormData(form) {

    if (!pastPapers) return {};

    return pastPapers[form] || {};
}


/* ============================================================
   GET AVAILABLE FORMS
   ============================================================ */

function getForms() {

    return Object.keys(pastPapers || {});
}


/* ============================================================
   RENDER BREADCRUMB
   ============================================================ */

function updateBreadcrumb() {

    if (navigationStack.length === 0) {

        breadcrumb.innerHTML =
            `<span>Past Papers</span>`;

        return;
    }

    const parts = navigationStack.map(item => {

        return `<span>${item.label}</span>`;

    });

    breadcrumb.innerHTML =
        `<span>Past Papers</span> › ${parts.join(" › ")}`;
}


/* ============================================================
   NAVIGATION
   ============================================================ */

function goTo(label, renderFunction) {

    navigationStack.push({
        label: label,
        render: renderFunction
    });

    renderFunction();

}


/* ============================================================
   BACK BUTTON
   ============================================================ */

backBtn.addEventListener("click", () => {

    if (navigationStack.length === 0) {

        window.location.href = "index.html";

        return;
    }

    navigationStack.pop();

    if (navigationStack.length === 0) {

        renderForms();

    } else {

        const previous =
            navigationStack[navigationStack.length - 1];

        previous.render();
    }

});


/* ============================================================
   MAIN FORM LEVEL
   ============================================================ */

function renderForms() {

    container.innerHTML = "";

    title.textContent = "Select Form";

    navigationStack.length = 0;

    updateBreadcrumb();

    const forms = getForms();

    if (forms.length === 0) {

        container.innerHTML = `
            <div class="empty">
                No forms found.
            </div>
        `;

        return;
    }

    forms.forEach(form => {

        const card = document.createElement("div");

        card.className = "chain-card";

        card.innerHTML = `
            <h3>${formName(form)}</h3>
            <p>View available examination papers</p>
        `;

        card.onclick = () => {

            goTo(
                formName(form),
                () => renderSubjects(form)
            );

        };

        container.appendChild(card);

    });
}


/* ============================================================
   SUBJECT LEVEL
   ============================================================ */

function renderSubjects(form) {

    container.innerHTML = "";

    title.textContent =
        `${formName(form)} — Select Subject`;

    updateBreadcrumb();

    const subjects =
        Object.keys(getFormData(form));

    if (subjects.length === 0) {

        container.innerHTML = `
            <div class="empty">
                No subjects found.
            </div>
        `;

        return;
    }

    subjects.forEach(subject => {

        const card = document.createElement("div");

        card.className = "chain-card";

        card.innerHTML = `
            <h3>${prettyName(subject)}</h3>
            <p>View examination types</p>
        `;

        card.onclick = () => {

            goTo(
                prettyName(subject),
                () => renderExamTypes(form, subject)
            );

        };

        container.appendChild(card);

    });
}


/* ============================================================
   EXAM TYPE LEVEL
   ============================================================ */

function renderExamTypes(form, subject) {

    container.innerHTML = "";

    title.textContent =
        `${formName(form)} — ${prettyName(subject)}`;

    updateBreadcrumb();

    const papers =
        getFormData(form)[subject] || [];

    const types = [
        ...new Set(
            papers
                .map(p => p.type)
                .filter(Boolean)
        )
    ];

    if (types.length === 0) {

        container.innerHTML = `
            <div class="empty">
                No examination types found.
            </div>
        `;

        return;
    }

    types.forEach(type => {

        const card = document.createElement("div");

        card.className = "chain-card";

        card.innerHTML = `
            <h3>${prettyName(type)}</h3>
            <p>Continue to available papers</p>
        `;

        card.onclick = () => {

            goTo(
                prettyName(type),
                () => renderNextLevel(form, subject, type)
            );

        };

        container.appendChild(card);

    });
}


/* ============================================================
   DETERMINE NEXT LEVEL
   ============================================================ */

function renderNextLevel(form, subject, type) {

    const papers =
        getFormData(form)[subject]
        .filter(p => p.type === type);

    /*
       MIDTERM / TERMINAL / ANNUAL / JOINT
       -----------------------------------
       SCHOOL ONLY
    */

    if (
        type === "midterm" ||
        type === "terminal" ||
        type === "annual" ||
        type === "joint"
    ) {

        renderSchools(form, subject, type, papers);

        return;
    }


    /*
       MOCK / PRE-NECTA
       ----------------
       REGION → YEAR → PAPER
    */

    if (
        type === "mock" ||
        type === "pre_necta"
    ) {

        renderRegions(form, subject, type, papers);

        return;
    }


    /*
       FTNA
       ----
       YEAR → PAPER
    */

    if (type === "ftna") {

        renderYears(
            form,
            subject,
            type,
            null,
            papers
        );

        return;
    }


    /*
       CSEE / ACSEE / NECTA
       --------------------
       YEAR → PAPER
    */

    if (
        type === "csee" ||
        type === "acsee" ||
        type === "necta"
    ) {

        renderYears(
            form,
            subject,
            type,
            null,
            papers
        );

        return;
    }


    /*
       FALLBACK
       --------
       If future data has another type,
       inspect region first if available.
    */

    const hasRegions =
        papers.some(p => p.region);

    if (hasRegions) {

        renderRegions(
            form,
            subject,
            type,
            papers
        );

        return;
    }

    renderYears(
        form,
        subject,
        type,
        null,
        papers
    );
}


/* ============================================================
   SCHOOL LEVEL
   ============================================================ */

function renderSchools(
    form,
    subject,
    type,
    papers
) {

    container.innerHTML = "";

    title.textContent =
        `${prettyName(type)} — Select School`;

    updateBreadcrumb();

    /*
       IMPORTANT:
       No zone.
       No series.
       SCHOOL ONLY.
    */

    const schools = [
        ...new Set(
            papers
                .map(p => p.school)
                .filter(Boolean)
        )
    ];

    /*
       If old data doesn't have school yet,
       do NOT invent one.
    */

    if (schools.length === 0) {

        container.innerHTML = `
            <div class="empty">
                No schools have been assigned
                to these papers yet.
            </div>
        `;

        return;
    }

    schools.sort();

    schools.forEach(school => {

        const card = document.createElement("div");

        card.className = "chain-card";

        card.innerHTML = `
            <h3>${prettyName(school)}</h3>
            <p>Select school to continue</p>
        `;

        card.onclick = () => {

            goTo(
                prettyName(school),
                () =>
                    renderYears(
                        form,
                        subject,
                        type,
                        school,
                        papers
                    )
            );

        };

        container.appendChild(card);

    });
}


/* ============================================================
   REGION LEVEL
   ============================================================ */

function renderRegions(
    form,
    subject,
    type,
    papers
) {

    container.innerHTML = "";

    title.textContent =
        `${prettyName(type)} — Select Region`;

    updateBreadcrumb();

    const regions = [
        ...new Set(
            papers
                .map(p => p.region)
                .filter(Boolean)
        )
    ];

    if (regions.length === 0) {

        container.innerHTML = `
            <div class="empty">
                No regions found.
            </div>
        `;

        return;
    }

    regions.sort();

    regions.forEach(region => {

        const card = document.createElement("div");

        card.className = "chain-card";

        card.innerHTML = `
            <h3>${prettyName(region)}</h3>
            <p>Select region to continue</p>
        `;

        card.onclick = () => {

            goTo(
                prettyName(region),
                () =>
                    renderYears(
                        form,
                        subject,
                        type,
                        region,
                        papers
                    )
            );

        };

        container.appendChild(card);

    });
}


/* ============================================================
   YEAR LEVEL
   ============================================================ */

function renderYears(
    form,
    subject,
    type,
    locationValue,
    papers
) {

    container.innerHTML = "";

    title.textContent = "Select Year";

    updateBreadcrumb();

    let filtered = papers;

    /*
       School-based examinations
    */

    if (
        type === "midterm" ||
        type === "terminal" ||
        type === "annual" ||
        type === "joint"
    ) {

        filtered =
            papers.filter(
                p => p.school === locationValue
            );
    }

    /*
       Region-based examinations
    */

    else if (
        type === "mock" ||
        type === "pre_necta"
    ) {

        filtered =
            papers.filter(
                p => p.region === locationValue
            );
    }


    const years = [
        ...new Set(
            filtered
                .map(p => p.year)
                .filter(Boolean)
        )
    ];

    years.sort((a, b) => b - a);

    if (years.length === 0) {

        container.innerHTML = `
            <div class="empty">
                No years found.
            </div>
        `;

        return;
    }

    years.forEach(year => {

        const card = document.createElement("div");

        card.className = "chain-card";

        card.innerHTML = `
            <h3>${year}</h3>
            <p>View papers for ${year}</p>
        `;

        card.onclick = () => {

            goTo(
                String(year),
                () =>
                    renderPapers(
                        form,
                        subject,
                        type,
                        locationValue,
                        year,
                        filtered
                    )
            );

        };

        container.appendChild(card);

    });
}


/* ============================================================
   FINAL PAPER LEVEL
   ============================================================ */

function renderPapers(
    form,
    subject,
    type,
    locationValue,
    year,
    papers
) {

    container.innerHTML = "";

    title.textContent =
        `${year} — Available Papers`;

    updateBreadcrumb();

    let results =
        papers.filter(
            p => Number(p.year) === Number(year)
        );


    /*
       Extra safety for school types
    */

    if (
        type === "midterm" ||
        type === "terminal" ||
        type === "annual" ||
        type === "joint"
    ) {

        results =
            results.filter(
                p => p.school === locationValue
            );
    }


    /*
       Extra safety for region types
    */

    if (
        type === "mock" ||
        type === "pre_necta"
    ) {

        results =
            results.filter(
                p => p.region === locationValue
            );
    }


    if (results.length === 0) {

        container.innerHTML = `
            <div class="empty">
                No papers found for ${year}.
            </div>
        `;

        return;
    }


    const paperList =
        document.createElement("div");

    paperList.className = "paper-list";


    results.forEach(paper => {

        const card =
            document.createElement("div");

        card.className = "paper-card";

        const pdfPath =
            encodeURI(paper.file);

        card.innerHTML = `
            <h3>${paper.title}</h3>

            <p>
                <strong>Form:</strong>
                ${formName(form)}
            </p>

            <p>
                <strong>Subject:</strong>
                ${prettyName(subject)}
            </p>

            <p>
                <strong>Examination:</strong>
                ${prettyName(type)}
            </p>

            ${
                paper.school
                ? `
                <p>
                    <strong>School:</strong>
                    ${prettyName(paper.school)}
                </p>
                `
                : ""
            }

            ${
                paper.region
                ? `
                <p>
                    <strong>Region:</strong>
                    ${prettyName(paper.region)}
                </p>
                `
                : ""
            }

            <p>
                <strong>Year:</strong>
                ${paper.year}
            </p>

            <a
                class="open-pdf"
                href="${pdfPath}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Open PDF
            </a>
        `;

        paperList.appendChild(card);

    });

    container.appendChild(paperList);
}


/* ============================================================
   START APPLICATION
   ============================================================ */

renderForms();
