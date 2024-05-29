//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

//const bigNumber = 43234234323456556765432n



// Reference (Non primitive)


// arry, objects, function 

const heros =  ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "kaushal",
    age : 20,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId)