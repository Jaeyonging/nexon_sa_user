import React from 'react'
import Skeleton from '../Skeleton'
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
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {/* 솔로 티어 */}
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/5 p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3">
                            {getTierImage(tier?.solo_rank_match_tier) ? (
                                <img
                                    src={getTierImage(tier?.solo_rank_match_tier)!}
                                    alt={tier?.solo_rank_match_tier}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <div className="w-full h-full bg-white/10 rounded-xl" />
                            )}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-300 mb-1 font-medium">솔로 티어</div>
                        <div className="text-base sm:text-lg font-bold text-white">
                            {tier?.solo_rank_match_tier ?? "-"}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                            {tier?.solo_rank_match_score ?? 0} 점
                        </div>
                    </div>

                    {/* 파티 티어 */}
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/5 p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3">
                            {getTierImage(tier?.party_rank_match_tier) ? (
                                <img
                                    src={getTierImage(tier?.party_rank_match_tier)!}
                                    alt={tier?.party_rank_match_tier}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <div className="w-full h-full bg-white/10 rounded-xl" />
                            )}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-300 mb-1 font-medium">파티 티어</div>
                        <div className="text-base sm:text-lg font-bold text-white">
                            {tier?.party_rank_match_tier ?? "-"}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                            {tier?.party_rank_match_score ?? 0} 점
                        </div>
                    </div>
                </div>
            ) : (
                <Skeleton />
            )}
        </SA_Card>
    )
}

export default TierCard
