// ============================================================
// GEPAM SCIENCE HUB - PAST PAPERS ENGINE
// Mfumo:
// Past Papers → Form → Subject → Exam Type → Year
// → Region / School → Paper Chain → Fungua PDF
// ============================================================

import { pastPaperConfig, pastPapers } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {

    const formContainer = document.getElementById("form-container");
    const subjectContainer = document.getElementById("subject-container");
    const typeContainer = document.getElementById("type-container");
    const yearContainer = document.getElementById("year-container");
    const regionContainer = document.getElementById("region-container");
    const paperContainer = document.getElementById("paper-container");

    if (!formContainer) {
        console.error("GEPAM ERROR: form-container haipo kwenye pastpapers.html");
        return;
    }

    // --------------------------------------------------------
    // HIDE ALL STEPS
    // --------------------------------------------------------

    function hideAllAfter(container) {
        const containers = [
            subjectContainer,
            typeContainer,
            yearContainer,
            regionContainer,
            paperContainer
        ];

        const index = containers.indexOf(container);

        containers.forEach((el, i) => {
            if (el && i >= index) {
                el.innerHTML = "";
                el.style.display = "none";
            }
        });
    }

    function show(container) {
        if (container) {
            container.style.display = "block";
        }
    }

    // --------------------------------------------------------
    // BUTTON
    // --------------------------------------------------------

    function createButton(text, value, callback, extraClass = "") {

        const button = document.createElement("button");

        button.type = "button";
        button.className = `paper-option ${extraClass}`.trim();
        button.textContent = text;

        button.addEventListener("click", () => {
            callback(value);
        });

        return button;
    }

    // --------------------------------------------------------
    // STEP 1: FORM
    // --------------------------------------------------------

    function renderForms() {

        formContainer.innerHTML = "";

        const forms = Object.keys(pastPaperConfig);

        if (!forms.length) {
            formContainer.innerHTML = `
                <div class="empty-message">
                    No Forms Available
                </div>
            `;
            return;
        }

        forms.forEach(form => {

            const button = createButton(
                form.replace("form", "Form "),
                form,
                selectForm
            );

            formContainer.appendChild(button);
        });
    }

    // --------------------------------------------------------
    // STEP 2: SUBJECT
    // --------------------------------------------------------

    function selectForm(form) {

        hideAllAfter(subjectContainer);

        subjectContainer.innerHTML = "";

        const config = pastPaperConfig[form];

        if (!config || !config.subjects) {
            subjectContainer.innerHTML = `
                <div class="empty-message">
                    No subjects available.
                </div>
            `;
            show(subjectContainer);
            return;
        }

        config.subjects.forEach(subject => {

            const label =
                subject === "physics"
                    ? "⚛️ Physics"
                    : subject === "chemistry"
                        ? "🧪 Chemistry"
                        : capitalize(subject);

            const button = createButton(
                label,
                subject,
                value => selectSubject(form, value)
            );

            subjectContainer.appendChild(button);
        });

        show(subjectContainer);
    }

    // --------------------------------------------------------
    // STEP 3: SUBJECT SELECTED
    // --------------------------------------------------------

    function selectSubject(form, subject) {

        hideAllAfter(typeContainer);

        typeContainer.innerHTML = "";

        const config = pastPaperConfig[form];

        if (!config || !config.types) {
            typeContainer.innerHTML = `
                <div class="empty-message">
                    No exam types available.
                </div>
            `;
            show(typeContainer);
            return;
        }

        const papers =
            pastPapers?.[form]?.[subject] || [];

        if (!papers.length) {
            typeContainer.innerHTML = `
                <div class="empty-message">
                    No ${capitalize(subject)} past papers available.
                </div>
            `;
            show(typeContainer);
            return;
        }

        // Only show exam types that actually have data
        const availableTypes = [
            ...new Set(
                papers
                    .map(p => p.type)
                    .filter(Boolean)
            )
        ];

        config.types.forEach(type => {

            if (!availableTypes.includes(type)) {
                return;
            }

            const button = createButton(
                formatExamType(type),
                type,
                value => selectType(form, subject, value)
            );

            typeContainer.appendChild(button);
        });

        if (!typeContainer.children.length) {
            typeContainer.innerHTML = `
                <div class="empty-message">
                    No exam types found.
                </div>
            `;
        }

        show(typeContainer);
    }

    // --------------------------------------------------------
    // STEP 4: EXAM TYPE
    // --------------------------------------------------------

    function selectType(form, subject, type) {

        hideAllAfter(yearContainer);

        yearContainer.innerHTML = "";

        const papers =
            pastPapers?.[form]?.[subject] || [];

        const filtered =
            papers.filter(p => p.type === type);

        if (!filtered.length) {
            yearContainer.innerHTML = `
                <div class="empty-message">
                    No papers found for this exam type.
                </div>
            `;
            show(yearContainer);
            return;
        }

        const years = [
            ...new Set(
                filtered
                    .map(p => p.year)
                    .filter(Boolean)
            )
        ].sort((a, b) => b - a);

        years.forEach(year => {

            const button = createButton(
                `📅 ${year}`,
                year,
                value => selectYear(
                    form,
                    subject,
                    type,
                    value
                )
            );

            yearContainer.appendChild(button);
        });

        show(yearContainer);
    }

    // --------------------------------------------------------
    // STEP 5: YEAR
    // --------------------------------------------------------

    function selectYear(form, subject, type, year) {

        hideAllAfter(regionContainer);

        regionContainer.innerHTML = "";

        const papers =
            pastPapers?.[form]?.[subject] || [];

        const filtered =
            papers.filter(p =>
                p.type === type &&
                Number(p.year) === Number(year)
            );

        if (!filtered.length) {
            regionContainer.innerHTML = `
                <div class="empty-message">
                    No papers found for ${year}.
                </div>
            `;
            show(regionContainer);
            return;
        }

        // ----------------------------------------------------
        // Group by region / school
        // ----------------------------------------------------

        const groups = groupPapers(filtered);

        Object.keys(groups)
            .sort((a, b) => a.localeCompare(b))
            .forEach(groupName => {

                const button = createButton(
                    `📍 ${formatRegion(groupName)}`,
                    groupName,
                    value => selectRegion(
                        form,
                        subject,
                        type,
                        year,
                        value,
                        groups
                    )
                );

                regionContainer.appendChild(button);
            });

        show(regionContainer);
    }

    // --------------------------------------------------------
    // STEP 6: REGION / SCHOOL
    // --------------------------------------------------------

    function selectRegion(
        form,
        subject,
        type,
        year,
        region,
        groups
    ) {

        hideAllAfter(paperContainer);

        paperContainer.innerHTML = "";

        const papers = groups[region] || [];

        if (!papers.length) {
            paperContainer.innerHTML = `
                <div class="empty-message">
                    No papers available.
                </div>
            `;
            show(paperContainer);
            return;
        }

        // ----------------------------------------------------
        // PAPER CHAIN
        // ----------------------------------------------------

        papers.forEach((paper, index) => {

            const card = document.createElement("div");

            card.className = "paper-card";

            const title = document.createElement("h3");

            title.textContent =
                paper.title ||
                `${capitalize(subject)} Paper`;

            card.appendChild(title);

            const info = document.createElement("p");

            info.className = "paper-info";

            info.textContent =
                `${formatExamType(type)} • ${year}`;

            card.appendChild(info);

            if (paper.school) {

                const school = document.createElement("p");

                school.className = "paper-school";

                school.textContent =
                    `🏫 ${paper.school}`;

                card.appendChild(school);
            }

            const openButton =
                document.createElement("button");

            openButton.type = "button";

            openButton.className = "open-paper";

            openButton.textContent =
                "📄 Fungua PDF";

            openButton.addEventListener("click", () => {

                openPDF(paper.file);

            });

            card.appendChild(openButton);

            paperContainer.appendChild(card);

            // Chain separator
            if (index < papers.length - 1) {

                const chain =
                    document.createElement("div");

                chain.className = "paper-chain";

                chain.textContent = "↓";

                paperContainer.appendChild(chain);
            }
        });

        show(paperContainer);
    }

    // --------------------------------------------------------
    // GROUP PAPERS
    // --------------------------------------------------------

    function groupPapers(papers) {

        const groups = {};

        papers.forEach(paper => {

            /*
             * Kama kuna school, tumia school kama group.
             * Kama hakuna school, tumia region.
             */

            const group =
                paper.school ||
                paper.region ||
                "other";

            if (!groups[group]) {
                groups[group] = [];
            }

            groups[group].push(paper);
        });

        return groups;
    }

    // --------------------------------------------------------
    // OPEN PDF
    // --------------------------------------------------------

    function openPDF(file) {

        if (!file) {
            alert("PDF file haijapatikana.");
            return;
        }

        // Normalize path
        let pdfPath = String(file).trim();

        /*
         * GitHub Pages:
         * relative path works vizuri kutoka pastpapers.html
         * ikiwa papers folder ipo kwenye root.
         */

        if (
            !pdfPath.startsWith("/") &&
            !pdfPath.startsWith("http://") &&
            !pdfPath.startsWith("https://")
        ) {
            pdfPath = `./${pdfPath}`;
        }

        window.open(
            pdfPath,
            "_blank",
            "noopener,noreferrer"
        );
    }

    // --------------------------------------------------------
    // HELPERS
    // --------------------------------------------------------

    function capitalize(text) {

        if (!text) return "";

        return text.charAt(0).toUpperCase()
            + text.slice(1);
    }

    function formatExamType(type) {

        const names = {

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

        return names[type] || capitalize(type);
    }

    function formatRegion(region) {

        const names = {

            dar_es_salaam: "Dar es Salaam",
            dodoma: "Dodoma",
            arusha: "Arusha",
            mbeya: "Mbeya",
            kagera: "Kagera",
            shinyanga: "Shinyanga",
            necta: "NECTA"

        };

        return names[region] ||
            String(region)
                .replaceAll("_", " ")
                .replace(/\b\w/g, c => c.toUpperCase());
    }

    // --------------------------------------------------------
    // START
    // --------------------------------------------------------

    renderForms();

});
