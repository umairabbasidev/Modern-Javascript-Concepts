// Topic : Variables, let,var,const

const accountId = 144553;
let accountEmail = "umair@google.com";
var accountPassword = "12345";
accountCity = "Karachi";

// accountId = 2; // not allowed Assignment to constant variable.

// console.log(accountId)

accountEmail = "ua@ua.com";

accountPassword = "212121";

accountCity = "Islamabad"

console.table([accountId,accountEmail,accountPassword,accountCity])

/* 

Prefer not to use var
because of issue in block and functional scope
*/