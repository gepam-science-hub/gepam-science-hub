// ==========================================
// GEPAM SCIENCE HUB
// PESAPAL PAYMENT + PDF DELIVERY
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
// ANZISHA UNUNUZI WA NOTES
// ==========================================

async function anzishaUnunuziWaNotes(
    notesId,
    jinaLaNotes,
    bei
) {

    // ------------------------------------------
    // MUOMBE CUSTOMER EMAIL
    // ------------------------------------------

    const emailMteja = prompt(
        `Unanunua: ${jinaLaNotes}\n` +
        `Bei: TZS ${Number(bei).toLocaleString()}\n\n` +
        `Weka Email yako kupokea notes:`
    );


    // ------------------------------------------
    // VALIDATE EMAIL
    // ------------------------------------------

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


    // ------------------------------------------
    // START PAYMENT
    // ------------------------------------------

    alert(
        "Tafadhali subiri...\n\n" +
        "Tunaandaa ukurasa wa malipo wa PesaPal."
    );


    try {

        console.log(
            "Calling payment function..."
        );

        console.log(
            "Notes ID:",
            notesId
        );

        console.log(
            "Amount:",
            bei
        );


        // ------------------------------------------
        // SEND PAYMENT REQUEST
        // ------------------------------------------

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


        // ------------------------------------------
        // SERVER ERROR
        // ------------------------------------------

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


        // ------------------------------------------
        // NO PAYMENT LINK
        // ------------------------------------------

        console.error(
            "No redirect URL received:",
            data
        );


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


    // ------------------------------------------
    // NO CALLBACK
    // ------------------------------------------

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
    // WAITING MESSAGE
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
        // REQUEST SECURE PDF DOWNLOAD
        // ------------------------------------------

        const downloadUrl =
            `${PAYMENT_FUNCTION_URL}` +
            `?download=1` +
            `&OrderTrackingId=` +
            encodeURIComponent(
                orderTrackingId
            );


        console.log(
            "Requesting secure PDF URL..."
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


        // ------------------------------------------
        // PDF AVAILABLE
        // ------------------------------------------

        if (
            response.ok &&
            data.success === true &&
            data.download_url
        ) {

            message.innerHTML = `

                <div style="
                    font-size:45px;
                    margin-bottom:10px;
                ">
                    ✅
                </div>

                <h2 style="
                    color:#00a000;
                    margin-bottom:10px;
                ">
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
                    Link hii ni salama na itafanya kazi
                    kwa muda wa saa 1.
                </p>

            `;


            return;
        }


        // ------------------------------------------
        // PDF NOT AVAILABLE
        // ------------------------------------------

        console.error(
            "PDF unavailable:",
            data
        );


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

            <p style="
                font-size:13px;
                color:#777;
            ">
                Ikiwa umelipia tayari, tafadhali
                subiri dakika chache kisha ujaribu tena.
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
