// hooks/useSAUserBundle.ts
import { useEffect, useMemo } from "react";
import { useQuery, useQueries, UseQueryResult } from "react-query";
import { fetchSA_UserBasicInfo, fetchSA_UserId, fetchSA_UserRank, fetchSA_UserRecentInfo, fetchSA_UserTier } from "../fetch";
import { useSA_UserIDStore, useSA_UserInfoStore } from "../../store/data";

type BundleResult = {
    ouid?: string;
    results: {
        basic?: unknown;
        rank?: unknown;
        tier?: unknown;
        recent?: unknown;
    };
    isLoading: boolean;
    isError: boolean;
    error: unknown;
};

export function useSAUserBundle(nickname: string, opts?: { enabled?: boolean }): BundleResult {
    const enabled = opts?.enabled ?? !!nickname;

    const userIdQ = useQuery(
        ["SA_UserId", nickname],
        () => fetchSA_UserId(nickname),
        {
            enabled,
        }
    );

    const ouid = userIdQ.data?.ouid as string | undefined;

    const { setOuid } = useSA_UserIDStore();
    const { setBasicInfo, setRank, setTier, setRecentInfo } = useSA_UserInfoStore();

    useEffect(() => {
        if (ouid) setOuid(ouid);
    }, [ouid, setOuid]);

    const queries = useQueries([
        {
            queryKey: ["SA_UserBasicInfo", ouid],
            queryFn: () => fetchSA_UserBasicInfo(ouid as string),
            enabled: !!ouid,
        },
        {
            queryKey: ["SA_UserRank", ouid],
            queryFn: () => fetchSA_UserRank(ouid as string),
            enabled: !!ouid,
        },
        {
            queryKey: ["SA_UserTier", ouid],
            queryFn: () => fetchSA_UserTier(ouid as string),
            enabled: !!ouid,
        },
        {
            queryKey: ["SA_UserRecentInfo", ouid],
            queryFn: () => fetchSA_UserRecentInfo(ouid as string),
            enabled: !!ouid,
        },
    ]) as [
            UseQueryResult<any>,
            UseQueryResult<any>,
            UseQueryResult<any>,
            UseQueryResult<any>
        ];

    const [basicQ, rankQ, tierQ, recentQ] = queries;

    useEffect(() => {
        if (basicQ.data) setBasicInfo(basicQ.data);
    }, [basicQ.data, setBasicInfo]);

    useEffect(() => {
        if (rankQ.data) setRank(rankQ.data);
    }, [rankQ.data, setRank]);

    useEffect(() => {
        if (tierQ.data) setTier(tierQ.data);
    }, [tierQ.data, setTier]);

    useEffect(() => {
        if (recentQ.data) setRecentInfo(recentQ.data);
    }, [recentQ.data, setRecentInfo]);

    const isLoading = userIdQ.isLoading || (!!ouid && queries.some(q => q.isLoading));
    const isError = userIdQ.isError || queries.some(q => q.isError);
    const error =
        userIdQ.error ||
        queries.find(q => q.error)?.error ||
        null;

    const results = useMemo(
        () => ({
            basic: basicQ.data,
            rank: rankQ.data,
            tier: tierQ.data,
            recent: recentQ.data,
        }),
        [basicQ.data, rankQ.data, tierQ.data, recentQ.data]
    );

    return { ouid, results, isLoading, isError, error };
}
