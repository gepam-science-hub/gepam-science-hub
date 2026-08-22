// ============================================================
// GEPAM SCIENCE HUB
// PAST PAPERS MASTER DATABASE
// FORM 1 - FORM 6
// PHYSICS + CHEMISTRY + BIOLOGY
//
// SYSTEM:
// 1. SCHOOL BASED EXAMS  -> school
// 2. REGIONAL/JOIN EXAMS -> region
// 3. NATIONAL EXAMS      -> necta
//
// IMPORTANT:
// Usibuni path ya PDF.
// Weka file path halisi ya PDF iliyopo kwenye repository.
// ============================================================


/* ============================================================
   REGIONS
============================================================ */

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


/* ============================================================
   YEARS
============================================================ */

const pastPaperYears = [

    2026,
    2025,
    2024,
    2023,
    2022,
    2021,
    2020

];


/* ============================================================
   SUBJECTS
============================================================ */

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


/* ============================================================
   EXAMINATION TYPES
============================================================

   scope:

   school
   -> Exam inayotegemea shule

   region
   -> Exam inayotegemea mkoa / joint / regional

   national
   -> NECTA / FTNA

============================================================ */

const pastPaperTypes = [

    /* SCHOOL BASED */

    {
        id: "monthly",
        name: "Monthly Test",
        description: "Monthly school examination.",
        scope: "school"
    },

    {
        id: "opening",
        name: "Opening Examination",
        description: "Opening school examination.",
        scope: "school"
    },

    {
        id: "midterm",
        name: "Midterm Examination",
        description: "Midterm school examination.",
        scope: "school"
    },

    {
        id: "terminal",
        name: "Terminal Examination",
        description: "Terminal school examination.",
        scope: "school"
    },

    {
        id: "annual",
        name: "Annual Examination",
        description: "Annual school examination.",
        scope: "school"
    },

    {
        id: "internal",
        name: "Internal School Examination",
        description: "Examination prepared by an individual school.",
        scope: "school"
    },


    /* JOINT / INTER-SCHOOL */

    {
        id: "joint",
        name: "Joint Examination",
        description: "Joint examination prepared by several schools or institutions.",
        scope: "region"
    },

    {
        id: "isese",
        name: "ISESE",
        description: "Inter Secondary Schools Examination Series.",
        scope: "region"
    },

    {
        id: "jiepSS",
        name: "JIEPSS",
        description: "Joint examination series for private secondary schools.",
        scope: "region"
    },


    /* MOCK / PREPARATION */

    {
        id: "mock",
        name: "Mock Examination",
        description: "Mock examination papers.",
        scope: "region"
    },

    {
        id: "pre_mock",
        name: "Pre-Mock Examination",
        description: "Pre-mock examination papers.",
        scope: "region"
    },

    {
        id: "pre_necta",
        name: "Pre-NECTA",
        description: "Pre-NECTA examination papers.",
        scope: "region"
    },


    /* NATIONAL */

    {
        id: "ftna",
        name: "FTNA",
        description: "Form Two National Assessment examination.",
        scope: "national"
    },

    {
        id: "necta",
        name: "NECTA",
        description: "NECTA national examination papers.",
        scope: "national"
    }

];


/* ============================================================
   SCHOOL EXAMINATION DATABASE
============================================================

   HAPA NDIPO TUNATENGANISHA SCHOOL NA REGION.

   Mfano:

   school: "Jina la Shule"

   Hakuna region inayotumika kwa school-based paper.

============================================================ */

const pastPaperSchools = [

    // ========================================================
    // EXAMPLE STRUCTURE ONLY
    // ========================================================

    /*
    {
        id: "example_school",
        name: "Example Secondary School",
        region: "dodoma"
    }
    */

];


/* ============================================================
   PAST PAPERS
============================================================ */

const pastPapers = [


    // ========================================================
    // ========================================================
    // FORM 1 - PHYSICS
    // ========================================================
    // ========================================================


    {
        form: "form1",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2026,
        file: "papers/form1/physics/dsm_2026.pdf"
    },

    {
        form: "form1",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2025,
        file: "papers/form1/physics/dsm_2025.pdf"
    },

    {
        form: "form1",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2024,
        file: "papers/form1/physics/dsm_2024.pdf"
    },

    {
        form: "form1",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2023,
        file: "papers/form1/physics/dsm_2023.pdf"
    },

    {
        form: "form1",
        subject: "physics",
        title: "Physics Midterm Examination",
        type: "midterm",
        scope: "school",
        region: "dodoma",
        year: 2026,
        file: "papers/form1/physics/dom_2026.pdf"
    },

    {
        form: "form1",
        subject: "physics",
        title: "Physics Terminal Examination",
        type: "terminal",
        scope: "school",
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
        scope: "school",
        region: "kagera",
        year: 2025,
        file: "papers/form1/physics/kag_2025.pdf"
    },

    {
        form: "form1",
        subject: "physics",
        title: "Physics Midterm Examination",
        type: "midterm",
        scope: "school",
        region: "shinyanga",
        year: 2026,
        file: "papers/form1/physics/shy_2026.pdf"
    },


    // ========================================================
    // FORM 1 - CHEMISTRY
    // ========================================================


    {
        form: "form1",
        subject: "chemistry",
        title: "Chemistry Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2026,
        file: "papers/form1/chemistry/dsm_2026.pdf"
    },

    {
        form: "form1",
        subject: "chemistry",
        title: "Chemistry Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2025,
        file: "papers/form1/chemistry/dsm_2025.pdf"
    },

    {
        form: "form1",
        subject: "chemistry",
        title: "Chemistry Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2024,
        file: "papers/form1/chemistry/dsm_2024.pdf"
    },

    {
        form: "form1",
        subject: "chemistry",
        title: "Chemistry Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2023,
        file: "papers/form1/chemistry/dsm_2023.pdf"
    },

    {
        form: "form1",
        subject: "chemistry",
        title: "Chemistry Midterm Examination",
        type: "midterm",
        scope: "school",
        region: "dodoma",
        year: 2026,
        file: "papers/form1/chemistry/dom_2026.pdf"
    },

    {
        form: "form1",
        subject: "chemistry",
        title: "Chemistry Terminal Examination",
        type: "terminal",
        scope: "school",
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


    // ========================================================
    // FORM 1 - BIOLOGY
    // ========================================================
    //
    // Biology imewezeshwa hapa.
    // Weka PDF halisi utakazokuwa nazo.
    //
    // ========================================================


    /*
    {
        form: "form1",
        subject: "biology",
        title: "Biology Monthly Test",
        type: "monthly",
        scope: "school",
        school: "school_id",
        year: 2026,
        file: "papers/form1/biology/monthly/school/year/file.pdf"
    },
    */


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
        title: "Physics FTNA Examination",
        type: "ftna",
        scope: "national",
        region: "necta",
        year: 2024,
        file: "papers/form2/physics/necta_2024.pdf"
    },

    {
        form: "form2",
        subject: "physics",
        title: "Physics FTNA Examination",
        type: "ftna",
        scope: "national",
        region: "necta",
        year: 2023,
        file: "papers/form2/physics/necta_2023.pdf"
    },

    {
        form: "form2",
        subject: "physics",
        title: "Physics Midterm Examination",
        type: "midterm",
        scope: "school",
        region: "dodoma",
        year: 2026,
        file: "papers/form2/physics/dom_2026.pdf"
    },

    {
        form: "form2",
        subject: "physics",
        title: "Physics Terminal Examination",
        type: "terminal",
        scope: "school",
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

    {
        form: "form2",
        subject: "physics",
        title: "Physics Joint Examination",
        type: "joint",
        scope: "region",
        region: "dodoma",
        year: 2025,
        file: "papers/form2/physics/dom_2025.pdf"
    },

    {
        form: "form2",
        subject: "physics",
        title: "Physics Joint Examination",
        type: "joint",
        scope: "region",
        region: "dar_es_salaam",
        year: 2026,
        file: "papers/form2/physics/dsm_2026.pdf"
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
        title: "Chemistry FTNA Examination",
        type: "ftna",
        scope: "national",
        region: "necta",
        year: 2024,
        file: "papers/form2/chemistry/necta_2024.pdf"
    },

    {
        form: "form2",
        subject: "chemistry",
        title: "Chemistry FTNA Examination",
        type: "ftna",
        scope: "national",
        region: "necta",
        year: 2023,
        file: "papers/form2/chemistry/necta_2023.pdf"
    },

    {
        form: "form2",
        subject: "chemistry",
        title: "Chemistry Midterm Examination",
        type: "midterm",
        scope: "school",
        region: "dodoma",
        year: 2026,
        file: "papers/form2/chemistry/dom_2026.pdf"
    },

    {
        form: "form2",
        subject: "chemistry",
        title: "Chemistry Terminal Examination",
        type: "terminal",
        scope: "school",
        region: "arusha",
        year: 2025,
        file: "papers/form2/chemistry/aru_2025.pdf"
    },

    {
        form: "form2",
        subject: "chemistry",
        title: "Chemistry Joint Examination",
        type: "joint",
        scope: "region",
        region: "mbeya",
        year: 2026,
        file: "papers/form2/chemistry/mby_2026.pdf"
    },


    // ========================================================
    // FORM 2 - BIOLOGY
    // ========================================================


    /*
    ISESE EXAMPLE STRUCTURE:

    {
        form: "form2",
        subject: "biology",
        title: "Biology ISESE Series 01",
        type: "isese",
        scope: "region",
        region: "dar_es_salaam",
        year: 2026,
        series: "01",
        file: "papers/form2/biology/isese/2026/series01/biology.pdf"
    },

    {
        form: "form2",
        subject: "biology",
        title: "Biology ISESE Series 01 Marking Scheme",
        type: "isese",
        scope: "region",
        region: "dar_es_salaam",
        year: 2026,
        series: "01",
        documentType: "marking_scheme",
        file: "papers/form2/biology/isese/2026/series01/biology_ms.pdf"
    }
    */


    // ========================================================
    // FORM 3 - PHYSICS
    // ========================================================


    {
        form: "form3",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2026,
        file: "papers/form3/physics/dsm_2026.pdf"
    },

    {
        form: "form3",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2025,
        file: "papers/form3/physics/dsm_2025.pdf"
    },

    {
        form: "form3",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2024,
        file: "papers/form3/physics/dsm_2024.pdf"
    },

    {
        form: "form3",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2023,
        file: "papers/form3/physics/dsm_2023.pdf"
    },

    {
        form: "form3",
        subject: "physics",
        title: "Physics Midterm Examination",
        type: "midterm",
        scope: "school",
        region: "dodoma",
        year: 2026,
        file: "papers/form3/physics/dom_2026.pdf"
    },

    {
        form: "form3",
        subject: "physics",
        title: "Physics Terminal Examination",
        type: "terminal",
        scope: "school",
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
        scope: "school",
        region: "dar_es_salaam",
        year: 2026,
        file: "papers/form3/chemistry/dsm_2026.pdf"
    },

    {
        form: "form3",
        subject: "chemistry",
        title: "Chemistry Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2025,
        file: "papers/form3/chemistry/dsm_2025.pdf"
    },

    {
        form: "form3",
        subject: "chemistry",
        title: "Chemistry Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2024,
        file: "papers/form3/chemistry/dsm_2024.pdf"
    },

    {
        form: "form3",
        subject: "chemistry",
        title: "Chemistry Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2023,
        file: "papers/form3/chemistry/dsm_2023.pdf"
    },

    {
        form: "form3",
        subject: "chemistry",
        title: "Chemistry Midterm Examination",
        type: "midterm",
        scope: "school",
        region: "dodoma",
        year: 2026,
        file: "papers/form3/chemistry/dom_2026.pdf"
    },

    {
        form: "form3",
        subject: "chemistry",
        title: "Chemistry Terminal Examination",
        type: "terminal",
        scope: "school",
        region: "arusha",
        year: 2025,
        file: "papers/form3/chemistry/aru_2025.pdf"
    },

    {
        form: "form3",
        subject: "chemistry",
        title: "Chemistry Joint Examination",
        type: "joint",
        scope: "region",
        region: "mbeya",
        year: 2026,
        file: "papers/form3/chemistry/mby_2026.pdf"
    },


    // ========================================================
    // FORM 4 - PHYSICS
    // MOCK / JOINT / PRE-NECTA / NECTA
    // ========================================================


    {
        form: "form4",
        subject: "physics",
        title: "Physics 1",
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
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form4/physics/necta/2025/F4_necta_2025_phy2a.pdf"
    },

    {
        form: "form4",
        subject: "physics",
        title: "Physics NECTA Examination",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2024,
        file: "papers/form4/physics/necta/2024/physics_2024.pdf"
    },

    {
        form: "form4",
        subject: "physics",
        title: "Physics NECTA Examination",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2023,
        file: "papers/form4/physics/necta/2023/physics_2023.pdf"
    },


    // ========================================================
    // FORM 4 - CHEMISTRY
    // ========================================================


    {
        form: "form4",
        subject: "chemistry",
        title: "Chemistry Mock Examination",
        type: "mock",
        scope: "region",
        region: "arusha",
        year: 2026,
        file: "papers/form4/chemistry/mock/arusha/2026/chemistry_mock_2026.pdf"
    },

    {
        form: "form4",
        subject: "chemistry",
        title: "Chemistry Mock Examination",
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
        title: "Chemistry Joint Examination",
        type: "joint",
        scope: "region",
        region: "dodoma",
        year: 2026,
        file: "papers/form4/chemistry/joint/dodoma/2026/chemistry_joint_2026.pdf"
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
        title: "Chemistry Pre-NECTA Examination",
        type: "pre_necta",
        scope: "region",
        region: "dodoma",
        year: 2026,
        file: "papers/form4/chemistry/pre_necta/dodoma/2026/chemistry_prenecta_2026.pdf"
    },

    {
        form: "form4",
        subject: "chemistry",
        title: "Chemistry 1",
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
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form4/chemistry/necta/2025/F4_necta_2025_chem2a.pdf"
    },

    {
        form: "form4",
        subject: "chemistry",
        title: "Chemistry NECTA Examination",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2024,
        file: "papers/form4/chemistry/necta/2024/chemistry_2024.pdf"
    },

    {
        form: "form4",
        subject: "chemistry",
        title: "Chemistry NECTA Examination",
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2023,
        file: "papers/form4/chemistry/necta/2023/chemistry_2023.pdf"
    },


    // ========================================================
    // FORM 4 - BIOLOGY
    // ========================================================

    /*
    {
        form: "form4",
        subject: "biology",
        title: "Biology 1 ISESE Series 01",
        type: "isese",
        scope: "region",
        region: "dar_es_salaam",
        year: 2026,
        series: "01",
        paper: "1",
        file: "papers/form4/biology/isese/2026/series01/biology1.pdf"
    },

    {
        form: "form4",
        subject: "biology",
        title: "Biology 1 ISESE Series 01 Marking Scheme",
        type: "isese",
        scope: "region",
        region: "dar_es_salaam",
        year: 2026,
        series: "01",
        documentType: "marking_scheme",
        file: "papers/form4/biology/isese/2026/series01/biology1_ms.pdf"
    }
    */


    // ========================================================
    // FORM 5 - PHYSICS
    // ========================================================


    {
        form: "form5",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2026,
        file: "papers/form5/physics/dsm_2026.pdf"
    },

    {
        form: "form5",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2025,
        file: "papers/form5/physics/dsm_2025.pdf"
    },

    {
        form: "form5",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2024,
        file: "papers/form5/physics/dsm_2024.pdf"
    },

    {
        form: "form5",
        subject: "physics",
        title: "Physics Annual Examination",
        type: "annual",
        scope: "school",
        region: "dodoma",
        year: 2026,
        file: "papers/form5/physics/dom_2026.pdf"
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
        scope: "school",
        region: "dar_es_salaam",
        year: 2026,
        file: "papers/form5/chemistry/dsm_2026.pdf"
    },

    {
        form: "form5",
        subject: "chemistry",
        title: "Chemistry Annual Examination",
        type: "annual",
        scope: "school",
        region: "dar_es_salaam",
        year: 2025,
        file: "papers/form5/chemistry/dsm_2025.pdf"
    },

    {
        form: "form5",
        subject: "chemistry",
        title: "Chemistry Annual Examination",
        type: "annual",
        scope: "school",
        region: "dodoma",
        year: 2026,
        file: "papers/form5/chemistry/dom_2026.pdf"
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


    /*
    {
        form: "form5",
        subject: "biology",
        title: "Biology Annual Examination",
        type: "annual",
        scope: "school",
        school: "school_id",
        year: 2026,
        file: "papers/form5/biology/annual/school/2026/biology.pdf"
    }
    */


    // ========================================================
    // FORM 6 - PHYSICS
    // ========================================================


    {
        form: "form6",
        subject: "physics",
        title: "Physics 1 (Theory)",
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
        type: "necta",
        scope: "national",
        region: "necta",
        year: 2025,
        file: "papers/form6/chemistry/necta/2025/F6_necta_2025_chem3b.pdf"
    },


    // ========================================================
    // FORM 6 - BIOLOGY
    // ========================================================


    /*
    ISESE / PRE-NECTA STRUCTURE:

    {
        form: "form6",
        subject: "biology",
        title: "Biology 1 ISESE Pre-NECTA",
        type: "isese",
        scope: "region",
        region: "dar_es_salaam",
        year: 2026,
        series: "01",
        paper: "1",
        file: "papers/form6/biology/isese_pre_necta/2026/series01/biology1.pdf"
    },

    {
        form: "form6",
        subject: "biology",
        title: "Biology 2 ISESE Pre-NECTA",
        type: "isese",
        scope: "region",
        region: "dar_es_salaam",
        year: 2026,
        series: "01",
        paper: "2",
        file: "papers/form6/biology/isese_pre_necta/2026/series01/biology2.pdf"
    }
    */

];


/* ============================================================
   CONFIGURATION FOR EACH FORM
============================================================ */

const pastPaperFormConfig = {

    form1: {
        subjects: [
            "physics",
            "chemistry",
            "biology"
        ]
    },

    form2: {
        subjects: [
            "physics",
            "chemistry",
            "biology"
        ]
    },

    form3: {
        subjects: [
            "physics",
            "chemistry",
            "biology"
        ]
    },

    form4: {
        subjects: [
            "physics",
            "chemistry",
            "biology"
        ]
    },

    form5: {
        subjects: [
            "physics",
            "chemistry",
            "biology"
        ]
    },

    form6: {
        subjects: [
            "physics",
            "chemistry",
            "biology"
        ]
    }

};


/* ============================================================
   HELPER
============================================================ */

function getPastPaperType(typeId) {

    return pastPaperTypes.find(
        type => type.id === typeId
    );

}


/* ============================================================
   HELPER
============================================================ */

function getPastPaperSubject(subjectId) {

    return pastPaperSubjects.find(
        subject => subject.id === subjectId
    );

}


/* ============================================================
   HELPER
============================================================ */

function getPastPaperRegion(regionId) {

    return pastPaperRegions.find(
        region => region.id === regionId
    );

}


/* ============================================================
   MAKE DATABASE AVAILABLE
============================================================ */

window.pastPapers = pastPapers;

window.pastPaperRegions = pastPaperRegions;

window.pastPaperYears = pastPaperYears;

window.pastPaperSubjects = pastPaperSubjects;

window.pastPaperTypes = pastPaperTypes;

window.pastPaperSchools = pastPaperSchools;

window.pastPaperFormConfig = pastPaperFormConfig;

window.getPastPaperType = getPastPaperType;

window.getPastPaperSubject = getPastPaperSubject;

window.getPastPaperRegion = getPastPaperRegion;
