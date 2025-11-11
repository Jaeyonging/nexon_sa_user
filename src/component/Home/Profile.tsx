import React from 'react'
import SA_Card from '../card/SA_Card'
import { badgeByManner, fmtDate } from '../../util/type';

interface Props{
    basicInfo: any;
    hasBasic: boolean;
}

const Profile = ({ basicInfo, hasBasic }: Props) => {
    return (
        <SA_Card className="mb-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                {/* Avatar */}
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-slate-100 text-xl font-bold text-slate-600">
                    {(hasBasic && (basicInfo?.user_name?.[0] ?? "?")) || "?"}
                </div>

                {/* Info */}
                {hasBasic ? (
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                            <h2 className="text-xl font-bold tracking-tight text-slate-900">
                                {basicInfo?.user_name}
                            </h2>
                            {basicInfo?.title_name && (
                                <>
                                    <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200">
                                        {basicInfo.title_name}
                                    </span>
                                </>
                            )}
                            {basicInfo?.clan_name && (
                                <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200">
                                    {basicInfo.clan_name}
                                </span>
                            )}
                            {basicInfo?.manner_grade && (
                                <span
                                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${badgeByManner(
                                        basicInfo.manner_grade
                                    )}`}
                                >
                                    매너 {basicInfo.manner_grade}
                                </span>
                            )}
                        </div>
                        <p className="mt-1 text-sm text-slate-500">
                            가입일: {fmtDate(basicInfo?.user_date_create)}
                        </p>
                    </div>
                ) : (
                    <div className="flex-1">
                        <div className="mb-2 h-6 w-32 animate-pulse rounded bg-slate-100" />
                        <div className="h-4 w-48 animate-pulse rounded bg-slate-100" />
                    </div>
                )}
            </div>
        </SA_Card>
    )
}

export default Profile
