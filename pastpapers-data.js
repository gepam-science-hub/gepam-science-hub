// GEPAM Science Hub - Complete Past Papers Database (Form 1 - Form 6)

const pastPapers = {
    "form1": {
        "physics": [
            { "title": "Physics Annual Exam", "type": "annual", "region": "dar_es_salaam", "year": 2025, "file": "papers/form1/physics/dsm_annual_2025_phy.pdf" },
            { "title": "Physics Midterm Exam", "type": "midterm", "region": "dodoma", "year": 2026, "file": "papers/form1/physics/dom_mid_2026_phy.pdf" }
        ],
        "chemistry": [
            { "title": "Chemistry Terminal Exam", "type": "terminal", "region": "arusha", "year": 2025, "file": "papers/form1/chemistry/aru_term_2025_chem.pdf" },
            { "title": "Chemistry Joint Exam", "type": "joint", "region": "mbeya", "year": 2024, "file": "papers/form1/chemistry/mby_joint_2024_chem.pdf" }
        ]
    },

    "form2": {
        "physics": [
            // FTNA Mikoa mbalimbali na Miaka
            { "title": "Physics FTNA National", "type": "ftna", "region": "dar_es_salaam", "year": 2025, "file": "papers/form2/physics/dsm_ftna_2025_phy.pdf" },
            { "title": "Physics FTNA Mock", "type": "ftna", "region": "kagera", "year": 2024, "file": "papers/form2/physics/kag_ftna_2024_phy.pdf" },
            { "title": "Physics Midterm Exam", "type": "midterm", "region": "shinyanga", "year": 2026, "file": "papers/form2/physics/shy_mid_2026_phy.pdf" }
        ],
        "chemistry": [
            { "title": "Chemistry FTNA National", "type": "ftna", "region": "dodoma", "year": 2025, "file": "papers/form2/chemistry/dom_ftna_2025_chem.pdf" },
            { "title": "Chemistry Annual Exam", "type": "annual", "region": "arusha", "year": 2023, "file": "papers/form2/chemistry/aru_annual_2023_chem.pdf" }
        ]
    },

    "form3": {
        "physics": [
            { "title": "Physics Joint Exam", "type": "joint", "region": "dar_es_salaam", "year": 2025, "file": "papers/form3/physics/dsm_joint_2025_phy.pdf" },
            { "title": "Physics Terminal Exam", "type": "terminal", "region": "mbeya", "year": 2026, "file": "papers/form3/physics/mby_term_2026_phy.pdf" }
        ],
        "chemistry": [
            { "title": "Chemistry Midterm Exam", "type": "midterm", "region": "dodoma", "year": 2025, "file": "papers/form3/chemistry/dom_mid_2025_chem.pdf" }
        ]
    },

    "form4": {
        "physics": [
            // DAR ES SALAAM (Mifano ya Faili nyingi kwa mwaka mmoja)
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2a.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2b.pdf" },
            { "title": "Physics 2C (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/physics/dsm_mock_2026_phy2c.pdf" },

            { "title": "Physics 1 (Theory)", "type": "necta", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/dsm_necta_2025_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "necta", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/physics/dsm_necta_2025_phy2a.pdf" },
            
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/physics/dsm_pnecta_2024_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "annual", "region": "dar_es_salaam", "year": 2023, "file": "papers/form4/physics/dsm_annual_2023_phy1.pdf" },

            // DODOMA
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/physics/dom_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/physics/dom_mock_2026_phy2a.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "dodoma", "year": 2025, "file": "papers/form4/physics/dom_joint_2025_phy1.pdf" },
            { "title": "Physics 1 (Theory)", "type": "midterm", "region": "dodoma", "year": 2024, "file": "papers/form4/physics/dom_mid_2024_phy1.pdf" },

            // ARUSHA
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2026, "file": "papers/form4/physics/aru_mock_2026_phy1.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "arusha", "year": 2026, "file": "papers/form4/physics/aru_mock_2026_phy2b.pdf" },
            { "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "arusha", "year": 2025, "file": "papers/form4/physics/aru_pnecta_2025_phy1.pdf" },

            // MBEYA
            { "title": "Physics 1 (Theory)", "type": "necta", "region": "mbeya", "year": 2025, "file": "papers/form4/physics/mby_necta_2025_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "necta", "region": "mbeya", "year": 2025, "file": "papers/form4/physics/mby_necta_2025_phy2a.pdf" },
            { "title": "Physics 1 (Theory)", "type": "terminal", "region": "mbeya", "year": 2024, "file": "papers/form4/physics/mby_term_2024_phy1.pdf" },

            // KAGERA
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "kagera", "year": 2026, "file": "papers/form4/physics/kag_mock_2026_phy1.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "kagera", "year": 2026, "file": "papers/form4/physics/kag_mock_2026_phy2a.pdf" },
            { "title": "Physics 1 (Theory)", "type": "joint", "region": "kagera", "year": 2023, "file": "papers/form4/physics/kag_joint_2023_phy1.pdf" },

            // SHINYANGA
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2025, "file": "papers/form4/physics/shy_mock_2025_phy1.pdf" },
            { "title": "Physics 2C (Practical)", "type": "mock", "region": "shinyanga", "year": 2025, "file": "papers/form4/physics/shy_mock_2025_phy2c.pdf" },
            { "title": "Physics 1 (Theory)", "type": "annual", "region": "shinyanga", "year": 2024, "file": "papers/form4/physics/shy_annual_2024_phy1.pdf" }
        ],
        "chemistry": [
            // DAR ES SALAAM
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem2a.pdf" },
            { "title": "Chemistry 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem2b.pdf" },
            { "title": "Chemistry 2C (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/form4/chemistry/dsm_mock_2026_chem2c.pdf" },
            
            { "title": "Chemistry 1 (Theory)", "type": "necta", "region": "dar_es_salaam", "year": 2025, "file": "papers/form4/chemistry/dsm_necta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "pre_necta", "region": "dar_es_salaam", "year": 2024, "file": "papers/form4/chemistry/dsm_pnecta_2024_chem1.pdf" },

            // DODOMA
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/chemistry/dom_mock_2026_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "mock", "region": "dodoma", "year": 2026, "file": "papers/form4/chemistry/dom_mock_2026_chem2a.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "midterm", "region": "dodoma", "year": 2025, "file": "papers/form4/chemistry/dom_mid_2025_chem1.pdf" },

            // ARUSHA
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "arusha", "year": 2026, "file": "papers/form4/chemistry/aru_joint_2026_chem1.pdf" },
            { "title": "Chemistry 2B (Practical)", "type": "joint", "region": "arusha", "year": 2026, "file": "papers/form4/chemistry/aru_joint_2026_chem2b.pdf" },

            // MBEYA
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "mbeya", "year": 2025, "file": "papers/form4/chemistry/mby_mock_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "terminal", "region": "mbeya", "year": 2024, "file": "papers/form4/chemistry/mby_term_2024_chem1.pdf" },

            // KAGERA
            { "title": "Chemistry 1 (Theory)", "type": "necta", "region": "kagera", "year": 2025, "file": "papers/form4/chemistry/kag_necta_2025_chem1.pdf" },
            { "title": "Chemistry 1 (Theory)", "type": "annual", "region": "kagera", "year": 2023, "file": "papers/form4/chemistry/kag_annual_2023_chem1.pdf" },

            // SHINYANGA
            { "title": "Chemistry 1 (Theory)", "type": "mock", "region": "shinyanga", "year": 2026, "file": "papers/form4/chemistry/shy_mock_2026_chem1.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "mock", "region": "shinyanga", "year": 2026, "file": "papers/form4/chemistry/shy_mock_2026_chem2a.pdf" }
        ]
    },

    "form5": {
        "physics": [
            { "title": "Physics Terminal Exam", "type": "terminal", "region": "dar_es_salaam", "year": 2025, "file": "papers/form5/physics/dsm_term_2025_phy.pdf" }
        ],
        "chemistry": [
            { "title": "Chemistry Annual Exam", "type": "annual", "region": "dodoma", "year": 2025, "file": "papers/form5/chemistry/dom_annual_2025_chem.pdf" }
        ]
    },

    "form6": {
        "physics": [
            // ACSEE na Mock Form 6 Faili nyingi
            { "title": "Physics 1 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/dsm_acsee_2026_phy1.pdf" },
            { "title": "Physics 2 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/dsm_acsee_2026_phy2.pdf" },{ "title": "Physics 3 (Practical)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/physics/dsm_acsee_2026_phy3.pdf" },{ "title": "Physics 1 (Theory)", "type": "mock", "region": "arusha", "year": 2025, "file": "papers/form6/physics/aru_mock_2025_phy1.pdf" },{ "title": "Physics 1 (Theory)", "type": "pre_necta", "region": "mbeya", "year": 2024, "file": "papers/form6/physics/mby_pnecta_2024_phy1.pdf" }],"chemistry": [{ "title": "Chemistry 1 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/dsm_acsee_2026_chem1.pdf" },{ "title": "Chemistry 2 (Theory)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/dsm_acsee_2026_chem2.pdf" },{ "title": "Chemistry 3 (Practical)", "type": "acsee", "region": "dar_es_salaam", "year": 2026, "file": "papers/form6/chemistry/dsm_acsee_2026_chem3.pdf" },{ "title": "Chemistry 1 (Theory)", "type": "mock", "region": "dodoma", "year": 2025, "file": "papers/form6/chemistry/dom_mock_2025_chem1.pdf" }]}};
