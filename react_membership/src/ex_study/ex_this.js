class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

class Baby extends Human {
  cry() {
    console.log("T,T");
  }
  sayName() {
    console.log(`My Name ${this.lastName}`);
  }
}

const myBaby = new Baby("kim", "young");
// console.log(myBaby);
console.log(myBaby.cry());
console.log(myBaby.sayName());
