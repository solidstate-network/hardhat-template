import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-docgen';
import 'hardhat-gas-reporter';
import 'hardhat-spdx-license-identifier';
import 'solidity-coverage';

import Dotenv from 'dotenv';

Dotenv.config();

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
      url: `${process.env.NODE_URL_MAINNET}`,
      accounts: [`${process.env.PKEY_MAINNET}`],
    },

    testnet: {
      url: `${process.env.NODE_URL_TESTNET}`,
      accounts: [`${process.env.PKEY_TESTNET}`],
    },
  },

  docgen: {
    clear: true,
    runOnCompile: false,
  },

  gasReporter: {
    enabled: process.env.REPORT_GAS === 'true',
  },

  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },

  typechain: {
    alwaysGenerateOverloads: true,
  },
};
