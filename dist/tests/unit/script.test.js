import { describe, expect, it } from "vitest";
import "../../src/script.js";
describe("find", () => {
    it("findInDico", () => {
        const dict = {
            abaissa: "abɛsa",
            abaissai: "abɛsɛ",
            zygomatique: "zigɔmatik",
            zygote: "zigɔt",
        };
        const findInDico = globalThis.findInDico;
        const openScad = findInDico(dict, { search: "truc", where: "start", near: false });
        expect(openScad).toMatchSnapshot();
    });
});
describe("concatPlurals", () => {
    it("merges a singular/plural pair into (s)", () => {
        const concatPlurals = globalThis.concatPlurals;
        const input = {
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
        const concatPlurals = globalThis.concatPlurals;
        const input = {
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
        const concatPlurals = globalThis.concatPlurals;
        const input = {
            ipa: "mix",
            words: ["dog", "dogz", "cat"],
        };
        const result = concatPlurals(input);
        expect(result).toEqual(input);
    });
});
