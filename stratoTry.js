var blockapps = require('blockapps-js');

var Account = require('blockapps-js').ethbase.Account;
var Solidity = require('blockapps-js').Solidity

blockapps.setProfile('strato-dev');
// blockapps.setProfile('strato-live');

var privkey = "1dd885a423f4e212740f116afa66d40aafdbb3a381079150371801871d9ea281";

// var address = "16ae8aaf39a18a3035c7bf71f14c507eda83d3e3"
//
// Account(address).balance.then(function(balance) {
//   console.log('bal: ' + balance)
// });



var code = "contract C { int x = -2; }"; // For instance


// Solidity(code).then(function(solObj) {
//   console.log("vmcode: " + solObj.vmCode)
//   // solObj.vmCode is the compiled code.  You could submit it directly with
//   // a Transaction, but there is a better way.
//
//   // solObj.symTab has more information than you could possibly want about the
//   // global variables and functions defined in the code.
//
//   // solObj.name is the name of the contrat, i.e. "C"
//
//   // solObj.code is the code itself.
// }).catch(function(err) {
//   console.log('err: ' + err)
//   // err is the compiler error if the code is malformed.
// })



Solidity(code).call('newContract', privkey, {"value": 98}).then(function(contract) {
  console.log(contract)
  console.log(contract.account)
  // console.log(Account(contract.account.address).balance)

  var b1;
  var account = Account(contract.account.address);
  console.log('addr: ' + account.address);

  account.balance.then(function(balance) {
    console.log('bal: ' + balance)
    b1 = balance.equals(100); // You shouldn't use == with big-integers
  });

  var b2 = contract.state.x == -2; // If you do use ==, the big-integer is downcast.
  console.log('results b1,b2: ' + b1 + ' ' + b2)
});
