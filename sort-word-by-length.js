// input
const str = "Java is a Progamming language";

// output = "a is Java language Programming"

function sortWords(data) {
  const dataAsArray = str.split(" ");
  dataAsArray.sort((a, b) => {
    return a.length - b.length;
  });

  return dataAsArray.join(" ");
}

console.log(sortWords(str));
