/**

 * User: Sohel
 * Date: 9/14/14
 * Time: 3:43 PM
 */


var user = {
    firstName : 'Sohel',
    lastName : 'Rana'
};


//using an object as prototype of another object
if(typeof Object.create !== 'function'){
    Object.create = function(o){
        var F =  function(){};
        //we could also write?
        //var F = {};
        //works though

        F.prototype = o;
        return new F();
    };
}

//another version
var CreateObject = function(o){
    var F =  function(){};
    //we can not write write
    //var F = {};
    F.prototype = o;
    return new F();
};


var another_user = Object.create(user);

another_user.firstName = "Masud";
another_user.lastName = "Rahaman";

console.log("user: ", user);
console.log("another user: ", another_user);

//create another object(another_user2)
var another_user2 = CreateObject(another_user);
another_user2.firstName = "Mustafizur";
another_user2.lastName = "Rahman";
console.log("another user2: ", another_user2);

//add a new property to another_user
another_user.nickname = "MR";
console.log("another_user after nick has been added: ", another_user);

//now try to print nick for another user2. What do you expect?
console.log("another_user2's nick", another_user2.nickname, ", but another_user2:",another_user2);
console.log("whoa, this is happened due to prototype chain. If a property is not found in an object, then it will search to it's prototype.");

//delete another_user's nickname
delete  another_user.nickname;
console.log("after deleting another_user's nick, another user2's nick is ", another_user2.nickname);

