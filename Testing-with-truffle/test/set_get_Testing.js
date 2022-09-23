const SetGetTesting  = artifacts.require("SetGet");
 

contract("set get value testing",() =>{
    it("it should set and get value should same",async()=>{
        const setGet = await SetGetTesting.deployed();
        await setGet.set("vikas");
        const test  = await setGet.get();
        assert(test=="vikas");
    });
    
})//