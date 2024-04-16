import {
  DISPLAY_MODE,
  GUITAR_STRINGS,
  SCIENTIFIC_PITCH_NOTATION,
  TUNINGS,
} from "@/lib/music-theory/const";
import { getChord } from "@/lib/music-theory/get-chord";
import { getIntervalName } from "@/lib/music-theory/get-interval";
import { getRootPitchBySelected } from "@/lib/music-theory/get-root-pitch";
import { getScales } from "@/lib/music-theory/get-scales";
import isSamePitchClass from "@/lib/music-theory/is-same-pitch-class";
import { SelectedPitchState } from "@/lib/music-theory/types";
import clsx from "clsx";
import { useCallback, useState } from "react";

type FretboardProps = {
  /** 表示モード (音程、ルートからのディグリー) */
  displayMode: keyof typeof DISPLAY_MODE;
  /** チューニング */
  tuning: keyof typeof TUNINGS;
};

/* ------------------------------------------------------------------------
   Fretboard Hook
 ------------------------------------------------------------------------ */

function useFretboard({ displayMode, tuning }: FretboardProps) {
  // 各1~6弦で選択した音程
  const [selectedPitches, setSelectedPitches] = useState<SelectedPitchState>({
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
  });

  // 各1~6弦の SCIENTIFIC_PITCH_NOTATION
  const scales = getScales({ tuning });

  // ルート音 (選択された音程から算出)
  const rootPitch = getRootPitchBySelected(selectedPitches);

  // 検索されたコード
  const searchedChord = rootPitch
    ? getChord(
        rootPitch as keyof typeof SCIENTIFIC_PITCH_NOTATION,
        Object.values(selectedPitches).filter((pitch) => pitch) as number[],
      )
    : undefined;

  const handleFretClick = useCallback(
    (stringNum: keyof typeof GUITAR_STRINGS, pitch: number) => {
      if (selectedPitches[stringNum] === pitch) {
        setSelectedPitches({ ...selectedPitches, [stringNum]: undefined });
      } else {
        setSelectedPitches({ ...selectedPitches, [stringNum]: pitch });
      }
    },
    [selectedPitches],
  );

  const getFretText = (pitch: keyof typeof SCIENTIFIC_PITCH_NOTATION) => {
    if (displayMode === "PITCH") return SCIENTIFIC_PITCH_NOTATION[pitch];
    if (!rootPitch) return SCIENTIFIC_PITCH_NOTATION[pitch];
    return getIntervalName(rootPitch, pitch);
  };

  const getFretStyle = (
    stringNum: keyof typeof GUITAR_STRINGS,
    pitch: number,
  ) => {
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

  return { scales, searchedChord, handleFretClick, getFretText, getFretStyle };
}

/* ------------------------------------------------------------------------
   Fretboard Component
 ------------------------------------------------------------------------ */

export default function Fretboard({ displayMode, tuning }: FretboardProps) {
  const { scales, handleFretClick, getFretText, getFretStyle } = useFretboard({
    displayMode,
    tuning,
  });

  return (
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
                    onClick={() => handleFretClick(stringNum, pitch)}
                    className={clsx(
                      "h-6 w-12 cursor-pointer",
                      getFretStyle(stringNum, pitch),
                    )}
                  >
                    {getFretText(pitch)}
                  </button>
                </td>
              ))}
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}
