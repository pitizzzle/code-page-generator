

// DATA TYPES

    // numbers
    0;
    1;
    123.123;
    // operators: + - * / %  (% is modulo, aka. the remainder of division)
    123 + 123 - 3 / 3234 * 194 % 3;
    // incl. grouping by paranthesis
    // * and / and % are resolved before + and -  (whole table: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)

// strings
    // three types of quotes: ' " `  (only `` quotes allow multi-line)
    'Hallo hallo\nNeue Zeile!'; // '\n' is new line
    "Hallo hallo\tEin Tab weiter"; // '\t' is tab
    `Hallo hallo
    Neue Zeile!`;  
    // string concatenation: +
    'Hallo hallo' + '\n' + 'Neue Zeile!';
    // put values in `` strings: ${}
    `Hallo, meine Lieblingszahl ist ${Math.random()}. Ist das nicht schön?`;

// boolean
    true;
    false;
    // logical 'AND' (true if both values are true)
    true && true;  // true
    true && false;  // false
    false && false; // false
    // logical 'OR' (true if at least one value is true)
    true || false; // true
    false || false; // false
    // logical negation (true if false, and false if true)
    !false; // true
    !true; // false
    // incl. grouping by paranthesis
    // first ! is resolved, then &&, and finally ||  (whole table: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)

// falsey values
    undefined; // default value of a variable or property that has no value so far
    null; // special value that is similar to undefined


// COMPARISION OPERATORS
// === and !==   (work for all data types)
console.log( false === false ); // → true
console.log( (123 !== 345) === !(123 === 345) ); // → true

// dont use == and !=  (they're weird)
console.log( '' == false ); // → true
console.log( '123131231gasdf' == true ); // → true


// < > <= >=   (work for numbers only)
console.log( 3>=2, 2>=2 ); // → true, true




// VARIABLES

// two/three types of variables

    // 'let' variables (standard)
    let myVariable = 123;
    myVariable = 'neuer wert';

    // 'const' variables (are not allowed to be re-assigned)
    const constantVariable = 123;
    constantVariable = 'neuer wert'; // → Error

    // 'var' variables (legacy/deprecated!)
    var myVar = 123; // somehow similar to 'let' but don't use it, it's old xD

// what you can do with variables...
    // declare
    let newVar; // is 'undefined'
    // declare + assign
    let number = 123;
    // assignment
    number = number + 1;
    // assignment short-hands
    number +=  1;  // assign-add
    number -= 1;   // assign-subtract
    number *= 1;   // assign-multiply
    number /= 1;   // assign-divide
    number %= 2;   // assign-modulo
    number++; // increment by 1 (after the evaluation)
    number--; // decrement by 1 (after the evaluation)
    ++number; // increment by 1 (before the evaluation)
    --number; // increment by 1 (before the evaluation)

// CONSOLE
console.log(123, 'ja hallo');





// FUNCTIONS

// declaration + definition
function scramble(a, b) {
    let c = 14 * b - a*4;
    return a / c + b;
}

// execution, calling a function
console.log( 'result:', scramble(4, 7) );


function empty(a, b) {
    a + b;
    // return; by default at the end
}

// defintion, stored on a variable
let scramble2 = function() {};
scramble2();


