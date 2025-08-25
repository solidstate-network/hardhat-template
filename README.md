# Solidstate Smart Contract Project

> Note: This repository was generated from a template or is the template itself. To set up a new project, set the missing data marked "TODO" in `package.json` and remove this notice.

This project is built with [Solidstate](https://github.com/solidstate-network). See the [solidstate-solidity](https://github.com/solidstate-network/solidstate-solidity) documentation for information about contract integration and testing.

## Development

Install dependencies via Pnpm:

```bash
pnpm install
```

Setup Husky to format code on commit:

```bash
pnpm prepare
```

Compile contracts via Hardhat:

```bash
pnpm hardhat compile
```

The Hardhat environment relies on the following environment variables. The `dotenv` package will attempt to read them from the `.env` and `.env.secret` files, if they are present.

| Key                 | Description                                                              |
| ------------------- | ------------------------------------------------------------------------ |
| `API_KEY_ETHERSCAN` | [Etherscan](https://etherscan.io//) API key for source code verification |
| `NODE_URL_MAINNET`  | JSON-RPC node URL for `mainnet` network                                  |
| `NODE_URL_TESTNET`  | JSON-RPC node URL for `testnet` network                                  |
| `PKEY_TESTNET`      | private key for test/development use on `testnet` network                |
| `PKEY_MAINNET`      | private key for production use on `mainnet` network                      |
| `REPORT_GAS`        | if `true`, a gas report will be generated after running tests            |

### Networks

By default, Hardhat uses the Hardhat Network in-process. Two additional networks, `mainnet` and `testnet` are available, and their behavior is determined by the configuration of environment variables.

### Testing

Test contracts via Hardhat:

```bash
pnpm hardhat test
```
