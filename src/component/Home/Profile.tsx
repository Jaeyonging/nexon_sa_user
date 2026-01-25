import React from 'react'
import { badgeByManner, fmtDate } from '../../util/type';

interface Props{
    basicInfo: any;
    hasBasic: boolean;
}

const Profile = ({ basicInfo, hasBasic }: Props) => {
    return (
        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1e1e38] border border-[#2a2a4a]">
            {/* Avatar */}
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-xl font-bold text-white flex-shrink-0 shadow-lg shadow-orange-500/20">
                {(hasBasic && (basicInfo?.user_name?.[0] ?? "?")) || "?"}
            </div>

            {/* Info */}
            {hasBasic ? (
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h2 className="text-lg font-bold text-white truncate">
                            {basicInfo?.user_name}
                        </h2>
                        {basicInfo?.manner_grade && (
                            <span className={`px-2 py-0.5 text-[10px] font-semibold rounded ${badgeByManner(basicInfo.manner_grade)}`}>
                                {basicInfo.manner_grade}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                        {basicInfo?.title_name && (
                            <span className="text-orange-400">{basicInfo.title_name}</span>
                        )}
                        {basicInfo?.clan_name && (
                            <span className="text-slate-400">
                                <span className="text-slate-600">|</span> {basicInfo.clan_name}
                            </span>
                        )}
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1">
                        가입일 {fmtDate(basicInfo?.user_date_create)}
                    </p>
                </div>
            ) : (
                <div className="flex-1">
                    <div className="h-5 w-32 animate-pulse rounded bg-[#2a2a4a] mb-2" />
                    <div className="h-3 w-24 animate-pulse rounded bg-[#2a2a4a]" />
                </div>
            )}
        </div>
    )
}

export default Profile
