// const tinderUser = new Object() // this is a singleton object
const tinderUser  = {}  // this is a non-singleton object

tinderUser.id = '123abc';
tinderUser.name = 'Sammy';
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regularUser = {
    email: 'somu@gmial.com',
    fullname: {
        userfullname: {
            firstname: 'somraj',
            lastname: 'sinha'
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

// optional chaining (?) 


const obj1 =  {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj4 = {5: 'a', 6: 'b'}


// const obj3 = {obj1, obj2}  
// const obj3 =  Object.assign(obj1, obj2)
// object.assign on mdn
// const obj3 =  Object.assign({}, obj1, obj2, obj4)


// spread operator
const obj3 = {...obj1, ...obj2}

console.log(obj3);


const users = [
    {
        id: 1,
        email: "hs@gmail.com"
    },
    {
        id: 2,
        email: "gs@gmail.com"
    },
    {
        id: 1,
        email: "hs@gmail.com"
    },
    {
        id: 1,
        email: "hs@gmail.com"
    },
]

console.log(users[1].email);
console.log(tinderUser);

// to get all keys from object, we use Object.keys() - for value, we use - Object.values(). The datatype od output is Array.
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log((tinderUser.hasOwnProperty('isLoggedIn')));