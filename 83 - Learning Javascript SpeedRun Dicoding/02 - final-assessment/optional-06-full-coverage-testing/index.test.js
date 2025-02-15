import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test("seharusnya menambahkan dengan benar positive",
    () => {
        assert.strictEqual(sum(2, 3), 5);
        assert.strictEqual(sum(10, 20), 30);
    }
)

test("seharusnya hasil return 0 jika salah satu parameter bukan number",
    () => {
        assert.strictEqual(sum('a', 3), 0);
        assert.strictEqual(sum(2, null), 0);
        assert.strictEqual(sum(undefined, 5), 0);
        assert.strictEqual(sum({}, []), 0);
    }
)