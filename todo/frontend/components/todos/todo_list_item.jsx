import React, {Component} from 'react';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    const id = Object.keys(item);
    // console.log(this.props);
    debugger;
    return (
      <li id={item} >{this.props.title}</li>
      // <li>hi</li>
    );
  }
}

export default TodoListItem;
