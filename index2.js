const numbers = arrayFromRange(10, 20);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}
console.log(numbers);

const movie = [
  { title: "avatar", year: 2022, ratings: 7.0 },
  { title: "far from home", year: 2021, ratings: 7.1 },
  { title: "avengers", year: 2020, ratings: 7.3 },
  { title: "voilent night ", year: 2019, ratings: 6.0 },
  { title: "easter holiday", year: 2019, ratings: 4.0 },
  { title: "father", year: 2019, ratings: 8.0 },
];
const titles = movie
  .filter((m) => m.year === 2019)
  .sort((a, b) => a.ratings - b.ratings)
  .reverse()
  .map((m) => m.title);

console.log(titles);

function addition(...num) {
  return num.reduce((a, b) => a + b);
}
console.log(addition(1, 2, 3, 4, 5, 6, 7, 8, 9));

function interestCalculator(Principal, Rate = 3, Years = 3) {
  return ((Principal * Rate) / 100) * Years;
}
console.log(interestCalculator(1000));
