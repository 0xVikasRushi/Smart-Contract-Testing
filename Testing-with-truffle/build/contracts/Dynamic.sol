//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.9.0;

contract Dynamic {
    uint256[] arr;

    // constructor() {
    //     arr.push(1);
    //     arr.push(2);
    //     arr.push(3);
    //     arr.push(4);
    //     arr.push(5);
    //     arr.push(6);
    //     arr.push(7);
    // }

    // function multiply(int256 id, int256 item) public {
    //     arr.push(id * item);
    // }
    function insert(uint256 id) public {
        arr.push(id);
    }

    function get(uint256 id) public view returns (uint256) {
        return arr[id];
    }

    function getAll() public view returns (uint256[] memory) {
        return arr;
    }

    function length() public view returns (uint256) {
        return arr.length;
    }
}
