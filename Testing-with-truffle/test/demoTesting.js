const Demotesting  = artifacts.require("Demotesting");
 

contract("Hello testing",() =>{
    it("it should return hello testing",async()=>{
        const demotesting = await Demotesting.deployed();
        const result = await demotesting.print();
        assert(result=="hello world");
    });
})//