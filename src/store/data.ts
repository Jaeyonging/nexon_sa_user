import { create } from "zustand";

// user data store
interface SA_UserID {
    ouid: string;
    setOuid: (newOuid: string) => void;
    resetOuid: () => void;
}

const useSA_UserIDStore = create<SA_UserID>((set) => ({
    ouid: '',
    setOuid: (newOuid) => set({ ouid: newOuid }),
    resetOuid: () => set({ ouid: '' }),
}));

interface SA_UserInfo {
    basicInfo: any;
    rank: any;
    tier: any;
    recentInfo: any;

    setBasicInfo: (newBasicInfo: any) => void;
    setRank: (newRank: any) => void;
    setTier: (newTier: any) => void;
    setRecentInfo: (newRecentInfo: any) => void;

    resetBasicInfo: () => void;
    resetRank: () => void;
    resetTier: () => void;
    resetRecentInfo: () => void;
}

const useSA_UserInfoStore = create<SA_UserInfo>((set) => ({
    basicInfo: null,
    rank: null,
    tier: null,
    recentInfo: null,

    setBasicInfo: (newBasicInfo) => set({ basicInfo: newBasicInfo }),
    setRank: (newRank) => set({ rank: newRank }),
    setTier: (newTier) => set({ tier: newTier }),
    setRecentInfo: (newRecentInfo) => set({ recentInfo: newRecentInfo }),

    resetBasicInfo: () => set({ basicInfo: null }),
    resetRank: () => set({ rank: null }),
    resetTier: () => set({ tier: null }),
    resetRecentInfo: () => set({ recentInfo: null }),
}));

// match data store
interface SA_MatchID {
    matchId: string;
    setMatchId: (newMatchId: string) => void;
    resetMatchId: () => void;
}

const useSA_MatchIDStore = create<SA_MatchID>((set) => ({
    matchId: '',
    setMatchId: (newMatchId) => set({ matchId: newMatchId }),
    resetMatchId: () => set({ matchId: '' }),
}));

interface SA_MatchInfo {
    allmatchInfo: any;
    matchInfoDetail: any;
    visibleCount: number;


    setAllmatchInfo: (newAllmatchInfo: any) => void;
    setMatchInfoDetail: (newMatchInfoDetail: any) => void;
    increaseVisibleCount: () => void;

    resetAllmatchInfo: () => void;
    resetMatchInfoDetail: () => void;
    resetVisibleCount: () => void;
}

const useSA_MatchInfoStore = create<SA_MatchInfo>((set) => ({
    allmatchInfo: null,
    matchInfoDetail: null,
    visibleCount: 10,

    setAllmatchInfo: (newAllmatchInfo) => set({ allmatchInfo: newAllmatchInfo }),
    setMatchInfoDetail: (newMatchInfoDetail) => set({ matchInfoDetail: newMatchInfoDetail }),
    increaseVisibleCount: () => set((state) => ({ visibleCount: state.visibleCount + 10 })),
    
    resetAllmatchInfo: () => set({ allmatchInfo: null }),
    resetMatchInfoDetail: () => set({ matchInfoDetail: {} }),
    resetVisibleCount: () => set({ visibleCount: 10 }),
}));

export { useSA_UserIDStore, useSA_UserInfoStore, useSA_MatchIDStore, useSA_MatchInfoStore };