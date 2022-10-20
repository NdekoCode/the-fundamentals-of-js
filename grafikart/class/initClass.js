class Student {
  static moyenne = 10;
  ecole;
  firstname;
  lastname;
  #age;
  #sexe;
  _notes;
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.#age = age;
  }
  get name() {
    return `${this.firstname} ${this.lastname}`;
  }
  /**
   * @param {Array} notes
   */
  set notes(notes) {
    if (Array.isArray(notes)) {
      this._notes = notes;
    }
  }
  canPass() {
    return this.moyenne() >= Student.moyenne;
  }
  moyenne() {
    return this._notes.reduce((acc, val) => acc + val) / this._notes.length;
  }
}
class SuperStudent extends Student {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }
  get name() {
    return super.name;
  }
}

const arick = new SuperStudent("Arick", "Bulakali");
arick.notes = [13, 12, 6];
const name = "Arick";
console.log(Array.from(name));
console.log(arick.name);
