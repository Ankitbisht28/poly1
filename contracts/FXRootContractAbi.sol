// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract FXRoot {
    address public stateSender;

    constructor(address _stateSender) {
        stateSender = _stateSender;
    }

    function fxChild() public pure returns (address) {
        return address(0); 
    }

    function sendMessageToChild(address _receiver, bytes calldata _data) public {
    }

    function setFxChild(address _fxChild) public {
    }
function deposit(address _contractAddress, address _to, uint256 _tokenId, bytes calldata _data) external {
    // ... implementation to handle the deposit ...
}
}
