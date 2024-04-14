import { GUITAR_STRINGS } from "../const";

export type SelectedPitchState = Record<
  keyof typeof GUITAR_STRINGS,
  number | undefined
>;
