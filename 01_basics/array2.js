const marvel=["thor","ironman","spider"]
const dc=["super","flash","batman"]

// marvel.push(dc);
// console.log(marvel[3][1]);

// const allhero=marvel.concat(dc)
// console.log(allhero)
const anar=[1,2,3,[4,5,6],7,[8,8,[4,5]]]
const aanar=anar.flat(Infinity)
// console.log(aanar);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));

console.log(Array.from({name:"hitesh"}));//

let score1=100

let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));


