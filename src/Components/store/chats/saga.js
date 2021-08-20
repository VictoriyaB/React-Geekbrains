import { takeEvery, put, delay } from "@redux-saga/core/effects"
import { uid } from "uid";
import { AUTHORS } from "../../../constants";
import { sendMessage } from "./actions";
import { SEND_MESSAGE } from "./actionTypes"

function* onSendMessage(action) {
    if (action.payload.message.author !== AUTHORS.robot && action.payload.message.author !== 'Admin') {
        yield delay(1000);

        yield put(
            sendMessage(action.payload.chatId, {
                author: 'Admin',
                text: 'Робот ответит через три секунды',
                id: uid(),
            })
        );
    }
}

export function* chatsSaga() {
    yield takeEvery(SEND_MESSAGE, onSendMessage);
}