// задание 1

const top_ = 'qwertyuiop[]\\';
const middle = 'asdfghjkl;\'';
const bottom = 'zxcvbnm,./';

// задание 2

const top_length = top_.length;
const middle_length = middle.length;
const bottom_length = bottom.length;

// задание 3

const top_first = top_.charAt(0);
const top_last = top_.charAt(top_length - 1);
const middle_first = middle.charAt(0);
const middle_last = middle.charAt(middle_length - 1);
const bottom_first = bottom.charAt(0);
const bottom_last = bottom.charAt(bottom_length - 1);

// задание 4

let left_ = top_.indexOf('[');
let right_ = top_.indexOf(']');

// задание 5

let result1 = `let left_: ${left_}, let right_: ${right_}`
console.log(result1);