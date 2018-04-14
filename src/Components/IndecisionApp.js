import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }
    
    handleDeleteOptions = () => {
        this.setState(() => ({options: [] }))
    }

    handlePick = () => {
        let randomChoice = this.state.options[Math.floor(Math.random() * this.state.options.length)]
        this.setState(() => ( {selectedOption: randomChoice} ), () => console.log(this.state.selectedOption))
    }

    handleAddOption = option => {

        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        } 
        
        this.setState(prevState => ({options: prevState.options.concat(option)}))
    }

    handleDeleteOption = option => {
        this.setState(prevState => ( {options: prevState.options.filter( x => x !== option)} ) )
    }

    handleClearModal = () => {
        this.setState(() => ( {selectedOption: undefined} ))
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
    
            if (options) {
                this.setState(() => ( { options } ))
            }
        } catch (e) {
            //do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {

            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('saving data')

        }
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className='container'>
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteOption={this.handleDeleteOption}
                handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
                </div>
                <OptionModal
                selectedOption={this.state.selectedOption}
                handleClearModal={this.handleClearModal} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}