import React from 'react'
import Option from './Option'

const Options = props => (
        <div>
            {props.options.length === 0 && <p>There are no options to display!</p>}
            <button 
               onClick={props.handleDeleteOptions}
               className='button button--link'
            >Remove All</button>
            {props.options && props.options.map((opt, i) => (
                <Option 
                key={i} 
                optionText={opt} 
                handleDeleteOption={props.handleDeleteOption}
                />
                ))}
        </div>
    )


export default Options