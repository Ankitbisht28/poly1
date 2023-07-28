// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AnimalArt is ERC721Enumerable, Ownable {
    uint256 public constant maxQuantity = 5;
    uint256 private totalMinted;
    string public prompt = "Create a upgraded nft for animals making them look cool and attaractive.";
    string public promptDescription = "Make a captivating Abstract of animals nft with a cool and attaractive way. ";
    string private baseUrl = "https://gateway.pinata.cloud/ipfs/QmXD2pfNkdYEsCSHB53wgrgEfbcWktXi21zz913imPstqm/";

    mapping(address => uint256) private tokensMinted;
    mapping(uint256 => string) private tokenAttributes;

    event NFTMinted(address indexed minter, uint256 tokenId);

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {}

    function mint(uint256 quantity) external payable {
        require(quantity > 0, "Quantity must be greater than zero");
        require(totalMinted + quantity <= maxQuantity, "Exceeds maximum minting quantity");
     
        for (uint256 i = 0; i < quantity; i++) {
            totalMinted++;
            uint256 tokenId = totalMinted;
            tokensMinted[msg.sender]++;
            _mint(msg.sender, tokenId);
            tokenAttributes[tokenId] = ""; 
            emit NFTMinted(msg.sender, tokenId);
        }
    }

    function setBaseURI(string memory newBaseUrl) external onlyOwner {
        baseUrl = newBaseUrl;
    }

    function setPrompt(string memory _prompt, string memory _promptDescription) external onlyOwner {
        prompt = _prompt;
        promptDescription = _promptDescription;
    }

    function updatePromptDescription(string memory newDescription) external onlyOwner {
        promptDescription = newDescription;
    }

    function setTokenAttributes(uint256 tokenId, string memory attributes) external onlyOwner {
        require(_exists(tokenId), "Invalid tokenId");
        tokenAttributes[tokenId] = attributes;
    }

    function getTokenAttributes(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "Invalid tokenId");
        return tokenAttributes[tokenId];
    }

    function totalSupply() public view override returns (uint256) {
        return totalMinted;
    }

    function tokensMintedByAddress(address account) external view returns (uint256) {
        return tokensMinted[account];
    }

    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    function withdraw() external onlyOwner {
        require(address(this).balance > 0, "Contract balance is zero");
        payable(owner()).transfer(address(this).balance);
    }
}
