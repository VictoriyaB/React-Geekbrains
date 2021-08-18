import { API_URL } from "../../../constants";
import { REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCESS } from "./actionsTypes";

const getJokesPending = () => ({
    type: REQUEST_PENDING
});

const getJokesSuccess = (jokes) => ({
    type: REQUEST_SUCCESS,
    payload: jokes
});

const getJokesError = (error) => ({
    type: REQUEST_ERROR,
    payload: error
});

export const getJokes = () => async (dispatch) => {
    dispatch(getJokesPending());

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Request failed: ', response.status);
        }

        const result = await response.json();

        dispatch(getJokesSuccess(result));
    } catch (err) {
        dispatch(getJokesError(err.message));
    }
}

