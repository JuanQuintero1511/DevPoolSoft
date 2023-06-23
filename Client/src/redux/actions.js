
import { GET_ALL_POSTS, GET_ID_POST, CREATE_USER_DATA, CREATE_POST_USER, CREATE_USER, GET_BY_USER_NAME } from "./action-types";

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
export const createPostUser = (postData) => {
    return async function (dispatch) {
        const {data} = await axios.post(`http://localhost:3001/posts`, postData);
        dispatch({ type: CREATE_POST_USER, payload: data });
    }
}

export const createUser = (userData) => {
    return async function (dispatch) {
       await axios.post(`http://localhost:3001/users`, userData);
        dispatch({ type: CREATE_USER });
    }
}

export const getByUserName = (userName) => {
    return async function (dispatch) {
      const { data } = await axios.get(`http://localhost:3001/users?userName=${userName}`);
      dispatch({ type: GET_BY_USER_NAME, payload: Array.isArray(data) ? data : [data] }); // Convertir a array si es un objeto individual
    };
  };
  


export const getCompanies = () => {
    
}

export const createUserData = (payload) => {
    return async function (dispatch) {
        await axios.post("http://localhost:3001/company/", payload)
        return dispatch({type: CREATE_USER_DATA})
    }
}