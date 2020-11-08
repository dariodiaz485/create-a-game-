let readline = require("readline-sync");

let colors = require(`colors`);

console.log(`hello`.green);
console.log(`i like cake and pies`.underline.red);
console.log(`inverse ther color`.inverse);
console.log(`OMg Rainbows!`.rainbow);
console.log(`Run the trap`.trap);

let colors = require(`colors`);
colors.enable();
colors.disable();

let name = `dario`;
console.log(colors.green("Hello %s"), name);
// outputs _> 'Hello Dario'

let colors = require("colors");

colors.setTheme({
  silly: "rainbow",
  input: "grey",
  verbose: "cyan",
  prompt: "grey",
  info: "green",
  help: "cyan",
  warn: "yellow",
  debug: "blue",
  error: "red",
});

// outputs red text
console.log("this is an error".error);

//outputs yellow text
console.log("this is a warning".warn);

let colors = require("colors/safe");

// set single property
let error = colors.red;
error("this is red");

// set theme
colors.setTheme({
  silly: "rainbow",
  input: "grey",
  verbose: "cyan",
  prompt: "grey",
  info: "green",
  help: "cyan",
  warn: "yellow",
  debug: "blue",
  error: "red",
});

// outputs red text
console.log(colors.error("this is an error"));

// outputs yellow text
console.log(colors.warn("this is a warning"));

let colors = require("colors");

colors.setTheme({
  custom: ["red", "underline"],
});

console.log("test".custom);
