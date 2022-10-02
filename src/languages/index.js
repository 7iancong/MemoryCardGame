import { SETTINGS } from "../utils/Settings"
import en from "../languages/en"
import zh_sg from "../languages/zh_sg"

export const getLanguage = () => {
    let language = {}
    switch (SETTINGS.LANGUAGE) {
        case "en":
            language = en
            break
        case "zh_sg":
            language = zh_sg
            break
        default:
            language = en
    }

    return language
}