import * as types from "./actionTypes"

const initState = {
    isAuth: false,
    authData: {},
    isLoading: false,
    isError: false
}

export const authReducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_LOGIN_REQUEST: {
            return { ...state, isLoading: true, authData: {}, isAuth: false }
        }
        case types.GET_LOGIN_SUCCESS: {
            return { ...state, isLoading: false, authData: payload, isAuth: true }
        }
        case types.GET_LOGIN_FAILURE: {
            return { ...state, isError: true }
        }
        case types.GET_LOGOUT: {
            return { ...state, isError: false, authData: {}}
        }

        default: return state
    }
}