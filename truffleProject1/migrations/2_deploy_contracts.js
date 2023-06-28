const Bank = artifacts.require("Bank");
const Attack = artifacts.require("Attack");
module.exports = function(deployer) {
    deployer.deploy(Bank).then(function() {
        return deployer.deploy(Attack, Bank.address);
    });
};