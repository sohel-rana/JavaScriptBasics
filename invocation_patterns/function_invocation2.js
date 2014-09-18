/**

 * User: Sohel
 * Date: 9/19/14
 * Time: 1:20 AM
 */

/**
 * function invocation pattern is when function is called as individual. That means if it is not a part of an object, then it remains in global scope. It is independent function and part of the global
 */


(function(){
    function add(a,b){
        //console.log(this); //if you run this in developer console then you will see Window
        return a + b;
    }


    var sum = add (5,6);

    console.log(sum);


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


    /**
     * la la la! double my salary, huh!
     */
    myObject.doubleMySalary = function(){

        var that = this; // this = myObject
        console.log(this, this.salary); // salary is available

        var helper = function(){
             console.log(this, that); // this = Window !!!
            // this will not work because of design error, inner function will not have same "this" as the outer  "this"
            // but it will be able to access variable of the outer function
            // so we are using that(outer var refers to this)
            that.salary = add(that.salary, that.salary);

            //double again, I have got 4 times increment :D, but this time myObject is not in global space. So we can not use this.myObject
            that.salary = add(that.salary, that.salary);
            // ^^ here this is refers to window(global scope). myObject is in global scope as well. So we can use this.myObject.salary to access the salary

            //interesting fact
            this.helloWorld = "Define that in global scope even we are inside a scope";
        };

        helper();
    };

    myObject.doubleMySalary();

    console.log(myObject.salary);

    console.log(window.helloWorld);
}());
