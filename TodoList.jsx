import React, { Component } from "react";



class TodoList extends React.Component {



    render() {
      return(
        <div className='col-sm-8'>
            <div className="panel panel-default"> 
              <div className='panel-heading'>View ToDos</div>
              <div className="alert alert-info" role="alert">
                <h6>Welcome to Very Simple ToDo App!</h6>
                <p>Get started now by adding a new todo on the left</p>
              </div>
              
            </div>
          </div>
        );
    }


}


export default TodoList;