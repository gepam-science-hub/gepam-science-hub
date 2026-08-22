// ============================================================
// GEPAM SCIENCE HUB - PAST PAPERS DATABASE
// FORM 1 - FORM 6
// PHYSICS + CHEMISTRY + BIOLOGY
//
// SYSTEM:
// 1. NECTA / FTNA       -> National
// 2. ISESE              -> Series / Organiser
// 3. SCHOOL             -> Specific School
// 4. JOINT              -> District / Zone / Association
// 5. REGIONAL           -> Region
// 6. MOCK               -> Region / Zone / District / School
// 7. PRE-NECTA          -> Region / Zone / School / Association
// 8. MIDTERM            -> School / District / Region
// 9. TERMINAL           -> School / District / Region
// 10. ANNUAL            -> School / District / Region
// 11. MONTHLY           -> Specific School
// 12. SPECIAL           -> Special Schools / Association
//
// IMPORTANT:
// "school" papers are NOT treated as regional papers.
// ============================================================



// ============================================================
// REGIONS
// ============================================================

const pastPaperRegions = [

    { id: "arusha", name: "Arusha" },

    { id: "dar_es_salaam", name: "Dar es Salaam" },

    { id: "dodoma", name: "Dodoma" },

    { id: "geita", name: "Geita" },

    { id: "iringa", name: "Iringa" },

    { id: "kagera", name: "Kagera" },

    { id: "katavi", name: "Katavi" },

    { id: "kigoma", name: "Kigoma" },

    { id: "kilimanjaro", name: "Kilimanjaro" },

    { id: "lindi", name: "Lindi" },

    { id: "manyara", name: "Manyara" },

    { id: "mara", name: "Mara" },

    { id: "mbeya", name: "Mbeya" },

    { id: "morogoro", name: "Morogoro" },

    { id: "mtwara", name: "Mtwara" },

    { id: "mwanza", name: "Mwanza" },

    { id: "njombe", name: "Njombe" },

    { id: "pwani", name: "Pwani" },

    { id: "rukwa", name: "Rukwa" },

    { id: "ruvuma", name: "Ruvuma" },

    { id: "shinyanga", name: "Shinyanga" },

    { id: "simiyu", name: "Simiyu" },

    { id: "singida", name: "Singida" },

    { id: "songwe", name: "Songwe" },

    { id: "tabora", name: "Tabora" },

    { id: "tanga", name: "Tanga" },

    { id: "zanzibar", name: "Zanzibar" }

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
// PAPER TYPES
// ============================================================

const pastPaperTypes = [

    {
        id: "monthly",
        name: "Monthly Test",
        scope: "school"
    },

    {
        id: "midterm",
        name: "Midterm Examination",
        scope: "school_or_joint"
    },

    {
        id: "terminal",
        name: "Terminal Examination",
        scope: "school_or_joint"
    },

    {
        id: "annual",
        name: "Annual Examination",
        scope: "school_or_joint"
    },

    {
        id: "joint",
        name: "Joint Examination",
        scope: "joint"
    },

    {
        id: "mock",
        name: "Mock Examination",
        scope: "regional_or_zone_or_school"
    },

    {
        id: "pre_mock",
        name: "Pre-Mock Examination",
        scope: "regional_or_zone_or_school"
    },

    {
        id: "pre_necta",
        name: "Pre-NECTA Examination",
        scope: "regional_or_zone_or_school"
    },

    {
        id: "isese",
        name: "ISESE",
        scope: "series"
    },

    {
        id: "special",
        name: "Special Examination",
        scope: "association_or_school"
    },

    {
        id: "association",
        name: "Association Examination",
        scope: "association"
    },

    {
        id: "syndicate",
        name: "Syndicate Examination",
        scope: "association"
    },

    {
        id: "opening_test",
        name: "Opening Test",
        scope: "school_or_series"
    },

    {
        id: "competence",
        name: "Competence Examination",
        scope: "association"
    },

    {
        id: "ftna",
        name: "FTNA",
        scope: "national"
    },

    {
        id: "necta",
        name: "NECTA",
        scope: "national"
    }

];



// ============================================================
// SUBJECTS
// ============================================================

const pastPaperSubjects = [

    {
        id: "physics",
        name: "Physics"
    },

    {
        id: "chemistry",
        name: "Chemistry"
    },

    {
        id: "biology",
        name: "Biology"
    }

];



// ============================================================
// HELPER FORMAT
// ============================================================
//
// scope:
// "national"
// "region"
// "district"
// "school"
// "series"
// "association"
// "zone"
//
// school:
// Specific school name if applicable.
//
// organiser:
// Organisation / district / zone / association.
//
// series:
// ISESE S01, S02 etc.
//
// paper:
// Paper 1, 2A, 2B, 3A, 3B etc.
//
// ============================================================



const pastPapers = [

    // ========================================================
    // FORM 1 - PHYSICS
    // ========================================================

    {
        form: "form1",
        subject: "physics",
        title: "Physics Midterm Examination",
        type: "midterm",
        scope: "region",
        region: "dodoma",
        year: 2026,
        file: "papers/form1/physics/dom_2026.pdf"
    },

    {
        form: "form1",
        subject: "physics",
        title: "Physics Terminal Examination",
        type: "terminal",
        scope: "region",
        region: "arusha",
        year: 2025,
        file: "papers/form1/physics/aru_2025.pdf"
    },

    {
        form: "form1",
        subject: "physics",
        title: "Physics Joint Examination",
        type: "joint",
        scope: "region",
        region: "mbeya",
        year: 2026,
        file: "papers/form1/physics/mby_2026.pdf"
    },

    {
        form: "form1",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "region",
        region: "dar_es_salaam",
        year: 2026,
        file: "papers/form1/physics/dsm_2026.pdf"
    },

    {
        form: "form1",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "region",
        region: "dar_es_salaam",
        year: 2025,
        file: "papers/form1/physics/dsm_2025.pdf"
    },



    // ========================================================
    // FORM 1 - CHEMISTRY
    // ========================================================

    {
        form: "form1",
        subject: "chemistry",
        title: "Chemistry Midterm Examination",
        type: "midterm",
        scope: "region",
        region: "dodoma",
        year: 2026,
        file: "papers/form1/chemistry/dom_2026.pdf"
    },

    {
        form: "form1",
        subject: "chemistry",
        title: "Chemistry Terminal Examination",
        type: "terminal",
        scope: "region",
        region: "arusha",
        year: 2025,
        file: "papers/form1/chemistry/aru_2025.pdf"
    },

    {
        form: "form1",
        subject: "chemistry",
        title: "Chemistry Joint Examination",
        type: "joint",
        scope: "region",
        region: "mbeya",
        year: 2026,
        file: "papers/form1/chemistry/mby_2026.pdf"
    },

    {
        form: "form1",
        subject: "chemistry",
        title: "Chemistry Annual Examination",
        type: "annual",
        scope: "region",
        region: "dar_es_salaam",
        year: 2026,
        file: "papers/form1/chemistry/dsm_2026.pdf"
    },



    // ========================================================
    // FORM 1 - BIOLOGY
    // ========================================================
    // Biology imeongezwa.
    // PDF halisi zitaongezwa hapa.
    // ========================================================



    // ========================================================
    // FORM 2 - PHYSICS
    // ========================================================

    {
        form: "form2",
        subject: "physics",
        title: "Physics FTNA Examination",
        type: "ftna",
        scope: "national",
        region: "necta",
        year: 2026,
        file: "papers/form2/physics/necta_2026.pdf"
    },

    {
        form: "form2",
        subject: "physics",
        title: "Physics FTNA Examination",
        type: "ftna",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form2/physics/necta/2025/F2_Physics_Necta_2025-Gepam_Hub.pdf"
    },

    {
        form: "form2",
        subject: "physics",
        title: "Physics Midterm Examination",
        type: "midterm",
        scope: "region",
        region: "dodoma",
        year: 2026,
        file: "papers/form2/physics/dom_2026.pdf"
    },

    {
        form: "form2",
        subject: "physics",
        title: "Physics Terminal Examination",
        type: "terminal",
        scope: "region",
        region: "arusha",
        year: 2025,
        file: "papers/form2/physics/aru_2025.pdf"
    },

    {
        form: "form2",
        subject: "physics",
        title: "Physics Joint Examination",
        type: "joint",
        scope: "region",
        region: "mbeya",
        year: 2026,
        file: "papers/form2/physics/mby_2026.pdf"
    },



    // ========================================================
    // FORM 2 - CHEMISTRY
    // ========================================================

    {
        form: "form2",
        subject: "chemistry",
        title: "Chemistry FTNA Examination",
        type: "ftna",
        scope: "national",
        region: "necta",
        year: 2026,
        file: "papers/form2/chemistry/necta_2026.pdf"
    },

    {
        form: "form2",
        subject: "chemistry",
        title: "Chemistry FTNA Examination",
        type: "ftna",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form2/chemistry/necta/2025/F2_Chemistry_Necta_2025-Gepam_Hub.pdf"
    },

    {
        form: "form2",
        subject: "chemistry",
        title: "Chemistry Midterm Examination",
        type: "midterm",
        scope: "region",
        region: "dodoma",
        year: 2026,
        file: "papers/form2/chemistry/dom_2026.pdf"
    },

    {
        form: "form2",
        subject: "chemistry",
        title: "Chemistry Terminal Examination",
        type: "terminal",
        scope: "region",
        region: "arusha",
        year: 2025,
        file: "papers/form2/chemistry/aru_2025.pdf"
    },



    // ========================================================
    // FORM 2 - BIOLOGY
    // ========================================================
    // ISESE inaweza kutumika kwa Form 2 Biology.
    // Source verification: ISESE Form Two 2026 ina Biology,
    // Chemistry na Physics.
    // ========================================================

    {
        form: "form2",
        subject: "biology",
        title: "Biology ISESE Series 01",
        type: "isese",
        scope: "series",
        organiser: "ISESE",
        series: "S01",
        year: 2026,
        file: "papers/form2/biology/isese/2026/S01/biology.pdf"
    },

    {
        form: "form2",
        subject: "chemistry",
        title: "Chemistry ISESE Series 01",
        type: "isese",
        scope: "series",
        organiser: "ISESE",
        series: "S01",
        year: 2026,
        file: "papers/form2/chemistry/isese/2026/S01/chemistry.pdf"
    },

    {
        form: "form2",
        subject: "physics",
        title: "Physics ISESE Opening Test",
        type: "opening_test",
        scope: "series",
        organiser: "ISESE",
        series: "Opening Test",
        year: 2026,
        file: "papers/form2/physics/isese/2026/opening-test/physics.pdf"
    },



    // ========================================================
    // FORM 3 - PHYSICS
    // ========================================================

    {
        form: "form3",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "region",
        region: "dar_es_salaam",
        year: 2026,
        file: "papers/form3/physics/dsm_2026.pdf"
    },

    {
        form: "form3",
        subject: "physics",
        title: "Physics Midterm Examination",
        type: "midterm",
        scope: "region",
        region: "dodoma",
        year: 2026,
        file: "papers/form3/physics/dom_2026.pdf"
    },

    {
        form: "form3",
        subject: "physics",
        title: "Physics Terminal Examination",
        type: "terminal",
        scope: "region",
        region: "arusha",
        year: 2025,
        file: "papers/form3/physics/aru_2025.pdf"
    },

    {
        form: "form3",
        subject: "physics",
        title: "Physics Joint Examination",
        type: "joint",
        scope: "region",
        region: "mbeya",
        year: 2026,
        file: "papers/form3/physics/mby_2026.pdf"
    },



    // ========================================================
    // FORM 3 - CHEMISTRY
    // ========================================================

    {
        form: "form3",
        subject: "chemistry",
        title: "Chemistry Annual Examination",
        type: "annual",
        scope: "region",
        region: "dar_es_salaam",
        year: 2026,
        file: "papers/form3/chemistry/dsm_2026.pdf"
    },

    {
        form: "form3",
        subject: "chemistry",
        title: "Chemistry Midterm Examination",
        type: "midterm",
        scope: "region",
        region: "dodoma",
        year: 2026,
        file: "papers/form3/chemistry/dom_2026.pdf"
    },

    {
        form: "form3",
        subject: "chemistry",
        title: "Chemistry Terminal Examination",
        type: "terminal",
        scope: "region",
        region: "arusha",
        year: 2025,
        file: "papers/form3/chemistry/aru_2025.pdf"
    },



    // ========================================================
    // FORM 3 - BIOLOGY
    // ========================================================

    {
        form: "form3",
        subject: "biology",
        title: "Biology Midterm Examination",
        type: "midterm",
        scope: "school",
        school: "SCHOOL_NAME_HERE",
        year: 2026,
        file: "papers/form3/biology/school/2026/biology.pdf"
    },

    {
        form: "form3",
        subject: "biology",
        title: "Biology Monthly Test",
        type: "monthly",
        scope: "school",
        school: "SCHOOL_NAME_HERE",
        year: 2026,
        file: "papers/form3/biology/monthly/2026/biology.pdf"
    },



    // ========================================================
    // FORM 4 - PHYSICS
    // PAPER 1 / 2A / 2B
    // ========================================================

    {
        form: "form4",
        subject: "physics",
        title: "Physics 1",
        paper: "1",
        type: "mock",
        scope: "region",
        region: "dar_es_salaam",
        year: 2025,
        file: "papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phys1&Marking_scheme_GEPAM_hub.pdf"
    },

    {
        form: "form4",
        subject: "physics",
        title: "Physics 2A",
        paper: "2A",
        type: "mock",
        scope: "region",
        region: "dar_es_salaam",
        year: 2025,
        file: "papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phy2A&Marking_scheme_GEPAM_hub.pdf"
    },

    {
        form: "form4",
        subject: "physics",
        title: "Physics 2B",
        paper: "2B",
        type: "mock",
        scope: "region",
        region: "dar_es_salaam",
        year: 2025,
        file: "papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phy2B&Marking_scheme_GEPAM_hub.pdf"
    },

    {
        form: "form4",
        subject: "physics",
        title: "Physics Joint Examination",
        type: "joint",
        scope: "region",
        region: "arusha",
        year: 2026,
        file: "papers/form4/physics/joint/arusha/2026/physics_joint_2026.pdf"
    },

    {
        form: "form4",
        subject: "physics",
        title: "Physics Joint Examination",
        type: "joint",
        scope: "region",
        region: "dodoma",
        year: 2026,
        file: "papers/form4/physics/joint/dodoma/2026/physics_joint_2026.pdf"
    },

    {
        form: "form4",
        subject: "physics",
        title: "Physics Pre-NECTA Examination",
        type: "pre_necta",
        scope: "region",
        region: "arusha",
        year: 2026,
        file: "papers/form4/physics/pre_necta/arusha/2026/physics_prenecta_2026.pdf"
    },

    {
        form: "form4",
        subject: "physics",
        title: "Physics Pre-NECTA Examination",
        type: "pre_necta",
        scope: "region",
        region: "dodoma",
        year: 2026,
        file: "papers/form4/physics/pre_necta/dodoma/2026/physics_prenecta_2026.pdf"
    },

    {
        form: "form4",
        subject: "physics",
        title: "Physics 1",
        paper: "1",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form4/physics/necta/2025/F4_necta_2025_phy1.pdf"
    },

    {
        form: "form4",
        subject: "physics",
        title: "Physics 2A",
        paper: "2A",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form4/physics/necta/2025/F4_necta_2025_phy2a.pdf"
    },



    // ========================================================
    // FORM 4 - CHEMISTRY
    // ========================================================

    {
        form: "form4",
        subject: "chemistry",
        title: "Chemistry 1",
        paper: "1",
        type: "mock",
        scope: "region",
        region: "arusha",
        year: 2026,
        file: "papers/form4/chemistry/mock/arusha/2026/chemistry_mock_2026.pdf"
    },

    {
        form: "form4",
        subject: "chemistry",
        title: "Chemistry 1",
        paper: "1",
        type: "mock",
        scope: "region",
        region: "dodoma",
        year: 2026,
        file: "papers/form4/chemistry/mock/dodoma/2026/chemistry_mock_2026.pdf"
    },

    {
        form: "form4",
        subject: "chemistry",
        title: "Chemistry Joint Examination",
        type: "joint",
        scope: "region",
        region: "arusha",
        year: 2026,
        file: "papers/form4/chemistry/joint/arusha/2026/chemistry_joint_2026.pdf"
    },

    {
        form: "form4",
        subject: "chemistry",
        title: "Chemistry Pre-NECTA Examination",
        type: "pre_necta",
        scope: "region",
        region: "arusha",
        year: 2026,
        file: "papers/form4/chemistry/pre_necta/arusha/2026/chemistry_prenecta_2026.pdf"
    },

    {
        form: "form4",
        subject: "chemistry",
        title: "Chemistry 1",
        paper: "1",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form4/chemistry/necta/2025/F4_necta_2025_chem1.pdf"
    },

    {
        form: "form4",
        subject: "chemistry",
        title: "Chemistry 2A",
        paper: "2A",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form4/chemistry/necta/2025/F4_necta_2025_chem2a.pdf"
    },



    // ========================================================
    // FORM 4 - BIOLOGY
    // PAPER 1 / 2A / 2B
    // ========================================================

    {
        form: "form4",
        subject: "biology",
        title: "Biology 1",
        paper: "1",
        type: "isese",
        scope: "series",
        organiser: "ISESE",
        series: "S01",
        year: 2026,
        file: "papers/form4/biology/isese/2026/S01/biology1.pdf"
    },

    {
        form: "form4",
        subject: "biology",
        title: "Biology 1",
        paper: "1",
        type: "mock",
        scope: "school",
        school: "SCHOOL_NAME_HERE",
        year: 2026,
        file: "papers/form4/biology/mock/school/2026/biology1.pdf"
    },

    {
        form: "form4",
        subject: "biology",
        title: "Biology 2A",
        paper: "2A",
        type: "mock",
        scope: "school",
        school: "SCHOOL_NAME_HERE",
        year: 2026,
        file: "papers/form4/biology/mock/school/2026/biology2a.pdf"
    },

    {
        form: "form4",
        subject: "biology",
        title: "Biology 2B",
        paper: "2B",
        type: "mock",
        scope: "school",
        school: "SCHOOL_NAME_HERE",
        year: 2026,
        file: "papers/form4/biology/mock/school/2026/biology2b.pdf"
    },



    // ========================================================
    // FORM 4 - ISESE
    // ========================================================

    {
        form: "form4",
        subject: "physics",
        title: "Physics 1 ISESE Series 01",
        paper: "1",
        type: "isese",
        scope: "series",
        organiser: "ISESE",
        series: "S01",
        year: 2026,
        file: "papers/form4/physics/isese/2026/S01/physics1.pdf"
    },

    {
        form: "form4",
        subject: "chemistry",
        title: "Chemistry 1 ISESE Series 01",
        paper: "1",
        type: "isese",
        scope: "series",
        organiser: "ISESE",
        series: "S01",
        year: 2026,
        file: "papers/form4/chemistry/isese/2026/S01/chemistry1.pdf"
    },

    {
        form: "form4",
        subject: "biology",
        title: "Biology 1 ISESE Series 01",
        paper: "1",
        type: "isese",
        scope: "series",
        organiser: "ISESE",
        series: "S01",
        year: 2026,
        file: "papers/form4/biology/isese/2026/S01/biology1.pdf"
    },



    // ========================================================
    // FORM 5 - PHYSICS
    // ========================================================

    {
        form: "form5",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "region",
        region: "dar_es_salaam",
        year: 2026,
        file: "papers/form5/physics/dsm_2026.pdf"
    },

    {
        form: "form5",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "region",
        region: "dar_es_salaam",
        year: 2025,
        file: "papers/form5/physics/dsm_2025.pdf"
    },

    {
        form: "form5",
        subject: "physics",
        title: "Physics Joint Examination",
        type: "joint",
        scope: "region",
        region: "arusha",
        year: 2026,
        file: "papers/form5/physics/aru_2026.pdf"
    },



    // ========================================================
    // FORM 5 - CHEMISTRY
    // ========================================================

    {
        form: "form5",
        subject: "chemistry",
        title: "Chemistry Annual Examination",
        type: "annual",
        scope: "region",
        region: "dar_es_salaam",
        year: 2026,
        file: "papers/form5/chemistry/dsm_2026.pdf"
    },

    {
        form: "form5",
        subject: "chemistry",
        title: "Chemistry Annual Examination",
        type: "annual",
        scope: "region",
        region: "dar_es_salaam",
        year: 2025,
        file: "papers/form5/chemistry/dsm_2025.pdf"
    },

    {
        form: "form5",
        subject: "chemistry",
        title: "Chemistry Joint Examination",
        type: "joint",
        scope: "region",
        region: "arusha",
        year: 2026,
        file: "papers/form5/chemistry/aru_2026.pdf"
    },



    // ========================================================
    // FORM 5 - BIOLOGY
    // ========================================================

    {
        form: "form5",
        subject: "biology",
        title: "Biology Monthly Test",
        type: "monthly",
        scope: "school",
        school: "SCHOOL_NAME_HERE",
        year: 2026,
        file: "papers/form5/biology/monthly/2026/biology.pdf"
    },

    {
        form: "form5",
        subject: "biology",
        title: "Biology Annual Examination",
        type: "annual",
        scope: "school",
        school: "SCHOOL_NAME_HERE",
        year: 2026,
        file: "papers/form5/biology/annual/2026/biology.pdf"
    },



    // ========================================================
    // FORM 6 - PHYSICS
    // PAPER 1 / 2 / 3A / 3B
    // ========================================================

    {
        form: "form6",
        subject: "physics",
        title: "Physics 1 (Theory)",
        paper: "1",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form6/physics/necta/2025/F6_necta_2025_phy1.pdf"
    },

    {
        form: "form6",
        subject: "physics",
        title: "Physics 2",
        paper: "2",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form6/physics/necta/2025/F6_necta_2025_phy2.pdf"
    },

    {
        form: "form6",
        subject: "physics",
        title: "Physics 3A",
        paper: "3A",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form6/physics/necta/2025/F6_necta_2025_phy3a.pdf"
    },

    {
        form: "form6",
        subject: "physics",
        title: "Physics 3B",
        paper: "3B",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form6/physics/necta/2025/F6_necta_2025_phy3b.pdf"
    },



    // ========================================================
    // FORM 6 - CHEMISTRY
    // ========================================================

    {
        form: "form6",
        subject: "chemistry",
        title: "Chemistry 1 (Theory)",
        paper: "1",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form6/chemistry/necta/2025/F6_necta_2025_chem1.pdf"
    },

    {
        form: "form6",
        subject: "chemistry",
        title: "Chemistry 2",
        paper: "2",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form6/chemistry/necta/2025/F6_necta_2025_chem2.pdf"
    },

    {
        form: "form6",
        subject: "chemistry",
        title: "Chemistry 3A",
        paper: "3A",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form6/chemistry/necta/2025/F6_necta_2025_chem3a.pdf"
    },

    {
        form: "form6",
        subject: "chemistry",
        title: "Chemistry 3B",
        paper: "3B",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form6/chemistry/necta/2025/F6_necta_2025_chem3b.pdf"
    },



    // ========================================================
    // FORM 6 - BIOLOGY
    // PAPER 1 / 2 / 3
    // ========================================================

    {
        form: "form6",
        subject: "biology",
        title: "Biology 1",
        paper: "1",
        type: "isese",
        scope: "series",
        organiser: "ISESE",
        series: "S01",
        year: 2025,
        file: "papers/form6/biology/isese/2025/S01/biology1.pdf"
    },

    {
        form: "form6",
        subject: "biology",
        title: "Biology 2",
        paper: "2",
        type: "isese",
        scope: "series",
        organiser: "ISESE",
        series: "S01",
        year: 2025,
        file: "papers/form6/biology/isese/2025/S01/biology2.pdf"
    },

    {
        form: "form6",
        subject: "biology",
        title: "Biology 1",
        paper: "1",
        type: "special",
        scope: "association",
        organiser: "Special Schools",
        year: 2025,
        file: "papers/form6/biology/special-schools/2025/biology1.pdf"
    },

    {
        form: "form6",
        subject: "biology",
        title: "Biology 2",
        paper: "2",
        type: "special",
        scope: "association",
        organiser: "Special Schools",
        year: 2025,
        file: "papers/form6/biology/special-schools/2025/biology2.pdf"
    },



    // ========================================================
    // SCHOOL-BASED EXAMINATION EXAMPLES
    // ========================================================
    //
    // HIZI NDIZO MUUNDO TUNAOITAKA:
    //
    // SCHOOL -> sio REGION
    //
    // Utabadilisha SCHOOL_NAME_HERE kuwa jina la shule
    // na kuweka path ya PDF halisi.
    //
    // ========================================================

    {
        form: "form1",
        subject: "biology",
        title: "Biology Monthly Test",
        type: "monthly",
        scope: "school",
        school: "SCHOOL_NAME_HERE",
        year: 2026,
        file: "papers/form1/biology/monthly/2026/biology.pdf"
    },

    {
        form: "form2",
        subject: "biology",
        title: "Biology Terminal Examination",
        type: "terminal",
        scope: "school",
        school: "SCHOOL_NAME_HERE",
        year: 2026,
        file: "papers/form2/biology/terminal/2026/biology.pdf"
    },

    {
        form: "form3",
        subject: "physics",
        title: "Physics Monthly Test",
        type: "monthly",
        scope: "school",
        school: "SCHOOL_NAME_HERE",
        year: 2026,
        file: "papers/form3/physics/monthly/2026/physics.pdf"
    },

    {
        form: "form4",
        subject: "chemistry",
        title: "Chemistry Monthly Test",
        type: "monthly",
        scope: "school",
        school: "SCHOOL_NAME_HERE",
        year: 2026,
        file: "papers/form4/chemistry/monthly/2026/chemistry.pdf"
    },

    {
        form: "form5",
        subject: "biology",
        title: "Biology Midterm Examination",
        type: "midterm",
        scope: "school",
        school: "SCHOOL_NAME_HERE",
        year: 2026,
        file: "papers/form5/biology/midterm/2026/biology.pdf"
    },

    {
        form: "form6",
        subject: "physics",
        title: "Physics Monthly Test",
        type: "monthly",
        scope: "school",
        school: "SCHOOL_NAME_HERE",
        year: 2026,
        file: "papers/form6/physics/monthly/2026/physics.pdf"
    },



    // ========================================================
    // DISTRICT / JOINT EXAMINATION EXAMPLES
    // ========================================================

    {
        form: "form3",
        subject: "biology",
        title: "Biology Joint Terminal Examination",
        type: "joint",
        scope: "district",
        organiser: "Busega District Council",
        district: "busega",
        region: "simiyu",
        year: 2026,
        file: "papers/form3/biology/joint/busega/2026/biology.pdf"
    },

    {
        form: "form3",
        subject: "chemistry",
        title: "Chemistry Joint Terminal Examination",
        type: "joint",
        scope: "district",
        organiser: "Busega District Council",
        district: "busega",
        region: "simiyu",
        year: 2026,
        file: "papers/form3/chemistry/joint/busega/2026/chemistry.pdf"
    },

    {
        form: "form3",
        subject: "physics",
        title: "Physics Joint Terminal Examination",
        type: "joint",
        scope: "district",
        organiser: "Busega District Council",
        district: "busega",
        region: "simiyu",
        year: 2026,
        file: "papers/form3/physics/joint/busega/2026/physics.pdf"
    },



    // ========================================================
    // SPECIAL / ASSOCIATION EXAMS
    // ========================================================

    {
        form: "form6",
        subject: "physics",
        title: "Physics Special Schools Examination",
        type: "special",
        scope: "association",
        organiser: "Special Schools",
        year: 2025,
        file: "papers/form6/physics/special-schools/2025/physics.pdf"
    },

    {
        form: "form6",
        subject: "chemistry",
        title: "Chemistry Special Schools Examination",
        type: "special",
        scope: "association",
        organiser: "Special Schools",
        year: 2025,
        file: "papers/form6/chemistry/special-schools/2025/chemistry.pdf"
    },



    // ========================================================
    // ASSOCIATION / JOINT EXAM
    // ========================================================

    {
        form: "form6",
        subject: "biology",
        title: "Biology Joint Mock Examination",
        type: "mock",
        scope: "association",
        organiser: "Association Examination",
        year: 2026,
        file: "papers/form6/biology/association/2026/biology.pdf"
    },

    {
        form: "form6",
        subject: "physics",
        title: "Physics Joint Mock Examination",
        type: "mock",
        scope: "association",
        organiser: "Association Examination",
        year: 2026,
        file: "papers/form6/physics/association/2026/physics.pdf"
    },

    {
        form: "form6",
        subject: "chemistry",
        title: "Chemistry Joint Mock Examination",
        type: "mock",
        scope: "association",
        organiser: "Association Examination",
        year: 2026,
        file: "papers/form6/chemistry/association/2026/chemistry.pdf"
    }

];



// ============================================================
// MAKE DATABASE AVAILABLE TO pastpapers.html
// ============================================================

window.pastPapers = pastPapers;

window.pastPaperRegions = pastPaperRegions;

window.pastPaperYears = pastPaperYears;

window.pastPaperTypes = pastPaperTypes;

window.pastPaperSubjects = pastPaperSubjects;
