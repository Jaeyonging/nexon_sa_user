import React from 'react'

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 text-center">
        <svg className="w-12 h-12 text-slate-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <div className="text-sm text-slate-400">닉네임을 검색해주세요</div>
    </div>
);

export default EmptyState
