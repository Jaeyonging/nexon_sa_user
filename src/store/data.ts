import { create } from "zustand";

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

export { useSA_UserIDStore, useSA_UserInfoStore };