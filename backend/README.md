# Blockchain Voting System Backend

This document provides an overview of the backend setup for the Blockchain Voting System project.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [API Endpoints](#api-endpoints)
5. [License](#license)

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- TypeScript (version 4 or higher)
- Express.js

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/blockchain-voting-system.git
   ```

2. Navigate to the backend directory:
   ```
   cd blockchain-voting-system/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the backend server, run the following command:
```
npm start
```

The server will run on `http://localhost:3000`.

## API Endpoints

- **POST /register**: Register a new voter.
- **POST /vote**: Cast a vote.

Refer to the `controllers` for detailed information on request and response formats.

## License

This project is licensed under the MIT License. See the LICENSE file for details.