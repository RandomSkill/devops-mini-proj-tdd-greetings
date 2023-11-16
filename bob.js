

const lang = ["EN","FR","NL"];

function bob(name,_lang){
   const l =  _lang ;
     console.log(l);

        switch  (l) {
            case "NL":
                if (!name || name.trim() === ''|| name === null) {
                    return "goetag, mijn freund.";
                }
                return "goetag,"+name; break;
            case "FR":
                if (!name || name.trim() === ''|| name === null) {
                    return "bonjour, mon ami.";
                }
                return "bonjour,"+name; break;
                default :
                if (!name || name.trim() === ''|| name === null) {
                    return "Hello, my friend.";
                }
                return "Hello,"+name;
            } 
        
}
bob("","FR");

module.exports =bob;