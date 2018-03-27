class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }

    handleAddOne() {
        this.setState(prevState => { 
            return {
                count: prevState.count+1
            }
        })
    }
    handleMinusOne() {
        this.setState(prevState => {
           return {
            count: prevState.count-1
           } 
        })
    }
    handleReset() {
        // doesn't need access to 'prevState' values
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    componentWillMount() {
        if (this.state.count) {
            localStorage.getItem('count')
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
            localStorage.setItem('count', this.state.count)
        }
    }

    componentDidMount() {
        const intCount = parseInt(localStorage.getItem('count'))
        if (!isNaN(intCount)) {
            this.setState(() => ({ count: intCount }))
        }
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Counter count={-321} />, document.getElementById('app'))

// let count = 0
// const myId = 'someId'
// const addOne = () => {
//     count++
//     renderCounterApp()
// }
// const minusOne = () => {
//     count--
//     renderCounterApp()
// }
// const setupResetFunction = () => {
//     count = 0
//     renderCounterApp()
// }



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={setupResetFunction}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()