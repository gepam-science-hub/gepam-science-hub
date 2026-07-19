// =====================================
// GEPAM SCIENCE HUB PAST PAPERS DATABASE
// VERSION 2
// =====================================


const pastPapers = {

    form1:{
        physics:[],
        chemistry:[]
    },

    form2:{
        physics:[],
        chemistry:[]
    },

    form3:{
        physics:[],
        chemistry:[]
    },

    form4:{
        physics:[],
        chemistry:[]
    },

    form5:{
        physics:[],
        chemistry:[]
    },

    form6:{
        physics:[],
        chemistry:[]
    }

};


// =====================================
// ADD PAPER FUNCTION
// =====================================

function addPaper(form, subject, title, type, region, year, file){

    pastPapers[form][subject].push({

        title:title,
        type:type,
        region:region,
        year:year,
        file:file

    });

}

// =====================================
// FORM 1 PHYSICS
// =====================================


// DODOMA

addPaper(
"form1",
"physics",
"Dodoma Annual Physics 2023",
"annual",
"dodoma",
2023,
"pastpapers/form1/physics/annual/dodoma/2023/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Dodoma Annual Physics 2024",
"annual",
"dodoma",
2024,
"pastpapers/form1/physics/annual/dodoma/2024/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Dodoma Annual Physics 2025",
"annual",
"dodoma",
2025,
"pastpapers/form1/physics/annual/dodoma/2025/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Dodoma Annual Physics 2026",
"annual",
"dodoma",
2026,
"pastpapers/form1/physics/annual/dodoma/2026/paper1.pdf"
);


// DAR ES SALAAM

addPaper(
"form1",
"physics",
"Dar es Salaam Annual Physics 2023",
"annual",
"dar_es_salaam",
2023,
"pastpapers/form1/physics/annual/dar_es_salaam/2023/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Dar es Salaam Annual Physics 2024",
"annual",
"dar_es_salaam",
2024,
"pastpapers/form1/physics/annual/dar_es_salaam/2024/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Dar es Salaam Annual Physics 2025",
"annual",
"dar_es_salaam",
2025,
"pastpapers/form1/physics/annual/dar_es_salaam/2025/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Dar es Salaam Annual Physics 2026",
"annual",
"dar_es_salaam",
2026,
"pastpapers/form1/physics/annual/dar_es_salaam/2026/paper1.pdf"
);


// =====================================
// FORM 1 CHEMISTRY
// =====================================


// DODOMA

addPaper(
"form1",
"chemistry",
"Dodoma Annual Chemistry 2023",
"annual",
"dodoma",
2023,
"pastpapers/form1/chemistry/annual/dodoma/2023/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Dodoma Annual Chemistry 2024",
"annual",
"dodoma",
2024,
"pastpapers/form1/chemistry/annual/dodoma/2024/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Dodoma Annual Chemistry 2025",
"annual",
"dodoma",
2025,
"pastpapers/form1/chemistry/annual/dodoma/2025/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Dodoma Annual Chemistry 2026",
"annual",
"dodoma",
2026,
"pastpapers/form1/chemistry/annual/dodoma/2026/paper1.pdf"
);


// DAR ES SALAAM

addPaper(
"form1",
"chemistry",
"Dar es Salaam Annual Chemistry 2023",
"annual",
"dar_es_salaam",
2023,
"pastpapers/form1/chemistry/annual/dar_es_salaam/2023/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Dar es Salaam Annual Chemistry 2024",
"annual",
"dar_es_salaam",
2024,
"pastpapers/form1/chemistry/annual/dar_es_salaam/2024/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Dar es Salaam Annual Chemistry 2025",
"annual",
"dar_es_salaam",
2025,
"pastpapers/form1/chemistry/annual/dar_es_salaam/2025/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Dar es Salaam Annual Chemistry 2026",
"annual",
"dar_es_salaam",
2026,
"pastpapers/form1/chemistry/annual/dar_es_salaam/2026/paper1.pdf"
);

// =====================================
// FORM 1 PHYSICS - REMAINING REGIONS
// =====================================


// ARUSHA

addPaper(
"form1",
"physics",
"Arusha Annual Physics 2023",
"annual",
"arusha",
2023,
"pastpapers/form1/physics/annual/arusha/2023/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Arusha Annual Physics 2024",
"annual",
"arusha",
2024,
"pastpapers/form1/physics/annual/arusha/2024/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Arusha Annual Physics 2025",
"annual",
"arusha",
2025,
"pastpapers/form1/physics/annual/arusha/2025/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Arusha Annual Physics 2026",
"annual",
"arusha",
2026,
"pastpapers/form1/physics/annual/arusha/2026/paper1.pdf"
);


// MBEYA

addPaper(
"form1",
"physics",
"Mbeya Annual Physics 2023",
"annual",
"mbeya",
2023,
"pastpapers/form1/physics/annual/mbeya/2023/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Mbeya Annual Physics 2024",
"annual",
"mbeya",
2024,
"pastpapers/form1/physics/annual/mbeya/2024/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Mbeya Annual Physics 2025",
"annual",
"mbeya",
2025,
"pastpapers/form1/physics/annual/mbeya/2025/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Mbeya Annual Physics 2026",
"annual",
"mbeya",
2026,
"pastpapers/form1/physics/annual/mbeya/2026/paper1.pdf"
);


// =====================================
// FORM 1 CHEMISTRY - REMAINING REGIONS
// =====================================


// ARUSHA

addPaper(
"form1",
"chemistry",
"Arusha Annual Chemistry 2023",
"annual",
"arusha",
2023,
"pastpapers/form1/chemistry/annual/arusha/2023/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Arusha Annual Chemistry 2024",
"annual",
"arusha",
2024,
"pastpapers/form1/chemistry/annual/arusha/2024/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Arusha Annual Chemistry 2025",
"annual",
"arusha",
2025,
"pastpapers/form1/chemistry/annual/arusha/2025/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Arusha Annual Chemistry 2026",
"annual",
"arusha",
2026,
"pastpapers/form1/chemistry/annual/arusha/2026/paper1.pdf"
);


// MBEYA

addPaper(
"form1",
"chemistry",
"Mbeya Annual Chemistry 2023",
"annual",
"mbeya",
2023,
"pastpapers/form1/chemistry/annual/mbeya/2023/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Mbeya Annual Chemistry 2024",
"annual",
"mbeya",
2024,
"pastpapers/form1/chemistry/annual/mbeya/2024/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Mbeya Annual Chemistry 2025",
"annual",
"mbeya",
2025,
"pastpapers/form1/chemistry/annual/mbeya/2025/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Mbeya Annual Chemistry 2026",
"annual",
"mbeya",
2026,
"pastpapers/form1/chemistry/annual/mbeya/2026/paper1.pdf"
);
// =====================================
// FORM 1 PHYSICS - KAGERA & SHINYANGA
// =====================================


// KAGERA

addPaper(
"form1",
"physics",
"Kagera Annual Physics 2023",
"annual",
"kagera",
2023,
"pastpapers/form1/physics/annual/kagera/2023/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Kagera Annual Physics 2024",
"annual",
"kagera",
2024,
"pastpapers/form1/physics/annual/kagera/2024/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Kagera Annual Physics 2025",
"annual",
"kagera",
2025,
"pastpapers/form1/physics/annual/kagera/2025/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Kagera Annual Physics 2026",
"annual",
"kagera",
2026,
"pastpapers/form1/physics/annual/kagera/2026/paper1.pdf"
);


// SHINYANGA

addPaper(
"form1",
"physics",
"Shinyanga Annual Physics 2023",
"annual",
"shinyanga",
2023,
"pastpapers/form1/physics/annual/shinyanga/2023/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Shinyanga Annual Physics 2024",
"annual",
"shinyanga",
2024,
"pastpapers/form1/physics/annual/shinyanga/2024/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Shinyanga Annual Physics 2025",
"annual",
"shinyanga",
2025,
"pastpapers/form1/physics/annual/shinyanga/2025/paper1.pdf"
);

addPaper(
"form1",
"physics",
"Shinyanga Annual Physics 2026",
"annual",
"shinyanga",
2026,
"pastpapers/form1/physics/annual/shinyanga/2026/paper1.pdf"
);


// =====================================
// FORM 1 CHEMISTRY - KAGERA & SHINYANGA
// =====================================


// KAGERA

addPaper(
"form1",
"chemistry",
"Kagera Annual Chemistry 2023",
"annual",
"kagera",
2023,
"pastpapers/form1/chemistry/annual/kagera/2023/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Kagera Annual Chemistry 2024",
"annual",
"kagera",
2024,
"pastpapers/form1/chemistry/annual/kagera/2024/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Kagera Annual Chemistry 2025",
"annual",
"kagera",
2025,
"pastpapers/form1/chemistry/annual/kagera/2025/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Kagera Annual Chemistry 2026",
"annual",
"kagera",
2026,
"pastpapers/form1/chemistry/annual/kagera/2026/paper1.pdf"
);


// SHINYANGA

addPaper(
"form1",
"chemistry",
"Shinyanga Annual Chemistry 2023",
"annual",
"shinyanga",
2023,
"pastpapers/form1/chemistry/annual/shinyanga/2023/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Shinyanga Annual Chemistry 2024",
"annual",
"shinyanga",
2024,
"pastpapers/form1/chemistry/annual/shinyanga/2024/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Shinyanga Annual Chemistry 2025",
"annual",
"shinyanga",
2025,
"pastpapers/form1/chemistry/annual/shinyanga/2025/paper1.pdf"
);

addPaper(
"form1",
"chemistry",
"Shinyanga Annual Chemistry 2026",
"annual",
"shinyanga",
2026,
"pastpapers/form1/chemistry/annual/shinyanga/2026/paper1.pdf"
);
// =====================================
// FORM 2 PHYSICS
// =====================================


// DODOMA

addPaper(
"form2",
"physics",
"Dodoma Annual Physics 2023",
"annual",
"dodoma",
2023,
"pastpapers/form2/physics/annual/dodoma/2023/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Dodoma Annual Physics 2024",
"annual",
"dodoma",
2024,
"pastpapers/form2/physics/annual/dodoma/2024/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Dodoma Annual Physics 2025",
"annual",
"dodoma",
2025,
"pastpapers/form2/physics/annual/dodoma/2025/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Dodoma Annual Physics 2026",
"annual",
"dodoma",
2026,
"pastpapers/form2/physics/annual/dodoma/2026/paper1.pdf"
);


// DAR ES SALAAM

addPaper(
"form2",
"physics",
"Dar es Salaam Annual Physics 2023",
"annual",
"dar_es_salaam",
2023,
"pastpapers/form2/physics/annual/dar_es_salaam/2023/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Dar es Salaam Annual Physics 2024",
"annual",
"dar_es_salaam",
2024,
"pastpapers/form2/physics/annual/dar_es_salaam/2024/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Dar es Salaam Annual Physics 2025",
"annual",
"dar_es_salaam",
2025,
"pastpapers/form2/physics/annual/dar_es_salaam/2025/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Dar es Salaam Annual Physics 2026",
"annual",
"dar_es_salaam",
2026,
"pastpapers/form2/physics/annual/dar_es_salaam/2026/paper1.pdf"
);



// =====================================
// FORM 2 CHEMISTRY
// =====================================


// DODOMA

addPaper(
"form2",
"chemistry",
"Dodoma Annual Chemistry 2023",
"annual",
"dodoma",
2023,
"pastpapers/form2/chemistry/annual/dodoma/2023/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Dodoma Annual Chemistry 2024",
"annual",
"dodoma",
2024,
"pastpapers/form2/chemistry/annual/dodoma/2024/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Dodoma Annual Chemistry 2025",
"annual",
"dodoma",
2025,
"pastpapers/form2/chemistry/annual/dodoma/2025/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Dodoma Annual Chemistry 2026",
"annual",
"dodoma",
2026,
"pastpapers/form2/chemistry/annual/dodoma/2026/paper1.pdf"
);


// DAR ES SALAAM

addPaper(
"form2",
"chemistry",
"Dar es Salaam Annual Chemistry 2023",
"annual",
"dar_es_salaam",
2023,
"pastpapers/form2/chemistry/annual/dar_es_salaam/2023/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Dar es Salaam Annual Chemistry 2024",
"annual",
"dar_es_salaam",
2024,
"pastpapers/form2/chemistry/annual/dar_es_salaam/2024/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Dar es Salaam Annual Chemistry 2025",
"annual",
"dar_es_salaam",
2025,
"pastpapers/form2/chemistry/annual/dar_es_salaam/2025/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Dar es Salaam Annual Chemistry 2026",
"annual",
"dar_es_salaam",
2026,
"pastpapers/form2/chemistry/annual/dar_es_salaam/2026/paper1.pdf"
);
// =====================================
// FORM 2 PHYSICS
// ARUSHA + MBEYA
// =====================================


// ARUSHA

addPaper(
"form2",
"physics",
"Arusha Annual Physics 2023",
"annual",
"arusha",
2023,
"pastpapers/form2/physics/annual/arusha/2023/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Arusha Annual Physics 2024",
"annual",
"arusha",
2024,
"pastpapers/form2/physics/annual/arusha/2024/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Arusha Annual Physics 2025",
"annual",
"arusha",
2025,
"pastpapers/form2/physics/annual/arusha/2025/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Arusha Annual Physics 2026",
"annual",
"arusha",
2026,
"pastpapers/form2/physics/annual/arusha/2026/paper1.pdf"
);


// MBEYA

addPaper(
"form2",
"physics",
"Mbeya Annual Physics 2023",
"annual",
"mbeya",
2023,
"pastpapers/form2/physics/annual/mbeya/2023/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Mbeya Annual Physics 2024",
"annual",
"mbeya",
2024,
"pastpapers/form2/physics/annual/mbeya/2024/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Mbeya Annual Physics 2025",
"annual",
"mbeya",
2025,
"pastpapers/form2/physics/annual/mbeya/2025/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Mbeya Annual Physics 2026",
"annual",
"mbeya",
2026,
"pastpapers/form2/physics/annual/mbeya/2026/paper1.pdf"
);


// =====================================
// FORM 2 CHEMISTRY
// ARUSHA + MBEYA
// =====================================


// ARUSHA

addPaper(
"form2",
"chemistry",
"Arusha Annual Chemistry 2023",
"annual",
"arusha",
2023,
"pastpapers/form2/chemistry/annual/arusha/2023/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Arusha Annual Chemistry 2024",
"annual",
"arusha",
2024,
"pastpapers/form2/chemistry/annual/arusha/2024/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Arusha Annual Chemistry 2025",
"annual",
"arusha",
2025,
"pastpapers/form2/chemistry/annual/arusha/2025/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Arusha Annual Chemistry 2026",
"annual",
"arusha",
2026,
"pastpapers/form2/chemistry/annual/arusha/2026/paper1.pdf"
);


// MBEYA

addPaper(
"form2",
"chemistry",
"Mbeya Annual Chemistry 2023",
"annual",
"mbeya",
2023,
"pastpapers/form2/chemistry/annual/mbeya/2023/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Mbeya Annual Chemistry 2024",
"annual",
"mbeya",
2024,
"pastpapers/form2/chemistry/annual/mbeya/2024/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Mbeya Annual Chemistry 2025",
"annual",
"mbeya",
2025,
"pastpapers/form2/chemistry/annual/mbeya/2025/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Mbeya Annual Chemistry 2026",
"annual",
"mbeya",
2026,
"pastpapers/form2/chemistry/annual/mbeya/2026/paper1.pdf"
);
// =====================================
// FORM 2 PHYSICS
// KAGERA + SHINYANGA
// =====================================


// KAGERA

addPaper(
"form2",
"physics",
"Kagera Annual Physics 2023",
"annual",
"kagera",
2023,
"pastpapers/form2/physics/annual/kagera/2023/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Kagera Annual Physics 2024",
"annual",
"kagera",
2024,
"pastpapers/form2/physics/annual/kagera/2024/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Kagera Annual Physics 2025",
"annual",
"kagera",
2025,
"pastpapers/form2/physics/annual/kagera/2025/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Kagera Annual Physics 2026",
"annual",
"kagera",
2026,
"pastpapers/form2/physics/annual/kagera/2026/paper1.pdf"
);


// SHINYANGA

addPaper(
"form2",
"physics",
"Shinyanga Annual Physics 2023",
"annual",
"shinyanga",
2023,
"pastpapers/form2/physics/annual/shinyanga/2023/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Shinyanga Annual Physics 2024",
"annual",
"shinyanga",
2024,
"pastpapers/form2/physics/annual/shinyanga/2024/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Shinyanga Annual Physics 2025",
"annual",
"shinyanga",
2025,
"pastpapers/form2/physics/annual/shinyanga/2025/paper1.pdf"
);

addPaper(
"form2",
"physics",
"Shinyanga Annual Physics 2026",
"annual",
"shinyanga",
2026,
"pastpapers/form2/physics/annual/shinyanga/2026/paper1.pdf"
);


// =====================================
// FORM 2 CHEMISTRY
// KAGERA + SHINYANGA
// =====================================


// KAGERA

addPaper(
"form2",
"chemistry",
"Kagera Annual Chemistry 2023",
"annual",
"kagera",
2023,
"pastpapers/form2/chemistry/annual/kagera/2023/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Kagera Annual Chemistry 2024",
"annual",
"kagera",
2024,
"pastpapers/form2/chemistry/annual/kagera/2024/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Kagera Annual Chemistry 2025",
"annual",
"kagera",
2025,
"pastpapers/form2/chemistry/annual/kagera/2025/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Kagera Annual Chemistry 2026",
"annual",
"kagera",
2026,
"pastpapers/form2/chemistry/annual/kagera/2026/paper1.pdf"
);


// SHINYANGA

addPaper(
"form2",
"chemistry",
"Shinyanga Annual Chemistry 2023",
"annual",
"shinyanga",
2023,
"pastpapers/form2/chemistry/annual/shinyanga/2023/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Shinyanga Annual Chemistry 2024",
"annual",
"shinyanga",
2024,
"pastpapers/form2/chemistry/annual/shinyanga/2024/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Shinyanga Annual Chemistry 2025",
"annual",
"shinyanga",
2025,
"pastpapers/form2/chemistry/annual/shinyanga/2025/paper1.pdf"
);

addPaper(
"form2",
"chemistry",
"Shinyanga Annual Chemistry 2026",
"annual",
"shinyanga",
2026,
"pastpapers/form2/chemistry/annual/shinyanga/2026/paper1.pdf"
);
// =====================================
// FORM 3 PHYSICS
// DAR ES SALAAM + DODOMA
// =====================================

addPaper("form3","physics","Dar es Salaam Annual Physics 2023","annual","dar_es_salaam",2023,"pastpapers/form3/physics/annual/dar_es_salaam/2023/paper1.pdf");

addPaper("form3","physics","Dar es Salaam Annual Physics 2024","annual","dar_es_salaam",2024,"pastpapers/form3/physics/annual/dar_es_salaam/2024/paper1.pdf");

addPaper("form3","physics","Dar es Salaam Annual Physics 2025","annual","dar_es_salaam",2025,"pastpapers/form3/physics/annual/dar_es_salaam/2025/paper1.pdf");

addPaper("form3","physics","Dar es Salaam Annual Physics 2026","annual","dar_es_salaam",2026,"pastpapers/form3/physics/annual/dar_es_salaam/2026/paper1.pdf");


addPaper("form3","physics","Dodoma Annual Physics 2023","annual","dodoma",2023,"pastpapers/form3/physics/annual/dodoma/2023/paper1.pdf");

addPaper("form3","physics","Dodoma Annual Physics 2024","annual","dodoma",2024,"pastpapers/form3/physics/annual/dodoma/2024/paper1.pdf");

addPaper("form3","physics","Dodoma Annual Physics 2025","annual","dodoma",2025,"pastpapers/form3/physics/annual/dodoma/2025/paper1.pdf");

addPaper("form3","physics","Dodoma Annual Physics 2026","annual","dodoma",2026,"pastpapers/form3/physics/annual/dodoma/2026/paper1.pdf");


// =====================================
// FORM 3 CHEMISTRY
// DAR ES SALAAM + DODOMA
// =====================================

addPaper("form3","chemistry","Dar es Salaam Annual Chemistry 2023","annual","dar_es_salaam",2023,"pastpapers/form3/chemistry/annual/dar_es_salaam/2023/paper1.pdf");

addPaper("form3","chemistry","Dar es Salaam Annual Chemistry 2024","annual","dar_es_salaam",2024,"pastpapers/form3/chemistry/annual/dar_es_salaam/2024/paper1.pdf");

addPaper("form3","chemistry","Dar es Salaam Annual Chemistry 2025","annual","dar_es_salaam",2025,"pastpapers/form3/chemistry/annual/dar_es_salaam/2025/paper1.pdf");

addPaper("form3","chemistry","Dar es Salaam Annual Chemistry 2026","annual","dar_es_salaam",2026,"pastpapers/form3/chemistry/annual/dar_es_salaam/2026/paper1.pdf");


addPaper("form3","chemistry","Dodoma Annual Chemistry 2023","annual","dodoma",2023,"pastpapers/form3/chemistry/annual/dodoma/2023/paper1.pdf");

addPaper("form3","chemistry","Dodoma Annual Chemistry 2024","annual","dodoma",2024,"pastpapers/form3/chemistry/annual/dodoma/2024/paper1.pdf");

addPaper("form3","chemistry","Dodoma Annual Chemistry 2025","annual","dodoma",2025,"pastpapers/form3/chemistry/annual/dodoma/2025/paper1.pdf");

addPaper("form3","chemistry","Dodoma Annual Chemistry 2026","annual","dodoma",2026,"pastpapers/form3/chemistry/annual/dodoma/2026/paper1.pdf");

// =====================================
// FORM 3 PHYSICS
// ARUSHA + MBEYA
// =====================================


// ARUSHA

addPaper("form3","physics","Arusha Annual Physics 2023","annual","arusha",2023,"pastpapers/form3/physics/annual/arusha/2023/paper1.pdf");

addPaper("form3","physics","Arusha Annual Physics 2024","annual","arusha",2024,"pastpapers/form3/physics/annual/arusha/2024/paper1.pdf");

addPaper("form3","physics","Arusha Annual Physics 2025","annual","arusha",2025,"pastpapers/form3/physics/annual/arusha/2025/paper1.pdf");

addPaper("form3","physics","Arusha Annual Physics 2026","annual","arusha",2026,"pastpapers/form3/physics/annual/arusha/2026/paper1.pdf");


// MBEYA

addPaper("form3","physics","Mbeya Annual Physics 2023","annual","mbeya",2023,"pastpapers/form3/physics/annual/mbeya/2023/paper1.pdf");

addPaper("form3","physics","Mbeya Annual Physics 2024","annual","mbeya",2024,"pastpapers/form3/physics/annual/mbeya/2024/paper1.pdf");

addPaper("form3","physics","Mbeya Annual Physics 2025","annual","mbeya",2025,"pastpapers/form3/physics/annual/mbeya/2025/paper1.pdf");

addPaper("form3","physics","Mbeya Annual Physics 2026","annual","mbeya",2026,"pastpapers/form3/physics/annual/mbeya/2026/paper1.pdf");



// =====================================
// FORM 3 CHEMISTRY
// ARUSHA + MBEYA
// =====================================


// ARUSHA

addPaper("form3","chemistry","Arusha Annual Chemistry 2023","annual","arusha",2023,"pastpapers/form3/chemistry/annual/arusha/2023/paper1.pdf");

addPaper("form3","chemistry","Arusha Annual Chemistry 2024","annual","arusha",2024,"pastpapers/form3/chemistry/annual/arusha/2024/paper1.pdf");

addPaper("form3","chemistry","Arusha Annual Chemistry 2025","annual","arusha",2025,"pastpapers/form3/chemistry/annual/arusha/2025/paper1.pdf");

addPaper("form3","chemistry","Arusha Annual Chemistry 2026","annual","arusha",2026,"pastpapers/form3/chemistry/annual/arusha/2026/paper1.pdf");


// MBEYA

addPaper("form3","chemistry","Mbeya Annual Chemistry 2023","annual","mbeya",2023,"pastpapers/form3/chemistry/annual/mbeya/2023/paper1.pdf");

addPaper("form3","chemistry","Mbeya Annual Chemistry 2024","annual","mbeya",2024,"pastpapers/form3/chemistry/annual/mbeya/2024/paper1.pdf");

addPaper("form3","chemistry","Mbeya Annual Chemistry 2025","annual","mbeya",2025,"pastpapers/form3/chemistry/annual/mbeya/2025/paper1.pdf");

addPaper("form3","chemistry","Mbeya Annual Chemistry 2026","annual","mbeya",2026,"pastpapers/form3/chemistry/annual/mbeya/2026/paper1.pdf");
// =====================================
// FORM 3 PHYSICS
// KAGERA + SHINYANGA
// =====================================


// KAGERA

addPaper("form3","physics","Kagera Annual Physics 2023","annual","kagera",2023,"pastpapers/form3/physics/annual/kagera/2023/paper1.pdf");

addPaper("form3","physics","Kagera Annual Physics 2024","annual","kagera",2024,"pastpapers/form3/physics/annual/kagera/2024/paper1.pdf");

addPaper("form3","physics","Kagera Annual Physics 2025","annual","kagera",2025,"pastpapers/form3/physics/annual/kagera/2025/paper1.pdf");

addPaper("form3","physics","Kagera Annual Physics 2026","annual","kagera",2026,"pastpapers/form3/physics/annual/kagera/2026/paper1.pdf");


// SHINYANGA

addPaper("form3","physics","Shinyanga Annual Physics 2023","annual","shinyanga",2023,"pastpapers/form3/physics/annual/shinyanga/2023/paper1.pdf");

addPaper("form3","physics","Shinyanga Annual Physics 2024","annual","shinyanga",2024,"pastpapers/form3/physics/annual/shinyanga/2024/paper1.pdf");

addPaper("form3","physics","Shinyanga Annual Physics 2025","annual","shinyanga",2025,"pastpapers/form3/physics/annual/shinyanga/2025/paper1.pdf");

addPaper("form3","physics","Shinyanga Annual Physics 2026","annual","shinyanga",2026,"pastpapers/form3/physics/annual/shinyanga/2026/paper1.pdf");



// =====================================
// FORM 3 CHEMISTRY
// KAGERA + SHINYANGA
// =====================================


// KAGERA

addPaper("form3","chemistry","Kagera Annual Chemistry 2023","annual","kagera",2023,"pastpapers/form3/chemistry/annual/kagera/2023/paper1.pdf");

addPaper("form3","chemistry","Kagera Annual Chemistry 2024","annual","kagera",2024,"pastpapers/form3/chemistry/annual/kagera/2024/paper1.pdf");

addPaper("form3","chemistry","Kagera Annual Chemistry 2025","annual","kagera",2025,"pastpapers/form3/chemistry/annual/kagera/2025/paper1.pdf");

addPaper("form3","chemistry","Kagera Annual Chemistry 2026","annual","kagera",2026,"pastpapers/form3/chemistry/annual/kagera/2026/paper1.pdf");


// SHINYANGA

addPaper("form3","chemistry","Shinyanga Annual Chemistry 2023","annual","shinyanga",2023,"pastpapers/form3/chemistry/annual/shinyanga/2023/paper1.pdf");

addPaper("form3","chemistry","Shinyanga Annual Chemistry 2024","annual","shinyanga",2024,"pastpapers/form3/chemistry/annual/shinyanga/2024/paper1.pdf");

addPaper("form3","chemistry","Shinyanga Annual Chemistry 2025","annual","shinyanga",2025,"pastpapers/form3/chemistry/annual/shinyanga/2025/paper1.pdf");

addPaper("form3","chemistry","Shinyanga Annual Chemistry 2026","annual","shinyanga",2026,"pastpapers/form3/chemistry/annual/shinyanga/2026/paper1.pdf");

// =====================================
// FORM 4 PHYSICS
// DAR ES SALAAM + DODOMA
// =====================================


// DAR ES SALAAM

addPaper("form4","physics","Dar es Salaam Mock Physics 2023","mock","dar_es_salaam",2023,"pastpapers/form4/physics/mock/dar_es_salaam/2023/paper1.pdf");

addPaper("form4","physics","Dar es Salaam Mock Physics 2024","mock","dar_es_salaam",2024,"pastpapers/form4/physics/mock/dar_es_salaam/2024/paper1.pdf");

addPaper("form4","physics","Dar es Salaam Mock Physics 2025","mock","dar_es_salaam",2025,"pastpapers/form4/physics/mock/dar_es_salaam/2025/paper1.pdf");

addPaper("form4","physics","Dar es Salaam Mock Physics 2026","mock","dar_es_salaam",2026,"pastpapers/form4/physics/mock/dar_es_salaam/2026/paper1.pdf");


// DODOMA

addPaper("form4","physics","Dodoma Mock Physics 2023","mock","dodoma",2023,"pastpapers/form4/physics/mock/dodoma/2023/paper1.pdf");

addPaper("form4","physics","Dodoma Mock Physics 2024","mock","dodoma",2024,"pastpapers/form4/physics/mock/dodoma/2024/paper1.pdf");

addPaper("form4","physics","Dodoma Mock Physics 2025","mock","dodoma",2025,"pastpapers/form4/physics/mock/dodoma/2025/paper1.pdf");

addPaper("form4","physics","Dodoma Mock Physics 2026","mock","dodoma",2026,"pastpapers/form4/physics/mock/dodoma/2026/paper1.pdf");



// =====================================
// FORM 4 CHEMISTRY
// DAR ES SALAAM + DODOMA
// =====================================


// DAR ES SALAAM

addPaper("form4","chemistry","Dar es Salaam Mock Chemistry 2023","mock","dar_es_salaam",2023,"pastpapers/form4/chemistry/mock/dar_es_salaam/2023/paper1.pdf");

addPaper("form4","chemistry","Dar es Salaam Mock Chemistry 2024","mock","dar_es_salaam",2024,"pastpapers/form4/chemistry/mock/dar_es_salaam/2024/paper1.pdf");

addPaper("form4","chemistry","Dar es Salaam Mock Chemistry 2025","mock","dar_es_salaam",2025,"pastpapers/form4/chemistry/mock/dar_es_salaam/2025/paper1.pdf");

addPaper("form4","chemistry","Dar es Salaam Mock Chemistry 2026","mock","dar_es_salaam",2026,"pastpapers/form4/chemistry/mock/dar_es_salaam/2026/paper1.pdf");


// DODOMA

addPaper("form4","chemistry","Dodoma Mock Chemistry 2023","mock","dodoma",2023,"pastpapers/form4/chemistry/mock/dodoma/2023/paper1.pdf");

addPaper("form4","chemistry","Dodoma Mock Chemistry 2024","mock","dodoma",2024,"pastpapers/form4/chemistry/mock/dodoma/2024/paper1.pdf");

addPaper("form4","chemistry","Dodoma Mock Chemistry 2025","mock","dodoma",2025,"pastpapers/form4/chemistry/mock/dodoma/2025/paper1.pdf");

addPaper("form4","chemistry","Dodoma Mock Chemistry 2026","mock","dodoma",2026,"pastpapers/form4/chemistry/mock/dodoma/2026/paper1.pdf");
// =====================================
// FORM 4 PHYSICS
// ARUSHA + MBEYA
// =====================================


// ARUSHA

addPaper("form4","physics","Arusha Mock Physics 2023","mock","arusha",2023,"pastpapers/form4/physics/mock/arusha/2023/paper1.pdf");

addPaper("form4","physics","Arusha Mock Physics 2024","mock","arusha",2024,"pastpapers/form4/physics/mock/arusha/2024/paper1.pdf");

addPaper("form4","physics","Arusha Mock Physics 2025","mock","arusha",2025,"pastpapers/form4/physics/mock/arusha/2025/paper1.pdf");

addPaper("form4","physics","Arusha Mock Physics 2026","mock","arusha",2026,"pastpapers/form4/physics/mock/arusha/2026/paper1.pdf");


// MBEYA

addPaper("form4","physics","Mbeya Mock Physics 2023","mock","mbeya",2023,"pastpapers/form4/physics/mock/mbeya/2023/paper1.pdf");

addPaper("form4","physics","Mbeya Mock Physics 2024","mock","mbeya",2024,"pastpapers/form4/physics/mock/mbeya/2024/paper1.pdf");

addPaper("form4","physics","Mbeya Mock Physics 2025","mock","mbeya",2025,"pastpapers/form4/physics/mock/mbeya/2025/paper1.pdf");

addPaper("form4","physics","Mbeya Mock Physics 2026","mock","mbeya",2026,"pastpapers/form4/physics/mock/mbeya/2026/paper1.pdf");



// =====================================
// FORM 4 CHEMISTRY
// ARUSHA + MBEYA
// =====================================


// ARUSHA

addPaper("form4","chemistry","Arusha Mock Chemistry 2023","mock","arusha",2023,"pastpapers/form4/chemistry/mock/arusha/2023/paper1.pdf");

addPaper("form4","chemistry","Arusha Mock Chemistry 2024","mock","arusha",2024,"pastpapers/form4/chemistry/mock/arusha/2024/paper1.pdf");

addPaper("form4","chemistry","Arusha Mock Chemistry 2025","mock","arusha",2025,"pastpapers/form4/chemistry/mock/arusha/2025/paper1.pdf");

addPaper("form4","chemistry","Arusha Mock Chemistry 2026","mock","arusha",2026,"pastpapers/form4/chemistry/mock/arusha/2026/paper1.pdf");


// MBEYA

addPaper("form4","chemistry","Mbeya Mock Chemistry 2023","mock","mbeya",2023,"pastpapers/form4/chemistry/mock/mbeya/2023/paper1.pdf");

addPaper("form4","chemistry","Mbeya Mock Chemistry 2024","mock","mbeya",2024,"pastpapers/form4/chemistry/mock/mbeya/2024/paper1.pdf");

addPaper("form4","chemistry","Mbeya Mock Chemistry 2025","mock","mbeya",2025,"pastpapers/form4/chemistry/mock/mbeya/2025/paper1.pdf");

addPaper("form4","chemistry","Mbeya Mock Chemistry 2026","mock","mbeya",2026,"pastpapers/form4/chemistry/mock/mbeya/2026/paper1.pdf");
// =====================================
// FORM 4 PHYSICS
// KAGERA + SHINYANGA
// =====================================


// KAGERA

addPaper("form4","physics","Kagera Mock Physics 2023","mock","kagera",2023,"pastpapers/form4/physics/mock/kagera/2023/paper1.pdf");

addPaper("form4","physics","Kagera Mock Physics 2024","mock","kagera",2024,"pastpapers/form4/physics/mock/kagera/2024/paper1.pdf");

addPaper("form4","physics","Kagera Mock Physics 2025","mock","kagera",2025,"pastpapers/form4/physics/mock/kagera/2025/paper1.pdf");

addPaper("form4","physics","Kagera Mock Physics 2026","mock","kagera",2026,"pastpapers/form4/physics/mock/kagera/2026/paper1.pdf");


// SHINYANGA

addPaper("form4","physics","Shinyanga Mock Physics 2023","mock","shinyanga",2023,"pastpapers/form4/physics/mock/shinyanga/2023/paper1.pdf");

addPaper("form4","physics","Shinyanga Mock Physics 2024","mock","shinyanga",2024,"pastpapers/form4/physics/mock/shinyanga/2024/paper1.pdf");

addPaper("form4","physics","Shinyanga Mock Physics 2025","mock","shinyanga",2025,"pastpapers/form4/physics/mock/shinyanga/2025/paper1.pdf");

addPaper("form4","physics","Shinyanga Mock Physics 2026","mock","shinyanga",2026,"pastpapers/form4/physics/mock/shinyanga/2026/paper1.pdf");



// =====================================
// FORM 4 CHEMISTRY
// KAGERA + SHINYANGA
// =====================================


// KAGERA

addPaper("form4","chemistry","Kagera Mock Chemistry 2023","mock","kagera",2023,"pastpapers/form4/chemistry/mock/kagera/2023/paper1.pdf");

addPaper("form4","chemistry","Kagera Mock Chemistry 2024","mock","kagera",2024,"pastpapers/form4/chemistry/mock/kagera/2024/paper1.pdf");

addPaper("form4","chemistry","Kagera Mock Chemistry 2025","mock","kagera",2025,"pastpapers/form4/chemistry/mock/kagera/2025/paper1.pdf");

addPaper("form4","chemistry","Kagera Mock Chemistry 2026","mock","kagera",2026,"pastpapers/form4/chemistry/mock/kagera/2026/paper1.pdf");


// SHINYANGA

addPaper("form4","chemistry","Shinyanga Mock Chemistry 2023","mock","shinyanga",2023,"pastpapers/form4/chemistry/mock/shinyanga/2023/paper1.pdf");

addPaper("form4","chemistry","Shinyanga Mock Chemistry 2024","mock","shinyanga",2024,"pastpapers/form4/chemistry/mock/shinyanga/2024/paper1.pdf");

addPaper("form4","chemistry","Shinyanga Mock Chemistry 2025","mock","shinyanga",2025,"pastpapers/form4/chemistry/mock/shinyanga/2025/paper1.pdf");

addPaper("form4","chemistry","Shinyanga Mock Chemistry 2026","mock","shinyanga",2026,"pastpapers/form4/chemistry/mock/shinyanga/2026/paper1.pdf");

// =====================================
// FORM 4 NECTA PAPERS
// =====================================


// PHYSICS NECTA

addPaper(
"form4",
"physics",
"NECTA Form Four Physics 2023",
"necta",
"national",
2023,
"pastpapers/form4/physics/necta/national/2023/physics.pdf"
);

addPaper(
"form4",
"physics",
"NECTA Form Four Physics 2024",
"necta",
"national",
2024,
"pastpapers/form4/physics/necta/national/2024/physics.pdf"
);

addPaper(
"form4",
"physics",
"NECTA Form Four Physics 2025",
"necta",
"national",
2025,
"pastpapers/form4/physics/necta/national/2025/physics.pdf"
);


// CHEMISTRY NECTA

addPaper(
"form4",
"chemistry",
"NECTA Form Four Chemistry 2023",
"necta",
"national",
2023,
"pastpapers/form4/chemistry/necta/national/2023/chemistry.pdf"
);

addPaper(
"form4",
"chemistry",
"NECTA Form Four Chemistry 2024",
"necta",
"national",
2024,
"pastpapers/form4/chemistry/necta/national/2024/chemistry.pdf"
);

addPaper(
"form4",
"chemistry",
"NECTA Form Four Chemistry 2025",
"necta",
"national",
2025,
"pastpapers/form4/chemistry/necta/national/2025/chemistry.pdf"
);


// PRE-NECTA PHYSICS

addPaper(
"form4",
"physics",
"National Pre-NECTA Physics 2025",
"pre_necta",
"national",
2025,
"pastpapers/form4/physics/pre_necta/national/2025/physics.pdf"
);


// PRE-NECTA CHEMISTRY

addPaper(
"form4",
"chemistry",
"National Pre-NECTA Chemistry 2025",
"pre_necta",
"national",
2025,
"pastpapers/form4/chemistry/pre_necta/national/2025/chemistry.pdf"
);


// JOINT EXAMS

addPaper(
"form4",
"physics",
"Joint Physics Examination 2025",
"joint",
"national",
2025,
"pastpapers/form4/physics/joint/national/2025/physics.pdf"
);


addPaper(
"form4",
"chemistry",
"Joint Chemistry Examination 2025",
"joint",
"national",
2025,
"pastpapers/form4/chemistry/joint/national/2025/chemistry.pdf"
);

// =====================================
// FORM 5 PHYSICS
// DAR ES SALAAM + DODOMA
// =====================================


// DAR ES SALAAM

addPaper("form5","physics","Dar es Salaam Annual Physics 2023","annual","dar_es_salaam",2023,"pastpapers/form5/physics/annual/dar_es_salaam/2023/paper1.pdf");

addPaper("form5","physics","Dar es Salaam Annual Physics 2024","annual","dar_es_salaam",2024,"pastpapers/form5/physics/annual/dar_es_salaam/2024/paper1.pdf");

addPaper("form5","physics","Dar es Salaam Annual Physics 2025","annual","dar_es_salaam",2025,"pastpapers/form5/physics/annual/dar_es_salaam/2025/paper1.pdf");

addPaper("form5","physics","Dar es Salaam Annual Physics 2026","annual","dar_es_salaam",2026,"pastpapers/form5/physics/annual/dar_es_salaam/2026/paper1.pdf");


// DODOMA

addPaper("form5","physics","Dodoma Annual Physics 2023","annual","dodoma",2023,"pastpapers/form5/physics/annual/dodoma/2023/paper1.pdf");

addPaper("form5","physics","Dodoma Annual Physics 2024","annual","dodoma",2024,"pastpapers/form5/physics/annual/dodoma/2024/paper1.pdf");

addPaper("form5","physics","Dodoma Annual Physics 2025","annual","dodoma",2025,"pastpapers/form5/physics/annual/dodoma/2025/paper1.pdf");

addPaper("form5","physics","Dodoma Annual Physics 2026","annual","dodoma",2026,"pastpapers/form5/physics/annual/dodoma/2026/paper1.pdf");



// =====================================
// FORM 5 CHEMISTRY
// DAR ES SALAAM + DODOMA
// =====================================


// DAR ES SALAAM

addPaper("form5","chemistry","Dar es Salaam Annual Chemistry 2023","annual","dar_es_salaam",2023,"pastpapers/form5/chemistry/annual/dar_es_salaam/2023/paper1.pdf");

addPaper("form5","chemistry","Dar es Salaam Annual Chemistry 2024","annual","dar_es_salaam",2024,"pastpapers/form5/chemistry/annual/dar_es_salaam/2024/paper1.pdf");

addPaper("form5","chemistry","Dar es Salaam Annual Chemistry 2025","annual","dar_es_salaam",2025,"pastpapers/form5/chemistry/annual/dar_es_salaam/2025/paper1.pdf");

addPaper("form5","chemistry","Dar es Salaam Annual Chemistry 2026","annual","dar_es_salaam",2026,"pastpapers/form5/chemistry/annual/dar_es_salaam/2026/paper1.pdf");


// DODOMA

addPaper("form5","chemistry","Dodoma Annual Chemistry 2023","annual","dodoma",2023,"pastpapers/form5/chemistry/annual/dodoma/2023/paper1.pdf");

addPaper("form5","chemistry","Dodoma Annual Chemistry 2024","annual","dodoma",2024,"pastpapers/form5/chemistry/annual/dodoma/2024/paper1.pdf");

addPaper("form5","chemistry","Dodoma Annual Chemistry 2025","annual","dodoma",2025,"pastpapers/form5/chemistry/annual/dodoma/2025/paper1.pdf");

addPaper("form5","chemistry","Dodoma Annual Chemistry 2026","annual","dodoma",2026,"pastpapers/form5/chemistry/annual/dodoma/2026/paper1.pdf");

// =====================================
// FORM 5 PHYSICS
// ARUSHA + MBEYA
// =====================================


// ARUSHA

addPaper("form5","physics","Arusha Annual Physics 2023","annual","arusha",2023,"pastpapers/form5/physics/annual/arusha/2023/paper1.pdf");

addPaper("form5","physics","Arusha Annual Physics 2024","annual","arusha",2024,"pastpapers/form5/physics/annual/arusha/2024/paper1.pdf");

addPaper("form5","physics","Arusha Annual Physics 2025","annual","arusha",2025,"pastpapers/form5/physics/annual/arusha/2025/paper1.pdf");

addPaper("form5","physics","Arusha Annual Physics 2026","annual","arusha",2026,"pastpapers/form5/physics/annual/arusha/2026/paper1.pdf");


// MBEYA

addPaper("form5","physics","Mbeya Annual Physics 2023","annual","mbeya",2023,"pastpapers/form5/physics/annual/mbeya/2023/paper1.pdf");

addPaper("form5","physics","Mbeya Annual Physics 2024","annual","mbeya",2024,"pastpapers/form5/physics/annual/mbeya/2024/paper1.pdf");

addPaper("form5","physics","Mbeya Annual Physics 2025","annual","mbeya",2025,"pastpapers/form5/physics/annual/mbeya/2025/paper1.pdf");

addPaper("form5","physics","Mbeya Annual Physics 2026","annual","mbeya",2026,"pastpapers/form5/physics/annual/mbeya/2026/paper1.pdf");



// =====================================
// FORM 5 CHEMISTRY
// ARUSHA + MBEYA
// =====================================


// ARUSHA

addPaper("form5","chemistry","Arusha Annual Chemistry 2023","annual","arusha",2023,"pastpapers/form5/chemistry/annual/arusha/2023/paper1.pdf");

addPaper("form5","chemistry","Arusha Annual Chemistry 2024","annual","arusha",2024,"pastpapers/form5/chemistry/annual/arusha/2024/paper1.pdf");

addPaper("form5","chemistry","Arusha Annual Chemistry 2025","annual","arusha",2025,"pastpapers/form5/chemistry/annual/arusha/2025/paper1.pdf");

addPaper("form5","chemistry","Arusha Annual Chemistry 2026","annual","arusha",2026,"pastpapers/form5/chemistry/annual/arusha/2026/paper1.pdf");


// MBEYA

addPaper("form5","chemistry","Mbeya Annual Chemistry 2023","annual","mbeya",2023,"pastpapers/form5/chemistry/annual/mbeya/2023/paper1.pdf");

addPaper("form5","chemistry","Mbeya Annual Chemistry 2024","annual","mbeya",2024,"pastpapers/form5/chemistry/annual/mbeya/2024/paper1.pdf");

addPaper("form5","chemistry","Mbeya Annual Chemistry 2025","annual","mbeya",2025,"pastpapers/form5/chemistry/annual/mbeya/2025/paper1.pdf");

addPaper("form5","chemistry","Mbeya Annual Chemistry 2026","annual","mbeya",2026,"pastpapers/form5/chemistry/annual/mbeya/2026/paper1.pdf");

// =====================================
// FORM 5 PHYSICS
// KAGERA + SHINYANGA
// =====================================


// KAGERA

addPaper("form5","physics","Kagera Annual Physics 2023","annual","kagera",2023,"pastpapers/form5/physics/annual/kagera/2023/paper1.pdf");

addPaper("form5","physics","Kagera Annual Physics 2024","annual","kagera",2024,"pastpapers/form5/physics/annual/kagera/2024/paper1.pdf");

addPaper("form5","physics","Kagera Annual Physics 2025","annual","kagera",2025,"pastpapers/form5/physics/annual/kagera/2025/paper1.pdf");

addPaper("form5","physics","Kagera Annual Physics 2026","annual","kagera",2026,"pastpapers/form5/physics/annual/kagera/2026/paper1.pdf");


// SHINYANGA

addPaper("form5","physics","Shinyanga Annual Physics 2023","annual","shinyanga",2023,"pastpapers/form5/physics/annual/shinyanga/2023/paper1.pdf");

addPaper("form5","physics","Shinyanga Annual Physics 2024","annual","shinyanga",2024,"pastpapers/form5/physics/annual/shinyanga/2024/paper1.pdf");

addPaper("form5","physics","Shinyanga Annual Physics 2025","annual","shinyanga",2025,"pastpapers/form5/physics/annual/shinyanga/2025/paper1.pdf");

addPaper("form5","physics","Shinyanga Annual Physics 2026","annual","shinyanga",2026,"pastpapers/form5/physics/annual/shinyanga/2026/paper1.pdf");



// =====================================
// FORM 5 CHEMISTRY
// KAGERA + SHINYANGA
// =====================================


// KAGERA

addPaper("form5","chemistry","Kagera Annual Chemistry 2023","annual","kagera",2023,"pastpapers/form5/chemistry/annual/kagera/2023/paper1.pdf");

addPaper("form5","chemistry","Kagera Annual Chemistry 2024","annual","kagera",2024,"pastpapers/form5/chemistry/annual/kagera/2024/paper1.pdf");

addPaper("form5","chemistry","Kagera Annual Chemistry 2025","annual","kagera",2025,"pastpapers/form5/chemistry/annual/kagera/2025/paper1.pdf");

addPaper("form5","chemistry","Kagera Annual Chemistry 2026","annual","kagera",2026,"pastpapers/form5/chemistry/annual/kagera/2026/paper1.pdf");


// SHINYANGA

addPaper("form5","chemistry","Shinyanga Annual Chemistry 2023","annual","shinyanga",2023,"pastpapers/form5/chemistry/annual/shinyanga/2023/paper1.pdf");

addPaper("form5","chemistry","Shinyanga Annual Chemistry 2024","annual","shinyanga",2024,"pastpapers/form5/chemistry/annual/shinyanga/2024/paper1.pdf");

addPaper("form5","chemistry","Shinyanga Annual Chemistry 2025","annual","shinyanga",2025,"pastpapers/form5/chemistry/annual/shinyanga/2025/paper1.pdf");

addPaper("form5","chemistry","Shinyanga Annual Chemistry 2026","annual","shinyanga",2026,"pastpapers/form5/chemistry/annual/shinyanga/2026/paper1.pdf");

// =====================================
// FORM 6 PHYSICS
// DAR ES SALAAM + DODOMA
// =====================================


// DAR ES SALAAM

addPaper("form6","physics","Dar es Salaam Annual Physics 2023","annual","dar_es_salaam",2023,"pastpapers/form6/physics/annual/dar_es_salaam/2023/paper1.pdf");

addPaper("form6","physics","Dar es Salaam Annual Physics 2024","annual","dar_es_salaam",2024,"pastpapers/form6/physics/annual/dar_es_salaam/2024/paper1.pdf");

addPaper("form6","physics","Dar es Salaam Annual Physics 2025","annual","dar_es_salaam",2025,"pastpapers/form6/physics/annual/dar_es_salaam/2025/paper1.pdf");

addPaper("form6","physics","Dar es Salaam Annual Physics 2026","annual","dar_es_salaam",2026,"pastpapers/form6/physics/annual/dar_es_salaam/2026/paper1.pdf");


// DODOMA

addPaper("form6","physics","Dodoma Annual Physics 2023","annual","dodoma",2023,"pastpapers/form6/physics/annual/dodoma/2023/paper1.pdf");

addPaper("form6","physics","Dodoma Annual Physics 2024","annual","dodoma",2024,"pastpapers/form6/physics/annual/dodoma/2024/paper1.pdf");

addPaper("form6","physics","Dodoma Annual Physics 2025","annual","dodoma",2025,"pastpapers/form6/physics/annual/dodoma/2025/paper1.pdf");

addPaper("form6","physics","Dodoma Annual Physics 2026","annual","dodoma",2026,"pastpapers/form6/physics/annual/dodoma/2026/paper1.pdf");



// =====================================
// FORM 6 CHEMISTRY
// DAR ES SALAAM + DODOMA
// =====================================


// DAR ES SALAAM

addPaper("form6","chemistry","Dar es Salaam Annual Chemistry 2023","annual","dar_es_salaam",2023,"pastpapers/form6/chemistry/annual/dar_es_salaam/2023/paper1.pdf");

addPaper("form6","chemistry","Dar es Salaam Annual Chemistry 2024","annual","dar_es_salaam",2024,"pastpapers/form6/chemistry/annual/dar_es_salaam/2024/paper1.pdf");

addPaper("form6","chemistry","Dar es Salaam Annual Chemistry 2025","annual","dar_es_salaam",2025,"pastpapers/form6/chemistry/annual/dar_es_salaam/2025/paper1.pdf");

addPaper("form6","chemistry","Dar es Salaam Annual Chemistry 2026","annual","dar_es_salaam",2026,"pastpapers/form6/chemistry/annual/dar_es_salaam/2026/paper1.pdf");


// DODOMA

addPaper("form6","chemistry","Dodoma Annual Chemistry 2023","annual","dodoma",2023,"pastpapers/form6/chemistry/annual/dodoma/2023/paper1.pdf");

addPaper("form6","chemistry","Dodoma Annual Chemistry 2024","annual","dodoma",2024,"pastpapers/form6/chemistry/annual/dodoma/2024/paper1.pdf");

addPaper("form6","chemistry","Dodoma Annual Chemistry 2025","annual","dodoma",2025,"pastpapers/form6/chemistry/annual/dodoma/2025/paper1.pdf");

addPaper("form6","chemistry","Dodoma Annual Chemistry 2026","annual","dodoma",2026,"pastpapers/form6/chemistry/annual/dodoma/2026/paper1.pdf");

// =====================================
// FORM 6 PHYSICS
// ARUSHA + MBEYA
// =====================================


// ARUSHA

addPaper("form6","physics","Arusha Annual Physics 2023","annual","arusha",2023,"pastpapers/form6/physics/annual/arusha/2023/paper1.pdf");

addPaper("form6","physics","Arusha Annual Physics 2024","annual","arusha",2024,"pastpapers/form6/physics/annual/arusha/2024/paper1.pdf");

addPaper("form6","physics","Arusha Annual Physics 2025","annual","arusha",2025,"pastpapers/form6/physics/annual/arusha/2025/paper1.pdf");

addPaper("form6","physics","Arusha Annual Physics 2026","annual","arusha",2026,"pastpapers/form6/physics/annual/arusha/2026/paper1.pdf");


// MBEYA

addPaper("form6","physics","Mbeya Annual Physics 2023","annual","mbeya",2023,"pastpapers/form6/physics/annual/mbeya/2023/paper1.pdf");

addPaper("form6","physics","Mbeya Annual Physics 2024","annual","mbeya",2024,"pastpapers/form6/physics/annual/mbeya/2024/paper1.pdf");

addPaper("form6","physics","Mbeya Annual Physics 2025","annual","mbeya",2025,"pastpapers/form6/physics/annual/mbeya/2025/paper1.pdf");

addPaper("form6","physics","Mbeya Annual Physics 2026","annual","mbeya",2026,"pastpapers/form6/physics/annual/mbeya/2026/paper1.pdf");



// =====================================
// FORM 6 CHEMISTRY
// ARUSHA + MBEYA
// =====================================


// ARUSHA

addPaper("form6","chemistry","Arusha Annual Chemistry 2023","annual","arusha",2023,"pastpapers/form6/chemistry/annual/arusha/2023/paper1.pdf");

addPaper("form6","chemistry","Arusha Annual Chemistry 2024","annual","arusha",2024,"pastpapers/form6/chemistry/annual/arusha/2024/paper1.pdf");

addPaper("form6","chemistry","Arusha Annual Chemistry 2025","annual","arusha",2025,"pastpapers/form6/chemistry/annual/arusha/2025/paper1.pdf");

addPaper("form6","chemistry","Arusha Annual Chemistry 2026","annual","arusha",2026,"pastpapers/form6/chemistry/annual/arusha/2026/paper1.pdf");


// MBEYA

addPaper("form6","chemistry","Mbeya Annual Chemistry 2023","annual","mbeya",2023,"pastpapers/form6/chemistry/annual/mbeya/2023/paper1.pdf");

addPaper("form6","chemistry","Mbeya Annual Chemistry 2024","annual","mbeya",2024,"pastpapers/form6/chemistry/annual/mbeya/2024/paper1.pdf");

addPaper("form6","chemistry","Mbeya Annual Chemistry 2025","annual","mbeya",2025,"pastpapers/form6/chemistry/annual/mbeya/2025/paper1.pdf");

addPaper("form6","chemistry","Mbeya Annual Chemistry 2026","annual","mbeya",2026,"pastpapers/form6/chemistry/annual/mbeya/2026/paper1.pdf");

// =====================================
// FORM 6 PHYSICS
// KAGERA + SHINYANGA
// =====================================


// KAGERA

addPaper("form6","physics","Kagera Annual Physics 2023","annual","kagera",2023,"pastpapers/form6/physics/annual/kagera/2023/paper1.pdf");

addPaper("form6","physics","Kagera Annual Physics 2024","annual","kagera",2024,"pastpapers/form6/physics/annual/kagera/2024/paper1.pdf");

addPaper("form6","physics","Kagera Annual Physics 2025","annual","kagera",2025,"pastpapers/form6/physics/annual/kagera/2025/paper1.pdf");

addPaper("form6","physics","Kagera Annual Physics 2026","annual","kagera",2026,"pastpapers/form6/physics/annual/kagera/2026/paper1.pdf");


// SHINYANGA

addPaper("form6","physics","Shinyanga Annual Physics 2023","annual","shinyanga",2023,"pastpapers/form6/physics/annual/shinyanga/2023/paper1.pdf");

addPaper("form6","physics","Shinyanga Annual Physics 2024","annual","shinyanga",2024,"pastpapers/form6/physics/annual/shinyanga/2024/paper1.pdf");

addPaper("form6","physics","Shinyanga Annual Physics 2025","annual","shinyanga",2025,"pastpapers/form6/physics/annual/shinyanga/2025/paper1.pdf");

addPaper("form6","physics","Shinyanga Annual Physics 2026","annual","shinyanga",2026,"pastpapers/form6/physics/annual/shinyanga/2026/paper1.pdf");



// =====================================
// FORM 6 CHEMISTRY
// KAGERA + SHINYANGA
// =====================================


// KAGERA

addPaper("form6","chemistry","Kagera Annual Chemistry 2023","annual","kagera",2023,"pastpapers/form6/chemistry/annual/kagera/2023/paper1.pdf");

addPaper("form6","chemistry","Kagera Annual Chemistry 2024","annual","kagera",2024,"pastpapers/form6/chemistry/annual/kagera/2024/paper1.pdf");

addPaper("form6","chemistry","Kagera Annual Chemistry 2025","annual","kagera",2025,"pastpapers/form6/chemistry/annual/kagera/2025/paper1.pdf");

addPaper("form6","chemistry","Kagera Annual Chemistry 2026","annual","kagera",2026,"pastpapers/form6/chemistry/annual/kagera/2026/paper1.pdf");


// SHINYANGA

addPaper("form6","chemistry","Shinyanga Annual Chemistry 2023","annual","shinyanga",2023,"pastpapers/form6/chemistry/annual/shinyanga/2023/paper1.pdf");

addPaper("form6","chemistry","Shinyanga Annual Chemistry 2024","annual","shinyanga",2024,"pastpapers/form6/chemistry/annual/shinyanga/2024/paper1.pdf");

addPaper("form6","chemistry","Shinyanga Annual Chemistry 2025","annual","shinyanga",2025,"pastpapers/form6/chemistry/annual/shinyanga/2025/paper1.pdf");

addPaper("form6","chemistry","Shinyanga Annual Chemistry 2026","annual","shinyanga",2026,"pastpapers/form6/chemistry/annual/shinyanga/2026/paper1.pdf");
// =====================================
// FORM 6 NECTA / ACSEE
// =====================================


// PHYSICS ACSEE

addPaper(
"form6",
"physics",
"NECTA ACSEE Physics 2023",
"acsee",
"national",
2023,
"pastpapers/form6/physics/acsee/national/2023/physics.pdf"
);

addPaper(
"form6",
"physics",
"NECTA ACSEE Physics 2024",
"acsee",
"national",
2024,
"pastpapers/form6/physics/acsee/national/2024/physics.pdf"
);

addPaper(
"form6",
"physics",
"NECTA ACSEE Physics 2025",
"acsee",
"national",
2025,
"pastpapers/form6/physics/acsee/national/2025/physics.pdf"
);


// CHEMISTRY ACSEE

addPaper(
"form6",
"chemistry",
"NECTA ACSEE Chemistry 2023",
"acsee",
"national",
2023,
"pastpapers/form6/chemistry/acsee/national/2023/chemistry.pdf"
);

addPaper(
"form6",
"chemistry",
"NECTA ACSEE Chemistry 2024",
"acsee",
"national",
2024,
"pastpapers/form6/chemistry/acsee/national/2024/chemistry.pdf"
);

addPaper(
"form6",
"chemistry",
"NECTA ACSEE Chemistry 2025",
"acsee",
"national",
2025,
"pastpapers/form6/chemistry/acsee/national/2025/chemistry.pdf"
);



// =====================================
// FORM 6 JOINT EXAMS
// =====================================


// PHYSICS

addPaper(
"form6",
"physics",
"Form Six Joint Physics 2025",
"joint",
"national",
2025,
"pastpapers/form6/physics/joint/national/2025/physics.pdf"
);


// CHEMISTRY

addPaper(
"form6",
"chemistry",
"Form Six Joint Chemistry 2025",
"joint",
"national",
2025,
"pastpapers/form6/chemistry/joint/national/2025/chemistry.pdf"
);



// =====================================
// FORM 6 MOCK
// =====================================


// PHYSICS

addPaper(
"form6",
"physics",
"Form Six Mock Physics 2025",
"mock",
"national",
2025,
"pastpapers/form6/physics/mock/national/2025/physics.pdf"
);


// CHEMISTRY

addPaper(
"form6",
"chemistry",
"Form Six Mock Chemistry 2025",
"mock",
"national",
2025,
"pastpapers/form6/chemistry/mock/national/2025/chemistry.pdf"
);
