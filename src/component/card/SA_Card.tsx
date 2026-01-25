import React from 'react'

const SA_Card = ({ title, className, children }: { title?: string; className?: string; children: React.ReactNode }) => (
    <section className={`rounded-xl bg-[#1e1e38] border border-[#2a2a4a] p-3 ${className ?? ""}`}>
        {title ? (
            <h3 className="mb-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                {title}
            </h3>
        ) : null}
        {children}
    </section>
);


export default SA_Card
