import Web3 from "web3";
import contractAbi from "./ABI.json";


const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

if (!CONTRACT_ADDRESS) {
    console.error("Contract address not found. Please check your .env file.");
}

export async function login() {
    if (typeof window === "undefined") throw new Error("Metamask plugin not available in server environment");

    if (!window.ethereum) throw new Error("Metamask plugin not found");

    /* const web3 = new Web3(window.ethereum); */
    const web3 = new Web3("http://127.0.0.1:8545");

    const accounts = await web3.eth.requestAccounts();

    if (accounts.length === 0) throw new Error("No account found or not allowed to connect");

    localStorage.setItem("wallet", accounts[3]);

    return accounts[3];
}

function getContract() {
    /* const web3 = new Web3(window.ethereum); */
    const web3 = new Web3("http://127.0.0.1:8545");

    const from = localStorage.getItem("wallet");

    return new web3.eth.Contract(contractAbi, CONTRACT_ADDRESS, { from })
}

export async function createUsername(username) {
    if (username.length === 0) throw new Error("Username must be three or more characters long");
    if (username.length > 14) throw new Error("Username cannot exceed 14 characters");

    const contract = getContract();

    const result = await contract.methods.createUsername(username).send();

    return result;
}

export async function getUsernameCreatedEvent() {
    const contract = getContract();

    const userWallet = localStorage.getItem("wallet");

    contract.events.UsernameCreated({
        filter: { user: userWallet }
    })
    .on('data', event => {
        callback(event);
    });
}

export async function getUsername() {

    const userWallet = localStorage.getItem("wallet");

    if (userWallet.length === 0) throw new Error("Wallet Not Informed")

    const contract = getContract();

    const result = await contract.methods.users(userWallet).call();

    return result;
}

export async function createPost(postText) {
    if (postText.length === 0) throw new Error("Post text cannot be empty");
    if (postText.length > 256) throw new Error("Post text exceeds maximum length of 256 characters");

    const contract = getContract();

    const result = await contract.methods.createPost(postText).send();

    return result;
}

export async function getPostCreatedEvent() {
    const contract = getContract();

    const authorWallet = localStorage.getItem("wallet");

    contract.events.PostCreated({
        filter: {author: authorWallet},
        fromBlock: "latest"
    })
    .on('data', event => {
        callback(event);
    });
}

export async function getLastPost(page) {

    if (page === 0) page = 1;

    const contract = getContract();

    console.log("Antes de puxar os dados");

    const result = await contract.methods.getLastPosts(page).call();

    console.log("TESTE TESTE");

    return result;
    
}