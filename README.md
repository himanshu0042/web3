# Blockchain Voting System

This project implements a decentralized voting system using blockchain technology. It consists of three main components: backend, blockchain, and frontend.

## Project Structure

```
blockchain-voting-system
├── backend                # Backend application
│   ├── src                # Source files for the backend
│   │   ├── controllers     # Controllers for handling requests
│   │   ├── models          # Data models
│   │   ├── routes          # API routes
│   │   ├── services        # Services for blockchain interaction
│   │   └── app.ts         # Entry point for the backend application
│   ├── package.json        # NPM configuration for backend
│   ├── tsconfig.json       # TypeScript configuration for backend
│   └── README.md           # Documentation for backend
├── blockchain             # Blockchain component
│   ├── contracts           # Smart contracts
│   ├── migrations          # Migration scripts for deploying contracts
│   ├── test                # Unit tests for contracts
│   ├── truffle-config.js   # Truffle configuration
│   └── README.md           # Documentation for blockchain
├── frontend               # Frontend application
│   ├── public              # Public assets
│   ├── src                 # Source files for the frontend
│   ├── package.json        # NPM configuration for frontend
│   ├── tsconfig.json       # TypeScript configuration for frontend
│   └── README.md           # Documentation for frontend
└── README.md               # Overall documentation for the project
```

## Features

- **Decentralized Voting**: Leverages blockchain technology to ensure transparency and security in the voting process.
- **User Registration**: Allows users to register and participate in the voting process.
- **Vote Casting**: Users can cast their votes securely through the application.
- **Smart Contract**: Implements the voting logic on the Ethereum blockchain.

## Getting Started

### Prerequisites

- Node.js
- Truffle
- Ganache (for local blockchain development)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd blockchain-voting-system
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install blockchain dependencies:
   ```
   cd blockchain
   npm install
   ```

4. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the local blockchain using Ganache.
2. Deploy the smart contracts:
   ```
   cd blockchain
   truffle migrate
   ```

3. Start the backend server:
   ```
   cd backend
   npm start
   ```

4. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

### License

This project is licensed under the MIT License. See the LICENSE file for details.