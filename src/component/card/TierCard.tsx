import React from 'react'
import SA_Card from './SA_Card'
import { getTierImage } from '../../util/type';

interface Props{
    tier: any;
    hasTier: boolean;
}

const TierCard = ({ tier, hasTier }: Props) => {
    return (
        <SA_Card title="티어" className="lg:col-span-1">
            {hasTier ? (
                <div className="flex items-center gap-4">
                    {/* 솔로 티어 */}
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                        <div className="w-10 h-10 flex-shrink-0">
                            {getTierImage(tier?.solo_rank_match_tier) ? (
                                <img
                                    src={getTierImage(tier?.solo_rank_match_tier)!}
                                    alt={tier?.solo_rank_match_tier}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <div className="w-full h-full bg-[#2a2a4a] rounded" />
                            )}
                        </div>
                        <div className="min-w-0">
                            <div className="text-sm text-white font-semibold truncate">{tier?.solo_rank_match_tier ?? "-"}</div>
                            <div className="text-[10px] text-slate-500">
                                솔로 {tier?.solo_rank_match_score ?? 0}점
                            </div>
                        </div>
                    </div>
                    {/* 구분선 */}
                    <div className="w-px h-10 bg-[#2a2a4a]" />
                    {/* 파티 티어 */}
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                        <div className="w-10 h-10 flex-shrink-0">
                            {getTierImage(tier?.party_rank_match_tier) ? (
                                <img
                                    src={getTierImage(tier?.party_rank_match_tier)!}
                                    alt={tier?.party_rank_match_tier}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <div className="w-full h-full bg-[#2a2a4a] rounded" />
                            )}
                        </div>
                        <div className="min-w-0">
                            <div className="text-sm text-white font-semibold truncate">{tier?.party_rank_match_tier ?? "-"}</div>
                            <div className="text-[10px] text-slate-500">
                                파티 {tier?.party_rank_match_score ?? 0}점
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex gap-4">
                    <div className="h-10 w-10 animate-pulse rounded bg-[#2a2a4a]" />
                    <div className="flex-1 space-y-2">
                        <div className="h-4 w-20 animate-pulse rounded bg-[#2a2a4a]" />
                        <div className="h-3 w-14 animate-pulse rounded bg-[#2a2a4a]" />
                    </div>
                </div>
            )}
        </SA_Card>
    )
}

export default TierCard
