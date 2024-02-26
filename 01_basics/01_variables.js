const accountID = 144567
let accountEmail = "harsh@google.com"
var accountPassword = "1245"
accountCity = "Jaipur"
let accountState;

// accountID = 2 // not allowed

/*
Prefer not to use var
because of issue of block scope and functional scope
*/

accountEmail = "giga@gmail.com"
accountPassword = "255638"
accountCity = "Pune"

console.log(accountID)

console.table([accountID, accountEmail, accountPassword, accountCity], accountState)

