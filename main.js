function copyToClipBoard(str) {
  const element = document.createElement("textarea");
  element.value = str;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
  alert("copied successfully!");
}

function handleClick() {
  let text = document.querySelector("#text");
  copyToClipBoard(text.innerText);
}

//3.  destructuring aliases
const language = {
  name: "javascript",
  founded: 1995,
  founder: "Brendan Eich",
};

const { name: languageName, founder: createrName } = language;
console.log({ languageName }, { createrName });

//4. get value as data type

// const numField = document.querySelector("#numberfield").valueAsNumber;
// console.log(typeof numField);

// 5. remove duplicate from array

const array = [1, 2, 2, 2, 3, 5, 3, 6, 5];
console.log([...new Set(array)]);

//6. compare two arrays by value

const hasSameElements = (a, b) => {
  return a.length === b.length && a.every((v, i) => v === b[i]);
};

console.log(hasSameElements([1, 2], [1, 2]));
// 7. suffule array

let suffleArray = [1, 2, 3, 4, 5, 6];
console.log(suffleArray.sort(() => Math.random() - 0.5));

//8. comma operator

// return last operand
let a = (5, 6);
console.log(a);
