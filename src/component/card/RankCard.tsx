import React from 'react'
import SA_Card from './SA_Card';
import Skeleton from '../Skeleton';
import Stat from '../stat/Stat';
import { getGradeImage, getSeasonGradeImage } from '../../util/type';

interface Props {
    rank: any;
    hasRank: boolean;
}

const RankCard = ({ rank, hasRank }: Props) => {
    return (
        <SA_Card title="계급 / 시즌" className="lg:col-span-1">
            {hasRank ? (
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/5 p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="text-xs sm:text-sm text-slate-300 mb-3 font-medium">현재 계급</div>
                        <div className="mb-2">
                            <img src={getGradeImage(rank?.grade) ?? "-"} alt={rank?.grade ?? "-"} className="object-contain w-16 h-16 sm:w-20 sm:h-20" />
                        </div>
                        <div className="text-sm sm:text-base text-white font-semibold">{rank?.grade ?? "-"}</div>
                        <div className="text-xs text-slate-400 mt-2">
                            순위: {typeof rank?.grade_ranking === "number" ? rank?.grade_ranking.toLocaleString() : "-"}
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/5 p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="text-xs sm:text-sm text-slate-300 mb-3 font-medium">시즌 계급</div>
                        <div className="mb-2">
                            <img src={getSeasonGradeImage(rank?.season_grade) ?? "-"} alt={rank?.season_grade ?? "-"} className="object-contain w-16 h-16 sm:w-20 sm:h-20" />
                        </div>
                        <div className="text-sm sm:text-base text-white font-semibold">{rank?.season_grade ?? "-"}</div>
                        <div className="text-xs text-slate-400 mt-2">
                            순위: {typeof rank?.season_grade_ranking === "number" ? rank?.season_grade_ranking.toLocaleString() : "-"}
                        </div>
                    </div>
                </div>
            ) : (
                <Skeleton />
            )}
        </SA_Card>
    )
}

export default RankCard
