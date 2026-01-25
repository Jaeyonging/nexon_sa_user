import React from 'react'

const Stat = ({ label, value, className }: { label: string; value: React.ReactNode; className?: string }) => (
    <div className={`flex items-center justify-between py-1 ${className ?? ""}`}>
        <span className="text-[11px] text-slate-400">{label}</span>
        <span className="text-xs font-semibold text-white">{value}</span>
    </div>
);


export default Stat
