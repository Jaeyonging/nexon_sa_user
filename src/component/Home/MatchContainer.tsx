import React, { useEffect, useRef } from 'react'
import { useSA_MatchInfoStore } from '../../store/data';
import MatchCard from '../card/MatchCard';
import SA_Card from '../card/SA_Card';

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
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
          매치 정보
        </h3>
      </div>
      {visibleList.length === 0 ? (
        <div className="text-center py-12 text-slate-400">
          매치 정보가 없습니다.
        </div>
      ) : (
        <>
          {visibleList.map((matchInfo: any) => (
            <MatchCard key={matchInfo.match_id} matchInfo={matchInfo} />
          ))}
          <div id="scroll-trigger" className="h-6" />
        </>
      )}
    </div>
  );
};

export default MatchContainer;
