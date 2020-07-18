import React, { Component } from 'react';
import "./custom.css"
class TodoApp extends Component {
    state = {
        input: "",
        items: []
    }
    handleChange = event => {
        this.setState({
            input: event.target.value
        });
    };
    storeItems = event => {
        event.preventDefault();
        const { input } = this.state;
        this.setState({
            items: [...this.state.items, input],
            input : ""
        });
    };
    deleteItem = key => {
        this.setState({
            items: this.state.items.filter((data,index) => index !==key)
        });
    }
    editData = (index,data) =>{
        console.log(index,data);
       
    }

    render() {
        const { input, items } = this.state;
        return (
            <div className="todo-Container">
                <form className="input-values" onSubmit={this.storeItems}>
                    <h1>To do App</h1>
                    <input type="text" value={input} onChange={this.handleChange} placeholder="Enter the values"></input>
                </form>
                <ul>
                    {items.map(
                        (data, index) => (
                            <li key={index} onClick={()=> this.editData(index,data)}> {data} 
                            <i className="fas fa-trash-alt" onClick={()=> this.deleteItem(index)}></i>
                            </li>
                        )
                    )}

                </ul>
            </div>
        );
    }
}

export default TodoApp;