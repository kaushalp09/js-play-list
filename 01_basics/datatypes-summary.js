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

// console.log(typeof anotherId);


/// Stacke (Primitive) , Heap (non-promitive)


let myYoutubename  = "kaushal"

let anothername = myYoutubename
console.log(anothername)

anothername = "hello"

console.log(anothername)
console.log(myYoutubename)

let userOne = {
    email : "k@gmail.com",
    upi : " user@abc"
}

 let userTwo =userOne

// console.log(userTwo)

userTwo.email = "h@gamil.ocm";

console.log(userOne.email)
console.log(userTwo.email)