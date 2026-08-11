// ==========================================
// GEPAM SCIENCE HUB - PESAPAL PAYMENT
// ==========================================

// Supabase Project URL yako halisi
const SUPABASE_URL = "https://gouflitseihklbeomzpe.supabase.co";

// Supabase Publishable/Anon Key
const SUPABASE_ANON_KEY =
    "sb_publishable_6xyxzTtwK6kROikIln7pFw_o5ZmIpU-";


// ==========================================
// ANZISHA UNUNUZI WA NOTES
// ==========================================

async function anzishaUnunuziWaNotes(notesId, jinaLaNotes, bei) {

    // 1. Muombe mteja email
    const emailMteja = prompt(
        `Unanunua: ${jinaLaNotes}\n` +
        `Bei: TZS ${Number(bei).toLocaleString()}\n\n` +
        `Weka Email yako kupokea notes:`
    );


    // 2. Hakikisha email imewekwa
    if (!emailMteja || !emailMteja.includes("@")) {

        alert(
            "Tafadhali weka Email sahihi ili uweze kupokea PDF!"
        );

        return;
    }


    // 3. Safisha email
    const email = emailMteja.trim();


    // 4. Mjulie mteja kuwa payment inaanza
    alert(
        "Tafadhali subiri...\n\n" +
        "Tunaandaa ukurasa wa malipo wa PesaPal."
    );


    try {

        // 5. URL ya Edge Function
        const functionUrl =
            `${SUPABASE_URL}/functions/v1/tengeneza-malipo-pesapal`;


        console.log("Calling payment function...");
        console.log("Function URL:", functionUrl);
        console.log("Notes ID:", notesId);
        console.log("Amount:", bei);


        // 6. Tuma request kwenda Supabase
        const response = await fetch(functionUrl, {

            method: "POST",

            headers: {
                "Content-Type": "application/json",

                "Authorization":
                    `Bearer ${SUPABASE_ANON_KEY}`,

                "apikey":
                    SUPABASE_ANON_KEY
            },

            body: JSON.stringify({

                notes_id: notesId,

                jina: jinaLaNotes,

                bei: Number(bei),

                email: email
            })
        });


        // 7. Soma response
        const data = await response.json();


        console.log(
            "PesaPal response:",
            data
        );


        // 8. Kama server imerudisha error
        if (!response.ok) {

            console.error(
                "Payment server error:",
                data
            );

            alert(
                "Imeshindwa kuanzisha malipo.\n\n" +
                (data.message ||
                "Kuna tatizo kwenye payment server.")
            );

            return;
        }


        // 9. Kama PesaPal imetengeneza payment link
        if (
            data &&
            data.success === true &&
            data.redirect_url
        ) {

            console.log(
                "Redirecting to PesaPal:",
                data.redirect_url
            );


            // Mpeleke mteja PesaPal
            window.location.href =
                data.redirect_url;

            return;
        }


        // 10. Kama hakuna redirect URL
        console.error(
            "No redirect URL received:",
            data
        );


        alert(
            "Malipo hayakuweza kuanzishwa.\n\n" +
            (data.message ||
            "PesaPal haikutoa payment link.")
        );


    } catch (error) {

        // 11. Network / JavaScript error
        console.error(
            "Payment connection error:",
            error
        );


        alert(
            "Mfumo wa malipo haupatikani kwa sasa.\n\n" +
            "Tafadhali hakikisha una internet kisha jaribu tena."
        );
    }
}
