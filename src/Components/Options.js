import React from 'react'
import Option from './Option'

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

export default Options