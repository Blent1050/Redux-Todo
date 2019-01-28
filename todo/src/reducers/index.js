import {
    ADD_TODO
} from '../actions';

const initialState = {
    todos: [{
        value: 'Walk the dog',
        completed: false
    }]
}

const reducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case ADD_TODO:
            console.log(...state, )
            return {
                ...state,
                todo: action.payload
            }
        default:
            return state
    }
}

export default reducer;