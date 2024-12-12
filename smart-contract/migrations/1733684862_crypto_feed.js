const CryptoFeed = artifacts.require("CryptoFeed");

module.exports = function(_deployer){
    _deployer.deploy(CryptoFeed);
}