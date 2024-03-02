const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString()); // toString() converts to String
// console.log(balance.toString().length)
// console.log(balance.toFixed(2));

const otherNumber = 123.8965;

// console.log(otherNumber.toPrecision(4))

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-US'));

// *********** Maths ********

// console.log(Math);
// console.log(Math.abs(-4)); // abs converts from negative value to positive; not vice versa
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
// console.log(Math.random() * 10 + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
// console.log(Math.floor(Math.random() * (max - min))) // gives values (10 to 0 )
console.log(Math.floor(Math.random() * (max - min + 1)))
console.log(Math.floor(Math.random() * (max - min + 1))) 
// console.log(Math.floor((Math.random() * 11))+10);

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // (gives 10 to 0) + min(10) = now gives value (20 to 10)





