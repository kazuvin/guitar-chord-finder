import { SPN } from "../const";

/**
 * 同じ音名かどうかを判定する関数
 *
 * **Details**
 *
 * B0 と B3 のようにオクターブが異なる場合でも音名が同じであれば true を返す。
 *
 * @param a SPN マッピングテーブルの数値(インデックス)
 * @param b SPN マッピングテーブルの数値(インデックス)
 * @returns 同じ音名かどうか
 */
export default function isSamePitchClass(
  a: keyof typeof SPN,
  b: keyof typeof SPN,
) {
  return a % 12 === b % 12;
}
