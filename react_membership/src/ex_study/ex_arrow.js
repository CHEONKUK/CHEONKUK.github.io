function sayHello(hello) {
  return hello;
}

const sayMyName = (name = "human") => "My name is " + name;

const say = sayHello("hi");
const name = sayMyName();

console.log(say, name);

/* HTML button */

const button = document.querySelector("button");

// button.addEventListener("click", function(evnet) {
//   console.log(evnet);
// });

button.addEventListener("click", event => console.log("wow"));
