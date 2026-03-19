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
        const findInDico = window.findInDico;
        const openScad = findInDico(dict, "truc", "start");
        expect(openScad).toMatchSnapshot();
    });
});
