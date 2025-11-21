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
                <div className="grid grid-cols-2 gap-4">
                    {/* 솔로 티어 */}
                    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 p-4">
                        <div className="w-16 h-16 mb-2">
                            {getTierImage(tier?.solo_rank_match_tier) ? (
                                <img
                                    src={getTierImage(tier?.solo_rank_match_tier)!}
                                    alt={tier?.solo_rank_match_tier}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-100 rounded-xl" />
                            )}
                        </div>
                        <div className="text-sm text-slate-600">솔로 티어</div>
                        <div className="text-lg font-semibold text-slate-900">
                            {tier?.solo_rank_match_tier ?? "-"}
                        </div>
                        <div className="text-xs text-slate-400">
                            {tier?.solo_rank_match_score ?? 0} 점
                        </div>
                    </div>

                    {/* 파티 티어 */}
                    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 p-4">
                        <div className="w-16 h-16 mb-2">
                            {getTierImage(tier?.party_rank_match_tier) ? (
                                <img
                                    src={getTierImage(tier?.party_rank_match_tier)!}
                                    alt={tier?.party_rank_match_tier}
                                    className="object-contain"
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-100 rounded-xl" />
                            )}
                        </div>
                        <div className="text-sm text-slate-600">파티 티어</div>
                        <div className="text-lg font-semibold text-slate-900">
                            {tier?.party_rank_match_tier ?? "-"}
                        </div>
                        <div className="text-xs text-slate-400">
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
