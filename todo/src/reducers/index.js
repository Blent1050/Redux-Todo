import {
    ADD_TODO
} from '../actions';

const initialState = {

    todos: [{
            value: 'Walk the dog',
            completed: false
        },
        {
            value: 'test',
            completed: false
        }
    ]
}

const reducer = (state = initialState, action) => {
    console.log('from reducer: ', action, state)
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state.todos,
                action.payload
            ]


        default:
            return state
    }
}

export default reducer;