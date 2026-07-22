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
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "file": "papers/form1/physics/dsm_2026.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2025, "file": "papers/form1/physics/dsm_2025.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2024, "file": "papers/form1/physics/dsm_2024.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2023, "file": "papers/form1/physics/dsm_2023.pdf" },
            { "title": "Physics Midterm Exam", "type": "midterm", "region": "dodoma", "year": 2026, "file": "papers/form1/physics/dom_2026.pdf" },
            { "title": "Physics Terminal Exam", "type": "terminal", "region": "arusha", "year": 2025, "file": "papers/form1/physics/aru_2025.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "mbeya", "year": 2026, "file": "papers/form1/physics/mby_2026.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "kagera", "year": 2025, "file": "papers/form1/physics/kag_2025.pdf" },
            { "title": "Physics Midterm Exam", "type": "midterm", "region": "shinyanga", "year": 2026, "file": "papers/form1/physics/shy_2026.pdf" }
        ],
        "chemistry": [
            { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "file": "papers/form1/chemistry/dsm_2026.pdf" },
            { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2025, "file": "papers/form1/chemistry/dsm_2025.pdf" },
            { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2024, "file": "papers/form1/chemistry/dsm_2024.pdf" },
            { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2023, "file": "papers/form1/chemistry/dsm_2023.pdf" },
            { "title": "Chemistry Midterm Exam", "type": "midterm", "region": "dodoma", "year": 2026, "file": "papers/form1/chemistry/dom_2026.pdf" }
        ]
    },

    // ==================== FORM 2 ====================
    "form2": {
        "physics": [
            { "title": "Physics FTNA Exam", "type": "ftna", "region": "dar_es_salaam", "year": 2026, "file": "papers/form2/physics/dsm_2026.pdf" },
            { "title": "Physics FTNA Exam", "type": "ftna", "region": "dar_es_salaam", "year": 2025, "file": "papers/form2/physics/dsm_2025.pdf" },
            { "title": "Physics FTNA Exam", "type": "ftna", "region": "dar_es_salaam", "year": 2024, "file": "papers/form2/physics/dsm_2024.pdf" },
            { "title": "Physics FTNA Exam", "type": "ftna", "region": "dar_es_salaam", "year": 2023, "file": "papers/form2/physics/dsm_2023.pdf" },
            { "title": "Physics Midterm Exam", "type": "midterm", "region": "dodoma", "year": 2026, "file": "papers/form2/physics/dom_2026.pdf" },
            { "title": "Physics Terminal Exam", "type": "terminal", "region": "arusha", "year": 2025, "file": "papers/form2/physics/aru_2025.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "mbeya", "year": 2026, "file": "papers/form2/physics/mby_2026.pdf" },
            { "title": "Physics FTNA Exam", "type": "ftna", "region": "kagera", "year": 2025, "file": "papers/form2/physics/kag_2025.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "shinyanga", "year": 2026, "file": "papers/form2/physics/shy_2026.pdf" }
        ],
        "chemistry": [
            { "title": "Chemistry FTNA Exam", "type": "ftna", "region": "dar_es_salaam", "year": 2026, "file": "papers/form2/chemistry/dsm_2026.pdf" },
            { "title": "Chemistry FTNA Exam", "type": "ftna", "region": "dar_es_salaam", "year": 2025, "file": "papers/form2/chemistry/dsm_2025.pdf" },
            { "title": "Chemistry FTNA Exam", "type": "ftna", "region": "dar_es_salaam", "year": 2024, "file": "papers/form2/chemistry/dsm_2024.pdf" },
            { "title": "Chemistry FTNA Exam", "type": "ftna", "region": "dar_es_salaam", "year": 2023, "file": "papers/form2/chemistry/dsm_2023.pdf" }
        ]
    },

    // ==================== FORM 3 ====================
    "form3": {
        "physics": [
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "file": "papers/form3/physics/dsm_2026.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2025, "file": "papers/form3/physics/dsm_2025.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2024, "file": "papers/form3/physics/dsm_2024.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2023, "file": "papers/form3/physics/dsm_2023.pdf" },
            { "title": "Physics Midterm Exam", "type": "midterm", "region": "dodoma", "year": 2026, "file": "papers/form3/physics/dom_2026.pdf" },
            { "title": "Physics Terminal Exam", "type": "terminal", "region": "arusha", "year": 2025, "file": "papers/form3/physics/aru_2025.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "mbeya", "year": 2026, "file": "papers/form3/physics/mby_2026.pdf" },
            { "title": "Physics Annual Exam", "type": "annual", "region": "kagera", "year": 2025, "file": "papers/form3/physics/kag_2025.pdf" },
            { "title": "Physics Midterm Exam", "type": "midterm", "region": "shinyanga", "year": 2026, "file": "papers/form3/physics/shy_2026.pdf" }
        ],
        "chemistry": [
            { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "file": "papers/form3/chemistry/dsm_2026.pdf" },
            { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2025, "file": "papers/form3/chemistry/dsm_2025.pdf" },
            { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2024, "file": "papers/form3/chemistry/dsm_2024.pdf" },
            { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2023, "file": "papers/form3/chemistry/dsm_2023.pdf" }
        ]
    },

    // ==================== FORM 4 ====================
    "form4": {
        "physics": [
            // DAR ES SALAAM (MOCK YENYE FILE NYINGI PAPER 1, 2A, 2B, 2C)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2a.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2b.pdf" },
            { "title": "Physics 2C (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2c.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/dsm_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/physics/dsm_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2023, "file": "papers/form4/physics/dsm_mock_2023_phy1.pdf" },

            // DODOMA (MOCK YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/physics/dom_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2025, "file": "papers/form4/physics/dom_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2024, "file": "papers/form4/physics/dom_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2023, "file": "papers/form4/physics/dom_mock_2023_phy1.pdf" },

            // ARUSHA (MOCK YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2026, "file": "papers/form4/physics/aru_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2025, "file": "papers/form4/physics/aru_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2024, "file": "papers/form4/physics/aru_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2023, "file": "papers/form4/physics/aru_mock_2023_phy1.pdf" },

            // MBEYA (MOCK YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/form4/physics/mby_mock_2026_phy1.pdf" },{ "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2025, "file": "papers/form4/physics/mby_mock_2025_phy1.pdf" },{ "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2024, "file": "papers/form4/physics/mby_mock_2024_phy1.pdf" },{ "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2023, "file": "papers/form4/physics/mby_mock_2023_phy1.pdf" },// KAGERA (MOCK YENYE MIAKA YOTE){ "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2026, "file": "papers/form4/physics/kag_mock_2026_phy1.pdf" },{ "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2025, "file": "papers/form4/physics/kag_mock_2025_phy1.pdf" },{ "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2024, "file": "papers/form4/physics/kag_mock_2024_phy1.pdf" },{ "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2023, "file": "papers/form4/physics/kag_mock_2023_phy1.pdf" },// SHINYANGA (MOCK YENYE MIAKA YOTE){ "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2026, "file": "papers/form4/physics/shy_mock_2026_phy1.pdf" },{ "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2025, "file": "papers/form4/physics/shy_mock_2025_phy1.pdf" },{ "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2024, "file": "papers/form4/physics/shy_mock_2024_phy1.pdf" },{ "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2023, "file": "papers/form4/physics/shy_mock_2023_phy1.pdf" }],"chemistry": [// DAR ES SALAAM (MOCK CHEMISTRY YENYE FILE NYINGI PAPER 1, 2A, 2B, 2C){ "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem1.pdf" },{ "title": "Chemistry 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem2a.pdf" },{ "title": "Chemistry 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem2b.pdf" },{ "title": "Chemistry 2C (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem2c.pdf" },{ "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/chemistry/dsm_mock_2025_chem1.pdf" },{ "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/chemistry/dsm_mock_2024_chem1.pdf" },{ "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2023, "file": "papers/form4/chemistry/dsm_mock_2023_chem1.pdf" }]},
            "papers/form6/chemistry/dsm_acsee_2026_chem2.pdf" },{ "title": "Chemistry 3 (Practical)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/dsm_acsee_2026_chem3.pdf" },{ "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2025, "file": "papers/form6/chemistry/dsm_acsee_2025_chem1.pdf" },{ "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2024, "file": "papers/form6/chemistry/dsm_acsee_2024_chem1.pdf" },{ "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2023, "file": "papers/form6/chemistry/dsm_acsee_2023_chem1.pdf" }]}};
