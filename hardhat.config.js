require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts:  ['85ef2c9a6e1bc71e0ae4984d8c3acbb2b2f6ba8b281a95af761a6c2930523c14'],
    },
    goerli: {
      url: 'https://ethereum-goerli.publicnode.com',
      accounts:  ['85ef2c9a6e1bc71e0ae4984d8c3acbb2b2f6ba8b281a95af761a6c2930523c14'],
    },
  },
    // ...
    paths: {
      sources: "./contracts",
      artifacts: "./artifacts",
    },
    // ...
  };
  