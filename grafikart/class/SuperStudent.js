import Student from "./Student";

class SuperStudent extends Student {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }
  get name() {
    return super.name;
  }
}
