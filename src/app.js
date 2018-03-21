console.log('app.js is running')

const app = {
    title: 'Indecision App',
    subtitle: 'by Josh Wood',
    options: []
}

const onFormSubmit = e => {
    e.preventDefault()

    const option = e.target.elements.option.value
    option && app.options.push(option)
    e.target.elements.option.value = ''
    render()
}

const removeAllItems = () => {
    app.options = []
    render()
}

const appRoot = document.getElementById('app')


const render = () => {
    const template = (
        <div>
            <h2>{app.title}</h2>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAllItems}>Remove All</button>
            <ol>
            {app.options.map((option, i) => <li key={i}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    )    
    
    
    ReactDOM.render(template, appRoot)
}

render()