import React, { createContext, useReducer, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

import AppReducer from "../reducers/AppReducer"
import { SETTINGS } from "../utils/Settings"

export const AppContext = createContext()

let initialState = {
    // theme: "lightTheme"
    theme: SETTINGS.THEME
}

const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        const initTheme = async() => {
            try {
                // await AsyncStorage.clear();
                dispatch({type: "SET_THEME", theme: initialState.theme})

                // For saving theme settings
                // const value = await AsyncStorage.getItem("theme")
                // if (value === null) {
                //     await AsyncStorage.setItem("theme", JSON.stringify(initialState.theme))
                // }
                // dispatch({type: "SET_THEME", theme: value !== null ? JSON.parse(value) : initialState.theme})
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