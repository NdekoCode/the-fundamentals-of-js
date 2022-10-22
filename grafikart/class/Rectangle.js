export default class Rectangle {
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
