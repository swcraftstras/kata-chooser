import {assertEquals} from "@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import {add} from "./add.js";

describe("add", () => {
    it("adds 2 numbers", () => {
        assertEquals(add(2, 3), 5);
    });
})
