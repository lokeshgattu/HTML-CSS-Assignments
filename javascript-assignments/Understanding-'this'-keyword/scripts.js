/*8. Understanding `this` in Functions: Write a function within an object and use the `this` keyword 
to access a property of the object. Log the value of the property to demonstrate how `this` works in the 
context of an object method.*/

// Define an object with a property and a method
let person = {
    name: "Lokesh Royal",
    greet: function() {

        // Use 'this' to access the name property of the object
        console.log("Hello, my name is " + this.name);

    }
};

// Call the greet method to demonstrate how 'this' works
person.greet();




