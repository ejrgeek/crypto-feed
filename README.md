# CryptoFeed

[`Versão em Portugues`](README-br.md)

A social feed decentralized application (dApp) built with React/Next.js, integrated with the BSC Testnet ("Deploy") and a smart contract on the Ethereum Virtual Machine.

---## About the Project

Crypto Feed allows users to:

- Connect their Metamask or local wallets to a node using Anvil.
- Create a unique and immutable username.
- Post messages to the decentralized feed.
- Load paginated posts directly from the contract.

The smart contract uses Solidity to manage posts and usernames, ensuring security and decentralization.

---

## Funcionalidades

### Usuário Final
- **Conectar Wallet**: Usuários utilizam a Metamask para autenticação.
- **Criar Username**: Escolha um nome de usuário (não modificável).
- **Criar Post**: Publique mensagens de até 256 caracteres no feed.
- **Feed de Posts**: Veja e carregue mais posts paginados.

### Desenvolvedores
- **Front-end**: Construído com **React/Next.js** e estilizado com CSS Modules.
- **Back-end**: Contrato inteligente em **Solidity**, implementado na **BSC Testnet**.
- **Web3 Integração**: Comunicação entre o dApp e blockchain via biblioteca **web3.js**.

---## Usage
- Connect your Metamask Wallet.
- Create a Username (unique and immutable).
- Post messages in the feed.
- Scroll the page and load more posts.

---

## Technologies Used
- **React/Next.js** - User interface.
- **Solidity** - Smart contracts.
- **Truffle** - Deployment and testing.
- **Web3.js** - Connection between the dApp and blockchain.
- **Metamask** - Wallet for authentication and transactions.
- **Anvil** - Local node for testing
- **BSC Testnet** - Blockchain network used.

---

# Contribution
Contributions are welcome!

- Fork the project.
- Create a branch: `git checkout -b feat/my-feature`.
- Make a commit: `git commit -m "My new feature"`.
- Push: `git push -u origin feat/my-feature`.
- Open a **Pull Request**.