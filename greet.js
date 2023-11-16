
const nameCase = {
    hello:0,
    and:1,
    AND_HELLO:2,
    noName:3,
    HELLO:4
};

const FR = ["Bonjour,","et","ET BONJOUR","Bonjour, mon ami.","BONJOUR,"];
const EN = ["Hello,","and","AND HELLO","Hello, my friend.","HELLO,"];
const ND = ["Hallo,","en","EN HALLO","Hallo, mijn vriend.","HALLO,"];



function greet(names,lang) {
  
   switch( lang) {
    case "FR":
        l=FR;break;
    case "ND":
        l=ND;break;
    default:
        l=EN;
   } 
    

    if (!names || (Array.isArray(names) && names.length === 0) || (typeof names === 'string' && names.trim() === '')) {
        return l[nameCase.noName];
    }

    if (Array.isArray(names)) {
        if (names.length === 2) {
            return l[nameCase.hello] +' '+ names[0] + " "+l[nameCase.and]+" " + names[1] + ".";
        } else if (names.length > 2) {
            const formattedNames = names.slice(0, -1).join(', ') + ", "+l[nameCase.and] +" " + names.slice(-1);
            return l[nameCase.hello]+" "+ formattedNames + ".";
        }

        const uppercaseNames = names.filter(name => typeof name === 'string' && name === name.toUpperCase());
        const lowercaseNames = names.filter(name => typeof name === 'string' && name !== name.toUpperCase());

        let greeting1 = "";
        let greeting2 = "";

        if (lowercaseNames.length > 0) {
            const lastTwoLowercaseNames = lowercaseNames.slice(-2).join(' '+l[nameCase.and] +' ');
            const otherLowercaseNames = lowercaseNames.slice(0, -2).join(', ');

            greeting1 = l[nameCase.hello]+ " " + otherLowercaseNames + (otherLowercaseNames ? ', ' : '') + lastTwoLowercaseNames + ".";
        }

        if (uppercaseNames.length > 0) {
            greeting2 = l[nameCase.AND_HELLO]+ ' ' + uppercaseNames.join(' ') + "!";
        }

        return greeting1 + " " + greeting2;
    }

    if (typeof names === 'string' && names === names.toUpperCase()) {
        return l[nameCase.HELLO]+' ' + names + "!";
    }

    return l[nameCase.hello]+' ' + names + ".";
}

module.exports = greet;
