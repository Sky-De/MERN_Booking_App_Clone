import { createContext, useReducer } from "react"

const INITIAL_STATE = {
    authOpen: false,
    reserveOpen: false,
    alertOpen: true,
}


export const ModelsContext = createContext(INITIAL_STATE);


const ModelsReducer = (state,action) => {
    switch (action.type) {
        case "OPEN_AUTH_MODEL":
            return {...state, authOpen: true}
        case "CLOSE_AUTH_MODEL":
            return {...state, authOpen: false}
        case "OPEN_RESERVE_MODEL":
            return {...state, reserveOpen: true}
        case "CLOSE_RESERVE_MODEL":
            return {...state, reserveOpen: false}
        case "OPEN_ALERT_MODEL":
            return {...state, alertOpen: true}
        case "CLOSE_ALERT_MODEL":
            return {...state, alertOpen: false}
        default:
            break;
    }
}

export const ModelsContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(ModelsReducer,INITIAL_STATE);

    return(
        <ModelsContext.Provider value={{
            authOpen: state.authOpen,
             reserveOpen: state.reserveOpen,
             dispatchModel: dispatch
            }}>{children}</ModelsContext.Provider> 
    )
}