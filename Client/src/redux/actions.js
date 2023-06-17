import { GET_ALL_POSTS } from "./action-types";
import axios from "axios";

export const getAllPosts = () => {
    return async function (dispatch){
        const {data} = await axios.get(`http://localhost:3001/posts`);
        const posts = data;
        dispatch({ type: GET_ALL_POSTS, payload: posts });
    }
}