import { sum } from "./index.js";
import { test } from "node:test";
import assert from "node:assert";

test("seharusnya menambahkan dengan benar",
    () => {
        const actualValue = sum(1, 2);
        const expected = 3;

        assert.strictEqual(actualValue, expected);
    }
)
