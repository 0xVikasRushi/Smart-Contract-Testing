//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.9.0;

contract SetGet {
    string public item;

    function set(string memory _item) public {
        item = _item;
    }

    function get() public view returns (string memory) {
        return item;
    } //
}
