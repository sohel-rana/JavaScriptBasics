/**

 * User: Sohel
 * Date: 3/22/15
 * Time: 6:05 PM
 */

/**
 * As functions are objects, they can have methods.  Apply method helps us to invoke a function using an array of arguments.
 * It takes two parameters. The first one is where this will be bounded. The second one is the array of parameters
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


//an object literal, not created from Quo. So it does not have the getStatus method
var newStatus = {
    status : 'JavaScript is like a girl :P'
};

//call getStatus on behalf of newStatus
console.log(Quo.prototype.getStatus.apply(newStatus));