// Object

// read on mdn - Singleton will be created by constructor. It is not created when declared as literal.

// Object.create  method will create a singleton

//object literals

const mySysm = Symbol('key1')


const jsUser = {
    name: 'Harsh',
    'full name': 'Harsh Sharma', 
    [mySysm]: 'mykey1',  // we have put in Symbol in [] for Symbol
    age: 18,
    location: 'Mumbai',
    email: 'harsh@live.com',
    isLoggedIn: false,
    lastLogInDays: ['Monday', 'Saturday']
}

// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser["full name"]);
// // console.log(jsUser.mySysm); // mySym output will be String not a Symbol
// console.log(jsUser[mySysm]);

jsUser.email = "harsh@google.com"
// to freeze an object value from changing, we can put freeze on object
// Object.freeze(jsUser)
// jsUser.email = 'harsh@gmail.com'
// console.log(jsUser);


jsUser.greeting =  function() {
    console.log(`Hello JS User ${this.name}`);
}

jsUser.greetingTwo =  function() {
    console.log(`Hello JS User`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());