import { useState } from "react";
import "./App.css";
import Fletboard from "./components/fretboard";
import { SelectedPitchState } from "./lib/music-theory/types";
import { getChord } from "./lib/music-theory/get-chord";
import { getRootPitchBySelected } from "./lib/music-theory/get-root-pitch";
import { SCIENTIFIC_PITCH_NOTATION } from "./lib/music-theory/const";

function App() {
  const [searchedChord, setSearchedChord] = useState<string | undefined>(
    undefined,
  );

  const handleSelectedChange = (pitchState: SelectedPitchState) => {
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
    </main>
  );
}

export default App;
