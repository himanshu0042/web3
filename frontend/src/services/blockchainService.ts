import Web3 from 'web3';
import VotingContract from '../contracts/Voting.json';

const web3 = new Web3(window.ethereum);
let contractInstance;

export const connectToBlockchain = async () => {
    if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = VotingContract.networks[networkId];
        contractInstance = new web3.eth.Contract(
            VotingContract.abi,
            deployedNetwork && deployedNetwork.address,
        );
    } else {
        alert('Please install MetaMask!');
    }
};

export const castVote = async (candidateId) => {
    const accounts = await web3.eth.getAccounts();
    return contractInstance.methods.vote(candidateId).send({ from: accounts[0] });
};

export const getCandidates = async () => {
    return await contractInstance.methods.getCandidates().call();
};