import { useReducer } from "react";
import { createContext } from "react";


const INITIAL_STATE = {
    destination: undefined,
    date:[{
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }],
    options: {
        adult: undefined,
        children: undefined,
        room: 1
    }
};


export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state,action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;
    }
};

export const SearchContexProvider = ({ children }) => {
    const [state,dispatch] = useReducer(SearchReducer,INITIAL_STATE);
    return(
        <SearchContext.Provider value={{destination: state.destination, date: state.date, options: state.options, dispatchSearch:dispatch }}>
            {children}
        </SearchContext.Provider>
    )
}