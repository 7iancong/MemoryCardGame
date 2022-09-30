import React, { createContext, useReducer, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

import AppReducer from "../reducers/AppReducer"

export const AppContext = createContext()

let initialState = {
    theme: "defaultTheme"
}

const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        const initTheme = async() => {
            try {
                const value = await AsyncStorage.getItem("theme")
                if (value === null) {
                    await AsyncStorage.setItem("theme", JSON.stringify(initialState.theme))
                }
                dispatch({type: "SET_THEME", theme: value !== null ? JSON.parse(value) : initialState.theme})
            }
            catch(e) {
                console.log("Get theme error (AppContext)", e);
            }
        }

        initTheme()
    }, [])

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider