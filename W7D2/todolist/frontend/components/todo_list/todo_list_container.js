import { connect } from 'react-redux';
import TodoList from './todo_list';
// Actions
import { receiveTodos, receiveTodo, createTodo, fetchTodos } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodos: () => dispatch(receiveTodos()),
  fetchTodos: () => dispatch(fetchTodos(dispatch)),
  receiveTodo: todo => dispatch(createTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
