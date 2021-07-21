const { arrayContaining } = require("expect")

function findMatching(array, matchName){
    matchName = matchName.toUpperCase()
    return array.filter(function(x){return x.toUpperCase() === matchName});
}

function fuzzyMatch(array, prefix){
    return array.filter(el => el.startsWith(prefix)) 
}

function matchName(array, string){
    return array.filter(el => el.name === string)
}