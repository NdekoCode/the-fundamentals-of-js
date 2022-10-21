async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (res.ok) {
    return res.json();
  }
  throw Error("Impossible de récuperer les données du serveur");
}
fetchUser()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
