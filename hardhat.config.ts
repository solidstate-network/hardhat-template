import hardhatToolboxMochaEthers from '@nomicfoundation/hardhat-toolbox-mocha-ethers';
import hardhatAccounts from '@solidstate/hardhat-accounts';
import hardhatContractSizer from '@solidstate/hardhat-contract-sizer';
import hardhatLicenseIdentifier from '@solidstate/hardhat-license-identifier';
import Dotenv from 'dotenv';
import { configVariable, type HardhatUserConfig } from 'hardhat/config';

Dotenv.config();

const config: HardhatUserConfig = {
  plugins: [
    hardhatToolboxMochaEthers,
    hardhatAccounts,
    hardhatContractSizer,
    hardhatLicenseIdentifier,
  ],

  solidity: {
    version: '0.8.29',
    settings: {
      evmVersion: 'cancun',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    mainnet: {
      type: 'http',
      url: configVariable('NODE_URL_MAINNET'),
      accounts: [configVariable('PKEY_MAINNET')],
    },

    testnet: {
      type: 'http',
      url: configVariable('NODE_URL_TESTNET'),
      accounts: [configVariable('PKEY_TESTNET')],
    },
  },

  verify: {
    etherscan: {
      apiKey: configVariable('API_KEY_ETHERSCAN'),
    },
  },

  licenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
};

export default config;
