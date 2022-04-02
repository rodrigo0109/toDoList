import { ADD_NEW_TODO, REMOVE_TODO, COMPLETE_TODO } from "../actions/actions";

const initialState = {
    toDos: [],
    cantidadComplete: 0,
}

const rootReducer = (state = initialState, action) => {

    //console.log(toDos)
    switch (action.type) {
        case ADD_NEW_TODO:
            console.log(action.payload)
            return {
                ...state,
                toDos: [...state.toDos, action.payload]
            }

        case REMOVE_TODO:
            return {
                ...state,
                toDos: state.toDos.filter(el => el.id !== action.payload)
            }

        case COMPLETE_TODO:
            let isCheck = state.toDos.find( el => el.id === action.payload )
            isCheck.check = !isCheck.check
            console.log(isCheck)
            let b = state.toDos.filter(el => el.id !== action.payload)
            return {
                ...state,
                toDos: [...b, isCheck]
            }

        default:
            return state;
    }

}

export default rootReducer