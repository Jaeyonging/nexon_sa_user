import React from 'react'
import TeamBlock from './TeamBlock';

interface DetailProps {
    detail: any;
}

const MatchDetailCard = ({ detail }: DetailProps) => {
    const users = detail.match_detail;

    // 팀별로 분리
    const teamA = users.filter((u: any) => u.team_id === "0");
    const teamB = users.filter((u: any) => u.team_id === "1");

    return (
        <div className="flex flex-col gap-6 p-4 sm:p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl">
            {/* 맵 이름 */}
            <div className="text-center">
                <div className="text-sm text-slate-300 mb-1">맵</div>
                <div className="text-xl sm:text-2xl font-bold text-white">
                    {detail.match_map}
                </div>
            </div>

            {/* 팀 A */}
            <TeamBlock
                title="팀 A"
                result={teamA[0]?.match_result === "1" ? "승리" : "패배"}
                players={teamA}
            />

            {/* 팀 B */}
            <TeamBlock
                title="팀 B"
                result={teamB[0]?.match_result === "1" ? "승리" : "패배"}
                players={teamB}
            />

        </div>
    );
};

export default MatchDetailCard;

