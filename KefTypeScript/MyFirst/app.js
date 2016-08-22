var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
var opts;
opts.commandline = '-hello world'; //ok
opts.commandline = ['-hello', 'world']; //ok
//opts.commandline = [42]; //Error!! Wrong type
if (opts.commandline.length === 0) {
    console.log("it's empty");
}
function formatCommandline(c) {
    if (typeof c === 'string') {
        return c.trim();
    }
    else {
        return c.join(' ');
    }
}
/**

TYPE GUARDS

A common pattern in JavaScript is to use typeof or instanceof to examine the type of an expression at runtime.
TypeScript now understands these conditions and will change type inference accordingly when used in an if block.
 */
//typeof
var x; //= /* */
if (typeof x === 'string') {
    console.log(x.substr(1)); //Error, ''
}
// x is still any here
x.unknown(); //ok
//instanceof
//Using instanceof with classes and union types:
var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.woof = function () { };
    return Dog;
}());
var Cat = (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () { };
    return Cat;
}());
var pet; // =/**/;
if (pet instanceof Dog) {
    pet.woof();
}
else {
}
/*
*
STRICTER GENERICS
*
With union types able to represent a wide range of type scenarios, we've decided to improve the strictness of certain generic calls.
Previously, code like this would (surprisingly) compile without error:
*/
function equal(lhs, rhs) {
    return lhs === rhs;
}
//Type aliases are exactly the same as their original types; they are simply alternative names.
var xx = 5;
var lat = 120.05;
var names = ['Ted', 'Michelle'];
var ages = [35, 55, 83];
var gender = 0 /* Male */;
/*Named Function*/
function displayOutput(msg) {
    content.innerHTML = msg;
}
/*Anonymous function with Type Inference     return type*/
var add = function (x, y) {
    return x + y;
};
add(1, 3);
/*the same as above but without Type Inference*/
var addWithoutTypeInference = function (x, y) {
    return x + y;
};
/* Lambda Functions */
var $ = function (id) { return document.getElementById(id); };
/* Class Function */
//no function syntaxt0
var Calc = (function () {
    function Calc() {
    }
    Calc.prototype.add = function (x, y) {
        return x + y;
    };
    return Calc;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map