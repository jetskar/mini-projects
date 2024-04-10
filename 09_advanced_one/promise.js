const promiseOne =  new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
        setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000);
})  


promiseOne.then(function(){
    console.log('Promise comsumed');
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 1000);
}).then(()=>{
    console.log('Async 2 resolved');
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: 'harsh', email: 'harsh@example.com'})
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: 'harsh', password: '1234'});
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(()=> console.log('The promise is either resolved or rejected'))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: 'javascript', password: '1234'});
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumePromiseFive()
 
// JSON api - https://jsonplaceholder.typicode.com/users 

async function getAllUsers () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        const data = response.json();
        console.log(data);
    } catch(error) {
        console.log('Error: ', error);
    }
}

getAllUsers()

