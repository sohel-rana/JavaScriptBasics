/**

 * User: Sohel
 * Date: 9/14/14
 * Time: 3:00 PM
 */


// object is copied by reference
var user = {
    firstName : 'Sohel',
    lastName : 'Rana'
};


var x = user;
x.nickname = "SR";

console.log(x);
console.log(user);


//another example
var a  = {
    x : 1,
    y : 10
};


var b = {
    x : 4,
    y : 11
};

console.log('a and b are two different object now', a , b);

a = b;

console.log('a and b are same object now', a, b);