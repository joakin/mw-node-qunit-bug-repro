const test = require("./index.js");

QUnit.module("Test");

QUnit.test(
  "This test should fail because index.js can't be required",
  assert => {
    assert.equal(test(), 1);
  }
);
