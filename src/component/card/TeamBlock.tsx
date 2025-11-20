import React from 'react'

interface Props {
    title: string;
    result: string;
    players: any[];
}
const TeamBlock = ({ title, result, players }: Props) => {
    const isWin = result === "승리";

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
                                className="border-b border-slate-300 hover:bg-slate-100 transition"
                            >
                                <td className="p-2 font-semibold">{player.user_name}</td>
                                <td className="p-2 text-slate-500">{player.season_grade}</td>
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
