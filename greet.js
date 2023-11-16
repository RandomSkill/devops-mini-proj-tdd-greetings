function greet(names) {
    if (!names || (Array.isArray(names) && names.length === 0) || (typeof names === 'string' && names.trim() === '')) {
        return "Hello, my friend.";
    }

    if (Array.isArray(names)) {
        if (names.length === 2) {
            return "Hello, " + names[0] + " and " + names[1] + ".";
        } else if (names.length > 2) {
            const formattedNames = names.slice(0, -1).join(', ') + ", and " + names.slice(-1);
            return "Hello, " + formattedNames + ".";
        }

        const uppercaseNames = names.filter(name => typeof name === 'string' && name === name.toUpperCase());
        const lowercaseNames = names.filter(name => typeof name === 'string' && name !== name.toUpperCase());

        let greeting1 = "";
        let greeting2 = "";

        if (lowercaseNames.length > 0) {
            const lastTwoLowercaseNames = lowercaseNames.slice(-2).join(' and ');
            const otherLowercaseNames = lowercaseNames.slice(0, -2).join(', ');

            greeting1 = "Hello, " + otherLowercaseNames + (otherLowercaseNames ? ', ' : '') + lastTwoLowercaseNames + ".";
        }

        if (uppercaseNames.length > 0) {
            greeting2 = "AND HELLO " + uppercaseNames.join(' ') + "!";
        }

        return greeting1 + " " + greeting2;
    }

    if (typeof names === 'string' && names === names.toUpperCase()) {
        return "HELLO, " + names + "!";
    }

    return "Hello, " + names + ".";
}

module.exports = greet;
