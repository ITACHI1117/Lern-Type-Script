"use strict";
// literal types
let myName;
let username;
username = "Any";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (messgae) => {
    console.log(messgae);
};
logMsg("Hello");
logMsg(add(2, 3));
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional params
const addAll = (a, b, c) => {
    // type guard
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default param value
const SumAll = (a = 2, b, c = 2) => {
    // type guard
    return a + b;
};
logMsg(addAll(2, 3, 3));
logMsg(addAll(2, 3));
logMsg(SumAll(2, 3));
logMsg(SumAll(undefined, 3));
// Rest Params
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
