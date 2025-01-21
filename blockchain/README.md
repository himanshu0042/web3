# Blockchain Voting System

This directory contains the blockchain component of the Blockchain Voting System project. It includes the smart contracts, migration scripts, and tests necessary for the voting functionality.

## Directory Structure

- **contracts/**: Contains the Solidity smart contracts for the voting system.
  - `Voting.sol`: The main smart contract that implements the voting logic.

- **migrations/**: Contains migration scripts for deploying the smart contracts to the blockchain.
  - `1_initial_migration.js`: A script to deploy the Voting contract.

- **test/**: Contains unit tests for the smart contracts to ensure their functionality.
  - `voting.test.js`: Tests for the Voting smart contract.

- **truffle-config.js**: Configuration file for Truffle, specifying network settings and compiler options.

## Getting Started

1. **Install Dependencies**: Make sure you have Node.js and Truffle installed. Run the following command to install the necessary dependencies:

   ```
   npm install
   ```

2. **Compile Contracts**: Compile the smart contracts using Truffle:

   ```
   truffle compile
   ```

3. **Deploy Contracts**: Deploy the contracts to your desired network (e.g., Ganache) using:

   ```
   truffle migrate
   ```

4. **Run Tests**: Execute the tests to ensure everything is functioning correctly:

   ```
   truffle test
   ```

## Additional Information

For more details on how to interact with the smart contracts, refer to the documentation in the backend and frontend directories.