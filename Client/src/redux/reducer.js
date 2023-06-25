
import { GET_ALL_POSTS, GET_ID_POST, DELETE_POST_USER, GET_ALL_POSTS_ID_USER , CREATE_USER_DATA, CREATE_USER, GET_BY_USER_NAME, GET_USERS_COMPANIES } from "./action-types";
const initialState = {
    allPosts:[],
    idPost: {},
    allPostsIdUser: [],
    users: [],
    users_date: [],
    companyies: [],
    byUserName: [],
    usersYcompanies: []
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

        case GET_ALL_POSTS_ID_USER:
            return { ...state, allPostsIdUser: action.payload}
            
        case DELETE_POST_USER:
            return { ...state, allPosts: action.payload};
        
        case GET_USERS_COMPANIES:
            return { ...state, usersYcompanies: action.payload };
            
        default:
            return{...state};
    }
}

export default reducer;