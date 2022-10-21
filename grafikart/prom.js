const p = new Promise((resolve, reject) => {
  // Sera appeler quand notre promesse a été resolus
  resolve(4);
});
function wait(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}

function waitAndFail(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(duration);
    }, duration);
  });
}
/* p.then((res) => {
  console.log(res);
  throw new Error("Echec");
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Erreyr ", err);
  }); */
wait(2000).then(console.log);
