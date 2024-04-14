import { INTERVAL } from "../const";

export function getIntervalName(rootPitch: number, targetPitch: number) {
  return INTERVAL[
    getIntervalPitch(rootPitch, targetPitch) as keyof typeof INTERVAL
  ];
}

export function getIntervalPitch(rootPitch: number, targetPitch: number) {
  return (((targetPitch - rootPitch) % 12) + 12) % 12;
}
