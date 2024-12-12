# CryptoFeed Smart Contract

[`English Version`](README.md)

### Descrição

**CryptoFeed** é um projeto de contrato inteligente desenvolvido em Solidity que simula uma rede social descentralizada, onde usuários podem criar postagens e alterar seus nomes de usuário. O foco principal deste projeto foi aprender e explorar a escrita de testes e emissão de eventos em contratos inteligentes.

---

### Funcionalidades

1. Cadastro de Nome de Usuário

    -   Usuários podem alterar seus nomes de usuário.
    -   Restrições: o nome deve ter pelo menos 3 caracteres.

2. Criação de Postagens

    -   Os usuários podem criar postagens com um texto e um nome de usuário associado.
    -   Emissão de evento (PostCreated) sempre que uma nova postagem é criada.

3. Paginação de Postagens

    -   Consulta das postagens com suporte à paginação, limitando os resultados por página.

---

### Estrutura do Projeto

#### Smart Contract
O contrato principal **CryptoFeed** possui:

-   Um mapeamento de usuários, associando endereços a nomes de usuário.
-   Um mapeamento de postagens, associando IDs a conteúdos de post.
-   Uma constante PAGE_SIZE para controlar o tamanho das páginas de resultados.
-   Funções principais:
    -   changeUsername: altera o nome do usuário.
    -   createPost: cria uma postagem e emite o evento PostCreated.
    -   getLastPosts: retorna as postagens mais recentes em uma página específica.

#### Eventos
O contrato emite o evento PostCreated com os seguintes dados:
-   id: ID do post criado.
-   author: endereço do autor do post.
-   username: nome do autor no momento da criação.
-   postedOn: timestamp da criação.


#### Testes
Foram escritos testes em JavaScript usando o Truffle Framework para:

-   Garantir que a alteração de nome de usuário funcione corretamente.
-   Validar a criação de postagens e a associação do nome de usuário.
-   Testar cenários de paginação e páginas inválidas.
-   Verificar o correto funcionamento de erros e restrições no contrato.

---

### Ferramentas Utilizadas
-   [Truffle](https://archive.trufflesuite.com/): Ferramenta de desenvolvimento para compilar, testar e fazer deploy de contratos inteligentes.
-   [Anvil](https://getfoundry.sh/): Simulador de nó local da blockchain para desenvolvimento e testes.

---

### Como Executar

#### Pré-requisitos

Certifique-se de que os seguintes programas estão instalados:

-   [Node.js](https://nodejs.org/) (LTS recomendado)
-   [Truffle](https://archive.trufflesuite.com/)
-   [Anvil](https://getfoundry.sh/)

#### Execução

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd crypto-feed/smart-contract/
```

2. Executar nó local:
```bash
anvil
```

3. Compilar e fazer Deploy:
```bash
truffle deploy
```

3. Rodar testes:
```bash
truffle test
```

### Desenvolvedor:
- Erlon Dantas
