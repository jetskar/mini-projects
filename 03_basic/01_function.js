// function

function myName() {
    console.log('H');
    console.log('A');
    console.log('R');
    console.log('S');
    console.log('H');
}

// myName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
//     console.log(typeof (num1 + num2));

// }

addTwoNumbers(2,3)  // when parameters are numbers, it will proceed with maths operation
// addTwoNumbers('2','3') // since parameters are string, it will return string as output
// addTwoNumbers('2', 3) 
// addTwoNumbers(2,'3')
// addTwoNumbers(3, null)



function addTwoNumbers(num1, num2) {
    // let result =  num1 + num2;
    // return result;
    // console.log('Hello'); // once return is executed, it will exit from function and nothing will be printed after return statment
    return num1 + num2;
}

const result = addTwoNumbers(3,4)
// console.log('Result: ', result);

// read about scope from mdn

function loginUserMessage(username = "Sam"){      // function name(para="default"){}
    // if(username === undefined) {
        if(!username){
        console.log('please enter a username')
        return
    }
    return `${username} just logged in`
}

// loginUserMessage('jomma') // it will not print function as we have not asked to print 
// console.log(loginUserMessage('jomma'));
// console.log(loginUserMessage()) // it prints 'undefined just logged in' as the function parameter is blank
 
// learn mdn - function, parameter, argument, default value in function params

// when passing multiple values in function, we use rest operator (...). 
// Just like Spread operator(...), rest operator is also 3 dots(...). The output is an array of results. 

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 1000)); // in this case, 200 goes to val1, 400 goes to val2 and rest - 500 and 1000 goes to ...num1

const user ={
    username: 'harsh',
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:'shammi',
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]));



