class IndecisionApp extends React.Component {

    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'
        const optionsArray = ['Thing 1', 'Thing 2', 'Thing Three']
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={optionsArray}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        console.log('handle pick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    
    render() {
        let allOptions = this.props.options
        return (
            <div>
                {allOptions && allOptions.map((opt, i) => <Option key={i} optionText={opt} />)}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>Add Option Component</p>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))