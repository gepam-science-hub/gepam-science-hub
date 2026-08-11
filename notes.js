// GEPAM Science Hub - Isolated Supabase Payments Engine

// ⚠️ WEKA LINK YAKO HALISI YA SUPABASE HAPA (Kutoka Settings -> API -> Project URL)
const SUPABASE_URL = "https://XYZ_MRADI_WAKO.supabase.co"; 
const SUPABASE_ANON_KEY = "sb_publishable_6xyxzTtwK6kROikIln7pFw_o5ZmIpU-"; 

async function anzishaUnunuziWaNotes(notesId, jinaLaNotes, bei) {
    // 1. Inamwomba mteja Email ya kupokelea PDF
    const emailMteja = prompt(`Unanunua: ${jinaLaNotes}\nBei: TZS ${bei.toLocaleString()}\nWeka Email yako kupokea notes:`);
    
    if (!emailMteja || !emailMteja.includes('@')) {
        alert("Tafadhali weka Email sahihi ili uweze kupokea PDF!");
        return;
    }

    alert("Inakupeleka kwenye ukurasa wa malipo ya simu ya majaribio...");

    try {
        // 2. Kuita Supabase Edge Function kwa njia salama bila kuingiliana na pastpapers.js
        const functionUrl = `${SUPABASE_URL}/functions/v1/tengeneza-malipo-pesapal`;
        
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

        const data = await response.json();
        
        // 3. Mteja anarushwa kwenda ukurasa wa majaribio wa Pesapal kulipa
        if (data && data.redirect_url) {
            window.location.href = data.redirect_url;
        } else {
            alert("Imeshindwa kutengeneza link ya malipo: " + (data.message || "Kagua kama Edge Function ipo hai."));
        }
    } catch (error) {
        console.error("Makosa ya Muunganisho:", error);
        alert("Mfumo wa malipo haupatikani kwa sasa. Kagua internet au SUPABASE_URL.");
    }
}
