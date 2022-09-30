import React, { useContext } from "react"

import { AppContext } from "../contexts/AppContext"
import { CardView, CardValueView, CardText, CardValueText } from "../css/Style"

const Card = (props) => {
    const { state } = useContext(AppContext)
    const theme = state.theme
    // console.log("card", props);
    const { index, value, isFlipped, isInactive, isClickDisabled, setSteps, onClick } = props

    const handleClick = () => {
        if (isFlipped === false && isClickDisabled === false) {
            onClick()
        }
    }

    return (
        isInactive !== true && isFlipped !== true ? (
            <CardView theme={theme} onPress={() => handleClick()}>
                <CardText theme={theme}>
                    ?
                </CardText>
                {/* <CardText theme={theme}>
                    {value}
                    {"\n"}F: {isFlipped.toString()}
                    {"\n"}I: {isInactive.toString()}
                </CardText> */}
            </CardView>
        ) : (
            <CardValueView theme={theme}>
                <CardValueText theme={theme}>
                    {value}
                </CardValueText>
                {/* <CardValueText theme={theme}>
                    {value}
                    {"\n"}F: {isFlipped.toString()}
                    {"\n"}I: {isInactive.toString()}
                </CardValueText> */}
            </CardValueView>
        )
    )
}

export default Card