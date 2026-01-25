import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from '../../util/cookies';

const SearchUser = () => {
    const [inputNickname, setInputNickname] = useState("");
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        const trimmed = inputNickname.trim();
        if (!trimmed) return;

        const prev = getCookie("nicknames") ?? [];
        const filtered = prev.filter((item: string) => item !== trimmed);
        const updated = [trimmed, ...filtered].slice(0, 10);
        setCookie("nicknames", updated, { path: "/" });
        navigate(`/search/${encodeURIComponent(trimmed)}`);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        // 한글 IME 조합 중이면 무시
        if (e.nativeEvent.isComposing) return;
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const clearInput = () => setInputNickname("");

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="flex items-center gap-2 w-full">
            <div className="relative flex-1">
                <input
                    ref={inputRef}
                    type="text"
                    className="w-full h-10 rounded-lg bg-[#1e1e38] border border-[#2a2a4a] px-3 pr-8 text-sm text-white placeholder:text-slate-500 outline-none focus:border-orange-500/50 transition-colors"
                    placeholder="닉네임 입력"
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
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
                        onClick={clearInput}
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
            <button
                className="h-10 px-5 rounded-lg bg-orange-500 text-sm text-white font-medium hover:bg-orange-600 disabled:opacity-40 disabled:hover:bg-orange-500 transition-colors flex-shrink-0"
                onClick={handleSearch}
                disabled={!inputNickname.trim()}
            >
                검색
            </button>
        </div>
    );
};

export default SearchUser;
