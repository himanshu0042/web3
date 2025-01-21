const Voting = artifacts.require("Voting");

contract("Voting", (accounts) => {
    let votingInstance;

    beforeEach(async () => {
        votingInstance = await Voting.new();
    });

    it("should allow a voter to register", async () => {
        await votingInstance.registerVoter(accounts[1]);
        const isRegistered = await votingInstance.voters(accounts[1]);
        assert.equal(isRegistered, true, "Voter should be registered");
    });

    it("should allow a registered voter to cast a vote", async () => {
        await votingInstance.registerVoter(accounts[1]);
        await votingInstance.castVote(1, { from: accounts[1] });
        const voteCount = await votingInstance.getVoteCount(1);
        assert.equal(voteCount.toNumber(), 1, "Vote count should be 1 for candidate 1");
    });

    it("should not allow an unregistered voter to cast a vote", async () => {
        try {
            await votingInstance.castVote(1, { from: accounts[2] });
            assert.fail("Unregistered voter should not be able to cast a vote");
        } catch (error) {
            assert.include(error.message, "revert", "Error message should contain revert");
        }
    });

    it("should not allow a voter to vote more than once", async () => {
        await votingInstance.registerVoter(accounts[1]);
        await votingInstance.castVote(1, { from: accounts[1] });
        try {
            await votingInstance.castVote(1, { from: accounts[1] });
            assert.fail("Voter should not be able to vote more than once");
        } catch (error) {
            assert.include(error.message, "revert", "Error message should contain revert");
        }
    });
});