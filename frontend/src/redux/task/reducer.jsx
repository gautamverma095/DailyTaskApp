import { GET_TASK, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./action";



const initialState = {
    isLoading: true,
    isError: "",
    user: {},
    gettingAllTasks:[]
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASK:
            return {
                ...state,
                gettingAllTasks: action.payload.tasks,
                user:action.payload.user,
                isLoading: false,
            }
    
        default:
            return state
    }
}