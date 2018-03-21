'use strict';

console.log('app.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'by Josh Wood',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    option && app.options.push(option);
    e.target.elements.option.value = '';
    render();
};

var removeAllItems = function removeAllItems() {
    app.options = [];
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            app.title
        ),
        React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No Options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAllItems },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option, i) {
                return React.createElement(
                    'li',
                    { key: i },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
