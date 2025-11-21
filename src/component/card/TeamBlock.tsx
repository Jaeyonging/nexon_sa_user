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
        <div className="flex flex-col gap-2">
            <div className={`flex items-center justify-between px-3 py-2 rounded-lg 
                ${isWin ? "bg-green-100 border border-green-300" : "bg-red-100 border border-red-300"}`}
            >
                <span className="font-semibold text-slate-700">{title}</span>
                <span className={`font-bold ${isWin ? "text-green-600" : "text-red-600"}`}>
                    {result}
                </span>
            </div>

            {/* 테이블 */}
            <div className="w-full overflow-auto">
                <table className="w-full text-sm text-center border-collapse">
                    <thead className="bg-slate-200 text-slate-700">
                        <tr>
                            <th className="p-2">닉네임</th>
                            <th className="p-2">계급</th>
                            <th className="p-2">K</th>
                            <th className="p-2">D</th>
                            <th className="p-2">A</th>
                            <th className="p-2">HS</th>
                            <th className="p-2">딜량</th>
                        </tr>
                    </thead>

                    <tbody>
                        {players.map((player: any, idx: number) => (
                            <tr
                                key={idx}
                                className={`border-b border-slate-300 hover:bg-slate-100 transition ${nickname === player.user_name ? "bg-slate-200" : ""}`}
                            >
                                <td className="p-2 font-semibold cursor-pointer hover:text-blue-600" onClick={() => handleNicknameClick(player.user_name)}>{player.user_name}</td>
                                <td className="p-2 text-slate-500"><img src={getSeasonGradeImage(player.season_grade) ?? "-"} alt={player.season_grade ?? "-"} className="object-contain w-8 h-8 inline-block" /> {player.season_grade}</td>
                                <td className="p-2 font-semibold text-slate-800">{player.kill}</td>
                                <td className="p-2 text-red-600 font-semibold">{player.death}</td>
                                <td className="p-2 text-green-600 font-semibold">{player.assist}</td>
                                <td className="p-2">{player.headshot}</td>
                                <td className="p-2">{player.damage.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeamBlock
