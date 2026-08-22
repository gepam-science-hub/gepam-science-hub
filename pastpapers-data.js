// ============================================================
// GEPAM SCIENCE HUB - PAST PAPERS DATABASE
// FORM 1 - FORM 6
// PHYSICS + CHEMISTRY + BIOLOGY
// ============================================================


// ============================================================
// REGIONS
// Used mainly for MOCK, JOINT and PRE-NECTA papers
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
  { id: "tanga", name: "Tanga" }
];


// ============================================================
// YEARS
// Database keeps 2020 - 2026.
// You can add papers gradually.
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
  {
    id: "physics",
    name: "Physics",
    icon: "⚛️"
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "🧪"
  },
  {
    id: "biology",
    name: "Biology",
    icon: "🧬"
  }
];


// ============================================================
// EXAMINATION TYPES
// ============================================================

const pastPaperTypes = [

  // SCHOOL-BASED
  {
    id: "midterm",
    name: "Midterm Examination",
    group: "school"
  },

  {
    id: "terminal",
    name: "Terminal Examination",
    group: "school"
  },

  {
    id: "annual",
    name: "Annual Examination",
    group: "school"
  },


  // REGIONAL / COLLECTIVE
  {
    id: "mock",
    name: "Mock Examination",
    group: "regional"
  },

  {
    id: "joint",
    name: "Joint Examination",
    group: "regional"
  },

  {
    id: "pre_necta",
    name: "Pre-NECTA Examination",
    group: "regional"
  },


  // NATIONAL
  {
    id: "necta",
    name: "NECTA Examination",
    group: "national"
  },

  {
    id: "ftna",
    name: "FTNA Examination",
    group: "national"
  }
];


// ============================================================
// SPECIAL / FAMOUS EXAMINATION CATEGORIES
// These appear directly under each Form.
// They are NOT regions.
// ============================================================

const specialExamCategories = [

  {
    id: "isese",
    name: "ISESE",
    description: "ISESE Examination Papers",
    icon: "📘"
  },

  {
    id: "jepgos",
    name: "JEPGOS",
    description: "JEPGOS Examination Papers",
    icon: "📗"
  },

  {
    id: "tahossa",
    name: "TAHOSSA",
    description: "TAHOSSA Examination Papers",
    icon: "📕"
  },

  {
    id: "cssc",
    name: "CSSC",
    description: "CSSC Examination Papers",
    icon: "📙"
  },

  {
    id: "special_schools",
    name: "SPECIAL SCHOOLS",
    description: "Special Schools Examination Papers",
    icon: "🎓"
  }
];


// ============================================================
// FORMS
// ============================================================

const pastPaperForms = [

  {
    id: "form1",
    name: "Form 1",
    subjects: ["physics", "chemistry", "biology"]
  },

  {
    id: "form2",
    name: "Form 2",
    subjects: ["physics", "chemistry", "biology"]
  },

  {
    id: "form3",
    name: "Form 3",
    subjects: ["physics", "chemistry", "biology"]
  },

  {
    id: "form4",
    name: "Form 4",
    subjects: ["physics", "chemistry", "biology"]
  },

  {
    id: "form5",
    name: "Form 5",
    subjects: ["physics", "chemistry", "biology"]
  },

  {
    id: "form6",
    name: "Form 6",
    subjects: ["physics", "chemistry", "biology"]
  }

];


// ============================================================
// PAST PAPERS DATABASE
// ============================================================

const pastPapers = [

  // ==========================================================
  // EXAMPLE - FORM 1 PHYSICS
  // SCHOOL-BASED
  // ==========================================================

  {
    form: "form1",
    subject: "physics",

    title: "Physics Midterm Examination",

    type: "midterm",

    // SCHOOL-BASED PAPERS DO NOT USE REGION
    school: "Example Secondary School",

    year: 2026,

    file: "papers/form1/physics/midterm/2026/example_school.pdf"
  },


  {
    form: "form1",
    subject: "physics",

    title: "Physics Terminal Examination",

    type: "terminal",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form1/physics/terminal/2026/example_school.pdf"
  },


  {
    form: "form1",
    subject: "physics",

    title: "Physics Annual Examination",

    type: "annual",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form1/physics/annual/2026/example_school.pdf"
  },


  // ==========================================================
  // FORM 1 CHEMISTRY
  // ==========================================================

  {
    form: "form1",
    subject: "chemistry",

    title: "Chemistry Midterm Examination",

    type: "midterm",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form1/chemistry/midterm/2026/example_school.pdf"
  },


  {
    form: "form1",
    subject: "chemistry",

    title: "Chemistry Terminal Examination",

    type: "terminal",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form1/chemistry/terminal/2026/example_school.pdf"
  },


  {
    form: "form1",
    subject: "chemistry",

    title: "Chemistry Annual Examination",

    type: "annual",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form1/chemistry/annual/2026/example_school.pdf"
  },


  // ==========================================================
  // FORM 1 BIOLOGY
  // ==========================================================

  {
    form: "form1",
    subject: "biology",

    title: "Biology Midterm Examination",

    type: "midterm",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form1/biology/midterm/2026/example_school.pdf"
  },


  {
    form: "form1",
    subject: "biology",

    title: "Biology Terminal Examination",

    type: "terminal",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form1/biology/terminal/2026/example_school.pdf"
  },


  {
    form: "form1",
    subject: "biology",

    title: "Biology Annual Examination",

    type: "annual",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form1/biology/annual/2026/example_school.pdf"
  },


  // ==========================================================
  // FORM 2 PHYSICS
  // FTNA
  // ==========================================================

  {
    form: "form2",
    subject: "physics",

    title: "Physics FTNA Examination",

    type: "ftna",

    region: "necta",

    year: 2025,

    file: "papers/form2/physics/necta/2025/F2_Physics_Necta_2025.pdf"
  },


  // ==========================================================
  // FORM 2 CHEMISTRY
  // ==========================================================

  {
    form: "form2",
    subject: "chemistry",

    title: "Chemistry FTNA Examination",

    type: "ftna",

    region: "necta",

    year: 2025,

    file: "papers/form2/chemistry/necta/2025/F2_Chemistry_Necta_2025.pdf"
  },


  // ==========================================================
  // FORM 2 BIOLOGY
  // ==========================================================

  {
    form: "form2",
    subject: "biology",

    title: "Biology FTNA Examination",

    type: "ftna",

    region: "necta",

    year: 2025,

    file: "papers/form2/biology/necta/2025/F2_Biology_Necta_2025.pdf"
  },


  // ==========================================================
  // FORM 3 PHYSICS
  // ==========================================================

  {
    form: "form3",
    subject: "physics",

    title: "Physics Annual Examination",

    type: "annual",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form3/physics/annual/2026/example_school.pdf"
  },


  // ==========================================================
  // FORM 3 CHEMISTRY
  // ==========================================================

  {
    form: "form3",
    subject: "chemistry",

    title: "Chemistry Annual Examination",

    type: "annual",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form3/chemistry/annual/2026/example_school.pdf"
  },


  // ==========================================================
  // FORM 3 BIOLOGY
  // ==========================================================

  {
    form: "form3",
    subject: "biology",

    title: "Biology Annual Examination",

    type: "annual",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form3/biology/annual/2026/example_school.pdf"
  },


  // ==========================================================
  // FORM 4 PHYSICS - MOCK
  // REGION BASED
  // ==========================================================

  {
    form: "form4",
    subject: "physics",

    title: "Physics 1",

    type: "mock",

    region: "dar_es_salaam",

    year: 2025,

    file: "papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phys1.pdf"
  },


  {
    form: "form4",
    subject: "physics",

    title: "Physics 2A",

    type: "mock",

    region: "dar_es_salaam",

    year: 2025,

    file: "papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phy2A.pdf"
  },


  {
    form: "form4",
    subject: "physics",

    title: "Physics 2B",

    type: "mock",

    region: "dar_es_salaam",

    year: 2025,

    file: "papers/form4/physics/mock/dar_es_salaam/2025/F4_dsm_mock_2025_phy2B.pdf"
  },


  // ==========================================================
  // FORM 4 CHEMISTRY - MOCK
  // ==========================================================

  {
    form: "form4",
    subject: "chemistry",

    title: "Chemistry 1",

    type: "mock",

    region: "arusha",

    year: 2026,

    file: "papers/form4/chemistry/mock/arusha/2026/chemistry_mock_2026_chem1.pdf"
  },


  {
    form: "form4",
    subject: "chemistry",

    title: "Chemistry 2A",

    type: "mock",

    region: "arusha",

    year: 2026,

    file: "papers/form4/chemistry/mock/arusha/2026/chemistry_mock_2026_chem2a.pdf"
  },


  {
    form: "form4",
    subject: "chemistry",

    title: "Chemistry 2B",

    type: "mock",

    region: "arusha",

    year: 2026,

    file: "papers/form4/chemistry/mock/arusha/2026/chemistry_mock_2026_chem2b.pdf"
  },


  // ==========================================================
  // FORM 4 BIOLOGY - MOCK
  // ==========================================================

  {
    form: "form4",
    subject: "biology",

    title: "Biology Mock Examination",

    type: "mock",

    region: "dodoma",

    year: 2026,

    file: "papers/form4/biology/mock/dodoma/2026/biology_mock_2026.pdf"
  },


  // ==========================================================
  // FORM 4 PHYSICS - NECTA
  // ==========================================================

  {
    form: "form4",
    subject: "physics",

    title: "Physics 1",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form4/physics/necta/2025/F4_necta_2025_phy1.pdf"
  },


  {
    form: "form4",
    subject: "physics",

    title: "Physics 2A",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form4/physics/necta/2025/F4_necta_2025_phy2a.pdf"
  },


  {
    form: "form4",
    subject: "physics",

    title: "Physics 2B",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form4/physics/necta/2025/F4_necta_2025_phy2b.pdf"
  },


  // ==========================================================
  // FORM 4 CHEMISTRY - NECTA
  // ==========================================================

  {
    form: "form4",
    subject: "chemistry",

    title: "Chemistry 1",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form4/chemistry/necta/2025/F4_necta_2025_chem1.pdf"
  },


  {
    form: "form4",
    subject: "chemistry",

    title: "Chemistry 2A",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form4/chemistry/necta/2025/F4_necta_2025_chem2a.pdf"
  },


  {
    form: "form4",
    subject: "chemistry",

    title: "Chemistry 2B",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form4/chemistry/necta/2025/F4_necta_2025_chem2b.pdf"
  },


  // ==========================================================
  // FORM 4 BIOLOGY - NECTA
  // ==========================================================

  {
    form: "form4",
    subject: "biology",

    title: "Biology NECTA Examination",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form4/biology/necta/2025/F4_necta_2025_biology.pdf"
  },


  // ==========================================================
  // FORM 5 PHYSICS
  // ==========================================================

  {
    form: "form5",
    subject: "physics",

    title: "Physics Annual Examination",

    type: "annual",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form5/physics/annual/2026/example_school.pdf"
  },


  // ==========================================================
  // FORM 5 CHEMISTRY
  // ==========================================================

  {
    form: "form5",
    subject: "chemistry",

    title: "Chemistry Annual Examination",

    type: "annual",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form5/chemistry/annual/2026/example_school.pdf"
  },


  // ==========================================================
  // FORM 5 BIOLOGY
  // ==========================================================

  {
    form: "form5",
    subject: "biology",

    title: "Biology Annual Examination",

    type: "annual",

    school: "Example Secondary School",

    year: 2026,

    file: "papers/form5/biology/annual/2026/example_school.pdf"
  },


  // ==========================================================
  // FORM 6 PHYSICS - NECTA
  // ==========================================================

  {
    form: "form6",
    subject: "physics",

    title: "Physics 1 (Theory)",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form6/physics/necta/2025/F6_necta_2025_phy1.pdf"
  },


  {
    form: "form6",
    subject: "physics",

    title: "Physics 2",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form6/physics/necta/2025/F6_necta_2025_phy2.pdf"
  },


  {
    form: "form6",
    subject: "physics",

    title: "Physics 3A",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form6/physics/necta/2025/F6_necta_2025_phy3a.pdf"
  },


  {
    form: "form6",
    subject: "physics",

    title: "Physics 3B",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form6/physics/necta/2025/F6_necta_2025_phy3b.pdf"
  },


  // ==========================================================
  // FORM 6 CHEMISTRY - NECTA
  // ==========================================================

  {
    form: "form6",
    subject: "chemistry",

    title: "Chemistry 1 (Theory)",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form6/chemistry/necta/2025/F6_necta_2025_chem1.pdf"
  },


  {
    form: "form6",
    subject: "chemistry",

    title: "Chemistry 2",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form6/chemistry/necta/2025/F6_necta_2025_chem2.pdf"
  },


  {
    form: "form6",
    subject: "chemistry",

    title: "Chemistry 3A",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form6/chemistry/necta/2025/F6_necta_2025_chem3a.pdf"
  },


  {
    form: "form6",
    subject: "chemistry",

    title: "Chemistry 3B",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form6/chemistry/necta/2025/F6_necta_2025_chem3b.pdf"
  },


  // ==========================================================
  // FORM 6 BIOLOGY - NECTA
  // ==========================================================

  {
    form: "form6",
    subject: "biology",

    title: "Biology 1",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form6/biology/necta/2025/F6_necta_2025_biology1.pdf"
  },


  {
    form: "form6",
    subject: "biology",

    title: "Biology 2",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form6/biology/necta/2025/F6_necta_2025_biology2.pdf"
  },


  {
    form: "form6",
    subject: "biology",

    title: "Biology 3",

    type: "necta",

    region: "necta",

    year: 2025,

    file: "papers/form6/biology/necta/2025/F6_necta_2025_biology3.pdf"
  },


  // ==========================================================
  // SPECIAL EXAMINATIONS
  // ==========================================================
  // THESE ARE NOT REGIONS.
  // THEY ARE SPECIAL EXAMINATION SOURCES.
  //
  // Add actual PDFs here as you upload them.
  // ==========================================================


  // ---------------- ISESE ----------------

  {
    form: "form4",
    subject: "physics",

    title: "ISESE Physics Examination",

    type: "special",

    specialCategory: "isese",

    year: 2026,

    file: "papers/form4/physics/isese/2026/isese_physics_2026.pdf"
  },


  {
    form: "form4",
    subject: "chemistry",

    title: "ISESE Chemistry Examination",

    type: "special",

    specialCategory: "isese",

    year: 2026,

    file: "papers/form4/chemistry/isese/2026/isese_chemistry_2026.pdf"
  },


  {
    form: "form4",
    subject: "biology",

    title: "ISESE Biology Examination",

    type: "special",

    specialCategory: "isese",

    year: 2026,

    file: "papers/form4/biology/isese/2026/isese_biology_2026.pdf"
  },


  // ---------------- JEPGOS ----------------

  {
    form: "form4",
    subject: "physics",

    title: "JEPGOS Physics Examination",

    type: "special",

    specialCategory: "jepgos",

    year: 2026,

    file: "papers/form4/physics/jepgos/2026/jepgos_physics_2026.pdf"
  },


  {
    form: "form4",
    subject: "chemistry",

    title: "JEPGOS Chemistry Examination",

    type: "special",

    specialCategory: "jepgos",

    year: 2026,

    file: "papers/form4/chemistry/jepgos/2026/jepgos_chemistry_2026.pdf"
  },


  {
    form: "form4",
    subject: "biology",

    title: "JEPGOS Biology Examination",

    type: "special",

    specialCategory: "jepgos",

    year: 2026,

    file: "papers/form4/biology/jepgos/2026/jepgos_biology_2026.pdf"
  },


  // ---------------- TAHOSSA ----------------

  {
    form: "form4",
    subject: "physics",

    title: "TAHOSSA Physics Examination",

    type: "special",

    specialCategory: "tahossa",

    year: 2026,

    file: "papers/form4/physics/tahossa/2026/tahossa_physics_2026.pdf"
  },


  {
    form: "form4",
    subject: "chemistry",

    title: "TAHOSSA Chemistry Examination",

    type: "special",

    specialCategory: "tahossa",

    year: 2026,

    file: "papers/form4/chemistry/tahossa/2026/tahossa_chemistry_2026.pdf"
  },


  {
    form: "form4",
    subject: "biology",

    title: "TAHOSSA Biology Examination",

    type: "special",

    specialCategory: "tahossa",

    year: 2026,

    file: "papers/form4/biology/tahossa/2026/tahossa_biology_2026.pdf"
  },


  // ---------------- CSSC ----------------

  {
    form: "form4",
    subject: "physics",

    title: "CSSC Physics Examination",

    type: "special",

    specialCategory: "cssc",

    year: 2026,

    file: "papers/form4/physics/cssc/2026/cssc_physics_2026.pdf"
  },


  {
    form: "form4",
    subject: "chemistry",

    title: "CSSC Chemistry Examination",

    type: "special",

    specialCategory: "cssc",

    year: 2026,

    file: "papers/form4/chemistry/cssc/2026/cssc_chemistry_2026.pdf"
  },


  {
    form: "form4",
    subject: "biology",

    title: "CSSC Biology Examination",

    type: "special",

    specialCategory: "cssc",

    year: 2026,

    file: "papers/form4/biology/cssc/2026/cssc_biology_2026.pdf"
  },


  // ---------------- SPECIAL SCHOOLS ----------------

  {
    form: "form6",
    subject: "physics",

    title: "Special Schools Physics Examination",

    type: "special",

    specialCategory: "special_schools",

    year: 2026,

    file: "papers/form6/physics/special_schools/2026/special_schools_physics_2026.pdf"
  },


  {
    form: "form6",
    subject: "chemistry",

    title: "Special Schools Chemistry Examination",

    type: "special",

    specialCategory: "special_schools",

    year: 2026,

    file: "papers/form6/chemistry/special_schools/2026/special_schools_chemistry_2026.pdf"
  },


  {
    form: "form6",
    subject: "biology",

    title: "Special Schools Biology Examination",

    type: "special",

    specialCategory: "special_schools",

    year: 2026,

    file: "papers/form6/biology/special_schools/2026/special_schools_biology_2026.pdf"
  }

];


// ============================================================
// HELPER FUNCTIONS
// ============================================================


// Get papers for a particular form
function getPapersByForm(formId) {

  return pastPapers.filter(
    paper => paper.form === formId
  );

}


// Get papers by subject
function getPapersBySubject(subjectId) {

  return pastPapers.filter(
    paper => paper.subject === subjectId
  );

}


// Get papers by form + subject
function getPapersByFormAndSubject(formId, subjectId) {

  return pastPapers.filter(
    paper =>
      paper.form === formId &&
      paper.subject === subjectId
  );

}


// Get school-based examinations
function getSchoolBasedPapers(formId, subjectId) {

  return pastPapers.filter(
    paper =>
      paper.form === formId &&
      paper.subject === subjectId &&
      ["midterm", "terminal", "annual"].includes(paper.type)
  );

}


// Get regional examinations
function getRegionalPapers(formId, subjectId) {

  return pastPapers.filter(
    paper =>
      paper.form === formId &&
      paper.subject === subjectId &&
      ["mock", "joint", "pre_necta"].includes(paper.type)
  );

}


// Get NECTA examinations
function getNectaPapers(formId, subjectId) {

  return pastPapers.filter(
    paper =>
      paper.form === formId &&
      paper.subject === subjectId &&
      ["necta", "ftna"].includes(paper.type)
  );

}


// Get special examinations
function getSpecialPapers(formId, specialCategory) {

  return pastPapers.filter(
    paper =>
      paper.form === formId &&
      paper.specialCategory === specialCategory
  );

}


// Get papers by year
function getPapersByYear(year) {

  return pastPapers.filter(
    paper => Number(paper.year) === Number(year)
  );

}


// Get papers by region
function getPapersByRegion(formId, regionId) {

  return pastPapers.filter(
    paper =>
      paper.form === formId &&
      paper.region === regionId
  );

}


// ============================================================
// MAKE DATABASE AVAILABLE TO pastpapers.html
// ============================================================

window.pastPapers = pastPapers;

window.pastPaperRegions = pastPaperRegions;

window.pastPaperYears = pastPaperYears;

window.pastPaperSubjects = pastPaperSubjects;

window.pastPaperTypes = pastPaperTypes;

window.pastPaperForms = pastPaperForms;

window.specialExamCategories = specialExamCategories;


// ============================================================
// END
// ============================================================
