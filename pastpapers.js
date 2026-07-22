// GEPAM Science Hub - Past Papers Engine (Fixed Event Cascade Bug)

const formSelect = document.getElementById("formSelect");
const subjectSelect = document.getElementById("subjectSelect");
const typeSelect = document.getElementById("typeSelect");
const regionSelect = document.getElementById("regionSelect");
const yearSelect = document.getElementById("yearSelect");
const container = document.getElementById("papersContainer");
const searchInput = document.getElementById("searchInput");

let activePapersList = [];

// 1. Pakia Aina za Mitihani kulingana na Form
function loadTypes() {
    typeSelect.innerHTML = '<option value="">Choose Type</option>';
    regionSelect.innerHTML = '<option value="">Choose Region</option>';
    yearSelect.innerHTML = '<option value="">Choose Year</option>';
    container.innerHTML = "<p>Select options above to view papers.</p>";
    activePapersList = [];

    const form = formSelect.value;
    if (!form || !pastPaperConfig[form]) return;

    pastPaperConfig[form].types.forEach(type => {
        const option = document.createElement("option");
        option.value = type.toLowerCase().trim();
        option.textContent = type.toUpperCase();
        typeSelect.appendChild(option);
    });

    // Kama tayari somo lilichaguliwa, jaribu kupakia mikoa
    checkAndLoadRegions();
}

// Kazi ya ziada ya kuangalia kama vigezo vyote vimetimia kabla ya kupakia mikoa
function checkAndLoadRegions() {
    let form = formSelect.value;
    let subject = subjectSelect.value;
    let type = typeSelect.value;

    if (form && subject && type) {
        loadRegions();
    }
}

// 2. Pakia Mikoa kulingana na Form, Somo na Aina ya Mtihani
function loadRegions(){
    regionSelect.innerHTML = '<option value="">Choose Region</option>';
    yearSelect.innerHTML = '<option value="">Choose Year</option>';
    activePapersList = [];

    let form = formSelect.value;
    let subject = subjectSelect.value;
    let type = typeSelect.value;

    if(!form || !subject || !type || !pastPapers[form] || !pastPapers[form][subject]) return;

    let regions = [];
    pastPapers[form][subject].forEach(paper => {
        let paperTypeClean = paper.type.toLowerCase().replace("_", "").trim();
        let selectedTypeClean = type.toLowerCase().replace("_", "").trim();

        if(paperTypeClean === selectedTypeClean && !regions.includes(paper.region.toLowerCase().trim())){
            regions.push(paper.region.toLowerCase().trim());
        }
    });

    regions.sort().forEach(region => {
        let option = document.createElement("option");
        option.value = region;
        option.textContent = region.replaceAll("_", " ").toUpperCase();
        regionSelect.appendChild(option);
    });
}

// 3. Pakia Miaka inayopatikana
function loadYears() {
    yearSelect.innerHTML = '<option value="">Choose Year</option>';
    activePapersList = [];

    const form = formSelect.value;
    const subject = subjectSelect.value;
    const type = typeSelect.value;
    const region = regionSelect.value;

    if (!form || !subject || !type || !region) return;

    let years = [];
    pastPapers[form][subject].forEach(paper => {
        let paperTypeClean = paper.type.toLowerCase().replace("_", "").trim();
        let selectedTypeClean = type.toLowerCase().replace("_", "").trim();

        if (paperTypeClean === selectedTypeClean && paper.region.toLowerCase().trim() === region.toLowerCase().trim()) {
            if (!years.includes(paper.year)) years.push(paper.year);
        }
    });

    years.sort((a,b) => b - a);
    years.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });
}

// 4. Onyesha Grid ya Mitihani
function showPapers(){
    const form = formSelect.value;
    const subject = subjectSelect.value;
    const type = typeSelect.value;
    const region = regionSelect.value;
    const year = yearSelect.value;

    if(!form || !subject || !type || !region || !year){
        container.innerHTML = "<p>Please select all options above.</p>";
        activePapersList = [];
        return;
    }

    activePapersList = pastPapers[form][subject].filter(paper => {
        let paperTypeClean = paper.type.toLowerCase().replace("_", "").trim();
        let selectedTypeClean = type.toLowerCase().replace("_", "").trim();
        
        return paperTypeClean === selectedTypeClean &&
               paper.region.toLowerCase().trim() === region.toLowerCase().trim() &&
               paper.year == year;
    });

    renderGrid(activePapersList);
}

function renderGrid(papers) {
    container.innerHTML = "";
    const subject = subjectSelect.value;
    const region = regionSelect.value;
    const type = typeSelect.value;
    const year = yearSelect.value;

    if(papers.length === 0){
        container.innerHTML = "<p>No papers match your selection or search term.</p>";
        return;
    }

    const grid = document.createElement("div");
    grid.className = "papers-grid";

    papers.forEach(paper => {
        const card = document.createElement("div");
        
        if (subject.toLowerCase() === "physics") {
            card.className = "paper-card physics-theme";
        } else {
            card.className = "paper-card chemistry-theme";
        }
        
        card.innerHTML = `
            <h3>${paper.title}</h3>
            <div class="card-details">
                <p><strong>Somo:</strong> ${subject.toUpperCase()}</p>
                <p><strong>Mkoa:</strong> ${region.replaceAll("_", " ").toUpperCase()}</p>
                <p><strong>Aina:</strong> ${type.toUpperCase()}</p>
                <p><strong>Mwaka:</strong> ${year}</p>
            </div>
            <a href="${paper.file}" target="_blank">
                <button class="download-btn">📄 OPEN PDF</button>
            </a>
        `;
        grid.appendChild(card);
    });
    container.appendChild(grid);
}

if(searchInput) {
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPapers = activePapersList.filter(paper => 
            paper.title.toLowerCase().includes(searchTerm)
        );
        renderGrid(filteredPapers);
    });
}

// Kuunganisha matukio kwa mtiririko sahihi wa kiwanda (Cascade flow)
formSelect.addEventListener("change", loadTypes);
subjectSelect.addEventListener("change", checkAndLoadRegions);
typeSelect.addEventListener("change", checkAndLoadRegions);
regionSelect.addEventListener("change", loadYears);
yearSelect.addEventListener("change", showPapers); F12
