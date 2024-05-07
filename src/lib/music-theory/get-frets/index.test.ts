import { describe, it, expect } from "vitest";
import { getFrets } from ".";
import { FRETS_LENGTH } from "../const";

describe("getFrets", () => {
  it("デフォルトのチューニング(REGULAR)で正しくフレットが計算されること", () => {
    const result = getFrets();
    expect(result[1][0]).toEqual(43);
    expect(result[2][0]).toEqual(38);
    expect(result[3][0]).toEqual(34);
    expect(result[4][0]).toEqual(29);
    expect(result[5][0]).toEqual(24);
    expect(result[6][0]).toEqual(19);
    expect(result[1]).toHaveLength(FRETS_LENGTH);
    expect(result[2]).toHaveLength(FRETS_LENGTH);
    expect(result[3]).toHaveLength(FRETS_LENGTH);
    expect(result[4]).toHaveLength(FRETS_LENGTH);
    expect(result[5]).toHaveLength(FRETS_LENGTH);
    expect(result[6]).toHaveLength(FRETS_LENGTH);
  });

  it("半音下げチューニングで正しくフレットが計算されること", () => {
    const result = getFrets({ tuning: "HARF_STEP_DOWN" });
    expect(result[1][0]).toEqual(42);
    expect(result[2][0]).toEqual(37);
    expect(result[3][0]).toEqual(33);
    expect(result[4][0]).toEqual(28);
    expect(result[5][0]).toEqual(23);
    expect(result[6][0]).toEqual(18);
    expect(result[1]).toHaveLength(FRETS_LENGTH);
    expect(result[2]).toHaveLength(FRETS_LENGTH);
    expect(result[3]).toHaveLength(FRETS_LENGTH);
    expect(result[4]).toHaveLength(FRETS_LENGTH);
    expect(result[5]).toHaveLength(FRETS_LENGTH);
    expect(result[6]).toHaveLength(FRETS_LENGTH);
  });

  it("DADGAD チューニングで正しくフレットが計算されること", () => {
    const result = getFrets({ tuning: "DADGAD" });
    expect(result[1][0]).toEqual(41);
    expect(result[2][0]).toEqual(36);
    expect(result[3][0]).toEqual(34);
    expect(result[4][0]).toEqual(29);
    expect(result[5][0]).toEqual(24);
    expect(result[6][0]).toEqual(17);
    expect(result[1]).toHaveLength(FRETS_LENGTH);
    expect(result[2]).toHaveLength(FRETS_LENGTH);
    expect(result[3]).toHaveLength(FRETS_LENGTH);
    expect(result[4]).toHaveLength(FRETS_LENGTH);
    expect(result[5]).toHaveLength(FRETS_LENGTH);
    expect(result[6]).toHaveLength(FRETS_LENGTH);
  });
});
