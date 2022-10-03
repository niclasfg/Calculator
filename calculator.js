
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
    s = doMultiplication(s);
    s = doAddition(s);
    s = doSubtraction(s);
    return s;
}

function doMultiplication(s){
    while (s.includes('*')) {
        let index = s.indexOf('*');
        let beforeIndex = Math.max(s.slice(0,index).indexOf('+'), s.slice(0,index).indexOf('-'));
        let nextPlusIndex = s.indexOf('+', index); 
        let nextMinusIndex = s.indexOf('-',index);
        if (nextPlusIndex == -1) {
            nextPLusIndex = s.length;
        }
        if (nextMinusIndex == -1) {
            nextMinusIndex = s.length;
        }
        let nextIndex = Math.min(nextPlusIndex, nextMinusIndex);
        let s1 = calculate(s.slice(beforeIndex+1, index));
        let s2 = calculate(s.slice(index+1,nextIndex));
        let result = (parseInt(s1) * parseInt(s2));
        s = s.slice(0,beforeIndex+1) + result.toString() + s.slice(nextIndex);
    }
    return s;
}

function doAddition(s) {
    if (s.includes('+')) {
        let index = s.indexOf('+');
        let s1 = calculate(s.slice(0, index));
        let s2 = calculate(s.slice(index+1));
        let result = (parseInt(s1)+parseInt(s2));
        return result.toString();
    }
    return s;
}

function doSubtraction(s) {
    if (s.includes('-')) {
        let index = s.indexOf('-');
        let s1 = calculate(s.slice(0, index));
        let s2 = calculate(s.slice(index+1));
        let result = (parseInt(s1)-parseInt(s2));
        return result.toString();
    }
    return s;
}

let s = "2*4+12";
console.log("L31: " + calculate(s));
