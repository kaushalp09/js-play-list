// singelton 


// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "kaushal",
    "fullname" : "patel kauhsal",
    [mySym]: "mykey1",
    age: 19,
    location :"surat",
    email:"k@gmail.com",
    isLoggedIn: false,
    lastLogginDay :["monday","saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["fullname"])
// console.log(jsUser[mySym])

jsUser.email = "p@gmail.com"
//Object.freeze (jsUser)


jsUser.email = "p@hello.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hellooo js user")
}

jsUser.greeting2 = function(){
    console.log(`heloo js user, ${this.name}`)
}


console.log(jsUser.greeting())

console.log(jsUser.greeting2())