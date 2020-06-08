import React, { Component } from "react";
//now
class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);   
    }

    addItem(event) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
                
            };
           
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        
        }
        this._inputElement.value = "";
        event.preventDefault();
        console.log(this.state.items);
    }



    render() {
      return(
        <div className='col-sm-4'>
            <div className='panel panel-default'>
                <div className='panel-heading'>Add New ToDo</div>
                <div className='panel-body'>
                    <p>I want to..</p>
                    <div className='header'>
                        <form onSubmit={this.addItem}>
                            <input ref={(a) => this._inputElement = a}
                            placeholder="enter task">
                            </input>
                            <button type='submit'>ADD</button>
                        </form>
                    </div>
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
               
        );
    }


}


export default AddTodo;

 // <div className='col-sm-4'>
                //     <div className='card card-default'>
                       
                        // <div className='header'>
                        //     <form onSubmit={this.addItem}>
                        //     <input ref={(a) => this._inputElement = a}
                        //         placeholder="enter task">
                        //         </input>
                        //     <button type='submit'>ADD</button>
                        //     </form>
                        // </div>
                //     </div>
                //     <div>
                        
                //     </div>
                // </div>

                // <div className='col-sm-8'> 
                //     <div className="card card-default">
                //     {/* <TodoItems entries={this.state.items}/> */}
                //     </div>
                // </div>
          