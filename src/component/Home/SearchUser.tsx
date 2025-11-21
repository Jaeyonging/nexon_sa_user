import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from '../../util/cookies';

const SearchUser = () => {
    const [inputNickname, setInputNickname] = useState("");
    const [recentList, setRecentList] = useState<string[]>([]);
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const stored = getCookie("nicknames") ?? [];
        setRecentList(stored);
    }, []);

    const handleSearch = () => {
        const trimmed = inputNickname.trim();
        if (!trimmed) return;

        const prev = getCookie("nicknames") ?? [];

        const filtered = prev.filter((item: string) => item !== trimmed);
        const updated = [trimmed, ...filtered];
        setCookie("nicknames", updated, { path: "/" });
        setRecentList(updated);
        navigate(`/search/${encodeURIComponent(trimmed)}`);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const removeNickname = (name: string) => {
        const updated = recentList.filter(item => item !== name);
        setRecentList(updated);
        setCookie("nicknames", updated, { path: "/" });
    };

    const handleRecentClick = (name: string) => {
        setInputNickname(name);
        navigate(`/search/${encodeURIComponent(name)}`);

        const filtered = recentList.filter(item => item !== name);
        const updated = [name, ...filtered];

        setRecentList(updated);
        setCookie("nicknames", updated, { path: "/" });
    };

    const clearInput = () => setInputNickname("");

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8">
            {/* 검색창 */}
            <div className="flex w-full max-w-2xl items-center gap-3 sm:gap-4">
                <div className="relative flex-1 group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                    <div className="relative">
                        <input
                            ref={inputRef}
                            type="text"
                            className="w-full h-12 sm:h-14 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-xl px-4 sm:px-6 pr-12 text-white placeholder:text-slate-400 shadow-xl outline-none transition-all duration-300 focus:border-blue-400 focus:bg-white/20 focus:ring-4 focus:ring-blue-500/20"
                            placeholder="닉네임을 입력해주세요."
                            value={inputNickname}
                            onChange={(e) => setInputNickname(e.target.value)}
                            onKeyDown={handleKeyDown}
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck={false}
                        />
                        {inputNickname && (
                            <button
                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                                onClick={clearInput}
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                <button
                    className="h-12 sm:h-14 min-w-[100px] sm:min-w-[120px] rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 sm:px-8 text-white font-semibold shadow-xl transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:shadow-2xl hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                    onClick={handleSearch}
                    disabled={!inputNickname.trim()}
                >
                    검색
                </button>
            </div>

            {/* 최근 검색 */}
            {recentList.length > 0 && (
                <div className="w-full max-w-2xl">
                    <span className="text-sm sm:text-base text-slate-300 font-medium">최근 검색</span>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                        {recentList.map(name => (
                            <div
                                key={name}
                                className="group flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 text-sm sm:text-base text-white cursor-pointer transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105"
                            >
                                <span onClick={() => handleRecentClick(name)} className="pr-2">
                                    {name}
                                </span>
                                <button
                                    className="text-slate-400 hover:text-red-400 text-xs sm:text-sm transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        removeNickname(name);
                                    }}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchUser;
