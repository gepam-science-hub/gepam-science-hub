// GEPAM Science Hub - Master Unified Database Structure (Form 1 - 6 Complete)

const pastPaperConfig = {
    "form1": { "subjects": ["physics", "chemistry"], "types": ["midterm", "terminal", "annual", "joint"] },
    "form2": { "subjects": ["physics", "chemistry"], "types": ["ftna", "midterm", "terminal", "annual", "joint"] },
    "form3": { "subjects": ["physics", "chemistry"], "types": ["midterm", "terminal", "annual", "joint"] },
    "form4": { "subjects": ["physics", "chemistry"], "types": ["necta", "mock", "pre_necta", "joint", "annual", "midterm", "terminal"] },
    "form5": { "subjects": ["physics", "chemistry"], "types": ["midterm", "terminal", "annual", "joint"] },
    "form6": { "subjects": ["physics", "chemistry"], "types": ["acsee", "mock", "pre_necta", "joint", "annual", "midterm", "terminal"] }
};

const pastPapers = {
    // ==================== FORM 1 ====================
    "form1": {
        "physics": [
            // DAR ES SALAAM (5 Schools & 5 Districts)
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "school": "feza_boys", "file": "papers/form1/physics/dsm_2026_feza.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "school": "tambaza", "file": "papers/form1/physics/dsm_2026_tambaza.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "school": "jangwani", "file": "papers/form1/physics/dsm_2026_jangwani.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "school": "azania", "file": "papers/form1/physics/dsm_2026_azania.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "school": "shaaban_robert", "file": "papers/form1/physics/dsm_2026_shaaban.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "dar_es_salaam", "year": 2026, "district": "ilala", "file": "papers/form1/physics/dsm_joint_ilala.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "dar_es_salaam", "year": 2026, "district": "kinondoni", "file": "papers/form1/physics/dsm_joint_kinondoni.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "dar_es_salaam", "year": 2026, "district": "temeke", "file": "papers/form1/physics/dsm_joint_temeke.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "dar_es_salaam", "year": 2026, "district": "ubungo", "file": "papers/form1/physics/dsm_joint_ubungo.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "dar_es_salaam", "year": 2026, "district": "kigamboni", "file": "papers/form1/physics/dsm_joint_kigamboni.pdf" },

            // DODOMA (5 Schools & 5 Districts)
            { "title": "Physics Annual Exam", "type": "annual", "region": "dodoma", "year": 2026, "school": "dodoma_secondary", "file": "papers/form1/physics/dom_2026_domsec.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dodoma", "year": 2026, "school": "bihawana", "file": "papers/form1/physics/dom_2026_bihawana.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dodoma", "year": 2026, "school": "mirembe", "file": "papers/form1/physics/dom_2026_mirembe.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dodoma", "year": 2026, "school": "kiwanja_cha_ndege", "file": "papers/form1/physics/dom_2026_kiwanja.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dodoma", "year": 2026, "school": "hombolo", "file": "papers/form1/physics/dom_2026_hombolo.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "dodoma", "year": 2026, "district": "dodoma_mjini", "file": "papers/form1/physics/dom_joint_mjini.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "dodoma", "year": 2026, "district": "bahi", "file": "papers/form1/physics/dom_joint_bahi.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "dodoma", "year": 2026, "district": "chemba", "file": "papers/form1/physics/dom_joint_chemba.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "dodoma", "year": 2026, "district": "kondoa", "file": "papers/form1/physics/dom_joint_kondoa.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "dodoma", "year": 2026, "district": "mpwapwa", "file": "papers/form1/physics/dom_joint_mpwapwa.pdf" },

            // ARUSHA (5 Schools & 5 Districts)
            { "title": "Physics Annual Exam", "type": "annual", "region": "arusha", "year": 2026, "school": "ilboru", "file": "papers/form1/physics/aru_2026_ilboru.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "arusha", "year": 2026, "school": "arusha_meru", "file": "papers/form1/physics/aru_2026_meru.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "arusha", "year": 2026, "school": "edmund_rice", "file": "papers/form1/physics/aru_2026_edmund.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "arusha", "year": 2026, "school": "enaboishu", "file": "papers/form1/physics/aru_2026_enaboishu.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "arusha", "year": 2026, "school": "longido_sec", "file": "papers/form1/physics/aru_2026_longido.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "arusha", "year": 2026, "district": "arusha_mjini", "file": "papers/form1/physics/aru_joint_mjini.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "arusha", "year": 2026, "district": "meru", "file": "papers/form1/physics/aru_joint_meru.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "arusha", "year": 2026, "district": "karatu", "file": "papers/form1/physics/aru_joint_karatu.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "arusha", "year": 2026, "district": "monduli", "file": "papers/form1/physics/aru_joint_monduli.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "arusha", "year": 2026, "district": "ngorongoro", "file": "papers/form1/physics/aru_joint_ngorongoro.pdf" }
        ],
        "chemistry": []
    },

    // ==================== FORM 2 ====================
    "form2": {
        "physics": [
            // FTNA Common Exams (Haiitaji shule wala wilaya)
            { "title": "Physics FTNA National Exam", "type": "ftna", "region": "dar_es_salaam", "year": 2025, "file": "papers/form2/physics/dsm_2025_ftna.pdf" },
            { "title": "Physics FTNA National Exam", "type": "ftna", "region": "dodoma", "year": 2025, "file": "papers/form2/physics/dom_2025_ftna.pdf" },
            { "title": "Physics FTNA National Exam", "type": "ftna", "region": "arusha", "year": 2025, "file": "papers/form2/physics/aru_2025_ftna.pdf" },
            
            // Kishule na Kiwilaya
            { "title": "Physics Midterm Exam", "type": "midterm", "region": "dodoma", "year": 2026, "school": "dodoma_secondary", "file": "papers/form2/physics/dom_2026_mid.pdf" },
            { "title": "Physics Terminal Exam", "type": "terminal", "region": "arusha", "year": 2025, "school": "arusha_meru", "file": "papers/form2/physics/aru_2025_term.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "mbeya", "year": 2026, "district": "mbeya_mjini", "file": "papers/form2/physics/mby_2026_joint.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "shinyanga", "year": 2026, "school": "shy_boys", "file": "papers/form2/physics/shy_2026_annual.pdf" }
        ],
        "chemistry": []
    },

    // ==================== FORM 3 ====================
    "form3": {
        "physics": [
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "school": "feza_boys", "file": "papers/form3/physics/dsm_2026_annual.pdf" },
            { "title": "Physics Midterm Exam", "type": "midterm", "region": "dodoma", "year": 2026, "school": "bihawana", "file": "papers/form3/physics/dom_2026_mid.pdf" },
            { "title": "Physics Terminal Exam", "type": "terminal", "region": "arusha", "year": 2025, "school": "ilboru", "file": "papers/form3/physics/aru_2025_term.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "arusha", "year": 2026, "district": "meru", "file": "papers/form3/physics/aru_2026_joint.pdf" }
        ],
        "chemistry": []
    },

    // ==================== FORM 4 ====================
    "form4": {
        "physics": [
            // DAR ES SALAAM (MOCK & NECTA)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/mock/dar_es_salaam/2026/dsm_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/mock/dar_es_salaam/2026/dsm_mock_2026_phy2a.pdf" },
            { "title": "Physics 1 (Theory)", "type": "necta", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/necta_2025.pdf" },
            
            // DODOMA & ARUSHA (MOCK)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/physics/dom_mock_2026.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2026, "file": "papers/form4/physics/aru_mock_2026.pdf" },
            
            // Joint au Annual za Form 4 zikiwepo zinatambuliwa hapa
// ==================== FORM 5 ====================
"form5": {
"physics": [
{ "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "school": "feza_boys", "file": "papers/form5/physics/dsm_2026.pdf" },
{ "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2025, "school": "tambaza", "file": "papers/form5/physics/dsm_2025.pdf" },
{ "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2024, "school": "jangwani", "file": "papers/form5/physics/dsm_2024.pdf" },
{ "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2023, "school": "azania", "file": "papers/form5/physics/dsm_2023.pdf" },
{ "title": "Physics Midterm Exam", "type": "midterm", "region": "dodoma", "year": 2026, "school": "dodoma_secondary", "file": "papers/form5/physics/dom_2026.pdf" },
{ "title": "Physics Terminal Exam", "type": "terminal", "region": "arusha", "year": 2025, "school": "ilboru", "file": "papers/form5/physics/aru_2025.pdf" },
{ "title": "Physics Joint Exam", "type": "joint", "region": "mbeya", "year": 2026, "district": "mbeya_mjini", "file": "papers/form5/physics/mby_2026.pdf" },
{ "title": "Physics Annual Exam", "type": "annual", "region": "kagera", "year": 2025, "school": "bukoba_sec", "file": "papers/form5/physics/kag_2025.pdf" },
{ "title": "Physics Midterm Exam", "type": "midterm", "region": "shinyanga", "year": 2026, "school": "shy_boys", "file": "papers/form5/physics/shy_2026.pdf" }
 ]
,"chemistry": [
{ "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "school": "feza_boys", "file": "papers/form5/chemistry/dsm_2026.pdf" },
{ "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2025, "school": "tambaza", "file": "papers/form5/chemistry/dsm_2025.pdf" },
{ "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2024, "school": "jangwani", "file": "papers/form5/chemistry/dsm_2024.pdf" },
{ "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2023, "school": "azania", "file": "papers/form5/chemistry/dsm_2023.pdf" }
 ]
},

// ==================== FORM 6 ====================
"form6": {
"physics": [
{ "title": "Physics 1 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/dsm_acsee_2026_phy1.pdf" },
{ "title": "Physics 2 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/dsm_acsee_2026_phy2.pdf" },
{ "title": "Physics 3 (Practical)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/dsm_acsee_2026_phy3.pdf" },
{ "title": "Physics 1 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2025, "file": "papers/form6/physics/dsm_acsee_2025_phy1.pdf" },
{ "title": "Physics 1 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2024, "file": "papers/form6/physics/dsm_acsee_2024_phy1.pdf" },
{ "title": "Physics 1 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2023, "file": "papers/form6/physics/dsm_acsee_2023_phy1.pdf" },
{ "title": "Physics Midterm Exam", "type": "midterm", "region": "dodoma", "year": 2026, "school": "dodoma_secondary", "file": "papers/form6/physics/dom_2026.pdf" },
{ "title": "Physics Terminal Exam", "type": "terminal", "region": "arusha", "year": 2025, "school": "ilboru", "file": "papers/form6/physics/aru_2025.pdf" },
{ "title": "Physics Joint Exam", "type": "joint", "region": "mbeya", "year": 2026, "district": "mbeya_mjini", "file": "papers/form6/physics/mby_2026.pdf" },
{ "title": "Physics Annual Exam", "type": "annual", "region": "kagera", "year": 2025, "school": "bukoba_sec", "file": "papers/form6/physics/kag_2025.pdf" },
{ "title": "Physics Midterm Exam", "type": "midterm", "region": "shinyanga", "year": 2026, "school": "shy_boys", "file": "papers/form6/physics/shy_2026.pdf" }
 ]
,"chemistry": [
{ "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "necta", "year": 2026, "file": "papers/form6/chemistry/dsm_acsee_2026_chem1.pdf" },
{ "title": "Chemistry 2 (Theory)", "type": "acsee", "region": "necta", "year": 2026, "file": "papers/form6/chemistry/dsm_acsee_2026_chem2.pdf" },
{ "title": "Chemistry 3 (Practical)", "type": "acsee", "region": "necta", "year": 2026, "file": "papers/form6/chemistry/dsm_acsee_2026_chem3.pdf" },
{ "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "necta", "year": 2025, "file": "papers/form6/chemistry/dsm_acsee_2025_chem1.pdf" },
{ "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "necta", "year": 2024, "file": "papers/form6/chemistry/dsm_acsee_2024_chem1.pdf" },
{ "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "necta", "year": 2023, "file": "papers/form6/chemistry/dsm_acsee_2023_chem1.pdf" }
 ]
}
};
