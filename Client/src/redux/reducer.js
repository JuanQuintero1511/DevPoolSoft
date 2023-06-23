import { GET_ALL_POSTS, GET_ID_POST, CREATE_USER_DATA, CREATE_USER, GET_BY_USER_NAME } from "./action-types";

const initialState = {
    allPosts:[],
    idPost: {},
    users: [],
    users_date: [],
    companyies: [],
    byUserName: ["hola"],

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return { ...state, allPosts: action.payload};

        case GET_ID_POST:
            return { ...state, idPost: action.payload};
            
        case GET_BY_USER_NAME:
            return {
                ...state, byUserName: action.payload
            };
        case CREATE_USER_DATA:
            return {
                ...state, 
            }
        case CREATE_USER:
            return {
                ...state,
            }
        default:
            return{...state};
    }
}

export default reducer;