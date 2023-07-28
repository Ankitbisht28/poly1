const hre = require("hardhat");
const fs = require('fs');

async function main() {
  // Get the contract factory
  const AnimalNFT = await hre.ethers.getContractFactory("AnimalArt");

  // Deploy the contract with the desired name and symbol
  const nft = await AnimalNFT.deploy("AnimalArt", "ANK");

  // Wait for the contract to be deployed
  await nft.deployed();

  // Log the contract address
  console.log("NFT contract has been deployed to:", nft.address);

  // Export the addresses
  fs.writeFileSync('metadata/contractAddress.js', `
    export const nftAddress = "${nft.address}"
  `)
}

// Execute the deployment function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
