
// Takes a string s and returns an array of numbers, operators +-*:() and parenthesis.
function splitString(s) {
    return s.split(/([\+\*\-\:\(\)])/g).filter(Boolean);
}

function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }

function calculate(s){
    console.log("L8: " + s);
    if (containsOnlyNumbers(s)) {
        return s;
    }
    if (s.includes('+')) {
        let index = s.indexOf('+');
        let s1 = calculate(s.slice(0, index));
        let s2 = calculate(s.slice(index+1));
        let result = (parseInt(s1)+parseInt(s2));
        return result.toString();
    }
    if (s.includes('-')) {
        let index = s.indexOf('-');
        let s1 = calculate(s.slice(0, index));
        let s2 = calculate(s.slice(index+1));
        let result = (parseInt(s1)-parseInt(s2));
        return result.toString();
    }
}


//let s = "10+25*2-11*(48:2)";
let s = "58274+27857-27363";
console.log("L31: " + calculate(s));
