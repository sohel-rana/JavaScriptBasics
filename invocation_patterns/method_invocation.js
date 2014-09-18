/**

 * User: Sohel
 * Date: 9/14/14
 * Time: 6:17 PM
 */

/**
 * function is a property of the object, so it is called as method
 * so a method invoked under an object is called method invocation pattern
 * @type {{salary: number, increment: increment, addNewProperty: addNewProperty}}
 */

var myObject = {
    salary : 3000,
    increment : function(inc){
        //here this refers to the object
        //so this method can access the object's property and modify them
        this.salary += typeof inc === "number"? inc : 1;
    },

    /**
     * It will add a new property  to the object and will initialize with the sent value
     * @param propertyName
     * @param value
     */
    addNewProperty : function(propertyName,value){
        if (this.hasOwnProperty(propertyName)){
            console.log("The object already owns the property : " + propertyName);
            this[propertyName] = value ? value :  this[propertyName];
        }
        else{
            this[propertyName] = value;
        }
    }
};


myObject.increment();
console.log(myObject.salary);
myObject.increment(3000);
console.log(myObject.salary);

//add age property to the object
myObject.addNewProperty("age", 30);
console.log(myObject);

//try to add same property again with some other value, the age will be updated to 25
myObject.addNewProperty("age", 25);
console.log(myObject);

//it will keep the same value of age
myObject.addNewProperty("age");
console.log(myObject);

//it will add the address property with undefined
myObject.addNewProperty("address");
console.log(myObject);