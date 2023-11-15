const bob = require('./bob');

test('test the test funct in test file', () => {
    expect(bob()).toBe("bob");
});