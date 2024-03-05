// Scope - Global Scope, Block/Local Scope

let a = 100
// const b = 20
// var c = 300

if (true){
    let a = 10
    const b = 20
    // var c = 30
    console.log('Inner: ', a);
}


// Global scope in node(your system) and in browser are different

// console.log(a)
// console.log(b)
// console.log(c)

// Nested Scope

function one(){
    const username = 'harsh'

    function two(){
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website);

    // two()
}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
