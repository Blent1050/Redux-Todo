import {
    ADD_TODO
} from '../actions';

const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    console.log(action.payload, state)
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                   { value: action.payload}
                ]

            }


        default:
            return state
    }
}

export default reducer;