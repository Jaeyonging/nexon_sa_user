import React from 'react'

const Stat = ({ label, value, sub, className }: { label: string; value: React.ReactNode; sub?: string; className?: string }) => (
    <div className={`rounded-2xl border border-white/20 bg-white/5 p-4 sm:p-5 text-center hover:bg-white/10 transition-all duration-300 ${className ?? ""}`}>
        <div className="text-[10px] sm:text-[12px] text-slate-300">{label}</div>
        <div className="mt-2 text-[20px] font-bold tracking-tight text-white">{value}</div>
        {sub ? <div className="mt-1 text-[10px] sm:text-[12px] text-slate-400">{sub}</div> : null}
    </div>
);


export default Stat
