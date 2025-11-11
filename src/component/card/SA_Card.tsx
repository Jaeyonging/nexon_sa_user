import React from 'react'

const SA_Card = ({ title, className, children }: { title?: string; className?: string; children: React.ReactNode }) => (
    <section
        className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className ?? ""}`}
    >
        {title ? (
            <h3 className="mb-3 text-sm font-semibold tracking-tight text-slate-700">
                {title}
            </h3>
        ) : null}
        {children}
    </section>
);


export default SA_Card
