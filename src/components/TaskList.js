import React from 'react'
import TaskItem from './TaskItem'

function TaskList(props) {

    return props.tasks.map((task) => (
        <TaskItem
            key={task.id}
            task={task}
            toggleComplete={props.toggleComplete}
            deleteTask={props.deleteTask}
        />
    ))
}

export default TaskList
