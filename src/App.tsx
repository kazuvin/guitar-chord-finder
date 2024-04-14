import "./App.css";
import { getScales } from "./lib/music-theory/get-scales";
import {
  DISPLAY_MODE,
  GUITAR_STRINGS,
  SCIENTIFIC_PITCH_NOTATION,
  TUNINGS,
} from "./lib/music-theory/const";
import clsx from "clsx";
import { useCallback, useState } from "react";
import { getRootPitchBySelected } from "./lib/music-theory/get-root-pitch";
import { SelectedPitchState } from "./lib/music-theory/types";
import { getIntervalName } from "./lib/music-theory/get-interval";
import isSamePitchClass from "./lib/music-theory/is-same-pitch-class";
import { getChord } from "./lib/music-theory/get-chord";

function App() {
  const [selectedPitches, setSelectedPitches] = useState<SelectedPitchState>({
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
  });

  const [selectedTuning] = useState<keyof typeof TUNINGS>("REGULAR");

  const [selectedMode] = useState<keyof typeof DISPLAY_MODE>("DIGREE");

  const scales = getScales({ tuning: selectedTuning });

  const selectedRootPitch = getRootPitchBySelected(selectedPitches);

  const searchedChord = selectedRootPitch
    ? getChord(
        selectedRootPitch as keyof typeof SCIENTIFIC_PITCH_NOTATION,
        Object.values(selectedPitches).filter((pitch) => pitch) as number[],
      )
    : undefined;

  const handleClickPitch = useCallback(
    (stringNum: keyof typeof GUITAR_STRINGS, pitch: number) => {
      if (selectedPitches[stringNum] === pitch) {
        setSelectedPitches({ ...selectedPitches, [stringNum]: undefined });
      } else {
        setSelectedPitches({ ...selectedPitches, [stringNum]: pitch });
      }
    },
    [selectedPitches],
  );

  const getStyle = (stringNum: keyof typeof GUITAR_STRINGS, pitch: number) => {
    if (selectedPitches[stringNum] === pitch) return "font-bold text-red-600";
    if (
      Object.values(selectedPitches).some((selected) => {
        if (!selected) return false;
        return isSamePitchClass(selected, pitch);
      })
    )
      return "text-red-300";
    return;
  };

  const getDisplay = (pitch: keyof typeof SCIENTIFIC_PITCH_NOTATION) => {
    if (selectedMode === "PITCH") return SCIENTIFIC_PITCH_NOTATION[pitch];
    if (!selectedRootPitch) return;
    return getIntervalName(selectedRootPitch, pitch);
  };

  return (
    <main className="mx-auto flex min-h-screen flex-1 flex-col items-center justify-center gap-8">
      {searchedChord ? (
        <div className="text-5xl font-bold">{searchedChord}</div>
      ) : (
        <div className="text-5xl text-gray-800 text-opacity-30">No results</div>
      )}
      <table className="w-full table-fixed text-center text-sm">
        <tbody>
          {([1, 2, 3, 4, 5, 6] as (keyof typeof GUITAR_STRINGS)[]).map(
            (stringNum) => (
              <tr key={stringNum}>
                <th className="p-2">{stringNum}弦</th>
                {scales[stringNum].map((pitch, index) => (
                  <td
                    key={SCIENTIFIC_PITCH_NOTATION[pitch]}
                    className={clsx(
                      "border text-gray-800 text-opacity-50",
                      index === 0 ? "border-r-4" : undefined,
                    )}
                  >
                    <button
                      onClick={() => handleClickPitch(stringNum, pitch)}
                      className={clsx(
                        "h-6 w-12 cursor-pointer",
                        getStyle(stringNum, pitch),
                      )}
                    >
                      {getDisplay(pitch)}
                    </button>
                  </td>
                ))}
              </tr>
            ),
          )}
        </tbody>
      </table>
    </main>
  );
}

export default App;
