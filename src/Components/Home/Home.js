import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import { selectJokes, selectJokesError, selectJokesLoading } from '../store/jokes/selectors';
import { getJokes } from '../store/jokes/actions';

export const Home = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectJokesLoading);
    const error = useSelector(selectJokesError);
    const jokes = useSelector(selectJokes);

    const requestJokes = useCallback(() => {
        dispatch(getJokes());
    }, []);

    useEffect(() => {
        requestJokes();
    }, []);

    if (loading) {
        return <LinearProgress color="secondary" />
    }

    if (error) {
        return (
            <>
                <h3>Request error</h3>
                <button onClick={requestJokes}>Try again</button>
            </>
        )
    }

    if (!jokes.length) {
        return <h3>No jokes</h3>;
    }
    return (
        <>
            <h3>Ten random jokes about programming:</h3>
            {jokes.map((joke) => (
                <ul key={joke.id}>
                    <li>{joke.setup}</li>
                    <li>{joke.punchline}</li>
                </ul>
            ))}
        </>
    );
}