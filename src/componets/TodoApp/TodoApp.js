import React, { Component } from "react";
import "./custom.css";
class TodoApp extends Component {
  state = {
    input: "",
    items: [],
    flag: "new",
    id: "",
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    if (input !== "") {
      if (this.state.flag === "new") {
        this.setState({
          items: [...this.state.items, input],
          input: "",
          flag: "new",
        });
      } else {
        const its = [...this.state.items];
        its.splice(this.state.id, 0, this.state.input);

        this.setState({
          items: its,
          input: "",
          flag: "new",
        });
      }
    }
  };
  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };
  editData = (key, ediVal) => {
    if (this.state.input === "") {
      this.setState({
        flag: "update",
        id: key,
        input: ediVal,
        items: this.state.items.filter((data, index) => index !== key),
      });
    } else {
    }
  };

  render() {
    const { input, items, id } = this.state;
    return (
      <div className="todo-Container">
        <form className="input-values" onSubmit={this.storeItems}>
          <h1>To do App</h1>
          <span hidden value={id.toString()}></span>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter the values....."
            id="todo"
          ></input>
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index} onClick={() => this.editData(index, data)}>
              {" "}
              {data}
              <i
                className="fas fa-trash-alt"
                onClick={() => this.deleteItem(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
