//array
const myarr=[0,1,2,3,4,5] //javascript arrays are resizable

// const myhero=["shakti","mantri"]

// const myarr2=new Array(1,2,3,4,5)
// console.log(myarr[0]);


// ///ARRAY METHODS

// myarr.pop()

// myarr.unshift(9) // value array ke start me add hoti hai
// myarray.shift()

// myarr.push(8)
// console.log(myarr.includes(5));
// console.log(myarr.indexOf(9));

// const newarr=myarr.join() //array ko string me badal deta hai 

// console.log(myarr);
// console.log(typeof newarr);


//slice splice

console.log("A",myarr)


const myn1=myarr.slice(1,3)

console.log(myn1);
console.log("B",myarr);

const myn2=myarr.splice(1,3)
console.log(myn2);
console.log("C",myarr);


//slice original array me change nhi karta splice original array me change karta hai
