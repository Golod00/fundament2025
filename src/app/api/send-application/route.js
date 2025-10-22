export async function POST(req) {
    try {
        const formData = await req.json();
        const applicationNumber = Math.floor(100000 + Math.random() * 900000);

        const telegramToken = "8464942010:AAFxNgtTGguGMge6zcEwGnx383BWG2mzIsQ";
        const chatId = "-1002978115390";

        const escapeMarkdown = (text, type = "text") => {
            if (!text) return "";
            if (type === "phone" || type === "email" || type === "utm") return text;
            return text.replace(/([_*[\]()~`>#+=|{}!])/g, "\\$1");
        };

        const utmSource = formData.utm_source || "(not set)";
        const utmMedium = formData.utm_medium || "(not set)";
        const utmCampaign = formData.utm_campaign || "(not set)";
        const utmTerm = formData.utm_term || "(not set)";
        const utmContent = formData.utm_content || "(not set)";

        let telegramMessage = "";

        if (formData.subject === "Маєте запитання?") {
            telegramMessage = `
💬 *Нова заявка "Маєте запитання?"*  

👤 *Ім’я та Прізвище:* ${escapeMarkdown(formData.name)}
📞 *Телефон:* ${escapeMarkdown(formData.phone, "phone")}

🧾 *Номер заявки:* ${applicationNumber}

🌐 UTM Source: ${escapeMarkdown(utmSource, "utm")}
📈 UTM Medium: ${escapeMarkdown(utmMedium, "utm")}
🎯 UTM Campaign: ${escapeMarkdown(utmCampaign, "utm")}
🔑 UTM Term: ${escapeMarkdown(utmTerm, "utm")}
📋 UTM Content: ${escapeMarkdown(utmContent, "utm")}
            `;
        } else if (formData.position && formData.company) {
            telegramMessage = `
🤝 *Нова заявка "Стати партнером саміту"*  

👤 *Ім’я та Прізвище:* ${escapeMarkdown(formData.name)}
💼 *Посада:* ${escapeMarkdown(formData.position)}
🏢 *Компанія:* ${escapeMarkdown(formData.company)}
📞 *Телефон:* ${escapeMarkdown(formData.phone, "phone")}
✉️ *Email:* ${escapeMarkdown(formData.email, "email")}

🧾 *Номер заявки:* ${applicationNumber}

🌐 UTM Source: ${escapeMarkdown(utmSource, "utm")}
📈 UTM Medium: ${escapeMarkdown(utmMedium, "utm")}
🎯 UTM Campaign: ${escapeMarkdown(utmCampaign, "utm")}
🔑 UTM Term: ${escapeMarkdown(utmTerm, "utm")}
📋 UTM Content: ${escapeMarkdown(utmContent, "utm")}
            `;
        } else {
            telegramMessage = `
🎟 *Нова заявка "Придбати квиток"*  

👤 *Ім’я та Прізвище:* ${escapeMarkdown(formData.name)}
📞 *Телефон:* ${escapeMarkdown(formData.phone, "phone")}
✉️ *Email:* ${escapeMarkdown(formData.email, "email")}

🧾 *Номер заявки:* ${applicationNumber}

🌐 UTM Source: ${escapeMarkdown(utmSource, "utm")}
📈 UTM Medium: ${escapeMarkdown(utmMedium, "utm")}
🎯 UTM Campaign: ${escapeMarkdown(utmCampaign, "utm")}
🔑 UTM Term: ${escapeMarkdown(utmTerm, "utm")}
📋 UTM Content: ${escapeMarkdown(utmContent, "utm")}
            `;
        }

        await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: telegramMessage,
                parse_mode: "Markdown",
            }),
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
    }
}