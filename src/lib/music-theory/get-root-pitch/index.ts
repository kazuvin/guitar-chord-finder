import { SPN } from "../const";
import { FretState } from "../types";

/**
 * フレットの選択状態からルート音を返す関数
 *
 * @param fretState フレットの選択状態
 * @returns ルート音
 */
export function getRootPitchBySelected(
  fretState: FretState,
): keyof typeof SPN | undefined {
  if (Object.values(fretState).every((pitch) => !pitch)) return undefined;
  return getRootPitch(
    Object.values(fretState).filter((pitch) => !!pitch) as (keyof typeof SPN)[],
  );
}

/**
 * ルート音を返す関数
 *
 * @param pitches 指定された音程の配列
 * @returns ルート音
 */
export default function getRootPitch(
  pitches: (keyof typeof SPN)[],
): keyof typeof SPN {
  return Math.min(...pitches) as keyof typeof SPN;
}
