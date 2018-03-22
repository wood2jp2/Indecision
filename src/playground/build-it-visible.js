console.log('cool')

let details = false

const clickButton = () => {
    details = !details
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={clickButton}>{details ? 'Hide Details' : 'Show Details'}</button>
            {details && <p>These are some details you can now see!</p>}
        </div>
    )

    ReactDOM.render(template, document.getElementById('app'))

}

render()