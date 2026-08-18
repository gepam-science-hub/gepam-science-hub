// ============================================================
// GEPAM SCIENCE HUB
// PAST PAPERS - INTERNAL CHAIN ENGINE
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    const app = document.getElementById("pastPapersApp");

    if (!app) {
        console.error("GEPAM: #pastPapersApp haijapatikana.");
        return;
    }


    // ========================================================
    // LABELS
    // ========================================================

    const labels = {
        form1: "Form 1",
        form2: "Form 2",
        form3: "Form 3",
        form4: "Form 4",
        form5: "Form 5",
        form6: "Form 6",

        physics: "Physics",
        chemistry: "Chemistry",

        midterm: "Midterm",
        terminal: "Terminal",
        annual: "Annual",
        joint: "Joint",
        ftna: "FTNA",
        necta: "NECTA",
        mock: "Mock",
        pre_necta: "Pre-NECTA",
        acsee: "ACSEE",

        dar_es_salaam: "Dar es Salaam",
        dodoma: "Dodoma",
        arusha: "Arusha",
        mbeya: "Mbeya",
        kagera: "Kagera",
        shinyanga: "Shinyanga",
        necta: "NECTA"
    };


    // ========================================================
    // STATE
    // ========================================================

    let state = {
        form: null,
        subject: null,
        type: null,
        group: null,
        year: null,
        paper: null
    };


    // ========================================================
    // HELPERS
    // ========================================================

    function label(value) {
        if (!value) return "";

        return labels[value] ||
            String(value)
                .replace(/_/g, " ")
                .replace(/\b\w/g, c => c.toUpperCase());
    }


    function getFormData(form) {
        return pastPapers?.[form] || {};
    }


    function getSubjectData(form, subject) {
        return getFormData(form)?.[subject] || [];
    }


    function getConfiguredTypes(form) {
        return pastPaperConfig?.[form]?.types || [];
    }


    function getPapers(form, subject) {
        return getSubjectData(form, subject)
            .filter(p => p && p.file);
    }


    function typePapers(form, subject, type) {
        return getPapers(form, subject)
            .filter(p => p.type === type);
    }


    function uniqueValues(array) {
        return [...new Set(array.filter(v => v !== undefined && v !== null && v !== ""))];
    }


    function uniqueSortedYears(papers) {
        return uniqueValues(
            papers.map(p => Number(p.year))
        ).sort((a, b) => b - a);
    }


    function getSchoolOrRegion(paper) {
        /*
         * Priority:
         * 1. school
         * 2. region
         *
         * Zone na series HAZITUMIKI.
         */

        if (paper.school) {
            return {
                key: `school:${paper.school}`,
                value: paper.school,
                isSchool: true
            };
        }

        if (paper.region) {
            return {
                key: `region:${paper.region}`,
                value: paper.region,
                isSchool: false
            };
        }

        return {
            key: "general",
            value: "General",
            isSchool: false
        };
    }


    function getGroups(papers) {

        const map = new Map();

        papers.forEach(paper => {

            const group = getSchoolOrRegion(paper);

            if (!map.has(group.key)) {
                map.set(group.key, {
                    key: group.key,
                    value: group.value,
                    isSchool: group.isSchool
                });
            }
        });

        return [...map.values()]
            .sort((a, b) =>
                a.value.localeCompare(b.value)
            );
    }


    function getGroupPapers(papers, group) {

        return papers.filter(paper => {

            const g = getSchoolOrRegion(paper);

            return g.key === group;
        });
    }


    function getGroupLabel(group) {

        if (!group) return "";

        if (group.startsWith("school:")) {
            return group.substring(7);
        }

        if (group.startsWith("region:")) {
            return label(group.substring(7));
        }

        return "General";
    }


    function getGroupType(group) {

        if (!group) return "";

        return group.startsWith("school:")
            ? "School"
            : group.startsWith("region:")
                ? "Region"
                : "";
    }


    // ========================================================
    // UI
    // ========================================================

    function render() {

        app.innerHTML = "";

        const container = document.createElement("div");
        container.className = "pp-container";

        container.appendChild(createBackButton());

        container.appendChild(createBreadcrumb());

        const title = document.createElement("h1");
        title.className = "pp-title";
        title.textContent = getPageTitle();

        container.appendChild(title);

        const subtitle = document.createElement("p");
        subtitle.className = "pp-subtitle";
        subtitle.textContent = getPageSubtitle();

        container.appendChild(subtitle);


        const chain = document.createElement("div");
        chain.className = "pp-chain";


        // ----------------------------------------------------
        // STEP 1: FORM
        // ----------------------------------------------------

        if (!state.form) {

            const forms = [
                "form1",
                "form2",
                "form3",
                "form4",
                "form5",
                "form6"
            ];

            forms.forEach(form => {

                if (!pastPapers?.[form]) return;

                chain.appendChild(
                    createChainItem(
                        label(form),
                        getFormCount(form),
                        () => navigate({
                            form,
                            subject: null,
                            type: null,
                            group: null,
                            year: null,
                            paper: null
                        })
                    )
                );

            });

            container.appendChild(chain);
            app.appendChild(container);
            return;
        }


        // ----------------------------------------------------
        // STEP 2: SUBJECT
        // ----------------------------------------------------

        if (!state.subject) {

            const subjects =
                pastPaperConfig?.[state.form]?.subjects ||
                Object.keys(getFormData(state.form));

            subjects.forEach(subject => {

                const count = getPapers(
                    state.form,
                    subject
                ).length;

                if (!count) return;

                chain.appendChild(
                    createChainItem(
                        label(subject),
                        `${count} papers`,
                        () => navigate({
                            form: state.form,
                            subject,
                            type: null,
                            group: null,
                            year: null,
                            paper: null
                        })
                    )
                );

            });

            container.appendChild(chain);
            app.appendChild(container);
            return;
        }


        // ----------------------------------------------------
        // STEP 3: EXAM TYPE
        // ----------------------------------------------------

        if (!state.type) {

            const configuredTypes =
                getConfiguredTypes(state.form);

            configuredTypes.forEach(type => {

                const papers = typePapers(
                    state.form,
                    state.subject,
                    type
                );

                if (!papers.length) return;

                chain.appendChild(
                    createChainItem(
                        label(type),
                        `${papers.length} papers`,
                        () => navigate({
                            form: state.form,
                            subject: state.subject,
                            type,
                            group: null,
                            year: null,
                            paper: null
                        })
                    )
                );

            });

            container.appendChild(chain);
            app.appendChild(container);
            return;
        }


        const papers =
            typePapers(
                state.form,
                state.subject,
                state.type
            );


        // ----------------------------------------------------
        // STEP 4
        // TYPES THAT USE SCHOOL / REGION
        // ----------------------------------------------------

        const schoolBasedTypes = [
            "midterm",
            "terminal",
            "annual",
            "joint"
        ];


        if (
            schoolBasedTypes.includes(state.type) &&
            !state.group
        ) {

            const groups = getGroups(papers);

            groups.forEach(group => {

                const groupPapers =
                    getGroupPapers(
                        papers,
                        group.key
                    );

                const years =
                    uniqueSortedYears(groupPapers);

                chain.appendChild(
                    createChainItem(
                        group.value,
                        `${getGroupType(group.key)} • ${years.length} years`,
                        () => navigate({
                            form: state.form,
                            subject: state.subject,
                            type: state.type,
                            group: group.key,
                            year: null,
                            paper: null
                        })
                    )
                );

            });

            container.appendChild(chain);
            app.appendChild(container);
            return;
        }


        // ----------------------------------------------------
        // STEP 4/5: REGION / SCHOOL -> YEAR
        // ----------------------------------------------------

        if (state.group && !state.year) {

            const groupPapers =
                getGroupPapers(
                    papers,
                    state.group
                );

            const years =
                uniqueSortedYears(groupPapers);

            years.forEach(year => {

                const yearPapers =
                    groupPapers.filter(
                        p => Number(p.year) === Number(year)
                    );

                chain.appendChild(
                    createChainItem(
                        String(year),
                        `${yearPapers.length} paper${yearPapers.length === 1 ? "" : "s"}`,
                        () => navigate({
                            form: state.form,
                            subject: state.subject,
                            type: state.type,
                            group: state.group,
                            year,
                            paper: null
                        })
                    )
                );

            });

            container.appendChild(chain);
            app.appendChild(container);
            return;
        }


        // ----------------------------------------------------
        // TYPES WITHOUT SCHOOL/REGION
        // E.G. NECTA, FTNA, ACSEE
        // ----------------------------------------------------

        if (
            !schoolBasedTypes.includes(state.type) &&
            !state.year
        ) {

            const years =
                uniqueSortedYears(papers);

            years.forEach(year => {

                const yearPapers =
                    papers.filter(
                        p => Number(p.year) === Number(year)
                    );

                chain.appendChild(
                    createChainItem(
                        String(year),
                        `${yearPapers.length} paper${yearPapers.length === 1 ? "" : "s"}`,
                        () => navigate({
                            form: state.form,
                            subject: state.subject,
                            type: state.type,
                            group: null,
                            year,
                            paper: null
                        })
                    )
                );

            });

            container.appendChild(chain);
            app.appendChild(container);
            return;
        }


        // ----------------------------------------------------
        // PAPERS
        // ----------------------------------------------------

        let finalPapers = papers;

        if (state.group) {
            finalPapers =
                getGroupPapers(
                    finalPapers,
                    state.group
                );
        }

        if (state.year) {
            finalPapers =
                finalPapers.filter(
                    p => Number(p.year) === Number(state.year)
                );
        }


        finalPapers.forEach(paper => {

            chain.appendChild(
                createPaperItem(paper)
            );

        });


        if (!finalPapers.length) {

            const empty = document.createElement("div");
            empty.className = "pp-empty";

            empty.innerHTML = `
                <div class="pp-empty-icon">📄</div>
                <h3>No papers found</h3>
                <p>
                    No examination papers are available
                    for this selection.
                </p>
            `;

            chain.appendChild(empty);
        }


        container.appendChild(chain);
        app.appendChild(container);
    }


    // ========================================================
    // CHAIN ITEM
    // ========================================================

    function createChainItem(title, meta, callback) {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "pp-chain-item";

        button.innerHTML = `
            <span class="pp-chain-left">
                <span class="pp-chain-name">
                    ${escapeHTML(title)}
                </span>

                <span class="pp-chain-meta">
                    ${escapeHTML(meta)}
                </span>
            </span>

            <span class="pp-arrow">›</span>
        `;

        button.addEventListener("click", callback);

        return button;
    }


    // ========================================================
    // PAPER ITEM
    // ========================================================

    function createPaperItem(paper) {

        /*
         * Paper yenyewe ni link.
         * Hii inahakikisha user hafungui chain nyingine
         * kabla ya kufikia PDF.
         */

        const link = document.createElement("a");

        link.className = "pp-paper-item";

        link.href = paper.file;

        link.target = "_blank";

        link.rel = "noopener noreferrer";


        const location =
            paper.school
                ? paper.school
                : paper.region
                    ? label(paper.region)
                    : "";


        link.innerHTML = `
            <span class="pp-paper-left">

                <span class="pp-paper-title">
                    ${escapeHTML(paper.title)}
                </span>

                <span class="pp-paper-meta">
                    ${escapeHTML(String(paper.year))}
                    ${location ? " • " + escapeHTML(location) : ""}
                </span>

            </span>

            <span class="pp-pdf-arrow">
                PDF ↗
            </span>
        `;

        return link;
    }


    // ========================================================
    // BACK BUTTON
    // ========================================================

    function createBackButton() {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "pp-back";

        button.textContent = "← Back";

        button.addEventListener("click", () => {

            if (state.paper) {
                state.paper = null;
            }
            else if (state.year) {
                state.year = null;
            }
            else if (state.group) {
                state.group = null;
            }
            else if (state.type) {
                state.type = null;
            }
            else if (state.subject) {
                state.subject = null;
            }
            else if (state.form) {
                state.form = null;
            }
            else {
                return;
            }

            updateHistory();

            render();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

        return button;
    }


    // ========================================================
    // BREADCRUMB
    // ========================================================

    function createBreadcrumb() {

        const breadcrumb =
            document.createElement("div");

        breadcrumb.className = "pp-breadcrumb";


        const parts = [];

        if (state.form)
            parts.push(label(state.form));

        if (state.subject)
            parts.push(label(state.subject));

        if (state.type)
            parts.push(label(state.type));

        if (state.group)
            parts.push(getGroupLabel(state.group));

        if (state.year)
            parts.push(String(state.year));


        breadcrumb.textContent =
            parts.join("  ›  ");


        return breadcrumb;
    }


    // ========================================================
    // PAGE TITLE
    // ========================================================

    function getPageTitle() {

        if (!state.form)
            return "Past Papers";

        if (!state.subject)
            return label(state.form);

        if (!state.type)
            return label(state.subject);

        if (!state.group && !state.year)
            return label(state.type);

        if (state.group && !state.year)
            return getGroupLabel(state.group);

        if (state.year)
            return `${label(state.subject)} • ${state.year}`;

        return "Past Papers";
    }


    function getPageSubtitle() {

        if (!state.form) {
            return "Choose a form to continue.";
        }

        if (!state.subject) {
            return "Choose Physics or Chemistry.";
        }

        if (!state.type) {
            return "Choose the examination type.";
        }

        if (!state.group && !state.year) {
            return "Choose the school or region.";
        }

        if (state.group && !state.year) {
            return "Choose the examination year.";
        }

        return "Choose a paper to open the PDF.";
    }


    // ========================================================
    // FORM COUNT
    // ========================================================

    function getFormCount(form) {

        const subjects =
            pastPaperConfig?.[form]?.subjects || [];

        let total = 0;

        subjects.forEach(subject => {

            total += getPapers(
                form,
                subject
            ).length;

        });

        return `${total} papers`;
    }


    // ========================================================
    // NAVIGATION
    // ========================================================

    function navigate(newState) {

        state = {
            form: newState.form || null,
            subject: newState.subject || null,
            type: newState.type || null,
            group: newState.group || null,
            year: newState.year || null,
            paper: newState.paper || null
        };

        updateHistory();

        render();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function updateHistory() {

        const encoded = encodeURIComponent(
            JSON.stringify(state)
        );

        const url =
            `${window.location.pathname}?pp=${encoded}`;

        history.pushState(
            state,
            "",
            url
        );
    }


    // ========================================================
    // RESTORE STATE
    // ========================================================

    function restoreState() {

        const params =
            new URLSearchParams(
                window.location.search
            );

        const saved =
            params.get("pp");

        if (!saved) return;

        try {

            const parsed =
                JSON.parse(
                    decodeURIComponent(saved)
                );

            if (parsed && typeof parsed === "object") {

                state = {
                    form: parsed.form || null,
                    subject: parsed.subject || null,
                    type: parsed.type || null,
                    group: parsed.group || null,
                    year: parsed.year || null,
                    paper: parsed.paper || null
                };

            }

        } catch (error) {

            console.warn(
                "GEPAM: Could not restore past paper state.",
                error
            );

        }
    }


    // ========================================================
    // PHONE / BROWSER BACK
    // ========================================================

    window.addEventListener(
        "popstate",
        event => {

            if (event.state) {

                state = {
                    form: event.state.form || null,
                    subject: event.state.subject || null,
                    type: event.state.type || null,
                    group: event.state.group || null,
                    year: event.state.year || null,
                    paper: event.state.paper || null
                };

            }
            else {

                restoreState();

            }

            render();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    // ========================================================
    // ESCAPE HTML
    // ========================================================

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    // ========================================================
    // INITIAL LOAD
    // ========================================================

    restoreState();

    render();

});
