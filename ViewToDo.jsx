import React, { Component } from "react";

class App extends React.Component {

    render() {
        return(
            <div>
                <AddTodo></AddTodo>
            </div>
        );
    }

    componentDidMount = () => {
        const todos = localStorage.getItem('todos');
        if(todos) {
            const savedTodos = JSON.parse(todos);
            this.setState({ todos: savedTodos });
        } else {
            console.log('No todos');
        }
    }

    compnentDidMount(){
        const todos = localStorage.getItem('todos');
        if(todos) {
          const savedTodos = JSON.parse(todos);
          this.setState({todos: savedTodos });
        } else {
          console.log('No todos');
        }
      }



}


export default App;










