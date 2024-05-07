import { INTERVAL, SPN } from "../const";

/**
 * インターバル名を返す関す
 *
 * **Usage**
 *
 * ```ts
 * getIntervalName(0, 3)   // 'm3(♯9)'
 * getIntervalName(12, 24) // 'R'
 * ```
 *
 * @param rootPitch 基音(ルート)の音程
 * @param targetPitch ルートからのインターバルを計る対象の音程
 * @returns インターバル名
 */
export function getIntervalName(
  rootPitch: keyof typeof SPN,
  targetPitch: keyof typeof SPN,
) {
  return INTERVAL[getIntervalPitch(rootPitch, targetPitch)];
}

/**
 * 音程の差分(0-11)を返す関す
 *
 * **Usage**
 *
 * ```ts
 * getIntervalName(0, 3)   // 3
 * getIntervalName(12, 24) // 0
 * ```
 *
 * @param rootPitch 基音(ルート)の音程
 * @param targetPitch ルートからのインターバルを計る対象の音程
 * @returns 音程の差分
 */
export function getIntervalPitch(
  rootPitch: keyof typeof SPN,
  targetPitch: keyof typeof SPN,
) {
  return ((((targetPitch - rootPitch) % 12) + 12) %
    12) as keyof typeof INTERVAL;
}
