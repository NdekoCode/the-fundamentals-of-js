/**
 * @class
 * @classdesc Pour contenir les livres
 * @property {number} pageNumber le nombre de page du livre
 * @property {number} page La page courrante du livre
 * @property {string} title titre du livre
 */
export default class Book {
  static pageNumber;
  #page = 1;
  /**
   *
   * @param {string} title titre du livre
   * @param {number} pageNumber le nombre de page du livre
   */
  constructor(title, pageNumber) {
    this.title = title;
    Book.pageNumber = pageNumber;
  }
  get page() {
    return this.#page;
  }
  nextPage() {
    if (this.#page < this.pageNumber) {
      this.#page++;
    }
  }
  close() {
    this.#page = 1;
  }
}
