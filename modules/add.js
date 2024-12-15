/**
 * Example of documentation tests
 * https://docs.deno.com/runtime/fundamentals/testing/#documentation-tests
 *
 * # Examples
 *
 * ```ts
 * import { assertEquals } from "jsr:@std/assert/equals";
 *
 * const sum = add(1, 2);
 * assertEquals(sum, 3);
 * ```
 * @param a
 * @param b
 * @return {*}
 */
export function add(a,b){
    return a + b;
}