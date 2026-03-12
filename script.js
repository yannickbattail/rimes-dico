function search() {
    loading(true);
    try {
        const search = document.getElementById("search");
        const result = document.getElementById("result");
        if (!search.value || !search.checkValidity()) {
            loading(true);
            result.innerHTML =
                "Recherche invalide: " + search.validationMessage;
            return;
        }
        let where = "start";
        if (document.getElementById("end").checked) {
            where = "end";
        } else if (document.getElementById("contain").checked) {
            where = "contain";
        }
        result.innerHTML = "";
        const words = find(dico, search.value, where);
        document.getElementById(
            "nbResult"
        ).textContent = `Nombre de mots: ${words.length}`;
        for (const value of words) {
            const tr = document.createElement("tr");

            const td1 = document.createElement("td");
            td1.textContent = value[0];
            tr.appendChild(td1);

            const td2 = document.createElement("td");
            td2.innerHTML = `<span class="slash">/</span>${value[1]}<span class="slash">/</span>`;
            tr.appendChild(td2);

            result.appendChild(tr);
            document.getElementById("help").className = "toggleHide";
        }
    } catch (e) {
        console.error(e);
    } finally {
        loading(false);
    }
}

function find(dict, search, atStart) {
    if (atStart === "start") {
        return Object.entries(dict).filter(([key, value]) => {
            return value.startsWith(search);
        });
    } else if (atStart === "end") {
        return Object.entries(dict).filter(([key, value]) => {
            return value.endsWith(search);
        });
    } else {
        return Object.entries(dict).filter(([key, value]) => {
            return value.includes(search);
        });
    }
}

function loading(isLoading) {
    document.getElementById("loading").style.display = isLoading
        ? "block"
        : "none";
}

function toggle() {
    event.srcElement;
    if (event.srcElement.className == "toggleShow") {
        event.srcElement.className = "toggleHide";
    } else {
        event.srcElement.className = "toggleShow";
    }
}

function addPhoneme(phoneme) {
    const el = document.getElementById("search");
    const [start, end] = [el.selectionStart, el.selectionEnd];
    el.setRangeText(phoneme, start, end, "end");
}