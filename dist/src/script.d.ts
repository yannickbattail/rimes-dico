declare function getById(id: string): HTMLElement;
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
