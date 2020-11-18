import React from 'react'
import Add from './add'
import Show from './show'

class App extends React.Component {

  state = {
    todoList: [
      { text: "Default TODO", id: 1 }
    ],
    currentId: 1
  }

  addTodo = (todo) => {

    todo.id = this.state.currentId + 1
    let todoList = [...this.state.todoList, todo]
    this.setState({
      currentId: this.state.currentId + 1,
      todoList: todoList
    })

  }

  rmTodo = (id) => {

    let todoList = this.state.todoList.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todoList: todoList
    })

  }

  render() {
    return (

      <div>
        <Add addTodo={this.addTodo} />
        <Show todoList={this.state.todoList} rmTodo={this.rmTodo} />
      </div>

    )
  }

}
export default App