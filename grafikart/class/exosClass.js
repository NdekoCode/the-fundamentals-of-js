class Rectangle {
  largeur;
  longueur;
  constructor(largeur, longueur) {
    this.largeur = largeur;
    this.longueur = longueur;
  }
  get perimeter() {
    return (this.largeur + this.longueur) * 2;
  }
  get isValid() {
    return this.longueur > 0 && this.largeur > 0;
  }
  isBiggerThan(form) {
    return this.perimeter > form.perimeter;
  }
}
class Square extends Rectangle {
  constructor(dimension) {
    super(dimension, dimension);
  }
  get perimeter() {
    return this.longueur * 4;
  }
  isValid() {
    return this.largeur === this.longueur;
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
