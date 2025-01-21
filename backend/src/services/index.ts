export class BlockchainService {
    private web3: any;
    private contract: any;

    constructor(provider: string, contractAddress: string, abi: any) {
        this.web3 = new (require('web3'))(new (require('web3')).providers.HttpProvider(provider));
        this.contract = new this.web3.eth.Contract(abi, contractAddress);
    }

    async getVotes(candidateId: string): Promise<number> {
        return await this.contract.methods.getVotes(candidateId).call();
    }

    async castVote(candidateId: string, voterAddress: string): Promise<any> {
        const accounts = await this.web3.eth.getAccounts();
        return await this.contract.methods.vote(candidateId).send({ from: voterAddress });
    }

    async registerVoter(voterAddress: string): Promise<any> {
        const accounts = await this.web3.eth.getAccounts();
        return await this.contract.methods.registerVoter(voterAddress).send({ from: accounts[0] });
    }
}