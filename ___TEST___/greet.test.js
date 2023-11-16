
const greet = require('../greet');

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

test("when name is an array of two names", () => {
    expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
});

test("when name is an array with more than two names", () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
    expect(greet(["Alex", "David", "Eva", "Frank"])).toBe("Hello, Alex, David, Eva, and Frank.");
});

test("when name is an array with a mix of normal and uppercase names", () => {
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy, BRIAN, and Charlotte.");
});