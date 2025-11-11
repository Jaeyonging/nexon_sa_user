import React, { useEffect, useRef, useState } from 'react'

interface Props {
    nickname: string;
    setNickname: (nickname: string) => void;
}

const SearchUser = ({ nickname, setNickname }: Props) => {
    const [inputNickname, setInputNickname] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);


    const handleSearch = () => {
        const trimmed = inputNickname.trim();
        if (!trimmed) return;
        setNickname(trimmed);
    };


    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };


    const clearInput = () => setInputNickname("");


    useEffect(() => {
        // 포커스 유도
        inputRef.current?.focus();
    }, []);


    return (
        <div className="w-full flex items-center justify-center">
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
                    />
                    {inputNickname && (
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-slate-100"
                            onClick={clearInput}
                            aria-label="clear"
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
        </div>
    );
};

export default SearchUser;
