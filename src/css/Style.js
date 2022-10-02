import styled from "styled-components/native"

import { StyleConfig } from "./StyleConfig"

export const AppView = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${props => {
        const value = StyleConfig[props.theme].bg
        return value
    }};
    display: flex;
`

export const HeaderView = styled.View`
    width: 100%;
    padding: ${StyleConfig.spacing.s};
    flex: 1 0 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RestartButton = styled.Button`
    color: ${props => {
        const value = StyleConfig[props.theme].text_link_interactive
        return value
    }};
`

export const StepsText = styled.Text`
    font-size: ${StyleConfig.fontSize.xl};
    color: ${props => {
        const value = StyleConfig[props.theme].text_pri
        return value
    }};
`

export const StepsTextHighlight = styled(StepsText)`
    color: ${props => {
        const value = StyleConfig[props.theme].text_link_interactive
        return value
    }};
`

export const ContainerCardView = styled.View`
    width: 100%;
    padding: ${StyleConfig.spacing.s};
    flex: 15 1 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const CardView = styled.TouchableOpacity`
    width: 30%;
    height: 23%;
    flex: 1 1 auto;
    border: 1px solid ${props => {
        const value = StyleConfig[props.theme].text_pri
        return value
    }};
    marginVertical: ${StyleConfig.spacing.s};
    marginHorizontal: ${StyleConfig.spacing.s};
    border-radius: ${StyleConfig.spacing.s};
    background-color: ${props => {
        const value = StyleConfig[props.theme].text_link_interactive
        return value
    }};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${props => {
        const value = StyleConfig[props.theme].bg
        return value
    }};
`

export const CardText = styled.Text`
    color: ${props => {
        const value = StyleConfig[props.theme].bg
        return value
    }};
    font-size: ${StyleConfig.fontSize.xl};
`

export const CardValueView = styled(CardView)`
    border-radius: ${StyleConfig.spacing.s};
    background-color: ${props => {
        const value = StyleConfig[props.theme].bg
        return value
    }};
`

export const CardValueText = styled(CardText)`
    color: ${props => {
        const value = StyleConfig[props.theme].text_pri
        return value
    }};
`

export const CardView2 = styled.TouchableOpacity`
    width: 30%;
    height: 23%;
    flex: 1 1 auto;
    marginVertical: ${StyleConfig.spacing.s};
    marginHorizontal: ${StyleConfig.spacing.s};
    display: flex;
`

export const CardView2Content = styled.View`
    border: 1px solid ${props => {
        const value = StyleConfig[props.theme].text_pri
        return value
    }};
    border-radius: ${StyleConfig.spacing.s};
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${props => {
        const value = StyleConfig[props.theme].text_link_interactive
        return value
    }};
`

export const CardView2ContentText = styled.Text`
    color: ${props => {
        const value = StyleConfig[props.theme].bg
        return value
    }};
    font-size: ${StyleConfig.fontSize.xl};
`

export const CardValueView2Content = styled(CardView2Content)`
    background-color: ${props => {
        const value = StyleConfig[props.theme].bg
        return value
    }};
`

export const CardValueView2ContentText = styled(CardView2ContentText)`
    color: ${props => {
        const value = StyleConfig[props.theme].text_link_interactive
        return value
    }};
`