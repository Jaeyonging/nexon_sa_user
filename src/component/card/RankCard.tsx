import React from 'react'
import SA_Card from './SA_Card';
import { getGradeImage, getSeasonGradeImage } from '../../util/type';

interface Props {
    rank: any;
    hasRank: boolean;
}

const RankCard = ({ rank, hasRank }: Props) => {
    return (
        <SA_Card title="계급" className="lg:col-span-1">
            {hasRank ? (
                <div className="flex items-center gap-4">
                    {/* 현재 계급 */}
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                        <img src={getGradeImage(rank?.grade) ?? ""} alt={rank?.grade ?? "-"} className="w-10 h-10 object-contain flex-shrink-0" />
                        <div className="min-w-0">
                            <div className="text-sm text-white font-semibold truncate">{rank?.grade ?? "-"}</div>
                            <div className="text-[10px] text-slate-500">
                                #{typeof rank?.grade_ranking === "number" ? rank?.grade_ranking.toLocaleString() : "-"}
                            </div>
                        </div>
                    </div>
                    {/* 구분선 */}
                    <div className="w-px h-10 bg-[#2a2a4a]" />
                    {/* 시즌 계급 */}
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                        <img src={getSeasonGradeImage(rank?.season_grade) ?? ""} alt={rank?.season_grade ?? "-"} className="w-10 h-10 object-contain flex-shrink-0" />
                        <div className="min-w-0">
                            <div className="text-sm text-white font-semibold truncate">{rank?.season_grade ?? "-"}</div>
                            <div className="text-[10px] text-slate-500">
                                시즌 #{typeof rank?.season_grade_ranking === "number" ? rank?.season_grade_ranking.toLocaleString() : "-"}
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

export default RankCard
