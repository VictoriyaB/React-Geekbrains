import { PROFILE_SET_NAME } from "./actionTypes"

const initialState = {
    name: 'Me'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (PROFILE_SET_NAME): {
            return {
                ...state,
                name: action.payload
            }
        }
        default: return state;
    }
}