declare function getById(id: string): HTMLElement;
type PhonemeDetails = {
    phoneme: string;
    example: string;
    category: string;
    near: string[];
};
declare const phonemes: PhonemeDetails[];
declare function initPhonemesList(): void;
declare function search(dico: Record<string, string>): void;
declare function getInput(): {
    search: string;
    where: "start" | "end" | "contain";
};
declare function displayResult(words: [string, string][]): void;
declare function findInDico(dict: Record<string, string>, search: {
    search: string;
    where: "start" | "end" | "contain";
}): [string, string][];
declare function showLoading(isLoading: boolean): void;
declare function hideLoading(isLoading: boolean): void;
declare function toggle(element: HTMLElement): void;
declare function addPhoneme(phoneme: string): void;
