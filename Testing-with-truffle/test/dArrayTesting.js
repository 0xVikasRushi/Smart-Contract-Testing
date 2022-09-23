

const ArrayTesting  = artifacts.require('DArray');

contract("this is new testing service", async()=>{
    let arrayinstance = null;
    before("Deploying contract",async()=>{
       arrayinstance =  await ArrayTesting.deployed();
    })
    it("Getting Array Elements",async()=>{
        //1, 0, 0, 0, 0, 0, 0, 0, 0, 0
        await arrayinstance.insert(1);
        // await arrayinstance.insert(0);
        // await arrayinstance.insert(0);
        // await arrayinstance.insert(0);
        // await arrayinstance.insert(0);
        // await arrayinstance.insert(0);
        // await arrayinstance.insert(0);
        // await arrayinstance.insert(0);
        // await arrayinstance.insert(0);
        // await arrayinstance.insert(0);
        
        const arrayBigN = await arrayinstance.getAll();
        const Elements = arrayBigN.map((Elements)=>Elements.toNumber());
        // console.log(Elements);
        assert.deepEqual(Elements,[1]);
    });


});

// const DarrayTesting  = artifacts.require("Darray");
 

// contract("Dynamic Array testing : ",() =>{
//     let Darray = null;
//     before("Darray testing",async()=>{
//         Darray = await DarrayTesting.deployed();
//     })
//     it("Inserting Element : ",async()=>{
//         await Darray.insert(1);
//         await Darray.insert(3);
//         await Darray.insert(2);
//         const l = await Darray.length();
//         // console.log(l.toNumber);

//         const arrayinstance  = await Darray.getAll();
//         const element = arrayinstance.map((element)=>element.toNumber());
//         console.log(element);
//         assert(l==3);
//         assert.deepEqual(element,[1,3,2]);
//     });
// })//