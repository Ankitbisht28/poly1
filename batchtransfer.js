const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = "85ef2c9a6e1bc71e0ae4984d8c3acbb2b2f6ba8b281a95af761a6c2930523c14";
  const networkAddress = "https://ethereum-goerli.publicnode.com";
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x2CBaF079fFA3FE68d000E2d0672a7B97cb810224";
  const AbstractNFT = await ethers.getContractFactory("AnimalArt", signer);
  const contract = await AbstractNFT.attach(contractAddress);

  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt("FXRoot", fxRootAddress); // Fix: Correct ABI name

  const tokenIds = [0, 1, 2, 3, 4];

  const approveTx = await contract.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("The Approval has been confirmed");

  for (let i = 0; i < tokenIds.length; i++) {
    const depositTx = await fxRoot.connect(signer).deposit(
      contract.address,
      contract.address,
      tokenIds[i],
      "0x6566"
    );
    await depositTx.wait();
  }

  console.log("Approved and deposited");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
