const { assert } = require("console");

const DeamonDoge = artifacts.require("DeamonDoge.sol");

contract('DeamonDoge', accounts => {
    it("Should put all the coins in the first account", () =>
        DeamonDoge.Deployed()
            .then(instance => instance.balanceOf.call(accounts[0]))
            .then(balance => {
                assert.equal(
                    balance.toString(),
                    "100000000000000000000000000000",
                    "Balance Isn't Correct!"
                );
            })
    );
})