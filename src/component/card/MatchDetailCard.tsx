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
        <div className="pt-3">
            {/* 맵 이름 */}
            <div className="text-center mb-2 py-2 bg-[#16162a] rounded-lg">
                <span className="text-[10px] text-slate-500">맵</span>
                <span className="text-xs font-medium text-white ml-2">{detail.match_map}</span>
            </div>

            {/* 팀 A */}
            <TeamBlock
                title="A"
                result={teamA[0]?.match_result === "1" ? "승리" : "패배"}
                players={teamA}
            />

            {/* 팀 B */}
            <TeamBlock
                title="B"
                result={teamB[0]?.match_result === "1" ? "승리" : "패배"}
                players={teamB}
            />
        </div>
    );
};

export default MatchDetailCard;
