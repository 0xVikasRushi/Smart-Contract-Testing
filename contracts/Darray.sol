//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.9.0;

contract Darray {
    uint256[] public arr; //10 20

    function insert(uint256 id) public {
        arr.push(id);
    }

    function length() public view returns (uint256) {
        return arr.length;
    }

    function getAll() public view returns (uint256[] memory) {
        return arr;
    }
}
