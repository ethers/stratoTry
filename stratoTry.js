var blockapps = require('blockapps-js');

var Account = require('blockapps-js').ethbase.Account;

// blockapps.setProfile('strato-dev');
blockapps.setProfile('strato-live');

var address = "16ae8aaf39a18a3035c7bf71f14c507eda83d3e3"

Account(address).balance.then(function(balance) {
  console.log('bal: ' + balance)
});
