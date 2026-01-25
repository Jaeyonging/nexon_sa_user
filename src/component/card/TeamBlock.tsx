import React from 'react'
import { getSeasonGradeImage } from '../../util/type';
import { useNavigate, useParams } from 'react-router-dom';

interface Props {
    title: string;
    result: string;
    players: any[];
}
const TeamBlock = ({ title, result, players }: Props) => {
    const { nickname } = useParams<{ nickname: string | undefined }>();
    const isWin = result === "승리";
    const navigate = useNavigate();
    const handleNicknameClick = (new_nickname: string) => {
        if (nickname === new_nickname) return;
        navigate(`/search/${encodeURIComponent(new_nickname)}`);
    };

    return (
        <div className="rounded-lg overflow-hidden bg-[#16162a] mt-2">
            {/* 팀 헤더 */}
            <div className={`flex items-center justify-between px-3 py-1.5 ${isWin ? "bg-green-500/10" : "bg-red-500/10"}`}>
                <span className="text-[10px] font-semibold text-slate-400">팀 {title}</span>
                <span className={`text-[10px] font-bold ${isWin ? "text-green-400" : "text-red-400"}`}>
                    {result}
                </span>
            </div>

            {/* 테이블 헤더 - 데스크톱만 */}
            <div className="hidden sm:grid sm:grid-cols-[1fr,180px] gap-2 px-3 py-1.5 text-[9px] text-slate-600 border-b border-[#2a2a4a]">
                <div>플레이어</div>
                <div className="grid grid-cols-5 text-center">
                    <span>K</span><span>D</span><span>A</span><span>HS</span><span>DMG</span>
                </div>
            </div>

            {/* 플레이어 리스트 */}
            <div className="divide-y divide-[#2a2a4a]/50">
                {players.map((player: any, idx: number) => {
                    const isCurrentUser = nickname === player.user_name;
                    return (
                        <div
                            key={idx}
                            className={`px-3 py-2 ${isCurrentUser ? "bg-orange-500/10" : "hover:bg-[#1e1e38]"}`}
                        >
                            {/* 모바일 레이아웃 */}
                            <div className="sm:hidden">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2 min-w-0 flex-1">
                                        <img
                                            src={getSeasonGradeImage(player.season_grade) ?? ""}
                                            alt=""
                                            className="w-5 h-5 object-contain flex-shrink-0"
                                        />
                                        <span
                                            className={`text-xs font-medium truncate cursor-pointer ${isCurrentUser ? "text-orange-400" : "text-white"}`}
                                            onClick={() => handleNicknameClick(player.user_name)}
                                        >
                                            {player.user_name}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs flex-shrink-0">
                                        <span className="font-semibold text-white w-5 text-center">{player.kill}</span>
                                        <span className="text-slate-600">/</span>
                                        <span className="font-semibold text-red-400 w-5 text-center">{player.death}</span>
                                        <span className="text-slate-600">/</span>
                                        <span className="font-semibold text-blue-400 w-5 text-center">{player.assist}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-1 text-[9px] text-slate-500">
                                    <span className="truncate">{player.season_grade}</span>
                                    <span className="flex-shrink-0">HS {player.headshot} · DMG {player.damage?.toLocaleString()}</span>
                                </div>
                            </div>

                            {/* 데스크톱 레이아웃 */}
                            <div className="hidden sm:grid sm:grid-cols-[1fr,180px] gap-2 items-center">
                                <div className="flex items-center gap-2 min-w-0">
                                    <img
                                        src={getSeasonGradeImage(player.season_grade) ?? ""}
                                        alt=""
                                        className="w-6 h-6 object-contain flex-shrink-0"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <div
                                            className={`text-xs font-medium truncate cursor-pointer ${isCurrentUser ? "text-orange-400" : "text-white hover:text-orange-300"}`}
                                            onClick={() => handleNicknameClick(player.user_name)}
                                        >
                                            {player.user_name}
                                        </div>
                                        <div className="text-[9px] text-slate-500 truncate">{player.season_grade}</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 text-center text-xs">
                                    <span className="font-semibold text-white">{player.kill}</span>
                                    <span className="font-semibold text-red-400">{player.death}</span>
                                    <span className="font-semibold text-blue-400">{player.assist}</span>
                                    <span className="text-slate-400">{player.headshot}</span>
                                    <span className="text-yellow-400 text-[10px]">{player.damage?.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamBlock
