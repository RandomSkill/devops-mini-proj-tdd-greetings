

function greet(name, _lang) {
  const l = _lang;
  console.log(l);

  switch (l) {
    case "NL":
     return hallo;
      break;
    case "FR":
      return bonjour(name);
      break;
    default:
        return hello(name);
      
  }
}

function hallo(name){
    if (!name || (typeof name === "string" && name.trim() === "")) {
        return "Hallo, mijn vriend.";
      }
      if (name === name.toUpperCase()) {
        return "HALLO, " + name + "!";
      } else {
        return "Hallo, " + name + ".";
      }
}

function bonjour(n) {
    if (!n || (typeof n === "string" && n.trim() === "")) {
        return "bonjour, mon ami.";
      }

    if (n === n.toUpperCase()) {
        return "BONJOUR, " + n + "!";
      } else {
      return "bonjour, " + n + ".";
      }   
};

function hello(name){
    if (!name || (typeof name === "string" && name.trim() === "")) {
        return "Hello, my friend.";
      }
      if (name === name.toUpperCase()) {
        return "HELLO, " + name + "!";
      } else {
      return "Hello, " + name + ".";
      }
};
module.exports = greet;
