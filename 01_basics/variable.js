const accountId = 1234443
let accountEmail = "vivek@google.com"
var accountPassowrd = "12345"
accountcity = "Delhi"
let accountState;

 // accountId = 2 // not allowed

 accountEmail = "vviek@gooo.com"
 accountPassowrd = "9923"
 accountcity = "noida"


 /* prefer not use var
    because of issue in block scope and functional scope
    */

console.log(accountId);
console.table([accountId,accountEmail,accountPassowrd,accountcity,accountState])

