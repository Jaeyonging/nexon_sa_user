import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ApiErrorBoundary from '../../component/ApiErrorBoundary';
import { SAMatchProvider, SAUserProvider } from '../../api/fetchHooks';
import HomeContainer from '../../component/Home/HomeContainer';
import MatchTags from '../../component/match/MatchTags';
import MatchContainer from '../../component/Home/MatchContainer';
import SearchUser from '../../component/Home/SearchUser';

const Search = () => {
    const { nickname } = useParams<{ nickname: string | undefined }>();
    const [selectedMatchMode, setSelectedMatchMode] = useState("폭파미션");
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
                {/* Top Section */}
                <header className="flex flex-col items-center gap-6 sm:gap-8 pt-12 sm:pt-16 md:pt-20">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                        <img 
                            src={"../sa.svg"} 
                            alt="logo" 
                            className="relative w-[160px] sm:w-[200px] md:w-[240px] cursor-pointer transform transition-transform hover:scale-105" 
                            onClick={() => navigate("/")} 
                        />
                    </div>
                    <p className="text-slate-300 text-center text-sm sm:text-base md:text-lg max-w-2xl">
                        닉네임으로 유저 정보를 조회할 수 있어요. 철자에 유의해주세요.
                    </p>
                    <SearchUser/>
                </header>
            </div>
            <main className="relative mt-8 sm:mt-10">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <ApiErrorBoundary>
                        <SAUserProvider nickname={nickname ?? ""}>
                            <HomeContainer />
                        </SAUserProvider>
                    </ApiErrorBoundary>
                </div>
            </main>

            <main className="relative mt-8 sm:mt-10 w-full ">
                <div className="w-full bg-white/10 backdrop-blur-xl border-y border-white/20 py-4 sm:py-6 md:py-8 shadow-2xl">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <MatchTags matchModes={["개인전", "데스매치", "폭파미션", "진짜를 모아라"]} selectedMatchMode={selectedMatchMode} setSelectedMatchMode={setSelectedMatchMode} />
                        <ApiErrorBoundary>
                            <SAMatchProvider matchMode={selectedMatchMode}>
                                <MatchContainer />
                            </SAMatchProvider>
                        </ApiErrorBoundary>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Search
