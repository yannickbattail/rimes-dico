import { describe, expect, it } from "vitest";
import "../../src/script.js";

type FindInDicoFn = (
  dict: Record<string, string>,
  search: { search: string; where: "start" | "end" | "contain"; near: boolean },
) => Array<[string, string]>;

describe("find", () => {
  it("findInDico", () => {
    const dict: Record<string, string> = {
      abaissa: "abɛsa",
      abaissai: "abɛsɛ",
      zygomatique: "zigɔmatik",
      zygote: "zigɔt",
    };
    const findInDico = (globalThis as unknown as { findInDico: FindInDicoFn }).findInDico;
    const openScad = findInDico(dict, { search: "truc", where: "start", near: false });
    expect(openScad).toMatchSnapshot();
  });
});
type WordIpa = {
  ipa: string;
  words: string[];
};

type ConcatPluralsFn = (wordsIpa: WordIpa) => WordIpa;

describe("concatPlurals", () => {
  it("merges a singular/plural pair into (s)", () => {
    const concatPlurals = (globalThis as unknown as { concatPlurals: ConcatPluralsFn }).concatPlurals;

    const input: WordIpa = {
      ipa: "kat",
      words: ["cat", "cats"],
    };

    const result = concatPlurals(input);

    expect(result).toEqual({
      ipa: "kat",
      words: ["cat(s)"],
    });
  });

  it("merges singular/plural and keeps unrelated words", () => {
    const concatPlurals = (globalThis as unknown as { concatPlurals: ConcatPluralsFn }).concatPlurals;

    const input: WordIpa = {
      ipa: "dɔg",
      words: ["dog", "dogs", "dogz"],
    };

    const result = concatPlurals(input);

    // Order is not important for this case
    expect(result.ipa).toBe("dɔg");
    expect(result.words).toHaveLength(2);
    expect(result.words).toEqual(expect.arrayContaining(["dog(s)", "dogz"]));
  });

  it("does not change words when no singular/plural pair exists", () => {
    const concatPlurals = (globalThis as unknown as { concatPlurals: ConcatPluralsFn }).concatPlurals;

    const input: WordIpa = {
      ipa: "mix",
      words: ["dog", "dogz", "cat"],
    };

    const result = concatPlurals(input);

    expect(result).toEqual(input);
  });
});
