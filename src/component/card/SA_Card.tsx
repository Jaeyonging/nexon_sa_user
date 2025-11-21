import React from 'react'

const SA_Card = ({ title, className, children }: { title?: string; className?: string; children: React.ReactNode }) => (
    <section
        className={`relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-5 sm:p-6 md:p-8 shadow-2xl transition-all duration-300 hover:bg-white/15 hover:shadow-3xl ${className ?? ""}`}
    >
        {title ? (
            <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-bold tracking-tight text-white">
                {title}
            </h3>
        ) : null}
        {children}
    </section>
);


export default SA_Card
