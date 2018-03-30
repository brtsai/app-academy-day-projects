import React, {Component} from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>Todo List Component</h1>
        <ul>
          {
            this.props.todos.map((el) => {
              // console.log(el);
              // debugger;
              return <TodoListItem item={el}/>;
            })
          }
        </ul>
      </div>
    );
  }
}


export default TodoList;
