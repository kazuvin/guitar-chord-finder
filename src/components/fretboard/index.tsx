import {
  DISPLAY_MODE,
  GUITAR_STRINGS,
  SPN,
  TUNINGS,
} from "@/lib/music-theory/const";
import { getFrets } from "@/lib/music-theory/get-frets";
import { getIntervalName } from "@/lib/music-theory/get-interval";
import { getRootPitchBySelected } from "@/lib/music-theory/get-root-pitch";
import isSamePitchClass from "@/lib/music-theory/is-same-pitch-class";
import { FretState } from "@/lib/music-theory/types";
import clsx from "clsx";
import { useCallback, useState } from "react";

type FretboardProps = {
  /** 選択状態 */
  forceSelectedPitches?: FretState;
  /** 表示モード (音程、ルートからのディグリー) */
  displayMode: keyof typeof DISPLAY_MODE;
  /** チューニング */
  tuning: keyof typeof TUNINGS;
  /** 選択した音程が変わった際に発火するイベントハンドラ */
  onSelectedChange?: (pitchState: FretState) => void;
};

/* ------------------------------------------------------------------------
   Fretboard Hook
 ------------------------------------------------------------------------ */

function useFretboard({
  forceSelectedPitches,
  displayMode,
  tuning,
  onSelectedChange,
}: FretboardProps) {
  // 各1~6弦で選択した音程
  const [fretState, setFretState] = useState<FretState>({
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
  });

  const sPitches = forceSelectedPitches ?? fretState;

  // 各1~6弦のフレット
  const frets = getFrets({ tuning });

  // ルート音 (選択された音程から算出)
  const rootPitch = getRootPitchBySelected(sPitches);

  const handleFretClick = useCallback(
    (stringNum: keyof typeof GUITAR_STRINGS, pitch: number) => {
      if (sPitches[stringNum] === pitch) {
        const newSelectedPitches = {
          ...sPitches,
          [stringNum]: undefined,
        };
        setFretState(newSelectedPitches);
        if (onSelectedChange) onSelectedChange(newSelectedPitches);
      } else {
        const newSelectedPitches = { ...sPitches, [stringNum]: pitch };
        setFretState(newSelectedPitches);
        if (onSelectedChange) onSelectedChange(newSelectedPitches);
      }
    },
    [onSelectedChange, sPitches],
  );

  const getFretText = (pitch: keyof typeof SPN) => {
    if (displayMode === "PITCH") return SPN[pitch];
    if (!rootPitch) return SPN[pitch];
    return getIntervalName(rootPitch, pitch);
  };

  const getFretStyle = (
    stringNum: keyof typeof GUITAR_STRINGS,
    pitch: keyof typeof SPN,
  ) => {
    if (sPitches[stringNum] === pitch) return "font-bold text-red-600";
    if (
      Object.values(sPitches).some((selected) => {
        if (!selected) return false;
        return isSamePitchClass(selected, pitch);
      })
    )
      return "text-red-300";
    return;
  };

  return { frets, handleFretClick, getFretText, getFretStyle };
}

/* ------------------------------------------------------------------------
   Fretboard Component
 ------------------------------------------------------------------------ */

export default function Fretboard(props: FretboardProps) {
  const { frets, handleFretClick, getFretText, getFretStyle } =
    useFretboard(props);

  const POSITION_MARK = [
    0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 2, 0, 0, 1, 0, 1, 0, 1, 0, 1,
  ];

  return (
    <table className="w-full table-fixed pb-2 text-center text-sm text-white">
      <tbody>
        {([1, 2, 3, 4, 5, 6] as const).map((stringNum) => (
          <tr key={stringNum}>
            <th className="h-12 w-16 p-2">{stringNum}弦</th>
            {frets[stringNum].map((pitch, index) => (
              <td
                key={SPN[pitch]}
                className={clsx(
                  "h-12 w-16 border text-white text-opacity-80",
                  index === 0 ? "border-r-8" : undefined,
                )}
              >
                <button
                  onClick={() => handleFretClick(stringNum, pitch)}
                  className={clsx(
                    "h-full w-full cursor-pointer",
                    getFretStyle(stringNum, pitch),
                  )}
                >
                  {getFretText(pitch)}
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          {POSITION_MARK.map((mark, index) => (
            <td key={index}>
              {Array(mark)
                .fill(null)
                .map((_, index) => (
                  <span
                    key={index}
                    className="text-xs text-white text-opacity-70"
                  >
                    ●
                  </span>
                ))}
            </td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}
