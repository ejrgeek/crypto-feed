# CryptoFeed

[`Versão em Portugues`](README-br.md)

## Project Description

Crypto Feed is a decentralized application (dApp) built on the blockchain, allowing users to create unique usernames and publish short posts of up to 256 characters. Using the BSC Testnet network, the dApp connects digital wallets (Metamask) to the React frontend, interacting directly with the smart contract written in Solidity.

---

## Smart Contract

The smart contract manages the main functionalities of the dApp, including:
- **Create usernames**: Each user can register a unique name between 3 and 14 characters.
- **Create posts**: A user can publish short texts associated with their username.
- **Pagination**: Posts are returned in pages of 10 items each.

---

## Prerequisites

Before setting up the project, make sure you have the following installed:

- **Node.js** (>= 18.x)
- **npm** or **yarn**
- **Metamask** (browser extension)
- **Anvil** (or other local test blockchain) or access to **BSC Testnet**

---

## Installation

1. Clone the repository:
```bash
git clone <repository URL>
```

2. Install the frontend dependencies:
```bash
cd dapp-crypto-feed
npm install
```

3. Create a .env with the contract address

---

## How to Run the Project

1. Start the development server:
```bash
npm run dev
```

2. Open a web browser and go to:
```
http://localhost:3000
```

3. Make sure your Metamask wallet is configured for the BSC Testnet network or on a local node.

---

## Frontend Structure

The frontend was developed using **React with Next.js** and interacts with the smart contract using the **web3js** library. The main features include:

- **Connect Wallet**: Users can connect their Metamask wallets.
- **Create Username**: Registers a unique username on the blockchain.
- **Create Post**: Publishes a short text associated with the user's username.
- **Post Feed**: Lists posts in a paginated manner, pulling data from the smart contract.

---

## Main Components

### Web3Service.js
Contains all functions for interacting with the smart contract, such as `login`, `createUsername`, `createPost` and `getLastPost`.

### page.js
Main page that displays the post creation form, the feed and buttons for creating usernames and connecting the wallet.

### PostFeed.js
Component that renders each post in the feed.

---

## Smart Contract Functions

### `createUsername(string newUsername)`
Allows users to create unique usernames between 3 and 14 characters long.

- **Requirements:** The user must not already have a username created.

- **Events:** `UsernameCreated`.

### `createPost(string text)`
Allows users to post short texts of up to 256 characters.
- **Requirements:** The user must have a username already registered.
- **Events:** `PostCreated`.

### `getLastPosts(uint page)`
Returns the posts of a specific page with up to 10 posts per page.
- **Requirements:** The page number must be greater than 0.

---

## Pagination in the Feed

The `getLastPosts` function of the smart contract is used to fetch the paginated posts. In the frontend, the `currentPage` state manages the current page, enabling the **"Load More"** functionality.

## Technologies Used

- **Solidity**: Development of the smart contract.
- **React with Next.js**: User interface.
- **web3js.js**: Interaction with the blockchain.
- **BSC Testnet**: Blockchain network used.
- **Metamask**: Wallet integration.
- **Anvil**: Local node for testing.

## Possible Improvements

- Add support for editing posts.
- Implement a like system for posts.
- Support for changing usernames.
- Add profile picture generated from the wallet.

---

### Developer:
- Erlon Dantas