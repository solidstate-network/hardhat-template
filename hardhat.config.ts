import '@nomicfoundation/hardhat-chai-matchers';
import '@nomicfoundation/hardhat-ethers';
import '@nomicfoundation/hardhat-verify';
import '@solidstate/hardhat-accounts';
import '@typechain/hardhat';
import 'hardhat-contract-sizer';
import 'hardhat-docgen';
import 'hardhat-gas-reporter';
import 'hardhat-spdx-license-identifier';
import 'solidity-coverage';
import { HardhatUserConfig } from 'hardhat/types';

import Dotenv from 'dotenv';

Dotenv.config();

const {
  API_KEY_ETHERSCAN,
  NODE_URL_MAINNET,
  NODE_URL_TESTNET,
  PKEY_MAINNET,
  PKEY_TESTNET,
  REPORT_GAS,
} = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.21',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    mainnet: {
      url: NODE_URL_MAINNET,
      accounts: [`${PKEY_MAINNET}`],
    },

    testnet: {
      url: NODE_URL_TESTNET,
      accounts: [`${PKEY_TESTNET}`],
    },
  },

  contractSizer: {
    runOnCompile: true,
  },

  docgen: {
    clear: true,
    runOnCompile: false,
  },

  etherscan: {
    apiKey: API_KEY_ETHERSCAN,
  },

  gasReporter: {
    enabled: REPORT_GAS === 'true',
  },

  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
};

export default config;
