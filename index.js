/**
 * @format
 */

import React from "react"
import { AppRegistry } from "react-native"
import App from "./App"
// import App from "./AppDefault"
import { name as appName } from "./app.json"

import AppContextProvider from "./src/contexts/AppContext"

const Main = () => {
    return (
        <AppContextProvider>
            <App />
        </AppContextProvider>
    )
}

export default Main

AppRegistry.registerComponent(appName, () => Main)
