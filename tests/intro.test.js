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
    test("returns Fizz if the number is divisible by 3", () => {
        expect(fizzBuzz(39)).toBe("Fizz")
    })

    test("returns Buzz if the number is divisible by 5", () => {
        expect(fizzBuzz(50)).toBe("Buzz")
    })

    test("returns FizzBuzz if the number is divisible by both 3 and 5", () => {
        expect(fizzBuzz(90)).toBe("FizzBuzz")
    })

    test("returns the number itself if it is not divisible by 3 or 5", () => {
        expect(fizzBuzz(91)).toBe("91")
    })
})
