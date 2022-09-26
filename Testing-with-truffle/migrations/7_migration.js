const transferAmount = artifacts.require("TransferAmount");

module.exports = function (deployer, _network, accounts) {
  deployer.deploy(transferAmount, accounts[0]);
};
