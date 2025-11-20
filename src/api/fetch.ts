import axios from "axios";
import { NEXON_API, NEXON_API_KEY } from "../util/server";

export const fetchSA_UserId = async (nickname: string) => {
    const response = await axios.get(`${NEXON_API}/suddenattack/v1/id`, {
        headers: {
            'x-nxopen-api-key': `${NEXON_API_KEY}`
        },
        params: {
            user_name: nickname
        }
    });
    return response.data;
}

export const fetchSA_UserBasicInfo = async (ouid: string) => {
    const response = await axios.get(`${NEXON_API}/suddenattack/v1/user/basic`, {
        headers: {
            'x-nxopen-api-key': `${NEXON_API_KEY}`
        },
        params: {
            ouid: ouid
        }
    });
    return response.data;
}

export const fetchSA_UserRank = async (ouid: string) => {
    const response = await axios.get(`${NEXON_API}/suddenattack/v1/user/rank`, {
        headers: {
            'x-nxopen-api-key': `${NEXON_API_KEY}`
        },
        params: {
            ouid: ouid
        }
    });
    return response.data;
}

export const fetchSA_UserTier = async (ouid: string) => {
    const response = await axios.get(`${NEXON_API}/suddenattack/v1/user/tier`, {
        headers: {
            'x-nxopen-api-key': `${NEXON_API_KEY}`
        },
        params: {
            ouid: ouid
        }
    });
    return response.data;
}

export const fetchSA_UserRecentInfo = async (ouid: string) => {
    const response = await axios.get(`${NEXON_API}/suddenattack/v1/user/recent-info`, {
        headers: {
            'x-nxopen-api-key': `${NEXON_API_KEY}`
        },
        params: {
            ouid: ouid
        }
    });
    return response.data;
}


/// match data fetch


export const fetchSA_AllMatchInfo = async (ouid: string, matchMode: string) => {
    const response = await axios.get(`${NEXON_API}/suddenattack/v1/match`, {
        headers: {
            'x-nxopen-api-key': `${NEXON_API_KEY}`
        },
        params: {
            ouid: ouid,
            match_mode: matchMode
        }
    });
    return response.data;
}

export const fetchSA_MatchInfoDetail = async (matchId: string) => {
    const response = await axios.get(`${NEXON_API}/suddenattack/v1/match-detail`, {
        headers: {
            'x-nxopen-api-key': `${NEXON_API_KEY}`
        },
        params: {
            match_id: matchId
        }
    });
    return response.data;
}