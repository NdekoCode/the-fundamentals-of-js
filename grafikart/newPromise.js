const pms = new Promise((resolve, reject) => {
  resolve(4);
});
pms
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
