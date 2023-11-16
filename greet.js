
function greet(names) {
    if (!names || (Array.isArray(names) && names.length === 0) || (typeof names === 'string' && names.trim() === '')) {
        return "Hello, my friend.";
    }

    if (Array.isArray(names)) {
        if (names.length === 2) {
            return "Hello, " + names[0] + " and " + names[1] + ".";
        }
    }

    if (names === names.toUpperCase()) {
        return "HELLO, " + names + "!";
    }

    return "Hello, " + names + ".";
}



module.exports = greet;
