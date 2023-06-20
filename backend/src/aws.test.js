const assert = require("node:assert");
const { describe, it } = require("node:test");
const { extractExtension } = require("./aws");

describe("extractExtension when file name is 0_full.jpeg", () => {
  it("returns jpeg", () => {
    assert.equal(extractExtension("0_full.jpeg"), "jpeg");
  });
});

describe("extractExtension when file name is 0_full.bar.jpeg", () => {
  it("returns jpeg", () => {
    assert.equal(extractExtension("0_full.bar.jpeg"), "jpeg");
  });
});

describe("extractExtension when file name is 0_full", () => {
  it("returns jpeg", () => {
    assert.equal(extractExtension("0_full"), null);
  });
});
