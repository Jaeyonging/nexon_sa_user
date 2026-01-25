import React, { useEffect, useRef } from 'react'
import { useSA_MatchInfoStore } from '../../store/data';
import MatchCard from '../card/MatchCard';

const MatchContainer = () => {
  const { allmatchInfo, visibleCount, increaseVisibleCount } = useSA_MatchInfoStore();
  const visibleList = allmatchInfo?.slice(0, visibleCount) || [];

  const triggerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = document.querySelector("#scroll-trigger");
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        increaseVisibleCount();
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [allmatchInfo]);

  return (
    <div>
      {visibleList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <svg className="w-10 h-10 text-slate-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <div className="text-xs text-slate-500">매치 기록이 없습니다</div>
        </div>
      ) : (
        <>
          <div className="text-[10px] text-slate-500 mb-2">
            총 {allmatchInfo?.length ?? 0}개의 매치
          </div>
          {visibleList.map((matchInfo: any) => (
            <MatchCard key={matchInfo.match_id} matchInfo={matchInfo} />
          ))}
          {visibleCount < (allmatchInfo?.length ?? 0) && (
            <div id="scroll-trigger" className="h-8 flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MatchContainer;
