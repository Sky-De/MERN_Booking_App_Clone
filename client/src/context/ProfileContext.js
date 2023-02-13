import { useReducer } from "react";
import { createContext } from "react";


const INITIAL_STATE = {
    rooms: null,
    dates:null
};


export const ProfileContext = createContext(INITIAL_STATE);

const ProfileReducer = (state,action) => {
    switch (action.type) {
        case "RESERVE_ROOM":
            return action.payload;
        default:
            return state;
    }
};

export const SearchContexProvider = ({ children }) => {
    const [state,dispatch] = useReducer(ProfileReducer,INITIAL_STATE);
    return(
        <ProfileContext.Provider value={{rooms:state.rooms, dates:state.dates, dispatchProfile:dispatch }}>
            {children}
        </ProfileContext.Provider>
    )
}