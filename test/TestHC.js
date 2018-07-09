var HelloCoin = artifacts.require("./HelloCoin.sol");

contract('HelloCoin', function(accounts) {

  it("should put 666 token in the first account", function() {
    return HelloCoin.deployed().then(function(instance) {
      return instance.banlanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 666, "666 wasn't in the first account");
    });
  });


  

  it("should send 6 coins correctly", function() {
    var hc;

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 6;

    return HelloCoin.deployed().then(function(instance) {
      hc = instance;
      return hc.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      return hc.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_starting_balance = balance.toNumber();
      return hc.transfer(account_two, amount, {from: account_one});
    }).then(function() {
      return hc.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      return hc.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
  });
});
