// 1. remove falsy value from an array

let miscellaneous = [false, NaN, undefined, 0, null, "", "hello"];
let fruits = miscellaneous.filter(Boolean);
console.log(fruits);

console.log(Boolean(5 < 6));

// 2. converting to boolean

console.log(!!"mashrafi"); //true
console.log(!!0); // false
console.log(!!1); // true
console.log(!!undefined); // false

// 3. resizing any array
let animals = ["dog", "cat", "tiger", "deer"];
animals.length = 3;

console.log(animals);

// 4. how to flattern a multi-dimensional array

let smileys = ["hasi", ["kanna", "smile"], "angry", "sour"];
console.log(smileys.flat());

let smileys2 = ["hasi", ["kanna", "smile", ["laugh", "love"]], "angry", "sour"];
console.log(smileys2.flat(Infinity));

// 5. Short conditionals
let captain = "Mashrafi";

if (captain === "Mashrafi") {
  console.log("love");
}

captain === "Masrafi" && console.log("statement true");
captain === "Mashrafi" || console.log("masrafi mille print hobe na");

// 6. replace all occurances of a string

const quoto =
  "React is a Js framework & this framework is the most popular front-end framework right now";

console.log(quoto.replace(/framework/g, "library"));

// 7.  log values with variable names smartly

const library1 = "jQuery";
const library2 = "React";

// Instead of doing this
console.log(`library1 - ${library1}`);
console.log(`library1 - ${library2}`);

// We can do this

console.log({ library1 });
console.log({ library2 });

// 8. know performance of a task
const startTime = performance.now();
for (let i = 0; i <= 5000; i++) {
  console.log(i);
}

const endTime = performance.now();

console.log(`loop took ${endTime - startTime} milliseconds to finish`);
