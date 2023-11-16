
const greet = require('./greet');

test("Saluer une personne", () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
});