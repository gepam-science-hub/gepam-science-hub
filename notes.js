// ==========================================
// Mfumo wa Malipo na Ununuzi wa Notes Kiotomatiki
// ==========================================
const SUPABASE_URL = "https://supabase.co"; 
const SUPABASE_ANON_KEY = "sb_publishable_6xyxzTtwK6kROikIln7pFw_o5ZmIpU-";

// Tengeneza mteja wa Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function anzishaUnunuziWaNotes(notesId, jinaLaNotes, bei) {
    // Inamwomba mteja aweke email ambapo Notes (PDF) itatumwa kiotomatiki akishalipa
    const emailMteja = prompt(`Unanunua Notes: ${jinaLaNotes}\nBei: TZS ${bei.toLocaleString()}\nWeka Email yako kupokea faili la PDF:`);
    
    if (!emailMteja || !emailMteja.includes('@')) {
        alert("Tafadhali weka Email sahihi ili uweze kupokea Notes!");
        return;
    }

    alert("Inakupeleka kwenye ukurasa salama wa Pesapal kulipia kwa M-Pesa / Tigo Pesa...");

    try {
        // Inatuma taarifa Supabase ili kutengeneza invoice ya Pesapal
        const response = await fetch(`${SUPABASE_URL}/functions/v1/tengeneza-malipo`, {
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
        
        // Mteja anapelekwa page ya Pesapal kuweka namba na kulipa
        if (data && data.redirect_url) {
            window.location.href = data.redirect_url;
        } else {
            alert("Imeshindwa kuunganisha na Pesapal. Jaribu tena baadae.");
        }
    } catch (error) {
        console.error("Makosa:", error);
        alert("Mfumo wa malipo haupatikani kwa sasa.");
    }
}

