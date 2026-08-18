// ============================================================
// GEPAM SCIENCE HUB
// PAST PAPERS NAVIGATION ENGINE
//
// Mfumo:
// Past Papers
// → Form
// → Subject
// → Exam Type
// → Year
// → Region / School
// → Paper Chain
// → Open PDF
// ============================================================

(function () {

    "use strict";

    const app = document.getElementById("pastPaperApp");

    // ---------------------------------------------------------
    // CHECK DATA
    // ---------------------------------------------------------

    function checkData() {

        if (!app) {
            console.error("pastPaperApp haijapatikana.");
            return false;
        }

        if (typeof pastPaperConfig === "undefined") {
            showError(
                "pastPaperConfig haijapatikana.",
                "Hakikisha data.js imewekwa kabla ya pastpapers.js."
            );
            return false;
        }

        if (typeof pastPapers === "undefined") {
            showError(
                "pastPapers haijapatikana.",
                "Hakikisha data.js ina database ya past papers."
            );
            return false;
        }

        return true;
    }


    // ---------------------------------------------------------
    // ERROR
    // ---------------------------------------------------------

    function showError(title, message) {

        app.innerHTML = `
            <div class="error-state">
                <h3>⚠️ Data Error</h3>
                <p><strong>${escapeHTML(title)}</strong></p>
                <p>${escapeHTML(message)}</p>
            </div>
        `;
    }


    // ---------------------------------------------------------
    // ESCAPE HTML
    // ---------------------------------------------------------

    function escapeHTML(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    // ---------------------------------------------------------
    // LABELS
    // ---------------------------------------------------------

    const formNames = {
        form1: "Form 1",
        form2: "Form 2",
        form3: "Form 3",
        form4: "Form 4",
        form5: "Form 5",
        form6: "Form 6"
    };


    const subjectNames = {
        physics: "Physics",
        chemistry: "Chemistry"
    };


    const typeNames = {
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


    // ---------------------------------------------------------
    // REGION NAMES
    // ---------------------------------------------------------

    const regionNames = {

        dar_es_salaam: "Dar es Salaam",
        dodoma: "Dodoma",
        arusha: "Arusha",
        mbeya: "Mbeya",
        kagera: "Kagera",
        shinyanga: "Shinyanga",
        necta: "NECTA"
    };


    function getRegionName(region) {

        return regionNames[region] ||
               String(region || "")
                   .replace(/_/g, " ")
                   .replace(/\b\w/g, c => c.toUpperCase());
    }


    // ---------------------------------------------------------
    // BREADCRUMB
    // ---------------------------------------------------------

    function breadcrumb(items) {

        return `
            <div class="pp-breadcrumb">
                ${items.map((item, index) => {

                    if (index === items.length - 1) {
                        return `<strong>${escapeHTML(item)}</strong>`;
                    }

                    return `<span>${escapeHTML(item)}</span> → `;

                }).join("")}
            </div>
        `;
    }


    // ---------------------------------------------------------
    // BACK BUTTON
    // ---------------------------------------------------------

    function backButton(callback) {

        return `
            <button class="pp-back" id="ppBackBtn">
                ← Back
            </button>
        `;
    }


    function attachBack(callback) {

        const button = document.getElementById("ppBackBtn");

        if (button) {
            button.onclick = callback;
        }
    }


    // =========================================================
    // STEP 1
    // FORM
    // =========================================================

    function showForms() {

        const forms = Object.keys(pastPaperConfig);

        if (!forms.length) {
            app.innerHTML = `
                <div class="empty-state">
                    <h3>Hakuna Forms</h3>
                    <p>Hakuna past paper configuration iliyopatikana.</p>
                </div>
            `;
            return;
        }

        app.innerHTML = `

            <div class="step-note">
                📌 Chagua kidato unachotaka kuona past papers zake.
            </div>

            <div class="pp-grid">

                ${forms.map(form => `

                    <div class="pp-card"
                         data-form="${escapeHTML(form)}">

                        <div class="pp-icon">📚</div>

                        <h3>
                            ${escapeHTML(formNames[form] || form)}
                        </h3>

                        <p>
                            Physics & Chemistry
                        </p>

                    </div>

                `).join("")}

            </div>
        `;


        document.querySelectorAll("[data-form]").forEach(card => {

            card.addEventListener("click", () => {

                showSubjects(card.dataset.form);

            });

        });

    }


    // =========================================================
    // STEP 2
    // SUBJECT
    // =========================================================

    function showSubjects(form) {

        const config = pastPaperConfig[form];

        if (!config) {
            showForms();
            return;
        }

        const subjects = config.subjects || [];

        app.innerHTML = `

            ${breadcrumb([
                "Past Papers",
                formNames[form] || form
            ])}

            ${backButton(showForms)}

            <div class="step-note">
                📖 Chagua somo.
            </div>

            <div class="pp-grid">

                ${subjects.map(subject => `

                    <div class="pp-card"
                         data-subject="${escapeHTML(subject)}">

                        <div class="pp-icon">
                            ${subject === "physics" ? "⚛️" : "🧪"}
                        </div>

                        <h3>
                            ${escapeHTML(
                                subjectNames[subject] || subject
                            )}
                        </h3>

                        <p>
                            Past Papers
                        </p>

                    </div>

                `).join("")}

            </div>
        `;


        attachBack(showForms);


        document.querySelectorAll("[data-subject]").forEach(card => {

            card.addEventListener("click", () => {

                showExamTypes(
                    form,
                    card.dataset.subject
                );

            });

        });

    }


    // =========================================================
    // STEP 3
    // EXAM TYPE
    // =========================================================

    function showExamTypes(form, subject) {

        const config = pastPaperConfig[form];

        if (!config) {
            showForms();
            return;
        }

        const types = config.types || [];

        app.innerHTML = `

            ${breadcrumb([
                "Past Papers",
                formNames[form] || form,
                subjectNames[subject] || subject
            ])}

            ${backButton(() =>
                showSubjects(form)
            )}

            <div class="step-note">
                📝 Chagua aina ya mtihani.
            </div>

            <div class="pp-grid">

                ${types.map(type => `

                    <div class="pp-card"
                         data-type="${escapeHTML(type)}">

                        <div class="pp-icon">📝</div>

                        <h3>
                            ${escapeHTML(
                                typeNames[type] || type
                            )}
                        </h3>

                        <p>
                            ${escapeHTML(
                                subjectNames[subject] || subject
                            )}
                        </p>

                    </div>

                `).join("")}

            </div>
        `;


        attachBack(() =>
            showSubjects(form)
        );


        document.querySelectorAll("[data-type]").forEach(card => {

            card.addEventListener("click", () => {

                showYears(
                    form,
                    subject,
                    card.dataset.type
                );

            });

        });

    }


    // =========================================================
    // STEP 4
    // YEAR
    // =========================================================

    function showYears(form, subject, type) {

        const papers = getPapers(form, subject, type);

        const years = uniqueSorted(
            papers.map(p => p.year)
        );

        if (!years.length) {

            showEmpty(
                form,
                subject,
                type,
                "Hakuna papers zilizowekwa kwenye database kwa uchaguzi huu."
            );

            return;
        }


        app.innerHTML = `

            ${breadcrumb([
                "Past Papers",
                formNames[form] || form,
                subjectNames[subject] || subject,
                typeNames[type] || type
            ])}

            ${backButton(() =>
                showExamTypes(form, subject)
            )}

            <div class="step-note">
                📅 Chagua mwaka.
            </div>

            <div class="pp-grid">

                ${years.map(year => `

                    <div class="pp-card"
                         data-year="${year}">

                        <div class="pp-icon">📅</div>

                        <h3>${year}</h3>

                        <p>
                            ${escapeHTML(
                                typeNames[type] || type
                            )}
                        </p>

                    </div>

                `).join("")}

            </div>
        `;


        attachBack(() =>
            showExamTypes(form, subject)
        );


        document.querySelectorAll("[data-year]").forEach(card => {

            card.addEventListener("click", () => {

                showRegions(
                    form,
                    subject,
                    type,
                    Number(card.dataset.year)
                );

            });

        });

    }


    // =========================================================
    // STEP 5
    // REGION / SCHOOL
    // =========================================================

    function showRegions(form, subject, type, year) {

        const papers = getPapers(form, subject, type)
            .filter(p => Number(p.year) === Number(year));


        if (!papers.length) {

            showEmpty(
                form,
                subject,
                type,
                "Hakuna papers kwa mwaka huu."
            );

            return;
        }


        const regions = [];

        papers.forEach(paper => {

            const region = paper.region || "other";

            if (!regions.includes(region)) {
                regions.push(region);
            }

        });


        app.innerHTML = `

            ${breadcrumb([
                "Past Papers",
                formNames[form] || form,
                subjectNames[subject] || subject,
                typeNames[type] || type,
                year
            ])}

            ${backButton(() =>
                showYears(form, subject, type)
            )}

            <div class="step-note">
                📍 Chagua Mkoa / eneo la mtihani.
            </div>

            <div class="pp-grid">

                ${regions.map(region => `

                    <div class="pp-card"
                         data-region="${escapeHTML(region)}">

                        <div class="pp-icon">📍</div>

                        <h3>
                            ${escapeHTML(
                                getRegionName(region)
                            )}
                        </h3>

                        <p>
                            ${papers.filter(
                                p => p.region === region
                            ).length} paper(s)
                        </p>

                    </div>

                `).join("")}

            </div>
        `;


        attachBack(() =>
            showYears(form, subject, type)
        );


        document.querySelectorAll("[data-region]").forEach(card => {

            card.addEventListener("click", () => {

                showPaperChain(
                    form,
                    subject,
                    type,
                    year,
                    card.dataset.region
                );

            });

        });

    }


    // =========================================================
    // STEP 6
    // PAPER CHAIN
    // =========================================================

    function showPaperChain(
        form,
        subject,
        type,
        year,
        region
    ) {

        const papers = getPapers(form, subject, type)
            .filter(p =>
                Number(p.year) === Number(year) &&
                String(p.region) === String(region)
            );


        if (!papers.length) {

            showEmpty(
                form,
                subject,
                type,
                "Hakuna paper iliyopatikana."
            );

            return;
        }


        app.innerHTML = `

            ${breadcrumb([
                "Past Papers",
                formNames[form] || form,
                subjectNames[subject] || subject,
                typeNames[type] || type,
                year,
                getRegionName(region)
            ])}

            ${backButton(() =>
                showRegions(form, subject, type, year)
            )}

            <div class="step-note">
                📄 Chagua paper unayotaka kufungua.
            </div>

            <div>

                ${papers.map((paper, index) => `

                    <div class="paper-card">

                        <div class="paper-info">

                            <h3>
                                ${escapeHTML(
                                    paper.title ||
                                    `Paper ${index + 1}`
                                )}
                            </h3>

                            <p>
                                📚
                                ${escapeHTML(
                                    subjectNames[subject] ||
                                    subject
                                )}
                            </p>

                            <p>
                                📝
                                ${escapeHTML(
                                    typeNames[type] ||
                                    type
                                )}
                            </p>

                            <p>
                                📅 ${escapeHTML(paper.year)}
                                &nbsp; | &nbsp;
                                📍 ${escapeHTML(
                                    getRegionName(paper.region)
                                )}
                            </p>

                        </div>

                        <a
                            class="open-paper"
                            href="${escapeHTML(paper.file)}"
                            target="_blank"
                            rel="noopener"
                        >
                            📄 Fungua PDF
                        </a>

                    </div>

                `).join("")}

            </div>
        `;


        attachBack(() =>
            showRegions(
                form,
                subject,
                type,
                year
            )
        );

    }


    // =========================================================
    // GET PAPERS
    // =========================================================

    function getPapers(form, subject, type) {

        if (
            !pastPapers ||
            !pastPapers[form] ||
            !Array.isArray(pastPapers[form][subject])
        ) {
            return [];
        }


        return pastPapers[form][subject]
            .filter(paper =>
                String(paper.type).toLowerCase() ===
                String(type).toLowerCase()
            );

    }


    // =========================================================
    // UNIQUE SORTED
    // =========================================================

    function uniqueSorted(values) {

        return [...new Set(values)]
            .filter(v =>
                v !== undefined &&
                v !== null &&
                v !== ""
            )
            .sort((a, b) => Number(b) - Number(a));

    }


    // =========================================================
    // EMPTY
    // =========================================================

    function showEmpty(
        form,
        subject,
        type,
        message
    ) {

        app.innerHTML = `

            ${breadcrumb([
                "Past Papers",
                formNames[form] || form,
                subjectNames[subject] || subject,
                typeNames[type] || type
            ])}

            ${backButton(() =>
                showExamTypes(form, subject)
            )}

            <div class="empty-state">

                <div style="font-size:45px;">
                    📭
                </div>

                <h3>Hakuna Papers</h3>

                <p>
                    ${escapeHTML(message)}
                </p>

            </div>
        `;


        attachBack(() =>
            showExamTypes(form, subject)
        );

    }


    // =========================================================
    // START
    // =========================================================

    function start() {

        if (!checkData()) {
            return;
        }

        showForms();

    }


    // Kwa sababu scripts zote ni defer,
    // DOM tayari imekuwa parsed wakati script hii ina-run.
    start();


})();
