// GEPAM Science Hub - Past Papers Database
// FORM 1 - FORM 6
// Physics & Chemistry

const pastPaperRegions = [
  { id: "arusha", name: "Arusha" },
  { id: "dar_es_salaam", name: "Dar es Salaam" },
  { id: "dodoma", name: "Dodoma" },
  { id: "shinyanga", name: "Shinyanga" },
  { id: "iringa", name: "Iringa" },
  { id: "kagera", name: "Kagera" },
  { id: "kigoma", name: "Kigoma" },
  { id: "kilimanjaro", name: "Kilimanjaro" },
  { id: "mbeya", name: "Mbeya" },
  { id: "morogoro", name: "Morogoro" },
  { id: "mwanza", name: "Mwanza" },
  { id: "tanga", name: "Tanga" }
];

const pastPaperYears = [
  2026,
  2025,
  2024,
  2023,
  2022,
  2021,
  2020
];

const pastPapers = [

  // =====================================================
  // FORM 1 - PHYSICS
  // Midterm / Terminal / Annual / Joint
  // =====================================================

  {
    "form":"form1",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form1/physics/dsm_2026.pdf"
  },
  {
    "form":"form1",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form1/physics/dsm_2025.pdf"
  },
  {
    "form":"form1",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form1/physics/dsm_2024.pdf"
  },
  {
    "form":"form1",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form1/physics/dsm_2023.pdf"
  },
  {
    "form":"form1",
    "subject":"physics",
    "title":"Physics Midterm Exam",
    "type":"midterm",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form1/physics/dom_2026.pdf"
  },
  {
    "form":"form1",
    "subject":"physics",
    "title":"Physics Terminal Exam",
    "type":"terminal",
    "region":"arusha",
    "year":2025,
    "file":"papers/form1/physics/aru_2025.pdf"
  },
  {
    "form":"form1",
    "subject":"physics",
    "title":"Physics Joint Exam",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form1/physics/mby_2026.pdf"
  },
  {
    "form":"form1",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"kagera",
    "year":2025,
    "file":"papers/form1/physics/kag_2025.pdf"
  },
  {
    "form":"form1",
    "subject":"physics",
    "title":"Physics Midterm Exam",
    "type":"midterm",
    "region":"shinyanga",
    "year":2026,
    "file":"papers/form1/physics/shy_2026.pdf"
  },


  // =====================================================
  // FORM 1 - CHEMISTRY
  // =====================================================

  {
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form1/chemistry/dsm_2026.pdf"
  },
  {
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form1/chemistry/dsm_2025.pdf"
  },
  {
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form1/chemistry/dsm_2024.pdf"
  },
  {
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form1/chemistry/dsm_2023.pdf"
  },
  {
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Midterm Exam",
    "type":"midterm",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form1/chemistry/dom_2026.pdf"
  },
  {
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Terminal Exam",
    "type":"terminal",
    "region":"arusha",
    "year":2025,
    "file":"papers/form1/chemistry/aru_2025.pdf"
  },
  {
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Joint Exam",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form1/chemistry/mby_2026.pdf"
  },


  // =====================================================
  // FORM 2 - PHYSICS
  // FTNA / MIDTERM / TERMINAL / JOINT
  // NO ANNUAL
  // =====================================================

  {
    "form":"form2",
    "subject":"physics",
    "title":"Physics FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2026,
    "file":"papers/form2/physics/necta_2026.pdf"
  },
  {
    "form":"form2",
    "subject":"physics",
    "title":"Physics FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2025,
    "file":"papers/form2/physics/necta/2025/F2_Physics_Necta_2025-Gepam_Hub.pdf"
  },
  {
    "form":"form2",
    "subject":"physics",
    "title":"Physics FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2024,
    "file":"papers/form2/physics/necta_2024.pdf"
  },
  {
    "form":"form2",
    "subject":"physics",
    "title":"Physics FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2023,
    "file":"papers/form2/physics/necta_2023.pdf"
  },
  {
    "form":"form2",
    "subject":"physics",
    "title":"Physics Midterm Exam",
    "type":"midterm",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form2/physics/dom_2026.pdf"
  },
  {
    "form":"form2",
    "subject":"physics",
    "title":"Physics Terminal Exam",
    "type":"terminal",
    "region":"arusha",
    "year":2025,
    "file":"papers/form2/physics/aru_2025.pdf"
  },
  {
    "form":"form2",
    "subject":"physics",
    "title":"Physics Joint Exam",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form2/physics/mby_2026.pdf"
  },
  {
    "form":"form2",
    "subject":"physics",
    "title":"Physics Joint Exam",
    "type":"joint",
    "region":"dodoma",
    "year":2025,
    "file":"papers/form2/physics/dom_2025.pdf"
  },
  {
    "form":"form2",
    "subject":"physics",
    "title":"Physics Joint Exam",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form2/physics/dsm_2026.pdf"
  },


  // =====================================================
  // FORM 2 - CHEMISTRY
  // =====================================================

  {
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2026,
    "file":"papers/form2/chemistry/necta_2026.pdf"
  },
  {
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2025,
    "file":"papers/form2/chemistry/necta/2025/F2_Chemistry_Necta_2025-Gepam_Hub.pdf"
  },
  {
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2024,
    "file":"papers/form2/chemistry/necta_2024.pdf"
  },
  {
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2023,
    "file":"papers/form2/chemistry/necta_2023.pdf"
  },
  {
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry Midterm Exam",
    "type":"midterm",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form2/chemistry/dom_2026.pdf"
  },
  {
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry Terminal Exam",
    "type":"terminal",
    "region":"arusha",
    "year":2025,
    "file":"papers/form2/chemistry/aru_2025.pdf"
  },
  {
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry Joint Exam",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form2/chemistry/mby_2026.pdf"
  },


  // =====================================================
  // FORM 3 - PHYSICS
  // =====================================================

  {
    "form":"form3",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form3/physics/dsm_2026.pdf"
  },
  {
    "form":"form3",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form3/physics/dsm_2025.pdf"
  },
  {
    "form":"form3",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form3/physics/dsm_2024.pdf"
  },
  {
    "form":"form3",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form3/physics/dsm_2023.pdf"
  },
  {
    "form":"form3",
    "subject":"physics",
    "title":"Physics Midterm Exam",
    "type":"midterm",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form3/physics/dom_2026.pdf"
  },
  {
    "form":"form3",
    "subject":"physics",
    "title":"Physics Terminal Exam",
    "type":"terminal",
    "region":"arusha",
    "year":2025,
    "file":"papers/form3/physics/aru_2025.pdf"
  },
  {
    "form":"form3",
    "subject":"physics",
    "title":"Physics Joint Exam",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form3/physics/mby_2026.pdf"
  },


  // =====================================================
  // FORM 3 - CHEMISTRY
  // =====================================================

  {
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form3/chemistry/dsm_2026.pdf"
  },
  {
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form3/chemistry/dsm_2025.pdf"
  },
  {
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form3/chemistry/dsm_2024.pdf"
  },
  {
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form3/chemistry/dsm_2023.pdf"
  },
  {
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Midterm Exam",
    "type":"midterm",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form3/chemistry/dom_2026.pdf"
  },
  {
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Terminal Exam",
    "type":"terminal",
    "region":"arusha",
    "year":2025,
    "file":"papers/form3/chemistry/aru_2025.pdf"
  },
  {
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Joint Exam",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form3/chemistry/mby_2026.pdf"
  },


  // =====================================================
  // FORM 4 - PHYSICS
  // MOCK / JOINT / PRE-NECTA / NECTA
  // PAPER 1 / 2A / 2B
  // =====================================================

  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics 1",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phys1&Marking_scheme_GEPAM_hub.pdf"
  },
  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics 2A",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phy2A&Marking_scheme_GEPAM_hub.pdf"
  },
  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics 2B",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phy2B&Marking_scheme_GEPAM_hub.pdf"
  },

  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics Joint Examination",
    "type":"joint",
    "region":"arusha",
    "year":2026,
    "file":"papers/form4/physics/joint/arusha/2026/physics_joint_2026.pdf"
  },
  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics Joint Examination",
    "type":"joint",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form4/physics/joint/dodoma/2026/physics_joint_2026.pdf"
  },

  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics Pre-NECTA Examination",
    "type":"pre_necta",
    "region":"arusha",
    "year":2026,
    "file":"papers/form4/physics/pre_necta/arusha/2026/physics_prenecta_2026.pdf"
  },
  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics Pre-NECTA Examination",
    "type":"pre_necta",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form4/physics/pre_necta/dodoma/2026/physics_prenecta_2026.pdf"
  },

  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics 1",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form4/physics/necta/2025/F4_necta_2025_phy1.pdf"
  },
  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics 2A",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form4/physics/necta/2025/F4_necta_2025_phy2a.pdf"
  },
  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics NECTA Examination",
    "type":"necta",
    "region":"necta",
    "year":2024,
    "file":"papers/form4/physics/necta/2024/physics_2024.pdf"
  },
  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics NECTA Examination",
    "type":"necta",
    "region":"necta",
    "year":2023,
    "file":"papers/form4/physics/necta/2023/physics_2023.pdf"
  },


  // =====================================================
  // FORM 4 - CHEMISTRY
  // PAPER 1 / 2A / 2B
  // =====================================================

  {
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry Mock Examination",
    "type":"mock",
    "region":"arusha",
    "year":2026,
    "file":"papers/form4/chemistry/mock/arusha/2026/chemistry_mock_2026.pdf"
  },
  {
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry Mock Examination",
    "type":"mock",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form4/chemistry/mock/dodoma/2026/chemistry_mock_2026.pdf"
  },

  {
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry Joint Examination",
    "type":"joint",
    "region":"arusha",
    "year":2026,
    "file":"papers/form4/chemistry/joint/arusha/2026/chemistry_joint_2026.pdf"
  },
  {
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry Joint Examination",
    "type":"joint",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form4/chemistry/joint/dodoma/2026/chemistry_joint_2026.pdf"
  },

  {
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry Pre-NECTA Examination",
    "type":"pre_necta",
    "region":"arusha",
    "year":2026,
    "file":"papers/form4/chemistry/pre_necta/arusha/2026/chemistry_prenecta_2026.pdf"
  },
  {
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry Pre-NECTA Examination",
    "type":"pre_necta",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form4/chemistry/pre_necta/dodoma/2026/chemistry_prenecta_2026.pdf"
  },

  {
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry 1",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form4/chemistry/necta/2025/F4_necta_2025_chem1.pdf"
  },
  {
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry 2A",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form4/chemistry/necta/2025/F4_necta_2025_chem2a.pdf"
  },
  {
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry NECTA Examination",
    "type":"necta",
    "region":"necta",
    "year":2024,
    "file":"papers/form4/chemistry/necta/2024/chemistry_2024.pdf"
  },
  {
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry NECTA Examination",
    "type":"necta",
    "region":"necta",
    "year":2023,
    "file":"papers/form4/chemistry/necta/2023/chemistry_2023.pdf"
  },


  // =====================================================
  // FORM 5 - NORMAL PAPERS
  // =====================================================

  {
    "form":"form5",
    "subject":"physics",
    "title":"Physics Annual Examination",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form5/physics/dsm_2026.pdf"
  },
  {
    "form":"form5",
    "subject":"physics",
    "title":"Physics Annual Examination",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form5/physics/dsm_2025.pdf"
  },
  {
    "form":"form5",
    "subject":"physics",
    "title":"Physics Annual Examination",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form5/physics/dsm_2024.pdf"
  },
  {
    "form":"form5",
    "subject":"physics",
    "title":"Physics Annual Examination",
    "type":"annual",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form5/physics/dom_2026.pdf"
  },
  {
    "form":"form5",
    "subject":"physics",
    "title":"Physics Joint Examination",
    "type":"joint",
    "region":"arusha",
    "year":2026,
    "file":"papers/form5/physics/aru_2026.pdf"
  },

  {
    "form":"form5",
    "subject":"chemistry",
    "title":"Chemistry Annual Examination",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form5/chemistry/dsm_2026.pdf"
  },
  {
    "form":"form5",
    "subject":"chemistry",
    "title":"Chemistry Annual Examination",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form5/chemistry/dsm_2025.pdf"
  },
  {
    "form":"form5",
    "subject":"chemistry",
    "title":"Chemistry Annual Examination",
    "type":"annual",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form5/chemistry/dom_2026.pdf"
  },
  {
    "form":"form5",
    "subject":"chemistry",
    "title":"Chemistry Joint Examination",
    "type":"joint",
    "region":"arusha",
    "year":2026,
    "file":"papers/form5/chemistry/aru_2026.pdf"
  },


  // =====================================================
  // FORM 6 - PHYSICS
  // PAPER 1 / 2 / 3A / 3B
  // =====================================================

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/physics/necta/2025/F6_necta_2025_phy1.pdf"
  },
  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 2",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/physics/necta/2025/F6_necta_2025_phy2.pdf"
  },
  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 3A",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/physics/necta/2025/F6_necta_2025_phy3a.pdf"
  },
  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 3B",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/physics/necta/2025/F6_necta_2025_phy3b.pdf"
  },


  // =====================================================
  // FORM 6 - CHEMISTRY
  // PAPER 1 / 2 / 3A / 3B
  // =====================================================

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/chemistry/necta/2025/F6_necta_2025_chem1.pdf"
  },
  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 2",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/chemistry/necta/2025/F6_necta_2025_chem2.pdf"
  },
  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 3A",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/chemistry/necta/2025/F6_necta_2025_chem3a.pdf"
  },
  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 3B",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/chemistry/necta/2025/F6_necta_2025_chem3b.pdf"
  }

];


/* =========================================================
   MAKE DATABASE AVAILABLE TO pastpapers.html
========================================================= */

window.pastPapers = pastPapers;
