// arrays

// const mArr = [0,1, 2, 3, 4, 5, true, 'harsh']
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ['shaktiman', 'naagraj', 'doga']

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// learn about array - shallow copy and deep copy term on mdn

// Array methods

// push adds given paramter/value at end of array
// myArr.push(6)
// myArr.push(7)
// console.log(myArr);

//pop - remove value from the end of array and no parameter has to be given

// myArr.pop()
// console.log(myArr);
// console.log(myArr);

// unshift - adds adds given paramter/value at the start of array

// myArr.unshift(9)
// myArr.unshift(10)
// console.log(myArr)

// shift - remove value from the start of array and no parameter has to be given
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9)); // gives boolean result - false/true

// console.log(myArr.indexOf(19)); // result is -1 (negative value) which mean no present in array
// console.log(myArr.indexOf(3)); // result is 3 - which points to the index location


// const newArr = myArr.join() // 
// console.log(myArr); 
// console.log(newArr);
// console.log(typeof newArr); // joins has binded the array seperated by comma and converted it to String

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) 
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// Question diff b/w slice and splice? both remove the values as per given parameter/values. 
// Slice operation alters the original array. 
// Slice operation does not alter the orginal array.