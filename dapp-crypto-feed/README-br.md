# Crypto Feed dApp

[`English Version`](README.md)

## Descrição do Projeto

Crypto Feed é uma aplicação descentralizada (dApp) construída sobre a blockchain, permitindo que os usuários criem usernames únicos e publiquem posts curtos de até 256 caracteres. Utilizando a rede BSC Testnet, o dApp conecta carteiras digitais (Metamask) ao frontend React, interagindo diretamente com o contrato inteligente escrito em Solidity.

---

## Contrato Inteligente

O contrato inteligente gerencia as funcionalidades principais do dApp, incluindo:
- **Criar usernames**: Cada usuário pode registrar um nome exclusivo entre 3 e 14 caracteres.
- **Criar posts**: Um usuário pode publicar textos curtos associados ao seu username.
- **Paginação**: Posts são retornados em páginas de 10 itens cada.

---

## Pré-requisitos

Antes de configurar o projeto, certifique-se de ter os seguintes itens instalados:

- **Node.js** (>= 18.x)
- **npm** ou **yarn**
- **Metamask** (extensão do navegador)
- **Anvil** (ou outra blockchain de teste local) ou acesso à **BSC Testnet**

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone <URL do repositório>
   ```

2. Instale as dependências do frontend:
   ```bash
   cd dapp-crypto-feed
   npm install
   ```

3. Crie um .env com o endereço do contrato

---

## Como Executar o Projeto

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```

3. Certifique-se de que sua carteira Metamask está configurada para a rede BSC Testnet ou em um nó local.

---

## Estrutura do Frontend

O frontend foi desenvolvido utilizando **React com Next.js** e interage com o contrato inteligente usando a biblioteca **web3js**. As principais funcionalidades incluem:

- **Conectar Wallet**: Usuários podem conectar suas carteiras Metamask.
- **Criar Username**: Registra um username único na blockchain.
- **Criar Post**: Publica um texto curto associado ao username do usuário.
- **Feed de Posts**: Lista os posts de forma paginada, puxando os dados do contrato inteligente.

---

## Principais Componentes

### Web3Service.js
Contém todas as funções para interação com o contrato inteligente, como `login`, `createUsername`, `createPost` e `getLastPost`.

### page.js
Página principal que exibe o formulário de criação de posts, o feed e botões para criar usernames e conectar a carteira.

### PostFeed.js
Componente que renderiza cada post no feed.

---

## Funções do Contrato Inteligente

### `createUsername(string newUsername)`
Permite que os usuários criem usernames únicos entre 3 e 14 caracteres. 
- **Requisitos:** O usuário ainda não deve ter um username criado.
- **Eventos:** `UsernameCreated`.

### `createPost(string text)`
Permite que usuários publiquem textos curtos de até 256 caracteres.
- **Requisitos:** O usuário deve ter um username já registrado.
- **Eventos:** `PostCreated`.

### `getLastPosts(uint page)`
Retorna os posts de uma página específica com até 10 posts por página.
- **Requisitos:** O número da página deve ser maior que 0.

---

## Paginação no Feed

A função `getLastPosts` do contrato inteligente é usada para buscar os posts paginados. No frontend, o estado `currentPage` gerencia a página atual, permitindo a funcionalidade de **"Load More"**.

## Tecnologias Utilizadas

- **Solidity**: Desenvolvimento do contrato inteligente.
- **React com Next.js**: Interface do usuário.
- **web3js.js**: Interação com a blockchain.
- **BSC Testnet**: Rede blockchain utilizada.
- **Metamask**: Integração de carteira.
- **Anvil**: Nó local para testes.

## Melhorias Possíveis

- Adicionar suporte para edição de posts.
- Implementar um sistema de likes para posts.
- Suporte para troca de usernames.
- Adicionar foto de perfil gerada a partir da carteira.

---

### Desenvolvedor:
- Erlon Dantas