# Crypto Feed dApp

[`English Version`](README.md)

Uma aplicação descentralizada (dApp) de feed social construída com React/Next.js, integrada com a BSC Testnet ("Deploy") e um contrato inteligente na Ethereum Virtual Machine.

---

## Sobre o Projeto

O Crypto Feed permite aos usuários:

- Conectar suas wallets Metamask ou local por um nó usando Anvil.
- Criar um username único e imutável.
- Postar mensagens no feed descentralizado.
- Carregar posts paginados diretamente do contrato.

O contrato inteligente utiliza Solidity para gerenciar os posts e usernames, garantindo segurança e descentralização.

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

---

## Uso
- Conecte sua Wallet Metamask.
- Crie um Username (único e imutável).
- Poste mensagens no feed.
- Role a página e carregue mais posts.

---

## Tecnologias Utilizadas
- **React/Next.js** - Interface do usuário.
- **Solidity** - Contratos inteligentes.
- **Truffle** - Deploy e testes.
- **Web3.js** - Conexão entre o dApp e blockchain.
- **Metamask** - Carteira para autenticação e transações.
- **Anvil** - Nó local para testes
- **BSC Testnet** - Rede blockchain utilizada.

---

# Contribuição
Contribuições são bem-vindas!

- Fork o projeto.
- Crie uma branch: `git checkout -b feat/minha-feature`.
- Faça um commit: `git commit -m "Minha nova feature"`.
- Push: `git push -u origin feat/minha-feature`.
- Abra um **Pull Request**.
