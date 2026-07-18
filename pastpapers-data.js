const pastPapers = {

form1: {

physics: [

],

chemistry: [

]

},


form2: {

physics: [

],

chemistry: [

]

},


form3: {

physics: [

],

chemistry: [

]

},


form4: {

physics: [

],

chemistry: [

]

},


form5: {

physics: [

],

chemistry: [

]

},


form6: {

physics: [

],

chemistry: [

]

}
// Helper function for adding papers easily

function addPaper(form, subject, title, type, region, year, file){

    pastPapers[form][subject].push({

        title: title,

        type: type,

        region: region,

        year: year,

        file: file

    });

}


// FORM 1 SAMPLE STRUCTURE

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
"chemistry",
"Dodoma Joint Chemistry 2025",
"joint",
"dodoma",
2025,
"pastpapers/form1/chemistry/joint/dodoma/2025/paper1.pdf"
);


// FORM 2 SAMPLE STRUCTURE

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
"chemistry",
"Mbeya Mock Chemistry 2025",
"mock",
"mbeya",
2025,
"pastpapers/form2/chemistry/mock/mbeya/2025/paper1.pdf"
);
 // FORM 3 SAMPLE STRUCTURE

addPaper(
"form3",
"physics",
"Dar es Salaam Joint Physics 2025",
"joint",
"dar_es_salaam",
2025,
"pastpapers/form3/physics/joint/dar_es_salaam/2025/paper1.pdf"
);


addPaper(
"form3",
"chemistry",
"Kagera Annual Chemistry 2024",
"annual",
"kagera",
2024,
"pastpapers/form3/chemistry/annual/kagera/2024/paper1.pdf"
);



// FORM 4 SAMPLE STRUCTURE

addPaper(
"form4",
"physics",
"Dodoma Mock Physics 2025 Set 1",
"mock",
"dodoma",
2025,
"pastpapers/form4/physics/mock/dodoma/2025/set1.pdf"
);


addPaper(
"form4",
"physics",
"Dodoma Mock Physics 2025 Set 2",
"mock",
"dodoma",
2025,
"pastpapers/form4/physics/mock/dodoma/2025/set2.pdf"
);


addPaper(
"form4",
"chemistry",
"Mbeya Pre-NECTA Chemistry 2025",
"pre_necta",
"mbeya",
2025,
"pastpapers/form4/chemistry/pre_necta/mbeya/2025/paper1.pdf"
);
// FORM 4 MORE PAPERS


addPaper(
"form4",
"physics",
"Dar es Salaam Mock Physics 2024",
"mock",
"dar_es_salaam",
2024,
"pastpapers/form4/physics/mock/dar_es_salaam/2024/paper1.pdf"
);


addPaper(
"form4",
"physics",
"Arusha Mock Physics 2025",
"mock",
"arusha",
2025,
"pastpapers/form4/physics/mock/arusha/2025/paper1.pdf"
);


addPaper(
"form4",
"chemistry",
"Dodoma Annual Chemistry 2025",
"annual",
"dodoma",
2025,
"pastpapers/form4/chemistry/annual/dodoma/2025/paper1.pdf"
);


addPaper(
"form4",
"chemistry",
"Kagera Joint Chemistry 2024",
"joint",
"kagera",
2024,
"pastpapers/form4/chemistry/joint/kagera/2024/paper1.pdf"
);



// FORM 5 SAMPLE STRUCTURE


addPaper(
"form5",
"physics",
"Dar es Salaam Annual Physics 2025",
"annual",
"dar_es_salaam",
2025,
"pastpapers/form5/physics/annual/dar_es_salaam/2025/paper1.pdf"
);


addPaper(
"form5",
"chemistry",
"Shinyanga Joint Chemistry 2025",
"joint",
"shinyanga",
2025,
"pastpapers/form5/chemistry/joint/shinyanga/2025/paper1.pdf"
);

// FORM 5 MORE PAPERS


addPaper(
"form5",
"physics",
"Dodoma Mock Physics 2025",
"mock",
"dodoma",
2025,
"pastpapers/form5/physics/mock/dodoma/2025/paper1.pdf"
);


addPaper(
"form5",
"physics",
"Mbeya Annual Physics 2024",
"annual",
"mbeya",
2024,
"pastpapers/form5/physics/annual/mbeya/2024/paper1.pdf"
);


addPaper(
"form5",
"chemistry",
"Arusha Mock Chemistry 2025",
"mock",
"arusha",
2025,
"pastpapers/form5/chemistry/mock/arusha/2025/paper1.pdf"
);


addPaper(
"form5",
"chemistry",
"Kagera Annual Chemistry 2024",
"annual",
"kagera",
2024,
"pastpapers/form5/chemistry/annual/kagera/2024/paper1.pdf"
);



// FORM 6 SAMPLE STRUCTURE


addPaper(
"form6",
"physics",
"Dar es Salaam Mock Physics 2025",
"mock",
"dar_es_salaam",
2025,
"pastpapers/form6/physics/mock/dar_es_salaam/2025/paper1.pdf"
);


addPaper(
"form6",
"chemistry",
"Dodoma Annual Chemistry 2025",
"annual",
"dodoma",
2025,
"pastpapers/form6/chemistry/annual/dodoma/2025/paper1.pdf"
);

// FORM 6 MORE PAPERS


addPaper(
"form6",
"physics",
"Arusha Mock Physics 2025",
"mock",
"arusha",
2025,
"pastpapers/form6/physics/mock/arusha/2025/paper1.pdf"
);


addPaper(
"form6",
"physics",
"Mbeya Joint Physics 2024",
"joint",
"mbeya",
2024,
"pastpapers/form6/physics/joint/mbeya/2024/paper1.pdf"
);


addPaper(
"form6",
"physics",
"Kagera Annual Physics 2025",
"annual",
"kagera",
2025,
"pastpapers/form6/physics/annual/kagera/2025/paper1.pdf"
);


addPaper(
"form6",
"chemistry",
"Shinyanga Mock Chemistry 2025",
"mock",
"shinyanga",
2025,
"pastpapers/form6/chemistry/mock/shinyanga/2025/paper1.pdf"
);


addPaper(
"form6",
"chemistry",
"Mbeya Joint Chemistry 2024",
"joint",
"mbeya",
2024,
"pastpapers/form6/chemistry/joint/mbeya/2024/paper1.pdf"
);



// EXTRA REGIONS SUPPORT

const regions = [
"dar_es_salaam",
"dodoma",
"arusha",
"kagera",
"mbeya",
"shinyanga"
];


const years = [
2023,
2024,
2025,
2026
];
// ADDITIONAL FORM 1 PAPERS


addPaper(
"form1",
"physics",
"Dodoma Terminal Physics 2024",
"terminal",
"dodoma",
2024,
"pastpapers/form1/physics/terminal/dodoma/2024/paper1.pdf"
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
"chemistry",
"Arusha Terminal Chemistry 2024",
"terminal",
"arusha",
2024,
"pastpapers/form1/chemistry/terminal/arusha/2024/paper1.pdf"
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



// ADDITIONAL FORM 2 PAPERS


addPaper(
"form2",
"physics",
"Dar es Salaam Joint Physics 2025",
"joint",
"dar_es_salaam",
2025,
"pastpapers/form2/physics/joint/dar_es_salaam/2025/paper1.pdf"
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
"chemistry",
"Dodoma Joint Chemistry 2025",
"joint",
"dodoma",
2025,
"pastpapers/form2/chemistry/joint/dodoma/2025/paper1.pdf"
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

// ADDITIONAL FORM 3 PAPERS


addPaper(
"form3",
"physics",
"Dodoma Annual Physics 2025",
"annual",
"dodoma",
2025,
"pastpapers/form3/physics/annual/dodoma/2025/paper1.pdf"
);


addPaper(
"form3",
"physics",
"Shinyanga Joint Physics 2024",
"joint",
"shinyanga",
2024,
"pastpapers/form3/physics/joint/shinyanga/2024/paper1.pdf"
);


addPaper(
"form3",
"chemistry",
"Dar es Salaam Terminal Chemistry 2025",
"terminal",
"dar_es_salaam",
2025,
"pastpapers/form3/chemistry/terminal/dar_es_salaam/2025/paper1.pdf"
);


addPaper(
"form3",
"chemistry",
"Arusha Annual Chemistry 2024",
"annual",
"arusha",
2024,
"pastpapers/form3/chemistry/annual/arusha/2024/paper1.pdf"
);



// ADDITIONAL FORM 4 PAPERS


addPaper(
"form4",
"physics",
"Mbeya Mock Physics 2025",
"mock",
"mbeya",
2025,
"pastpapers/form4/physics/mock/mbeya/2025/paper1.pdf"
);


addPaper(
"form4",
"physics",
"Kagera Joint Physics 2024",
"joint",
"kagera",
2024,
"pastpapers/form4/physics/joint/kagera/2024/paper1.pdf"
);


addPaper(
"form4",
"chemistry",
"Dar es Salaam Mock Chemistry 2025",
"mock",
"dar_es_salaam",
2025,
"pastpapers/form4/chemistry/mock/dar_es_salaam/2025/paper1.pdf"
);


addPaper(
"form4",
"chemistry",
"Shinyanga Annual Chemistry 2024",
"annual",
"shinyanga",
2024,
"pastpapers/form4/chemistry/annual/shinyanga/2024/paper1.pdf"
);

// MORE FORM 5 PAPERS


addPaper(
"form5",
"physics",
"Dodoma Joint Physics 2024",
"joint",
"dodoma",
2024,
"pastpapers/form5/physics/joint/dodoma/2024/paper1.pdf"
);


addPaper(
"form5",
"physics",
"Kagera Mock Physics 2025",
"mock",
"kagera",
2025,
"pastpapers/form5/physics/mock/kagera/2025/paper1.pdf"
);


addPaper(
"form5",
"chemistry",
"Mbeya Joint Chemistry 2025",
"joint",
"mbeya",
2025,
"pastpapers/form5/chemistry/joint/mbeya/2025/paper1.pdf"
);


addPaper(
"form5",
"chemistry",
"Dar es Salaam Annual Chemistry 2024",
"annual",
"dar_es_salaam",
2024,
"pastpapers/form5/chemistry/annual/dar_es_salaam/2024/paper1.pdf"
);



// MORE FORM 6 PAPERS


addPaper(
"form6",
"physics",
"Dodoma Joint Physics 2025",
"joint",
"dodoma",
2025,
"pastpapers/form6/physics/joint/dodoma/2025/paper1.pdf"
);


addPaper(
"form6",
"physics",
"Shinyanga Mock Physics 2024",
"mock",
"shinyanga",
2024,
"pastpapers/form6/physics/mock/shinyanga/2024/paper1.pdf"
);


addPaper(
"form6",
"chemistry",
"Arusha Joint Chemistry 2025",
"joint",
"arusha",
2025,
"pastpapers/form6/chemistry/joint/arusha/2025/paper1.pdf"
);


addPaper(
"form6",
"chemistry",
"Kagera Annual Chemistry 2024",
"annual",
"kagera",
2024,
"pastpapers/form6/chemistry/annual/kagera/2024/paper1.pdf"
);
// FINAL SUPPORT DATA


addPaper(
"form4",
"physics",
"NECTA Physics Examination",
"necta",
"national",
2025,
"pastpapers/form4/physics/necta/2025/physics.pdf"
);


addPaper(
"form4",
"chemistry",
"NECTA Chemistry Examination",
"necta",
"national",
2025,
"pastpapers/form4/chemistry/necta/2025/chemistry.pdf"
);



addPaper(
"form6",
"physics",
"NECTA Advanced Physics Examination",
"necta",
"national",
2025,
"pastpapers/form6/physics/necta/2025/physics.pdf"
);


addPaper(
"form6",
"chemistry",
"NECTA Advanced Chemistry Examination",
"necta",
"national",
2025,
"pastpapers/form6/chemistry/necta/2025/chemistry.pdf"
);



// SYSTEM READY MESSAGE

console.log(
"GEPAM Science Hub Past Papers Database Loaded Successfully"
);
};
