import React from 'react'

interface Props {
  matchModes: string[];
  selectedMatchMode: string;
  setSelectedMatchMode: (matchMode: string) => void;
}

const MatchTags = ({ matchModes, selectedMatchMode, setSelectedMatchMode }: Props) => {   
  return (
    <div className="flex gap-4">
      {matchModes.map((matchMode) => (
        <button key={matchMode} className={`bg-blue-500 text-white px-4 py-2 rounded-md ${selectedMatchMode === matchMode ? "bg-blue-600" : ""}`} onClick={() => setSelectedMatchMode(matchMode)}>
          {matchMode}
        </button>
      ))}
      
    </div>
  )
}

export default MatchTags
