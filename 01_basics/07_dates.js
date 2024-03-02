// Dates 

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())

// console.log(typeof myDate)  // Date is an Object

// let myCreatedDate = new Date(2023, 0, 23)

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14") // YYYY-MM-DD
let myCreatedDate = new Date("01-14-2023") 
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now())
// console.log(Math.floor(Date.now()/1000))
// console.log(Math.round(Date.now()/1000))/


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1); // since months starts from 0 in Date mehtod, so we have to add 1
console.log(newDate.getFullYear());

// `${newDate.getDate()} and the time `

newDate.toLocaleDateString('default', {
    weekday: 'long',
    
})




