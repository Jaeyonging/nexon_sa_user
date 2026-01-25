import React from "react";
import { useSA_UserInfoStore } from "../../store/data";
import EmptyState from "./EmptyState";
import Profile from "./Profile";
import RankCard from "../card/RankCard";
import TierCard from "../card/TierCard";
import RecentStat from "../stat/RecentStat";

const HomeContainer = () => {
    const { basicInfo, rank, tier, recentInfo } = useSA_UserInfoStore();

    const isInitial = !basicInfo && !rank && !tier && !recentInfo;
    if (isInitial) return <EmptyState />;

    const hasBasic = Boolean(basicInfo);
    const hasRank = Boolean(rank);
    const hasTier = Boolean(tier);
    const hasRecent = Boolean(recentInfo);

    return (
        <div className="space-y-2">
            <Profile basicInfo={basicInfo} hasBasic={hasBasic} />
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                <RankCard rank={rank} hasRank={hasRank} />
                <TierCard tier={tier} hasTier={hasTier} />
                <RecentStat recentInfo={recentInfo} hasRecent={hasRecent} />
            </div>
        </div>
    );
};

export default HomeContainer;
