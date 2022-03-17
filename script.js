let input1 = document.querySelector(".shifrInput");
let input2 = document.querySelector(".deshifrInput");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let farq;
let myFunc = function (str) {
  let harflar = new Map([
    ["a", "а"],
    ["A", "A"],
    ["b", "б"],
    ["B", "Б"],
    ["c", "c"],
    ["C", "C"],
    ["d", "д"],
    ["D", "Д"],
    ["e", "e"],
    ["E", "E"],

    ["f", "ф"],
    ["F", "Ф"],
    ["g", "г"],
    ["h", "x"],
    ["i", "и"],
    ["j", "ж"],
    ["k", "к"],
    ["l", "л"],
    ["m", "м"],
    ["n", "н"],
    ["o", "o"],
    ["p", "п"],
    ["q", "к"],
    ["r", "p"],
    ["s", "c"],
    ["t", "т"],
    ["u", "у"],
    ["U", "У"],
    ["v", "в"],
    ["w", "в"],
    ["x", "x"],
    ["y", "й"],
    ["z", "з"],
    [" ", " "],
    [",", ","],
    ["sh", "ш"],
    ["ch", "ч"],
    ["ya", "я"],
    ["yo", "ё"],
    ["yu", "ю"],
    ["'", "'"],
    ["?", "?"],
    [">", ">"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["6", "6"],
    ["7", "7"],
    ["8", "8"],
    ["9", "9"],
    ["0", "0"],
    ["-", "-"],
    ["*", "*"],
    ["/", "/"],
    ["=", "="],
    ["+", "+"],
    [".", "."],
  ]);

  let bush = [];
  let arrs = str.split("");
  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i] == "s" && arrs[i + 1] == "h") {
      arrs[i] = "sh";
      arrs[i + 1] = "";
    }
    if (arrs[i] == "c" && arrs[i + 1] == "h") {
      arrs[i] = "ch";
      arrs[i + 1] = "";
    }
    if (arrs[i] == "y" && arrs[i + 1] == "a") {
      arrs[i] = "ya";
      arrs[i + 1] = "";
    }
    if (arrs[i] == "y" && arrs[i + 1] == "o") {
      arrs[i] = "yo";
      arrs[i + 1] = "";
    }
    if (arrs[i] == "y" && arrs[i + 1] == "u") {
      arrs[i] = "yu";
      arrs[i + 1] = "";
    }
    bush.push(harflar.get(arrs[i]));
  }
  farq = bush.join("");
  // console.log(farq);
};
input1.addEventListener("input", () => {
  myFunc(input1.value);
  result1.textContent = farq;
});
btn1.addEventListener("click", () => {
  result1.textContent = "";
  input1.value = "";
});
