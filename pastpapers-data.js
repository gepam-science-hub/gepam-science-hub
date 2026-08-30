// ============================================================
// GEPAM SCIENCE HUB
// PAST PAPERS DATABASE
//
// FORM 1 - FORM 6
// PHYSICS / CHEMISTRY / BIOLOGY
//
// NORMAL EXAMINATIONS
//   Form → Subject → Type → School/Region → Year → Papers
//
// SPECIAL EXAMINATIONS
//   Special Examination → Series → PDF
//
// PAPER SUPPORT
//   file           = Examination Paper PDF
//   markingScheme  = Marking Guide / Marking Scheme PDF
// ============================================================

// ============================================================
// REGIONS
// ============================================================
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
    { id: "tanga", name: "Tanga" },
    { id: "necta", name: "NECTA" }
];

// ============================================================
// YEARS
// ============================================================
const pastPaperYears = [
    2026,
    2025,
    2024,
    2023,
    2022,
    2021,
    2020
];
// ============================================================
// SUBJECTS
// ============================================================
const pastPaperSubjects = [
    { id: "physics", name: "Physics" },
    { id: "chemistry", name: "Chemistry" },
    { id: "biology", name: "Biology" }
];

// ============================================================
// SPECIAL EXAMINATIONS
// ============================================================
const specialExaminations = [
    { id: "isese", name: "ISESE", color: "special-blue" },
    { id: "jepgos", name: "JEPGOS", color: "special-purple" },
    { id: "tahossa", name: "TAHOSSA", color: "special-green" },
    { id: "cssc", name: "CSSC", color: "special-orange" },
    { id: "special_school", name: "SPECIAL SCHOOL", color: "special-red" }
];

// ============================================================
// PAST PAPERS
// ============================================================
const pastPapers = [
// ============================================================
// FORM 1 - PHYSICS
// ============================================================
{
    "form":"form1",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form1/physics/dsm_2026.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form1/physics/dsm_2025.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form1/physics/dsm_2024.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form1/physics/dsm_2023.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"physics",
    "title":"Physics Midterm Exam",
    "type":"midterm",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form1/physics/dom_2026.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"physics",
    "title":"Physics Terminal Exam",
    "type":"terminal",
    "region":"arusha",
    "year":2025,
    "file":"papers/form1/physics/aru_2025.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"physics",
    "title":"Physics Joint Exam",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form1/physics/mby_2026.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"kagera",
    "year":2025,
    "file":"papers/form1/physics/kag_2025.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"physics",
    "title":"Physics Midterm Exam",
    "type":"midterm",
    "region":"shinyanga",
    "year":2026,
    "file":"papers/form1/physics/shy_2026.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 1 - CHEMISTRY
// ============================================================
{
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form1/chemistry/dsm_2026.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form1/chemistry/dsm_2025.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form1/chemistry/dsm_2024.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form1/chemistry/dsm_2023.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Midterm Exam",
    "type":"midterm",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form1/chemistry/dom_2026.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Terminal Exam",
    "type":"terminal",
    "region":"arusha",
    "year":2025,
    "file":"papers/form1/chemistry/aru_2025.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"chemistry",
    "title":"Chemistry Joint Exam",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form1/chemistry/mby_2026.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 1 - BIOLOGY
// ============================================================
{
    "form":"form1",
    "subject":"biology",
    "title":"Biology Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form1/biology/dsm_2026.pdf",
    "markingScheme":""
},
{
    "form":"form1",
    "subject":"biology",
    "title":"Biology Midterm Exam",
    "type":"midterm",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form1/biology/dom_2026.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 2 - PHYSICS
// ============================================================
{
    "form":"form2",
    "subject":"physics",
    "title":"Physics FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2026,
    "file":"papers/form2/physics/necta_2026.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"physics",
    "title":"Physics",
    "type":"ftna",
    "region":"necta",
    "year":2025,
    "file":"papers/form2/physics/necta/2025/F2_Physics_Necta_2025-Gepam_Hub.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"physics",
    "title":"Physics FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2024,
    "file":"papers/form2/physics/necta_2024.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"physics",
    "title":"Physics FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2023,
    "file":"papers/form2/physics/necta_2023.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"physics",
    "title":"Physics Midterm Exam",
    "type":"midterm",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form2/physics/dom_2026.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"physics",
    "title":"Physics Terminal Exam",
    "type":"terminal",
    "region":"arusha",
    "year":2025,
    "file":"papers/form2/physics/aru_2025.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"physics",
    "title":"Physics Joint Exam",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form2/physics/mby_2026.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"physics",
    "title":"Physics Joint Exam",
    "type":"joint",
    "region":"dodoma",
    "year":2025,
    "file":"papers/form2/physics/dom_2025.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"physics",
    "title":"Physics Joint Exam",
    "type":"joint",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form2/physics/dsm_2026.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 2 - CHEMISTRY
// ============================================================
{
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2026,
    "file":"papers/form2/chemistry/necta_2026.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry",
    "type":"ftna",
    "region":"necta",
    "year":2025,
    "file":"papers/form2/chemistry/necta/2025/F2_Chemistry_Necta_2025-Gepam_Hub.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2024,
    "file":"papers/form2/chemistry/necta_2024.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2023,
    "file":"papers/form2/chemistry/necta_2023.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry Midterm Exam",
    "type":"midterm",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form2/chemistry/dom_2026.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry Terminal Exam",
    "type":"terminal",
    "region":"arusha",
    "year":2025,
    "file":"papers/form2/chemistry/aru_2025.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"chemistry",
    "title":"Chemistry Joint Exam",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form2/chemistry/mby_2026.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 2 - BIOLOGY
// ============================================================
{
    "form":"form2",
    "subject":"biology",
    "title":"Biology FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2026,
    "file":"papers/form2/biology/necta_2026.pdf",
    "markingScheme":""
},
{
    "form":"form2",
    "subject":"biology",
    "title":"Biology FTNA Exam",
    "type":"ftna",
    "region":"necta",
    "year":2025,
    "file":"papers/form2/biology/necta_2025.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 3 - PHYSICS
// ============================================================
{
    "form":"form3",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form3/physics/dsm_2026.pdf",
    "markingScheme":""
},
{
    "form":"form3",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form3/physics/dsm_2025.pdf",
    "markingScheme":""
},
{
    "form":"form3",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form3/physics/dsm_2024.pdf",
    "markingScheme":""
},
{
    "form":"form3",
    "subject":"physics",
    "title":"Physics Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form3/physics/dsm_2023.pdf",
    "markingScheme":""
},
{
    "form":"form3",
    "subject":"physics",
    "title":"Physics Midterm Exam",
    "type":"midterm",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form3/physics/dom_2026.pdf",
    "markingScheme":""
},
{
    "form":"form3",
    "subject":"physics",
    "title":"Physics Terminal Exam",
    "type":"terminal",
    "region":"arusha",
    "year":2025,
    "file":"papers/form3/physics/aru_2025.pdf",
    "markingScheme":""
},
{
    "form":"form3",
    "subject":"physics",
    "title":"Physics Joint Exam",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form3/physics/mby_2026.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 3 - CHEMISTRY
// ============================================================
{
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form3/chemistry/dsm_2026.pdf",
    "markingScheme":""
},
{
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form3/chemistry/dsm_2025.pdf",
    "markingScheme":""
},
{
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form3/chemistry/dsm_2024.pdf",
    "markingScheme":""
},
{
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2023,
    "file":"papers/form3/chemistry/dsm_2023.pdf",
    "markingScheme":""
},
{
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Midterm Exam",
    "type":"midterm",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form3/chemistry/dom_2026.pdf",
    "markingScheme":""
},
{
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Terminal Exam",
    "type":"terminal",
    "region":"arusha",
    "year":2025,
    "file":"papers/form3/chemistry/aru_2025.pdf",
    "markingScheme":""
},
{
    "form":"form3",
    "subject":"chemistry",
    "title":"Chemistry Joint Exam",
    "type":"joint",
    "region":"mbeya",
    "year":2026,
    "file":"papers/form3/chemistry/mby_2026.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 3 - BIOLOGY
// ============================================================
{
    "form":"form3",
    "subject":"biology",
    "title":"Biology Annual Exam",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form3/biology/dsm_2026.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 4 - PHYSICS
// ============================================================
{
    "form":"form4",
    "subject":"physics",
    "title":"Physics 1",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phys1&Marking_scheme_GEPAM_hub.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"physics",
    "title":"Physics 2A",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phy2A&Marking_scheme_GEPAM_hub.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"physics",
    "title":"Physics 2B",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phy2B&Marking_scheme_GEPAM_hub.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"physics",
    "title":"Physics Joint Examination",
    "type":"joint",
    "region":"arusha",
    "year":2026,
    "file":"papers/form4/physics/joint/arusha/2026/physics_joint_2026.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"physics",
    "title":"Physics Joint Examination",
    "type":"joint",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form4/physics/joint/dodoma/2026/physics_joint_2026.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"physics",
    "title":"Physics Pre-NECTA Examination",
    "type":"pre_necta",
    "region":"arusha",
    "year":2026,
    "file":"papers/form4/physics/pre_necta/arusha/2026/physics_prenecta_2026.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"physics",
    "title":"Physics Pre-NECTA Examination",
    "type":"pre_necta",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form4/physics/pre_necta/dodoma/2026/physics_prenecta_2026.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"physics",
    "title":"Physics 1",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form4/physics/necta/2025/F4_necta_2025_phy1.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"physics",
    "title":"Physics 2A",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form4/physics/necta/2025/F4_necta_2025_phy2a.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"physics",
    "title":"Physics NECTA Examination",
    "type":"necta",
    "region":"necta",
    "year":2024,
    "file":"papers/form4/physics/necta/2024/physics_2024.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"physics",
    "title":"Physics NECTA Examination",
    "type":"necta",
    "region":"necta",
    "year":2023,
    "file":"papers/form4/physics/necta/2023/physics_2023.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 4 - CHEMISTRY
// ============================================================
{
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry Mock Examination",
    "type":"mock",
    "region":"arusha",
    "year":2026,
    "file":"papers/form4/chemistry/mock/arusha/2026/chemistry_mock_2026.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry Mock Examination",
    "type":"mock",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form4/chemistry/mock/dodoma/2026/chemistry_mock_2026.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry Joint Examination",
    "type":"joint",
    "region":"arusha",
    "year":2026,
    "file":"papers/form4/chemistry/joint/arusha/2026/chemistry_joint_2026.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry Joint Examination",
    "type":"joint",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form4/chemistry/joint/dodoma/2026/chemistry_joint_2026.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry Pre-NECTA Examination",
    "type":"pre_necta",
    "region":"arusha",
    "year":2026,
    "file":"papers/form4/chemistry/pre_necta/arusha/2026/chemistry_prenecta_2026.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry Pre-NECTA Examination",
    "type":"pre_necta",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form4/chemistry/pre_necta/dodoma/2026/chemistry_prenecta_2026.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry 1",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form4/chemistry/necta/2025/F4_necta_2025_chem1.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry 2A",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form4/chemistry/necta/2025/F4_necta_2025_chem2a.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry NECTA Examination",
    "type":"necta",
    "region":"necta",
    "year":2024,
    "file":"papers/form4/chemistry/necta/2024/chemistry_2024.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"chemistry",
    "title":"Chemistry NECTA Examination",
    "type":"necta",
    "region":"necta",
    "year":2023,
    "file":"papers/form4/chemistry/necta/2023/chemistry_2023.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 4 - BIOLOGY
// ============================================================
{
    "form":"form4",
    "subject":"biology",
    "title":"Biology 1 Mock",
    "type":"mock",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form4/biology/mock/dar_es_salaam/2025/biology_mock_2025.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"biology",
    "title":"Biology Pre-NECTA Examination",
    "type":"pre_necta",
    "region":"arusha",
    "year":2026,
    "file":"papers/form4/biology/pre_necta/arusha/2026/biology_prenecta_2026.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"biology",
    "title":"Biology 1",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form4/biology/necta/2025/F4_necta_2025_bio1.pdf",
    "markingScheme":""
},
{
    "form":"form4",
    "subject":"biology",
    "title":"Biology NECTA Examination",
    "type":"necta",
    "region":"necta",
    "year":2024,
    "file":"papers/form4/biology/necta/2024/biology_2024.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 5 - PHYSICS
// ============================================================
{
    "form":"form5",
    "subject":"physics",
    "title":"Physics Annual Examination",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form5/physics/dsm_2026.pdf",
    "markingScheme":""
},
{
    "form":"form5",
    "subject":"physics",
    "title":"Physics Annual Examination",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form5/physics/dsm_2025.pdf",
    "markingScheme":""
},
{
    "form":"form5",
    "subject":"physics",
    "title":"Physics Annual Examination",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2024,
    "file":"papers/form5/physics/dsm_2024.pdf",
    "markingScheme":""
},
{
    "form":"form5",
    "subject":"physics",
    "title":"Physics Annual Examination",
    "type":"annual",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form5/physics/dom_2026.pdf",
    "markingScheme":""
},
{
    "form":"form5",
    "subject":"physics",
    "title":"Physics Joint Examination",
    "type":"joint",
    "region":"arusha",
    "year":2026,
    "file":"papers/form5/physics/aru_2026.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 5 - CHEMISTRY
// ============================================================
{
    "form":"form5",
    "subject":"chemistry",
    "title":"Chemistry Annual Examination",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form5/chemistry/dsm_2026.pdf",
    "markingScheme":""
},
{
    "form":"form5",
    "subject":"chemistry",
    "title":"Chemistry Annual Examination",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2025,
    "file":"papers/form5/chemistry/dsm_2025.pdf",
    "markingScheme":""
},
{
    "form":"form5",
    "subject":"chemistry",
    "title":"Chemistry Annual Examination",
    "type":"annual",
    "region":"dodoma",
    "year":2026,
    "file":"papers/form5/chemistry/dom_2026.pdf",
    "markingScheme":""
},
{
    "form":"form5",
    "subject":"chemistry",
    "title":"Chemistry Joint Examination",
    "type":"joint",
    "region":"arusha",
    "year":2026,
    "file":"papers/form5/chemistry/aru_2026.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 5 - BIOLOGY
// ============================================================
{
    "form":"form5",
    "subject":"biology",
    "title":"Biology Annual Examination",
    "type":"annual",
    "region":"dar_es_salaam",
    "year":2026,
    "file":"papers/form5/biology/dsm_2026.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 6 - PHYSICS
// ============================================================
{
    "form":"form6",
    "subject":"physics",
    "title":"Physics 1 (Theory)",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/physics/necta/2025/F6_necta_2025_phy1.pdf",
    "markingScheme":""
},
{
    "form":"form6",
    "subject":"physics",
    "title":"Physics 2",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/physics/necta/2025/F6_necta_2025_phy2.pdf",
    "markingScheme":""
},
{
    "form":"form6",
    "subject":"physics",
    "title":"Physics 3A",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/physics/necta/2025/F6_necta_2025_phy3a.pdf",
    "markingScheme":""
},
{
    "form":"form6",
    "subject":"physics",
    "title":"Physics 3B",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/physics/necta/2025/F6_necta_2025_phy3b.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 6 - CHEMISTRY
// ============================================================
{
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 1 (Theory)",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/chemistry/necta/2025/F6_necta_2025_chem1.pdf",
    "markingScheme":""
},
{
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 2",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/chemistry/necta/2025/F6_necta_2025_chem2.pdf",
    "markingScheme":""
},
{
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 3A",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/chemistry/necta/2025/F6_necta_2025_chem3a.pdf",
    "markingScheme":""
},
{
    "form":"form6",
    "subject":"chemistry",
    "title":"Chemistry 3B",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/chemistry/necta/2025/F6_necta_2025_chem3b.pdf",
    "markingScheme":""
},
// ============================================================
// FORM 6 - BIOLOGY
// ============================================================
{
    "form":"form6",
    "subject":"biology",
    "title":"Biology 1",
    "type":"necta",
    "region":"necta",
    "year":2025,
    "file":"papers/form6/biology/necta/2025/F6_necta_2025_bio1.pdf",
    "markingScheme":""
},
// ============================================================
// SPECIAL EXAMINATIONS
// ============================================================
{
    "category":"special",
    "specialExam":"isese",
    "title":"ISESE - Series One",
    "type":"series",
    "series":"series1",
    "seriesName":"Series One",
    "file":"papers/special/isese/series_one.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"isese",
    "title":"ISESE - Series Two",
    "type":"series",
    "series":"series2",
    "seriesName":"Series Two",
    "file":"papers/special/isese/series_two.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"isese",
    "title":"ISESE - Series Three",
    "type":"series",
    "series":"series3",
    "seriesName":"Series Three",
    "file":"papers/special/isese/series_three.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"isese",
    "title":"ISESE - Series Four",
    "type":"series",
    "series":"series4",
    "seriesName":"Series Four",
    "file":"papers/special/isese/series_four.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"jepgos",
    "title":"JEPGOS - Series One",
    "type":"series",
    "series":"series1",
    "seriesName":"Series One",
    "file":"papers/special/jepgos/series_one.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"jepgos",
    "title":"JEPGOS - Series Two",
    "type":"series",
    "series":"series2",
    "seriesName":"Series Two",
    "file":"papers/special/jepgos/series_two.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"jepgos",
    "title":"JEPGOS - Series Three",
    "type":"series",
    "series":"series3",
    "seriesName":"Series Three",
    "file":"papers/special/jepgos/series_three.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"jepgos",
    "title":"JEPGOS - Series Four",
    "type":"series",
    "series":"series4",
    "seriesName":"Series Four",
    "file":"papers/special/jepgos/series_four.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"tahossa",
    "title":"TAHOSSA - Series One",
    "type":"series",
    "series":"series1",
    "seriesName":"Series One",
    "file":"papers/special/tahossa/series_one.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"tahossa",
    "title":"TAHOSSA - Series Two",
    "type":"series",
    "series":"series2",
    "seriesName":"Series Two",
    "file":"papers/special/tahossa/series_two.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"tahossa",
    "title":"TAHOSSA - Series Three",
    "type":"series",
    "series":"series3",
    "seriesName":"Series Three",
    "file":"papers/special/tahossa/series_three.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"tahossa",
    "title":"TAHOSSA - Series Four",
    "type":"series",
    "series":"series4",
    "seriesName":"Series Four",
    "file":"papers/special/tahossa/series_four.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"cssc",
    "title":"CSSC - Series One",
    "type":"series",
    "series":"series1",
    "seriesName":"Series One",
    "file":"papers/special/cssc/series_one.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"cssc",
    "title":"CSSC - Series Two",
    "type":"series",
    "series":"series2",
    "seriesName":"Series Two",
    "file":"papers/special/cssc/series_two.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"cssc",
    "title":"CSSC - Series Three",
    "type":"series",
    "series":"series3",
    "seriesName":"Series Three",
    "file":"papers/special/cssc/series_three.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"cssc",
    "title":"CSSC - Series Four",
    "type":"series",
    "series":"series4",
    "seriesName":"Series Four",
    "file":"papers/special/cssc/series_four.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"special_school",
    "title":"Special School - Series One",
    "type":"series",
    "series":"series1",
    "seriesName":"Series One",
    "file":"papers/special/special_school/series_one.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"special_school",
    "title":"Special School - Series Two",
    "type":"series",
    "series":"series2",
    "seriesName":"Series Two",
    "file":"papers/special/special_school/series_two.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"special_school",
    "title":"Special School - Series Three",
    "type":"series",
    "series":"series3",
    "seriesName":"Series Three",
    "file":"papers/special/special_school/series_three.pdf",
    "markingScheme":""
},
{
    "category":"special",
    "specialExam":"special_school",
    "title":"Special School - Series Four",
    "type":"series",
    "series":"series4",
    "seriesName":"Series Four",
    "file":"papers/special/special_school/series_four.pdf",
    "markingScheme":""
}
];

// MAKE DATABASE AVAILABLE TO pastpapers.html
window.pastPapers = pastPapers;
window.pastPaperRegions = pastPaperRegions;
window.pastPaperYears = pastPaperYears;
window.pastPaperSubjects = pastPaperSubjects;
window.specialExaminations = specialExaminations;
