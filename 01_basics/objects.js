//singleton

//object literals

const mysym=Symbol("key1")


const jsuser={
    name:"hitesh",
    "full name":"hitesh chaudhay",
    [mysym]:"mykey1",
    age:18,
    email:"hitesh@gmail.com",
    isloggedin:false,
    lastlogin:["monday","saturday","sunday"]
}
// console.log(jsuser.email)
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// jsuser.email="hietshchat@am"
// Object.freeze(jsuser)
// jsuser.email="hitesh@123"
// console.log(jsuser);


jsuser.greeting=function(){
    console.log("hello user");
}
jsuser.greeting2=function(){
    console.log(`hello js user,,${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());


