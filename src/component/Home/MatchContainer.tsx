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
      <SA_Card title="매치 정보">
        {visibleList.map((matchInfo: any) => (
          <MatchCard key={matchInfo.match_id} matchInfo={matchInfo} />
        ))}
        <div id="scroll-trigger" className="h-6" />
      </SA_Card>
    </div>
  );
};

export default MatchContainer;
