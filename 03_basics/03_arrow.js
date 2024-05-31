const user = {
    username: "kauhsal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
// console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "kauval"
//     console.log(this);
// }
// chai()

// const addtwo = (num1,num2)=>{
//     return num1 +num2
// }

//const addtwo = (num1, num2)=>  num1 +num2

//const addtwo = (num1, num2)=>  (num1 +num2)

const addtwo = (num1, num2)=> ({username: "kausha"})

console.log(addtwo(1,1))

const myArray =[2,3,4,5,6,0]

myArray.for()