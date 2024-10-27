import { expect, test, describe } from "vitest"

import { max, fizzBuzz, factorial } from "../src/intro"

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

describe("factorial", () => {
    test("returns 1 if n is 0", () => {
        expect(factorial(0)).toBe(1)
    })

    test("returns 1 if n is 1", () => {
        expect(factorial(1)).toBe(1)
    })

    test("returns undefined if n is negative", () => {
        expect(factorial(-10)).toBe(undefined)
    })

    test("returns 120 if n is 5", () => {
        expect(factorial(5)).toBe(120)
    })
})
