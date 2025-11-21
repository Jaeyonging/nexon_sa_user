import React from 'react'

const EmptyState = () => (
    <div className="mt-8 flex flex-col items-center gap-3 rounded-3xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-xl p-10 sm:p-12 text-center">
        <div className="text-xl sm:text-2xl font-bold text-white">검색 대기 중</div>
        <p className="text-sm sm:text-base text-slate-300">닉네임을 입력하고 검색을 눌러주세요.</p>
    </div>
);

export default EmptyState
