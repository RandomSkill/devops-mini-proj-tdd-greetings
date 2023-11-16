

const lang = ["EN","FR","NL"];





function greet(name,_lang){
   const l =  _lang ;
     console.log(l);

        switch  (l) {
            case "NL":
                if (!name || (typeof name === 'string' && name.trim() === '')) {
                    return "Hallo, mijn vriend.";
                }
                return "Hallo, " + name + ".";break;
            case "FR":
                if (!name || (typeof name === 'string' && name.trim() === '')) {
                    return "bonjour, mon ami.";
                }
                return "bonjour, " + name + ".";break;
                default :
                if (!name || (typeof name === 'string' && name.trim() === '')) {
                    return "Hello, my friend.";
                }
                return "Hello, " + name + ".";
            } 
        
}
greet("","FR");

module.exports =greet;