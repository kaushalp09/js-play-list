//if 

// const isUserloggedin =true
// const temperature = 41

// if(temperature === 41){
//     console.log("less than 50")
// }else{
//     console.log("tempreture is greture than 50")
// }

// console.log("executed")

// <, >, <=, >=, ==, !=, ===, !==


// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power ${power}`);
// }

// const balance = 600

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500){
// console.log("less than")
// }else if(balance<750){
//     console.log("lees than 750")
// }else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
    
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to by course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
