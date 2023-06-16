import { CREATE_COMPANY } from "./actions"

const initialState = {
    users: [],
    users_date: [],
    companyies: [],

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case "SET_USERS":
            return {...state, users:action.payload}
        case "SET_COMPANIES":
            return {...state, companies: action.payload}
        case "CREATE_COMPANY":
            return {
                ...state,
            }
        default:
            return{...state};
    }
}

export default reducer;