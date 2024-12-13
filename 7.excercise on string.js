//below is a user defined function 
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = ""
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " to the store. "
    return result
}

console.log(wordBlanks("dog","big","ran","quickly"))
console.log(wordBlanks("bike","slow","flew","slowly"))