const numbers = [90, 5, 10, 15, 20, 25, 30, 35, 40, 45, 100];

// const bigger = numbers.filter(number => number > 20);
const biggerFilter = number => number > 20;
const bigger = numbers.filter(biggerFilter);

// console.log(bigger);

const texts = ["Hi", "Hello", "Bye"];

const textFilter = texts.filter(text => text.length > 3);
console.log(textFilter);
