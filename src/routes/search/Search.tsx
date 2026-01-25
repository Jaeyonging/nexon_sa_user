import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ApiErrorBoundary from '../../component/ApiErrorBoundary';
import { SAMatchProvider, SAUserProvider } from '../../api/fetchHooks';
import HomeContainer from '../../component/Home/HomeContainer';
import MatchTags from '../../component/match/MatchTags';
import MatchContainer from '../../component/Home/MatchContainer';
import SearchUser from '../../component/Home/SearchUser';

const MATCH_MODES = ["개인전", "데스매치", "폭파미션", "진짜를 모아라"];
const MATCH_TYPES = ["전체", "일반전", "클랜전", "퀵매치 클랜전", "클랜 랭크전", "랭크전 솔로", "랭크전 파티", "토너먼트"];

const Search = () => {
    const { nickname } = useParams<{ nickname: string | undefined }>();
    const [selectedMatchMode, setSelectedMatchMode] = useState("폭파미션");
    const [selectedMatchType, setSelectedMatchType] = useState("전체");
    const navigate = useNavigate();

    const showMatchType = selectedMatchMode === "폭파미션";

    return (
        <div className="min-h-screen w-full bg-[#1a1a2e]">
            {/* 헤더 */}
            <header className="sticky top-0 z-50 bg-[#16162a]/95 backdrop-blur border-b border-[#2a2a4a]">
                <div className="max-w-4xl mx-auto px-4 py-2.5">
                    <div className="flex items-center gap-3">
                        <img
                            src={"../sa.svg"}
                            alt="logo"
                            className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => navigate("/")}
                        />
                        <div className="flex-1">
                            <SearchUser />
                        </div>
                    </div>
                </div>
            </header>

            {/* 유저 정보 */}
            <main className="max-w-4xl mx-auto px-4 py-4">
                <ApiErrorBoundary>
                    <SAUserProvider nickname={nickname ?? ""}>
                        <HomeContainer />
                    </SAUserProvider>
                </ApiErrorBoundary>
            </main>

            {/* 매치 정보 */}
            <section className="max-w-4xl mx-auto px-4 pb-8">
                <div className="rounded-xl bg-[#1e1e38] border border-[#2a2a4a] overflow-hidden">
                    {/* 매치 모드 탭 */}
                    <div className="border-b border-[#2a2a4a] p-3">
                        <MatchTags
                            matchModes={MATCH_MODES}
                            selectedMatchMode={selectedMatchMode}
                            setSelectedMatchMode={(mode) => {
                                setSelectedMatchMode(mode);
                                setSelectedMatchType("전체");
                            }}
                        />
                        {/* 폭파미션일 때 match_type 선택 */}
                        {showMatchType && (
                            <div className="flex gap-1.5 flex-wrap mt-2">
                                {MATCH_TYPES.map((type) => (
                                    <button
                                        key={type}
                                        className={`px-2 py-1 rounded text-[10px] font-medium transition-colors ${
                                            selectedMatchType === type
                                                ? "bg-orange-500 text-white"
                                                : "bg-[#2a2a4a] text-slate-400 hover:text-white"
                                        }`}
                                        onClick={() => setSelectedMatchType(type)}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* 매치 리스트 */}
                    <div className="p-3">
                        <ApiErrorBoundary>
                            <SAMatchProvider
                                matchMode={selectedMatchMode}
                                matchType={showMatchType && selectedMatchType !== "전체" ? selectedMatchType : undefined}
                            >
                                <MatchContainer />
                            </SAMatchProvider>
                        </ApiErrorBoundary>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Search
