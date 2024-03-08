// for in loop - object

const myObject = {
js: 'Javsscript',
cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for (const key in myObject) {
//     console.log(key);
// }


for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);

}

// for in loop  - array

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States if America")
map.set('Fr', 'France')

// for (const key in map) {
//    console.log(key);
// }

// map in not iterable in for in loop. object is not iteerable in for of loop


