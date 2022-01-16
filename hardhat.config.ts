// hardhat.config.js
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/types";

const { mainnetAccount, testnetAccount } = require('./.secrets.json');

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat", 
  solidity: {
      compilers: [{ version: "0.8.9", 
      settings: {
        optimizer : { enabled: true, runs: 1500}
      } 
    }],
  },
  networks: {
    testnet: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      gasPrice: 225000000000,
      accounts: [testnetAccount]
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      chainId: 43114,
      gasPrice: 225000000000,
      accounts: [mainnetAccount]
    }
  }
};
      
export default config;