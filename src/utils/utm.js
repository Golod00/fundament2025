export function saveUtmParams() {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    let utm = {};

    utmKeys.forEach(key => {
        const value = params.get(key);
        if (value) utm[key] = value;
    });

    if (Object.keys(utm).length > 0) {
        const existing = JSON.parse(localStorage.getItem("ct_utm") || "{}");
        const updated = { ...existing, utm };
        localStorage.setItem("ct_utm", JSON.stringify(updated));

        if (!existing.first_visit) {
            updated.first_visit = new Date().toISOString();
            localStorage.setItem("ct_utm", JSON.stringify(updated));
        }
    }
}

export function getUtmParams() {
    if (typeof window === "undefined") return {};
    const raw = localStorage.getItem("ct_utm");
    if (!raw) return {};
    try {
        const parsed = JSON.parse(raw);
        return parsed.utm || {};
    } catch (e) {
        return {};
    }
}