
import { GET_ALL_POSTS, GET_ID_POST, DELETE_POST_USER, GET_ALL_POSTS_ID_USER } from "./action-types";

const initialState = {
    allPosts:[],
    idPost: {},
    allPostsIdUser: [],
    users: [],
    users_date: [],
    companyies: [],

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return { ...state, allPosts: action.payload};

        case GET_ID_POST:
            return { ...state, idPost: action.payload};
        case CREATE_COMPANY:
            return {
                ...state,
            }

        case GET_ALL_POSTS_ID_USER:
            return { ...state, allPostsIdUser: action.payload}
            
        case DELETE_POST_USER:
            return { ...state, allPosts: action.payload};
        
        
        default:
            return{...state};
    }
}

export default reducer;