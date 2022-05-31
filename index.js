const myName = "Arick";
let age = 5;

if (age < 18) {
    console.log("Mineur")
} else if (age > 18 && age < 25) {
    console.log("Majeur");
} else if (age < 50 && age > 25) {
    console.log("Adulte");
} else {
    console.log("Trop vieu");
}