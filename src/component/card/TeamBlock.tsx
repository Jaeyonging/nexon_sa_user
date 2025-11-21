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
        <div className="flex flex-col gap-4">
            {/* 팀 헤더 */}
            <div className={`flex items-center justify-between px-4 py-3 rounded-xl border-2
                ${isWin 
                    ? "bg-green-500/20 border-green-400/50" 
                    : "bg-red-500/20 border-red-400/50"
                }`}
            >
                <span className="font-bold text-white text-lg">{title}</span>
                <span className={`font-bold text-lg ${isWin ? "text-green-300" : "text-red-300"}`}>
                    {result}
                </span>
            </div>

            {/* 플레이어 카드 리스트 */}
            <div className="grid gap-3 sm:gap-4">
                {players.map((player: any, idx: number) => {
                    const isCurrentUser = nickname === player.user_name;
                    return (
                        <div
                            key={idx}
                            className={`rounded-xl border-2 transition-all duration-300 hover:shadow-xl
                                ${isCurrentUser 
                                    ? "bg-blue-500/20 border-blue-400/50 shadow-lg" 
                                    : "bg-white/5 border-white/20 hover:bg-white/10"
                                }`}
                        >
                            {/* 모바일 레이아웃 - 매우 간단하게 */}
                            <div className="sm:hidden p-3">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                                        <img 
                                            src={getSeasonGradeImage(player.season_grade) ?? "-"} 
                                            alt={player.season_grade ?? "-"} 
                                            className="object-contain w-9 h-9 rounded-lg bg-white/10 p-0.5 flex-shrink-0" 
                                        />
                                        <div className="flex-1 min-w-0">
                                            <div 
                                                className={`font-bold text-sm cursor-pointer transition-colors truncate ${
                                                    isCurrentUser 
                                                        ? "text-blue-200" 
                                                        : "text-white"
                                                }`}
                                                onClick={() => handleNicknameClick(player.user_name)}
                                            >
                                                {player.user_name}
                                            </div>
                                            <div className="text-xs text-slate-400 truncate">
                                                {player.season_grade}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 주요 스탯만 강조 */}
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex-1 text-center">
                                        <div className="text-lg font-bold text-white">{player.kill}</div>
                                        <div className="text-xs text-slate-400">킬</div>
                                    </div>
                                    <div className="w-px h-8 bg-white/20"></div>
                                    <div className="flex-1 text-center">
                                        <div className="text-lg font-bold text-red-400">{player.death}</div>
                                        <div className="text-xs text-slate-400">데스</div>
                                    </div>
                                    <div className="w-px h-8 bg-white/20"></div>
                                    <div className="flex-1 text-center">
                                        <div className="text-lg font-bold text-green-400">{player.assist}</div>
                                        <div className="text-xs text-slate-400">어시</div>
                                    </div>
                                </div>
                                
                                {/* 추가 정보 */}
                                <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                                    <span>헤드샷: <span className="text-white font-semibold">{player.headshot}</span></span>
                                    <span>딜량: <span className="text-yellow-400 font-semibold">{player.damage.toLocaleString()}</span></span>
                                </div>
                            </div>

                            {/* 데스크톱/태블릿 레이아웃 */}
                            <div className="hidden sm:flex sm:items-center gap-4 p-4">
                                {/* 플레이어 정보 */}
                                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                                    <img 
                                        src={getSeasonGradeImage(player.season_grade) ?? "-"} 
                                        alt={player.season_grade ?? "-"} 
                                        className="object-contain w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white/10 p-1 flex-shrink-0" 
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div 
                                            className={`font-bold text-base sm:text-lg mb-1 cursor-pointer transition-colors ${
                                                isCurrentUser 
                                                    ? "text-blue-200" 
                                                    : "text-white hover:text-blue-300"
                                            }`}
                                            onClick={() => handleNicknameClick(player.user_name)}
                                        >
                                            {player.user_name}
                                        </div>
                                        <div className="text-xs sm:text-sm text-slate-400">
                                            {player.season_grade}
                                        </div>
                                    </div>
                                </div>

                                {/* 스탯 그리드 */}
                                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                                    <div className="flex flex-col items-center rounded-lg bg-white/5 p-2 sm:p-3">
                                        <span className="text-lg sm:text-xl font-bold text-white">{player.kill}</span>
                                        <span className="text-xs text-slate-400 mt-0.5">K</span>
                                    </div>
                                    <div className="flex flex-col items-center rounded-lg bg-white/5 p-2 sm:p-3">
                                        <span className="text-lg sm:text-xl font-bold text-red-400">{player.death}</span>
                                        <span className="text-xs text-slate-400 mt-0.5">D</span>
                                    </div>
                                    <div className="flex flex-col items-center rounded-lg bg-white/5 p-2 sm:p-3">
                                        <span className="text-lg sm:text-xl font-bold text-green-400">{player.assist}</span>
                                        <span className="text-xs text-slate-400 mt-0.5">A</span>
                                    </div>
                                    <div className="flex flex-col items-center rounded-lg bg-white/5 p-2 sm:p-3">
                                        <span className="text-lg sm:text-xl font-bold text-white">{player.headshot}</span>
                                        <span className="text-xs text-slate-400 mt-0.5">HS</span>
                                    </div>
                                    <div className="flex flex-col items-center rounded-lg bg-white/5 p-2 sm:p-3">
                                        <span className="text-lg sm:text-xl font-bold text-yellow-400">{player.damage.toLocaleString()}</span>
                                        <span className="text-xs text-slate-400 mt-0.5">딜량</span>
                                    </div>
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
