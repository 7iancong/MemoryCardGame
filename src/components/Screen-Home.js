import React, { useContext, useEffect, useState } from "react"
import { Alert } from "react-native"

import { AppContext } from "../contexts/AppContext"
import { AppView, HeaderView, ContainerCardView, RestartButton, StepsText, StepsTextHighlight } from "../css/Style"
import Card from "./Component-Card"

const Home = () => {
    const { state } = useContext(AppContext)
    const theme = state.theme
    const [cards, setCards] = useState([])
    const [openCards, setOpenCards] = useState([])
    const [clearedCards, setClearCards] = useState({})
    const [isClickDisabled, setIsClickDisabled] = useState(false)
    const [steps, setSteps] = useState(0)

    const generateArrayOfUniqueNumbers = (n) => {
        let array = []
        for (let i = 0; i < n; i++) {
            // Returns a random integer from 0 to 100
            let num = Math.floor(Math.random() * 101)
            while (array.includes(num)) {
                num = Math.floor(Math.random() * 101)
            }
            array.push(num)
        }
        return array
    }

    const shuffleCards = (array) => {
        const length = array.length;
        for (let i = length; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * i);
            const currentIndex = i - 1
            const temp = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temp
        }
        return array;
    }

    const disableClick = () => {
        setIsClickDisabled(true)
    }

    const enableClick = () => {
        setIsClickDisabled(false)
    }

    const checkIsFlipped = (index) => {
        return openCards.includes(index)
    }

    const checkIsInactive = (value) => {
        return Boolean(clearedCards[value])
    }

    const checkCompletion = () => {
        if (Object.keys(clearedCards).length === cards.length/2) {
            // console.log("Game Completed! " + steps + " steps taken.");
            Alert.alert(
                "Congratulations!",
                "You completed the game in " + steps + " steps!",
                [
                    {
                        text: "Try another round",
                        onPress: () => handleRestartClick()
                    }
                ]
            )
        }
    }

    const evaluate = () => {
        const [index1, index2] = openCards
        // console.log("1", index1);
        // console.log("2", index2);
        if (cards[index1] === cards[index2]) {
            setClearCards({ ...clearedCards, [cards[index1]]: true })
        }
        const timer = setTimeout(() => {
            setOpenCards([])
            enableClick()
            clearTimeout(timer)
        }, 1000)
    }

    const handleCardClick = (index) => {
        console.log("clicked", index);
        if (openCards.length === 1) {
            setOpenCards([...openCards, index])
            disableClick()
        }
        else {
            setOpenCards([index])
        }
        setSteps(steps+1)
    }

    const handleRestartClick = () => {
        setOpenCards([])
        setClearCards({})
        setIsClickDisabled(false)
        setSteps(0)
        console.log("Restarting game...");
        const arrayUnique = generateArrayOfUniqueNumbers(6)
        console.log("unique array", arrayUnique);
        setCards(shuffleCards(arrayUnique.concat(arrayUnique)))
    }

    const renderCards = (array) => {
        if (array.length > 0) {
            return array.map((value, index) => {
                return (
                    <Card
                        key={index}
                        index={index}
                        value={value}
                        isFlipped={checkIsFlipped(index)}
                        isInactive={checkIsInactive(value)}
                        isClickDisabled={isClickDisabled}
                        setSteps={setSteps}
                        onClick={() => handleCardClick(index)}
                    />
                )
            })
        }
    }

    useEffect(() => {
        console.log("App launch");
        const arrayUnique = generateArrayOfUniqueNumbers(6)
        console.log("unique array", arrayUnique);
        setCards(shuffleCards(arrayUnique.concat(arrayUnique)))
    }, [])    

    useEffect(() => {
        if (openCards.length === 2) {
            evaluate()
        }
    }, [openCards])

    useEffect(() => {
        console.log("cards", cards);
    }, [cards])

    useEffect(() => {
        console.log("clearedCards", clearedCards);
        checkCompletion()
    }, [clearedCards])

    return (
        <AppView theme={theme}>
            <HeaderView>
                <RestartButton theme={theme} title="Restart" onPress={() => handleRestartClick()} />
                <StepsText>STEPS: <StepsTextHighlight theme={theme}>{steps}</StepsTextHighlight></StepsText>
            </HeaderView>
            <ContainerCardView>
                {renderCards(cards)}
            </ContainerCardView>
        </AppView>
    )
}

export default Home