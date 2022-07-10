import { sum } from "./calc.ts";
import { assertEquals } from "https://deno.land/std@0.147.0/testing/asserts.ts";

Deno.test
("Sum function",
() => {
    const n1 = 1
    const n2 = 2

    const result = sum(n1,n2)

    assertEquals(result, n1+n2)
})