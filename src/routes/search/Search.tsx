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
        <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100">
            <div className="mx-auto max-w-5xl px-4 pb-24">
                {/* Top Section */}
                <header className="flex flex-col items-center gap-6 pt-16">
                    <img src={"../sa.svg"} alt="logo" className="w-[180px] sm:w-[220px] cursor-pointer" onClick={() => navigate("/")} />
                    <p className="text-slate-500 text-center text-sm sm:text-base">
                        닉네임으로 유저 정보를 조회할 수 있어요. 철자에 유의해주세요.
                    </p>
                    <SearchUser/>
                </header>
            </div>
            <main className="mt-10">
                <ApiErrorBoundary>
                    <SAUserProvider nickname={nickname ?? ""}>
                        <HomeContainer />
                    </SAUserProvider>
                </ApiErrorBoundary>
            </main>

            <main className="mt-10 bg-white p-4 rounded-2xl">
                <MatchTags matchModes={["개인전", "데스매치", "폭파미션", "진짜를 모아라"]} selectedMatchMode={selectedMatchMode} setSelectedMatchMode={setSelectedMatchMode} />
                <ApiErrorBoundary>
                    <SAMatchProvider matchMode={selectedMatchMode}>
                        <MatchContainer />
                    </SAMatchProvider>
                </ApiErrorBoundary>
            </main>
        </div>
    )
}

export default Search
