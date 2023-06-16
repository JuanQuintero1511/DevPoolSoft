import { users, companies } from "../bdd/baseDeDatos";
import axios from "axios"

export const CREATE_COMPANY = "CREATE_COMPANY"


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