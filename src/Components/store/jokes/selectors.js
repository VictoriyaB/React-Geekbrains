import { REQUEST_STATUS } from "../../../constants";

export const selectJokes = (state) => state.jokes.data;
export const selectJokesLoading = (state) => state.jokes.request.status === REQUEST_STATUS.PENDING;
export const selectJokesError = (state) => state.jokes.request.error;