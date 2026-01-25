import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-8 gap-2">
      <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
      <span className="text-xs text-slate-400">로딩 중...</span>
    </div>
  )
}

export default Loading;
