const SUPABASE_URL = "https://gouflitseihklbeomzpe.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_6xyxzTtwK6kROikIln7pFw_o5ZmIpU-"; // Paste ile key yako ya Supabase hapa

// Tengeneza mteja wa Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function anzishaUnunuziWaNotes(notesId, jinaLaNotes, bei) {
    // Inamwomba mteja aweke email ambapo Notes (PDF) itatumwa kiotomatiki akishalipa
    const emailMteja = prompt(`Unanunua: ${jinaLaNotes}\nBei: TZS ${bei.toLocaleString()}\nWeka Email yako kupokea notes:`);
    
    if (!emailMteja || !emailMteja.includes('@')) {
        alert("Tafadhali weka Email sahihi ili uweze kupokea PDF!");
        return;
    }

    alert("Inakupeleka kwenye ukurasa wa malipo ya simu (M-Pesa/Tigo Pesa)...");

    try {
        // Tunaiambia Supabase iwasiliane na Pesapal kutengeneza Invoice
        const response = await fetch(`${SUPABASE_URL}/functions/v1/tengeneza-malipo-pesapal`, {
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

        const data = await response.json();
        
        // Kama kila kitu kipo sawa, mteja anapelekwa page ya Pesapal kulipa
        if (data && data.redirect_url) {
            window.location.href = data.redirect_url;
        } else {
            alert("Imeshindwa kutengeneza link ya malipo. Jaribu tena.");
        }
    } catch (error) {
        console.error("Makosa:", error);
        alert("Mfumo wa malipo haupatikani kwa sasa.");
    }
}
