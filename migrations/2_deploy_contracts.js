var HC = artifacts.require("./HelloCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(HC);
};
