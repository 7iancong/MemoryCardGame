import React, { useContext, useEffect, useRef } from "react"
import { Animated, Text, StyleSheet, View } from "react-native"

import { AppContext } from "../contexts/AppContext"
import { CardView2, CardView2Content, CardValueView2Content, CardView2ContentText, CardValueView2ContentText } from "../css/Style"

const Card = (props) => {
    const { state } = useContext(AppContext)
    const theme = state.theme
    const { index, value, isFlipped, isInactive, isClickDisabled, onClick } = props

    const animate = useRef(new Animated.Value(0))
    const interpolateFront = animate.current.interpolate({
        inputRange: [0, 180],
        outputRange: ["0deg", "180deg"]
    })
    const interpolateBack = animate.current.interpolate({
        inputRange: [0, 180],
        outputRange: ["180deg", "360deg"]
    })

    const handleClick = () => {
        if (isInactive === false && isFlipped === false && isClickDisabled === false) {
            onClick()
        }
    }

    useEffect(() => {
        if (isInactive === false) {
            Animated.timing(animate.current, {
                duration: 500,
                toValue: isFlipped ? 180 : 0,
                useNativeDriver: true,
            }).start()
        }
    }, [isFlipped, isInactive])

    const styles = StyleSheet.create({
        cardContent: {
            flex: 1,
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            position: "absolute"
        },
    })

    return (
        <CardView2 theme={theme} onPress={() => handleClick()}>
            <Animated.View style={[styles.cardContent, { transform: [{ rotateY: interpolateBack }] }]}>
                <CardValueView2Content theme={theme}>
                    <CardValueView2ContentText theme={theme}>
                        {value}
                    </CardValueView2ContentText>
                </CardValueView2Content>
            </Animated.View>
            <Animated.View style={[styles.cardContent, { transform: [{ rotateY: interpolateFront }] }]}>
                <CardView2Content theme={theme}>
                    <CardView2ContentText theme={theme}>
                        ?
                    </CardView2ContentText>
                </CardView2Content>
            </Animated.View>
        </CardView2>
    )
}

export default Card