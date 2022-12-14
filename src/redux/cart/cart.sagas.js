import { takeLatest, all, put, call } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";


export function* clearCartOnSuccess(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSuccess)
}

export function* cartSagas(){
    yield (all([call(onSignOutSuccess)]))
}