import React, { Component } from "react";
import "./custom.css";
class TodoApp extends Component 
Fixed #7,#6,#5,#4
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
        console.log(this.state.items);
      } else {
        const its = [...this.state.items];
        its.splice(Number(this.state.id), 0, this.state.input);
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
        // @ts-ignore
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
          <span hidden>{id}</span>
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
              `the data is {data} the key value {index}`
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
