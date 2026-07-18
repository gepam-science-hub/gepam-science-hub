// GEPAM Science Hub Past Papers System

const formSelect = document.getElementById("formSelect");
const subjectSelect = document.getElementById("subjectSelect");
const typeSelect = document.getElementById("typeSelect");
const regionSelect = document.getElementById("regionSelect");
const yearSelect = document.getElementById("yearSelect");
const container = document.getElementById("papersContainer");

// Load Examination Types
function loadTypes() {

    typeSelect.innerHTML = '<option value="">Choose Type</option>';
    regionSelect.innerHTML = '<option value="">Choose Region</option>';
    yearSelect.innerHTML = '<option value="">Choose Year</option>';
    container.innerHTML = "<p>Select options above to view papers.</p>";

    const form = formSelect.value;

    if (!form) return;

    pastPaperConfig[form].types.forEach(type => {

        const option = document.createElement("option");

        option.value = type;

        option.textContent = type.replaceAll("_"," ").toUpperCase();

        typeSelect.appendChild(option);

    });

}

// Load Regions
function loadRegions() {

    regionSelect.innerHTML = '<option value="">Choose Region</option>';
    yearSelect.innerHTML = '<option value="">Choose Year</option>';
    container.innerHTML = "<p>Select Region.</p>";

    const form = formSelect.value;
    const subject = subjectSelect.value;
    const type = typeSelect.value;

    if (!form || !subject || !type) return;

    const papers = pastPapers[form][subject].filter(
        paper => paper.type === type
    );

    const regions = [...new Set(papers.map(p => p.region))];

    regions.sort();

    regions.forEach(region => {

        const option = document.createElement("option");

        option.value = region;

        option.textContent = region.toUpperCase();

        regionSelect.appendChild(option);

    });

}

// Load Years
function loadYears() {

    yearSelect.innerHTML = '<option value="">Choose Year</option>';
    container.innerHTML = "<p>Select Year.</p>";

    const form = formSelect.value;
    const subject = subjectSelect.value;
    const type = typeSelect.value;
    const region = regionSelect.value;

    if (!region) return;

    const papers = pastPapers[form][subject].filter(
        paper =>
            paper.type === type &&
            paper.region === region
    );

    const years = [...new Set(papers.map(p => p.year))];

    years.sort((a,b)=>b-a);

    years.forEach(year => {

        const option = document.createElement("option");

        option.value = year;

        option.textContent = year;

        yearSelect.appendChild(option);

    });

}
