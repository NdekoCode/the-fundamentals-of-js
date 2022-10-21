export class Student {
  ecole;
  firstname;
  lastname;
  age;
  sexe;
  canPass() {
    return moyenne(this.notes) >= 10;
  }
}

function moyenne(notes) {
  return notes.reduce((acc, val) => acc + val) / notes.length;
}
