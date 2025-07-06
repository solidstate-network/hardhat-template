import HardhatEthers from '@nomicfoundation/hardhat-ethers';
import HardhatEthersChaiMatchers from '@nomicfoundation/hardhat-ethers-chai-matchers';
import HardhatTypechain from '@nomicfoundation/hardhat-typechain';
import HardhatVerify from '@nomicfoundation/hardhat-verify';
import HardhatAccounts from '@solidstate/hardhat-accounts';
import HardhatContractSizer from '@solidstate/hardhat-contract-sizer';
import HardhatLicenseIdentifier from '@solidstate/hardhat-license-identifier';
import Dotenv from 'dotenv';
import { configVariable, type HardhatUserConfig } from 'hardhat/config';

Dotenv.config();

const config: HardhatUserConfig = {
  plugins: [
    HardhatEthers,
    HardhatEthersChaiMatchers,
    HardhatTypechain,
    HardhatVerify,
    HardhatAccounts,
    HardhatContractSizer,
    HardhatLicenseIdentifier,
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

  contractSizer: {
    runOnCompile: true,
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
