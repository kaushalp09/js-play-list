function sayMyName(){
    console.log("k");
    console.log("a");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
}

//sayMyName();

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    //let result = number1 + number2
    // return result
    return number1 + number2
}


const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);

function loginUserMessage(username){
    if (!username) {
        console.log("please enter a username ");
        return
    } else {
        
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("kaushla"))
//console.log(loginUserMessage())

function calculatecartprice(val1,val2, ...num1){
    return num1
}

// console.log(calculatecartprice(200,400,500))

const user = { 
    username :"kaushal",
    price : 30
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)

    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));