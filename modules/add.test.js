import {assertEquals} from "@std/assert";
import {add} from "./add.js";

const {test} = Deno

test("foo", () => {
    assertEquals(add(2, 3), 5);
});
