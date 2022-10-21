const prm = new Promise((resolve, reject) => {
  resolve(4);
});
// Quand on veut savoir si notre promise a été resolus ou pas on utilise le mot "then" quand il a été resolus et ,"catch" si il n'a pas été resolus meme principe que le Try Catch
prm
  .then((_) => {
    console.log("Res");
    // Une fonction return dans un "Then ou catch retourne aussitot une Promise"
    // Une exception dans une fonction then appelera aussitot catch
    return 5;
  })
  .catch(() => console.log("Eject"));
