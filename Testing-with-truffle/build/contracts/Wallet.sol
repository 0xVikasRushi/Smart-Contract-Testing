 // SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;
contract Wallet{
    address payable public  owner;

constructor(address payable _owner) public {
    owner = _owner;
}

function deposit() public payable {}

function balanceOf() public view returns (uint256) {
    return address(this).balance;
}
function send(address payable to,uint amount) public{
   if(msg.sender==owner){
    to.transfer(amount);
    return;
   }
    
    revert("you have no access to this contract  sending");
}
}
