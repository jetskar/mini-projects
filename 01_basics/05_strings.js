const named = "harsh"
const repoCount = 50

// console.log(named + repoCount + " Value")

// String interpolation
console.log(`Hello my name is ${named} and my repo count is ${repoCount}`)

const gameName = new String('harsh-hero-india')

// console.log(gameName[0]);
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('r'))


const newString = gameName.substring(0,4)    // substing cannot be negative value
console.log(newString)

const anotherString = gameName.slice(-8, 4) // slice can be negative value
console.log(anotherString)

const newStringOne =  "  harsh  "
console.log(newStringOne.trim()) 

// learn about trim() - 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://www.google.com/harsh%20sharma"
console.log(url.replace('%20', '-'))
console.log(url.includes('jimmy'))

console.log(gameName.split('-'));