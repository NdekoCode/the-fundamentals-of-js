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
/* fetchUser()
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */
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

addPost()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
