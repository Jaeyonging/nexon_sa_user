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

    return (
        <div className={`flex flex-col gap-3 p-2 rounded-md border-[1px] mb-2 
            ${matchInfo.match_result === '1' ? 'border-green-500' : 'border-red-500'}`}>
            
            <div className="flex gap-2 justify-between items-center w-full">
                <div className="flex flex-col gap-2 items-center">
                    <span>{matchInfo.match_mode}</span>
                    <span>{matchInfo.match_type}</span>
                </div>

                <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-center">
                        <span>{matchInfo.kill}</span>
                        <span className='text-sm text-slate-600'>Kill</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>{matchInfo.death}</span>
                        <span className='text-sm text-slate-600'>Death</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>{matchInfo.assist}</span>
                        <span className='text-sm text-slate-600'>Assist</span>
                    </div>
                    <span>{matchDateFromToday(matchInfo.date_match)}</span>
                </div>

                <button
                    className='bg-blue-500 text-white px-4 py-2 rounded-md'
                    onClick={() => setOpen(!open)}
                >
                    {open ? "닫기" : "매치 정보 보기" }
                </button>
            </div>

            {open && (
                <div>
                    {isLoading && <Loading />}
                    {isError && <div className="text-sm text-red-500">에러 발생</div>}
                    {data && <MatchDetailCard detail={data} />}
                </div>
            )}
        </div>
    );
};

export default MatchCard;
