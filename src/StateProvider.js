// setup data layer
// need this to track the basket

import React, { createContext, useContext, useReducer} from "react";

//data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({reducer, initialState, children  }) => ( 
    <StateContext.Provider value={useReducer(reducer, initialState)}>{children}
    </StateContext.Provider>
)
// this is how we uses it inside of a component
export const useStateValue =()=>useContext(StateContext);