
import { GET_ALL_POSTS, GET_ID_POST, CREATE_POST_USER, GET_ALL_POSTS_ID_USER, CREATE_USER_DATA, CREATE_USER, GET_BY_USER_NAME } from "./action-types";
import axios from "axios";

export const getAllPosts = () => {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/posts`);
        const posts = data;
        dispatch({ type: GET_ALL_POSTS, payload: posts });
    }
}
export const getPostById = (id) => {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/posts/${id}`);
        const post = data;
        dispatch({ type: GET_ID_POST, payload: post });
    }
}
export const getAllPostsIdUser = (id) => {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/company/${id}`);
        dispatch({ type: GET_ALL_POSTS_ID_USER, payload: data });
    }
}

export const createPostUser = (postData) => {
    return async function (dispatch) {
        const { data } = await axios.post(`http://localhost:3001/posts`, postData);
        dispatch({ type: CREATE_POST_USER, payload: data });
    }
}
export const deletePostUser = (id_post) => {
    return async function (dispatch) {
        const { data } = await axios.delete(`http://localhost:3001/posts/${id_post}`);
        dispatch({ type: DELETE_POST_USER, payload: data });
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



export const getUsers = () => { //trae solo users
    return async (dispatch) => {
        const usersResponse = await axios.get("http://localhost:3001/users");
        const users = usersResponse.data;

        return dispatch({type: "FETCH_DATA_SUCCESS", payload: {users}});
    };
}


export const getCompanies = () => { //trae solo companies

}

export const getUsersAndCompanies = () => { //trae ambos
    return async (dispatch) => {
        const usersResponse = await axios.get("http://localhost:3001/users");
        const companiesResponse = await axios.get("http://localhost:3001/company");

        const users = usersResponse.data;
        const companies = companiesResponse.data;

        return dispatch({type: "FETCH_DATA_SUCCESS", payload: {users, companies}});
    };
};

export const createUserData = (payload) => {
    return async function (dispatch) {
        await axios.post("http://localhost:3001/company/", payload)
        return dispatch({ type: CREATE_USER_DATA })
    }
}
