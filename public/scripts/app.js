'use strict';

console.log('app.js is running');

// if statements
// ternary 
// and operators

//create app object (title / subtitle
//use title/subtitle in template
//render template

var app = {
    title: 'Indecision App',
    subtitle: 'by Josh Wood'
};

var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        'Indecision'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'First'
        ),
        React.createElement(
            'li',
            null,
            'Second'
        )
    )
);

//new variable for new template (templateTwo) JSX expression

//div => h1 (with text: your name) => p (age: 25) => location
//Render templateTwo

var user = {
    name: 'Josh',
    age: 25,
    location: 'Arlington'
};

var getLocation = function getLocation(location) {
    return location ? location : 'Unknown';
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
