import {
    GET_ALL_POSTS,
    GET_ID_POST,
    CREATE_POST_USER,
    GET_ALL_POSTS_ID_USER,
    CREATE_USER,
    DELETE_POST_USER,
    GET_ALL_USERS,
    USER_LOGIN,
    CREATE_USER_DATA,
    LOGOUT_USER,
    GET_USERS_COMPANIES,
    CREATE_GOOGLE_USER,
    MODIFY_POST_USER,
    CREATE_COMMENT_POST,
    DELETE_COMMENT,
    MODIFY_ROL,
    ACTIVE_USER,
    DESACTIVE_USER
} from "./action-types";

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
export const getAllUsers = () => {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/users`);
        dispatch({ type: GET_ALL_USERS, payload: data });
    }
}
export const createUser = (userData) => {
    return async function (dispatch) {
        await axios.post(`http://localhost:3001/users`, userData);
        dispatch({ type: CREATE_USER });
    }
}
export const deletePostUser = (id_post) => {
    return async function (dispatch) {
        const { data } = await axios.delete(`http://localhost:3001/posts/${id_post}`);
        dispatch({ type: DELETE_POST_USER, payload: data });
    }
}

export const deleteComment = (id_comments) => {
    return async function (dispatch) {
        const { data } = await axios.delete(`http://localhost:3001/comments/${id_comments}`);
        dispatch({ type: DELETE_COMMENT, payload: data });
    }
}

export const modifyPostUser = (postData) => {
    return async function (dispatch) {
        const { data } = await axios.put(`http://localhost:3001/posts/${postData.id}`, postData);
        dispatch({ type: MODIFY_POST_USER, payload: data });
    }
}

export const createCommentPost = (postData) => {
    return async function (dispatch) {
        const { data } = await axios.post(`http://localhost:3001/comments`, postData);
        dispatch({ type: CREATE_COMMENT_POST, payload: data });
    }
}

export const userLogin = (user) => {
    return { type: USER_LOGIN, payload: user }
}

export const userLogin_App = (userName) => {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/users/?userName=${userName}`);
        dispatch({ type: USER_LOGIN, payload: data });

    }
}

export function logoutUser() {
    return { type: LOGOUT_USER };
}


export const getUsers = () => { //trae solo users
    return async (dispatch) => {
        const usersResponse = await axios.get("http://localhost:3001/users");
        const users = usersResponse.data;

        return dispatch({ type: "FETCH_DATA_SUCCESS", payload: { users } });
    };
}


export const getCompanies = () => { //trae solo companies

}

export const getUsersAndCompanies = () => {
    return async (dispatch) => {
        const usersResponse = await axios.get("http://localhost:3001/users");
        // const companiesResponse = await axios.get("http://localhost:3001/company");
        console.log(usersResponse);
        const users = usersResponse.data;
        // const companies = companiesResponse.data;

        return dispatch({ type: GET_USERS_COMPANIES, payload: users });
    };
};
// , companies
export const createUserData = (payload) => {
    return async function (dispatch) {
        await axios.post("http://localhost:3001/company/", payload)
        return dispatch({ type: CREATE_USER_DATA })
    }
}

export const newGoogleUser = (data) => {
    return async function (dispatch) {
        // try {
        console.log(data);
        const response = await axios.post(`http://localhost:3001/auth/google`, data)
        console.log(response.data);
        return dispatch({
            type: CREATE_GOOGLE_USER,
            payload: response.data
        })
        // }
        // catch (error) {
        //     alert(error)
        // }
    }
}

export const modifyRol = (postData) => {
    return async function (dispatch) {
        const { data } = await axios.patch(`http://localhost:3001/admin/`, postData);
        dispatch({ type: MODIFY_ROL, payload: data });
    }
}

export const activeUser = (full_name) => {
    return async function (dispatch) {
        const { data } = await axios.patch(`http://localhost:3001/company/active/${full_name}`);
        dispatch({ type: ACTIVE_USER, payload: data });
    }
}

export const desactiveUser = (full_name) => {
    return async function (dispatch) {
        const { data } = await axios.patch(`http://localhost:3001/company/desactive/${full_name}`);
        dispatch({ type: ACTIVE_USER, payload: data });
    }
}


