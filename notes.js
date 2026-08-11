// ==========================================
// GEPAM SCIENCE HUB - PESAPAL PAYMENT
// NOTES PURCHASE + PDF DELIVERY
// ==========================================


// ==========================================
// SUPABASE
// ==========================================

const SUPABASE_URL =
    "https://gouflitseihklbeomzpe.supabase.co";

const SUPABASE_ANON_KEY =
    "sb_publishable_6xyxzTtwK6kROikIln7pFw_o5ZmIpU-";


// ==========================================
// PAYMENT EDGE FUNCTION
// ==========================================

const PAYMENT_FUNCTION_URL =
    `${SUPABASE_URL}/functions/v1/tengeneza-malipo-pesapal`;


// ==========================================
// ANZISHA UNUNUZI
// ==========================================

async function anzishaUnunuziWaNotes(
    notesId,
    jinaLaNotes,
    bei
) {

    // ------------------------------------------
    // ASK EMAIL
    // ------------------------------------------

    const emailMteja = prompt(
        `Unanunua: ${jinaLaNotes}\n` +
        `Bei: TZS ${Number(bei).toLocaleString()}\n\n` +
        `Weka Email yako kupokea notes:`
    );


    if (
        !emailMteja ||
        !emailMteja.includes("@")
    ) {

        alert(
            "Tafadhali weka Email sahihi ili uweze kupokea PDF!"
        );

        return;
    }


    const email =
        emailMteja.trim();


    alert(
        "Tafadhali subiri...\n\n" +
        "Tunaandaa ukurasa wa malipo wa PesaPal."
    );


    try {

        console.log(
            "Calling payment function..."
        );


        const response =
            await fetch(
                PAYMENT_FUNCTION_URL,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json",

                        "Authorization":
                            `Bearer ${SUPABASE_ANON_KEY}`,

                        "apikey":
                            SUPABASE_ANON_KEY

                    },

                    body:
                        JSON.stringify({

                            notes_id:
                                notesId,

                            jina:
                                jinaLaNotes,

                            bei:
                                Number(bei),

                            email:
                                email

                        })

                }
            );


        const data =
            await response.json();


        console.log(
            "PesaPal response:",
            data
        );


        if (!response.ok) {

            console.error(
                "Payment server error:",
                data
            );


            alert(
                "Imeshindwa kuanzisha malipo.\n\n" +
                (
                    data.message ||
                    "Kuna tatizo kwenye payment server."
                )
            );

            return;
        }


        // ------------------------------------------
        // REDIRECT TO PESAPAL
        // ------------------------------------------

        if (
            data &&
            data.success === true &&
            data.redirect_url
        ) {

            console.log(
                "Redirecting to PesaPal:",
                data.redirect_url
            );


            window.location.href =
                data.redirect_url;

            return;
        }


        alert(
            "Malipo hayakuweza kuanzishwa.\n\n" +
            (
                data.message ||
                "PesaPal haikutoa payment link."
            )
        );


    } catch (error) {

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


// ==========================================
// CHECK PAYMENT CALLBACK
// ==========================================

async function angaliaPaymentCallback() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const payment =
        params.get("payment");


    const orderTrackingId =
        params.get(
            "OrderTrackingId"
        );


    if (
        payment !== "callback" ||
        !orderTrackingId
    ) {

        return;
    }


    console.log(
        "Payment callback detected:",
        orderTrackingId
    );


    // ------------------------------------------
    // SHOW WAITING MESSAGE
    // ------------------------------------------

    const message =
        document.createElement("div");

    message.id =
        "paymentMessage";

    message.style.position =
        "fixed";

    message.style.top =
        "50%";

    message.style.left =
        "50%";

    message.style.transform =
        "translate(-50%, -50%)";

    message.style.background =
        "white";

    message.style.padding =
        "30px";

    message.style.borderRadius =
        "12px";

    message.style.boxShadow =
        "0 5px 25px rgba(0,0,0,0.2)";

    message.style.zIndex =
        "99999";

    message.style.maxWidth =
        "90%";

    message.style.textAlign =
        "center";

    message.innerHTML = `
        <h2 style="color:#00a000;">
            ⏳ Tunathibitisha malipo...
        </h2>

        <p>
            Tafadhali subiri kidogo.
        </p>
    `;

    document.body.appendChild(
        message
    );


    try {

        // ------------------------------------------
        // REQUEST PDF
        // ------------------------------------------

        const downloadUrl =
            `${PAYMENT_FUNCTION_URL}` +
            `?download=1` +
            `&OrderTrackingId=` +
            encodeURIComponent(
                orderTrackingId
            );


        const response =
            await fetch(
                downloadUrl,
                {

                    method: "GET",

                    headers: {

                        "Authorization":
                            `Bearer ${SUPABASE_ANON_KEY}`,

                        "apikey":
                            SUPABASE_ANON_KEY

                    }

                }
            );


        const data =
            await response.json();


        console.log(
            "PDF delivery response:",
            data
        );


        if (
            response.ok &&
            data.success === true &&
            data.download_url
        ) {

            message.innerHTML = `

                <div style="font-size:45px;">
                    ✅
                </div>

                <h2 style="color:#00a000;">
                    Malipo yamefanikiwa!
                </h2>

                <p>
                    Asante kwa kununua
                    <strong>GEPAM Science Hub Notes</strong>.
                </p>

                <a
                    href="${data.download_url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="
                        display:inline-block;
                        background:#00c300;
                        color:white;
                        padding:14px 25px;
                        border-radius:6px;
                        text-decoration:none;
                        font-weight:bold;
                        margin-top:10px;
                    "
                >
                    📄 FUNGUA / PAKUA NOTES
                </a>

                <p style="
                    font-size:12px;
                    color:#777;
                    margin-top:15px;
                ">
                    Link hii itafanya kazi kwa muda wa saa 1.
                </p>
            `;


            return;
        }


        // ------------------------------------------
        // PAYMENT NOT COMPLETED
        // ------------------------------------------

        message.innerHTML = `

            <div style="font-size:45px;">
                ⚠️
            </div>

            <h2>
                Malipo hayajakamilika
            </h2>

            <p>
                Mfumo haujathibitisha malipo yako
                au PDF haijapatikana.
            </p>

            <button
                onclick="window.location.href='notes.html'"
                style="
                    background:#00c300;
                    color:white;
                    border:none;
                    padding:12px 20px;
                    border-radius:6px;
                    font-weight:bold;
                    cursor:pointer;
                "
            >
                RUDI KWENYE NOTES
            </button>
        `;


    } catch (error) {

        console.error(
            "PDF delivery error:",
            error
        );


        message.innerHTML = `

            <div style="font-size:45px;">
                ❌
            </div>

            <h2>
                Kuna tatizo
            </h2>

            <p>
                Malipo yanaweza kuwa yamefanikiwa,
                lakini PDF haikuweza kutolewa kwa sasa.
            </p>

            <button
                onclick="location.reload()"
                style="
                    background:#00c300;
                    color:white;
                    border:none;
                    padding:12px 20px;
                    border-radius:6px;
                    font-weight:bold;
                    cursor:pointer;
                "
            >
                JARIBU TENA
            </button>
        `;

    }

}


// ==========================================
// RUN CALLBACK CHECK
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        angaliaPaymentCallback();

    }
);
