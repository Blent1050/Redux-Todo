import React, { Component } from 'react';

import { connect } from "react-redux";
import { addTodo } from "./actions";

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
      {
        this.props.todos.map(todo => {
          console.log(todo)
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
