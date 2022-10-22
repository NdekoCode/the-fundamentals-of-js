/**
 *
 * @returns {Promise<{id:number, name:string,username: string,email:String, adress:{street:string,suite:string,city:string,zipcode:string, geo:{lat:string,lng:string}}}[]>}
 */
async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    "Content-Type": "application/json",
  });
  if (res.ok) {
    return res.json();
  }
  throw Error("Impossible de récuperer les données du serveur");
}
/**
 *
 * @returns {Promise<{id:number,userId:number, title:string, body: string}[]>}
 */
async function fetchPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    "Content-Type": "application/json",
  });
  if (res.ok) {
    return res.json();
  } else {
    throw Error("Impossible de récuperer les données du serveur");
  }
}
/* fetchUser()
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */
/**
 *
 * @returns {Promise<Object>}
 */
async function addPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      // A quoi va ressembler le donner que on va recevoir,(le format que vous voulez recevoir)
      Accept: "application/json",
      // A quoi va ressembler les données que nous on va envoyer(Le format que vous voulez envoyer)
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Mon premier article",
    }),
  });
  if (res.ok) {
    return res.json();
  }
}

/* addPost()
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */
// C'est un controller qui va permettre d'envoyer un signal pour envoyer des requetes HTTP
// On va connecter nos deux requetes à ces signal là et quand on le souhaitera on pourra envoyer un signal d'annulation
const abort = new AbortController();
async function stopFetch() {
  return Promise.race([
    fetch("https://jsonplaceholder.typicode.com/posts/?_limit=5&_delay=5000", {
      signal: abort.signal,
    }),
    fetch("https://jsonplaceholder.typicode.com/users/?_limit=3", {
      signal: abort.signal,
    }),
  ]);
}
stopFetch()
  .then((res) => res.json())
  .then((data) => {
    abort.abort(); // Annule tous les requetes qui sont en attentes et recupère que ce qui est déjà là
    console.log(data);
  })
  .catch((err) => console.log(err));
