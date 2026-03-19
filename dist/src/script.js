"use strict";
function getById(id) {
    const element = document.getElementById(id);
    if (!element) {
        throw new Error(`Element with id ${id} not found`);
    }
    return element;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function search(dico) {
    showLoading(true);
    try {
        const find = getInput();
        const words = findInDico(dico, find);
        displayResult(words);
        getById("help").className = "toggleHide";
    }
    catch (e) {
        console.error(e);
    }
    finally {
        hideLoading(false);
    }
}
function getInput() {
    const search = getById("search");
    const result = getById("result");
    if (!search.value || !search.checkValidity()) {
        showLoading(true);
        result.innerText = "Recherche invalide: " + search.validationMessage;
    }
    let where = "start";
    if (getById("end").checked) {
        where = "end";
    }
    else if (getById("contain").checked) {
        where = "contain";
    }
    result.innerHTML = "";
    return { search: search.value, where };
}
function displayResult(words) {
    const result = getById("result");
    getById("nbResult").textContent = `Nombre de mots: ${words.length}`;
    for (const value of words) {
        const td1 = document.createElement("td");
        td1.textContent = value[0];
        const td2 = document.createElement("td");
        td2.innerHTML = `<span class="slash">/</span>${value[1]}<span class="slash">/</span>`;
        const tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        result.appendChild(tr);
    }
}
function findInDico(dict, search) {
    switch (search.where) {
        case "start":
            return Object.entries(dict).filter(([, value]) => {
                return value.startsWith(search.search);
            });
        case "end":
            return Object.entries(dict).filter(([, value]) => {
                return value.endsWith(search.search);
            });
        default: // contain
            return Object.entries(dict).filter(([, value]) => {
                return value.includes(search.search);
            });
    }
}
function showLoading(isLoading) {
    getById("loading").style.display = isLoading ? "block" : "none";
}
function hideLoading(isLoading) {
    getById("loading").style.display = isLoading ? "block" : "none";
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function toggle(element) {
    if (element.className == "toggleShow") {
        element.className = "toggleHide";
    }
    else {
        element.className = "toggleShow";
    }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function addPhoneme(phoneme) {
    const el = getById("search");
    el.setRangeText(phoneme, el.selectionStart ?? 0, el.selectionEnd ?? 0, "end");
}
