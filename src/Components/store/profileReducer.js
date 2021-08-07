import { PROFILE_SHOW_NAME } from "./actionTypes"

const initialState = {
    showName: false,
    name: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (PROFILE_SHOW_NAME): {
            return {
                ...state,
                showName: !state.showName,
                name: 'Victoria B.'
            }
        }
        default: return state;
    }
}