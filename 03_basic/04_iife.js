// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();

// chai()

// (function aurchai(){
    // unnamed IFFE
//     console.log(`DB Connected`);
// })();

( (name) => {
    console.log(`DB Connected TWO ${name}`)
}  )('harsh');


// Javascript Execution Context
// Global Execution Context
// Function Execution Context
// Eval Execution Context - 1. Memory Creation Phase. 2. Execution Phasef