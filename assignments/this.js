/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding refers that the 'this' keyword is binded to the window object
* 2. Implicit binding refers that the 'this' keyword refers to the parent object it's being called under.
* 3. New binding is used with contructor functions and 'this' refers to the current object that's being called
* 4. Explicit binding is used whenver 'call' or 'apply' is called and 'this' is defined according to what is being called or applied
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function saySomething(text) {
    console.log(this);
    return text;
}

saySomething('hello');

// Principle 2

// code example for Implicit Binding
const obj = {
    greeting: 'hello',
    speak: function(name) {
        console.log(`${this.greeting} ${name}`);
    }
}

obj.speak('John');

// Principle 3

// code example for New Binding
function Person (gender, height, weight) {
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.attributes = function(){
        console.log(`This person is ${this.gender} and is ${this.height} tall and weights ${this.weight}lbs`);
    }
}

const dexter = new Person('Male', '5.8', 165);
const amy = new Person('Femail', '5.0', 105);

// Principle 4

// code example for Explicit Binding

dexter.attributes.call(amy);
amy.attributes.apply(dexter)
