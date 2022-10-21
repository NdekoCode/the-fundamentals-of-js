const p = Promise.resolve(4);
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
  }); 
wait(2000)
  .then(() => {
    console.log("Attente de 2s");
    return wait(1000);
  })
  .then(() => {
    console.log("Attente de 1s");
    return waitAndFail(3000);
  })
  .catch((err) => {
    console.log("Erreur dans l'attente de 3s");
  });
*/
/* 
async function main() {
  return 4;
} */
// Va retourner un Objet Promise consider comme resolus, donc c'est equivalent à Promise.resolve(4)
// console.log(main());
/* 
async function mainFail() {
  throw Error("Echec");
} */
// Va retourner un Objet Promise consider comme eject càa une Promise non resolus, donc c'est equivalent à Promise.reject(4)
// console.log(mainFail());
async function main() {
  try {
    const duration = await wait(2000);
    const durationFail = await waitAndFail(1000);
    console.log(duration);
  } catch (error) {
    console.log(error);
  }
}
// main();
/**
 * NB: chaque fonction qui est prefixer d'un async, s'il retourne quelque chose alors ce qu'il retourne sera obligatoirement une Promise
 */
/* Promise.all([wait(2000), waitAndFail(1000)])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Erreur ", err); // 1000
  });

Promise.allSettled([wait(2000), waitAndFail(1000)])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Erreur ", err); // 1000
  }); */
/**
 * Cette fonction va permettre d'attendre de manière synchrone
 */
function waitSync(duration) {
  const t = Date.now();
  // Tant que la date du jour moin quelque chose est inferieur à la date que j'ai specifier dans ce cas là je bloque mon scrip
  while (Date.now() - t < duration) {}
}
// On créer une Promise et on lui passe juste un resolve
const prom = new Promise((r) => {
  // Ce dode va etre executer toute suite, il n'y a que ce qui est en "then" qui va s'executer de manière asynchrone
  console.log("Hello");
  r(2);
});

// On dit attend de manière synchrone
waitSync(2000);
console.log("les gens");
// Ça va attendre 2 seconde avec d'afficher "les gens dans la console"
