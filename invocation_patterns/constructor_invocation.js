/**

 * User: Sohel
 * Date: 3/22/15
 * Time: 5:58 PM
 */

/**
 * Constructor invocation pattern is when a function is invoked using new prefix.
 * It will then create a new object with a hidden link to the function's prototype member and
 * 'this' will be bound to  new object
 */


/**
 *
 * @param string
 * @constructor
 */
var Quo = function (string){
    this.status = string;
};


//add a public method to all instances of Quo
Quo.prototype.getStatus = function(){
    return this.status;
};


var temp = new Quo('Sohel');

console.log(temp.getStatus());

temp.sayHello = function () {
   console.log('Added a hello method to this object only. Hi there!!!');
};

temp.sayHello();


var anotherQuo = new Quo('confused');
anotherQuo.sayHello(); // this will be undefined
