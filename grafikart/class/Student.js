export default class Student {
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
