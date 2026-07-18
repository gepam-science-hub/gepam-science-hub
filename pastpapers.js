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
        paper => paper.type.toLowerCase() === type.toLowerCase()
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
            paper.type.toLowerCase() === type.toLowerCase() &&
            paper.region.toLowerCase() === region.toLowerCase()
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
// Show Papers

function showPapers(){

    container.innerHTML = "";

    const form = formSelect.value;
    const subject = subjectSelect.value;
    const type = typeSelect.value;
    const region = regionSelect.value;
    const year = yearSelect.value;

    if(!form || !subject || !type || !region || !year){

        container.innerHTML="<p>Please select all options.</p>";

        return;

    }

    const papers = pastPapers[form][subject].filter(

        paper =>

            paper.type.toLowerCase() === type.toLowerCase() &&
            paper.region.toLowerCase() === region.toLowerCase() &&
            paper.year == year

    );

    if(papers.length===0){

        container.innerHTML="<p>No papers uploaded yet.</p>";

        return;

    }

    papers.forEach(paper=>{

        const card=document.createElement("div");

        card.className="card";

        card.innerHTML=`

        <h3>${paper.title}</h3>

        <p><strong>Region:</strong> ${paper.region}</p>

        <p><strong>Year:</strong> ${paper.year}</p>

        <a href="${paper.file}" target="_blank">

        <button>📄 Open PDF</button>

        </a>

        `;

        container.appendChild(card);

    });

        }
// Event Listeners

formSelect.addEventListener("change", loadTypes);

subjectSelect.addEventListener("change", loadTypes);

typeSelect.addEventListener("change", loadRegions);

regionSelect.addEventListener("change", loadYears);

yearSelect.addEventListener("change", showPapers);
