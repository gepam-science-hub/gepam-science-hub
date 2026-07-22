// GEPAM Past Papers Configuration and Database

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
            // MFANO WA MOCK - DAR ES SALAAM (2026) -> Inaonyesha faili nyingi mara moja
            { "title": "Physics 1 (Theory)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/physics/dsm_phy1_2026.pdf" },
            { "title": "Physics 2A (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/physics/dsm_phy2a_2026.pdf" },
            { "title": "Physics 2B (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/physics/dsm_phy2b_2026.pdf" },
            { "title": "Physics 2C (Practical)", "type": "mock", "region": "dar_es_salaam", "year": 2026, "file": "papers/physics/dsm_phy2c_2026.pdf" },

            // MFANO WA PRE-NECTA - DODOMA (2025)
            { "title": "Physics 1", "type": "pre_necta", "region": "dodoma", "year": 2025, "file": "papers/physics/dom_phy1_2025.pdf" },
            { "title": "Physics 2A (Practical)", "type": "pre_necta", "region": "dodoma", "year": 2025, "file": "papers/physics/dom_phy2a_2025.pdf" }
        ],
        "chemistry": [
            // MFANO WA JOINT - ARUSHA (2024)
            { "title": "Chemistry 1 (Theory)", "type": "joint", "region": "arusha", "year": 2024, "file": "papers/chemistry/aru_chem1_2024.pdf" },
            { "title": "Chemistry 2A (Practical)", "type": "joint", "region": "arusha", "year": 2024, "file": "papers/chemistry/aru_chem2a_2024.pdf" },
            { "title": "Chemistry 2B (Practical)", "type": "joint", "region": "arusha", "year": 2024, "file": "papers/chemistry/aru_chem2b_2024.pdf" }
        ]
    }
    // Mikoa mingine inayokubalika kwenye kujaza ni: 'mbeya', 'kagera', 'shinyanga'
};
