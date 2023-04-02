let myName: string = "Joe";
let meaningOfLife: number;
let isLoading: boolean;
let album: any; //any type
let game: string | number; //union type

meaningOfLife = 42;
isLoading = true;
album = "Dang";
game = 11;

const sum = (a: number, b: string) => {
  return a + b;
};

console.log(sum(2, "go"));

let re: RegExp = /\w+/g; // Regular expression type
