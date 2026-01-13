// console.log("Hello World!");

// Globals - In Node.js, these are not attached to the window object like in browsers
// let count = 0;

// const timer = setInterval(() => {
//   count = count + 2;
//   console.log(`${count} seconds have passed!`);
//   if (count > 6) {
//     clearInterval(timer);
//   }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

// Funtions
// function apple() {
//   console.log("Hello World!");
// }

// apple();

// function callBackFunc(func) {
//   func();
// }

// let blue = function () {
//   console.log("Hello!");
// };

// callBackFunc(blue);

// Modules - In Node.js, each file is treated as a separate module
const helper = require("./helper");

// console.log(helper("John"));
console.log(helper.user("John"));
console.log(helper.id("123"));
console.log(helper.email("john@mail.co"));
