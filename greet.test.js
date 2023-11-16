
const greet = require('./greet');

test("Saluer une personne", () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
});

test("Gérer les valeurs nulles, undefined et vide", () => {
    expect(greet(null)).toBe("Hello, my friend.");
    expect(greet(undefined)).toBe("Hello, my friend.");
    expect(greet("")).toBe("Hello, my friend.");
});

test("when name is in uppercase", () => {
    expect(greet("BOB")).toBe("HELLO, BOB!");
});