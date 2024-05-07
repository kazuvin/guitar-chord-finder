import { GUITAR_STRINGS, SPN } from "../const";

export type FretState = Record<
  keyof typeof GUITAR_STRINGS,
  keyof typeof SPN | undefined
>;
