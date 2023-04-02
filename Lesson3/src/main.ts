let string = ["one", "two", "three"];
let guitar = ["strat", "les paul", 5150];
let mixedData = ["ENH", 1984, true];

string[0] = "john";
string.push("hey");

guitar[0] = 1984;

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let tuple: [string, number, boolean] = ["Dave", 1, true];
// mixed
let mixed = ["john", 1, false];

mixed = tuple; // cant do this the other way round cause of the length of tuple

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);

const examObj = {
  prop1: "John",
  prop2: true,
};

type Guitarist = {
  name: string;
  active?: boolean; // ? makes the type option
  albums: (string | number)[];
};

// evh is gutarist type
let evh: Guitarist = {
  name: "Eddie",
  active: false, // removing this active property wont affect the code  cause it optional
  albums: [1984, "OUBww"],
};
// cannot add another property

// evh is Guitarist type
let JP: Guitarist = {
  name: "John",
  active: true,
  albums: [154, "OUBww"],
};

evh = JP;

const greet = (gutarist: Guitarist) => {
  return `hello ${gutarist.name}!`;
};
console.log(greet(JP));

// Enums
// Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language at runtime

enum Garde {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Garde.U);
