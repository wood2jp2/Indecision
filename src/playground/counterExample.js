let count = 0
const myId = 'someId'
const addOne = () => {
    count++
    renderCounterApp()
}
const minusOne = () => {
    count--
    renderCounterApp()
}
const setupResetFunction = () => {
    count = 0
    renderCounterApp()
}



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={setupResetFunction}>Reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()