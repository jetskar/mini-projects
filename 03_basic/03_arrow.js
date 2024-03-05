const user= {
    username: 'ram',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = 'shyam'
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = 'harsh'
//     console.log(this.username);
// }

// chai()

// Arrow Function

// const chai = function (){
//     let username = 'harsh'
//     console.log(this.username);
// }

// const chai = () => {
//     let username = 'harsh'
//     console.log(this);
// }

// chai()

// Implicit Return - arrow

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: 'harsh'}) // implicit return - object


console.log(addTwo(3,4))

const myArray = [2,5,3,7,8]

myArray.forEach(()=> console.log(myArray))  // implicit return - array
