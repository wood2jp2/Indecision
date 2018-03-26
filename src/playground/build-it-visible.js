class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(e) {
        e.preventDefault()
        this.setState(prevState => {
            return {
                visibility: !prevState.visibility
            }
        })
        console.log(this.state.visibility)
    }

    render() {
        return (
            <div>
                {this.state.visibility && <p>Visible</p>}
                <button onClick={this.handleToggleVisibility}>Toggle Visibility</button>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))