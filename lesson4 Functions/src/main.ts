type stringOrNumber = string | number;
type stringNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringNumberArray;
};

type UserId = stringOrNumber;

// literal types
let myName: " John";
let username: "Dave" | "John" | "Any";
username = "Any";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (messgae: any): void => {
  console.log(messgae);
};

logMsg("Hello");
logMsg(add(2, 3));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};
logMsg(multiply(2, 2));

// optional params
const addAll = (a: number, b: number, c?: number): number => {
  // type guard
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default param value
const SumAll = (a: number = 2, b: number, c: number = 2): number => {
  // type guard

  return a + b;
};

logMsg(addAll(2, 3, 3));
logMsg(addAll(2, 3));
logMsg(SumAll(2, 3));
logMsg(SumAll(undefined, 3));

// Rest Params
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};
