
// Takes a string s and returns an array of numbers, operators +-*:() and parenthesis.
function splitString(s) {
    return s.split(/([\+\*\-\:\(\)])/g).filter(Boolean);
}

let s = "10+25*2-11*(48:2)";
console.log(splitString(s));