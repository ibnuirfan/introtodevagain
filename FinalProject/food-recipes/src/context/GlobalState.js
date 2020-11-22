import React, {createContext, useReducer, useEffect } from 'react';
import AppReducer from "./AppReducer";

const initialState ={
    favouritelist: localStorage.getItem("favouritelist")
    ? JSON.parse(localStorage.getItem("favouritelist"))
    : [],
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    useEffect(() => {
        localStorage.setItem("favouritelist", JSON.stringify(state.favouritelist));
    }, [state]);

    const addRecipeToFavouriteList = (recipe) => {
        dispatch({ type: "ADD_RECIPE_TO_FAVOURITELIST", payload: recipe})
    }

    const removeRecipeFromFavouriteList = (recipe) => {
        dispatch({ type: "REMOVE_RECIPE_FROM_FAVOURITELIST", payload: recipe})
    }

    return (
        <GlobalContext.Provider 
        value={{
            favouritelist: state.favouritelist,
            addRecipeToFavouriteList,
            removeRecipeFromFavouriteList,
        }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};   