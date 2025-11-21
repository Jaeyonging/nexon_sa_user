import { useState } from "react";
import { SAMatchProvider, SAUserProvider } from "../../api/fetchHooks";
import ApiErrorBoundary from "../../component/ApiErrorBoundary";
import HomeContainer from "../../component/Home/HomeContainer";
import SearchUser from "../../component/Home/SearchUser";
import MatchContainer from "../../component/Home/MatchContainer";
import MatchTags from "../../component/match/MatchTags";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="mx-auto max-w-5xl px-4 pb-24">
        <header className="flex flex-col items-center gap-6 pt-16">
          <img src={"./sa.svg"} alt="logo" className="w-[180px] sm:w-[220px] cursor-pointer" onClick={() => navigate("/")} />
          <p className="text-slate-500 text-center text-sm sm:text-base">
            닉네임으로 유저 정보를 조회할 수 있어요. 철자에 유의해주세요.
          </p>
          <SearchUser />
        </header>
      </div>
    </div>
  );
};