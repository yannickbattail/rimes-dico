function getById(id: string) {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Element with id ${id} not found`);
  }
  return element;
}

type PhonemeDetails = {
  phoneme: string;
  example: string;
  category: string;
  near: string[];
};

const phonemes: PhonemeDetails[] = [
  {
    phoneme: "a",
    example: "p<b>a</b>tte",
    category: "Voyelles orales",
    near: ["a", "ɑ"],
  },
  {
    phoneme: "ɑ",
    example: "p<b>â</b>te gl<b>a</b>s",
    category: "Voyelles orales",
    near: ["a", "ɑ"],
  },
  {
    phoneme: "b",
    example: "<b>b</b>al <b>b</b>eau",
    category: "Consonnes",
    near: ["b"],
  },
  {
    phoneme: "d",
    example: "<b>d</b>oux",
    category: "Consonnes",
    near: ["d"],
  },
  {
    phoneme: "e",
    example: "cl<b>é</b> ch<b>ez</b> all<b>er</b>",
    category: "Voyelles orales",
    near: ["e", "ɛ"],
  },
  {
    phoneme: "f",
    example: "<b>f</b>ête <b>ph</b>armacie",
    category: "Consonnes",
    near: ["f"],
  },
  {
    phoneme: "g",
    example: "<b>g</b>ain <b>gu</b>erre",
    category: "Consonnes",
    near: ["g"],
  },
  {
    phoneme: "ɲ",
    example: "a<b>gn</b>eaux",
    category: "Consonnes",
    near: ["ɲ"],
  },
  {
    phoneme: "ŋ",
    example: "parki<b>ng</b> Leggi<b>ng</b>",
    category: "Consonnes",
    near: ["ŋ"],
  },
  {
    phoneme: "ʃ",
    example: "<b>ch</b>ou <b>sch</b>éma <b>sh</b>ampoing",
    category: "Consonnes",
    near: ["ʃ"],
  },
  {
    phoneme: "i",
    example: "s<b>i</b> <b>î</b>le <b>y</b>",
    category: "Voyelles orales",
    near: ["i"],
  },
  {
    phoneme: "j",
    example: "f<b>i</b>ef pa<b>y</b>er fi<b>ll</b>e trava<b>il</b>",
    category: "Semi-voyelles",
    near: ["j"],
  },
  {
    phoneme: "ʒ",
    example: "<b>j</b>e <b>j</b>au<b>g</b>e pi<b>ge</b>on",
    category: "Consonnes",
    near: ["ʒ"],
  },
  {
    phoneme: "k",
    example: "<b>c</b>abas ar<b>ch</b>aï<b>qu</b>e <b>k</b>elvin",
    category: "Consonnes",
    near: ["k"],
  },
  {
    phoneme: "l",
    example: "<b>l</b>oup",
    category: "Consonnes",
    near: ["l"],
  },
  {
    phoneme: "m",
    example: "<b>m</b>ou ho<b>mm</b>e",
    category: "Consonnes",
    near: ["m"],
  },
  {
    phoneme: "n",
    example: "<b>n</b>ous bo<b>nn</b>e",
    category: "Consonnes",
    near: ["n"],
  },
  {
    phoneme: "o",
    example: "s<b>o</b>t h<b>ô</b>tel h<b>au</b>t bur<b>eau</b>",
    category: "Voyelles orales",
    near: ["o", "ɔ"],
  },
  {
    phoneme: "p",
    example: "<b>p</b>assé",
    category: "Consonnes",
    near: ["p"],
  },
  {
    phoneme: "ʁ",
    example: "<b>r</b>oue <b>rh</b>ume",
    category: "Consonnes",
    near: ["ʁ"],
  },
  {
    phoneme: "s",
    example: "<b>s</b>a hau<b>ss</b>e <b>sc</b>ie <b>c</b>e; gar<b>ç</b>on op<b>t</b>ion di<b>x</b>",
    category: "Consonnes",
    near: ["s"],
  },
  {
    phoneme: "t",
    example: "<b>t</b>out <b>th</b>é",
    category: "Consonnes",
    near: ["t"],
  },
  {
    phoneme: "u",
    example: "c<b>ou</b>p",
    category: "Voyelles orales",
    near: ["u"],
  },
  {
    phoneme: "v",
    example: "<b>v</b>ous <b>w</b>agon",
    category: "Consonnes",
    near: ["v"],
  },
  {
    phoneme: "w",
    example: "<b>ou</b>i l<b>oi</b> m<b>o</b>yen <b>w</b>eb",
    category: "Semi-voyelles",
    near: ["w"],
  },
  {
    phoneme: "y",
    example: "t<b>u</b> s<b>û</b>r",
    category: "Voyelles orales",
    near: ["y"],
  },
  {
    phoneme: "z",
    example: "ba<b>s</b>e <b>z</b>éro",
    category: "Consonnes",
    near: ["z"],
  },
  {
    phoneme: "ø",
    example: "c<b>eu</b>x j<b>eû</b>ne",
    category: "Voyelles orales",
    near: ["ø", "œ", "ə"],
  },
  {
    phoneme: "œ",
    example: "s<b>œu</b>r j<b>eu</b>ne",
    category: "Voyelles orales",
    near: ["ø", "œ", "ə"],
  },
  {
    phoneme: "ɔ",
    example: "s<b>o</b>rt rh<b>u</b>m",
    category: "Voyelles orales",
    near: ["o", "ɔ"],
  },
  {
    phoneme: "ə",
    example: "r<b>e</b>p<b>e</b>ser dang<b>e</b>reux",
    category: "Voyelles orales",
    near: ["ø", "œ", "ə"],
  },
  {
    phoneme: "ɛ",
    example: "l<b>e</b>ttre ou<b>e</b>st f<b>ai</b>te",
    category: "Voyelles orales",
    near: ["e", "ɛ"],
  },
  {
    phoneme: "ɥ",
    example: "h<b>u</b>it",
    category: "Semi-voyelles",
    near: ["ɥ"],
  },
  {
    phoneme: "ɑ̃",
    example: "s<b>an</b>s v<b>en</b>t p<b>aon</b> Sept<b>em</b>bre",
    category: "Voyelles nasales",
    near: ["ɑ̃"],
  },
  {
    phoneme: "ɛ̃",
    example:
      "v<b>in</b> t<b>im</b>bre m<b>ain</b> d<b>aim</b> pl<b>ein</b> R<b>eim</b>s l<b>yn</b>x th<b>ym</b> chi<b>en</b>",
    category: "Voyelles nasales",
    near: ["ɛ̃", "œ̃"],
  },
  {
    phoneme: "œ̃",
    example: "br<b>un</b> parf<b>um</b>",
    category: "Voyelles nasales",
    near: ["ɛ̃", "œ̃"],
  },
  {
    phoneme: "ɔ̃",
    example: "s<b>on</b>",
    category: "Voyelles nasales",
    near: ["ɔ̃"],
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function initPhonemesList() {
  const phonemesList = getById("phonemesList") as HTMLDivElement;
  phonemesList.innerHTML = "";

  const categories = new Map<string, PhonemeDetails[]>();

  for (const details of Object.values(phonemes)) {
    const group = categories.get(details.category) ?? [];
    group.push(details);
    categories.set(details.category, group);
  }

  for (const [category, items] of categories) {
    const section = document.createElement("section");

    const title = document.createElement("h3");
    title.textContent = category;
    section.appendChild(title);

    const list = document.createElement("ul");
    for (const details of items) {
      const li = document.createElement("li");
      li.innerHTML = `<div class="phoneme" onclick="addPhoneme('${details.phoneme}');">${details.phoneme}</div> <span class="example">${details.example}</span>`;
      list.appendChild(li);
    }

    section.appendChild(list);
    phonemesList.appendChild(section);
  }
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
