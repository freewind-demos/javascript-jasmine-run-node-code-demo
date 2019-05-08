const hello = require('../src/hello');
const fs = require('fs');
const path = require('path');

describe("A suite", function () {
  it("contains spec with an expectation", function () {
    const content = fs.readFileSync(path.resolve(__dirname, 'support/jasmine.json'), 'utf-8')
    console.log(content);
    expect(hello()).toBe("Hello,world!");
  });
});
