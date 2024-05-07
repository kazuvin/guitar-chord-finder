import arraysMatch from "../../utils/arrays-match";
import { SPN } from "../const";
import { getIntervalPitch } from "../get-interval";
import getRootPitch from "../get-root-pitch";
import { Chord, chords } from "./chord-data";

/**
 * コードクラスを取得する関数
 *
 * **Details**
 *
 * SPN のキーを受け取り、そのピッチのオクターブを取り除いたコードクラスのみを抽出する関数。
 * 例: A#3 => A#, B2 => B,
 *
 * @param rootPitch 科学的ピッチ表記法オブジェクトの key (数値)
 * @returns コードクラス (ex. `A#`, `B` e.g.)
 */
export function getChordClass(rootPitch: keyof typeof SPN): string {
  return SPN[rootPitch].replace(/[^A-Z|#]/g, "");
}

/**
 * コード種別を取得する関数
 *
 * **Details**
 *
 * 音程の配列よりルートからのインターバルを求め、コード種別マスタからコード種別を取得する関数。
 *
 * @param pitches 指定された音程の配列
 * @returns 検索されたコード種別群
 */
export function getChordTypes(pitches: (keyof typeof SPN)[]): Chord[] {
  const rootPitch = getRootPitch(pitches);
  const intervals = Array.from(
    new Set(pitches.map((pitch) => getIntervalPitch(rootPitch, pitch))),
  );
  const findedChords = chords.filter((chord) => {
    return chord.intervals.some((i) => arraysMatch(i.sort(), intervals.sort()));
  });
  return findedChords.sort((a, b) => b.intervals.length - a.intervals.length);
}

/**
 * コードを取得する関数
 *
 * **Usage**
 *
 * ```jsx
 * getChord([26, 36, 42, 45]) // 'B7'
 * ```
 *
 * **Details**
 *
 * ルート音と音程の配列からコードを取得する関数。
 *
 * @param pitches 指定された音程の配列
 * @returns 検索されたコード
 */
export function getChord(pitches: (keyof typeof SPN)[]): string | undefined {
  const chordTypes = getChordTypes(pitches);

  if (!chordTypes.length) return undefined;

  const rootPitch = getRootPitch(pitches);
  return chordTypes
    .map((chordType) => getChordClass(rootPitch) + chordType.abbreviations[0])
    .join(", ");
}
