import { SCALE_LENGTH, SCIENTIFIC_PITCH_NOTATION, TUNINGS } from "../const";

type GetTuningOptions = {
  tuning: keyof typeof TUNINGS;
};

export function getScales(options?: GetTuningOptions) {
  const tuning = options?.tuning ?? "REGULAR";

  // TODO: 型周り直す
  const createScale = (
    startPitch: number,
  ): (keyof typeof SCIENTIFIC_PITCH_NOTATION)[] =>
    Array.from(
      { length: SCALE_LENGTH },
      (_, index) => startPitch + index,
    ) as (keyof typeof SCIENTIFIC_PITCH_NOTATION)[];

  return {
    1: createScale(TUNINGS[tuning][1]),
    2: createScale(TUNINGS[tuning][2]),
    3: createScale(TUNINGS[tuning][3]),
    4: createScale(TUNINGS[tuning][4]),
    5: createScale(TUNINGS[tuning][5]),
    6: createScale(TUNINGS[tuning][6]),
  };
}
