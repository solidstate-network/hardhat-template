import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-docgen';
import 'hardhat-gas-reporter';
import 'hardhat-spdx-license-identifier';
import 'solidity-coverage';

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

export default {
  solidity: {
    version: '0.8.11',
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
      accounts: [PKEY_MAINNET],
    },

    testnet: {
      url: NODE_URL_TESTNET,
      accounts: [PKEY_TESTNET],
    },
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

  typechain: {
    alwaysGenerateOverloads: true,
  },
};
