import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1 style={{color: "white"}}>Very Simple ToDo App</h1>
        <p style={{color: "white"}}>Track all of the things</p>
        <hr />
        <div className='row'>
          <AddTodo addTodoFn={this.addTodo}></AddTodo>
          <TodoList></TodoList>
        </div>
      </div>
    );
  }
}
console.log(126);
export default App;