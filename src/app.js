class IndecisionApp extends React.Component {

    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options
        }
    }
    
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
    
            if (options) {
                this.setState(() => ( { options } ))
            }
        } catch (e) {
            //do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {

            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('saving data')

        }
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    handleDeleteOptions() {
        this.setState(() => ({options: [] }))
    }

    handlePick() {
        let randomChoice = this.state.options[Math.floor(Math.random() * this.state.options.length)]
        alert(randomChoice)
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        } 
        
        this.setState(prevState => ({options: prevState.options.concat(option)}))
    }

    handleDeleteOption(option) {
        this.setState(prevState => ( {options: prevState.options.filter( x => x !== option)} ) )
    }

    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteOption={this.handleDeleteOption}
                handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = props => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        )
}

Header.defaultProps = {
    title: "Indecision"
}

const Action = props => {
        return (
            <div>
                <button 
                    disabled={!props.hasOptions} 
                    onClick={props.handlePick}
                >
                    What should I do?
                </button>
            </div>
        )
}

const Options = props => {
    let allOptions = props.options
    return (
        <div>
            {props.options.length === 0 && <p>There are no options to display!</p>}
            <button 
               onClick={props.handleDeleteOptions}
            >Remove All</button>
            {allOptions && allOptions.map((opt, i) => (
                <Option 
                key={i} 
                optionText={opt} 
                handleDeleteOption={props.handleDeleteOption}
                />
                ))}
        </div>
    )
}

const Option = props => {
    return (
        <div>
              Option: {props.optionText}
              <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}>
              
              Remove</button>
        </div>
    )    
}

class AddOption extends React.Component {

    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.option.value = ''
        }
        

    }

    render() {
        return (
            <div>

                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' placeholder='Your option...' />
                    <button>Add Option</button>
                </form>

            </div>
        )
    }
}

const User = props => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))