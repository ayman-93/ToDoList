// import React from "react";

// class ToDoList extends React.Component {
//   state = { toDo: [], item: "" };
//   update = event => {
//     this.setState({ item: event.target.value });
//   };
//   add = () => {
//     let nTodo = this.state.toDo;
//     nTodo.push(this.state.item);
//     this.setState({ toDo: nTodo, item: "" });
//   };
//   remove = event => {
//     let nToDo = this.state.toDo;
//     let indexOfItem = nToDo.indexOf(`${event.target.key}`);
//     nToDo.splice(indexOfItem, 1);
//     this.setState({ toDo: nToDo });
//   };
//   render() {
//     let list = this.state.toDo.map(item => (
//       <li onClick={this.remove} key={item}>
//         {item}
//       </li>
//     ));
//     return (
//       <div>
//         <label>What do you want to do:</label>
//         <input type="text" onChange={this.update} value={this.state.item} />
//         <button onClick={this.add} />
//         <ul>{list}</ul>
//       </div>
//     );
//   }
// }

// export default ToDoList;

import React from "react";

class ToDoList extends React.Component {
  state = { toDo: [], item: "" };
  update = event => {
    this.setState({ item: event.target.value });
  };

  add = () => {
    let clonOfTodo = this.state.toDo;
    clonOfTodo.push(this.state.item);
    this.setState({ toDo: clonOfTodo, item: "" });
  };
  remove = event => {
    let clonOfTodo = this.state.toDo;
    let indexOfItem = clonOfTodo.indexOf(`${event.target.key}`);
    console.log(indexOfItem);
    console.log(event.target.key);
    clonOfTodo.splice(indexOfItem, 1);
    this.setState({ toDo: clonOfTodo });
  };
  render() {
    let list = this.state.toDo.map(item => (
      <li onClick={this.remove} key={item}>
        {item}
      </li>
    ));
    return (
      <div>
        <label>What do you want to do:</label>
        <input type="text" onChange={this.update} value={this.state.item} />
        <button onClick={this.add} />
        <ul>{list}</ul>
      </div>
    );
  }
}

export default ToDoList;
