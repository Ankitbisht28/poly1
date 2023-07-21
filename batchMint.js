const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = "85ef2c9a6e1bc71e0ae4984d8c3acbb2b2f6ba8b281a95af761a6c2930523c14";
  const networkAddress = "https://ethereum-goerli.publicnode.com";
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x2A2d5BD69e9aFEE93328eeC3a314ACDf334b13db";
  const AbstractNFT = await ethers.getContractFactory("AnimalArt", signer);
  const contract = await AbstractNFT.attach(contractAddress);

  // Manually set the gas limit for the transaction
  const overrides = {
    gasLimit: 300000, // Use an appropriate gas limit value
  };

  await contract.mint(5, overrides); // Pass the overrides parameter

  console.log("Tokens have been minted successfully");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
