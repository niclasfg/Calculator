function calculate(s){
    function comma(a,b){return a.toString()+"."+b.toString();}

    function multiply(a,b){return a*b;}

    function divide(a,b){
        if(b == 0){ throw "You can't divide by zero."; }
        return a/b;
    }

    function add(a,b){return a+b;}

    function subtract(a,b){return a-b;}
    
    console.log("L8: " + s);
    let signs = [".", "/", "*", "+", "-"];
    let funcs = [comma, divide, multiply, add, subtract];
    let tokens = s.split(/\b/);
    for (let round = 0; round < signs.length; round++) {
        console.log("L25: " + tokens.join(" "));          
        for (let place = 0; place <tokens.length; place++) {
            if (tokens[place] == signs[round]) {
                let a = parseFloat(tokens[place - 1]);
                let b = parseFloat(tokens[place + 1]);
                let result = funcs[round](a,b);
                tokens[place -1] = result.toString();
                tokens.splice(place--, 2);
            }
            
        }
    }
    return tokens[0];
}


let s = "10/5*3.14*6.25/3+56/4.6-7*0.23/0.12";
console.log("L31: " + calculate(s));
