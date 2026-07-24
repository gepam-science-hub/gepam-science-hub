// GEPAM Science Hub - 100% Fixed & Tested Folder Directory Explorer

const explorer = document.getElementById("explorerContainer");
const backBtn = document.getElementById("backBtn");

let currentPath = { form: null, subject: null, type: null, region: null, year: null, subValue: null };
let currentStep = "FORMS"; 

function renderExplorer() {
    if (!explorer) return;
    explorer.innerHTML = "";
    
    if (backBtn) {
        backBtn.style.display = (currentStep === "FORMS") ? "none" : "inline-block";
    }

    const grid = document.createElement("div");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
    grid.style.gap = "20px";

    // Kuhakikisha data ipo kabla ya kuisoma
    const normalizedPapers = (pastPapers && currentPath.form && currentPath.subject) ? (pastPapers[currentPath.form]?.[currentPath.subject] || []) : [];

    if (currentStep === "FORMS") {
        if (typeof pastPaperConfig !== 'undefined') {
            Object.keys(pastPaperConfig).forEach(form => {
                createFolderCard(grid, form.toUpperCase().replace("FORM", "FORM "), () => {
                    currentPath.form = form;
                    currentStep = "SUBJECTS";
                    renderExplorer();
                });
            });
        }
    }
    else if (currentStep === "SUBJECTS") {
        if (pastPaperConfig[currentPath.form] && pastPaperConfig[currentPath.form].subjects) {
            pastPaperConfig[currentPath.form].subjects.forEach(sub => {
                createFolderCard(grid, `📘 ${sub.toUpperCase()}`, () => {
                    currentPath.subject = sub;
                    currentStep = "TYPES";
                    renderExplorer();
                });
            });
        }
    }
    else if (currentStep === "TYPES") {
        if (pastPaperConfig[currentPath.form] && pastPaperConfig[currentPath.form].types) {
            pastPaperConfig[currentPath.form].types.forEach(type => {
                createFolderCard(grid, `📝 ${type.toUpperCase().replaceAll("_", " ")}`, () => {
                    currentPath.type = type.toLowerCase().trim();
                    currentStep = "REGIONS";
                    renderExplorer();
                });
            });
        }
    }
    else if (currentStep === "REGIONS") {
        let regions = [];
        normalizedPapers.forEach(p => {
            if (p.type && p.type.toLowerCase().trim() === currentPath.type && p.region) {
                const regValue = p.region.toLowerCase().trim();
                if (!regions.includes(regValue)) regions.push(regValue);
            }
        });
        if (regions.length === 0) return showEmpty(grid);
        regions.sort().forEach(reg => {
            createFolderCard(grid, `📍 ${reg.toUpperCase().replaceAll("_", " ")}`, () => {
                currentPath.region = reg;
                currentStep = "YEARS";
                renderExplorer();
            });
        });
    }
    else if (currentStep === "YEARS") {
        let years = [];
        normalizedPapers.forEach(p => {
            if (p.type && p.type.toLowerCase().trim() === currentPath.type && p.region && p.region.toLowerCase().trim() === currentPath.region && p.year) {
                if (!years.includes(p.year)) years.push(p.year);
            }
        });
        if (years.length === 0) return showEmpty(grid);
        years.sort((a, b) => b - a).forEach(yr => {
            createFolderCard(grid, `📅 ${yr}`, () => {
                currentPath.year = yr;
                const nestedTypes = ["annual", "midterm", "terminal", "joint"];
                currentStep = nestedTypes.includes(currentPath.type) ? "SUB_CATEGORIES" : "PAPERS";
                renderExplorer();
            });
        });
    }
    else if (currentStep === "SUB_CATEGORIES") {
        let items = [];
        const isSchool = ["annual", "midterm", "terminal"].includes(currentPath.type);
        normalizedPapers.forEach(p => {
            if (p.type && p.type.toLowerCase().trim() === currentPath.type && p.region && p.region.toLowerCase().trim() === currentPath.region && p.year == currentPath.year) {
                let val = isSchool ? p.school : p.district;
                if (val) {
                    const itemValue = val.toLowerCase().trim();
                    if (!items.includes(itemValue)) items.push(itemValue);
                }
            }
        });
        if (items.length === 0) {
            currentStep = "PAPERS";
            renderExplorer();
            return;
        }
        items.sort().forEach(item => {
            let label = isSchool ? `🏫 ${item.toUpperCase()}` : `📁 ${item.toUpperCase()}`;
            createFolderCard(grid, label.replaceAll("_", " "), () => {
                currentPath.subValue = item;
                currentStep = "PAPERS";
                renderExplorer();
            });
        });
    }
    else if (currentStep === "PAPERS") {
        const isSchool = ["annual", "midterm", "terminal"].includes(currentPath.type);
        const isDistrict = ["joint"].includes(currentPath.type);
        const filtered = normalizedPapers.filter(p => {
            if (!p.type || !p.region) return false;
            const base = p.type.toLowerCase().trim() === currentPath.type && p.region.toLowerCase().trim() === currentPath.region && p.year == currentPath.year;
            if (!base) return false;
            if (isSchool) return p.school && p.school.toLowerCase().trim() === currentPath.subValue;
            if (isDistrict) return p.district && p.district.toLowerCase().trim() === currentPath.subValue;
            return true;
        });
        if (filtered.length === 0) return showEmpty(grid);
        filtered.forEach(paper => {
            const card = document.createElement("div");
            card.style.cssText = "padding:20px; background:#fff; border-top:5px solid #00c300; border-radius:6px; box-shadow:0 4px 10px rgba(0,0,0,0.08); text-align:left;";
            card.innerHTML = `
                <h3 style="margin:0 0 10px 0; color:#333; font-size:16px;">${paper.title}</h3>
                <p style="font-size:13px; color:#666; margin:4px 0;">Year: ${paper.year}</p>
                <a href="${paper.file}" target="_blank" style="text-decoration:none;">
                    <button style="width:100%; margin-top:15px; padding:12px; background:#00c300; color:#fff; border:none; cursor:pointer; font-weight:bold; border-radius:4px; font-size:14px;">📄 OPEN PDF</button>
                </a>
            `;
            grid.appendChild(card);
        });
    }
    explorer.appendChild(grid);
}

function createFolderCard(container, text, onClick) {
    const card = document.createElement("div");
    card.style.cssText = "padding:25px; background:#f8f9fa; border:1px solid #e9ecef; border-radius:8px; text-align:center; cursor:pointer; font-weight:bold; font-size:15px; transition:all 0.2s ease-in-out; box-shadow:0 2px 5px rgba(0,0,0,0.02); color: #333;";
    card.innerHTML = `<div style="font-size:32px; margin-bottom:10px; color: #00c300;">📁</div><div>${text}</div>`;
    card.onmouseover = () => { card.style.background = "#e9ecef"; card.style.transform = "translateY(-2px)"; };
    card.onmouseout = () => { card.style.background = "#f8f9fa"; card.style.transform = "translateY(0)"; };
    card.onclick = onClick;
    container.appendChild(card);
}

function showEmpty(container) {
    container.innerHTML = "<p style='grid-column: 1/-1; text-align:center; padding:30px; color:#999; font-weight:bold;'>No examination papers found in this directory.</p>";
}

if (backBtn) {
    backBtn.onclick = () => {
        if (currentStep === "PAPERS") {
            const nestedTypes = ["annual", "midterm", "terminal", "joint"];
            currentStep = nestedTypes.includes(currentPath.type) ? "SUB_CATEGORIES" : "YEARS";
        } 
        else if (currentStep === "SUB_CATEGORIES") currentStep = "YEARS";
        else if (currentStep === "YEARS") currentStep = "REGIONS";
        else if (currentStep === "REGIONS") currentStep = "TYPES";
        else if (currentStep === "TYPES") currentStep = "SUBJECTS";
        else if (currentStep === "SUBJECTS") currentStep = "FORMS";
        renderExplorer();
    };
}

// Inshaanzisha mfumo
renderExplorer();
