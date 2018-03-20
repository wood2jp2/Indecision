console.log('app.js is running')

// if statements
// ternary 
// and operators

//create app object (title / subtitle
//use title/subtitle in template
//render template

let app = {
    title: 'Indecision App',
    subtitle: 'by Josh Wood'
}

let templateThree = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
)

let template = (
    <div>
        <h2>Indecision</h2>
        <p>This is some info</p>
        <ol>
            <li>First</li>
            <li>Second</li>
        </ol>
    </div>
)    

//new variable for new template (templateTwo) JSX expression

//div => h1 (with text: your name) => p (age: 25) => location
//Render templateTwo

let user = {
    name: 'Josh',
    age: 25,
    location: 'Arlington'
}

let getLocation = location => location ? location : 'Unknown'

let templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)