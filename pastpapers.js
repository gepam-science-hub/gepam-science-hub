// GEPAM Science Hub - 100% Bulletproof Engine (Case-Insensitive Fix)

const formSelect = document.getElementById("formSelect");
const subjectSelect = document.getElementById("subjectSelect");
const typeSelect = document.getElementById("typeSelect");
const regionSelect = document.getElementById("regionSelect");
const yearSelect = document.getElementById("yearSelect");
const container = document.getElementById("papersContainer");

// 1. Pakia Aina za Mitihani kulingana na Form
function loadTypes() {
    typeSelect.innerHTML = '<option value="">Choose Type</option>';
    regionSelect.innerHTML = '<option value="">Choose Region</option>';
    yearSelect.innerHTML = '<option value="">Choose Year</option>';
    container.innerHTML = "<p>Select options above to view papers.</p>";

    // Kugeuza kuwa herufi ndogo ili kulingana na pastPaperConfig
    const form = formSelect.value ? formSelect.value.toLowerCase().trim() : "";
    if (!form || !pastPaperConfig[form]) return;

    pastPaperConfig[form].types.forEach(type => {
        const option = document.createElement("option");
        option.value = type.toLowerCase().trim();
        option.textContent = type.toUpperCase().replaceAll("_", " ");
        typeSelect.appendChild(option);
    });
}

// 2. Pakia Mikoa kulingana na Form, Somo na Aina ya Mtihani
function loadRegions() {
    regionSelect.innerHTML = '<option value="">Choose Region</option>';
    yearSelect.innerHTML = '<option value="">Choose Year</option>';

    // Kugeuza maadili yote kuwa herufi ndogo ili kuondoa makosa ya HTML spelling
    const form = formSelect.value ? formSelect.value.toLowerCase().trim() : "";
    const subject = subjectSelect.value ? subjectSelect.value.toLowerCase().trim() : "";
    const type = typeSelect.value ? typeSelect.value.toLowerCase().trim() : "";

    if (!form || !subject || !type || !pastPapers[form] || !pastPapers[form][subject]) return;

    let regions = [];
    pastPapers[form][subject].forEach(paper => {
        const paperType = paper.type.toLowerCase().trim();
        if (paperType === type && !regions.includes(paper.region.toLowerCase().trim())) {
            regions.push(paper.region.toLowerCase().trim());
        }
    });

    regions.sort().forEach(region => {
        const option = document.createElement("option");
        option.value = region;
        option.textContent = region.toUpperCase().replaceAll("_", " ");
        regionSelect.appendChild(option);
    });
}

// 3. Pakia Miaka inayopatikana
function loadYears() {
    yearSelect.innerHTML = '<option value="">Choose Year</option>';

    const form = formSelect.value ? formSelect.value.toLowerCase().trim() : "";
    const subject = subjectSelect.value ? subjectSelect.value.toLowerCase().trim() : "";
    const type = typeSelect.value ? typeSelect.value.toLowerCase().trim() : "";
    const region = regionSelect.value ? regionSelect.value.toLowerCase().trim() : "";

    if (!form || !subject || !type || !region) return;

    let years = [];
    pastPapers[form][subject].forEach(paper => {
        const paperType = paper.type.toLowerCase().trim();
        const paperRegion = paper.region.toLowerCase().trim();
        if (paperType === type && paperRegion === region && !years.includes(paper.year)) {
            years.push(paper.year);
        }
    });

    years.sort((a, b) => b - a);
    years.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });
}

// 4. Onyesha Kadi za Mitihani
function showPapers() {
    container.innerHTML = "";

    const form = formSelect.value ? formSelect.value.toLowerCase().trim() : "";
    const subject = subjectSelect.value ? subjectSelect.value.toLowerCase().trim() : "";
    const type = typeSelect.value ? typeSelect.value.toLowerCase().trim() : "";
    const region = regionSelect.value ? regionSelect.value.toLowerCase().trim() : "";
    const year = yearSelect.value;

    if (!form || !subject || !type || !region || !year) {
        container.innerHTML = "<p>Please select all options above.</p>";
        return;
    }

    const filteredPapers = pastPapers[form][subject].filter(paper => {
        return paper.type.toLowerCase().trim() === type && 
               paper.region.toLowerCase().trim() === region && 
               paper.year == year;
    });

    if (filteredPapers.length === 0) {
        container.innerHTML = "<p>No papers match your selection.</p>";
        return;
    }

    const grid = document.createElement("div");
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
            <p><strong>Region:</strong> ${region.toUpperCase().replaceAll("_", " ")}</p>
            <p><strong>Year:</strong> ${year}</p>
            <a href="${paper.file}" target="_blank">
                <button style="width:100%; padding:10px; background:#00c300; color:#fff; border:none; cursor:pointer; font-weight:bold;">📄 OPEN PDF</button>
            </a>
        `;
        grid.appendChild(card);
    });
    container.appendChild(grid);
}

// Kuweka Event Listeners kwa mtiririko sahihi
formSelect.addEventListener("change", loadTypes);
subjectSelect.addEventListener("change", loadRegions);
typeSelect.addEventListener("change", loadRegions);
regionSelect.addEventListener("change", loadYears);
yearSelect.addEventListener("change", showPapers);

// ==========================================
// Mfumo wa Malipo na Ununuzi wa Notes Kiotomatiki
// ==========================================
const SUPABASE_URL = "https://supabase.co"; 
const SUPABASE_ANON_KEY = "WEKA_HIYO_SB_PUBLISHABLE_KEY_YAKO_HAPA";

// Tengeneza mteja wa Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function anzishaUnunuziWaNotes(notesId, jinaLaNotes, bei) {
    // Inamwomba mteja aweke email ambapo Notes (PDF) itatumwa kiotomatiki akishalipa
    const emailMteja = prompt(`Unanunua Notes: ${jinaLaNotes}\nBei: TZS ${bei.toLocaleString()}\nWeka Email yako kupokea faili la PDF:`);
    
    if (!emailMteja || !emailMteja.includes('@')) {
        alert("Tafadhali weka Email sahihi ili uweze kupokea Notes!");
        return;
    }

    alert("Inakupeleka kwenye ukurasa salama wa Pesapal kulipia kwa M-Pesa / Tigo Pesa...");

    try {
        // Inatuma taarifa Supabase ili kutengeneza invoice ya Pesapal
        const response = await fetch(`${SUPABASE_URL}/functions/v1/tengeneza-malipo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
            },
            body: JSON.stringify({
                notes_id: notesId,
                jina: jinaLaNotes,
                bei: bei,
                email: emailMteja
            })
        });

        const data = await response.json();
        
        // Mteja anapelekwa page ya Pesapal kuweka namba na kulipa
        if (data && data.redirect_url) {
            window.location.href = data.redirect_url;
        } else {
            alert("Imeshindwa kuunganisha na Pesapal. Jaribu tena baadae.");
        }
    } catch (error) {
        console.error("Makosa:", error);
        alert("Mfumo wa malipo haupatikani kwa sasa.");
    }
}

