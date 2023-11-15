

function bob(name){
    if (!name || name.trim() === ''|| name === null) {
        return "Hello, my friend.";
    }
    return "Hello,"+name;
}
module.exports =bob;