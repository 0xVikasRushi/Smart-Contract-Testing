//SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract Even {
    function checkEven(uint256 a) public pure returns (uint256) {
        require(a % 2 == 0, "a is odd");
        return a;
    }
}
