

function greet(name, _lang) {
  const l = _lang;
  console.log(l);

  switch (l) {
    case "NL":
      if (!name || (typeof name === "string" && name.trim() === "")) {
        return "Hallo, mijn vriend.";
      }
      if (name === name.toUpperCase()) {
        return "HALLO, " + name + "!";
      } else {
        return "Hallo, " + name + ".";
      }
      break;
    case "FR":
      if (!name || (typeof name === "string" && name.trim() === "")) {
        return "bonjour, mon ami.";
      }
      if (name === name.toUpperCase()) {
        return "BONJOUR, " + name + "!";
      } else {
      return "bonjour, " + name + ".";
      }
      break;
    default:
      if (!name || (typeof name === "string" && name.trim() === "")) {
        return "Hello, my friend.";
      }
      if (name === name.toUpperCase()) {
        return "HELLO, " + name + "!";
      } else {
      return "Hello, " + name + ".";
      }
  }
}

module.exports = greet;
