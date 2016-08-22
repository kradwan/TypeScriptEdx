class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

/*
Union Types
*/
interface RunOptions {
    program: string;
    commandline: string[] | string;
}

var opts: RunOptions ;
opts.commandline = '-hello world';//ok
opts.commandline = ['-hello', 'world'];//ok
//opts.commandline = [42]; //Error!! Wrong type

if (opts.commandline.length === 0) {
    console.log("it's empty");
}

function formatCommandline(c: string[] | string) {
    if (typeof c === 'string') {
        return c.trim();
    } else {
        return c.join(' ');
    }
}

/**

TYPE GUARDS

A common pattern in JavaScript is to use typeof or instanceof to examine the type of an expression at runtime.
TypeScript now understands these conditions and will change type inference accordingly when used in an if block.
 */
//typeof
var x: any; //= /* */
if (typeof x === 'string') {
    console.log(x.substr(1));//Error, ''
}
// x is still any here
x.unknown(); //ok

//instanceof
//Using instanceof with classes and union types:
class Dog { woof() { } }
class Cat { meow() { } }
var pet: Dog | Cat;// =/**/;
if (pet instanceof Dog) { 
    pet.woof();
} else {
   // pet.woof; //Error !!
}

/*
*
STRICTER GENERICS
*
With union types able to represent a wide range of type scenarios, we've decided to improve the strictness of certain generic calls.
Previously, code like this would (surprisingly) compile without error:
*/
function equal<T>(lhs: T, rhs: T): boolean {
    return lhs === rhs;
}
//Previously: No error
//New behaviour: Error, no best common type between 'string' and 'number'
//var e = equal(42, 'hello');

/*
*
BETTER TYPE INFERENCE
*
Union types also allow for better type inference in arrays and other places where you might have multiple kinds of values in a collection:
*/
//var x = [1, 'world']; // x: Array<string|number>
//x[0] = 'hello'; // OK
//x[0] = false; // Error, boolean is not string or number

/*
TYPE ALIASES

You can now define an alias for a type using the type keyword:
*/
type PrimitiveArray = Array<string | number | boolean>;
type MyNumber = number;
type int = number; //duble is number??
type float = number;
type StringArray = string[];
type NumberArray = number[];
//type NgScope = ng.IScope; Error
type Callback = () => void;
//Type aliases are exactly the same as their original types; they are simply alternative names.

var xx : int = 5;
var lat: float = 120.05;
var names: StringArray = ['Ted', 'Michelle'];
var ages: NumberArray = [35, 55, 83];

/*

Enums

const enumes help to reduce the number of code, during compilation time there just numbers provided instead of full names of enums like Female
*/
const enum Gender { Male, Female }
var gender = Gender.Male;

/*Named Function*/
function displayOutput(msg: string) {
    content.innerHTML = msg;
}

/*Anonymous function with Type Inference     return type*/
var add = function (x: number, y: number): number {
    return x + y;
}
add(1, 3);
/*the same as above but without Type Inference*/
var addWithoutTypeInference: (x: number, y: number) => number =
    function (x: number, y: number): number {
        return x + y;
    }

/* Lambda Functions */
var $ = (id) => document.getElementById(id);

/* Class Function */
//no function syntaxt0
class Calc {
    add(x: number, y: number): number {
        return x + y;
    }
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};