import React from 'react'

const Skeleton = () => (
    <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-12 animate-pulse rounded-lg bg-[#2a2a4a]/50" />
        ))}
    </div>
);

export default Skeleton
