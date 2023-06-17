import { GET_ALL_POSTS, GET_ID_POST } from "./action-types";
import axios from "axios";

export const getAllPosts = () => {
    return async function (dispatch){
        const {data} = await axios.get(`http://localhost:3001/posts`);
        const posts = data;
        dispatch({ type: GET_ALL_POSTS, payload: posts });
    }
}
export const getPostById = () => {
    return async function (dispatch) {
        const {data} = await axios.get(`http://localhost:3001/posts/${id}`);
        const post = data;
        dispatch({ type: GET_ID_POST, payload: post });
    }
}