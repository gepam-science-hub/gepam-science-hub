// GEPAM Science Hub - Master Combined Configuration & Database (Form 1 - 6)

const pastPaperConfig = {
    "form1": { "subjects": ["physics", "chemistry"], "types": ["midterm", "terminal", "annual"] },
    "form2": { "subjects": ["physics", "chemistry"], "types": ["ftna", "midterm", "terminal", "joint"] },
    "form3": { "subjects": ["physics", "chemistry"], "types": ["midterm", "terminal", "annual", "joint"] },
    "form4": { "subjects": ["physics", "chemistry"], "types": ["necta", "mock", "pre_necta", "joint"] },
    "form5": { "subjects": ["physics", "chemistry"], "types": ["midterm", "terminal", "annual", "joint"] },
    "form6": { "subjects": ["physics", "chemistry"], "types": ["acsee", "mock", "pre_necta", "joint"] }
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
            { "title": "Physics FTNA Exam", "type": "ftna", "region": "necta", "year": 2026, "file": "papers/form2/physics/necta_2026.pdf" },
            { "title": "Physics FTNA Exam", "type": "ftna", "region": "necta", "year": 2025, "file": "papers/form2/physics/necta_2025.pdf" },
            { "title": "Physics FTNA Exam", "type": "ftna", "region": "necta", "year": 2024, "file": "papers/form2/physics/necta_2024.pdf" },
            { "title": "Physics FTNA Exam", "type": "ftna", "region": "necta", "year": 2023, "file": "papers/form2/physics/necta_2023.pdf" },
            { "title": "Physics Midterm Exam", "type": "midterm", "region": "dodoma", "year": 2026, "file": "papers/form2/physics/dom_2026.pdf" },
            { "title": "Physics Terminal Exam", "type": "terminal", "region": "arusha", "year": 2025, "file": "papers/form2/physics/aru_2025.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "mbeya", "year": 2026, "file": "papers/form2/physics/mby_2026.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "dodoma", "year": 2025, "file": "papers/form2/physics/dom_2025.pdf" },
            { "title": "Physics Joint Exam", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form2/physics/dsm_2026.pdf" }
        ],
        "chemistry": [
            { "title": "Chemistry FTNA Exam", "type": "ftna", "region": "necta", "year": 2026, "file": "papers/form2/chemistry/necta_2026.pdf" },
            { "title": "Chemistry FTNA Exam", "type": "ftna", "region": "necta", "year": 2025, "file": "papers/form2/chemistry/dsm_2025.pdf" },
            { "title": "Chemistry FTNA Exam", "type": "ftna", "region": "necta", "year": 2024, "file": "papers/form2/chemistry/necta_2024.pdf" },
            { "title": "Chemistry FTNA Exam", "type": "ftna", "region": "necta", "year": 2023, "file": "papers/form2/chemistry/necta_2023.pdf" }
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
        physics: [
            // DAR ES SALAAM (MOCK YENYE FAILI NYINGI)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/mock/dar_es_salaam/2026/F4_dsm_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/mock/dar_es_salaam/2026/F4_dsm_mock_2026_phy2a.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/mock/dar_es_salaam/2026/F4_dsm_mock_2026_phy2b.pdf" },
            { "title": "Physics 2C (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/mock/dar_es_salaam/2026/F4_dsm_mock_2026_phy2c.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phys1&Marking_scheme_GEPAM_hub.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phy2A&Marking_scheme_GEPAM_hub.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phy2B&Marking_scheme_GEPAM_hub.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/physics/mock/dar_es_salaam/2024/F4_dsm_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2023, "file": "papers/form4/physics/mock/dar_es_salaam/2023/F4_dsm_mock_2023_phy1.pdf" },
            
            // DODOMA (MOCK YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/physics/F4_dom_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2025, "file": "papers/form4/physics/F4_dom_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2024, "file": "papers/form4/physics/F4_dom_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2023, "file": "papers/form4/physics/F4_dom_mock_2023_phy1.pdf" },
            
            // ARUSHA (MOCK YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2026, "file": "papers/form4/physics/F4_arusha_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2025, "file": "papers/form4/physics/F4_arusha_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2024, "file": "papers/form4/physics/F4_arusha_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2023, "file": "papers/form4/physics/F4_arusha_mock_2023_phy1.pdf" },

            // MBEYA (MOCK YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/form4/physics/F4_mbeya_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2025, "file": "papers/form4/physics/F4_mbeya_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2024, "file": "papers/form4/physics/F4_mbeya_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2023, "file": "papers/form4/physics/F4_mbeya_mock_2023_phy1.pdf" },
          
            // KAGERA (MOCK YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2026, "file": "papers/form4/physics/F4_kag_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2025, "file": "papers/form4/physics/F4_kag_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2024, "file": "papers/form4/physics/F4_kag_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2023, "file": "papers/form4/physics/F4_kag_mock_2023_phy1.pdf" },
          
            // SHINYANGA (MOCK YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2026, "file": "papers/form4/physics/mock/shinyanga/2026/F4_shy_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2025, "file": "papers/form4/physics/mock/shinyanga/2025/F4_shy_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2024, "file": "papers/form4/physics/mock/shinyanga/2024/F4_shy_mock_2024_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "shinyanga", "year": 2024, "file": "papers/form4/physics/mock/shinyanga/2024/F4_shy_mock_2024_phy2A&Marking_scheme_GEPAM_hub.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "shinyanga", "year": 2024, "file": "papers/form4/physics/mock/shinyanga/2024/F4_shy_mock_2024_phy2B&Marking_scheme_GEPAM_hub.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2023, "file": "papers/form4/physics/mock/shinyanga/2023/F4_shy_mock_2023_phy1.pdf" },
            
            // DAR ES SALAAM (JOINT YENYE FAILI NYINGI)
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/joint/dar_es_salaam/2026/F4_dsm_joint_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/joint/dar_es_salaam/2026/F4_dsm_joint_2026_phy2a.pdf" },
            { "title": "Physics 2B (Practical)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/joint/dar_es_salaam/2026/F4_dsm_joint_2026_phy2b.pdf" },
            { "title": "Physics 2C (Practical)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/joint/dar_es_salaam/2026/F4_dsm_joint_2026_phy2c.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/joint/dar_es_salaam/2025/F4_dsm_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/physics/joint/dar_es_salaam/2024/F4_dsm_joint_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2023, "file": "papers/form4/physics/joint/dar_es_salaam/2023/F4_dsm_joint_2023_phy1.pdf" },

            // DODOMA (JOINT YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2026, "file": "papers/form4/physics/F4_dom_joint_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2025, "file": "papers/form4/physics/F4_dom_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2024, "file": "papers/form4/physics/F4_dom_joint_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2023, "file": "papers/form4/physics/F4_dom_joint_2023_phy1.pdf" },

            // ARUSHA (JOINT YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "arusha", "year": 2026, "file": "papers/form4/physics/F4_arusha_joint_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "arusha", "year": 2025, "file": "papers/form4/physics/F4_arusha_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "arusha", "year": 2024, "file": "papers/form4/physics/F4_arusha_joint_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "arusha", "year": 2023, "file": "papers/form4/physics/F4_arusha_joint_2023_phy1.pdf" },

            // MBEYA (JOINT YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2026, "file": "papers/form4/physics/F4_mbeya_joint_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2025, "file": "papers/form4/physics/F4_mbeya_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2024, "file": "papers/form4/physics/F4_mbeya_joint_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2023, "file": "papers/form4/physics/F4_mbeya_joint_2023_phy1.pdf" },
          
            // KAGERA (JOINT YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "kagera", "year": 2026, "file": "papers/form4/physics/F4_kag_joint_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "kagera", "year": 2025, "file": "papers/form4/physics/F4_kag_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "kagera", "year": 2024, "file": "papers/form4/physics/F4_kag_joint_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "kagera", "year": 2023, "file": "papers/form4/physics/F4_kag_joint_2023_phy1.pdf" },
          
            // SHINYANGA (JOINT YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2026, "file": "papers/form4/physics/F4_shy_joint_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2025, "file": "papers/form4/physics/F4_shy_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2024, "file": "papers/form4/physics/F4_shy_joint_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2023, "file": "papers/form4/physics/F4_shy_joint_2023_phy1.pdf" },
                
            // DAR ES SALAAM (PRE NECTA YENYE FAILI NYINGI)
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/pre_necta/dar_es_salaam/2026/F4_dsm_prenecta_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/pre_necta/dar_es_salaam/2026/F4_dsm_prenecta_2026_phy2a.pdf" },
            { "title": "Physics 2B (Practical)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/pre_necta/dar_es_salaam/2026/F4_dsm_prenecta_2026_phy2b.pdf" },
            { "title": "Physics 2C (Practical)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/pre_necta/dar_es_salaam/2026/F4_dsm_prenecta_2026_phy2c.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/pre_necta/dar_es_salaam/2025/F4_dsm_prenecta2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/physics/pre_necta/dar_es_salaam/2024/F4_dsm_prenecta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2023, "file": "papers/form4/physics/pre_necta/dar_es_salaam/2023/F4_dsm_prenecta_2023_phy1.pdf" },

            // DODOMA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2026, "file": "papers/form4/physics/F4_dom_prenecta_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2025, "file": "papers/form4/physics/F4_dom_prenecta_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2024, "file": "papers/form4/physics/F4_dom_prenecta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2023, "file": "papers/form4/physics/F4_dom_prenecta_2023_phy1.pdf" },

            // ARUSHA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2026, "file": "papers/form4/physics/F4_arusha_prenecta_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2025, "file": "papers/form4/physics/F4_arusha_prenecta_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2024, "file": "papers/form4/physics/F4_arusha_prenecta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2023, "file": "papers/form4/physics/F4_arusha_prenecta_2023_phy1.pdf" },

            // MBEYA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2026, "file": "papers/form4/physics/F4_mbeya_prenecta_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2025, "file": "papers/form4/physics/F4_mbeya_prenecta_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2024, "file": "papers/form4/physics/F4_mbeya_prenecta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2023, "file": "papers/form4/physics/F4_mbeya_prenecta_2023_phy1.pdf" },
          
            // KAGERA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2026, "file": "papers/form4/physics/F4_kag_prenecta_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2025, "file": "papers/form4/physics/F4_kag_prenecta_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2024, "file": "papers/form4/physics/F4_kag_prenecta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2023, "file": "papers/form4/physics/F4_kag_prenecta_2023_phy1.pdf" },
          
            // SHINYANGA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2026, "file": "papers/form4/physics/F4_shy_prenecta_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2025, "file": "papers/form4/physics/F4_shy_prenecta_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2024, "file": "papers/form4/physics/F4_shy_prenecta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2023, "file": "papers/form4/physics/F4_shy_prenecta_2023_phy1.pdf" },

            { "title": "Physics 1 (Theory)", "type": "necta", "region": "necta", "year": 2026, "file": "papers/form4/physics/necta/2026/F4_necta_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "necta", "region": "necta", "year": 2026, "file": "papers/form4/physics/necta/2026/F4_necta_2026_phy2a.pdf" },
            { "title": "Physics 2B (Practical)", "type": "necta", "region": "necta", "year": 2026, "file": "papers/form4/physics/necta/2026/F4_necta_2026_phy2b.pdf" },
            { "title": "Physics 2C (Practical)", "type": "necta", "region": "necta", "year": 2026, "file": "papers/form4/physics/necta/2026/F4_necta_2026_phy2c.pdf" },
            { "title": "Physics 1 (Theory)", "type": "necta", "region": "necta", "year": 2025, "file": "papers/form4/physics/necta/2025/F4_necta_2025_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "necta", "region": "necta", "year": 2025, "file": "papers/form4/physics/necta/2025/F4_necta_2025_phy2a.pdf" },
            { "title": "Physics 1 (Theory)", "type": "necta", "region": "necta", "year": 2024, "file": "papers/form4/physics/necta/2024/F4_necta_2024_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "necta", "region": "necta", "year": 2024, "file": "papers/form4/physics/necta/2024/F4_necta_2024_phy2a.pdf" },
            { "title": "Physics 1 (Theory)", "type": "necta", "region": "necta", "year": 2023, "file": "papers/form4/physics/necta/2023/F4_necta_2023_phy1.pdf" }
    ],
        
        chemistry: [
            // DAR ES SALAAM (MOCK YENYE FAILI NYINGI)
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/mock/dar_es_salaam/2026/F4_dsm_mock_2026_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/mock/dar_es_salaam/2026/F4_dsm_mock_2026_chem2a.pdf" },
            { "title": "Chemistry 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/mock/dar_es_salaam/2026/F4_dsm_mock_2026_chem2b.pdf" },
            { "title": "Chemistry 2C (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/mock/dar_es_salaam/2026/F4_dsm_mock_2026_chem2c.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/chemistry/mock/dar_es_salaam/2025/F4_dsm_mock_2025_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_chem2A&Marking_scheme_GEPAM_hub.pdf" },
            { "title": "Chemistry 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_chem2B&Marking_scheme_GEPAM_hub.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/chemistry/mock/dar_es_salaam/2024/F4_dsm_mock_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2023, "file": "papers/form4/chemistry/mock/dar_es_salaam/2023/F4_dsm_mock_2023_chem1.pdf" },

            // DODOMA (MOCK YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/chemistry/mock/dodoma/2026/F4_dom_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2025, "file": "papers/form4/chemistry/mock/dodoma/2025/F4_dom_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2024, "file": "papers/form4/chemistry/mock/dodoma/2024/F4_dom_mock_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2023, "file": "papers/form4/chemistry/mock/dodoma/2023/F4_dom_mock_2023_chem1.pdf" },

            // ARUSHA (MOCK YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "arusha", "year": 2026, "file": "papers/form4/chemistry/mock/arusha/2026/F4_arusha_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "arusha", "year": 2025, "file": "papers/form4/chemistry/mock/arusha/2025/F4_arusha_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "arusha", "year": 2024, "file": "papers/form4/chemistry/mock/arusha/2024/F4_arusha_mock_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "arusha", "year": 2023, "file": "papers/form4/chemistry/mock/arusha/2023/F4_arusha_mock_2023_chem1.pdf" },

            // MBEYA (MOCK YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/form4/chemistry/mock/mbeya/2026/F4_mbeya_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2025, "file": "papers/form4/chemistry/mock/mbeya/2025/F4_mbeya_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2024, "file": "papers/form4/chemistry/mock/mbeya/2024/F4_mbeya_mock_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2023, "file": "papers/form4/chemistry/mock/mbeya/2023/F4_mbeya_mock_2023_chem1.pdf" },
          
            // KAGERA (MOCK YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "kagera", "year": 2026, "file": "papers/form4/chemistry/mock/kagera/2026/F4_kag_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "kagera", "year": 2025, "file": "papers/form4/chemistry/mock/kagera/2025/F4_kag_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "kagera", "year": 2024, "file": "papers/form4/chemistry/mock/kagera/2024/F4_kag_mock_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "kagera", "year": 2023, "file": "papers/form4/chemistry/mock/kagera/2023/F4_kag_mock_2023_chem1.pdf" },
          
            // SHINYANGA (MOCK YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2026, "file": "papers/form4/chemistry/mock/shinyanga/2026/F4_shy_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2025, "file": "papers/form4/chemistry/mock/shinyanga/2025/F4_shy_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2024, "file": "papers/form4/chemistry/mock/shinyanga/2024/F4_shy_mock_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2023, "file": "papers/form4/chemistry/mock/shinyanga/2023/F4_shy_mock_2023_chem1.pdf" },

            // DAR ES SALAAM (JOINT YENYE FAILI NYINGI)
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/joint/dar_es_salaam/2026/F4_dsm_joint_2026_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/joint/dar_es_salaam/2026/F4_dsm_joint_2026_chem2a.pdf" },
            { "title": "Chemistry 2B (Practical)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/joint/dar_es_salaam/2026/F4_dsm_joint_2026_chem2b.pdf" },
            { "title": "Chemistry 2C (Practical)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/joint/dar_es_salaam/2026/F4_dsm_joint_2026_chem2c.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/chemistry/joint/dar_es_salaam/2025/F4_dsm_joint_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/chemistry/joint/dar_es_salaam/2024/F4_dsm_joint_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2023, "file": "papers/form4/chemistry/joint/dar_es_salaam/2023/F4_dsm_joint_2023_chem1.pdf" },

            // DODOMA (JOINT YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2026, "file": "papers/form4/chemistry/joint/dodoma/2026/F4_dom_joint_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2025, "file": "papers/form4/chemistry/joint/dodoma/2025/F4_dom_joint_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2024, "file": "papers/form4/chemistry/joint/dodoma/2024/F4_dom_joint_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2023, "file": "papers/form4/chemistry/joint/dodoma/2023/F4_dom_joint_2023_chem1.pdf" },

            // ARUSHA (JOINT YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "arusha", "year": 2026, "file": "papers/form4/chemistry/joint/arusha/2026/F4_arusha_joint_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "arusha", "year": 2025, "file": "papers/form4/chemistry/joint/arusha/2025/F4_arusha_joint_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "arusha", "year": 2024, "file": "papers/form4/chemistry/joint/arusha/2024/F4_arusha_joint_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "arusha", "year": 2023, "file": "papers/form4/chemistry/joint/arusha/2023/F4_arusha_joint_2023_chem1.pdf" },

            // MBEYA (JOINT YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2026, "file": "papers/form4/chemistry/joint/mbeya/2026/F4_mbeya_joint_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2025, "file": "papers/form4/chemistry/joint/mbeya/2025/F4_mbeya_joint_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2024, "file": "papers/form4/chemistry/joint/mbeya/2024/F4_mbeya_joint_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2023, "file": "papers/form4/chemistry/joint/mbeya/2023/F4_mbeya_joint_2023_chem1.pdf" },
          
            // KAGERA (JOINT YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "kagera", "year": 2026, "file": "papers/form4/chemistry/joint/kagera/2026/F4_kag_joint_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "kagera", "year": 2025, "file": "papers/form4/chemistry/joint/kagera/2025/F4_kag_joint_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "kagera", "year": 2024, "file": "papers/form4/chemistry/joint/kagera/2024/F4_kag_joint_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "kagera", "year": 2023, "file": "papers/form4/chemistry/joint/kagera/2023/F4_kag_joint_2023_chem1.pdf" },
          
            // SHINYANGA (JOINT YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2026, "file": "papers/form4/chemistry/joint/shinyanga/2026/F4_shy_joint_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2025, "file": "papers/form4/chemistry/joint/shinyanga/2025/F4_shy_joint_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2024, "file": "papers/form4/chemistry/joint/shinyanga/2024/F4_shy_joint_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2023, "file": "papers/form4/chemistry/joint/shinyanga/2023/F4_shy_joint_2023_chem1.pdf" },
            
            // DAR ES SALAAM (PRE NECTA YENYE FAILI NYINGI)
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/pre_necta/dar_es_salaam/2026/F4_dsm_prenecta_2026_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/pre_necta/dar_es_salaam/2026/F4_dsm_prenecta_2026_chem2a.pdf" },
            { "title": "Chemistry 2B (Practical)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/pre_necta/dar_es_salaam/2026/F4_dsm_prenecta_2026_chem2b.pdf" },
            { "title": "Chemistry 2C (Practical)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/pre_necta/dar_es_salaam/2026/F4_dsm_prenecta_2026_chem2c.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/chemistry/pre_necta/dar_es_salaam/2025/F4_dsm_prenecta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/chemistry/pre_necta/dar_es_salaam/2024/F4_dsm_prenecta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2023, "file": "papers/form4/chemistry/pre_necta/dar_es_salaam/2023/F4_dsm_prenecta_2023_chem1.pdf" },

            // DODOMA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2026, "file": "papers/form4/chemistry/F4_dom_prenecta_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2025, "file": "papers/form4/chemistry/F4_dom_prenecta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2024, "file": "papers/form4/chemistry/F4_dom_prenecta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2023, "file": "papers/form4/chemistry/F4_dom_prenecta_2023_chem1.pdf" },

            // ARUSHA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2026, "file": "papers/form4/chemistry/F4_arusha_prenecta_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2025, "file": "papers/form4/chemistry/F4_arusha_prenecta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2024, "file": "papers/form4/chemistry/F4_arusha_prenecta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2023, "file": "papers/form4/chemistry/F4_arusha_prenecta_2023_chem1.pdf" },

            // MBEYA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2026, "file": "papers/form4/chemistry/F4_mbeya_prenecta_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2025, "file": "papers/form4/chemistry/F4_mbeya_prenecta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2024, "file": "papers/form4/chemistry/F4_mbeya_prenecta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2023, "file": "papers/form4/chemistry/F4_mbeya_prenecta_2023_chem1.pdf" },
          
            // KAGERA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2026, "file": "papers/form4/chemistry/F4_kag_prenecta_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2025, "file": "papers/form4/chemistry/F4_kag_prenecta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2024, "file": "papers/form4/chemistry/F4_kag_prenecta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2023, "file": "papers/form4/chemistry/F4_kag_prenecta_2023_chem1.pdf" },
          
            // SHINYANGA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2026, "file": "papers/form4/chemistry/F4_shy_prenecta_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2025, "file": "papers/form4/chemistry/F4_shy_prenecta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2024, "file": "papers/form4/chemistry/F4_shy_prenecta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2023, "file": "papers/form4/chemistry/F4_shy_prenecta_2023_chem1.pdf" },

            { "title": "Chemistry 1 (Theory)", "type": "necta", "region": "necta", "year": 2026, "file": "papers/form4/chemistry/necta/2026/F4_necta_2026_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "necta", "region": "necta", "year": 2026, "file": "papers/form4/chemistry/necta/2026/F4_necta_2026_chem2a.pdf" },
            { "title": "Chemistry 2B (Practical)", "type": "necta", "region": "necta", "year": 2026, "file": "papers/form4/chemistry/necta/2026/F4_necta_2026_chem2b.pdf" },
            { "title": "Chemistry 2C (Practical)", "type": "necta", "region": "necta", "year": 2026, "file": "papers/form4/chemistry/necta/2026/F4_necta_2026_chem2c.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "necta", "region": "necta", "year": 2025, "file": "papers/form4/chemistry/necta/2025/F4_necta_2025_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "necta", "region": "necta", "year": 2025, "file": "papers/form4/chemistry/necta/2025/F4_necta_2025_chem2a.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "necta", "region": "necta", "year": 2024, "file": "papers/form4/chemistry/necta/2024/F4_necta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "necta", "region": "necta", "year": 2023, "file": "papers/form4/chemistry/necta/2023/F4_necta_2023_chem1.pdf" }
      ]
  },
  
  // ==================== FORM 5 ====================
  "form5": {
    "physics": [
      { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "file": "papers/form5/physics/dsm_2026.pdf" },
      { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2025, "file": "papers/form5/physics/dsm_2025.pdf" },
      { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2024, "file": "papers/form5/physics/dsm_2024.pdf" },
      { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2023, "file": "papers/form5/physics/dsm_2023.pdf" },
      { "title": "Physics Midterm Exam", "type": "midterm", "region": "dodoma", "year": 2026, "file": "papers/form5/physics/dom_2026.pdf" },
      { "title": "Physics Terminal Exam", "type": "terminal", "region": "arusha", "year": 2025, "file": "papers/form5/physics/aru_2025.pdf" },
      { "title": "Physics Joint Exam", "type": "joint", "region": "mbeya", "year": 2026, "file": "papers/form5/physics/mby_2026.pdf" },
      { "title": "Physics Annual Exam", "type": "annual", "region": "kagera", "year": 2025, "file": "papers/form5/physics/kag_2025.pdf" },
      { "title": "Physics Midterm Exam", "type": "midterm", "region": "shinyanga", "year": 2026, "file": "papers/form5/physics/shy_2026.pdf" }
    ]
    ,"chemistry": [
      { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2026, "file": "papers/form5/chemistry/dsm_2026.pdf" },
      { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2025, "file": "papers/form5/chemistry/dsm_2025.pdf" },
      { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2024, "file": "papers/form5/chemistry/dsm_2024.pdf" },
      { "title": "Chemistry Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2023, "file": "papers/form5/chemistry/dsm_2023.pdf" }
    ]
},
          
  // ==================== FORM 6 ====================
  "form6": {
        physics: [
            // DAR ES SALAAM (MOCK YENYE FAILI NYINGI)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/mock/dar_es_salaam/2026/F6_dsm_mock_2026_phy1.pdf" },
            { "title": "Physics 2 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/mock/dar_es_salaam/2026/F6_dsm_mock_2026_phy2.pdf" },
            { "title": "Physics 3A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/mock/dar_es_salaam/2026/F6_dsm_mock_2026_phy3a.pdf" },
            { "title": "Physics 3B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/mock/dar_es_salaam/2026/F6_dsm_mock_2026_phy3b.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form6/physics/mock/dar_es_salaam/2025/F6_dsm_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2024, "file": "papers/form6/physics/mock/dar_es_salaam/2024/F6_dsm_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2023, "file": "papers/form6/physics/mock/dar_es_salaam/2023/F6_dsm_mock_2023_phy1.pdf" },
            
            // DODOMA (MOCK YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form6/physics/F6_dom_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2025, "file": "papers/form6/physics/F6_dom_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2024, "file": "papers/form6/physics/F6_dom_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2023, "file": "papers/form6/physics/F6_dom_mock_2023_phy1.pdf" },
            
            // ARUSHA (MOCK YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2026, "file": "papers/form6/physics/F6_aru_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2025, "file": "papers/form6/physics/F6_aru_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2024, "file": "papers/form6/physics/F6_aru_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2023, "file": "papers/form6/physics/F6_aru_mock_2023_phy1.pdf" },

            // MBEYA (MOCK YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/form6/physics/F6_mby_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2025, "file": "papers/form6/physics/F6_mby_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2024, "file": "papers/form6/physics/F6_mby_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2023, "file": "papers/form6/physics/F6_mby_mock_2023_phy1.pdf" },
          
            // KAGERA (MOCK YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2026, "file": "papers/form6/physics/F6_kag_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2025, "file": "papers/form6/physics/F6_kag_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2024, "file": "papers/form6/physics/F6_kag_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2023, "file": "papers/form6/physics/F6_kag_mock_2023_phy1.pdf" },
          
            // SHINYANGA (MOCK YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2026, "file": "papers/form6/physics/mock/shinyanga/2026/F6_shy_mock_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2025, "file": "papers/form6/physics/mock/shinyanga/2025/F6_shy_mock_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2024, "file": "papers/form6/physics/mock/shinyanga/2024/F6_shy_mock_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2023, "file": "papers/form6/physics/mock/shinyanga/2023/F6_shy_mock_2023_phy1.pdf" },
            
            // DAR ES SALAAM (JOINT YENYE FAILI NYINGI)
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/joint/dar_es_salaam/2026/F6_dsm_joint_2026_phy1.pdf" },
            { "title": "Physics 2 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/joint/dar_es_salaam/2026/F6_dsm_joint_2026_phy2.pdf" },
            { "title": "Physics 3A (Practical)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/joint/dar_es_salaam/2026/F6_dsm_joint_2026_phy3a.pdf" },
            { "title": "Physics 3B (Practical)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/joint/dar_es_salaam/2026/F6_dsm_joint_2026_phy3b.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2025, "file": "papers/form6/physics/joint/dar_es_salaam/2025/F6_dsm_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2024, "file": "papers/form6/physics/joint/dar_es_salaam/2024/F6_dsm_joint_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2023, "file": "papers/form6/physics/joint/dar_es_salaam/2023/F6_dsm_joint_2023_phy1.pdf" },

            // DODOMA (JOINT YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2026, "file": "papers/form6/physics/F6_dom_joint_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2025, "file": "papers/form6/physics/F6_dom_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2024, "file": "papers/form6/physics/F6_dom_joint_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2023, "file": "papers/form6/physics/F6_dom_joint_2023_phy1.pdf" },

            // ARUSHA (JOINT YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "arusha", "year": 2026, "file": "papers/form6/physics/F6_aru_joint_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "arusha", "year": 2025, "file": "papers/form6/physics/F6_aru_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "arusha", "year": 2024, "file": "papers/form6/physics/F6_aru_joint_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "arusha", "year": 2023, "file": "papers/form6/physics/F6_aru_joint_2023_phy1.pdf" },

            // MBEYA (JOINT YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2026, "file": "papers/form6/physics/F6_mby_joint_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2025, "file": "papers/form6/physics/F6_mby_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2024, "file": "papers/form6/physics/F6_mby_joint_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2023, "file": "papers/form6/physics/F6_mby_joint_2023_phy1.pdf" },
          
            // KAGERA (JOINT YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "kagera", "year": 2026, "file": "papers/form6/physics/F6_kag_joint_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "kagera", "year": 2025, "file": "papers/form6/physics/F6_kag_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "kagera", "year": 2024, "file": "papers/form6/physics/F6_kag_joint_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "kagera", "year": 2023, "file": "papers/form6/physics/F6_kag_joint_2023_phy1.pdf" },
          
            // SHINYANGA (JOINT YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2026, "file": "papers/form6/physics/F6_shy_joint_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2025, "file": "papers/form6/physics/F6_shy_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2024, "file": "papers/form6/physics/F6_shy_joint_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2023, "file": "papers/form6/physics/F6_shy_joint_2023_phy1.pdf" },
                
            // DAR ES SALAAM (PRE NECTA YENYE FAILI NYINGI)
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_phy1.pdf" },
            { "title": "Physics 2 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_phy2.pdf" },
            { "title": "Physics 3A (Practical)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_phy3a.pdf" },
            { "title": "Physics 3B (Practical)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_phy3b.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2025, "file": "papers/form6/physics/pre_necta/dar_es_salaam/2025/F6_dsm_prenecta2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2024, "file": "papers/form6/physics/pre_necta/dar_es_salaam/2024/F6_dsm_prenecta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2023, "file": "papers/form6/physics/pre_necta/dar_es_salaam/2023/F6_dsm_prenecta_2023_phy1.pdf" },

            // DODOMA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2026, "file": "papers/form6/physics/F6_dom_prenecta_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2025, "file": "papers/form6/physics/F6_dom_prenecta_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2024, "file": "papers/form6/physics/F6_dom_prenecta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2023, "file": "papers/form6/physics/F6_dom_prenecta_2023_phy1.pdf" },

            // ARUSHA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2026, "file": "papers/form6/physics/F6_aru_prenecta_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2025, "file": "papers/form6/physics/F6_aru_prenecta_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2024, "file": "papers/form6/physics/F6_aru_prenecta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2023, "file": "papers/form6/physics/F6_aru_prenecta_2023_phy1.pdf" },

            // MBEYA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2026, "file": "papers/form6/physics/F6_mby_prenecta_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2025, "file": "papers/form6/physics/F6_mby_prenecta_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2024, "file": "papers/form6/physics/F6_mby_prenecta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2023, "file": "papers/form6/physics/F6_mby_prenecta_2023_phy1.pdf" },
          
            // KAGERA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2026, "file": "papers/form6/physics/pre_necta/kagera/F6_kag_prenecta_2026_phy1.pdf" },
            { "title": "Physics 2 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2026, "file": "papers/form6/physics/pre_necta/kagera/2026/F6_kag_prenecta_2026_phy2.pdf" },
            { "title": "Physics 3A (Practical)", "type": "pre_necta", "region": "kagera", "year": 2026, "file": "papers/form6/physics/pre_necta/kagera/2026/F6_kag_prenecta_2026_phy3A.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2025, "file": "papers/form6/physics/pre_necta/kagera/F6_kag_prenecta_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2024, "file": "papers/form6/physics/pre_necta/kagera/F6_kag_prenecta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2023, "file": "papers/form6/physics/pre_necta/kagera/F6_kag_prenecta_2023_phy1.pdf" },
          
            // SHINYANGA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2026, "file": "papers/form6/physics/F6_shy_prenecta_2026_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2025, "file": "papers/form6/physics/F6_shy_prenecta_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2024, "file": "papers/form6/physics/F6_shy_prenecta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2023, "file": "papers/form6/physics/F6_shy_prenecta_2023_phy1.pdf" },

            { "title": "Physics 1 (Theory)", "type": "acsee", "region": "necta", "year": 2026, "file": "papers/form6/physics/necta/2026/F6_necta_2026_phy1.pdf" },
            { "title": "Physics 2 (Theory)", "type": "acsee", "region": "necta", "year": 2026, "file": "papers/form6/physics/necta/2026/F6_necta_2026_phy2.pdf" },
            { "title": "Physics 3A (Practical)", "type": "acsee", "region": "necta", "year": 2026, "file": "papers/form6/physics/necta/2026/F6_necta_2026_phy3a.pdf" },
            { "title": "Physics 3B (Practical)", "type": "acsee", "region": "necta", "year": 2026, "file": "papers/form6/physics/necta/2026/F6_necta_2026_phy3b.pdf" },
            { "title": "Physics 1 (Theory)", "type": "acsee", "region": "necta", "year": 2025, "file": "papers/form6/physics/necta/2025/F6_necta_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "acsee", "region": "necta", "year": 2024, "file": "papers/form6/physics/necta/2024/F6_necta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "acsee", "region": "necta", "year": 2023, "file": "papers/form6/physics/necta/2023/F6_necta_2023_phy1.pdf" }
    ],
        
        chemistry: [
            // DAR ES SALAAM (MOCK YENYE FAILI NYINGI)
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/mock/dar_es_salaam/2026/F6_dsm_mock_2026_chem1.pdf" },
            { "title": "Chemistry 2 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/mock/dar_es_salaam/2026/F6_dsm_mock_2026_chem2.pdf" },
            { "title": "Chemistry 3A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/mock/dar_es_salaam/2026/F6_dsm_mock_2026_chem3a.pdf" },
            { "title": "Chemistry 3B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/mock/dar_es_salaam/2026/F6_dsm_mock_2026_chem3b.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2025, "file": "papers/form6/chemistry/mock/dar_es_salaam/2025/F6_dsm_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2024, "file": "papers/form6/chemistry/mock/dar_es_salaam/2024/F6_dsm_mock_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2023, "file": "papers/form6/chemistry/mock/dar_es_salaam/2023/F6_dsm_mock_2023_chem1.pdf" },

            // DODOMA (MOCK YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form6/chemistry/mock/dodoma/2026/F6_dom_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2025, "file": "papers/form6/chemistry/mock/dodoma/2025/F6_dom_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2024, "file": "papers/form6/chemistry/mock/dodoma/2024/F6_dom_mock_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2023, "file": "papers/form6/chemistry/mock/dodoma/2023/F6_dom_mock_2023_chem1.pdf" },

            // ARUSHA (MOCK YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "arusha", "year": 2026, "file": "papers/form6/chemistry/mock/arusha/2026/F6_aru_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "arusha", "year": 2025, "file": "papers/form6/chemistry/mock/arusha/2025/F6_aru_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "arusha", "year": 2024, "file": "papers/form6/chemistry/mock/arusha/2024/F6_aru_mock_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "arusha", "year": 2023, "file": "papers/form6/chemistry/mock/arusha/2023/F6_aru_mock_2023_chem1.pdf" },

            // MBEYA (MOCK YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2026, "file": "papers/form6/chemistry/mock/mbeya/2026/F6_mby_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2025, "file": "papers/form6/chemistry/mock/mbeya/2025/F6_mby_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2024, "file": "papers/form6/chemistry/mock/mbeya/2024/F6_mby_mock_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2023, "file": "papers/form6/chemistry/mock/mbeya/2023/F6_mby_mock_2023_chem1.pdf" },
          
            // KAGERA (MOCK YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "kagera", "year": 2026, "file": "papers/form6/chemistry/mock/kagera/2026/F6_kag_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "kagera", "year": 2025, "file": "papers/form6/chemistry/mock/kagera/2025/F6_kag_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "kagera", "year": 2024, "file": "papers/form6/chemistry/mock/kagera/2024/F6_kag_mock_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "kagera", "year": 2023, "file": "papers/form6/chemistry/mock/kagera/2023/F6_kag_mock_2023_chem1.pdf" },
          
            // SHINYANGA (MOCK YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2026, "file": "papers/form6/chemistry/mock/shinyanga/2026/F6_shy_mock_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2025, "file": "papers/form6/chemistry/mock/shinyanga/2025/F6_shy_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2024, "file": "papers/form6/chemistry/mock/shinyanga/2024/F6_shy_mock_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2023, "file": "papers/form6/chemistry/mock/shinyanga/2023/F6_shy_mock_2023_chem1.pdf" },

            // DAR ES SALAAM (JOINT YENYE FAILI NYINGI)
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/joint/dar_es_salaam/2026/F6_dsm_joint_2026_chem1.pdf" },
            { "title": "Chemistry 2 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/joint/dar_es_salaam/2026/F6_dsm_joint_2026_chem2.pdf" },
            { "title": "Chemistry 3A (Practical)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/joint/dar_es_salaam/2026/F6_dsm_joint_2026_chem3a.pdf" },
            { "title": "Chemistry 3B (Practical)", "type": "joint", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/joint/dar_es_salaam/2026/F6_dsm_joint_2026_chem3b.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2025, "file": "papers/form6/chemistry/joint/dar_es_salaam/2025/F6_dsm_joint_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2024, "file": "papers/form6/chemistry/joint/dar_es_salaam/2024/F6_dsm_joint_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dar_es_salaam", "year": 2023, "file": "papers/form6/chemistry/joint/dar_es_salaam/2023/F6_dsm_joint_2023_chem1.pdf" },

            // DODOMA (JOINT YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2026, "file": "papers/form6/chemistry/joint/dodoma/2026/F6_dom_joint_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2025, "file": "papers/form6/chemistry/joint/dodoma/2025/F6_dom_joint_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2024, "file": "papers/form6/chemistry/joint/dodoma/2024/F6_dom_joint_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2023, "file": "papers/form6/chemistry/joint/dodoma/2023/F6_dom_joint_2023_chem1.pdf" },

            // ARUSHA (JOINT YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "arusha", "year": 2026, "file": "papers/form6/chemistry/joint/arusha/2026/F6_aru_joint_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "arusha", "year": 2025, "file": "papers/form6/chemistry/joint/arusha/2025/F6_aru_joint_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "arusha", "year": 2024, "file": "papers/form6/chemistry/joint/arusha/2024/F6_aru_joint_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "arusha", "year": 2023, "file": "papers/form6/chemistry/joint/arusha/2023/F6_aru_joint_2023_chem1.pdf" },

            // MBEYA (JOINT YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2026, "file": "papers/form6/chemistry/joint/mbeya/2026/F6_mby_joint_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2025, "file": "papers/form6/chemistry/joint/mbeya/2025/F6_mby_joint_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2024, "file": "papers/form6/chemistry/joint/mbeya/2024/F6_mby_joint_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "mbeya", "year": 2023, "file": "papers/form6/chemistry/joint/mbeya/2023/F6_mby_joint_2023_chem1.pdf" },
          
            // KAGERA (JOINT YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "kagera", "year": 2026, "file": "papers/form6/chemistry/joint/kagera/2026/F6_kag_joint_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "kagera", "year": 2025, "file": "papers/form6/chemistry/joint/kagera/2025/F6_kag_joint_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "kagera", "year": 2024, "file": "papers/form6/chemistry/joint/kagera/2024/F6_kag_joint_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "kagera", "year": 2023, "file": "papers/form6/chemistry/joint/kagera/2023/F6_kag_joint_2023_chem1.pdf" },
          
            // SHINYANGA (JOINT YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2026, "file": "papers/form6/chemistry/joint/shinyanga/2026/F6_shy_joint_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2025, "file": "papers/form6/chemistry/joint/shinyanga/2025/F6_shy_joint_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2024, "file": "papers/form6/chemistry/joint/shinyanga/2024/F6_shy_joint_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "shinyanga", "year": 2023, "file": "papers/form6/chemistry/joint/shinyanga/2023/F6_shy_joint_2023_chem1.pdf" },
            
            // DAR ES SALAAM (PRE NECTA YENYE FAILI NYINGI)
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_chem1.pdf" },
            { "title": "Chemistry 2 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_chem2.pdf" },
            { "title": "Chemistry 3A (Practical)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_chem3a.pdf" },
            { "title": "Chemistry 3B (Practical)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_chem3b.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2025, "file": "papers/form6/chemistry/pre_necta/dar_es_salaam/2025/F6_dsm_prenecta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2024, "file": "papers/form6/chemistry/pre_necta/dar_es_salaam/2024/F6_dsm_prenecta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2023, "file": "papers/form6/chemistry/pre_necta/dar_es_salaam/2023/F6_dsm_prenecta_2023_chem1.pdf" },

            // DODOMA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2026, "file": "papers/form6/chemistry/F6_dom_prenecta_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2025, "file": "papers/form6/chemistry/F6_dom_prenecta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2024, "file": "papers/form6/chemistry/F6_dom_prenecta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dodoma", "year": 2023, "file": "papers/form6/chemistry/F6_dom_prenecta_2023_chem1.pdf" },

            // ARUSHA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2026, "file": "papers/form6/chemistry/F6_aru_prenecta_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2025, "file": "papers/form6/chemistry/F6_aru_prenecta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2024, "file": "papers/form6/chemistry/F6_aru_prenecta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2023, "file": "papers/form6/chemistry/F6_aru_prenecta_2023_chem1.pdf" },

            // MBEYA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2026, "file": "papers/form6/chemistry/F6_mby_prenecta_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2025, "file": "papers/form6/chemistry/F6_mby_prenecta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2024, "file": "papers/form6/chemistry/F6_mby_prenecta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2023, "file": "papers/form6/chemistry/F6_mby_prenecta_2023_chem1.pdf" },
          
            // KAGERA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2026, "file": "papers/form6/chemistry/F6_kag_prenecta_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2025, "file": "papers/form6/chemistry/F6_kag_prenecta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2024, "file": "papers/form6/chemistry/F6_kag_prenecta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "kagera", "year": 2023, "file": "papers/form6/chemistry/F6_kag_prenecta_2023_chem1.pdf" },
          
            // SHINYANGA (PRE NECTA YENYE MIAKA YOTE)
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2026, "file": "papers/form6/chemistry/F6_shy_prenecta_2026_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2025, "file": "papers/form6/chemistry/F6_shy_prenecta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2024, "file": "papers/form6/chemistry/F6_shy_prenecta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "shinyanga", "year": 2023, "file": "papers/form6/chemistry/F6_shy_prenecta_2023_chem1.pdf" },

            { "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "necta", "year": 2026, "file": "papers/form6/chemistry/necta/2026/F6_necta_2026_chem1.pdf" },
            { "title": "Chemistry 2 (Theory)", "type": "acsee", "region": "necta", "year": 2026, "file": "papers/form6/chemistry/necta/2026/F6_necta_2026_chem2.pdf" },
            { "title": "Chemistry 3A (Practical)", "type": "acsee", "region": "necta", "year": 2026, "file": "papers/form6/chemistry/necta/2026/F6_necta_2026_chem3a.pdf" },
            { "title": "Chemistry 3B (Practical)", "type": "acsee", "region": "necta", "year": 2026, "file": "papers/form6/chemistry/necta/2026/F6_necta_2026_chem3b.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "necta", "year": 2025, "file": "papers/form6/chemistry/necta/2025/F6_necta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "necta", "year": 2024, "file": "papers/form6/chemistry/necta/2024/F6_necta_2024_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "necta", "year": 2023, "file": "papers/form6/chemistry/necta/2023/F6_necta_2023_chem1.pdf" }
       ]
   }
 };
window.pastPaperConfig = pastPaperConfig;
window.pastPapers = pastPapers;
