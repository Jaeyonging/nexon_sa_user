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
            return "bg-emerald-500/20 text-emerald-400";
        case "좋음":
            return "bg-green-500/20 text-green-400";
        case "보통":
            return "bg-slate-500/20 text-slate-400";
        case "나쁨":
            return "bg-red-500/20 text-red-400";
        default:
            return "bg-slate-500/20 text-slate-400";
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
    ["RANKER", "117"],
    ["HIGH RANKER", "118"],
];

export const getSeasonGradeImage = (seasonGrade?: string) => {
    if (!seasonGrade) return null;
    const found = seasonGradeToImage.find(([name]) => name === seasonGrade);
    if (!found) return null;
    const [, code] = found;
    return `https://img.sa.nexon.com/barracks/assets/images/season/grade/2024/class_${code}_94x94.png`;
};

const seasonGradeToImage : [string, string][] = [
    ["특등이병", "00"],
    ["특등일병", "01"],
    ["특등상병", "02"],
    ["특등병장", "03"],
    ["특전하사 1호봉", "04"],
    ["특전하사 2호봉", "05"],
    ["특전하사 3호봉", "06"],
    ["특전하사 4호봉", "07"],
    ["특전하사 5호봉", "08"],
    ["특전중사 1호봉", "09"],
    ["특전중사 2호봉", "10"],
    ["특전중사 3호봉", "11"],
    ["특전중사 4호봉", "12"],
    ["특전중사 5호봉", "13"],
    ["특전상사 1호봉", "14"],
    ["특전상사 2호봉", "15"],
    ["특전상사 3호봉", "16"],
    ["특전상사 4호봉", "17"],
    ["특전상사 5호봉", "18"],
    ["특임소위 1호봉", "19"],
    ["특임소위 2호봉", "20"],
    ["특임소위 3호봉", "21"],
    ["특임소위 4호봉", "22"],
    ["특임소위 5호봉", "23"],
    ["특임중위 1호봉", "24"],
    ["특임중위 2호봉", "25"],
    ["특임중위 3호봉", "26"],
    ["특임중위 4호봉", "27"],
    ["특임중위 5호봉", "28"],
    ["특임대위 1호봉", "29"],
    ["특임대위 2호봉", "30"],
    ["특임대위 3호봉", "31"],
    ["특임대위 4호봉", "32"],
    ["특임대위 5호봉", "33"],
    ["특공소령 1호봉", "34"],
    ["특공소령 2호봉", "35"],
    ["특공소령 3호봉", "36"],
    ["특공소령 4호봉", "37"],
    ["특공소령 5호봉", "38"],
    ["특공중령 1호봉", "39"],
    ["특공중령 2호봉", "40"],
    ["특공중령 3호봉", "41"],
    ["특공중령 4호봉", "42"],
    ["특공중령 5호봉", "43"],
    ["특공대령 1호봉", "44"],
    ["특공대령 2호봉", "45"],
    ["특공대령 3호봉", "46"],
    ["특공대령 4호봉", "47"],
    ["특공대령 5호봉", "48"],
    ["특급준장", "49"],
    ["특급소장", "50"],
    ["특급중장", "51"],
    ["특급대장", "52"],
    ["부사령관", "53"],
    ["사령관", "54"],
    ["총사령관", "55"],
];

export const getGradeImage = (grade?: string) => {
    if (!grade) return null;
    const found = GradeToImage.find(([name]) => name === grade);
    if (!found) return null;
    const [, code] = found;
    return `https://img.sa.nexon.com/barracks/assets/images/grade/total/class_${code}.png`;
};

const GradeToImage : [string, string][] = [
    ["훈련병", "00"],
    ["이병", "01"],
    ["일병", "02"],
    ["상병", "03"],
    ["병장", "04"],
    ["하사 1호봉", "05"],
    ["하사 2호봉", "06"],
    ["하사 3호봉", "07"],
    ["중사 1호봉", "08"],
    ["중사 2호봉", "09"],
    ["중사 3호봉", "10"],
    ["중사 4호봉", "11"],
    ["상사 1호봉", "12"],
    ["상사 2호봉", "13"],
    ["상사 3호봉", "14"],
    ["상사 4호봉", "15"],
    ["상사 5호봉", "16"],
    ["소위 1호봉", "17"],
    ["소위 2호봉", "18"],
    ["소위 3호봉", "19"],
    ["소위 4호봉", "20"],
    ["소위 5호봉", "21"],
    ["소위 6호봉", "22"],
    ["중위 1호봉", "23"],
    ["중위 2호봉", "24"],
    ["중위 3호봉", "25"],
    ["중위 4호봉", "26"],
    ["중위 5호봉", "27"],
    ["중위 6호봉", "28"],
    ["대위 1호봉", "29"],
    ["대위 2호봉", "30"],
    ["대위 3호봉", "31"],
    ["대위 4호봉", "32"],
    ["대위 5호봉", "33"],
    ["대위 6호봉", "34"],
    ["소령 1호봉", "35"],
    ["소령 2호봉", "36"],
    ["소령 3호봉", "37"],
    ["소령 4호봉", "38"],
    ["소령 5호봉", "39"],
    ["소령 6호봉", "40"],
    ["중령 1호봉", "41"],
    ["중령 2호봉", "42"],
    ["중령 3호봉", "43"],
    ["중령 4호봉", "44"],
    ["중령 5호봉", "45"],
    ["중령 6호봉", "46"],
    ["대령 1호봉", "47"],
    ["대령 2호봉", "48"],
    ["대령 3호봉", "49"],
    ["대령 4호봉", "50"],
    ["대령 5호봉", "51"],
    ["대령 6호봉", "52"],
    ["준장", "53"],
    ["소장", "54"],
    ["중장", "55"],
    ["대장", "56"],
    ["부원수", "57"],
    ["원수", "58"],
    ["대원수", "59"],
];


export const matchDateFromToday = (date?: string) => {
    if (!date) return "-";
    const today = new Date();
    const matchDate = new Date(date);
    const diffTime = Math.abs(today.getTime() - matchDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays}일 전`;
}