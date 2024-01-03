const Calculator = () => {
    let arr = document.getElementById("input").value.split(" "); console.log(arr);

    var num = new Number(arr[0])
    console.log(num);
    for(i = 1 ; i < arr.length ;i++) {
        if(i % 2 == 1){
            if(arr[i+1] == ""){
                document.getElementById("result").innerHTML = "ไม่สามารถคำนวณได้";
            }
            num = Operation(arr[i],num,new Number(arr[i+1]));
            console.log(num);
        }
    }
    document.getElementById("result").innerHTML = "= " + num;     
}

const Operation = (operator,num1,num2) => {
    var $result;
    switch(operator){
        case "+" : $result = num1 + num2; break;
        case "-" : $result = num1 - num2; break;
        case "x" : $result = num1 * num2; break;
        case "/" : $result = (num1 / num2).toFixed(2); break;
        case "^" : $result = num1 ** num2; break;
        case "%" : $result = num1 % num2; break;
    }
   return $result;
}

const Display = (value) => {
    document.getElementById("input").value += value;
}

const Operator = (value) => {
    document.getElementById("input").value += " " + value + " ";
}

const Count = () => {
    let value = document.getElementById("text").value;
    document.getElementById("result_count").innerHTML = value.length;
}

const AddButton = () => {
    var round = new Number(document.getElementById("round").value);

    document.getElementById("buttonBMI").innerHTML =  
        `<form>
            <input type="hidden" id="round_BMI" value ="` + round + `">
        `

    for (let i = 0; i < round; i++) {
        document.getElementById("buttonBMI").innerHTML +=
            ` <p class="p-left" > คนที่ ${i+1}</p>
            <label for="">First Name : </label>
            <input class="input-bmi" type="text" id="fname_bmi_${i}">
            <label for="">Last Name : </label>
            <input class="input-bmi" type="text" id="lname_bmi_${i}"> <br>
            <label for="">Height : </label>
            <input class="input-bmi" type="text" id="height_${i}" placeholder="cm">
            <label for="">Weight : </label>
            <input class="input-bmi" type="text" id="weight_${i}" placeholder="kg"> <br> <hr>`
    }

    document.getElementById("buttonBMI").innerHTML +=
    `<button type="button" onclick="CalBMI()">Submit</button>
        </form>`  
}


const CalBMI = () => {
    document.getElementById("result_bmi_cal").innerHTML = "";
    var round = document.getElementById("round").value;
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

        document.getElementById("result_bmi_cal").innerHTML += 
        'BMI ของคุณ '+ value.full_name() + " คือ " + BMI.toFixed(2) + " " + result + "<br>" ;
    }
}

const CalAge = () => {
    var birth = new Date(document.getElementById("birth_date").value);

    // can change Element 
    const day = ["for change","จันทร์","อังคาร","พุธ","พฤหัสบดี"];
    day[0] = "อาทิตย์"; // change element
    day.push("ศุกร์"); // add a new element to an array 
    day[day.length] = "เสาร์"; // add a new element to an array 

    const month = ["มกราคม", "กุมภาพันธ์", "มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];
    let _today = new Date();
    let get_age = parseInt( _today.getFullYear() - birth.getFullYear())

    let get_day = day[birth.getDay()]; // returns the weekday of a date as a number (0-6)
    let get_date = birth.getDate();
    let get_month = month[birth.getMonth()];
    let get_year = birth.getFullYear() + 543;

    document.getElementById("result_age_cal").innerHTML =  
    "คุณเกิดวัน" + get_day  + " " + get_date + " " + get_month + " " + get_year + "<br>" +
    'คุณอายุ ' + get_age + " ปี" ;

}




