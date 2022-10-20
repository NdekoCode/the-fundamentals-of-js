/* class Rectangle {
  width;
  height;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get perimeter() {
    return (this.width + this.height) * 2;
  }
  get isValid() {
    return this.height > 0 && this.width > 0;
  }
  isBiggerThan(form) {
    return this.perimeter > form.perimeter;
  }
}
class Square extends Rectangle {
  constructor(dimension) {
    super(dimension, dimension);
  }
}

const r = new Rectangle(10, 20);
console.log(r.perimeter); // 60
console.log(r.isValid); // true
const r2 = new Rectangle(-10, 20);
console.log(r2.isValid); // false
const c = new Square(10);
console.log(c.perimeter); // 40
console.log(r.isBiggerThan(c)); // true
 */
/**
 * Pour contenir les livres
 */
class Book {
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
/**
 * @description Une bibliothèque des livres
 *
 * @author NdekoCode
 * @class Library
 */
class Library {
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
const b = new Book("Seigneur des anneaux", 200);
console.log(b.page);
b.nextPage();
console.log(b.page);
b.close();
console.log(b.page);

const l = new Library();
l.addBook(b);
const data = l
  .addBooks([
    new Book("Ready player one", 100),
    new Book("Oui-oui", 10),
    new Book("Sillage", 50),
  ])
  .findBooksByLetter("S");
console.log(data);
