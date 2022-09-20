const DynamicTesting  = artifacts.require("Dynamic");
 

contract("Checking Array function",() =>{
    let size =0;
    it("array pushed element checking with index",async()=>{
        let  Dynamic = await DynamicTesting.deployed();
        await Dynamic.multiply(1,32);
        size++;
        const res = await Dynamic.get(0);
        assert(res.toNumber()===32);
    });
    it("array size",async()=>{
        let  Dynamic = await DynamicTesting.deployed();
        const test  = await Dynamic.length();
        console.log(test.toNumber())
        assert(test.toNumber()==size);
    });
//
})