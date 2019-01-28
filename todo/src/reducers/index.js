import {ADD_TODO} from '../actions';

const initialState = {
    todo: {
        text: 'This is a todo'
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO: 
        return{
            ...state,
            todo: {
                text: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer;
