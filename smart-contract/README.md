# CryptoFeed Smart Contract

[`Versão em Portugues`](README-br.md)

### Description

**CryptoFeed** is a smart contract project developed in Solidity that simulates a decentralized social network, where users can create posts and change their usernames. The main focus of this project was to learn and explore writing tests and emitting events in smart contracts.

---

### Features

1. Username Registration

    - Users can change their usernames.
    - Restrictions: the name must have at least 3 characters.

2. Post Creation

    - Users can create posts with a text and an associated username.
    - Event emission (PostCreated) whenever a new post is created.

3. Post Pagination

    - Query posts with pagination support, limiting results per page.

---

### Project Structure

#### Smart Contract
The main contract **CryptoFeed** has:

- A user mapping, associating addresses to usernames.
- A post mapping, associating IDs to post content.
- A PAGE_SIZE constant to control the size of the results pages.
- Main functions:
    - changeUsername: changes the username.
    - createPost: creates a post and emits the PostCreated event.
    - getLastPosts: returns the most recent posts on a specific page.

#### Events
The contract emits the PostCreated event with the following data:
- id: ID of the created post.
- author: address of the post author.
- username: name of the author at the time of creation.
- postedOn: timestamp of creation.

#### Tests
JavaScript tests were written using the Truffle Framework to:

- Ensure that changing the username works correctly.
- Validate the creation of posts and the association of the username.
- Test pagination scenarios and invalid pages.
- Verify that errors and restrictions in the contract work correctly.

---

### Tools Used
- [Truffle](https://archive.trufflesuite.com/): Development tool for compiling, testing, and deploying smart contracts.
- [Anvil](https://getfoundry.sh/): Local blockchain node simulator for development and testing.

---

### How to Run

#### Prerequisites

Make sure the following programs are installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Truffle](https://archive.trufflesuite.com/)
- [Anvil](https://getfoundry.sh/)

#### Execution

1. Clone the repository:
```bash
git clone <REPOSITORY_URL>
cd crypto-feed/smart-contract/
```

2. Run local node:
```bash
anvil
```

3. Compile and Deploy:
```bash
truffle deploy
```

3. Run tests:
```bash
truffle test
```

### Developer:
- Erlon Dantas