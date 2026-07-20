// ==========================================
// GEPAM SCIENCE HUB
// PAST PAPERS DATABASE V2
// ==========================================


// -----------------------------
// DATABASE
// -----------------------------

const pastPapers = {
    form1: { physics: [], chemistry: [] },
    form2: { physics: [], chemistry: [] },
    form3: { physics: [], chemistry: [] },
    form4: { physics: [], chemistry: [] },
    form5: { physics: [], chemistry: [] },
    form6: { physics: [], chemistry: [] }
};


// -----------------------------
// ADD PAPER FUNCTION
// -----------------------------

function addPaper(form, subject, title, type, region, year, file){

    pastPapers[form][subject].push({

        title,
        type,
        region,
        year,
        file

    });

}


// -----------------------------
// YEARS
// -----------------------------

const YEARS = [

2023,
2024,
2025,
2026

];


// -----------------------------
// REGIONS
// -----------------------------

const REGIONS = [

"dar_es_salaam",
"dodoma",
"arusha",
"mbeya",
"kagera",
"shinyanga"

];


// -----------------------------
// SUBJECTS
// -----------------------------

const SUBJECTS = [

"physics",
"chemistry"

];


// -----------------------------
// FORMS
// -----------------------------

const FORMS = [

"form1",
"form2",
"form3",
"form4",
"form5",
"form6"

];


// -----------------------------
// TYPES
// -----------------------------

const TYPES = {

form1:[
"annual",
"terminal",
"joint",
"mock"
],

form2:[
"annual",
"terminal",
"joint",
"mock"
],

form3:[
"annual",
"terminal",
"joint",
"mock"
],

form4:[
"annual",
"mock",
"joint",
"pre_necta",
"necta"
],

form5:[
"annual",
"joint",
"mock"
],

form6:[
"annual",
"joint",
"mock",
"acsee"
]

};// ==========================================
// GEPAM DATABASE GENERATOR
// ==========================================

FORMS.forEach(form => {

    SUBJECTS.forEach(subject => {

        TYPES[form].forEach(type => {

            // NECTA / ACSEE hutumia NATIONAL pekee
            if(type === "necta" || type === "acsee"){

                YEARS.forEach(year => {

                    addPaper(

                        form,

                        subject,

                        `${form.toUpperCase()} ${subject.toUpperCase()} ${type.toUpperCase()} ${year}`,

                        type,

                        "national",

                        year,

                        `pastpapers/${form}/${subject}/${type}/national/${year}/paper1.pdf`

                    );

                });

            }

            // Types nyingine hutumia mikoa yote
            else{

                REGIONS.forEach(region => {

                    YEARS.forEach(year => {

                        addPaper(

                            form,

                            subject,

                            `${region.replaceAll("_"," ").toUpperCase()} ${type.replaceAll("_"," ").toUpperCase()} ${subject.toUpperCase()} ${year}`,

                            type,

                            region,

                            year,

                            `pastpapers/${form}/${subject}/${type}/${region}/${year}/paper1.pdf`

                        );

                    });

                });

            }

        });

    });

});


// ==========================================
// DATABASE READY
// ==========================================

console.log("GEPAM Science Hub Database Loaded Successfully");

console.log(pastPapers);
