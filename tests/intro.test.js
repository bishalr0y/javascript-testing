import { expect, test, describe, it } from "vitest"

import { max, fizzBuzz } from "../src/intro"

describe("max", () => {
    test("returns the digit with max value", () => {
        // AAA -> Arrange, Act, Assert

        // Arrange
        const a = 10
        const b = 20

        // Act
        const result = max(a, b)

        // Assert
        expect(result).toBe(b)
    })
})

describe("fizzBuzz", () => {
    test("returns Fizz if divided by 3, Buzz if divided by 5 and FizzBuzz if divided by both ", () => {
        expect(fizzBuzz(90)).toBe("FizzBuzz")
        expect(fizzBuzz(10)).toBe("Buzz")
        expect(fizzBuzz(39)).toBe("Fizz")
    })
})
