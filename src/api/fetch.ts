import axios from "axios";
import { NEXON_API, NEXON_API_KEY } from "../util/server";

export const fetchSA_UserId = async (nickname: string) => {
    try {
        const response = await axios.get(`${NEXON_API}/suddenattack/v1/id`, {
            headers: {
                'x-nxopen-api-key': `${NEXON_API_KEY}`
            },
            params: {
                user_name: nickname
            }
        });
        console.log('fetchSA_UserId', response.status);
        return response.data;
    } catch (err: any) {
        throw err; 
    }
}

export const fetchSA_UserBasicInfo = async (ouid: string) => {
    try {
        const response = await axios.get(`${NEXON_API}/suddenattack/v1/user/basic`, {
            headers: {
                'x-nxopen-api-key': `${NEXON_API_KEY}`
            },
            params: {
                ouid: ouid
            }
        });
        console.log('fetchSA_UserBasicInfo', response.status);

        return response.data;
    } catch (err: any) {
        throw err; 
    }
}

export const fetchSA_UserRank = async (ouid: string) => {
    try {
        const response = await axios.get(`${NEXON_API}/suddenattack/v1/user/rank`, {
            headers: {
                'x-nxopen-api-key': `${NEXON_API_KEY}`
            },
            params: {
                ouid: ouid
            }
        });
        console.log('fetchSA_UserRank', response.status);

        return response.data;
    } catch (err: any) {
        throw err; 
    }
}

export const fetchSA_UserTier = async (ouid: string) => {
    try {
        const response = await axios.get(`${NEXON_API}/suddenattack/v1/user/tier`, {
            headers: {
                'x-nxopen-api-key': `${NEXON_API_KEY}`
            },
            params: {
                ouid: ouid
            }
        });
        console.log('fetchSA_UserTier', response.status);

        return response.data;
    } catch (err: any) {
        throw err; 
    }
}

export const fetchSA_UserRecentInfo = async (ouid: string) => {
    try {
        const response = await axios.get(`${NEXON_API}/suddenattack/v1/user/recent-info`, {
            headers: {
                'x-nxopen-api-key': NEXON_API_KEY
            },
            params: {
                ouid
            }
        });
        console.log('fetchSA_UserRecentInfo', response.status);
        return response.data;
    } catch (err: any) {
        throw err; 
    }
}


/// match data fetch


export const fetchSA_AllMatchInfo = async (ouid: string, matchMode: string) => {
    try {
        const response = await axios.get(`${NEXON_API}/suddenattack/v1/match`, {
            headers: {
                'x-nxopen-api-key': NEXON_API_KEY
            },
            params: {
                ouid,
                match_mode: matchMode
            }
        });

        console.log('fetchSA_AllMatchInfo', response.status);
        return response.data;

    } catch (err: any) {
        throw err; 
    }
}


export const fetchSA_MatchInfoDetail = async (matchId: string) => {
    try {
        const response = await axios.get(`${NEXON_API}/suddenattack/v1/match-detail`, {
            headers: {
                'x-nxopen-api-key': NEXON_API_KEY
            },
            params: {
                match_id: matchId
            }
        });
        console.log('fetchSA_MatchInfoDetail', response.status);
        return response.data;
    } catch (err: any) {
        throw err; 
    }
}