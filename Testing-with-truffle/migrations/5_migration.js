const Even = artifacts.require("Even");

module.exports = function (deployer) {
  deployer.deploy(Even);
};
