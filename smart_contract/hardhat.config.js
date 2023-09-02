require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/uotWBZTiRyc7uhNhxW5a3hm8E4mRMfXT',
      accounts: ['e78502eaea4a49d05bf6ab89d2107a304ff767b5b24f5b2d1c09e5dcaa626c37']
    }
  }
};
