// is Palendromme
function isPalendrome(value) {
  const str = value.split("").reverse().join("");
  return str.toUpperCase() === value.toUpperCase();
}
const words = {
  kayak: true,
  SOS: true,
  non: true,
  oui: false,
  Bonjour: false,
};
/* 
for (let index in words) {
  console.log(isPalendrome(index));
} */
const students = [
  {
    name: "John",
    notes: [1, 20, 18, 19, 12],
  },
  {
    name: "Jane",
    notes: [17, 18, 20, 13, 15],
  },
  {
    name: "Sophie",
    notes: [17, 12, 14, 15, 13],
  },
  {
    name: "Marc",
    notes: [2, 3, 5, 8, 9],
  },
  {
    name: "Manon",
    notes: [18, 17, 18, 19, 12],
  },
];
function moyenne(notes) {
  return notes.reduce((acc, val) => acc + val) / notes.length;
}
for (let student of students) {
  student.moyenne = moyenne(student.notes);
}
function compareStudent(a, b) {
  return b.moyenne - a.moyenne;
}
students.sort(compareStudent);
console.log(students);
