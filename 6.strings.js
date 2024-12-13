var firstName = "free" // anything enclosed with in "" or ''
var lastName = " frick"


console.log(name)

//escaping sequences

var myStr = "I am a \"double quoted powerful sentence\""
// \" is an escape sequence for " in a string

console.log(myStr)

//escape sequences

/* single quotes
\' double quotes
\" backslash
\\ newline
\n carriage return
\r tab
\t tab
\b backspace
\f from feed

*/

//concatinating string
var name = firstName + lastName

var my = "lol " + "i am so funny right "
console.log(my)

//also
my += my
console.log(my)

//length of a string
length = my.length // variableName.length
console.log(length) 

//to find character in a string
var first = my[0]
var second = my[1]

console.log(first,second)

//strings are immutable 
// you can change the string but not the string like a charecter
var nok = "Fi!"
nok[0] = "h"
console.log(nok)// won't work

var lastLetter =  nok[nok.length - 1] //last letter
console.log(lastLetter)

