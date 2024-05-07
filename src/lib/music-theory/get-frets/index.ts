import { FRETS_LENGTH, SPN, TUNINGS } from "../const";

type GetTuningOptions = {
  tuning: keyof typeof TUNINGS;
};

/**
 * フレット取得関数
 *
 * **Details**
 *
 * チューニングタイプを受け取り、フレットの SPN マッピングテーブルの数値(インデックス)の配列を各弦の value としたオブジェクトを返す関数。
 *
 * ex.
 *
 * ```
 * {
 *   1: [43, 44, 45, 46, 47, 48, ... , 64],
 *   2: [38, 39, 40, 41, 42, 43, ... , 59],
 *   3: [34, 35, 36, 37, 38, 39, ... , 55],
 *   4: [29, 30, 31, 32, 33, 34, ... , 50],
 *   5: [24, 25, 26, 27, 28, 29, ... , 45],
 *   6: [19, 20, 21, 22, 23, 24, ... , 40],
 * }
 * ```
 *
 * @param options チューニングタイプを受け取る。
 * @returns チューニングタイプに応じた各弦の SPN キーを格納したオブジェクト
 */
export function getFrets(options?: GetTuningOptions) {
  const tuning = options?.tuning ?? "REGULAR";

  const createScale = (startPitch: keyof typeof SPN): (keyof typeof SPN)[] =>
    Array.from(
      { length: FRETS_LENGTH },
      (_, index) => startPitch + index,
    ) as (keyof typeof SPN)[];

  return {
    1: createScale(TUNINGS[tuning]["openstring"][1]),
    2: createScale(TUNINGS[tuning]["openstring"][2]),
    3: createScale(TUNINGS[tuning]["openstring"][3]),
    4: createScale(TUNINGS[tuning]["openstring"][4]),
    5: createScale(TUNINGS[tuning]["openstring"][5]),
    6: createScale(TUNINGS[tuning]["openstring"][6]),
  };
}
