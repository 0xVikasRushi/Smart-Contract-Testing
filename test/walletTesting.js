const Wallet = artifacts.require("Wallet");

contract("Wallet", (accounts) => {
  let wallet = null;
  before(async () => {
    wallet = await Wallet.deployed();
  });
  it("Should set accouns[0] as owner", async () => {
    const owner = await wallet.owner();
    assert(owner == accounts[0]);
  });

  it("depositing funds", async () => {
    await wallet.deposit({ from: accounts[0], value: 121 });
    const balance = await web3.eth.getBalance(wallet.address);
    // console.log(balance);
    console.log(typeof balance);
    assert(parseInt(balance) === 121); // === we can compare with string with uint
  });
  it("should return balance of THIS  contract", async () => {
    const balance = await wallet.balanceOf();
    // console.log(balance); // string datatype
    assert(parseInt(balance) === 121);
  });

  it("should transfer ether to another address", async () => {
    const beforesenderbalance = await web3.eth.getBalance(accounts[1]);
    console.log("before :", beforesenderbalance);
    await wallet.send(accounts[1], 10, { from: accounts[0] });
    const aftersenderbalance = await web3.eth.getBalance(accounts[1]);
    console.log("after : ", aftersenderbalance);
    // console.log();/
    const finalcontract = web3.utils.toBN(aftersenderbalance);
    const intialbalance = web3.utils.toBN(beforesenderbalance);
    console.log(finalcontract.sub(intialbalance).toNumber());
    assert(finalcontract.sub(intialbalance).toNumber() === 10);
  });

  it("Owner testing function", async () => {
    try {
      await wallet.send(account[1], 21, { from: accounts[12] });
    } catch (e) {
      assert("ERROR : only owner can run functions ");
    }
  });
});
