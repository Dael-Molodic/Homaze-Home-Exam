import * as type from "./type.js"

const initialState = {
    error: '',
    projects: [],
    isLoading: false,
};

export const reducerProject = (state = initialState, action) => {
    switch(action.type) {
        case type.IS_LOADING_TRUE:
            return {
                ...state,
                isLoading: true
            }
        case type.IS_LOADING_FALSE:
            return {
                ...state,
                isLoading: false
            }
        case type.GET_PROJECTS_SUCCESS:
            return {
                ...state,
                projects : action.payload
            }
        case type.SET_ERROR:
            return {
                ...state,
                error : action.payload
            }
        default:
            return state;
    }
}