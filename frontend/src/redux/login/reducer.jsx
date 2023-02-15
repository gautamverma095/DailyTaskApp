import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./action";



const initialState = {
    token: "",
    isLoading: true,
    isError: "",
    user:{}
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user:action.payload.user,
                isLoading: false,
            }
          case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                 user:action.payload.user,
                isLoading: false,

            }
            
    
        default:
            return state
    }
}