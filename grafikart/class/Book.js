/**
 * Pour contenir les livres
 */
export default class Book {
  static pageNumber;
  #page = 1;
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
