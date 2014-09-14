/**

 * User: Sohel
 * Date: 9/14/14
 * Time: 1:59 PM
 */

//create an object using literals
var user = {
    name  : 'Sohel',
    age : 30,
    address :{
        line1 : '43 Purana Paltan',
        line12 : 'Dhaka'
    },
    likes : ['crcket', 'music']
};

console.log(user);


//retrieve object properties

//using dot(.) notation
console.log('using .notation: ',user.name);

//using [] notation
console.log('using [] notation', user['address']);


//changing the property
//simply assign whatever you want using either dot(.)/[] notation

console.log('before changing name: ', user.name);

//change name
user.name = "Rana";

console.log('after changing name: ', user.name);