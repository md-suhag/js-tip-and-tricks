//input
const fruits = ["mango", "goava", "graps", "mango"];

// output {mango : 2, goava : 1, graps : 1}

function countDuplicates(data) {
  const output = {};

  // logic here
  data.map((d) => {
    output[d] = (output[d] || 0) + 1;
  });

  return output;
}

console.log(countDuplicates(fruits));
