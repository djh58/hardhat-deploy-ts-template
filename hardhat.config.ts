import { envconfig } from "./utils/config";
import { HardhatUserConfig, task } from "hardhat/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    rinkeby: {
      url: envconfig.rinkeby.provider_url,
      //   accounts: [`0x${envconfig.rinkeby.private_key}`],
    },
    mainnet: {
      url: envconfig.mainnet.provider_url,
      //   accounts: [`0x${envconfig.mainnet.private_key}`],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      rinkeby: `privatekey://${envconfig.rinkeby.private_key}`,
      mainnet: `privatekey://${envconfig.mainnet.private_key}`,
    },
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  contractSizer: {},
};

export default config;
