const name="hitesh"
const repo=50

// console.log(name+repo+"value");
console.log(`hello my name is ${name} and my repo is ${repo}`);

const gamename=new String(`hitesh`)

console.log(gamename[0]);
console.log(gamename.length);

const newstr=gamename.substring(0,2)
console.log(newstr);

const anotherstring=gamename.slice(-6,3)
console.log(anotherstring);

const newstringone="   hitesh   "
console.log(newstringone);
console.log(newstringone.trim());


const url="https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace(`%20`,`-`));

