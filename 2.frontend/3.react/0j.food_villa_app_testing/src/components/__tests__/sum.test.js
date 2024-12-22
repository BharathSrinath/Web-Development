import { sum } from "../sum";

test("Check for sum of 2 positive numbers", () => {
    expect(sum(2,5)).toBe(7);
})