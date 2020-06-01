import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1 style={{color: "white"}}>Very Simple ToDo App</h1>
        <p style={{color: "white"}}>Track all of the things</p>
        <hr />
        <div className='row'>
          <div className='col-sm-4'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add New ToDo</div>
              <div className='panel-body'>
                <p>I want to..</p>
                <input name='amountDue'/>
              </div>
              <div className='panel-body'>
                <p>How much of a priority is this?</p>
                <select className='priority'>
                  <option>Low Priority</option>
                  <option>Medium Priority</option>
                  <option>High Priority</option>

                </select>
              </div>
              <button className='btn btn-primary btn-block' name ='submit' type='button'>Add</button>
            </div>
          </div>

          <div className='col-sm-8'>
            <div className="panel panel-default"> 
              <div className='panel-heading'>View ToDos</div>
              <div className="alert alert-info" role="alert">
                <h6>Welcome to Very Simple ToDo App!</h6>
                <p>Get started now by adding a new todo on the left</p>
              </div>
            </div>
          </div>
          
            

        </div>
      </div>
                 
               
    );
  }
}
console.log(126);
export default App;
