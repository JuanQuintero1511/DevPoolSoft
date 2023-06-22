<<<<<<< HEAD
import { GET_ALL_POSTS, GET_ID_POST, CREATE_COMPANY, DELETE_POST_USER } from "./action-types";
=======
import { GET_ALL_POSTS, GET_ID_POST, CREATE_COMPANY, CREATE_USER } from "./action-types";
>>>>>>> 4008aba0df465ca2c7027b3afbc85f136a16bd45

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
            
        case DELETE_POST_USER:
            return { ...state, allPosts: action.payload};
        
        case CREATE_USER:
            return {
                ...state,
            }
        default:
            return{...state};
    }
}

export default reducer;