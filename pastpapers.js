// State ya kumbukumbu ya hatua alizopo mtumiaji
let selectedForm = null;
let selectedSubject = null;
let selectedType = null;
let selectedLocation = null;
let selectedYear = null;

window.onload = function() {
    history.pushState({page: 'past_papers'}, "");
};

window.onpopstate = function(event) {
    window.location.href = "premium-notes.html"; 
};

function goBackOrHome() {
    if (document.referrer !== "") {
        history.back();
    } else {
        window.location.href = "premium-notes.html";
    }
}
function handleFormSelect(formId) {
    selectedForm = formId;
    selectedSubject = null; selectedType = null; selectedLocation = null; selectedYear = null;
    
    // Manage active visual state
    document.querySelectorAll('#formOptions .opt-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase().replace(' ', '') === formId) btn.classList.add('active');
    });

    // Ficha hatua zote za chini kwanza
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step4').classList.add('hidden');
    document.getElementById('step5').classList.add('hidden');
    document.getElementById('finalPapersArea').innerHTML = '';

    // Badili jina la lebo kutegemea kidato
    const locLabel = document.getElementById('locationLabel');
    if (formId === 'form1' || formId === 'form3' || formId === 'form5') {
        locLabel.textContent = "Hatua ya 4: Chagua Shule";
    } else {
        locLabel.textContent = "Hatua ya 4: Chagua Mkoa";
    }

    // Jaza Masomo (Physics, Chemistry)
    const subjectOpts = document.getElementById('subjectOptions');
    subjectOpts.innerHTML = '';
    
    const subjects = ["physics", "chemistry"];
    subjects.forEach(sub => {
        subjectOpts.innerHTML += `<div class="opt-btn" onclick="handleSubjectSelect('${sub}')">${sub}</div>`;
    });

    document.getElementById('step2').classList.remove('hidden');
}

function handleSubjectSelect(subId) {
    selectedSubject = subId;
    selectedType = null; selectedLocation = null; selectedYear = null;

    document.querySelectorAll('#subjectOptions .opt-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent === subId) btn.classList.add('active');
    });

    document.getElementById('step4').classList.add('hidden');
    document.getElementById('step5').classList.add('hidden');
    document.getElementById('finalPapersArea').innerHTML = '';

    // Jaza Aina za Mitihani (Types) dynamically kutoka kwenye database yako halisi
    const typeOpts = document.getElementById('typeOptions');
    typeOpts.innerHTML = '';

    const currentPapers = (pastPapers[selectedForm] && pastPapers[selectedForm][selectedSubject]) ? pastPapers[selectedForm][selectedSubject] : [];
    let typesSet = new Set();
    currentPapers.forEach(p => { if(p.type) typesSet.add(p.type); });

    typesSet.forEach(t => {
        typeOpts.innerHTML += `<div class="opt-btn" onclick="handleTypeSelect('${t}')">${t}</div>`;
    });

    document.getElementById('step3').classList.remove('hidden');
}
function handleTypeSelect(typeId) {
    selectedType = typeId;
    selectedLocation = null; selectedYear = null;

    document.querySelectorAll('#typeOptions .opt-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent === typeId) btn.classList.add('active');
    });

    document.getElementById('step5').classList.add('hidden');
    document.getElementById('finalPapersArea').innerHTML = '';

    // Jaza Shule au Mikoa dynamically
    const locOpts = document.getElementById('locationOptions');
    locOpts.innerHTML = '';

    const currentPapers = pastPapers[selectedForm][selectedSubject];
    let locsSet = new Set();
    currentPapers.forEach(p => {
        if(p.type === selectedType && p.region) locsSet.add(p.region);
    });

    locsSet.forEach(l => {
        locOpts.innerHTML += `<div class="opt-btn" onclick="handleLocationSelect('${l}')">${l}</div>`;
    });

    document.getElementById('step4').classList.remove('hidden');
}

function handleLocationSelect(locId) {
    selectedLocation = locId;
    selectedYear = null;

    document.querySelectorAll('#locationOptions .opt-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent === locId) btn.classList.add('active');
    });

    document.getElementById('finalPapersArea').innerHTML = '';

    // Jaza Miaka dynamically
    const yearOpts = document.getElementById('yearOptions');
    yearOpts.innerHTML = '';

    const currentPapers = pastPapers[selectedForm][selectedSubject];
    let yearsSet = new Set();
    currentPapers.forEach(p => {
        if(p.type === selectedType && p.region === selectedLocation && p.year) yearsSet.add(p.year);
    });

    Array.from(yearsSet).sort((a,b) => b - a).forEach(y => {
        yearOpts.innerHTML += `<div class="opt-btn" onclick="handleYearSelect('${y}')">${y}</div>`;
    });

    document.getElementById('step5').classList.remove('hidden');
}
function handleYearSelect(yearId) {
    selectedYear = yearId;

    document.querySelectorAll('#yearOptions .opt-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent === yearId) btn.classList.add('active');
    });

    const finalPapersArea = document.getElementById('finalPapersArea');
    finalPapersArea.innerHTML = '';

    const currentPapers = pastPapers[selectedForm][selectedSubject];
    
    // Kuchuja faili la mwisho linalokidhi vigezo vyote vitano (Form, Subject, Type, Location, Year)
    const targetPapers = currentPapers.filter(p => {
        return p.type === selectedType && p.region === selectedLocation && p.year.toString() === yearId;
    });

    // Kuonyesha Kadi za PDF sasa baada ya hatua zote kukamilika
    targetPapers.forEach(paper => {
        const cardHTML = `
            <div class="paper-card">
                <h3 class="paper-title">${paper.title}</h3>
                <a href="${paper.file}" target="_blank" class="download-btn">Fungua / Download PDF</a>
            </div>
        `;
        finalPapersArea.innerHTML += cardHTML;
    });
}

                <div style="margin-top:15px;">

                    Hakikisha:

                    <br>

                    <b>
                        pastpapers.data.js
                    </b>

                    ipo kwenye repository yako na
                    ime-load kabla ya

                    <b>
                        pastpapers.js
                    </b>.

                </div>

                <div style="margin-top:12px;font-size:12px;opacity:.8;">

                    Angalia Browser Console kama bado kuna error.

                </div>

            </div>

        `;

        console.error(
            "GEPAM PAST PAPERS DATA ERROR:",
            reason
        );

    }


    /* =====================================================
       START
    ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            startPastPapers
        );

    } else {

        startPastPapers();

    }

})();
