const DeamonDoge = artifacts.require("DeamonDoge.sol");
const IterableMapping = artifacts.require('IterableMapping.sol');

module.exports = function (deployer) {
  deployer.deploy(IterableMapping).then(() => {
    deployer.deploy(DeamonDoge, {gas: 10000000});
});
deployer.link(IterableMapping, DeamonDoge);
};