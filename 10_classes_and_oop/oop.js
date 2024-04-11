const user = {
    username: 'harsh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log('Got user details from database');
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.geeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User('hitesh', 12, true)
const userTwo = new User('jimmy', 11, false)

console.log(userOne.constructor);
// console.log(userTwo);

// learn about instanceof from mdn and chatgpt with esxample

