//code for random dice throws
/*function dice() {
  var sum = Math.random();
  return Math.floor(sum * 6) + 1;
}

// code for calculating the bmi of a body
function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}
//code for calculating love percentage
function Gee(n) {
  var n = Math.random();
  return +(Math.floor(n * 100) + 1) + "%";
}

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

var summation = function (num) {
  // Code here
  sol = 0;
  for (let i = 1; i <= num; i++) sol += i;
  return sol;
};

function hoopCount(n) {
  //your code goes here

  if (n >= 10) return "Great, now move on to tricks";
  else return "Keep at it until you get it";
}
//for counting total number of goals of a player
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

const cockroachSpeed = (s) => Math.floor(s / 0.036);
function bmi(weight, height) {
  const bmi = weight / (height * height);
  if (bmi <= 18.5) return "Underweight";
  else if (bmi <= 25.0) return "Normal";
  else if (bmi <= 30.0) return "Overweight";
  else return "Obese";
}

function checkForFactor(base, factor) {
  // code here
  return base % factor == 0;
}

function getGrade(s1, s2, s3) {
  // Code here
  let z = [s1 + s2 + s3];
  let score = [z / 3];

  if (90 <= score <= 100) return "A";
}
function past(h, m, s) {
  //#Happy Coding! ^_^
  return h * 360000 + m * 6000 + s * 100;
}
const minMax = (arr) => {
  return [Math.min(...arr), Math.max(...arr)];
};
function sumMix(x) {
  var sum = 0;

  for (var i = 0; i < x.length; i++) {
    sum += Number(x[i]);
    return sum;
  }
}
function sumMix2(x) {
  var somme = 0;
  for (i = 0; i < x.length; i++) {
    somme += Number(x[i]);
  }
  return somme;
}

var stringToNumber = function (str) {
  // put your code here
  return Number(str);
};

function countSheeps(arr) {
  return arr.filter(Boolean).length;
}

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

const binaryArrayToNumber = (arr) => {
  return parseInt(Number(arr.join("")), 2);
};

const binaryArrayToNumber2 = (arr) => {
  return parseInt(Number(arr, 2));
};

const getAge = (inputString) => {
  return parseInt(inputString);
};
function findNextSquare(sq) {
  let sqr = Math.sqrt(sq);
  sqr = ++sqr;
  if (Math.round(sqr) == sqr) {
    return Math.pow(sqr, 2);
  } else return -1;
}
function isSquare(n) {
  let x = Math.sqrt(n);
  if (x != Math.round(x)) return false;
  else return true;
}

function getDivisorsCnt(n) {
  // todo
  let number = 0;
  for (let i = 1; i <= n; i++) if (n % i == 0) number++;
  return number;
}

function strCount(str, letter) {
  return str.split(letter).length - 1;
}

function rowSumOddNumbers(n) {
  // TODO

  return n * n * n;
}

function calculateYears(principal, interest, tax, desired) {
  // your code
  var years = 0;
  while (principal < desired) {
    principal += principal * interest * (1 - tax);
    years++;
  }
  return years;
}

function opposite(number) {
  //your code here

  if (typeof number == "number") {
    return number * -1;
  }
}

function setAlarm(employed, vacation) {
  return employed == true && vacation == false ? true : false;
}

const calculateGrades = (marks) => {
  let sum = 0;
  for (let mark of marks);
  sum += mark;
  let Avg = sum / marks.length;
  console.log(Avg);
};

const showNumbers2 = (limit) => {
  for (let i = 0; i <= limit; i++) {
    const oddEven = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i + " " + oddEven);
  }
};
const Grade = (position) => {
  for (let i = 0; i <= position; i++) {
    const pos = (i = 1) ? "st" : "th";

    console.log(i + pos);
  }
};

function isLandscape2(width, height) {
  return width > height;
}

const fizzBuzz2 = (input) => {
  if (input % 3 == 0 && input % 5 == 0) {
    return "fizzBuzz";
  } else if (input % 3 == 0) {
    return "Fizz";
  } else if (input % 5 == 0) {
    return "Buzz";
  } else {
    return "Not a Number";
  }
};

function maps(x) {
  return x.map((n) => n * 2);
}

let hour = 19;
if (hour >= 24 && hour < 12) {
  console.log("Good Morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon!");
} else hour >= 18 && hour < 24;
console.log("Good Evening!");

for (let i = 0; i < 5; i++) {
  if (i % 2 == 0) console.log(i);
}
console.log(isLandscape(1000, 200));
function isLandscape(width, height) {
  return width > height;
}
const output = fizzBuzz(7);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return "not a number";

  if (input % 3 == 0 && input % 5 == 0) return "fizzBuzz";

  if (input % 3 == 0) return "fizz";

  if (input % 5 == 0) return "Buzz";

  return input;
}
carSpeed(134);

function carSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) console.log("Okay");
  else {
    const points = (speed - speedLimit) / kmPerPoint;
    if (points >= 12) console.log("license suspended");
    else console.log("Points", points);
  }
}

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const oddEven = i % 2 === 0 ? "EVEN" : "ODD";
    console.log("oddEven");
  }
}

function greet(name) {
  console.log("Hello," + name);
}

greet("April");
greet("May");

var likes = true;
var retweet = true;
var following = true;
var lrf = (likes === retweet) === following;
console.log(lrf);

function someName(name) {
  var count = "number";
  var th = count;
  if (th === 1);
  console.log("st");
  for (let count = 1; count <= 1; count++)
    console.log("This is the " + count + th + " student:  " + name);
}
someName("Kosi");
someName("Kodili");

console.log("Hello World");

function test(name, age) {
  console.log(name);
  console.log(age);
}
test("Emeka", 30);

function simpleMultiplication(number) {
  // your code........
  if (number % 2 === 0) {
    return number * 8;
  } else number % 2 != 0;
  return number * 9;
}
const century = (year) => Math.ceil(1998 / 100);

const areaOrPerimeter = function (l, w) {
  // Return your answer
  if (l === w) {
    return l * w;
  } else return l + l + w + w;
};
areaOrPerimeter(2, 4);

function areaOrPerimeter1(l, w) {
  return l === w ? l * w : l + l + w + w;
  // Return your answer
}

const areaOrPerimeter2 = (l, w) => (l === w ? l * w : 2 * l + 2 * w);

function fakeBin(x) {
  x = [];
  if (x < 5) {
    return 0;
  } else return 1;
}
function numberToString1(num) {
  return num.toString();
}

function numberToString(num) {
  return "GEN" + num;
}

// Smash Words
function smash(words) {
  "use strict";
  return words.join(" ");
}

//Calculating leap year
function leapYear(Years) {
  if (Years % 4 == 0 && Years % 100 != 0) {
    return +Years + " is a leap year";
  }
  if (Years % 4 == 0 && Years % 400 == 0) {
    return +Years + " is a leap year";
  } else return Years + " is not a leap year";
}

//randomly selecting who will pay for a meal
function whoWIll(names) {
  var names = [
    "Chijioke",
    "Vladimir",
    "Chibuike",
    "Michael",
    "Chinemerem",
    "Gabriel",
  ];
  var randomPerson = Math.floor(Math.random() * names.length);
  return names[randomPerson] + " will pay for todays food";
}

function lyrics(gee) {
  for (var bottles = 0; bottles < 100; bottles++) {
    var one = console.log(bottles + " bottles of bear on the wall");
  }
  for (var bottles = 99; bottles > 0; bottles--) {
    var two = console.log(
      bottles + " on the wall. Take l down, pass it around,"
    );
  }
  for (var bottles = 0; bottles < 99; bottles++) {
    var three = console.log(bottles + " bottles of bear on the wall");
  }
}
//calcuating simple mathematics
function add(num1, num2) {
  return num1 + num2;
  }
  
  function subtract(num1, num2) {
  return num1 - num2;
  }
  
  function multiply(num1, num2) {
  return num1 * num2;
  }
  
  function divide(num1, num2) {
  return num1 / num2;
  }
  
  function calculator(num1, num2, operator) {
  return operator(num1, num2);
  }*/

class Constumer {
  constructor(name, age, size, height) {
    this.name = name;
    this.age = age;
    this.size = size;
    this.height = height;
  }
}
var worker1 = new Constumer("Chijioke", "18 years", "80 Kg", "170cm");
switch