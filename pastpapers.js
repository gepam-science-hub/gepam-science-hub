// GEPAM Science Hub - Past Papers Engine (Dynamic Grid System)

const formSelect = document.getElementById("formSelect");
const subjectSelect = document.getElementById("subjectSelect");
const typeSelect = document.getElementById("typeSelect");
const regionSelect = document.getElementById("regionSelect");
const yearSelect = document.getElementById("yearSelect");
const container = document.getElementById("papersContainer");

// 1. Pakia Aina za Mitihani (Annual, Mock, nk)
function loadTypes() {
    typeSelect.innerHTML = '<option value="">Choose Type</option>';
    regionSelect.innerHTML = '<option value="">Choose Region</option>';
    yearSelect.innerHTML = '<option value="">Choose Year</option>';
    container.innerHTML = "<p>Select options above to view papers.</p>";

    const form = formSelect.value;
    if (!form || !pastPaperConfig[form]) return;

    pastPaperConfig[form].types.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type.replaceAll("_"," ").toUpperCase();
        typeSelect.appendChild(option);
    });
}

// 2. Pakia Mikoa kulingana na Darasa, Somo na Aina ya Mtihani
function loadRegions(){
    regionSelect.innerHTML = '<option value="">Choose Region</option>';
    yearSelect.innerHTML = '<option value="">Choose Year</option>';

    let form = formSelect.value;
    let subject = subjectSelect.value;
    let type = typeSelect.value;

    if(!form || !subject || !type || !pastPapers[form] || !pastPapers[form][subject]) return;

    let regions = [];
    pastPapers[form][subject].forEach(paper => {
        if(paper.type.toLowerCase() === type.toLowerCase() && !regions.includes(paper.region)){
            regions.push(paper.region);
        }
    });

    // Panga mikoa kialfabeti na uiweke kwenye Select list
    regions.sort().forEach(region => {
        let option = document.createElement("option");
        option.value = region;
        option.textContent = region.replaceAll("_", " ").toUpperCase();
        regionSelect.appendChild(option);
    });
}

// 3. Pakia Miaka inayopatikana (2023, 2024, 2025, 2026 nk)
function loadYears() {
    yearSelect.innerHTML = '<option value="">Choose Year</option>';

    const form = formSelect.value;
    const subject = subjectSelect.value;
    const type = typeSelect.value;
    const region = regionSelect.value;

    if (!form || !subject || !type || !region) return;

    let years = [];
    pastPapers[form][subject].forEach(paper => {
        if (paper.type.toLowerCase() === type.toLowerCase() && paper.region.toLowerCase() === region.toLowerCase()) {
            if (!years.includes(paper.year)) years.push(paper.year);
        }
    });

    // Miaka ya karibuni ianzie juu (Descending order)
    years.sort((a,b) => b - a);
    years.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });
}

// 4. Onyesha Faili Zote (Multiple Papers Display) kwa Wakati Mmoja
function showPapers(){
    container.innerHTML = "";

    const form = formSelect.value;
    const subject = subjectSelect.value;
    const type = typeSelect.value;
    const region = regionSelect.value;
    const year = yearSelect.value;

    if(!form || !subject || !type || !region || !year){
        container.innerHTML = "<p>Please select all options above.</p>";
        return;
    }

    const papers = pastPapers[form][subject].filter(paper => 
        paper.type.toLowerCase() === type.toLowerCase() &&
        paper.region.toLowerCase() === region.toLowerCase() &&
        paper.year == year
    );

    if(papers.length === 0){
        container.innerHTML = "<p>No papers uploaded yet for this selection.</p>";
        return;
    }

    // Unda muundo wa Grid (Safu) ili kadi zikae pembeni mwa nyingine
    const grid = document.createElement("div");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(240px, 1fr))";
    grid.style.gap = "20px";
    grid.style.marginTop = "15px";

    papers.forEach(paper => {
        const card = document.createElement("div");
        card.className = "card paper-card";
        card.style.borderLeft = "5px solid #00c300"; // Rangi maalum kuashiria PDF ipo tayari
        
        card.innerHTML = `
            <h3 style="margin-bottom:10px; color:#222;">${paper.title}</h3>
            <p style="margin:4px 0; font-size:14px;"><strong>Somo:</strong> ${subject.toUpperCase()}</p>
            <p style="margin:4px 0; font-size:14px;"><strong>Mkoa:</strong> ${region.replaceAll("_", " ").toUpperCase()}</p>
            <p style="margin:4px 0; font-size:14px;"><strong>Aina:</strong> ${type.replaceAll("_", " ").toUpperCase()}</p>
            <p style="margin:4px 0; font-size:14px; margin-bottom:15px;"><strong>Mwaka:</strong> ${year}</p>
            <a href="${paper.file}" target="_blank" style="text-decoration:none;">
                <button style="cursor:pointer; width:100%; padding:10px; background-color:#00c300; color:white; border:none; border-radius:4px; font-weight:bold;">📄 OPEN PDF</button>
            </a>
        `;
        grid.appendChild(card);
    });
    container.appendChild(grid);
}

// Mtiririko wa Matukio (Event Listeners)
formSelect.addEventListener("change", loadTypes);
subjectSelect.addEventListener("change", loadRegions);
typeSelect.addEventListener("change", loadRegions);
regionSelect.addEventListener("change", loadYears);
yearSelect.addEventListener("change", showPapers);

console.log("GEPAM Database Status: Loaded Successfully ✅", pastPapers);
