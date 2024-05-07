import { describe, it, expect } from "vitest";
import { getChordClass, getChordTypes, getChord } from ".";

describe("getChordClass", () => {
  it("正しくコードクラスのみ抽出されるか", () => {
    expect(getChordClass(0)).toBe("A");
    expect(getChordClass(1)).toBe("A#");
  });
});

describe("getChordTypes", () => {
  it("指定されたピッチに対して正しいコード種別を返すか", () => {
    const searched = getChordTypes([0, 4, 7]);
    expect(searched[0]["fullName"]).toEqual("major");
  });

  it("インターバルが一致しない場合は空の配列が返されるか", () => {
    const searched = getChordTypes([0]);
    expect(searched).toHaveLength(0);
  });
});

describe("getChord", () => {
  it("指定されたピッチから正しいコードを返すか", () => {
    expect(getChord([0, 4, 7, 11])).toBe("AM7");
  });

  it("コード種別が見つからない場合はundefinedが返されるか", () => {
    expect(getChord([0])).toBeUndefined();
  });
});
