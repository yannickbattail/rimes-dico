function getById(id: string) {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Element with id ${id} not found`);
  }
  return element;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function search(dico: Record<string, string>) {
  showLoading(true);
  try {
    const find = getInput();
    const words = findInDico(dico, find);
    displayResult(words);
    getById("help").className = "toggleHide";
  } catch (e) {
    console.error(e);
  } finally {
    hideLoading(false);
  }
}

function getInput(): { search: string; where: "start" | "end" | "contain" } {
  const search = getById("search") as HTMLInputElement;
  const result = getById("result") as HTMLInputElement;
  if (!search.value || !search.checkValidity()) {
    showLoading(true);
    result.innerText = "Recherche invalide: " + search.validationMessage;
  }
  let where: "start" | "end" | "contain" = "start";
  if ((getById("end") as HTMLInputElement).checked) {
    where = "end";
  } else if ((getById("contain") as HTMLInputElement).checked) {
    where = "contain";
  }
  result.innerHTML = "";
  return { search: search.value, where };
}

function displayResult(words: [string, string][]) {
  const result = getById("result") as HTMLInputElement;
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

function findInDico(dict: Record<string, string>, search: { search: string; where: "start" | "end" | "contain" }) {
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

function showLoading(isLoading: boolean) {
  getById("loading").style.display = isLoading ? "block" : "none";
}

function hideLoading(isLoading: boolean) {
  getById("loading").style.display = isLoading ? "block" : "none";
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function toggle(element: HTMLElement) {
  if (element.className == "toggleShow") {
    element.className = "toggleHide";
  } else {
    element.className = "toggleShow";
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function addPhoneme(phoneme: string) {
  const el = getById("search") as HTMLInputElement;
  el.setRangeText(phoneme, el.selectionStart ?? 0, el.selectionEnd ?? 0, "end");
}
