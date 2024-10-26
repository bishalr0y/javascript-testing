import { expect, test, describe } from "vitest"

import { max, fizzBuzz } from "../src/intro"

describe("max", () => {
    test("returns the first argument if it is greater", () => {
        // AAA -> Arrange, Act, Assert

        // Arrange
        const a = 30
        const b = 20

        // Act
        const result = max(a, b)

        // Assert
        expect(result).toBe(a)
    })

    test("returns the second argument if it is greater", () => {
        expect(max(5, 10)).toBe(10)
    })

    test("return the first argument if both the arguments are equal", () => {
        expect(max(1, 1)).toBe(1)
    })
})

describe("fizzBuzz", () => {
    test("returns Fizz if divided by 3, Buzz if divided by 5 and FizzBuzz if divided by both ", () => {
        expect(fizzBuzz(90)).toBe("FizzBuzz")
        expect(fizzBuzz(10)).toBe("Buzz")
        expect(fizzBuzz(39)).toBe("Fizz")
    })
})
