/* =========================================================
   GEPAM SCIENCE HUB - PAST PAPERS DATABASE (data.js)
   ========================================================= */
const localDatabase = {
    form1: {
        physics: [
            {
                title: "Form 1 Physics Terminal Exam 2024",
                type: "terminal",
                year: "2024",
                region: "dar_es_salaam",
                file: "papers/f1_phy_term_2024.pdf"
            },
            {
                title: "Form 1 Physics Annual Exam 2023",
                type: "annual",
                year: "2023",
                region: "mwanza",
                file: "papers/f1_phy_annual_2023.pdf"
            }
        ],
        chemistry: [
            {
                title: "Form 1 Chemistry Midterm Exam 2024",
                type: "midterm",
                year: "2024",
                region: "arusha",
                file: "papers/f1_chem_mid_2024.pdf"
            },
            {
                title: "Form 1 Chemistry Annual Exam 2022",
                type: "annual",
                year: "2022",
                region: "dodoma",
                file: "papers/f1_chem_annual_2022.pdf"
            }
        ]
    },
    form2: {
        physics: [
            {
                title: "Form 2 Physics FTNA National Exam 2024",
                type: "necta",
                year: "2024",
                region: "necta",
                file: "papers/f2_phy_ftna_2024.pdf"
            },
            {
                title: "Form 2 Physics Mock Exam 2023",
                type: "mock",
                year: "2023",
                region: "tanga",
                file: "papers/f2_phy_mock_2023.pdf"
            }
        ],
        chemistry: [
            {
                title: "Form 2 Chemistry FTNA National Exam 2023",
                type: "necta",
                year: "2023",
                region: "necta",
                file: "papers/f2_chem_ftna_2023.pdf"
            },
            {
                title: "Form 2 Chemistry Joint Exam 2024",
                type: "joint",
                year: "2024",
                region: "kilimanjaro",
                file: "papers/f2_chem_joint_2024.pdf"
            }
        ]
    },
    form3: {
        physics: [
            {
                title: "Form 3 Physics Midterm Exam 2024",
                type: "midterm",
                year: "2024",
                region: "mbeya",
                file: "papers/f3_phy_mid_2024.pdf"
            },
            {
                title: "Form 3 Physics Annual Exam 2023",
                type: "annual",
                year: "2023",
                region: "morogoro",
                file: "papers/f3_phy_annual_2023.pdf"
            }
        ],
        chemistry: [
            {
                title: "Form 3 Chemistry Terminal Exam 2024",
                type: "terminal",
                year: "2024",
                region: "iringa",
                file: "papers/f3_chem_term_2024.pdf"
            },
            {
                title: "Form 3 Chemistry Mock Exam 2023",
                type: "mock",
                year: "2023",
                region: "geita",
                file: "papers/f3_chem_mock_2023.pdf"
            }
        ]
    },
    form4: {
        physics: [
            {
                title: "Form 4 Physics CSEE NECTA Exam 2024",
                type: "necta",
                year: "2024",
                region: "necta",
                file: "papers/f4_phy_necta_2024.pdf"
            },
            {
                title: "Form 4 Physics Pre-NECTA Exam 2023",
                type: "pre_necta",
                year: "2023",
                region: "dar_es_salaam",
                file: "papers/f4_phy_prenecta_2023.pdf"
            }
        ],
        chemistry: [
            {
                title: "Form 4 Chemistry CSEE NECTA Exam 2023",
                type: "necta",
                year: "2023",
                region: "necta",
                file: "papers/f4_chem_necta_2023.pdf"
            },
            {
                title: "Form 4 Chemistry Mock Exam 2024",
                type: "mock",
                year: "2024",
                region: "mwanza",
                file: "papers/f4_chem_mock_2024.pdf"
            }
        ]
    },
    form5: {
        physics: [
            {
                title: "Form 5 Physics Terminal Exam 2024",
                type: "terminal",
                year: "2024",
                region: "kigoma",
                file: "papers/f5_phy_term_2024.pdf"
            },
            {
                title: "Form 5 Physics Joint Exam 2023",
                type: "joint",
                year: "2023",
                region: "arusha",
                file: "papers/f5_phy_joint_2023.pdf"
            }
        ],
        chemistry: [
            {
                title: "Form 5 Chemistry Midterm Exam 2024",
                type: "midterm",
                year: "2024",
                region: "dodoma",
                file: "papers/f5_chem_mid_2024.pdf"
            },
            {
                title: "Form 5 Chemistry Annual Exam 2023",
                type: "annual",
                year: "2023",
                region: "tanga",
                file: "papers/f5_chem_annual_2023.pdf"
            }
        ]
    },
    form6: {
        physics: [
            {
                title: "Form 6 Physics ACSEE NECTA Exam 2024",
                type: "necta",
                year: "2024",
                region: "necta",
                file: "papers/f6_phy_necta_2024.pdf"
            },
            {
                title: "Form 6 Physics Mock Exam 2023",
                type: "mock",
                year: "2023",
                region: "dar_es_salaam",
                file: "papers/f6_phy_mock_2023.pdf"
            }
        ],
        chemistry: [
            {
                title: "Form 6 Chemistry ACSEE NECTA Exam 2023",
                type: "necta",
                year: "2023",
                region: "necta",
                file: "papers/f6_chem_necta_2023.pdf"
            },
            {
                title: "Form 6 Chemistry Joint Exam 2024",
                type: "joint",
                year: "2024",
                region: "mwanza",
                file: "papers/f6_chem_joint_2024.pdf"
            }
        ]
    }
};

// hapa ndipo window inapounganishwa chini kabisa ya database yako mkuu:
window.pastPapers = localDatabase;
