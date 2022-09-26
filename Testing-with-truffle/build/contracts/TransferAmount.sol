//SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract TransferAmount{

    address public  owner;
    constructor(address  _owner) public {
        owner = _owner;
    }
    modifier Onlyowner() {
        require(owner==msg.sender,"only owner can deploy");
        _;
    }
    function send(address payable[] memory to, uint256[] memory amount) public payable Onlyowner{
    require(to.length == amount.length, "to must be same length as amount");
    for (uint256 i = 0; i < to.length; i++) {
        to[i].transfer(amount[i]); 
                                   
    }
    
}
}