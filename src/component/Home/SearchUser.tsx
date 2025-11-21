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
        <div className="w-full flex flex-col items-center justify-center gap-6">
            {/* 검색창 */}
            <div className="flex w-full max-w-xl items-center gap-2">
                <div className="relative flex-1">
                    <input
                        ref={inputRef}
                        type="text"
                        className="w-full h-12 rounded-xl border border-slate-300 bg-white px-4 pr-10 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-slate-100"
                            onClick={clearInput}
                        >
                            지우기
                        </button>
                    )}
                </div>

                <button
                    className="h-12 min-w-[96px] rounded-xl bg-blue-600 px-5 text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed"
                    onClick={handleSearch}
                    disabled={!inputNickname.trim()}
                >
                    검색
                </button>
            </div>


            <div className="w-full max-w-xl">
                <span className="text-sm text-slate-600">최근 검색</span>

                <div className="flex flex-wrap gap-2 mt-2">
                    {recentList.length === 0 && (
                        <span className="text-slate-400 text-sm">최근 검색 기록이 없습니다.</span>
                    )}

                    {recentList.map(name => (
                        <div
                            key={name}
                            className="flex items-center bg-slate-100 rounded-full px-3 py-1 text-sm cursor-pointer group hover:bg-slate-200"
                        >
                            <span onClick={() => handleRecentClick(name)}>
                                {name}
                            </span>

                            <button
                                className="ml-2 text-slate-500 hover:text-red-500 text-xs"
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
        </div>
    );
};

export default SearchUser;
