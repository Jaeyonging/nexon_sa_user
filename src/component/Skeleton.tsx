import React from 'react'

const Skeleton = () => (
    <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-24 animate-pulse rounded-2xl bg-slate-100" />
        ))}
    </div>
);

export default Skeleton
