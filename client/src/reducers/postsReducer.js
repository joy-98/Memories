import { DELETE, CREATE, UPDATE, LIKE, FETCH_ALL } from "../constants/actionTypes"

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...state, action.payload]
        case UPDATE:
        case LIKE:
            return state.map((post) => post._id === action.payload._id ? action.payload : state)
        case DELETE:
            return state.filter((post) => post._id === action.payload)
        default:
            return state
    }
}

export default postsReducer;