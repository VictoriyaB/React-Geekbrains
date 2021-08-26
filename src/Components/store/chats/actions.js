import { AUTHORS } from "../../../constants";
import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE } from "./actionTypes"

export const addChat = (chatId, name) => ({
    type: ADD_CHAT,
    payload: {
        chatId,
        name,
    },
});

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId,
});

export const sendMessageWithReply = (chatId, message) => (dispatch) => {
    if(chatId !== 'robotChat') {
        dispatch(sendMessage(chatId, message));
    } else {
    dispatch(sendMessageFromRobot(chatId, message));
    };
}

export const sendMessage = (chatId, message) => ({
    type: SEND_MESSAGE,
    payload: {
        chatId,
        message,
    }
});

export const sendMessageFromRobot = (chatId, message) => (dispatch) => {
    dispatch(sendMessage(chatId, message));
    if (message.author !== AUTHORS.robot) {
        const robotMessage = {
            author: AUTHORS.robot,
            text: `Все говорят "${message.text}", а ты купи слона!`
        };
        setTimeout(() => {
            dispatch(sendMessage(chatId, robotMessage));
        }, 4000);
        return () => clearTimeout();
    }    
}
