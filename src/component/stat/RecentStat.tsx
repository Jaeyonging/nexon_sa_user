import React from 'react'
import SA_Card from '../card/SA_Card'
import Skeleton from '../Skeleton'
import Stat from './Stat';

interface Props{
    recentInfo: any;
    hasRecent: boolean;
}

const RecentStat = ({ recentInfo, hasRecent }: Props) => {
    return (
        <SA_Card title="최근 전적 지표" className="lg:col-span-1">
            {hasRecent ? (
                <div className="grid grid-cols-2 gap-3">
                    <Stat label="승률" value={`${(recentInfo?.recent_win_rate ?? 0).toFixed(1)}%`} />
                    <Stat label="K/D" value={`${(recentInfo?.recent_kill_death_rate ?? 0).toFixed(1)}%`} />
                    <Stat label="돌격" value={`${(recentInfo?.recent_assault_rate ?? 0).toFixed(1)}%`}/>
                    <Stat label="저격" value={`${(recentInfo?.recent_sniper_rate ?? 0).toFixed(1)}%`}/>
                    <Stat label="특수" value={`${(recentInfo?.recent_special_rate ?? 0).toFixed(1)}%`} />
                </div>
            ) : (
                <Skeleton />
            )}
        </SA_Card>
    )
}

export default RecentStat
