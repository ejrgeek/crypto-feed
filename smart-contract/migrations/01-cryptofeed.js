const CryptoFeed = artifacts.require("CryptoFeed");

module.exports = function(deployer){
    deployer.deploy(CryptoFeed);
}