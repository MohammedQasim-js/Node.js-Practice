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

// // Modules - In Node.js, each file is treated as a separate module
// const helper = require("./helper");

// console.log(helper("John"));
// console.log(helper.user("John"));
// console.log(helper.id("123"));
// console.log(helper.email("john@mail.co"));

// Event Emitter - Node.js has a built-in module called 'events' that allows us to work with events. And, 'util' module helps to inherit the event properties.
const events = require("events");
const util = require("util");

// const myEmitter = new events.EventEmitter;

// myEmitter.on('test', function (arg) {
//     console.log(arg);
// })

// myEmitter.emit('test', 'Hello World!')

const teams = function (name) {
  this.name = name;
};

util.inherits(teams, events.EventEmitter);

const Liverpool = new teams("Liverpool");
const Juventues = new teams("Juventues");
const Porto = new teams("Porto");

const teamArray = [Liverpool, Juventues, Porto];

teamArray.forEach((team) => {
  team.on("nation", function (nation) {
    console.log(team.name + " is " + nation + " football club.");
  });
});

Liverpool.emit("nation", "English");
Juventues.emit("nation", "Italian");
Porto.emit("nation", "Portugese");
