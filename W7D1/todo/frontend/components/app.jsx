import React, {Component} from 'react';
import TodoListContainer from './todos/todo_list_container';
// import TodoList from './todos/todo_list';

class App extends Component {
  render() {
    return (
      <section>
        <h1>Todo List</h1>
        <TodoListContainer />
      </section>
    );
  }
}

export default App;
