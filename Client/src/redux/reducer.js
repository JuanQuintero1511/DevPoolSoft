import { GET_ALL_POSTS, GET_ID_POST, DELETE_POST_USER, GET_ALL_POSTS_ID_USER, GET_ALL_USERS, USER_LOGIN } from "./action-types";

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
      localStorage.setItem("id_user_data", action.payload.user_datum?.id_user_data);
      return { ...state, userLogin: action.payload };

      // const { remember, token }: { remember: boolean; token: string } =
      //   action.payload;

      // remember && localStorage.setItem("token", token);

      // return { ...state, user: action.payload };


    default:
      return { ...state };
  }
}

export default reducer;