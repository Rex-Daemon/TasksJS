import React, { Component } from 'react'

export class AddTask extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const text = this.state.text
        if (text.trim() !== '') {
            this.props.addTask(text)
            this.setState({
                text: ''
            })
        }
    }

    getFormStyle = () => {
        return {
            textAlign: 'center',
            margin: '20px',
            boxShadow: '3px 3px 7px 1px rgba(0, 0, 0, 0.2)',
        }
    } 

    render() {
        return (
            <form className='row' style={this.getFormStyle()} onSubmit={this.onSubmit}>
                <input type='text' name='text' placeholder='Add Task' className='col-10' onChange={this.onChange} />
                <input type='submit' value='+' className='btn btn-primary btn-lg col-2' />
            </form>
        )
    }
}

export default AddTask
