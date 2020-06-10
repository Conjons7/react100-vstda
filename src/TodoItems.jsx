import React, { Component } from 'react';

class TodoItems extends Component {
  static getColor(priority) {
    switch (priority) {
      case '1':
        return 'success';
      case '2':
        return 'warning';
      case '3':
        return 'danger';
      default:
        return 'default';
    }
  }
  constructor(props) {
    super(props);

    this.state = {
      description: this.props.todo.description,
      priority: this.props.todo.priority,
      isEditing: false
    };
    
    this.onTodoChange = this.onTodoChange.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onSaveEdit = this.onSaveEdit.bind(this);
  }

  onClickEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  onTodoChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  onSaveEdit(e) {
    e.preventDefault();
    const { description, priority } = this.state;
    const { index, editTodo } = this.props;
    this.setState({
      isEditing: false
    });
    editTodo(index, { description, priority });
  }

  render() {
    const todo = this.props.todo;
    const index = this.props.index;

    if (this.state.isEditing === true) {
      return (
        <div className='alert col-sm-8 panel panel-default'>
            <div className='panel-body'>
                 <div htmlFor='description'>
              
                <textarea
                    id='description'
                    name='description'
                    value={ this.state.description }
                    onChange={ this.onTodoChange }
                    className='update-todo-text'
                />
                </div>
                <div htmlFor='priority'>
                    <select
                        id='priority'
                        name='priority'
                        value={ this.state.priority }
                        onChange={ this.onTodoChange }
                        className='update-todo-priority'
                    >
                        <option value='0'>Select a priority</option>
                        <option value='1'>Low</option>
                        <option value='2'>Medium</option>
                        <option value='3'>High</option>
                    </select>
                </div>
                <button className='btn btn-success pull-right update-todo' onClick={ this.onSaveEdit }>Save</button>
            </div>
        </div>
      );
    }
    return (
      <li
        key={ todo.description }
        className={ `alert alert-${TodoItems.getColor(todo.priority)}` }
        onChange={ this.onTodoChange }
      >
        <input type="checkbox" class="form-check-input" value="on"></input>
        {todo.description}

        <button
          type='button'
          className='btn btn-default btn-sm pull-right'
          onClick={ () => {
            this.props.removeTodo(todo, index);
          } }
          key={ todo.description + index }
          style={ { backgroundColor: 'transparent', border: 'none' } }
        >
          <span className='glyphicon glyphicon-trash text-danger delete-todo' aria-hidden='true' />
        </button>

        <button
          type='button'
          className='btn btn-default btn-sm pull-right'
          onClick={ () => {
            this.onClickEdit();
          } }
          key={ todo.description + index + index }
          style={ { backgroundColor: 'transparent', border: 'none' } }
        >
          <span className='glyphicon glyphicon-edit text-primary edit-todo' aria-hidden='true' />
        </button>
      </li>
    );
  }
}

export default TodoItems;