import { SCIENTIFIC_PITCH_NOTATION } from "../const";
import { getIntervalPitch } from "../get-interval";
import getRootPitch from "../get-root-pitch";
import { chords } from "./chord-data";

export function getChordClass(
  rootPitch: keyof typeof SCIENTIFIC_PITCH_NOTATION,
) {
  return SCIENTIFIC_PITCH_NOTATION[rootPitch].replace(/[^A-Z]/g, "");
}

export function getChordTypes(pitches: number[]) {
  const rootPitch = getRootPitch(pitches);
  const intervals = Array.from(
    new Set(pitches.map((pitch) => getIntervalPitch(rootPitch, pitch))),
  );
  const findedChords = chords.filter((chord) => {
    return chord.intervals.every((note) => intervals.includes(note));
  });

  return findedChords.sort((a, b) => b.intervals.length - a.intervals.length);
}

export function getChord(
  rootPitch: keyof typeof SCIENTIFIC_PITCH_NOTATION,
  pitches: number[],
) {
  const chordTypes = getChordTypes(pitches);

  if (!chordTypes.length) return undefined;
  return chordTypes
    .map((chordType) => getChordClass(rootPitch) + chordType.abbreviations[0])
    .join(", ");
}
