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
        {   enabled: open,
            staleTime: Infinity,
         } 
    );

    const isWin = matchInfo.match_result === '1';
    
    return (
        <div className={`relative overflow-hidden rounded-2xl border-2 mb-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
            ${isWin 
                ? 'border-green-500/50 bg-gradient-to-br from-green-500/10 to-green-600/5' 
                : 'border-red-500/50 bg-gradient-to-br from-red-500/10 to-red-600/5'
            }`}>
            <div className="p-4 sm:p-6">
                {/* 헤더 */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-white font-bold text-base sm:text-lg">{matchInfo.match_mode}</span>
                        <span className="text-slate-300 text-sm">{matchInfo.match_type}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                            isWin 
                                ? 'bg-green-500/30 text-green-100 border border-green-400/50' 
                                : 'bg-red-500/30 text-red-100 border border-red-400/50'
                        }`}>
                            {isWin ? '승리' : '패배'}
                        </span>
                        <span className="text-slate-400 text-xs sm:text-sm">{matchDateFromToday(matchInfo.date_match)}</span>
                    </div>
                </div>

                {/* KDA 정보 */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4">
                    <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4">
                        <span className="text-2xl sm:text-3xl font-bold text-white">{matchInfo.kill}</span>
                        <span className='text-xs sm:text-sm text-slate-300 mt-1'>Kill</span>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4">
                        <span className="text-2xl sm:text-3xl font-bold text-red-400">{matchInfo.death}</span>
                        <span className='text-xs sm:text-sm text-slate-300 mt-1'>Death</span>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4">
                        <span className="text-2xl sm:text-3xl font-bold text-green-400">{matchInfo.assist}</span>
                        <span className='text-xs sm:text-sm text-slate-300 mt-1'>Assist</span>
                    </div>
                </div>

                {/* 상세 정보 버튼 */}
                <button
                    className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'
                    onClick={() => setOpen(!open)}
                >
                    {open ? "닫기" : "매치 상세 정보 보기"}
                </button>

                {/* 상세 정보 */}
                {open && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                        {isLoading && <Loading />}
                        {isError && <div className="text-sm text-red-400 text-center py-4">에러가 발생했습니다.</div>}
                        {data && <MatchDetailCard detail={data} />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MatchCard;
