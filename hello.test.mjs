import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("hello.md", () => {
  const filePath = resolve(import.meta.dirname, "hello.md");

  it("exists and contains exactly 'Hello from Sandcastle'", () => {
    const content = readFileSync(filePath, "utf-8");
    assert.equal(content.trim(), "Hello from Sandcastle");
  });
});
