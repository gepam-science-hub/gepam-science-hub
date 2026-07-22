// GEPAM Past Papers Configuration and Full Database (2023 - 2026)

const pastPaperConfig = {
    "form1": { "types": ["annual", "mock", "joint", "pre_necta", "mid_term", "terminal"] },
    "form2": { "types": ["annual", "mock", "joint", "pre_necta", "mid_term", "terminal"] },
    "form3": { "types": ["annual", "mock", "joint", "pre_necta", "mid_term", "terminal"] },
    "form4": { "types": ["annual", "mock", "joint", "pre_necta", "mid_term", "terminal"] },
    "form5": { "types": ["annual", "mock", "joint", "pre_necta", "mid_term", "terminal"] },
    "form6": { "types": ["annual", "mock", "joint", "pre_necta", "mid_term", "terminal"] }
};

const pastPapers = {
    "form4": {
        "physics": [
            // ==================== DAR ES SALAAM ====================
            // 2026
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/physics/dsm_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/physics/dsm_mock_2026_phy2a.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/physics/dsm_mock_2026_phy2b.pdf" },
            { "title": "Physics 2C (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/physics/dsm_mock_2026_phy2c.pdf" },
            // 2025
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/physics/dsm_mock_2025_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/physics/dsm_mock_2025_phy2a.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/physics/dsm_mock_2025_phy2b.pdf" },
            // 2024
            { "title": "Physics 1 (Theory)", "type": "annual", "region": "dar_es_salaam", "year": 2024, "file": "papers/physics/dsm_annual_2024_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "annual", "region": "dar_es_salaam", "year": 2024, "file": "papers/physics/dsm_annual_2024_phy2a.pdf" },
            // 2023
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2023, "file": "papers/physics/dsm_pnecta_2023_phy1.pdf" },

            // ==================== DODOMA ====================
            // 2026
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2026, "file": "papers/physics/dom_joint_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "joint", "region": "dodoma", "year": 2026, "file": "papers/physics/dom_joint_2026_phy2a.pdf" },
            // 2025
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2025, "file": "papers/physics/dom_mock_2025_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dodoma", "year": 2025, "file": "papers/physics/dom_mock_2025_phy2a.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "dodoma", "year": 2025, "file": "papers/physics/dom_mock_2025_phy2b.pdf" },
            // 2024
            { "title": "Physics 1 (Theory)", "type": "mid_term", "region": "dodoma", "year": 2024, "file": "papers/physics/dom_mid_2024_phy1.pdf" },
            // 2023
            { "title": "Physics 1 (Theory)", "type": "terminal", "region": "dodoma", "year": 2023, "file": "papers/physics/dom_term_2023_phy1.pdf" },

            // ==================== ARUSHA ====================
            // 2026
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2026, "file": "papers/physics/aru_pnecta_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "pre_necta", "region": "arusha", "year": 2026, "file": "papers/physics/aru_pnecta_2026_phy2a.pdf" },
            // 2025
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "arusha", "year": 2025, "file": "papers/physics/aru_joint_2025_phy1.pdf" },
            { "title": "Physics 2B (Practical)", "type": "joint", "region": "arusha", "year": 2025, "file": "papers/physics/aru_joint_2025_phy2b.pdf" },
            // 2024
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2024, "file": "papers/physics/aru_mock_2024_phy1.pdf" },
            // 2023
            { "title": "Physics 1 (Theory)", "type": "annual", "region": "arusha", "year": 2023, "file": "papers/physics/aru_annual_2023_phy1.pdf" },

            // ==================== MBEYA ====================
            // 2026
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/physics/mby_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/physics/mby_mock_2026_phy2a.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/physics/mby_mock_2026_phy2b.pdf" },
            // 2025
            { "title": "Physics 1 (Theory)", "type": "mid_term", "region": "mbeya", "year": 2025, "file": "papers/physics/mby_mid_2025_phy1.pdf" },
            // 2024
            { "title": "Physics 1 (Theory)", "type": "terminal", "region": "mbeya", "year": 2024, "file": "papers/physics/mby_term_2024_phy1.pdf" },
            // 2023
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2023, "file": "papers/physics/mby_joint_2023_phy1.pdf" },

            // ==================== KAGERA ====================
            // 2026
            { "title": "Physics 1 (Theory)", "type": "annual", "region": "kagera", "year": 2026, "file": "papers/physics/kag_annual_2026_phy1.pdf" },
            // 2025
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2025, "file": "papers/physics/kag_mock_2025_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "kagera", "year": 2025, "file": "papers/physics/kag_mock_2025_phy2a.pdf" },
            // 2024
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2024, "file": "papers/physics/kag_pnecta_2024_phy1.pdf" },
            // 2023
            { "title": "Physics 1 (Theory)", "type": "mid_term", "region": "kagera", "year": 2023, "file": "papers/physics/kag_mid_2023_phy1.pdf" },

            // ==================== SHINYANGA ====================
            // 2026
            { "title": "Physics 1 (Theory)", "type": "terminal", "region": "shinyanga", "year": 2026, "file": "papers/physics/shy_term_2026_phy1.pdf" },
            // 2025
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2025, "file": "papers/physics/shy_joint_2025_phy1.pdf" },
            // 2024
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2024, "file": "papers/physics/shy_mock_2024_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "shinyanga", "year": 2024, "file": "papers/physics/shy_mock_2024_phy2a.pdf" },
            // 2023
            { "title": "Physics 1 (Theory)", "type": "annual", "region": "shinyanga", "year": 2023, "file": "papers/physics/shy_annual_2023_phy1.pdf" }
        ],
        "chemistry": [
            // ==================== DAR ES SALAAM ====================
            // 2026
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/chemistry/dsm_mock_2026_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/chemistry/dsm_mock_2026_chem2a.pdf" },
            { "title": "Chemistry 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/chemistry/dsm_mock_2026_chem2b.pdf" },
            { "title": "Chemistry 2C (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/chemistry/dsm_mock_2026_chem2c.pdf" },
            // 2025
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/chemistry/dsm_mock_2025_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/chemistry/dsm_mock_2025_chem2a.pdf" },
            // 2024
            { "title": "Chemistry 1 (Theory)", "type": "annual", "region": "dar_es_salaam", "year": 2024, "file": "papers/chemistry/dsm_annual_2024_chem1.pdf" },
            // 2023
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2023, "file": "papers/chemistry/dsm_pnecta_2023_chem1.pdf" },

            // ==================== DODOMA ====================
            // 2026
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2026, "file": "papers/chemistry/dom_joint_2026_chem1.pdf" },
            // 2025
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2025, "file": "papers/chemistry/dom_mock_2025_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "mock", "region": "dodoma", "year": 2025, "file": "papers/chemistry/dom_mock_2025_chem2a.pdf" },
            // 2024
            { "title": "Chemistry 1 (Theory)", "type": "mid_term", "region": "dodoma", "year": 2024, "file": "papers/chemistry/dom_mid_2024_chem1.pdf" },
            // 2023
            { "title": "Chemistry 1 (Theory)", "type": "terminal", "region": "dodoma", "year": 2023, "file": "papers/chemistry/dom_term_2023_chem1.pdf" },

            // ==================== ARUSHA ====================
            // 2026{ "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2026, "file": "papers/chemistry/aru_pnecta_2026_chem1.pdf" },// 2025{ "title": "Chemistry 1 (Theory)", "type": "joint", "region": "arusha", "year": 2025, "file": "papers/chemistry/aru_joint_2025_chem1.pdf" },{ "title": "Chemistry 2B (Practical)", "type": "joint", "region": "arusha", "year": 2025, "file": "papers/chemistry/aru_joint_2025_chem2b.pdf" },// 2024{ "title": "Chemistry 1 (Theory)", "type": "mock", "region": "arusha", "year": 2024, "file": "papers/chemistry/aru_mock_2024_chem1.pdf" },// 2023{ "title": "Chemistry 1 (Theory)", "type": "annual", "region": "arusha", "year": 2023, "file": "papers/chemistry/aru_annual_2023_chem1.pdf" },// ==================== MBEYA ====================// 2026{ "title": "Chemistry 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/chemistry/mby_mock_2026_chem1.pdf" },{ "title": "Chemistry 2A (Practical)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/chemistry/mby_mock_2026_chem2a.pdf" },// 2025{ "title": "Chemistry 1 (Theory)", "type": "mid_term", "region": "mbeya", "year": 2025, "file": "papers/chemistry/mby_mid_2025_chem1.pdf" },// 2024{ "title": "Chemistry 1 (Theory)", "type": "terminal", "region": "mbeya", "year": 2024, "file": "papers/chemistry/mby_term_2024_chem1.pdf" },// 2023{ "title": "Chemistry 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2023, "file": "papers/chemistry/mby_joint_2023_chem1.pdf" },// ==================== KAGERA ====================// 2026{ "title": "Chemistry 1 (Theory)", "type": "annual", "region": "kagera", "year": 2026, "file": "papers/chemistry/kag_annual_2026_chem1.pdf" },// 2025{ "title": "Chemistry 1 (Theory)", "type": "mock", "region": "kagera", "year": 2025, "file": "papers/chemistry/kag_mock_2025_chem1.pdf" },// 2024{ "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2024, "file": "papers/chemistry/kag_pnecta_2024_chem1.pdf" },// 2023{ "title": "Chemistry 1 (Theory)", "type": "mid_term", "region": "kagera", "year": 2023, "file": "papers/chemistry/kag_mid_2023_chem1.pdf" },// ==================== SHINYANGA ====================// 2026{ "title": "Chemistry 1 (Theory)", "type": "terminal", "region": "shinyanga", "year": 2026, "file": "papers/chemistry/shy_term_2026_chem1.pdf" },// 2025{ "title": "Chemistry 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2025, "file": "papers/chemistry/shy_joint_2025_chem1.pdf" },// 2024{ "title": "Chemistry 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2024, "file": "papers/chemistry/shy_mock_2024_chem1.pdf" },{ "title": "Chemistry 2A (Practical)", "type": "mock", "region": "shinyanga", "year": 2024, "file": "papers/chemistry/shy_mock_2024_chem2a.pdf" },// 2023{ "title": "Chemistry 1 (Theory)", "type": "annual", "region": "shinyanga", "year": 2023, "file": "papers/chemistry/shy_annual_2023_chem1.pdf" }]}};
