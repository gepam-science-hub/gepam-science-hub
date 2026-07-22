// GEPAM Science Hub - Combined Configuration & Full Database (With All Years 2023-2026)

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
            // ==================== DAR ES SALAAM (MOCK) ====================
            // Miaka yote minne sasa ipo hapa chini kwa ajili ya DSM Mock
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2a.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2b.pdf" },
            { "title": "Physics 2C (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2c.pdf" },

            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/dsm_mock_2025_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/dsm_mock_2025_phy2a.pdf" },

            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/physics/dsm_mock_2024_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/physics/dsm_mock_2024_phy2a.pdf" },

            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2023, "file": "papers/form4/physics/dsm_mock_2023_phy1.pdf" },

            // ==================== DODOMA (MOCK) ====================
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/physics/dom_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/physics/dom_mock_2026_phy2a.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2025, "file": "papers/form4/physics/dom_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2024, "file": "papers/form4/physics/dom_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2023, "file": "papers/form4/physics/dom_mock_2023_phy1.pdf" },

            // ==================== ARUSHA (MOCK) ====================
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2026, "file": "papers/form4/physics/aru_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2025, "file": "papers/form4/physics/aru_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2024, "file": "papers/form4/physics/aru_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2023, "file": "papers/form4/physics/aru_mock_2023_phy1.pdf" },

            // ==================== MBEYA (MOCK) ====================
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/form4/physics/mby_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2025, "file": "papers/form4/physics/mby_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2024, "file": "papers/form4/physics/mby_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2023, "file": "papers/form4/physics/mby_mock_2023_phy1.pdf" },

            // ==================== KAGERA (MOCK) ====================
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2026, "file": "papers/form4/physics/kag_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2025, "file": "papers/form4/physics/kag_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2024, "file": "papers/form4/physics/kag_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2023, "file": "papers/form4/physics/kag_mock_2023_phy1.pdf" },

            // ==================== SHINYANGA (MOCK) ====================
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2026, "file": "papers/form4/physics/shy_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2025, "file": "papers/form4/physics/shy_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2024, "file": "papers/form4/physics/shy_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2023, "file": "papers/form4/physics/shy_mock_2023_phy1.pdf" }
        ],
        "chemistry": [
            // ==================== DAR ES SALAAM (MOCK) ====================
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem2a.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/chemistry/dsm_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/chemistry/dsm_mock_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2023, "file": "papers/form4/chemistry/dsm_mock_2023_chem1.pdf" }
        ]
    },
    "form5": { "physics": [], "chemistry": [] },
    "form6": { "physics": [], "chemistry": [] }
};
