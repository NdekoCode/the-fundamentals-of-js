// is Palendromme
function isPalendrome(value) {
  return (
    value.split("").reverse().join("").toUpperCase() === value.toUpperCase()
  );
}
const words = {
  kayak: true,
  SOS: true,
  non: true,
  oui: false,
  Bonjour: false,
};
console.log(isPalendrome("Cool"));
