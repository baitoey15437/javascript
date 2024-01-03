const Calculator = () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    console.log(num1,num2);
    document.getElementById("result").innerHTML = num1 + " " + num2;
}

const AddButton = () => {
    var round = new Number(document.getElementById("round").value);

    document.getElementById("buttonBMI").innerHTML =  
        `<form>
            <input type="hidden" id="round_BMI" value ="` + round + `">
        `

    for (let i = 0; i < round; i++) {
        document.getElementById("buttonBMI").innerHTML +=
            `<label for="">First Name : </label>
            <input type="text" id="fname_bmi_${i}">
            <label for="">Last Name : </label>
            <input type="text" id="lname_bmi_${i}">
            <label for="">Height : </label>
            <input type="text" id="height_${i}" placeholder="cm">
            <label for="">Weight : </label>
            <input type="text" id="weight_${i}" placeholder="kg"> <br>`
    }

    document.getElementById("buttonBMI").innerHTML +=
    `<button type="button" onclick="CalBMI()">Submit</button>
        </form>`  
}

const CalBMI = () => {
    var round = document.getElementById("round_BMI").value;
    var data = [];
    
    for (let i = 0; i < round; i++) {
        data[i] = {
            fname: document.getElementById("fname_bmi_" + i).value,
            lname: document.getElementById("lname_bmi_" + i).value,
            height: document.getElementById("height_" + i).value,
            weight: document.getElementById("weight_" + i).value,
            full_name: function(){
                return this.fname + ' ' + this.lname;
            }
        }
    }

    data.forEach(Show);

    // forEach => loop Array
    // for-in => loop key object
    // for-of => loop value iterable object

    document.getElementById("result_bmi").innerHTML = "";
    function Show(value){
        let height = value.height, weight = value.weight;
        if(height == "" || weight == ""){
            alert("กรุณากรอกข้อมูลให้ครบถ้วน"); // or window.alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        }

        BMI = weight/((height/100)**2) , result = "";
        var BMI,result; // Hoisting (not let const)

        if(BMI < 18.5){
            result = "อยู่ในเกณฑ์ \"น้ำหนักน้อยหรือผอม\"";
        } else if ( BMI >= 18.5 && BMI < 23){
            result = "อยู่ในเกณฑ์ \"ปกติ\"";
        }else if (BMI >= 23 && BMI < 25){
            result = "อยู่ในเกณฑ์ \"น้ำหนักเกิน\"";
        }else if (BMI >= 25 && BMI < 30){
            result = "อยู่ในเกณฑ์ \"โรคอ้วนระดับที่ 1\"";
        }else {
            result = "อยู่ในเกณฑ์ \"โรคอ้วนระดับที่ 2\"";
        }

        document.getElementById("result_bmi").innerHTML += 
        'BMI ของคุณ '+ value.full_name() + " คือ " + BMI.toFixed(2) + " " + result + "<br>" ;
    }
}

const CalAge = () => {
    var birth = new Date(document.getElementById("birth").value);

    // can change Element 
    const day = ["for change","จันทร์","อังคาร","พุธ","พฤหัสบดี"];
    // console.log(day); 
    day[0] = "อาทิตย์"; // change element
    day.push("ศุกร์"); // add a new element to an array 
    day[day.length] = "เสาร์"; // add a new element to an array 
    // console.log(day);
    // console.log(day.toString());
    // console.log(typeof day); // Returns the type of a variable but array return object
    // console.log(day instanceof Array); // check type array

    const month = ["มกราคม", "กุมภาพันธ์", "มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];
    // console.log(month.length);
    // console.log(month.toString());
    // console.log(month.join("|")); //joins all array elements into a string.
    // month.push("for Add"); console.log(month.toString()); // adds a new element to an array (at the end)
    // month.pop(); console.log(month.toString()); // removes the last element from an array
    // month.unshift("for Add"); console.log(month.toString()); // adds new elements to the beginning of an array  
    // month.shift(); console.log(month.toString()); // removes the first array element and "shifts" all other elements to a lower index
    // console.log( day.concat(month));
    // const myArr = [[1,2],[3,4],[5,6]]; // creates a new array with sub-array elements concatenated to a specified depth
    // console.log(myArr.flat());
    // month.splice(2, 0, "Lemon", "Kiwi")// where new elements should be added,how many elements should be removed. //returns an array with the deleted items
    // month.splice(2, 2);// where elements should be remove , how many elements should be removed
    // const newarr = month.slice(0,6); // choose element ต้องสร้าง arr ใหม่ (starting from array,end + 1)
    // console.log(month.sort());
    // console.log(month.reverse());
    //console.log([...day,...month]); // expands an iterable

    // Array Iteration
    // var month_map = month.map((value) => value + " test"); // creates a new array
    // var month_map = month.flatMap((value) => value + " test"); // creates a new array
    // console.log(month_map);

    let _today = new Date();
    let get_age = parseInt( _today.getFullYear() - birth.getFullYear())

    let get_day = day[birth.getDay()]; // returns the weekday of a date as a number (0-6)
    let get_date = birth.getDate();
    let get_month = month[birth.getMonth()];
    let get_year = birth.getFullYear() + 543;
    //.getHours() 0-23
    //.getMinutes() 0-59
    //.getSeconds() 0-59
    //.getMilliseconds() (0-999)
    //.getTime() returns the number of milliseconds since January 1, 1970:
    // Date.now() returns the number of milliseconds since January 1, 1970.
    //getUTCDate() Same As getDate()
    // getTimezoneOffset() returns the difference (in minutes) between local time an UTC time
    // set same get
    // d.setDate(d.getDate() + 50);

    //Date
    // console.log(new Date());
    // console.log(new Date("2023-12-25"));
    // console.log(new Date("2023/12/25"));
    // console.log(new Date("25 December 2023 14:30:00"));
    // //JavaScript counts months from 0 to 11:
    // console.log(new Date(2023,11));
    // console.log(new Date(2023,11,25));
    // console.log(new Date(2023,11,25,14));
    // console.log(new Date(2023,11,25,14,30));
    // console.log(new Date(2023,11,25,14,30,0));
    // console.log(new Date(2023,11,25,14,30,0,0));
    // console.log(new Date(86400000));
    // console.log(Date.parse("2023,11,25")); // convert it to milliseconds

    // Date Methods
    const d = new Date();
    console.log(d.toString());
    console.log(d.toDateString());
    console.log(d.toUTCString());
    console.log(d.toISOString());


    document.getElementById("result_age").innerHTML =  
    "คุณเกิดวัน" + get_day  + " " + get_date + " " + get_month + " " + get_year + "<br>" +
    'คุณอายุ ' + get_age + " ปี" ;

}

const CalVol = (show) => {
    var radius = new Number(document.getElementById("rad").value);
    var result = (4/3) * Math.PI * Math.pow(radius,3);

    // Math.E        // returns Euler's number
    // Math.PI       // returns PI
    // Math.SQRT2    // returns the square root of 2
    // Math.SQRT1_2  // returns the square root of 1/2
    // Math.LN2      // returns the natural logarithm of 2
    // Math.LN10     // returns the natural logarithm of 10
    // Math.LOG2E    // returns base 2 logarithm of E
    // Math.LOG10E   // returns base 10 logarithm of E

    //Math Methods
    // console.log(Math.round(-4.6)); // returns the nearest integer
    // console.log(Math.ceil(-4.6)); // returns the value of x rounded up to its nearest integer
    // console.log(Math.floor(-4.6)); // returns the value of x rounded down to its nearest integer
    // console.log(Math.trunc(-4.6));// the integer part of x
    // console.log(Math.sign(x)); // returns if x is negative, null or positive

    //Math
    // console.log(Math.pow(8, 2));
    // console.log(Math.sqrt(64));
    // console.log(Math.abs(-4.7));
    // console.log(Math.sin(90 * Math.PI / 180)); // Angle in degrees x PI / 180.
    // console.log(Math.cos(0 * Math.PI / 180)); // Angle in degrees x PI / 180.
    // console.log(Math.min(0, 150, 30, 20, -8, -200));
    // console.log(Math.max(0, 150, 30, 20, -8, -200));
    // console.log(Math.random()); // returns a random number between 0 and 1
    // console.log(Math.log(10));
    // console.log(Math.log2(8)); // returns the base 2 logarithm of x.
    // console.log(Math.floor(Math.random() * (10 - 5) ) + 5); //returns a random number between min and max

    // console.log(Boolean(10 > 9));
    // console.log(10 > 9);
    // //Value is False => 0 , -0 , "" , undefined , null , false , NaN

    // The Nullish Coalescing Operator (??)
    // The Optional Chaining Operator (?.)
    let x = null;
    let y = "missing";
    console.log(x ?? y); // returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second argument.
    console.log(x ?. y); // returns undefined if an object is undefined or null


    if (show == 'inner'){
        document.getElementById("result_vol").innerHTML =  "Volume Sphere = " + result.toFixed(2) + " cm<sup>3<sup/>" ;
    } else {
        document.write("Volume Sphere = " + result.toFixed(2) + " cm<sup>3<sup/>");
    }
    
}

const CalArith = () => {
    var operator = document.getElementById("operator_1").value;
    var num1 = new Number(document.getElementById("num1_1").value);
    var num2 = new Number(document.getElementById("num2_1").value);
    console.log(num1,operator,num2);
    var result = Operation(operator,num1,num2);
    document.getElementById("result_CalArith").innerHTML =  "result = " + result;
}

const CalAssign = () => {
    var operator = document.getElementById("operator_2").value;
    var num1 = new Number(document.getElementById("num1_2").value);
    var num2 = new Number(document.getElementById("num2_2").value);
    console.log(num1,num2);

    switch(operator){
        case "add_eq" : num1 += num2; break;
        case "sub_eq" : num1 -= num2; break;
        case "mul_eq" : num1 *= num2; break;
        case "div_eq" : num1 /= num2; break;
        case "ex_eq" : num1 **= num2; break;
        case "mod_eq" : num1 %= num2; break;
    }

    //Break and Continue
    // var text1 = "" , text2 = "";
    // for (let i = 0; i < 10; i++) {
    //     if (i === 3) { break; }
    //     text1 += i + " ";
    // }
    // console.log("Break => " + text1);

    // for (let i = 0; i < 10; i++) {
    //     if (i === 3) { continue; }
    //     text2 += i + " ";
    // }
    // console.log("Continue => " + text2)

    console.log("result_CalAssign =" + document.getElementById("result_CalAssign").innerHTML);
    document.getElementById("result_CalAssign").innerHTML += num1 + '<br>';
    document.getElementById("num1_2").value = num1;
}

const CalCompar = () => {
    var operator = document.getElementById("operator_3").value;
    var type = document.getElementById("type").value;
    if(type == "string"){
        var num1 = document.getElementById("num1_3").value;
        var num2 = document.getElementById("num2_3").value;
    }else{
        var num1 = new Number(document.getElementById("num1_3").value);
        var num2 = new Number(document.getElementById("num2_3").value);
    }
    console.log(num1,operator,num2);
    var result = Operation(operator,num1,num2);
    document.getElementById("result_CalCompar").innerHTML = result;
}

const Operation = (operator,num1,num2) => {
    var $result;
    switch(operator){
        case "add" : $result = num1 + num2; break;
        case "sub" : $result = num1 - num2; break;
        case "mul" : $result = num1 * num2; break;
        case "div" : $result = num1 / num2; break;
        case "ex" : $result = num1 ** num2; break;
        case "mod" : $result = num1 % num2; break;

        case "eq" : $result = num1 == num2; break;
        case "eq_val_typ" : $result = num1 === num2; break;
        case "not_eq" : $result = num1 != num2; break;
        case "not_eq_val_typ" : $result !== num1 / num2; break;
        case "gt" : $result = num1 > num2; break;
        case "lt" : $result = num1 < num2; break;
        case "gte" : $result = num1 >= num2; break;
        case "lte" : $result = num1 <= num2; break;
    }
   return $result;
}

const CountText = () => {
    var text = document.getElementById("text").value;
    document.getElementById("result_count").innerHTML =  "result = " + text.length + '<br>'

    // Extracting String Parts
    // Slice
    // console.log(text.slice(4,9)); // start , end + 1
    // console.log(text.slice(-11,-6)); // - start , - end + 1
    // console.log(text.slice(4)); // // start (to last string)
    // console.log(text.slice(-11)); // - start (to last string)

    // Substring => start and end values less than 0
    // console.log(text.substring(4,9)); // start , end + 1
    // console.log(text.substring(4)); // // start (to last string)

    // Substr
    // console.log(text.substr(4,2)); // start , length
    // console.log(text.substr(-11,2)); // - start , length
    // console.log(text.substr(4)); // // start (to last string)
    // console.log(text.substr(-11)); // - start (to last string)

    // Converting to Upper and Lower Case
    // console.log(text.toUpperCase());
    // console.log(text.toLowerCase());

    // Joins two or more strings
    // console.log('Hello'.concat(" ", text));

    // Removes whitespace from both sides 
    // console.log(" Hello ");
    // console.log(" Hello ".trim());
    // console.log(" Hello ".trimStart());
    // console.log(" Hello ".trimEnd());

    // Pads a string
    // console.log(text.padEnd(20,"x")); // sum length,string
    // console.log(text.padStart(20,"x")); // sum length,string

    // extracting string characters
    // console.log(text.charAt(0)); // If no character returns an empty string.
    // console.log(text.charCodeAt(0)); //returns a UTF-16 code (an integer between 0 and 65535)
    // console.log(text[0]); // If no character returns undefined

    // Converting a String to an Array
    // console.log(text.split(",")); // Split on commas , spaces , pipe |

    //String Search
    // Search Index start
    // console.log(text.indexOf("Apple")); //returns the start position the first occurrence, return -1 if the text is not found
    // console.log(text.lastIndexOf("Apple")); //returns the start position the last occurrence, return -1 if the text is not found
    // console.log(text.indexOf("Apple",15)); //a second parameter as the starting position for the search
    // console.log(text.lastIndexOf("Apple",15)); //a second parameter as the starting position for the search (backwards)
    // console.log(text.search("Apple")); //returns the start position the first occurrence,
    // The search() method cannot take a second start position argument.
    // The indexOf() method cannot take powerful search values (regular expressions
    // console.log(text.match("Cats")); //returns an array containing the results
    // console.log(Array.from(text.matchAll("Cats"))); //returns an iterator containing the results
    // console.log(text.includes("world")); // returns true if a string contains a specified value
    // console.log(text.includes("world",12)); // Start at position returns true if a string contains a specified value
    // console.log(text.startsWith("Hello")); // returns true if a string begins with a specified value
    // console.log(text.startsWith("world", 6)); // returns true if a string begins with a specified value
    // console.log(text.endsWith("Hello")); // returns true if a ends with a specified value
    // console.log(text.endsWith("world", 6)); // Check x ตัวแรก returns true if a ends with a specified value

    const fruits = ["Apple", "Orange", "Apple", "Mango"];
    // console.log(fruits.indexOf("Apple")); //searches an array for an element value and returns its frist position
    // console.log(fruits.lastIndexOf("Apple")); //searches an array for an element value and returns its last position
    // console.log(Array.from("ABCDEFG")); // returns an Array
    const keys = fruits.keys(); //returns an Array Iterator object with the keys of an array.
    for (let x of keys) {console.log(x)}
    const entries = fruits.entries(); // returns an Array Iterator object with key/value
    for (let x of entries) {console.log(x)} 
    console.log(fruits.includes("Mango")) // check if an element is present in an array return boolean
    


}

const ViewNumber = () => {
    var num = new Number(document.getElementById("num").value);
    //document.getElementById("result_num").innerHTML =  "result = " + num + '<br>';

    // Hexadecimal
    // JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
    // console.log("converse Hexadecimal to Decimal => FF to " + 0xFF); // 0x - hexadecimal
    // console.log("converse Octal to Decimal => 40 to " + 0o40); // 0o - hexadecimal
    // console.log("converse Binary to Decimal => 100000 to " + 0b100000); // 0b - hexadecimal

    // output numbers from base 2 to base 36.
    // console.log("base 36 = " + num.toString(36)); // Hexatrigesimal
    // console.log("base 32 = " + num.toString(32)); // Duotrigesimal
    // console.log("base 16 = " + num.toString(16)); // Hexadecimal
    // console.log("base 12 = " + num.toString(12)); // Duodecimal
    // console.log("base 10 = " + num.toString(10)); // Decimal
    // console.log("base 8 = " + num.toString(8)); // Octal
    // console.log("base 2 = " + num.toString(2)); // Binary

    // BigIn => integers are only accurate up to 15 digits
    // let big_num = document.getElementById("num").value + ""; // string
    // console.log(BigInt(big_num));

    //BigInt Operators
    // console.log(5n/2n); // Operators that can be used on a JavaScript Number can also be used on a BigInt
    // // console.log(5n/2); // Arithmetic between a BigInt and a Number is not allowed
    // console.log(Number(5n)/2); yes
    // let hex = 0x20000000000003n;
    // console.log("converse Hexadecimal to Decimal => 20000000000003n to " + hex); // BigInt can also be written in hexadecimal, octal, or binary notation:

    // Minimum and Maximum number
    // console.log(Number.MAX_VALUE);
    // console.log(Number.MIN_VALUE);
    // // Minimum and Maximum Safe Integers
    // console.log(Number.MAX_SAFE_INTEGER);
    // console.log(Number.MIN_SAFE_INTEGER);
    // // Infinity
    // console.log(Number.POSITIVE_INFINITY);
    // console.log(Number.NEGATIVE_INFINITY);

    // console.log(Number.EPSILON); //The difference between 1 and the smallest floating point number greater than 1,

    
    // console.log(Number.isInteger(num)); //returns true if the argument is an integer.
    // console.log(Number.isSafeInteger(num)); //returns true if the argument is a safe integer.
 
    // console.log(num.toExponential(4)); // 2.0886e+2 The parameter is ทศนิยม
    // console.log(num.toPrecision(4)); // 208.9 The parameter is sum all length
    // console.log(num); // typeof = object
    // console.log(num.valueOf()); //typeof = number

    //Converting Variables to Numbers
    // console.log(Number(num));
    // console.log(Number(new Date("1970-01-02"))); // returns the number of milliseconds 
    // console.log(parseInt(num)); //returns a whole number ไม่ปัด
    // console.log(parseFloat(num));

    // Sort Array
    const points = [40, 100, 1, 5, 25, 10];
    // points.sort(function(a, b){return a - b}); // sort
    // points.sort(function(a, b){return b - a}); // reverse
    // points.sort(function(){return 0.5 - Math.random()}); // sort Random
    // console.log(Math.min.apply(null,points));
    // console.log(Math.max.apply(null,points));
    var points_filter = points.filter((value) => value  > 30);
    var sum = points.reduce((total,value) =>  total + value)
    var every = points.every((value) => value > 30); // checks if all array values pass a test // ture false
    var some = points.some((value) => value > 30); // checks if some array values pass a test // ture false
    var find = points.find((value) => value > 30); //returns the value of the first array element
    var findIndex = points.findIndex((value) => value > 50)
    console.log(findIndex);

    // const cars = [
    //     {type:"Volvo", year:2016},
    //     {type:"Saab", year:2001},
    //     {type:"BMW", year:2010}
    //   ];
    // console.log(cars.sort(function(a,b){return a.year - b.year}));
      

}
