import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './Components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const Layout = props => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    )
}

const template = (
        <div>
            <h1>Page Title</h1>
            <p>This is my page</p>
        </div>
    )



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

