import axios from "axios";
import { NEXON_API, NEXON_API_KEY } from "../util/server";

const api = axios.create({
    baseURL: NEXON_API,
    headers: {
        'x-nxopen-api-key': NEXON_API_KEY
    },
    timeout: 15000
});

// Rate limit 대응: 429 에러 시 딜레이 후 재시도
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 429) {
            // 2초 대기 후 재시도
            await new Promise(resolve => setTimeout(resolve, 2000));
            return api.request(error.config);
        }
        return Promise.reject(error);
    }
);

// 요청 간 딜레이를 위한 큐
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 200; // 200ms 간격

api.interceptors.request.use(async (config) => {
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;

    if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
        await new Promise(resolve =>
            setTimeout(resolve, MIN_REQUEST_INTERVAL - timeSinceLastRequest)
        );
    }

    lastRequestTime = Date.now();
    return config;
});

export const fetchSA_UserId = async (nickname: string) => {
    const response = await api.get(`/suddenattack/v1/id`, {
        params: { user_name: nickname }
    });
    return response.data;
}

export const fetchSA_UserBasicInfo = async (ouid: string) => {
    const response = await api.get(`/suddenattack/v1/user/basic`, {
        params: { ouid }
    });
    return response.data;
}

export const fetchSA_UserRank = async (ouid: string) => {
    const response = await api.get(`/suddenattack/v1/user/rank`, {
        params: { ouid }
    });
    return response.data;
}

export const fetchSA_UserTier = async (ouid: string) => {
    const response = await api.get(`/suddenattack/v1/user/tier`, {
        params: { ouid }
    });
    return response.data;
}

export const fetchSA_UserRecentInfo = async (ouid: string) => {
    const response = await api.get(`/suddenattack/v1/user/recent-info`, {
        params: { ouid }
    });
    return response.data;
}

export const fetchSA_AllMatchInfo = async (ouid: string, matchMode: string, matchType?: string) => {
    const params: Record<string, string> = {
        ouid,
        match_mode: matchMode
    };
    if (matchType) {
        params.match_type = matchType;
    }
    const response = await api.get(`/suddenattack/v1/match`, { params });
    return response.data;
}

export const fetchSA_MatchInfoDetail = async (matchId: string) => {
    const response = await api.get(`/suddenattack/v1/match-detail`, {
        params: { match_id: matchId }
    });
    return response.data;
}