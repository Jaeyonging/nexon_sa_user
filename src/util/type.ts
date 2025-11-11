export const fmtDate = (iso?: string) => {
    if (!iso) return "-";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
};

export const badgeByManner = (m?: string) => {
    switch (m) {
        case "매우 좋음":
        case "아주 좋음":
            return "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200";
        case "좋음":
            return "bg-green-50 text-green-700 ring-1 ring-green-200";
        case "보통":
            return "bg-slate-50 text-slate-700 ring-1 ring-slate-200";
        case "나쁨":
            return "bg-rose-50 text-rose-700 ring-1 ring-rose-200";
        default:
            return "bg-slate-50 text-slate-600 ring-1 ring-slate-200";
    }
};

export const getTierImage = (tierName?: string) => {
    if (!tierName) return null;
    const found = tierToImage.find(([name]) => name === tierName);
    if (!found) return null;
    const [, code] = found;
    return `https://img.sa.nexon.com/barracks/assets/images/emblem/clan/2022/solo/${code}.png`;
};

const tierToImage : [string, string][] = [ 
    ["UNRANK", "100"],
    ["BRONZE I", "101"],
    ["BRONZE II", "102"],
    ["BRONZE III", "103"],
    ["SILVER I", "104"],
    ["SILVER II", "105"],
    ["SILVER III", "106"],
    ["GOLD I", "107"],
    ["GOLD II", "108"],
    ["GOLD III", "109"],
    ["MASTER I", "110"],
    ["MASTER II", "111"],
    ["MASTER III", "112"],
    ["GRANDMASTER I", "113"],
    ["GRANDMASTER II", "114"],
    ["GRANDMASTER III", "115"],
    ["LEGEND", "116"],
    ["Ranker", "117"],
    ["High Ranker", "118"],
];
