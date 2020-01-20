import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Header from './components/Header';
import uuid from 'uuid'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: uuid.v4(),
          text: 'Clean Shelf',
          completed: false
        },
        {
          id: uuid.v4(),
          text: 'Pay Bills',
          completed: false
        }
      ]
    }

  }

  toggleComplete = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task;
      })
    })
  }

  addTask = (text) => {
    const newTask = {
      id: uuid.v4(),
      text: text,
      completed: false
    }
    this.setState({ tasks: [...this.state.tasks, newTask] })
  }

  deleteTask = (id) => {
    this.setState({ tasks: [...this.state.tasks.filter(
      task => task.id !== id )]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTask addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} toggleComplete={this.toggleComplete} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
