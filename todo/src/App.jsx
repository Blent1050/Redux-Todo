import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTodo, toggleFriend, deleteFriend } from './actions';

class App extends Component {
	handleTodo = (e, value) => {
		e.preventDefault();
		this.props.addTodo(value);
	};
	handleChanges = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	toggleFriend = (e, id) => {
		e.preventDefault();
		this.props.toggleFriend(id);
  };
  
  deleteFriend = (e, id) => {
    e.preventDefault();
    this.props.deleteFriend(id);
  }

	render() {
		return (
			<div className="App">
				<form onSubmit={(e) => this.handleTodo(e, this.state.newTodoText)}>
					<input onChange={this.handleChanges} name="newTodoText" placeholder="enter todo..." />
					<button type="submit">Add todo</button>
				</form>
				{this.props.todos.map((todo) => {
					return (
            <div className='todo'>
              <p
                className={todo.completed ? `completed` : ``}
                onClick={(e) => this.toggleFriend(e, todo.id)}
                key={todo.id}
              >
                {todo.value}
              </p>
              <button onClick={e => this.deleteFriend(e, todo.id)}>Delete</button>
            </div>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, { addTodo, toggleFriend, deleteFriend })(App);
