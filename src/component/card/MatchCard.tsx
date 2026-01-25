import React, { useState } from 'react'
import { matchDateFromToday } from '../../util/type';
import { useQuery } from 'react-query';
import { fetchSA_MatchInfoDetail } from '../../api/fetch';
import MatchDetailCard from './MatchDetailCard';
import Loading from '../../lotties/Loading';

const MatchCard = ({ matchInfo }: { matchInfo: any }) => {
    const [open, setOpen] = useState(false);
    const matchId = matchInfo.match_id;

    const { data, isLoading, isError } = useQuery(
        ["SA_MatchDetail", matchId],
        () => fetchSA_MatchInfoDetail(matchId),
        {
            enabled: open,
            staleTime: Infinity,
            retry: 2,
            retryDelay: 2000,
        }
    );

    const isWin = matchInfo.match_result === '1';
    const kda = matchInfo.death > 0 ? ((matchInfo.kill + matchInfo.assist) / matchInfo.death).toFixed(2) : 'Perfect';

    return (
        <div className={`rounded-lg mb-2 overflow-hidden border-l-4 ${isWin ? 'border-l-green-500 bg-green-500/5' : 'border-l-red-500 bg-red-500/5'}`}>
            {/* 메인 카드 */}
            <button
                className="w-full px-3 py-2.5 flex items-center gap-3 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpen(!open)}
            >
                {/* 결과 */}
                <div className="w-12 flex-shrink-0">
                    <div className={`text-xs font-bold ${isWin ? 'text-green-400' : 'text-red-400'}`}>
                        {isWin ? '승리' : '패배'}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">{matchInfo.match_mode}</div>
                </div>

                {/* KDA */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white">{matchInfo.kill}</span>
                        <span className="text-slate-600">/</span>
                        <span className="text-sm font-bold text-red-400">{matchInfo.death}</span>
                        <span className="text-slate-600">/</span>
                        <span className="text-sm font-bold text-blue-400">{matchInfo.assist}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 ml-2 bg-[#2a2a4a] px-1.5 py-0.5 rounded">{kda}</span>
                </div>

                {/* 날짜 & 화살표 */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[10px] text-slate-500">{matchDateFromToday(matchInfo.date_match)}</span>
                    <svg
                        className={`w-4 h-4 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* 상세 정보 */}
            {open && (
                <div className="px-3 pb-3 border-t border-[#2a2a4a]">
                    {isLoading && <Loading />}
                    {isError && <div className="text-xs text-red-400 text-center py-4">데이터를 불러올 수 없습니다</div>}
                    {data && <MatchDetailCard detail={data} />}
                </div>
            )}
        </div>
    );
};

export default MatchCard;
