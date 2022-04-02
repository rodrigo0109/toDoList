export const ADD_NEW_TODO = 'ADD_NEW_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

export function addNewToDo(payload) {
    console.log(payload)
    return {
        type: ADD_NEW_TODO,
        payload
    }
}

export function removeToDo(id) {
    console.log(id)
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export function completeToDo(id) {
    console.log(id)
    return {
        type: COMPLETE_TODO,
        payload: id
    }
}