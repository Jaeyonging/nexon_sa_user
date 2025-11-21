import React from 'react'
import SA_Card from '../card/SA_Card'
import { badgeByManner, fmtDate } from '../../util/type';

interface Props{
    basicInfo: any;
    hasBasic: boolean;
}

const Profile = ({ basicInfo, hasBasic }: Props) => {
    return (
        <SA_Card className="mb-6 sm:mb-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-6">
                {/* Avatar */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-50 group-hover:opacity-70 transition duration-300"></div>
                    <div className="relative grid h-20 w-20 sm:h-24 sm:w-24 place-items-center rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 text-2xl sm:text-3xl font-bold text-white shadow-xl">
                        {(hasBasic && (basicInfo?.user_name?.[0] ?? "?")) || "?"}
                    </div>
                </div>

                {/* Info */}
                {hasBasic ? (
                    <div className="flex-1 w-full">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                                {basicInfo?.user_name}
                            </h2>
                            {basicInfo?.title_name && (
                                <span className="rounded-full bg-blue-500/30 backdrop-blur-sm border border-blue-400/50 px-3 py-1.5 text-xs sm:text-sm font-medium text-blue-100">
                                    {basicInfo.title_name}
                                </span>
                            )}
                            {basicInfo?.clan_name && (
                                <span className="rounded-full bg-purple-500/30 backdrop-blur-sm border border-purple-400/50 px-3 py-1.5 text-xs sm:text-sm font-medium text-purple-100">
                                    {basicInfo.clan_name}
                                </span>
                            )}
                            {basicInfo?.manner_grade && (
                                <span
                                    className={`rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium backdrop-blur-sm border ${badgeByManner(
                                        basicInfo.manner_grade
                                    )}`}
                                >
                                    매너 {basicInfo.manner_grade}
                                </span>
                            )}
                        </div>
                        <p className="text-sm sm:text-base text-slate-300">
                            가입일: {fmtDate(basicInfo?.user_date_create)}
                        </p>
                    </div>
                ) : (
                    <div className="flex-1 w-full">
                        <div className="mb-2 h-6 sm:h-8 w-32 sm:w-48 animate-pulse rounded-xl bg-white/10" />
                        <div className="h-4 sm:h-5 w-48 sm:w-64 animate-pulse rounded-xl bg-white/10" />
                    </div>
                )}
            </div>
        </SA_Card>
    )
}

export default Profile
