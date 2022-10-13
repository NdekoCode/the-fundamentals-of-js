/**
* Streaming Videos:

    -  Lilo et steach(inferieur ou egal à 13ans)
    - Le film The Matrix(13 à 18ans)
    - Evil dead(18ans et plus)
*/
const year = 2022;
const birthYear = parseInt(prompt("Entrer votre année de naissance !"));
const age = year - birthYear;
if (age <= 13) {
  alert("Suivez lilo et steach");
} else if (age <= 18) {
  alert("Suivez le film The matrix");
} else {
  alert("Suivez Devil Dead");
}

// Deux nombre
