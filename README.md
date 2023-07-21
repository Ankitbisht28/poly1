AIM(Polygon-Advanced-Module-1):-
This is the final project in Polygon-Advanced and in this project, we are tasked to deploy an NFT collection on the Ethereum blockchain, Map the collection to Polygon, and Transfer assets over via the Polygon Bridge.

Getting Started:-
I have made a AnimalArt" contract allows users to mint animal-themed NFTs by calling the mint function and sending the required Ether. The contract owner has additional functionalities to manage the contract, update the prompt and description, set metadata attributes, and withdraw the contract's balance.

Steps.
1.Navigate to your project directory and open the terminal.
2.use command (npm install) After installing the dependencies.
3.run the test file by using the following command: npx hardhat test.
4.Deploying the ERC721 Contract Before deploying, make sure to rename ".env.example" to ".env" and provide your wallet private key where required i.e. "PRIVATE_KEY= 'your wallet private key'".
5.Run the following command to deploy the ERC721 contract to the Goerli Ethereum Testnet: npx hardhat run scripts/deploy.js --network goerli. It will give us a prompt that the "NFT contract has been deployed to:'ANY ADDRESS'". Copy this address and paste this into the batchMint.js file under the const contractAddress section.
6.Run the following command to batch-mint NFTs using the deployed ERC721 contract: npx hardhat run scripts/batchMint.js --network goerli. After successful completion it will give a prompt as " Tokens have been minted successfully".
7. Now we have to transfer our ERC721 from the ethereum georli to polygon mumbai using the command: npx hardhat run scripts/batchtransfer.js --network goerli. It will give us a prompt as "The Approval has been confirmed".

LICENSE:
Licensed under the MIT License.

AUTHOR:-
Ankit Bisht
