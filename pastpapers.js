let selectedForm = null;
let selectedSubject = null;
let selectedType = null;
let selectedLocation = null;
let selectedYear = null;

function goBackOrHome() {
    window.location.href = "index.html";
}

// Hatua ya 1: Mtumiaji anapobofya Kidato
function handleFormSelect(formId) {
    selectedForm = formId;
    selectedSubject = null; selectedType = null; selectedLocation = null; selectedYear = null;
    
    // Weka rangi ya batani iliyobonyezwa
    document.querySelectorAll('#formOptions .opt-btn').forEach(btn => btn.classList.remove('active'));
    
    const allButtons = document.querySelectorAll('#formOptions .opt-btn');
    allButtons.forEach(btn => {
        if(btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(formId)) {
            btn.classList.add('active');
        }
    });

    // Ficha hatua zote za chini kwanza ili zifuate mlolongo
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step4').classList.add('hidden');
    document.getElementById('step5').classList.add('hidden');
    document.getElementById('finalPapersArea').innerHTML = '';

    // MPANGILIO MAPYA: Vidato 1, 3, 5 vinalenga SHULE kwenye screen. Vidato 2, 4, 6 vinalenga MKOA
    const locLabel = document.getElementById('locationLabel');
    if (formId === 'form1' || formId === 'form3' || formId === 'form5') {
        locLabel.textContent = "Hatua ya 4: Chagua Shule";
    } else {
        locLabel.textContent = "Hatua ya 4: Chagua Mkoa";
    }

    // Jaza Masomo (Physics, Chemistry)
    const subjectOpts = document.getElementById('subjectOptions');
    subjectOpts.innerHTML = '';
    
    const db = window.pastPapers || (typeof pastPapers !== 'undefined' ? pastPapers : null);
    
    if (db && db[formId]) {
        Object.keys(db[formId]).forEach(sub => {
            subjectOpts.innerHTML += `<div class="opt-btn" onclick="handleSubjectSelect('${sub}')">${sub}</div>`;
        });
        document.getElementById('step2').classList.remove('hidden');
    }
}

// Hatua ya 2: Mtumiaji anapobofya Somo
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
// Hatua ya 3: Mtumiaji anapobofya Aina ya Mtihani
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
        // Tunasoma "region" kutoka database yako ya asili, ila kwenye screen itaandikwa chini ya lebo ya Shule au Mkoa
        locOpts.innerHTML += `<div class="opt-btn" onclick="handleLocationSelect('${l}')">${l.replace(/_/g, ' ')}</div>`;
    });

    document.getElementById('step4').classList.remove('hidden');
}

// Hatua ya 4: Mtumiaji anapobofya Shule au Mkoa
function handleLocationSelect(locId) {
    selectedLocation = locId;
    selectedYear = null;

    document.querySelectorAll('#locationOptions .opt-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(locId)) btn.classList.add('active');
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

    // Kupanga miaka kuanzia mpya kurudi nyuma
    Array.from(yearsSet).sort((a,b) => b - a).forEach(y => {
        yearOpts.innerHTML += `<div class="opt-btn" onclick="handleYearSelect('${y}')">${y}</div>`;
    });

    document.getElementById('step5').classList.remove('hidden');
}

// Hatua ya 5: Mtumiaji anapobofya Mwaka - Kadi za PDF zinatokea
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
        // Lebo maalum ya kadi kwa ajili ya usafi wa maneno
        const locationType = (selectedForm === 'form1' || selectedForm === 'form3' || selectedForm === 'form5') ? 'Shule' : 'Mkoa';
        
        const cardHTML = `
            <div class="paper-card">
                <div>
                    <h3 class="paper-title">${paper.title}</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px; text-transform: capitalize;">
                        📍 ${locationType}: ${paper.region.replace(/_/g, ' ')} | 📅 Mwaka: ${paper.year}
                    </p>
                </div>
                <a href="${paper.file}" target="_blank" class="download-btn">Fungua / Download PDF</a>
            </div>
        `;
        finalPapersArea.innerHTML += cardHTML;
    });
}
