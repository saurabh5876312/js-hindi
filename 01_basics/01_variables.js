 const accountId = 144553
 let accountEmail = "saurabh@google.com"
 var accountPassword = "12345"
 accountCity = "jaipur"
 let accountState;

//  accountId = 234 not allowed
accountEmail = "sasa@sb.com"
accountPassword = "43023"
accountCity = "varanasi"

console.log(accountId);
/*
prefer not to use var 
because of issue in biock and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);