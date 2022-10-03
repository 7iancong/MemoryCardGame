import { checkCompletion, generateArrayOfUniqueNumbers, shuffleCards } from "../src/components/Screen-Home"
import { getLanguage } from "../src/languages"

describe("Game initialisation", () => {
  test("the array size generated is correct", () => {
    expect(generateArrayOfUniqueNumbers(6).length).toEqual(6)
  })
  test("the array is properly shuffled", () => {
    let arrayA = [1, 2, 3, 4]
    let arrayB = [...arrayA]
    shuffleCards(arrayB)
    expect(JSON.stringify(arrayA)).not.toBe(JSON.stringify(arrayB))
  })
})

describe("Game completion", () => {
  test("test for successful game completion", () => {
    expect(checkCompletion({"1": true, "2": true}, [1, 2, 1, 2], 0, () => {}, getLanguage())).toBeTruthy()
  })
  test("test for unsuccessful game completion", () => {
    expect(checkCompletion({"1": true}, [1, 2, 1, 2], 0 , () => {}, getLanguage())).not.toBeTruthy()
  })
})