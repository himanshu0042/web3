module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    testnet: {
      host: "testnet.infura.io",
      port: 443,
      network_id: "3", // Ropsten
      provider: () => new HDWalletProvider(mnemonic, `https://testnet.infura.io/v3/YOUR_INFURA_PROJECT_ID`),
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify the Solidity version
    },
  },
  mocha: {
    timeout: 100000,
  },
};