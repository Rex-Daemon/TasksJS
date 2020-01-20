import React from 'react'

function TaskItem(props) {

    const { id, text } = props.task

    // Styles
    const itemStyle = {
        height: '75px',
        background: '#ffffff',
        fontSize: '20px',
        padding: '10px 25px',
        margin: '20px',
        lineHeight: '50px',
        borderRadius: '10px',
        boxShadow: '3px 3px 7px 1px rgba(0, 0, 0, 0.2)',
    }

    const checkboxStyle = {
        height: '35px',
        width: '35px',
        marginTop: '10px',
        padding: '0px',
        
    }

    const textStyle = {
        marginTop: '2px',
        color: props.task.completed ? '#6F6F6F' : '#000000',
        textDecoration: props.task.completed ? 'line-through' : 'none'
    }

    const deleteStyle = {
        height: '35px',
        width: '35px',
        marginTop: '10px',
        padding: '0px',
        borderRadius: '25px',

    }

    return (
        <div style={itemStyle} className='row'>
            <input className='col-1' style={checkboxStyle} type='checkbox' onChange={() => props.toggleComplete(id)} />
            <p className='col-10' style={textStyle} >{text}</p>
            <button className='col-1 btn btn-danger' style={deleteStyle} onClick={() => props.deleteTask(id)}>X</button>
        </div>
    )
}

export default TaskItem
