
const Even = artifacts.require("Even");

contract("Even", () => {
  it("Should check whether a is even or not", async () => {
    const even = await Even.deployed();
    try {
      const result = await even.checkEven(4);
      assert(result.toNumber() === 4);
    } catch (e) {
      assert(false, "a is odd");
    }
  });
});
