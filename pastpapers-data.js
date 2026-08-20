// GEPAM Science Hub - NEW Past Papers Database
// Compatible with pastpapers.html

const pastPaperRegions = [
  { id: "arusha", name: "Arusha" },
  { id: "dar_es_salaam", name: "Dar es Salaam" },
  { id: "dodoma", name: "Dodoma" },
  { id: "geita", name: "Geita" },
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
    "file":"papers/form2/physics/necta_2025.pdf"
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
    "file":"papers/form2/chemistry/dsm_2025.pdf"
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

  {
    "form":"form3",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"kagera",
    "year":2025,
    "file":"papers/form3/physics/kag_2025.pdf"
  },

  {
    "form":"form3",
    "subject":"physics",
    "title":"Physics Midterm Exam",
    "type":"midterm",
    "region":"shinyanga",
    "year":2026,
    "file":"papers/form3/physics/shy_2026.pdf"
  },

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
  },  {
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"kagera",
    "year":2025,
    "file":"papers/form3/chemistry/kag_2025.pdf"
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

  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics Mock Examination",
    "type":"mock",
    "region":"arusha",
    "year":2026,
    "file":"papers/form4/physics/mock/arusha/2026/physics_mock_2026.pdf"
  },

  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics Mock Examination",
    "type":"mock",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form4/physics/mock/dodoma/2026/physics_mock_2026.pdf"
  },

  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics 1",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form4/physics/mock/dar_es_salaam/2026/physics_mock_2026.pdf"
  },

  {
    "form":"form4",
    "subject":"physics",
    "title":"Physics 2A",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form4/physics/mock/dar_es_salaam/2026/physics_mock_2026.pdf"
  },

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
    "title":"Physics 1",
    "type":"mock",
    "region":"shinyanga",
    "year":2024,
    "file":"papers/form4/physics/mock/2024/F4_shy_mock_2024_phy1.pdf"
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
  },  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/physics/mock/dar_es_salaam/2026/F6_dsm_mock_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 2 (Theory)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/physics/mock/dar_es_salaam/2026/F6_dsm_mock_2026_phy2.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 3A (Practical)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/physics/mock/dar_es_salaam/2026/F6_dsm_mock_2026_phy3a.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 3B (Practical)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/physics/mock/dar_es_salaam/2026/F6_dsm_mock_2026_phy3b.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form6/physics/mock/dar_es_salaam/2025/F6_dsm_mock_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form6/physics/mock/dar_es_salaam/2024/F6_dsm_mock_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form6/physics/mock/dar_es_salaam/2023/F6_dsm_mock_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form6/physics/F6_dom_mock_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"dodoma",
    "year":2025,
    "file":"papers/form6/physics/F6_dom_mock_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"dodoma",
    "year":2024,
    "file":"papers/form6/physics/F6_dom_mock_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"dodoma",
    "year":2023,
    "file":"papers/form6/physics/F6_dom_mock_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"arusha",
    "year":2026,
    "file":"papers/form6/physics/F6_aru_mock_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"arusha",
    "year":2025,
    "file":"papers/form6/physics/F6_aru_mock_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"arusha",
    "year":2024,
    "file":"papers/form6/physics/F6_aru_mock_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"arusha",
    "year":2023,
    "file":"papers/form6/physics/F6_aru_mock_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form6/physics/F6_mby_mock_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"mbeya",
    "year":2025,
    "file":"papers/form6/physics/F6_mby_mock_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"mbeya",
    "year":2024,
    "file":"papers/form6/physics/F6_mby_mock_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"mbeya",
    "year":2023,
    "file":"papers/form6/physics/F6_mby_mock_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"kagera",
    "year":2026,
    "file":"papers/form6/physics/F6_kag_mock_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"kagera",
    "year":2025,
    "file":"papers/form6/physics/F6_kag_mock_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"kagera",
    "year":2024,
    "file":"papers/form6/physics/F6_kag_mock_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"kagera",
    "year":2023,
    "file":"papers/form6/physics/F6_kag_mock_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"shinyanga",
    "year":2026,
    "file":"papers/form6/physics/mock/shinyanga/2026/F6_shy_mock_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"shinyanga",
    "year":2025,
    "file":"papers/form6/physics/mock/shinyanga/2025/F6_shy_mock_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"shinyanga",
    "year":2024,
    "file":"papers/form6/physics/mock/shinyanga/2024/F6_shy_mock_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"mock",
    "region":"shinyanga",
    "year":2023,
    "file":"papers/form6/physics/mock/shinyanga/2023/F6_shy_mock_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/physics/joint/dar_es_salaam/2026/F6_dsm_joint_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 2 (Theory)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/physics/joint/dar_es_salaam/2026/F6_dsm_joint_2026_phy2.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 3A (Practical)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/physics/joint/dar_es_salaam/2026/F6_dsm_joint_2026_phy3a.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 3B (Practical)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/physics/joint/dar_es_salaam/2026/F6_dsm_joint_2026_phy3b.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form6/physics/joint/dar_es_salaam/2025/F6_dsm_joint_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form6/physics/joint/dar_es_salaam/2024/F6_dsm_joint_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form6/physics/joint/dar_es_salaam/2023/F6_dsm_joint_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form6/physics/F6_dom_joint_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"dodoma",
    "year":2025,
    "file":"papers/form6/physics/F6_dom_joint_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"dodoma",
    "year":2024,
    "file":"papers/form6/physics/F6_dom_joint_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"dodoma",
    "year":2023,
    "file":"papers/form6/physics/F6_dom_joint_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"arusha",
    "year":2026,
    "file":"papers/form6/physics/F6_aru_joint_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"arusha",
    "year":2025,
    "file":"papers/form6/physics/F6_aru_joint_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"arusha",
    "year":2024,
    "file":"papers/form6/physics/F6_aru_joint_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"arusha",
    "year":2023,
    "file":"papers/form6/physics/F6_aru_joint_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form6/physics/F6_mby_joint_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"mbeya",
    "year":2025,
    "file":"papers/form6/physics/F6_mby_joint_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"mbeya",
    "year":2024,
    "file":"papers/form6/physics/F6_mby_joint_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"mbeya",
    "year":2023,
    "file":"papers/form6/physics/F6_mby_joint_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"kagera",
    "year":2026,
    "file":"papers/form6/physics/F6_kag_joint_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"kagera",
    "year":2025,
    "file":"papers/form6/physics/F6_kag_joint_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"kagera",
    "year":2024,
    "file":"papers/form6/physics/F6_kag_joint_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"kagera",
    "year":2023,
    "file":"papers/form6/physics/F6_kag_joint_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"shinyanga",
    "year":2026,
    "file":"papers/form6/physics/F6_shy_joint_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"shinyanga",
    "year":2025,
    "file":"papers/form6/physics/F6_shy_joint_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"shinyanga",
    "year":2024,
    "file":"papers/form6/physics/F6_shy_joint_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"joint",
    "region":"shinyanga",
    "year":2023,
    "file":"papers/form6/physics/F6_shy_joint_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/physics/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 2 (Theory)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/physics/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_phy2.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 3A (Practical)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/physics/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_phy3a.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 3B (Practical)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/physics/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_phy3b.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form6/physics/pre_necta/dar_es_salaam/2025/F6_dsm_prenecta2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form6/physics/pre_necta/dar_es_salaam/2024/F6_dsm_prenecta_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form6/physics/pre_necta/dar_es_salaam/2023/F6_dsm_prenecta_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form6/physics/F6_dom_prenecta_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"dodoma",
    "year":2025,
    "file":"papers/form6/physics/F6_dom_prenecta_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"dodoma",
    "year":2024,
    "file":"papers/form6/physics/F6_dom_prenecta_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"dodoma",
    "year":2023,
    "file":"papers/form6/physics/F6_dom_prenecta_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"arusha",
    "year":2026,
    "file":"papers/form6/physics/F6_aru_prenecta_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"arusha",
    "year":2025,
    "file":"papers/form6/physics/F6_aru_prenecta_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"arusha",
    "year":2024,
    "file":"papers/form6/physics/F6_aru_prenecta_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"arusha",
    "year":2023,
    "file":"papers/form6/physics/F6_aru_prenecta_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form6/physics/F6_mby_prenecta_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"mbeya",
    "year":2025,
    "file":"papers/form6/physics/F6_mby_prenecta_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"mbeya",
    "year":2024,
    "file":"papers/form6/physics/F6_mby_prenecta_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"mbeya",
    "year":2023,
    "file":"papers/form6/physics/F6_mby_prenecta_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"kagera",
    "year":2026,
    "file":"papers/form6/physics/pre_necta/kagera/F6_kag_prenecta_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 2 (Theory)",
    "type":"pre_necta",
    "region":"kagera",
    "year":2026,
    "file":"papers/form6/physics/pre_necta/kagera/2026/F6_kag_prenecta_2026_phy2.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 3A (Practical)",
    "type":"pre_necta",
    "region":"kagera",
    "year":2026,
    "file":"papers/form6/physics/pre_necta/kagera/2026/F6_kag_prenecta_2026_phy3A.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"kagera",
    "year":2025,
    "file":"papers/form6/physics/pre_necta/kagera/F6_kag_prenecta_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"kagera",
    "year":2024,
    "file":"papers/form6/physics/pre_necta/kagera/F6_kag_prenecta_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"kagera",
    "year":2023,
    "file":"papers/form6/physics/pre_necta/kagera/F6_kag_prenecta_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"shinyanga",
    "year":2026,
    "file":"papers/form6/physics/F6_shy_prenecta_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"shinyanga",
    "year":2025,
    "file":"papers/form6/physics/F6_shy_prenecta_2025_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"shinyanga",
    "year":2024,
    "file":"papers/form6/physics/F6_shy_prenecta_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"pre_necta",
    "region":"shinyanga",
    "year":2023,
    "file":"papers/form6/physics/F6_shy_prenecta_2023_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"necta",
    "region":"necta",
    "year":2026,
    "file":"papers/form6/physics/necta/2026/F6_necta_2026_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 2 (Theory)",
    "type":"necta",
    "region":"necta",
    "year":2026,
    "file":"papers/form6/physics/necta/2026/F6_necta_2026_phy2.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 3A (Practical)",
    "type":"necta",
    "region":"necta",
    "year":2026,
    "file":"papers/form6/physics/necta/2026/F6_necta_2026_phy3a.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 3B (Practical)",
    "type":"necta",
    "region":"necta",
    "year":2026,
    "file":"papers/form6/physics/necta/2026/F6_necta_2026_phy3b.pdf"
  },

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
    "title":"Physics 1 (Theory)",
    "type":"necta",
    "region":"necta",
    "year":2024,
    "file":"papers/form6/physics/necta/2024/F6_necta_2024_phy1.pdf"
  },

  {
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"necta",
    "region":"necta",
    "year":2023,
    "file":"papers/form6/physics/necta/2023/F6_necta_2023_phy1.pdf"
  },

  /* =====================================================
     FORM 6 CHEMISTRY
  ===================================================== */

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/chemistry/mock/dar_es_salaam/2026/F6_dsm_mock_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 2 (Theory)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/chemistry/mock/dar_es_salaam/2026/F6_dsm_mock_2026_chem2.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 3A (Practical)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/chemistry/mock/dar_es_salaam/2026/F6_dsm_mock_2026_chem3a.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 3B (Practical)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/chemistry/mock/dar_es_salaam/2026/F6_dsm_mock_2026_chem3b.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form6/chemistry/mock/dar_es_salaam/2025/F6_dsm_mock_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form6/chemistry/mock/dar_es_salaam/2024/F6_dsm_mock_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form6/chemistry/mock/dar_es_salaam/2023/F6_dsm_mock_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form6/chemistry/mock/dodoma/2026/F6_dom_mock_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"dodoma",
    "year":2025,
    "file":"papers/form6/chemistry/mock/dodoma/2025/F6_dom_mock_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"dodoma",
    "year":2024,
    "file":"papers/form6/chemistry/mock/dodoma/2024/F6_dom_mock_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"dodoma",
    "year":2023,
    "file":"papers/form6/chemistry/mock/dodoma/2023/F6_dom_mock_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"arusha",
    "year":2026,
    "file":"papers/form6/chemistry/mock/arusha/2026/F6_aru_mock_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"arusha",
    "year":2025,
    "file":"papers/form6/chemistry/mock/arusha/2025/F6_aru_mock_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"arusha",
    "year":2024,
    "file":"papers/form6/chemistry/mock/arusha/2024/F6_aru_mock_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"arusha",
    "year":2023,
    "file":"papers/form6/chemistry/mock/arusha/2023/F6_aru_mock_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form6/chemistry/mock/mbeya/2026/F6_mby_mock_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"mbeya",
    "year":2025,
    "file":"papers/form6/chemistry/mock/mbeya/2025/F6_mby_mock_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"mbeya",
    "year":2024,
    "file":"papers/form6/chemistry/mock/mbeya/2024/F6_mby_mock_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"mbeya",
    "year":2023,
    "file":"papers/form6/chemistry/mock/mbeya/2023/F6_mby_mock_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"kagera",
    "year":2026,
    "file":"papers/form6/chemistry/mock/kagera/2026/F6_kag_mock_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"kagera",
    "year":2025,
    "file":"papers/form6/chemistry/mock/kagera/2025/F6_kag_mock_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"kagera",
    "year":2024,
    "file":"papers/form6/chemistry/mock/kagera/2024/F6_kag_mock_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"kagera",
    "year":2023,
    "file":"papers/form6/chemistry/mock/kagera/2023/F6_kag_mock_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"shinyanga",
    "year":2026,
    "file":"papers/form6/chemistry/mock/shinyanga/2026/F6_shy_mock_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"shinyanga",
    "year":2025,
    "file":"papers/form6/chemistry/mock/shinyanga/2025/F6_shy_mock_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"shinyanga",
    "year":2024,
    "file":"papers/form6/chemistry/mock/shinyanga/2024/F6_shy_mock_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"mock",
    "region":"shinyanga",
    "year":2023,
    "file":"papers/form6/chemistry/mock/shinyanga/2023/F6_shy_mock_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/chemistry/joint/dar_es_salaam/2026/F6_dsm_joint_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 2 (Theory)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/chemistry/joint/dar_es_salaam/2026/F6_dsm_joint_2026_chem2.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 3A (Practical)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/chemistry/joint/dar_es_salaam/2026/F6_dsm_joint_2026_chem3a.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 3B (Practical)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/chemistry/joint/dar_es_salaam/2026/F6_dsm_joint_2026_chem3b.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form6/chemistry/joint/dar_es_salaam/2025/F6_dsm_joint_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form6/chemistry/joint/dar_es_salaam/2024/F6_dsm_joint_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form6/chemistry/joint/dar_es_salaam/2023/F6_dsm_joint_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form6/chemistry/joint/dodoma/2026/F6_dom_joint_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"dodoma",
    "year":2025,
    "file":"papers/form6/chemistry/joint/dodoma/2025/F6_dom_joint_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"dodoma",
    "year":2024,
    "file":"papers/form6/chemistry/joint/dodoma/2024/F6_dom_joint_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"dodoma",
    "year":2023,
    "file":"papers/form6/chemistry/joint/dodoma/2023/F6_dom_joint_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"arusha",
    "year":2026,
    "file":"papers/form6/chemistry/joint/arusha/2026/F6_aru_joint_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"arusha",
    "year":2025,
    "file":"papers/form6/chemistry/joint/arusha/2025/F6_aru_joint_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"arusha",
    "year":2024,
    "file":"papers/form6/chemistry/joint/arusha/2024/F6_aru_joint_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"arusha",
    "year":2023,
    "file":"papers/form6/chemistry/joint/arusha/2023/F6_aru_joint_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form6/chemistry/joint/mbeya/2026/F6_mby_joint_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"mbeya",
    "year":2025,
    "file":"papers/form6/chemistry/joint/mbeya/2025/F6_mby_joint_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"mbeya",
    "year":2024,
    "file":"papers/form6/chemistry/joint/mbeya/2024/F6_mby_joint_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"mbeya",
    "year":2023,
    "file":"papers/form6/chemistry/joint/mbeya/2023/F6_mby_joint_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"kagera",
    "year":2026,
    "file":"papers/form6/chemistry/joint/kagera/2026/F6_kag_joint_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"kagera",
    "year":2025,
    "file":"papers/form6/chemistry/joint/kagera/2025/F6_kag_joint_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"kagera",
    "year":2024,
    "file":"papers/form6/chemistry/joint/kagera/2024/F6_kag_joint_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"kagera",
    "year":2023,
    "file":"papers/form6/chemistry/joint/kagera/2023/F6_kag_joint_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"shinyanga",
    "year":2026,
    "file":"papers/form6/chemistry/joint/shinyanga/2026/F6_shy_joint_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"shinyanga",
    "year":2025,
    "file":"papers/form6/chemistry/joint/shinyanga/2025/F6_shy_joint_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"shinyanga",
    "year":2024,
    "file":"papers/form6/chemistry/joint/shinyanga/2024/F6_shy_joint_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"joint",
    "region":"shinyanga",
    "year":2023,
    "file":"papers/form6/chemistry/joint/shinyanga/2023/F6_shy_joint_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/chemistry/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 2 (Theory)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/chemistry/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_chem2.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 3A (Practical)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/chemistry/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_chem3a.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 3B (Practical)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form6/chemistry/pre_necta/dar_es_salaam/2026/F6_dsm_prenecta_2026_chem3b.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form6/chemistry/pre_necta/dar_es_salaam/2025/F6_dsm_prenecta_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form6/chemistry/pre_necta/dar_es_salaam/2024/F6_dsm_prenecta_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form6/chemistry/pre_necta/dar_es_salaam/2023/F6_dsm_prenecta_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form6/chemistry/F6_dom_prenecta_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"dodoma",
    "year":2025,
    "file":"papers/form6/chemistry/F6_dom_prenecta_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"dodoma",
    "year":2024,
    "file":"papers/form6/chemistry/F6_dom_prenecta_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"dodoma",
    "year":2023,
    "file":"papers/form6/chemistry/F6_dom_prenecta_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"arusha",
    "year":2026,
    "file":"papers/form6/chemistry/F6_aru_prenecta_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"arusha",
    "year":2025,
    "file":"papers/form6/chemistry/F6_aru_prenecta_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"arusha",
    "year":2024,
    "file":"papers/form6/chemistry/F6_aru_prenecta_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"arusha",
    "year":2023,
    "file":"papers/form6/chemistry/F6_aru_prenecta_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form6/chemistry/F6_mby_prenecta_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"mbeya",
    "year":2025,
    "file":"papers/form6/chemistry/F6_mby_prenecta_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"mbeya",
    "year":2024,
    "file":"papers/form6/chemistry/F6_mby_prenecta_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"mbeya",
    "year":2023,
    "file":"papers/form6/chemistry/F6_mby_prenecta_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"kagera",
    "year":2026,
    "file":"papers/form6/chemistry/F6_kag_prenecta_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"kagera",
    "year":2025,
    "file":"papers/form6/chemistry/F6_kag_prenecta_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"kagera",
    "year":2024,
    "file":"papers/form6/chemistry/F6_kag_prenecta_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"kagera",
    "year":2023,
    "file":"papers/form6/chemistry/F6_kag_prenecta_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"shinyanga",
    "year":2026,
    "file":"papers/form6/chemistry/F6_shy_prenecta_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"shinyanga",
    "year":2025,
    "file":"papers/form6/chemistry/F6_shy_prenecta_2025_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"shinyanga",
    "year":2024,
    "file":"papers/form6/chemistry/F6_shy_prenecta_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"pre_necta",
    "region":"shinyanga",
    "year":2023,
    "file":"papers/form6/chemistry/F6_shy_prenecta_2023_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"necta",
    "region":"necta",
    "year":2026,
    "file":"papers/form6/chemistry/necta/2026/F6_necta_2026_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 2 (Theory)",
    "type":"necta",
    "region":"necta",
    "year":2026,
    "file":"papers/form6/chemistry/necta/2026/F6_necta_2026_chem2.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 3A (Practical)",
    "type":"necta",
    "region":"necta",
    "year":2026,
    "file":"papers/form6/chemistry/necta/2026/F6_necta_2026_chem3a.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 3B (Practical)",
    "type":"necta",
    "region":"necta",
    "year":2026,
    "file":"papers/form6/chemistry/necta/2026/F6_necta_2026_chem3b.pdf"
  },

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
    "title":"Chemistry 1 (Theory)",
    "type":"necta",
    "region":"necta",
    "year":2024,
    "file":"papers/form6/chemistry/necta/2024/F6_necta_2024_chem1.pdf"
  },

  {
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"necta",
    "region":"necta",
    "year":2023,
    "file":"papers/form6/chemistry/necta/2023/F6_necta_2023_chem1.pdf"
  }

];

/* =========================================================
   MAKE DATABASE AVAILABLE TO pastpapers.html
========================================================= */

window.pastPapers = pastPapers;
