import React from 'react'
import SA_Card from './SA_Card';
import Skeleton from '../Skeleton';
import Stat from '../stat/Stat';
import { getSeasonGradeImage } from '../../util/type';

interface Props {
    rank: any;
    hasRank: boolean;
}

const RankCard = ({ rank, hasRank }: Props) => {
    return (
        <SA_Card title="계급 / 시즌" className="lg:col-span-1">
            {hasRank ? (
                <div className="grid grid-cols-2 gap-3 items-center justify-center">
                    <Stat label="현재 계급" value={rank?.grade ?? "-"} />
                    <Stat
                        label="계급 순위"
                        value={
                            typeof rank?.grade_ranking === "number"
                                ? rank?.grade_ranking.toLocaleString()
                                : "-"
                        }
                    />
                    <Stat label="시즌 계급" value={<img src={getSeasonGradeImage(rank?.season_grade) ?? "-"} alt={rank?.season_grade ?? "-"}  className="object-contain w-16 h-16 inline-block" />} />
                    <Stat
                        label="시즌 순위"
                        value={
                            typeof rank?.season_grade_ranking === "number"
                                ? rank?.season_grade_ranking.toLocaleString()
                                : "-"
                        }
                    />
                </div>
            ) : (
                <Skeleton />
            )}
        </SA_Card>
    )
}

export default RankCard
