import { SelectedPitchState } from "../types";

export function getRootPitchBySelected(selectedPitches: SelectedPitchState) {
  if (Object.values(selectedPitches).every((pitch) => !pitch)) return undefined;
  return getRootPitch(
    Object.values(selectedPitches).filter(
      (pitch) => typeof pitch === "number" && !Number.isNaN(pitch),
    ) as number[],
  );
}

export default function getRootPitch(pitches: number[]) {
  return Math.min(...pitches);
}
