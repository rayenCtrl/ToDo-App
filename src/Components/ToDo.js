import React, { Component } from 'react'

export default class ToDo extends Component {
    state = {
        input: "",
        todos: [
            {
                id: 0,
                title: "MyTask",
                completed: false
            }
        ]
    };

    handleInput = e => this.setState({ input: e.target.value });

    handleAddtodo = () => {
        if(this.state.input.trim() === "") 
            return alert("Cannot add an  emty task");

        const newTodo = {
            id: Date.now(),
            title: this.state.input,
            completed: false
            };
            
        this.setState({ todos: [...this.state.todos, newTodo], input: "" });
    };

    handleComplete = id => {
        this.setState({
            todos: this.state.todos.map(el => el.id === id? {...el, completed: !el.completed} : el )
        });
    
    };

    handleDelete = id => {
        this.setState({
            todos: this.state.todos.filter(el => el.id !== id)
        });
    };

    render() {
        return(
            <>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">ToDo-App</h1>
                        <p class="lead">Add New Task</p>
                        <input 
                            onChange={this.handleInput}
                            value={this.state.input}
                            type="text"
                            placeholder="Add New Task"
                            className="form-control task-input"
                        />
                        <button onClick={this.handleAddtodo} className="btn btn-primary">Add</button>
                    </div>
                </div>
                <ul className="task-container container">
                    <li className="d-flex justify-content-center">
                        <h2 className="text-muted border-bottom text-center pb-3">
                            Let's get some work done !
                        </h2>
                    </li>
                    {this.state.todos.map(el => (
                        <li className="row d-flex align-items-baseline border-bottom py-3"
                            key={el.id}
                        >
                        <button 
                            onClick={() => this.handleComplete(el.id)}
                            className="btn-outline-secondary mr-3"
                        >
                            Delete
                        </button>
                        <h3 style={
                            el.completed ? {textDecoration: "line-through"} : null
                        }>
                            {el.title}
                        </h3>
                        </li>
                    ))}

                </ul>
            </>
        )
    }



}    
