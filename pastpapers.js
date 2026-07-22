// GEPAM Science Hub - Past Papers Engine

const formSelect = document.getElementById("formSelect");
const subjectSelect = document.getElementById("subjectSelect");
const typeSelect = document.getElementById("typeSelect");
const regionSelect = document.getElementById("regionSelect");
const yearSelect = document.getElementById("yearSelect");
const container = document.getElementById("papersContainer");

function loadTypes() {
    typeSelect.innerHTML = '<option value="">Choose Type</option>';
    regionSelect.innerHTML = '<option value="">Choose Region</option>';
    yearSelect.innerHTML = '<option value="">Choose Year</option>';
    container.innerHTML = "<p>Select options above to view papers.</p>";

    const form = formSelect.value;
    if (!form || !pastPaperConfig[form]) return;

    pastPaperConfig[form].types.forEach(type => {
        const option = document.createElement("option");
        option.value = type.toLowerCase().trim();
        option.textContent = type.toUpperCase();
        typeSelect.appendChild(option);
    });
}

function checkAndLoadRegions() {
    let form = formSelect.value;
    let subject = subjectSelect.value;
    let type = typeSelect.value;
    if (form && subject && type) {
        loadRegions();
    }
}

function loadRegions(){
    regionSelect.innerHTML = '<option value="">Choose Region</option>';
    yearSelect.innerHTML = '<option value="">Choose Year</option>';

    let form = formSelect.value;
    let subject = subjectSelect.value;
    let type = typeSelect.value;

    if(!form || !subject || !type || !pastPapers[form] || !pastPapers[form][subject]) return;

    let regions = [];
    pastPapers[form][subject].forEach(paper => {
        if(paper.type.toLowerCase().trim() === type.toLowerCase().trim() && !regions.includes(paper.region.toLowerCase().trim())){
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

function loadYears() {
    yearSelect.innerHTML = '<option value="">Choose Year</option>';

    const form = formSelect.value;
    const subject = subjectSelect.value;
    const type = typeSelect.value;
    const region = regionSelect.value;

    if (!form || !subject || !type || !region) return;

    let years = [];
    pastPapers[form][subject].forEach(paper => {
        if (paper.type.toLowerCase().trim() === type.toLowerCase().trim() && paper.region.toLowerCase().trim() === region.toLowerCase().trim()) {
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

function showPapers(){
    const form = formSelect.value;
    const subject = subjectSelect.value;
    const type = typeSelect.value;
    const region = regionSelect.value;
    const year = yearSelect.value;

    if(!form || !subject || !type || !region || !year){
        container.innerHTML = "<p>Please select all options above.</p>";
        return;
    }

    const filteredPapers = pastPapers[form][subject].filter(paper => 
        paper.type.toLowerCase().trim() === type.toLowerCase().trim() &&
        paper.region.toLowerCase().trim() === region.toLowerCase().trim() &&
        paper.year == year
    );

    container.innerHTML = "";
    if(filteredPapers.length === 0){
        container.innerHTML = "<p>No papers match your selection.</p>";
        return;
    }

    const grid = document.createElement("div");
    grid.className = "papers-grid";
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(240px, 1fr))";
    grid.style.gap = "20px";

    filteredPapers.forEach(paper => {
        const card = document.createElement("div");
        card.className = "card paper-card";
        card.style.borderTop = "5px solid #00c300";
        card.style.padding = "15px";
        card.style.background = "#fff";
        card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        
        card.innerHTML = `
            <h3>${paper.title}</h3>
            <p><strong>Subject:</strong> ${subject.toUpperCase()}</p>
            <p><strong>Region:</strong> ${region.replaceAll("_", " ").toUpperCase()}</p>
            <p><strong>Year:</strong> ${year}</p>
            <a href="${paper.file}" target="_blank">
                <button style="width:100%; padding:10px; background:#00c300; color:#fff; border:none; cursor:pointer;">📄 OPEN PDF</button>
            </a>
        `;
        grid.appendChild(card);
    });
    container.appendChild(grid);
}

formSelect.addEventListener("change", loadTypes);
subjectSelect.addEventListener("change", checkAndLoadRegions);
typeSelect.addEventListener("change", checkAndLoadRegions);
regionSelect.addEventListener("change", loadYears);
yearSelect.addEventListener("change", showPapers);
