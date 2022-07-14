async function num1() {
  return 42;
}

async function num2() {
  return Promise.resolve(3);
}

async function compute() {
  const n1 = await num1();

  const n2 = await num2();

  return n1 + n2;
}

compute()
  .then(function (res) {
    console.log(res);
  })

  .catch(function () {
    console.log("Erreur");
  });
Promise.all(["promise1", "promise2"]).then(function (values) {
  console.log(values.join(" "));
});
async function func1() {
  return 3;
}

async function func2() {
  return 4;
}

var promiseRes = Promise.all([func1(), func2()])
  .then(function (results) {
    return results.reduce(function (acc, res) {
      return acc * res;
    }, 2);
  })
  .then(function (time) {
    return setTimeout(() => {
      console.log(promiseRes);
    }, time * 1000);
  });
console.log(promiseRes);
