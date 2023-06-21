import { GET_ALL_POSTS, GET_ID_POST, CREATE_COMPANY, CREATE_POST_USER } from "./action-types";
import axios from "axios";

export const getAllPosts = () => {
    return async function (dispatch){
        const {data} = await axios.get(`http://localhost:3001/posts`);
        const posts = data;
        dispatch({ type: GET_ALL_POSTS, payload: posts });
    }
}
export const getPostById = (id) => {
    return async function (dispatch) {
        const {data} = await axios.get(`http://localhost:3001/posts/${id}`);
        const post = data;
        dispatch({ type: GET_ID_POST, payload: post });        
    }
}
export const createPostUser = (cpuData) => {
    return async function (dispatch) {
        const {data} = await axios.post(`http://localhost:3001/posts`, cpuData);
        const postCpu = data;
        dispatch({ type: CREATE_POST_USER, payload: postCpu });
    }
}



export const getUsers = () => {
   
}

export const getCompanies = () => {
    
}

export const createCompany = (payload) => {
    return async function (dispatch) {
        await axios.post("http://localhost:3001/company/", payload)
        return dispatch({type: CREATE_COMPANY})
    }
}