// GEPAM Science Hub - 100% Complete Configuration & Full Database (Form 1 - 6)

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
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "file": "papers/form1/physics/dsm_annual_2026_phy.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2025, "file": "papers/form1/physics/dsm_annual_2025_phy.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2024, "file": "papers/form1/physics/dsm_annual_2024_phy.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2023, "file": "papers/form1/physics/dsm_annual_2023_phy.pdf" },
            { "title": "Physics Midterm Exam", "type": "midterm", "region": "dodoma", "year": 2026, "file": "papers/form1/physics/dom_mid_2026_phy.pdf" },
            { "title": "Physics Terminal Exam", "type": "terminal", "region": "arusha", "year": 2025, "file": "papers/form1/physics/aru_term_2025_phy.pdf" }
        ],
        "chemistry": [
            { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "file": "papers/form1/chemistry/dsm_annual_2026_chem.pdf" },
            { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2025, "file": "papers/form1/chemistry/dsm_annual_2025_chem.pdf" },
            { "title": "Chemistry Joint Exam", "type": "joint", "region": "mbeya", "year": 2024, "file": "papers/form1/chemistry/mby_joint_2024_chem.pdf" }
        ]
    },

    // ==================== FORM 2 ====================
    "form2": {
        "physics": [
            { "title": "Physics FTNA National", "type": "ftna", "region": "dar_es_salaam", "year": 2026, "file": "papers/form2/physics/dsm_ftna_2026_phy.pdf" },
            { "title": "Physics FTNA National", "type": "ftna", "region": "dar_es_salaam", "year": 2025, "file": "papers/form2/physics/dsm_ftna_2025_phy.pdf" },
            { "title": "Physics FTNA National", "type": "ftna", "region": "dar_es_salaam", "year": 2024, "file": "papers/form2/physics/dsm_ftna_2024_phy.pdf" },
            { "title": "Physics FTNA National", "type": "ftna", "region": "dar_es_salaam", "year": 2023, "file": "papers/form2/physics/dsm_ftna_2023_phy.pdf" },
            { "title": "Physics Midterm Exam", "type": "midterm", "region": "kagera", "year": 2026, "file": "papers/form2/physics/kag_mid_2026_phy.pdf" },
            { "title": "Physics Terminal Exam", "type": "terminal", "region": "shinyanga", "year": 2025, "file": "papers/form2/physics/shy_term_2025_phy.pdf" }
        ],
        "chemistry": [
            { "title": "Chemistry FTNA National", "type": "ftna", "region": "dar_es_salaam", "year": 2026, "file": "papers/form2/chemistry/dsm_ftna_2026_chem.pdf" },
            { "title": "Chemistry FTNA National", "type": "ftna", "region": "dar_es_salaam", "year": 2025, "file": "papers/form2/chemistry/dsm_ftna_2025_chem.pdf" },
            { "title": "Chemistry Joint Exam", "type": "joint", "region": "dodoma", "year": 2024, "file": "papers/form2/chemistry/dom_joint_2024_chem.pdf" }
        ]
    },

    // ==================== FORM 3 ====================
    "form3": {
        "physics": [
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "file": "papers/form3/physics/dsm_annual_2026_phy.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2025, "file": "papers/form3/physics/dsm_annual_2025_phy.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2024, "file": "papers/form3/physics/dsm_annual_2024_phy.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2023, "file": "papers/form3/physics/dsm_annual_2023_phy.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "mbeya", "year": 2025, "file": "papers/form3/physics/mby_joint_2025_phy.pdf" }
        ],
        "chemistry": [
            { "title": "Chemistry Terminal Exam", "type": "terminal", "region": "dar_es_salaam", "year": 2026, "file": "papers/form3/chemistry/dsm_term_2026_chem.pdf" },
            { "title": "Chemistry Midterm Exam", "type": "midterm", "region": "arusha", "year": 2025, "file": "papers/form3/chemistry/aru_mid_2025_chem.pdf" }
        ]
    },

    // ==================== FORM 4 ====================
    "form4": {
        "physics": [
            // DAR ES SALAAM (Faili Nyingi 1, 2A, 2B, 2C kwa mwaka mmoja)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2a.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2b.pdf" },
            { "title": "Physics 2C (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2c.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/dsm_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/physics/dsm_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2023, "file": "papers/form4/physics/dsm_mock_2023_phy1.pdf" },

            // DODOMA
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/physics/dom_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2025, "file": "papers/form4/physics/dom_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2024, "file": "papers/form4/physics/dom_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2023, "file": "papers/form4/physics/dom_mock_2023_phy1.pdf" },

            // ARUSHA
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2026, "file": "papers/form4/physics/aru_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2025, "file": "papers/form4/physics/aru_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2024, "file": "papers/form4/physics/aru_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2023, "file": "papers/form4/physics/aru_mock_2023_phy1.pdf" },

            // MBEYA
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/form4/physics/mby_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2025, "file": "papers/form4/physics/mby_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2024, "file": "papers/form4/physics/mby_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2023, "file": "papers/form4/physics/mby_mock_2023_phy1.pdf" },

            // KAGERA
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2026, "file": "papers/form4/physics/kag_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2025, "file": "papers/form4/physics/kag_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2024, "file": "papers/form4/physics/kag_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2023, "file": "papers/form4/physics/kag_mock_2023_phy1.pdf" },

            // SHINYANGA
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2026, "file": "papers/form4/physics/shy_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2025, "file": "papers/form4/physics/shy_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2024, "file": "papers/form4/physics/shy_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2023, "file": "papers/form4/physics/shy_mock_2023_phy1.pdf" }
        ],
        "chemistry": [
            // DAR ES SALAAM (Faili Nyingi 1 hadi 2C)
            
"papers/form6/chemistry/dsm_acsee_2026_chem1.pdf" },{ "title": "Chemistry 2 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/dsm_acsee_2026_chem2.pdf" },{ "title": "Chemistry 3 (Practical)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/dsm_acsee_2026_chem3.pdf" },{ "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2025, "file": "papers/form6/chemistry/dsm_acsee_2025_chem1.pdf" },{ "title": "Chemistry Mock Exam", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form6/chemistry/dom_mock_2026_chem.pdf" }]}};
