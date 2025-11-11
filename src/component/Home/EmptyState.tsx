import React from 'react'

const EmptyState = () => (
    <div className="mt-8 flex flex-col items-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <div className="text-lg font-semibold text-slate-700">검색 대기 중</div>
        <p className="text-sm text-slate-500">닉네임을 입력하고 검색을 눌러주세요.</p>
    </div>
);

export default EmptyState
