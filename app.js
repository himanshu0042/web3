class VotingApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidate: '',
            results: {}
        };
    }

    handleVote = (event) => {
        event.preventDefault();
        const { candidate, results } = this.state;
        if (candidate) {
            this.setState({
                results: {
                    ...results,
                    [candidate]: (results[candidate] || 0) + 1
                }
            });
        }
    };

    handleChange = (event) => {
        this.setState({ candidate: event.target.value });
    };

    render() {
        const { candidate, results } = this.state;
        return (
            <div>
                <header>
                    <h1>Blockchain Voting System</h1>
                </header>
                <main>
                    <section id="voting">
                        <h2>Vote Now</h2>
                        <form id="voteForm" onSubmit={this.handleVote}>
                            <label htmlFor="candidate">Choose a candidate:</label>
                            <select id="candidate" name="candidate" value={candidate} onChange={this.handleChange}>
                                <option value="">Select a candidate</option>
                                <option value="candidate1">Candidate 1</option>
                                <option value="candidate2">Candidate 2</option>
                                <option value="candidate3">Candidate 3</option>
                            </select>
                            <button type="submit">Submit Vote</button>
                        </form>
                    </section>
                    <section id="results">
                        <h2>Voting Results</h2>
                        <div id="resultsContainer">
                            {Object.keys(results).map((key) => (
                                <p key={key}>{key}: {results[key]} votes</p>
                            ))}
                        </div>
                    </section>
                </main>
                <footer>
                    <p>&copy; 2023 Blockchain Voting System</p>
                </footer>
            </div>
        );
    }
}

ReactDOM.render(<VotingApp />, document.getElementById('root'));
