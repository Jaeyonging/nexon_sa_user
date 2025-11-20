import React, { useEffect } from 'react'
import Loading from '../lotties/Loading';
import { useSAUserBundle } from './bundle/useSAUserBundle';
import { useQuery } from 'react-query';
import { useSA_MatchIDStore, useSA_MatchInfoStore, useSA_UserIDStore, useSA_UserInfoStore } from '../store/data';
import EmptyState from '../component/Home/EmptyState';
import { fetchSA_AllMatchInfo } from './fetch';

export const SAUserProvider = ({ children, nickname }: { children: React.ReactNode, nickname: string }) => {
    const { setBasicInfo, setRank, setTier, setRecentInfo } = useSA_UserInfoStore();
    const { results, isLoading, isError, error } = useSAUserBundle(nickname, {
        enabled: !!nickname
    });

    useEffect(() => {
        if (results.basic) {
            setBasicInfo(results.basic);
        }
        if (results.rank) {
            setRank(results.rank);
        }
        if (results.tier) {
            setTier(results.tier);
        }
        if (results.recent) {
            setRecentInfo(results.recent);
        }

    }, [results])

    if (isLoading) return <Loading />;
    if (isError) throw error;

    return <>{results && children}</>
}

export const SAMatchProvider = ({ children, matchMode }: { children: React.ReactNode, matchMode: string }) => {
    const { ouid } = useSA_UserIDStore();
    const { setAllmatchInfo, resetVisibleCount } = useSA_MatchInfoStore();

    const { data, isLoading, isError, error } = useQuery(["SA_AllMatchInfo", ouid, matchMode], () => fetchSA_AllMatchInfo(ouid, matchMode), { enabled: !!ouid, retry: 3 });

    useEffect(() => {
        if (data) {
            setAllmatchInfo(data.match);
            resetVisibleCount();
        }
        return () => {
            setAllmatchInfo(null);
        }
    }, [data]);

    if (isLoading) return <Loading />;
    if (isError) throw error;


    return <>{data && children}</>
}
