export function allTodos(state) {

  const todos = Object.keys(state.todos).map((key) => {
    return {[key]: state.todos[key]};
  });
  // debugger;
  // console.log(`selector :${todos}`);
  return todos;
}



export default allTodos;
