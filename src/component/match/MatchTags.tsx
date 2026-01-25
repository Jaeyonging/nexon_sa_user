import React from 'react'

interface Props {
  matchModes: string[];
  selectedMatchMode: string;
  setSelectedMatchMode: (matchMode: string) => void;
}

const MatchTags = ({ matchModes, selectedMatchMode, setSelectedMatchMode }: Props) => {
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1">
      {matchModes.map((matchMode) => (
        <button
          key={matchMode}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
            selectedMatchMode === matchMode
              ? "bg-orange-500 text-white"
              : "bg-[#2a2a4a] text-slate-400 hover:text-white"
          }`}
          onClick={() => setSelectedMatchMode(matchMode)}
        >
          {matchMode}
        </button>
      ))}
    </div>
  )
}

export default MatchTags
