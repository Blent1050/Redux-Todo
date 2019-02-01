import {
    ADD_TODO,
    TOGGLE_FRIEND,
    DELETE_FRIEND
} from '../actions';

const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    console.log(action.payload, state)
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TOGGLE_FRIEND:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? { ...todo,
                    completed: !todo.completed
                } : todo)
            }
        case DELETE_FRIEND:
        return{
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
            }

        default:
            return state
    }
}

export default reducer;