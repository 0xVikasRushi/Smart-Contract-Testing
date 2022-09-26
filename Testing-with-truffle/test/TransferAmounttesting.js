const TransferAmount = artifacts.require("TransferAmount");

contract("Testing Transfer Amount", (accounts) => {
  let instance = null;
  before(async () => {
    instance = await TransferAmount.deployed();
  });
  it("should not transfer amount if caller is not the owner", async () => {
    const recipients = [accounts[1], accounts[2], accounts[3]];
    const amounts = [10, 20, 30];
    try {
      await transferAmount.send(recipients, amounts, {
        from: accounts[4],
        value: 10,
      });
    } catch (e) {
      // console.error(e);
      assert(
        e.message.includes("VM Exception while processing transaction: revert")
      );
      return;
    }
    assert(false);
  });

  it("Checking Balances of Accounts :", async () => {
    const acc = [accounts[1], accounts[2], accounts[3]];
    const amount = [10, 20, 30];
    const intialBalances = await Promise.all(
      acc.map((acc) => {
        return web3.eth.getBalance(acc);
      })
    );
    console.log(intialBalances);

    await instance.send(acc, amount, {
      from: accounts[0],
      value: 90,
    });
    const finalbalances = await Promise.all(
      acc.map((acc) => {
        return web3.eth.getBalance(acc);
      })
    );
    console.log(finalbalances);

    acc.forEach((_item, i) => {
      const finalbalance = web3.utils.toBN(finalbalances[i]);
      const intialBalance = web3.utils.toBN(intialBalances[i]);
      assert(finalbalance.sub(intialBalance) == amount[i]);
    });
  });

  it("this is test for owner", async () => {
    const acc = [accounts[5], accounts[6], accounts[7]];
    const amount = [10, 20, 30];
    try {
      await instance.send(acc, amount, {
        from: account[0],
        value: 10,
      });
    } catch (e) {
      assert(e.message.includes("You can't exclude this only owner can"));
      return;
    }
  });
});
