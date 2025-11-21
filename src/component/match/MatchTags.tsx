import React from 'react'

interface Props {
  matchModes: string[];
  selectedMatchMode: string;
  setSelectedMatchMode: (matchMode: string) => void;
}

const MatchTags = ({ matchModes, selectedMatchMode, setSelectedMatchMode }: Props) => {   
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
      {matchModes.map((matchMode) => (
        <button 
          key={matchMode} 
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
            selectedMatchMode === matchMode 
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105" 
              : "bg-white/10 backdrop-blur-sm border border-white/20 text-slate-300 hover:bg-white/20 hover:text-white hover:scale-105"
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
