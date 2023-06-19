import { GET_ALL_POSTS, GET_ID_POST, CREATE_COMPANY } from "./action-types";

const initialState = {
    allPosts:[],
    idPost: {},
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
        default:
            return{...state};
    }
}

export default reducer;