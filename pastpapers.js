let selectedForm = null;
let selectedSubject = null;
let selectedType = null;
let selectedLocation = null;
let selectedYear = null;

function goBackOrHome() {
    window.location.href = "index.html";
}
function handleFormSelect(formId) {
    selectedForm = formId;
    selectedSubject = null; selectedType = null; selectedLocation = null; selectedYear = null;
    
    // Weka rangi ya batani iliyobonyezwa
    document.querySelectorAll('#formOptions .opt-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const allButtons = document.querySelectorAll('#formOptions .opt-btn');
    allButtons.forEach(btn => {
        if(btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(formId)) {
            btn.add ? btn.add('active') : btn.classList.add('active');
        }
    });

    // Ficha hatua zote za chini ili zifuate mlolongo mmoja baada ya mwingine
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step4').classList.add('hidden');
    document.getElementById('step5').classList.add('hidden');
    document.getElementById('finalPapersArea').innerHTML = '';

    // Lebo inabadilika kiotomatiki hapa
    const locLabel = document.getElementById('locationLabel');
    if (formId === 'form1' || formId === 'form3' || formId === 'form5') {
        locLabel.textContent = "Hatua ya 4: Chagua Shule";
    } else {
        locLabel.textContent = "Hatua ya 4: Chagua Mkoa";
    }

    const subjectOpts = document.getElementById('subjectOptions');
    subjectOpts.innerHTML = '';
    
    // Kinga ya kiufundi: Tafuta database popote ilipo (kwenye window au local variable)
    const db = window.pastPapers || (typeof pastPapers !== 'undefined' ? pastPapers : null);
    
    if (db && db[formId]) {
        Object.keys(db[formId]).forEach(sub => {
            subjectOpts.innerHTML += `<div class="opt-btn" onclick="handleSubjectSelect('${sub}')">${sub}</div>`;
        });
        document.getElementById('step2').classList.remove('hidden');
    } else {
        // Hii itakusaidia kujua kama HTML haioni data yako
        console.error("Database ya pastPapers haijapatikana! Angalia jina la faili la data.");
        alert("Shida ya Kiufundi: Faili la 'pastpapers.data.js' halijapatikana au lina makosa ya kufunga mabano. Hakikisha majina yanafanana.");
    }
}

function handleSubjectSelect(subId) {
    selectedSubject = subId;
    selectedType = null; selectedLocation = null; selectedYear = null;

    document.querySelectorAll('#subjectOptions .opt-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase() === subId.toLowerCase()) btn.classList.add('active');
    });

    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step4').classList.add('hidden');
    document.getElementById('step5').classList.add('hidden');
    document.getElementById('finalPapersArea').innerHTML = '';

    const typeOpts = document.getElementById('typeOptions');
    typeOpts.innerHTML = '';

    const db = window.pastPapers || (typeof pastPapers !== 'undefined' ? pastPapers : null);

    if (db && db[selectedForm] && db[selectedForm][selectedSubject]) {
        const currentPapers = db[selectedForm][selectedSubject];
        let typesSet = new Set();
        currentPapers.forEach(p => { if(p.type) typesSet.add(p.type); });

        typesSet.forEach(t => {
            typeOpts.innerHTML += `<div class="opt-btn" onclick="handleTypeSelect('${t}')">${t}</div>`;
        });
        document.getElementById('step3').classList.remove('hidden');
    }
}
function handleTypeSelect(typeId) {
    selectedType = typeId;
    selectedLocation = null; selectedYear = null;

    document.querySelectorAll('#typeOptions .opt-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent === typeId) btn.classList.add('active');
    });

    document.getElementById('step4').classList.add('hidden');
    document.getElementById('step5').classList.add('hidden');
    document.getElementById('finalPapersArea').innerHTML = '';

    const locOpts = document.getElementById('locationOptions');
    locOpts.innerHTML = '';

    const db = window.pastPapers || (typeof pastPapers !== 'undefined' ? pastPapers : null);
    const currentPapers = db[selectedForm][selectedSubject];
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

    document.getElementById('step5').classList.add('hidden');
    document.getElementById('finalPapersArea').innerHTML = '';

    const yearOpts = document.getElementById('yearOptions');
    yearOpts.innerHTML = '';

    const db = window.pastPapers || (typeof pastPapers !== 'undefined' ? pastPapers : null);
    const currentPapers = db[selectedForm][selectedSubject];
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

    const db = window.pastPapers || (typeof pastPapers !== 'undefined' ? pastPapers : null);
    const currentPapers = db[selectedForm][selectedSubject];
    
    const targetPapers = currentPapers.filter(p => {
        return p.type === selectedType && p.region === selectedLocation && p.year.toString() === yearId;
    });

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
