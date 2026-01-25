import SearchUser from "../../component/Home/SearchUser";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../util/cookies";
import { useEffect, useState } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const stored = getCookie("nicknames") ?? [];
    setRecentSearches(stored.slice(0, 5));
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#1a1a2e]">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#2a2a4a_1px,transparent_1px)] bg-[length:24px_24px] opacity-30" />

      <div className="relative">
        {/* 히어로 섹션 */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <div className="text-center mb-8">
            <img
              src={"./sa.svg"}
              alt="Sudden Attack"
              className="w-20 h-20 mx-auto mb-4 drop-shadow-lg"
            />
            <h1 className="text-2xl font-bold text-white mb-2">
              서든어택 전적 검색
            </h1>
            <p className="text-sm text-slate-400">
              닉네임을 검색하여 전적을 확인하세요
            </p>
          </div>

          <div className="w-full max-w-md">
            <SearchUser />
          </div>
        </div>

        {/* 기능 소개 */}
        <div className="max-w-4xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[#1e1e38] border border-[#2a2a4a] rounded-xl p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-xs font-medium text-white">유저 정보</div>
              <div className="text-[10px] text-slate-500 mt-0.5">프로필 조회</div>
            </div>
            <div className="bg-[#1e1e38] border border-[#2a2a4a] rounded-xl p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-xs font-medium text-white">계급 & 티어</div>
              <div className="text-[10px] text-slate-500 mt-0.5">랭킹 정보</div>
            </div>
            <div className="bg-[#1e1e38] border border-[#2a2a4a] rounded-xl p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-green-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-xs font-medium text-white">매치 기록</div>
              <div className="text-[10px] text-slate-500 mt-0.5">상세 전적</div>
            </div>
            <div className="bg-[#1e1e38] border border-[#2a2a4a] rounded-xl p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-xs font-medium text-white">팀 분석</div>
              <div className="text-[10px] text-slate-500 mt-0.5">플레이어 비교</div>
            </div>
          </div>

          {/* 최근 검색 */}
          {recentSearches.length > 0 && (
            <div className="mt-8 bg-[#1e1e38] border border-[#2a2a4a] rounded-xl p-4">
              <h3 className="text-xs font-semibold text-slate-400 mb-3">최근 검색한 유저</h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((name) => (
                  <button
                    key={name}
                    onClick={() => navigate(`/search/${encodeURIComponent(name)}`)}
                    className="px-3 py-1.5 bg-[#2a2a4a] hover:bg-[#3a3a5a] text-white text-xs rounded-lg transition-colors"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 푸터 */}
        <footer className="border-t border-[#2a2a4a] py-4">
          <div className="text-center text-[10px] text-slate-500">
            Data provided by NEXON Open API
          </div>
        </footer>
      </div>
    </div>
  );
};
