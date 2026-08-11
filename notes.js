// GEPAM Science Hub - Isolated Supabase Payments Engine

// Supabase Project URL yako halisi
const SUPABASE_URL = "https://gouflitseihklbeomzpe.supabase.co";

// Publishable/Anon Key ya Supabase
const SUPABASE_ANON_KEY = "sb_publishable_6xyxzTtwK6kROikIln7pFw_o5ZmIpU-";

async function anzishaUnunuziWaNotes(notesId, jinaLaNotes, bei) {
    // 1. Mwombe mteja Email ya kupokelea PDF
    const emailMteja = prompt(
        `Unanunua: ${jinaLaNotes}\n` +
        `Bei: TZS ${bei.toLocaleString()}\n\n` +
        `Weka Email yako kupokea notes:`
    );

    // Hakikisha email imewekwa
    if (!emailMteja || !emailMteja.includes("@")) {
        alert("Tafadhali weka Email sahihi ili uweze kupokea PDF!");
        return;
    }

    alert("Inaandaa ukurasa wa malipo...");

    try {
        // 2. Edge Function ya Supabase
        const functionUrl =
            `${SUPABASE_URL}/functions/v1/tengeneza-malipo-pesapal`;

        const response = await fetch(functionUrl, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
            },

            body: JSON.stringify({
                notes_id: notesId,
                jina: jinaLaNotes,
                bei: bei,
                email: emailMteja
            })
        });

        // Angalia kama server imerudisha error
        if (!response.ok) {
            const errorText = await response.text();

            console.error(
                "Supabase Edge Function Error:",
                response.status,
                errorText
            );

            alert(
                `Imeshindikana kuanzisha malipo.\n` +
                `Error: ${response.status}`
            );

            return;
        }

        const data = await response.json();

        console.log("Payment response:", data);

        // 3. Mpeleke mteja PesaPal
        if (data && data.redirect_url) {

            window.location.href = data.redirect_url;

        } else {

            alert(
                "Imeshindwa kutengeneza link ya malipo.\n\n" +
                (data?.message || "Kagua Edge Function na PesaPal settings.")
            );
        }

    } catch (error) {

        console.error("Makosa ya Muunganisho:", error);

        alert(
            "Mfumo wa malipo haupatikani kwa sasa.\n\n" +
            "Kagua internet na Supabase Edge Function."
        );
    }
}
