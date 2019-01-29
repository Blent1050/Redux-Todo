import React, { Component } from 'react';

import { connect } from "react-redux";
import { addTodo } from "./actions";


class App extends Component {

  state = {
    todos: [],
    newTodoText: ''
  }

  handleTodo = (e, value) => {
    e.preventDefault();
    this.props.addTodo(value);
  }
  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
      <form onSubmit={(e) => this.handleTodo(e, this.state.newTodoText)}>
        <input onChange={this.handleChanges} name='newTodoText' placeholder='enter todo...'></input>
        <button type='submit'>Add todo</button>
      </form>
      {
        this.props.todos.map(todo => {
          console.log(this.props)
          return <p key={todo.value}>{todo.value}</p>
        })
      }
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return{
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo})(App);
