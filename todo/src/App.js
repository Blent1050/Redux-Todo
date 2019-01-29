import React, { Component } from 'react';

import { connect } from "react-redux";
import { addTodo } from "./actions";


class App extends Component {

  handleTodo = (e, todo) => {
    e.preventDefault();
    return this.props.addTodo(todo);
  }
  render() {
    return (
      <div className="App">
      <form onSubmit={(e) => this.handleTodo(e, {value:'added', completed:false})}>
        <input  placeholder='enter todo...'></input>
        <button type='submit'>Add todo</button>
      </form>
      {
        this.props.todos.map(todo => {
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
