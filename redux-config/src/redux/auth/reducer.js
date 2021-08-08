import { lOGIN_FAILURE, LOGIN_SUCCESS, lOGIN_REQUEST } from "./actiontype"

import { loadData, saveData } from "../../utils/localStorage"
//verify
//once verified

const token = loadData("token")
const initState = {
    isAuth: token ? true : false,
    token: token || "",
    isError: false,
    isLoding: false
}


const authreducer = (state = initState, { type, payload }) => {
    switch (type) {
        case lOGIN_REQUEST: {
            return {
                ...state,
                isError: false,
                isLoding: true
            }
        }
        case LOGIN_SUCCESS: {
            saveData("token", payload)
            return {
                ...state,
                isAuth: true,
                isLoding: false,
                token: payload
            }

        }
        case lOGIN_FAILURE: {
            return {
                ...state,
                isAuth: false,
                token: "",
                isError: true,
                isLoding:false
            }
        }
        default:
            return state
    }


}

export { authreducer }

