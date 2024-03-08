// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = 'Hello World'
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps  

// refer to map js mdn

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States if America")
map.set('Fr', 'France')
// map.set('IN', "India") // map gives unique value and executes in orders

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// Destructing of Arrays

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

 const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman',
        game1: 'NFS', 
        game2: 'Spiderman'
 }

// for (const [key,value] of myObject) {
//     console.log(key, ";-", value);
// }

// object is not iterable like map, There is different method to iterate object
