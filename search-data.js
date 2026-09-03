// ==========================================================
// GEPAM SCIENCE HUB
// SEARCH DATA
// ==========================================================
// Shared Notes Database
// Used by:
//   - notes.html
//   - search.html
//   - search.js
//
// IMPORTANT:
// Do not change IDs, prices or existing note information
// unless intentionally updating the Notes database.
// ==========================================================


const notesData = {

    // ======================================================
    // FORM 1
    // ======================================================

    "form1-old-physics": {
        full: {
            id: "notes_physics_f1_full",
            title: "Form 1 Physics — Full Notes",
            description: "Complete Form 1 Physics Premium Notes.",
            price: 5000
        },

        topics: [
            {
                id: "notes_physics_f1_introduction",
                title: "Topic 1: Introduction to Physics",
                description:
                    "Concept of physics, laboratory rules, measurements and first aid.",
                price: 1000
            }
        ]
    },


    "form1-new-physics": {
        full: {
            id: "notes_physics_f1_full",
            title: "Form 1 Physics — Full Notes",
            description: "Complete Form 1 Physics Premium Notes.",
            price: 5000
        },

        topics: [
            {
                id: "notes_physics_f1_introduction",
                title: "Topic 1: Introduction to Physics",
                description:
                    "Introduction to Physics and basic scientific concepts.",
                price: 1000
            }
        ]
    },


    "form1-old-chemistry": {
        full: {
            id: "notes_chemistry_f1_full",
            title: "Form 1 Chemistry — Full Notes",
            description: "Complete Form 1 Chemistry Premium Notes.",
            price: 5000
        },

        topics: [
            {
                id: "notes_chemistry_f1_introduction",
                title: "Topic 1: Introduction to Chemistry",
                description:
                    "Concept, importance and application of chemistry in daily life.",
                price: 1000
            }
        ]
    },


    "form1-new-chemistry": {
        full: {
            id: "notes_chemistry_f1_full",
            title: "Form 1 Chemistry — Full Notes",
            description: "Complete Form 1 Chemistry Premium Notes.",
            price: 5000
        },

        topics: [
            {
                id: "notes_chemistry_f1_introduction",
                title: "Topic 1: Introduction to Chemistry",
                description:
                    "Introduction to Chemistry and its applications.",
                price: 1000
            }
        ]
    },


    // ======================================================
    // FORM 2
    // ======================================================

    "form2-old-physics": {
        full: {
            id: "notes_physics_f2_full",
            title: "Form 2 Physics — Full Notes",
            description: "Complete Form 2 Physics Premium Notes.",
            price: 5000
        },

        topics: [
            {
                id: "notes_physics_f2_static_electricity",
                title: "Topic 1: Static Electricity",
                description:
                    "Electric charges, static electricity and lightning conductors.",
                price: 1500
            }
        ]
    },


    "form2-new-physics": {
        full: {
            id: "notes_physics_f2_full",
            title: "Form 2 Physics — Full Notes",
            description: "Complete Form 2 Physics Premium Notes.",
            price: 5000
        },

        topics: [
            {
                id: "notes_physics_f2_static_electricity",
                title: "Topic 1: Static Electricity",
                description:
                    "Electric charges and applications of static electricity.",
                price: 1500
            }
        ]
    },


    "form2-old-chemistry": {
        full: {
            id: "notes_chemistry_f2_old_full",
            title: "Full Chemistry Notes",
            description:
                "Complete Chemistry notes for Form 2 — Old Syllabus.",
            price: 5000
        },

        topics: []
    },


    "form2-new-chemistry": {
        full: {
            id: "notes_chemistry_f2_full",
            title: "Form 2 Chemistry — Full Notes",
            description:
                "Complete Form 2 Chemistry Premium Notes.",
            price: 5000
        },

        topics: []
    },


    // ======================================================
    // FORM 3
    // ======================================================

    "form3-old-physics": {
        full: {
            id: "notes_physics_f3_full",
            title: "Form 3 Physics — Full Notes",
            description: "Complete Form 3 Physics Premium Notes.",
            price: 5000
        },

        topics: [

            {
                id: "notes_physics_f3_application_of_vectors",
                title: "Topic 1: Application of Vectors",
                description:
                    "Application of vectors in Physics, including vector concepts and their applications.",
                price: 1500
            },

            {
                id: "notes_physics_f3_friction",
                title: "Topic 2: Friction",
                description:
                    "Friction, types of friction, laws of friction and applications.",
                price: 1500
            },

            {
                id: "notes_physics_f3_light",
                title: "Topic 3: Light Part I & II",
                description:
                    "Reflection, refraction, lenses and optical instruments.",
                price: 3000
            }

        ]
    },


    "form3-new-physics": {
        full: {
            id: "notes_physics_f3_full",
            title: "Form 3 Physics — Full Notes",
            description: "Complete Form 3 Physics Premium Notes.",
            price: 5000
        },

        topics: [

            {
                id: "notes_physics_f3_linear_motion",
                title: "Topic 1: Linear Motion",
                description:
                    "Distance, displacement, velocity and equations of motion.",
                price: 1500
            },

            {
                id: "notes_physics_f3_light",
                title: "Topic: Light Part I & II",
                description:
                    "Reflection, refraction, lenses and optical instruments.",
                price: 3000
            }

        ]
    },


    "form3-old-chemistry": {
        full: {
            id: "notes_chemistry_f3_full",
            title: "Form 3 Chemistry — Full Notes",
            description: "Complete Form 3 Chemistry Premium Notes.",
            price: 5000
        },

        topics: [

            {
                id:
                    "notes_chemistry_f3_old_ionic_theory_and_electrolysis",

                title:
                    "Topic 6: Ionic Theory and Electrolysis",

                description:
                    "Ionic theory, electrolytes and non-electrolytes, electrolysis, mechanisms of electrolysis, Faraday’s laws of electrolysis, and applications of electrolysis.",

                price: 1500
            }

        ]
    },


    "form3-new-chemistry": {
        full: {
            id: "notes_chemistry_f3_full",
            title: "Form 3 Chemistry — Full Notes",
            description: "Complete Form 3 Chemistry Premium Notes.",
            price: 5000
        },

        topics: []
    },


    // ======================================================
    // FORM 4
    // ======================================================

    "form4-old-physics": {
        full: {
            id: "notes_physics_f4_full",
            title: "Form 4 Physics — Full Notes",
            description: "Complete Form 4 Physics Premium Notes.",
            price: 5000
        },

        topics: [

            {
                id: "notes_physics_f4_waves",
                title: "Topic 1: Waves",
                description:
                    "Mechanical waves, spectrum and related applications.",
                price: 1500
            }

        ]
    },


    "form4-new-physics": {
        full: {
            id: "notes_physics_f4_full",
            title: "Form 4 Physics — Full Notes",
            description: "Complete Form 4 Physics Premium Notes.",
            price: 5000
        },

        topics: [

            {
                id: "notes_physics_f4_waves",
                title: "Topic 1: Waves",
                description:
                    "Mechanical waves, spectrum and related applications.",
                price: 1500
            }

        ]
    },


    "form4-old-chemistry": {
        full: {
            id: "notes_chemistry_f4_full",
            title: "Form 4 Chemistry — Full Notes",
            description: "Complete Form 4 Chemistry Premium Notes.",
            price: 5000
        },

        topics: []
    },


    "form4-new-chemistry": {
        full: {
            id: "notes_chemistry_f4_full",
            title: "Form 4 Chemistry — Full Notes",
            description: "Complete Form 4 Chemistry Premium Notes.",
            price: 5000
        },

        topics: []
    },


    // ======================================================
    // FORM 5
    // ======================================================

    "form5-old-physics": {
        full: {
            id: "notes_physics_f5_full",
            title: "Form 5 Physics — Full Notes",
            description: "Complete Form 5 Physics Premium Notes.",
            price: 5000
        },

        topics: [

            {
                id: "notes_physics_f5_mechanics",
                title: "Topic 1: Mechanics",
                description:
                    "Dimensions, projectile motion and gravitation.",
                price: 2500
            }

        ]
    },


    "form5-new-physics": {
        full: {
            id: "notes_physics_f5_full",
            title: "Form 5 Physics — Full Notes",
            description: "Complete Form 5 Physics Premium Notes.",
            price: 5000
        },

        topics: [

            {
                id: "notes_physics_f5_mechanics",
                title: "Topic 1: Mechanics",
                description:
                    "Dimensions, projectile motion and gravitation.",
                price: 2500
            }

        ]
    },


    "form5-old-chemistry": {
        full: {
            id: "notes_chemistry_f5_full",
            title: "Form 5 Chemistry — Full Notes",
            description: "Complete Form 5 Chemistry Premium Notes.",
            price: 5000
        },

        topics: []
    },


    "form5-new-chemistry": {
        full: {
            id: "notes_chemistry_f5_full",
            title: "Form 5 Chemistry — Full Notes",
            description: "Complete Form 5 Chemistry Premium Notes.",
            price: 5000
        },

        topics: []
    },


    // ======================================================
    // FORM 6
    // ======================================================

    "form6-old-physics": {
        full: {
            id: "notes_physics_f6_full",
            title: "Form 6 Physics — Full Notes",
            description: "Complete Form 6 Physics Premium Notes.",
            price: 5000
        },

        topics: [

            {
                id: "notes_physics_f6_modern_physics",
                title: "Topic 1: Modern Physics",
                description:
                    "Quantum physics, atomic structure and electronics.",
                price: 3500
            }

        ]
    },


    "form6-new-physics": {
        full: {
            id: "notes_physics_f6_full",
            title: "Form 6 Physics — Full Notes",
            description: "Complete Form 6 Physics Premium Notes.",
            price: 5000
        },

        topics: [

            {
                id: "notes_physics_f6_modern_physics",
                title: "Topic 1: Modern Physics",
                description:
                    "Quantum physics, atomic structure and electronics.",
                price: 3500
            }

        ]
    },


    "form6-old-chemistry": {
        full: {
            id: "notes_chemistry_f6_full",
            title: "Form 6 Chemistry — Full Notes",
            description: "Complete Form 6 Chemistry Premium Notes.",
            price: 5000
        },

        topics: []
    },


    "form6-new-chemistry": {
        full: {
            id: "notes_chemistry_f6_full",
            title: "Form 6 Chemistry — Full Notes",
            description: "Complete Form 6 Chemistry Premium Notes.",
            price: 5000
        },

        topics: []
    }

};


// ==========================================================
// PRACTICAL NOTES
// ==========================================================

const practicalNotes = {

    olevel: [

        {
            id: "notes_physics_olevel_practical",

            title:
                "O-Level Physics Practical Notes",

            description:
                "General Physics practical notes for O-Level students.",

            price: 5000
        },

        {
            id: "notes_chemistry_olevel_practical",

            title:
                "O-Level Chemistry Practical Notes",

            description:
                "General Chemistry practical notes for O-Level students.",

            price: 5000
        }

    ],


    alevel: [

        {
            id: "notes_physics_alevel_practical",

            title:
                "A-Level Physics Practical Notes",

            description:
                "General Physics practical notes for A-Level students.",

            price: 5000
        },

        {
            id: "notes_chemistry_alevel_practical",

            title:
                "A-Level Chemistry Practical Notes",

            description:
                "General Chemistry practical notes for A-Level students.",

            price: 5000
        }

    ]

};


// ==========================================================
// GLOBAL ACCESS
// ==========================================================
// Allows search.js and other pages to access the database
// through window properties as well.
// ==========================================================

if (typeof window !== "undefined") {

    window.gepamNotesData = notesData;

    window.gepamPracticalNotes = practicalNotes;

}
