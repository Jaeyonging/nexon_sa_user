import React from 'react'
import Loading from '../lotties/Loading';
import { useSAUserBundle } from './bundle/useSAUserBundle';

export const SAUserProvider = ({ children, nickname }: { children: React.ReactNode, nickname: string }) => {
    const {isLoading, isError, error } = useSAUserBundle(nickname, {
        enabled: !!nickname
    });

    if (isLoading) return <Loading />;
    if (isError) throw error;

    return <>{children}</>
}
