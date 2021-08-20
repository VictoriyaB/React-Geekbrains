import { uid } from "uid";
import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE } from "./actionTypes"

const initialState = {
    robotChat: {
        name: 'Robot',
        id: 'robotChat',
        messages: [{author:'Robot', text:'Привет! Купи слона!', id: uid()}],
        img: '/static/images/avatar/123.jpg',
        },
    chat2: {
        name: 'User2',
        id: 'chat2',
        messages: [{author:'User2', text:'Привет!', id: uid()}],
        img: null,
        },    
    chat3: {
        name: 'User3',
        id: 'chat3',
        messages: [],
        img: null,
        },
}

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_CHAT: {
            return {
                ...state,
                [payload.chatId]: {
                    name: payload.name,
                    id: payload.chatId,
                    messages: [],
                    img: null,
                }
            }
        }

        case DELETE_CHAT: {
            const newState = {...state};
            delete newState[payload.chatId];
            return newState;
        }

        case SEND_MESSAGE: {
            return {
                ...state,
                [payload.chatId]: {
                    ...state[payload.chatId],
                    messages: [...state[payload.chatId].messages, payload.message],
                }
            }
        }

        default: return state;
    }
}