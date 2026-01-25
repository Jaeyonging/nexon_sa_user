import React from 'react'
import SA_Card from '../card/SA_Card'

interface Props{
    recentInfo: any;
    hasRecent: boolean;
}

const RecentStat = ({ recentInfo, hasRecent }: Props) => {
    const winRate = recentInfo?.recent_win_rate ?? 0;
    const kd = recentInfo?.recent_kill_death_rate ?? 0;

    return (
        <SA_Card title="최근 전적" className="lg:col-span-1">
            {hasRecent ? (
                <div className="space-y-2">
                    {/* 주요 지표 */}
                    <div className="flex items-center gap-4">
                        <div className="flex-1 text-center">
                            <div className={`text-lg font-bold ${winRate >= 50 ? 'text-green-400' : 'text-red-400'}`}>
                                {winRate.toFixed(1)}%
                            </div>
                            <div className="text-[10px] text-slate-500">승률</div>
                        </div>
                        <div className="w-px h-8 bg-[#2a2a4a]" />
                        <div className="flex-1 text-center">
                            <div className={`text-lg font-bold ${kd >= 1 ? 'text-green-400' : 'text-red-400'}`}>
                                {kd.toFixed(2)}
                            </div>
                            <div className="text-[10px] text-slate-500">K/D</div>
                        </div>
                    </div>
                    {/* 무기 선호도 */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#2a2a4a]">
                        <div className="flex items-center gap-3 text-[10px]">
                            <span className="text-slate-500">돌격 <span className="text-orange-400 font-medium">{(recentInfo?.recent_assault_rate ?? 0).toFixed(0)}%</span></span>
                            <span className="text-slate-500">저격 <span className="text-blue-400 font-medium">{(recentInfo?.recent_sniper_rate ?? 0).toFixed(0)}%</span></span>
                            <span className="text-slate-500">특수 <span className="text-purple-400 font-medium">{(recentInfo?.recent_special_rate ?? 0).toFixed(0)}%</span></span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="space-y-2">
                    <div className="h-8 w-full animate-pulse rounded bg-[#2a2a4a]" />
                    <div className="h-4 w-3/4 animate-pulse rounded bg-[#2a2a4a]" />
                </div>
            )}
        </SA_Card>
    )
}

export default RecentStat
