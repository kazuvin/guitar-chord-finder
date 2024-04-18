import { useState } from "react";
import "./App.css";
import Fletboard from "./components/fretboard";
import { SelectedPitchState } from "./lib/music-theory/types";
import { getChord } from "./lib/music-theory/get-chord";
import { getRootPitchBySelected } from "./lib/music-theory/get-root-pitch";
import { SCIENTIFIC_PITCH_NOTATION } from "./lib/music-theory/const";
import Piano from "./components/piano";

function App() {
  const [searchedChord, setSearchedChord] = useState<string | undefined>(
    undefined,
  );

  const [selectedPitches, setSelectedPitches] = useState<number[]>([]);

  const handleSelectedChange = (pitchState: SelectedPitchState) => {
    setSelectedPitches(
      Object.values(pitchState).filter((pitch) => pitch) as number[],
    );
    setSearchedChord(
      getChord(
        getRootPitchBySelected(
          pitchState,
        ) as keyof typeof SCIENTIFIC_PITCH_NOTATION,
        Object.values(pitchState).filter((pitch) => pitch) as number[],
      ),
    );
  };

  return (
    <main className="mx-auto flex min-h-screen flex-1 flex-col items-center justify-center gap-8">
      {searchedChord ? (
        <div className="text-5xl font-bold">{searchedChord}</div>
      ) : (
        <div className="text-5xl text-gray-800 text-opacity-30">No results</div>
      )}
      <Fletboard
        displayMode="DIGREE"
        tuning="REGULAR"
        onSelectedChange={handleSelectedChange}
      />
      <div className="w-full max-w-screen-lg overflow-x-scroll">
        <Piano selectedPitches={selectedPitches} />
      </div>
    </main>
  );
}

export default App;
