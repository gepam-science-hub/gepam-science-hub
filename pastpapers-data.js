// GEPAM Science Hub - Complete Configuration & Full Database

const pastPaperConfig = {
    "form1": { "subjects": ["physics", "chemistry"], "types": ["midterm", "terminal", "annual", "joint"] },
    "form2": { "subjects": ["physics", "chemistry"], "types": ["ftna", "midterm", "terminal", "annual", "joint"] },
    "form3": { "subjects": ["physics", "chemistry"], "types": ["midterm", "terminal", "annual", "joint"] },
    "form4": { "subjects": ["physics", "chemistry"], "types": ["necta", "mock", "pre_necta", "joint", "annual", "midterm", "terminal"] },
    "form5": { "subjects": ["physics", "chemistry"], "types": ["midterm", "terminal", "annual", "joint"] },
    "form6": { "subjects": ["physics", "chemistry"], "types": ["acsee", "mock", "pre_necta", "joint", "annual", "midterm", "terminal"] }
};

const pastPapers = {
    "form1": { "physics": [], "chemistry": [] },
    "form2": { "physics": [], "chemistry": [] },
    "form3": { "physics": [], "chemistry": [] },
    "form4": {
        "physics": [
            // ==================== DAR ES SALAAM ====================
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2a.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2b.pdf" },
            { "title": "Physics 2C (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2c.pdf" },

            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/dsm_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "necta", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/physics/dsm_necta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2023, "file": "papers/form4/physics/dsm_pnecta_2023_phy1.pdf" },

            // ==================== DODOMA ====================
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/physics/dom_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/physics/dom_mock_2026_phy2a.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2025, "file": "papers/form4/physics/dom_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "midterm", "region": "dodoma", "year": 2024, "file": "papers/form4/physics/dom_mid_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "terminal", "region": "dodoma", "year": 2023, "file": "papers/form4/physics/dom_term_2023_phy1.pdf" },

            // ==================== ARUSHA ====================
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2026, "file": "papers/form4/physics/aru_mock_2026_phy1.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "arusha", "year": 2026, "file": "papers/form4/physics/aru_mock_2026_phy2b.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2025, "file": "papers/form4/physics/aru_pnecta_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "annual", "region": "arusha", "year": 2024, "file": "papers/form4/physics/aru_annual_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "arusha", "year": 2023, "file": "papers/form4/physics/aru_joint_2023_phy1.pdf" },

            // ==================== MBEYA ====================
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/form4/physics/mby_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/form4/physics/mby_mock_2026_phy2a.pdf" },
            { "title": "Physics 1 (Theory)", "type": "necta", "region": "mbeya", "year": 2025, "file": "papers/form4/physics/mby_necta_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "midterm", "region": "mbeya", "year": 2024, "file": "papers/form4/physics/mby_mid_2024_phy1.pdf" },

            // ==================== KAGERA ====================
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2026, "file": "papers/form4/physics/kag_mock_2026_phy1.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "kagera", "year": 2026, "file": "papers/form4/physics/kag_mock_2026_phy2b.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "kagera", "year": 2025, "file": "papers/form4/physics/kag_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "annual", "region": "kagera", "year": 2024, "file": "papers/form4/physics/kag_annual_2024_phy1.pdf" },

            // ==================== SHINYANGA ====================
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2026, "file": "papers/form4/physics/shy_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "shinyanga", "year": 2026, "file": "papers/form4/physics/shy_mock_2026_phy2a.pdf" },
            { "title": "Physics 1 (Theory)", "type": "terminal", "region": "shinyanga", "year": 2025, "file": "papers/form4/physics/shy_term_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "necta", "region": "shinyanga", "year": 2024, "file": "papers/form4/physics/shy_necta_2024_phy1.pdf" }
        ],
        "chemistry": [
            // ==================== DAR ES SALAAM ====================
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem2a.pdf" },
            { "title": "Chemistry 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem2b.pdf" },
            { "title": "Chemistry 2C (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem2c.pdf" },

            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/chemistry/dsm_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "necta", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/chemistry/dsm_necta_2024_chem1.pdf" },

            // ==================== DODOMA ====================
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/chemistry/dom_mock_2026_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/chemistry/dom_mock_2026_chem2a.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2025, "file": "papers/form4/chemistry/dom_joint_2025_chem1.pdf" },

            // ==================== ARUSHA ====================
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "arusha", "year": 2026, "file": "papers/form4/chemistry/aru_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2025, "file": "papers/form4/chemistry/aru_pnecta_2025_chem1.pdf" },

            // ==================== MBEYA ====================
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/form4/chemistry/mby_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "necta", "region": "mbeya", "year": 2025, "file": "papers/form4/chemistry/mby_necta_2025_chem1.pdf" },

            // ==================== KAGERA ====================
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "kagera", "year": 2026, "file": "papers/form4/chemistry/kag_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "annual", "region": "kagera", "year": 2024, "file": "papers/form4/chemistry/kag_annual_2024_chem1.pdf" },

            // ==================== SHINYANGA ====================
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2026, "file": "papers/form4/chemistry/shy_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "terminal", "region": "shinyanga", "year": 2025, "file": "papers/form4/chemistry/shy_term_2025_chem1.pdf" }
        ]
    },
    "form5": { "physics": [], "chemistry": [] },
    "form6": {
        "physics": [
            { "title": "Physics 1 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/dsm_acsee_2026_phy1.pdf" },
            { "title": "Physics 2 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/dsm_acsee_2026_phy2.pdf" },
            { "title": "Physics 3 (Practical)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/dsm_acsee_2026_phy3.pdf" }
        ],
        "chemistry": [
            { "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/dsm_acsee_2026_chem1.pdf" }
        ]
    }
};
