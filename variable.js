// variable

//var
var x = 5; 
console.log("(var start) x = " + x);

var x = 6; // Redeclare => Yes
console.log("(var Redeclare) x = " + x);

x = 7; // Reassign => Yes
console.log("(var Reassign) x = " + x);

//block scope => No 
var x_scope = 14;
console.log("(var before scope) x = " + x_scope); 
{
    var x_scope = 15;
}
console.log("(var after scope) x = " + x_scope); 

//--------------------------------------------

// //let
// let y = 8;
// console.log("(let start) y = " + y);

// // let y = 9; // Redeclare => No
// // console.log("(let Redeclare) y = " + y);

// y = 10; // Reassign => Yes
// console.log("(let Reassign) y = " + y);

// // block scope => Yes
// let y_scope = 16
// console.log("(let before scope) y = " + y_scope); 
// {
//     let y_scope = 17
// }
// console.log("(let after scope) y = " + y_scope); 

//---------------------------------------------

// const z = 11;
// console.log("(const start) z = " + z);
// //const z = 12; 
// //console.log("(let Redeclare) z = " + z)// Redeclare => No
// //z = 13; 
// console.log("(let Reassign) z = " + z) // Reassign => No

// // block scope => Yes 
// let z_scope = 18
// console.log("(let before scope) y = " + y_scope); 
// {
//     let z_scope = 19
// }
// console.log("(const scope) z = " + z_scope); 
// console.log("(let after scope) y = " + y_scope); 