// what will be the output of the below code?
console.log([] + []); // ''
console.log({} + []); // [object object]

// what will be the output of below code

function myFunction() {
  return "Bangladesh";
}

const string = myFunction`hello`; // tagged template literal

console.log(string);

// how to make all text contents of a website editable?
// contentEditable = true;

// what will be the output of below code?
function b() {
  console.log(`the length is ${this.length}`);
}
let a = {
  length: 10,
  method: function (b) {
    arguments[0]();
  },
};
a.method(b, 5);

// what will be the output of below code?

const s = "constructor";
console.log(s[s](01));

// what will be the output?
console.log(0.1 + 0.2); // 0.30000000000000004

// what will be the output of below code?
console.log("Bangladesh".__proto__.__proto__.__proto__);

// make a function that sorts its arguments without using loops

const myFunction2 = function () {
  return [].slice.call(arguments).sort();
};

console.log(myFunction2(2, 1, 4, 3));
