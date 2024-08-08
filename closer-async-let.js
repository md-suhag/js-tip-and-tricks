function delay(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i);
    }, i * 1000);
  });
}

async function timer(n) {
  console.log("Start Timer");

  for (let i = 0; i <= n; i++) {
    const result = await delay(i);
    console.log(result);
  }

  console.log("End Timer");
}

timer(3);
