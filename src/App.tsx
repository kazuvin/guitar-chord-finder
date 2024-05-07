import { useState } from "react";
import "./App.css";
import Fretboard from "./components/fretboard";
import { getChord } from "./lib/music-theory/get-chord";
import { DISPLAY_MODE, SPN, TUNINGS } from "./lib/music-theory/const";
import Piano from "./components/piano";
import { Select, SelectItem } from "./components/select";
import { FretState } from "./lib/music-theory/types";

function App() {
  const [fretState, setFretState] = useState<FretState>({
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
  });

  const [selectedTuning, setSelectedTuning] =
    useState<keyof typeof TUNINGS>("REGULAR");

  const [selectedDisplayMode, setSelectedDisplayMode] =
    useState<keyof typeof DISPLAY_MODE>("PITCH");

  const searchedChord = getChord(
    Object.values(fretState).filter((pitch) => pitch) as (keyof typeof SPN)[],
  );

  const handleSelectedChange = (pitchState: FretState) => {
    setFretState(pitchState);
  };

  const handleClear = () => {
    setFretState({
      1: undefined,
      2: undefined,
      3: undefined,
      4: undefined,
      5: undefined,
      6: undefined,
    });
  };

  return (
    <main className="mx-auto flex min-h-screen flex-1 flex-col items-center justify-center gap-8">
      <div className="flex h-20 items-center">
        {(() => {
          if (Object.values(fretState).every((pitch) => !pitch))
            return (
              <div className="text-white text-opacity-70">
                フレットを選択してコードを検索しましょう
              </div>
            );
          if (!searchedChord)
            return (
              <div className="text-white text-opacity-70">検索結果なし</div>
            );
          return <div className="text-5xl font-bold">{searchedChord}</div>;
        })()}
      </div>
      <div className="flex w-full max-w-screen-lg items-end justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold">チューニング</label>
            <Select
              defaultValue={selectedTuning}
              onValueChange={(value: keyof typeof TUNINGS) =>
                setSelectedTuning(value)
              }
            >
              {Object.entries(TUNINGS).map(([value, { name }]) => (
                <SelectItem key={value} value={value}>
                  {name}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold">表示モード</label>
            <Select
              defaultValue={selectedDisplayMode}
              onValueChange={(value: keyof typeof DISPLAY_MODE) =>
                setSelectedDisplayMode(value)
              }
            >
              {Object.entries(DISPLAY_MODE).map(([value, name]) => (
                <SelectItem key={value} value={value}>
                  {name}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleClear}
            className="p-2 text-xs text-stone-100 transition-all duration-150 hover:text-opacity-80"
          >
            選択をクリア
          </button>
        </div>
      </div>
      <div className="w-full max-w-screen-lg overflow-x-scroll">
        <Fretboard
          forceSelectedPitches={fretState}
          displayMode={selectedDisplayMode}
          tuning={selectedTuning}
          onSelectedChange={handleSelectedChange}
        />
      </div>

      <div className="w-full max-w-screen-lg overflow-x-scroll">
        <Piano
          fretState={
            Object.values(fretState).filter(
              (pitch) => !!pitch,
            ) as (keyof typeof SPN)[]
          }
        />
      </div>
    </main>
  );
}

export default App;
