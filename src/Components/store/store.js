import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { chatsReducer } from './chats/reducer';
import { profileReducer } from './profile/reducer';
import { jokesReducer } from './jokes/reducer';
import { chatsSaga } from './chats/saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'GB-messenger',
    storage,
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    jokes: jokesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

export const persistor = persistStore(store);

sagaMiddleware.run(chatsSaga);