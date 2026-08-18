let selectedForm = null;
let selectedSubject = null;
let selectedType = null;
let selectedLocation = null;
let selectedYear = null;

function goBackOrHome() {
    window.location.href = "index.html";
}

// 1. Hatua ya 1: Kuchagua Kidato (Form 1 - Form 6)
function handleFormSelect(formId) {
    selectedForm = formId;
    selectedSubject = null; selectedType = null; selectedLocation = null; selectedYear = null;
    
    document.querySelectorAll('#formOptions .opt-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase().replace(' ', '') === formId) {
            btn.classList.add('active');
        }
    });

    // Ficha hatua zote za chini kwanza ili zifuate mlolongo
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step4').classList.add('hidden');
    document.getElementById('step5').classList.add('hidden');
    document.getElementById('finalPapersArea').innerHTML = '';

    // Kubadili herufi za Lebo kwenye UI tu, lakini kwenye code tunasoma "region" ya data yako
    const locLabel = document.getElementById('locationLabel');
    if (formId === 'form1' || formId === 'form3' || formId === 'form5') {
        locLabel.textContent = "Hatua ya 4: Chagua Shule";
    } else {
        locLabel.textContent = "Hatua ya 4: Chagua Mkoa";
    }

    // Jaza masomo yaliyopo kwenye hiyo form kutoka pastPapers object
    const subjectOpts = document.getElementById('subjectOptions');
    subjectOpts.innerHTML = '';
    
    if (pastPapers[formId]) {
        Object.keys(pastPapers[formId]).forEach(sub => {
            subjectOpts.innerHTML += `<div class="opt-btn" onclick="handleSubjectSelect('${sub}')">${sub}</div>`;
        });
    }

    document.getElementById('step2').classList.remove('hidden');
}

// 2. Hatua ya 2: Kuchagua Somo (Physics au Chemistry)
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

    // Kusoma 'type' (Aina ya mitihani) zilizopo kwenye data yako ya somo husika
    const typeOpts = document.getElementById('typeOptions');
    typeOpts.innerHTML = '';

    if (pastPapers[selectedForm] && pastPapers[selectedForm][selectedSubject]) {
        const currentPapers = pastPapers[selectedForm][selectedSubject];
        let typesSet = new Set();
        currentPapers.forEach(p => { if(p.type) typesSet.add(p.type); });

        typesSet.forEach(t => {
            typeOpts.innerHTML += `<div class="opt-btn" onclick="handleTypeSelect('${t}')">${t}</div>`;
        });
    }

    document.getElementById('step3').classList.remove('hidden');
}

// 3. Hatua ya 3: Kuchagua Aina ya Mtihani (mock, necta, joint, n.k.)
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

    // HAPA NDIPO SULUHISHO: Tunasoma funguo ya "region" kutoka kwenye data yako ya asili!
    const currentPapers = pastPapers[selectedForm][selectedSubject];
    let locsSet = new Set();
    currentPapers.forEach(p => {
        if(p.type === selectedType && p.region) locsSet.add(p.region);
    });

    locsSet.forEach(l => {
        // Inaonyesha jina halisi lililopo kwenye data yako (mfano: dar_es_salaam, necta, dodoma)
        locOpts.innerHTML += `<div class="opt-btn" onclick="handleLocationSelect('${l}')">${l}</div>`;
    });

    document.getElementById('step4').classList.remove('hidden');
}

// 4. Hatua ya 4: Kuchagua Shule au Mkoa (Kutokana na 'region' ya data yako)
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

    const currentPapers = pastPapers[selectedForm][selectedSubject];
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

// 5. Hatua ya 5: Kuchagua Mwaka na kuonyesha PDF zilizofika kikomo
function handleYearSelect(yearId) {
    selectedYear = yearId;

    document.querySelectorAll('#yearOptions .opt-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent === yearId) btn.classList.add('active');
    });

    const finalPapersArea = document.getElementById('finalPapersArea');
    finalPapersArea.innerHTML = '';

    const currentPapers = pastPapers[selectedForm][selectedSubject];
    
    // Kuchuja mtihani kamili unaoendana na machaguo yote matano
    const targetPapers = currentPapers.filter(p => {
        return p.type === selectedType && p.region === selectedLocation && p.year.toString() === yearId;
    });

    // Kuonyesha Kadi za PDF sasa baada ya kukamilisha hatua zote za ndani
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
