
// JavaScript Sets
// const mySet = new Set(["a","b","c","a","d"]); //Set เป็น object ที่ใช้สำหรับเก็บข้อมูลที่ไม่ซ้ำกัน

// mySet.add("a");
// mySet.add("e"); // Adds a new element to the Set
// mySet.add("f");
// mySet.delete("f"); // Removes an element from a Set
// console.log(mySet);

// console.log("Size => " + mySet.size); // Returns the number of elements in a Set
// console.log(mySet.has("a")); // Returns true if a value exists in the Set
// console.log(mySet.has("f")); 

// mySet.forEach(element => {console.log(element)}); // method invokes (calls) a function for each Set element

// console.log(mySet.values()); //  method returns a new iterator object containing all the values in a Set
// for(let x of mySet.values()){console.log(x);} // use the Iterator object to access the elements


// JavaScript Maps
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]); // เป็น object ที่เราสามารถใช้เก็บข้อมูลในรูปแบบของ Key/Value

// fruits.set("kiwi", 600); // add elements to a Map
// fruits.set("apples", 300); // change existing Map values
// fruits.delete("bananas"); // removes a Map
// console.log(fruits);

// console.log(fruits.get("apples")); // gets the value of a key in a Map
// console.log(fruits.size);
// console.log(fruits.has("kiwi")); // returns true if a key exists in a Map
// console.log(fruits.has("bananas"));

// fruits.forEach((element,key) => { // calls a function for each key/value pair in a Map
//   console.log(key + " => " + element);
// });

// for (const x of fruits.entries()) { // returns an iterator object with the [key, values] in a Map
//     console.log(x);
// }

//Objects vs Maps
// const obj = {
//     1: 500,
//     "bananas": 300, // Have default keys
//     "oranges": 200
// }
// const maps = new Map([
//     [1, 500],
//     [, 300], // Do not have default keys
//     ["oranges", 200]
// ]);

// console.log(obj[1],maps[1]);

// console.log(Object.keys(obj)); //data type of the key can only be a string 
// console.log(maps.keys()); // Map takes any type of key

// console.log(Object.keys(obj).length); // Do not have a size property
// console.log(maps.size); //Have a size property

// maps.forEach((element,key) => { // Object can Not directly iterable
//     console.log(key + " => " + element);
// });


// JavaScript typeof
// console.log(typeof "John" ); // string
// console.log(typeof 3.14); // number
// console.log(typeof(typeof 3.14)); // string
// console.log(typeof NaN ); // number
// console.log(typeof false); // boolean
// console.log(typeof [1,2,3,4]); // object
// console.log(typeof {name:'John', age:34}); // object
// console.log(typeof new Date()); // object
// console.log(typeof function () {}); // function
// console.log(typeof myCar); // undefined
// console.log(typeof null); // object

// console.log("John".constructor);             // Returns function String()  {[native code]}
// console.log((3.14).constructor);             // Returns function Number()  {[native code]}
// console.log(false.constructor);                 // Returns function Boolean() {[native code]}
// console.log([1,2,3,4].constructor);            // Returns function Array()   {[native code]}
// console.log({name:'John',age:34}.constructor);  // Returns function Object()  {[native code]}
// console.log(new Date().constructor);          // Returns function Date()    {[native code]}
// console.log(function () {}.constructor);        // Returns function Function(){[native code]}

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.constructor === Array);

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars instanceof Array);
// console.log(cars instanceof Object);
// console.log(cars instanceof String);
// console.log(cars instanceof Number);


//JavaScript Type Conversion
// Converting Strings to Numbers
// console.log(Number("3.14"));
// console.log(Number(""));
// console.log(Number(" "));
// console.log(Number("99 88"));
// console.log(Number("A"));
// console.log(+ "5");
// console.log(+ "A");

// Converting Numbers to Strings
// console.log(String(123));      // returns a string from a number literal 123
// console.log(String(100 + 123));  // returns a string from a number from an expression
// console.log((123).toString()); 
// console.log((100 + 123).toString());

// // Converting Dates to Numbers
// console.log(Number(new Date()));
// console.log((new Date()).getTime());
// // Converting Dates to Strings
// console.log(String(new Date()));
// console.log((new Date()).toString());

// // Converting Numbers to Dates
// console.log(new Date(1703578925256));

// // Converting Booleans to Numbers
// console.log(Number(false));
// console.log(Number(true));

// // Converting Numbers to Booleans
// console.log(Boolean(1));
// console.log(Boolean(0));

// // Converting Booleans to Strings
// console.log(String(false));  // returns "false"
// console.log(String(true));      // returns "true"
// console.log(false.toString()); // returns "false"
// console.log(true.toString());   // returns "true"

// // Automatic Type Conversion
// // 5 + null    // returns 5         because null is converted to 0
// "5" + null  // returns "5null"   because null is converted to "null"
// "5" + 2     // returns "52"      because 2 is converted to "2"
// "5" - 2     // returns 3         because "5" is converted to 5
// "5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

// {name:"Fjohn"}  // toString converts to "[object Object]"
// [1,2,3,4]       // toString converts to "1,2,3,4"
// new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"

//JavaScript Bitwise Operations
// console.log(5 & 1);
// console.log(5 | 1);
// console.log(5 ^ 1);
// console.log(~5);
// console.log(5);       //0000000000000101
// console.log(5 << 1);  //0000000000001010
// console.log(5 >> 1);  //0000000000000010
// console.log(5 >>> 1); //0000000000000010
// console.log(-5);      //1111111111111011
// console.log(-5 << 1); //1111111111110110
// console.log(-5 >> 1); //1111111111111101
// console.log(-5 >>> 1);//0111111111111101
// << Shifts left by pushing zeros
// >>> Shifts right by pushing zeros
// >> Shifts right by pushing copies of the leftmost

// //Converting Decimal to Binary
// console.log((5 >>> 0).toString(2));
// //Converting Binary to Decimal
// console.log(parseInt("0000000000000101", 2).toString(10));

//JavaScript Regular Expressions
// let reg = " HELLO, LOOK AT YOU! Visit W3Schools \nIs this it? \nthis is w3Schools";
// console.log(reg);
// console.log(reg.match(/is/i)); //case-insensitive
// console.log(reg.match(/is/g)); // find all
// console.log(reg.match(/(is|w3Schools)/g));
// console.log(reg.match(/is/m)); //multiline line
// console.log(reg.match(/\d/g)); // Find a digit 
// console.log(reg.match(/\s/g)); // Find a whitespace character
// console.log(reg.match(/LO\b/)); // Find a match at the end  of a word 
// console.log(reg.match(/\bLO/)); // Find a match at the beginning of a word
// console.log(reg.match(/\u0057/g)); // Find the Unicode character specified by the hexadecimal number xxxx
// console.log(reg.match(/LO+/g)); //Matches any string that contains at least one o
// console.log(reg.match(/LO*/g)); //Matches any string that contains zero or more occurrences of n
// console.log(reg.match(/LO?/g)); //Matches any string that contains zero or one occurrences of n

// console.log(/E/.test(reg));// It searches a string for a pattern, and returns true or false
// console.log(/E/.exec(reg));// It searches a string for a pattern, and returns the found text as an object

//JavaScript Errors
// try {
//     adddlert("Welcome guest!"); //tested for errors while it is being executed
// }catch(err) {
//     console.log(err.name);
//     console.log(err.message); // executed, if an error occurs in the try block.
// }

// try {
//     if(4 < 5) throw "too low"; // throw => create a custom error.
// }catch(err) {
//     console.log("err = " + err);
// }finally {
//     console.log("finished");
//   }

// Error Object Properties
// try {
    // RangeError => //if you use a number that is outside the range of legal values
        // (100).toPrecision(500);   // A number cannot have 500 significant digits
    // ReferenceError => if you use (reference) a variable that has not been declared
        // x = y + 1;
    // SyntaxError => if you try to evaluate code with a syntax error.
        // eval("alert('Hello)");
    // TypeError => if an operand or argument is incompatible with the type expected by an operator or function
        // (100).toUpperCase();
    // URIError => if you use illegal characters in a URI function
        // decodeURI("%%%");
// }
// catch(err) {
//     console.log(err.name); 
//     console.log(err.message);
// }


//JavaScript Scope
//Block Scope
// {
//     var x = 2;
//     let y = 2;
//     const z = 2;
// }
// console.log(x);
// console.log(y); // y is not defined
// console.log(z); // z is not defined

// Function Scope
// myFunction();
// function myFunction() {
//     var x = 2;
//     let y = 2;
//     const z = 2;
// }
// console.log(x); // x is not defined
// console.log(y); // y is not defined
// console.log(z); // z is not defined

// Global Scope
// var x = 2;
// let y = 2;
// const z = 2;
// myFunction();
// function myFunction() {
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// Automatically Global
// myFunction();
// function myFunction() {
//     x = 2;
// }
// console.log(x);
// {
//     y = 2;
// }
// console.log(y);
