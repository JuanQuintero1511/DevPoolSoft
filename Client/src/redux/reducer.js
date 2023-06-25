import { GET_ALL_POSTS, GET_ID_POST, DELETE_POST_USER, GET_ALL_POSTS_ID_USER, GET_ALL_USERS, USER_LOGIN, GET_BY_USER_NAME } from "./action-types";



const initialState = {

  allPosts: [],
  idPost: {},
  allPostsIdUser: [],
  allUsers: [],
  userLogin: {}

}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, allPosts: action.payload };

    case GET_ID_POST:
      return { ...state, idPost: action.payload };

    case GET_ALL_POSTS_ID_USER:
      return { ...state, allPostsIdUser: action.payload }

    case GET_ALL_USERS:
      return { ...state, allUsers: action.payload };

    case DELETE_POST_USER:
      return { ...state, allPosts: action.payload };

    case USER_LOGIN:
      localStorage.setItem("userName", action.payload.userName);
      return { ...state, userLogin: action.payload };

    case GET_BY_USER_NAME:
        return { ...state, byUserName: action.payload};
            
      
    default:
      return { ...state };
  }
}

export default reducer;