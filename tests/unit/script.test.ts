import { describe, expect, it } from "vitest";

import "../../src/script.js";

type FindInDicoFn = (
  dict: Record<string, string>,
  search: string,
  atStart: "start" | "end" | "contain",
) => Array<[string, string]>;

describe("find", () => {
  it("findInDico", () => {
    const dict: Record<string, string> = {
      abaissa: "abɛsa",
      abaissai: "abɛsɛ",
      zygomatique: "zigɔmatik",
      zygote: "zigɔt",
    };
    const findInDico = (window as unknown as { findInDico: FindInDicoFn }).findInDico;
    const openScad = findInDico(dict, "truc", "start");
    expect(openScad).toMatchSnapshot();
  });
});
