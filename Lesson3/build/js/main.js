"use strict";
let string = ["one", "two", "three"];
let guitar = ["strat", "les paul", 5150];
let mixedData = ["ENH", 1984, true];
string[0] = "john";
string.push("hey");
guitar[0] = 1984;
let test = [];
let bands = [];
bands.push("Van Halen");
// Tuple
let tuple = ["Dave", 1, true];
// mixed
let mixed = ["john", 1, false];
mixed = tuple; // cant do this the other way round cause of the length of tuple
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
const examObj = {
    prop1: "John",
    prop2: true,
};
// evh is gutarist type
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, "OUBww"],
};
// cannot add another property
// evh is Guitarist type
let JP = {
    name: "John",
    active: true,
    albums: [154, "OUBww"],
};
evh = JP;
const greet = (gutarist) => {
    return `hello ${gutarist.name}!`;
};
console.log(greet(JP));
// Enums
// Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language at runtime
var Garde;
(function (Garde) {
    Garde[Garde["U"] = 1] = "U";
    Garde[Garde["D"] = 2] = "D";
    Garde[Garde["C"] = 3] = "C";
    Garde[Garde["B"] = 4] = "B";
    Garde[Garde["A"] = 5] = "A";
})(Garde || (Garde = {}));
console.log(Garde.U);
