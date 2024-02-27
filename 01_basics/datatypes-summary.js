// Primitive 


// Question => Is JavaScript a dynamically typed or statically typed language?
// Answer => JavaScript is a dynamically typed language, dynamically typed languages all type checks are performed in a runtime, only when your program is executing. So this means you can just assign anything you want to the variable and it will work.



// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754
// const bigNumber = 3456543576654356754n
// const bigNumber = BigInt(3456543576654356754)
// console.log(bigNumber)

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "harsh",
    age: 23
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof anotherId)

// https://262.ecma-international.org/5.1/#sec-11.4.3