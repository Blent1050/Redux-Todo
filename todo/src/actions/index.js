export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_FRIEND = 'TOGGLE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export const addTodo = value => {
    return{
        type: ADD_TODO,
        payload: 
        {
            value,
            id: Date.now(),
            completed: false,
            
        }
    }
}

export const toggleFriend = id => {
    return{
        type: TOGGLE_FRIEND,
        payload: id
    }
}

export const deleteFriend = id => {
    return{
        type: DELETE_FRIEND,
        payload: id
    }
}