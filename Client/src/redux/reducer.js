
import {
    GET_ALL_POSTS,
    GET_ID_POST,
    DELETE_POST_USER,
    GET_ALL_POSTS_ID_USER,
    GET_ALL_USERS,
    USER_LOGIN,
    CREATE_USER_DATA,
    CREATE_USER,
    LOGOUT_USER,
    GET_USERS_COMPANIES,
    GET_USER_BY_ID,
    FILTRAR_CARGO,
    FILTRAR_TIPO_EMPLEO,
    RESET_POSTS,
    DEV_DATA,
    MODIFY_POST_USER,
    DELETE_COMMENT,
    MODIFY_ROL,
    ACTIVE_USER,
    DESACTIVE_USER,
    CREATE_PUBLICATION,
    UPDATE_POST_USER,
} from "./action-types";

const initialState = {

    allPosts: [],
    idPost: {},
    allPostsIdUser: [],
    allUsers: [],
    userLogin: {},
    usersYcompanies: [],
    originalPosts: [], // Estado original de los posts sin filtrar
    activeFilters: [] // Array para almacenar los filtros activos

}

const reducer = (state = initialState, action) => {
    let tipoEmpleoFiltrado;
    let cargoFiltrado;
    let tipoEmpleoFilters;
    let cargoFilters;

    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                allPosts: action.payload,
                originalPosts: action.payload // Actualizar el estado original de los posts
            };
        case RESET_POSTS:
            return { ...state, allPosts: state.originalPosts };

        case GET_ID_POST:
            return { ...state, idPost: action.payload };

        case MODIFY_POST_USER:
            return { ...state, idPost: action.payload };

        case MODIFY_ROL:
            return { ...state, allUsers: action.payload };

        case ACTIVE_USER:
            return { ...state, allUsers: action.payload };

        case DESACTIVE_USER:
            return { ...state, allUsers: action.payload };


        case GET_ALL_POSTS_ID_USER:
            return { ...state, allPostsIdUser: action.payload }

        case GET_ALL_USERS:
            return { ...state, allUsers: action.payload };

        case USER_LOGIN:
            localStorage.setItem("userName", action.payload.userName);
            return { ...state, userLogin: action.payload };

        case LOGOUT_USER:
            return { ...state, userLogin: null };

        // case GET_BY_USER_NAME:
        //     return { ...state, byUserName: action.payload};

        case CREATE_USER_DATA:
            return {
                ...state,
            }
        case CREATE_USER:
            return {
                ...state,
            }

        case UPDATE_POST_USER:
            const updatedAllPosts = state.allPosts.map(post => {
                if (post.id === action.payload.id) {
                    return { ...post, ...action.payload };
                }
                return post;
            });
            return { ...state, allPosts: updatedAllPosts };

        case DELETE_POST_USER:
            return {
                ...state, allPosts: action.payload
            };


        case GET_USERS_COMPANIES:
            return { ...state, usersYcompanies: action.payload };

        case CREATE_PUBLICATION:
            return { ...state, allPosts: [...state.allPosts, { ...action.payload }] };


        // case CREATE_GOOGLE_USER:
        //   localStorage.setItem("userName", action.payload.userName);
        //   return { ...state, userLogin: action.payload };

        case FILTRAR_TIPO_EMPLEO:
            tipoEmpleoFiltrado = state.originalPosts.filter(post =>
                post.title?.toLowerCase().includes(action.payload?.toLowerCase().trim())
            );
            tipoEmpleoFilters = [...state.activeFilters];
            tipoEmpleoFilters.push(action.type);
            return { ...state, allPosts: tipoEmpleoFiltrado, activeFilters: tipoEmpleoFilters };

        case FILTRAR_CARGO:
            cargoFiltrado = state.originalPosts.filter(post =>
                post.title?.toLowerCase().includes(action.payload?.toLowerCase().trim())
            );
            cargoFilters = [...state.activeFilters];
            cargoFilters.push(action.type);
            return { ...state, allPosts: cargoFiltrado, activeFilters: cargoFilters };

        // case DELETE_COMMENT:
        //   return { ...state, comments: action.payload};

        case DEV_DATA:
            return {
                ...state,
            }

        default:
            return { ...state };
    }
}

export default reducer;