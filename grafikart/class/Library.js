/**
 * @description Une bibliothèque des livres
 *
 * @author NdekoCode
 * @class Library
 */
export default class Library {
  #books = [];
  addBook(book) {
    this.#books.push(book);
  }
  get books() {
    return this.#books;
  }
  addBooks(books) {
    this.#books.push(...books);
    return this;
  }
  findBooksByLetter(str) {
    return this.#books.filter((book) =>
      book.title.toUpperCase().startsWith(str.toUpperCase())
    );
  }
}
