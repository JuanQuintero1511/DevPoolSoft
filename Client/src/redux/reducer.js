import { GET_ALL_POSTS, GET_ID_POST } from "./action-types";

const initialState = {
    allPosts:[],
    idPost: [],
    users: [],
    companys: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_POSTS:
            return { ...state, allPosts: action.payload};

        case GET_ID_POST:
            return { ...state, idPost: action.payload};
        
        default:
            return{...state};
    }
}

export default reducer;