import { GET_ALL_POSTS } from "./action-types";

const initialState = {
    allPosts:[],
    users: [],
    companys: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_POSTS:
            return { ...state, allPosts: action.payload}
        
        default:
            return{...state};
    }
}

export default reducer;