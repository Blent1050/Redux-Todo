import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addTodo } from './actions';


class App extends Component {

  newTodo = (e, todo) => {
    e.preventDefault();
    this.props.addTodo(todo);
  }

  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      todo: state.todo
  };
};

export default connect(mapStateToProps, {addTodo},(App)) 
