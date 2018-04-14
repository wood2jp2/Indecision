import React from 'react'
import Option from './Option'

const Options = props => (

        <div>
            {props.options.length === 0 && <p className='widget__message'>There are no options to display!</p>}
            <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button 
               onClick={props.handleDeleteOptions}
               className='button button--link'
            >Remove All</button>
            </div>
            {props.options && props.options.map((opt, i) => (
                <Option 
                key={i} 
                optionText={opt} 
                handleDeleteOption={props.handleDeleteOption}
                number={i+1}
                />
                ))}
        </div>
    )


export default Options