const humanMan = {
  name: "kim",
  age: "26",
  favFood: {
    first: "bread",
    second: "gogi",
    third: "popcon"
  }
};

const hello = {
  say: "hi"
};

const {
  name,
  favFood: { second, third },
  age: difAge
} = humanMan;

console.log("# human  : ", name, second, third, difAge);

const arrayFirst = ["A", "B", "C"];
const arraySceond = ["D", "E", "F"];

// const arrayAll = arrayFirst + arraySceond;
// console.log(arrayAll);

const arrayUpdate = [...arrayFirst, ...arraySceond, "G"];

console.log(arrayUpdate);

const objUpdate = { ...humanMan, ...hello };

console.log(objUpdate);
