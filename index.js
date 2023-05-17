/*console.log("This is log")
console.log(typeof numberOfStudents)
var numberOfStudents = 25;
console.log(typeof numberOfStudents)
numberOfStudents = 99;
console.log(typeof(typeof numberOfStudents))
numberOfStudents = "fd"
console.log(typeof numberOfStudents)



var number = 50;
console.log(typeof number)
var nameof = "Alya";
console.log(typeof nameof)
var user = null;
console.log(typeof user)

var firstName = "Alya";
var age = 23

console.log(firstName , age)
console.log(firstName.indexOf("A"))
console.log(firstName.charAt(0))

var longString = "Hello everyone iam alya";
var isEndWith = longString.endsWith("iam alya");

console.log("isEndWith:" , isEndWith)
console.log("String length", firstName.length)

var toBeEvaluated = "\"Hello world! \" ";

var EvaluatedValue = eval(toBeEvaluated);
console.log(EvaluatedValue, typeof EvaluatedValue);

 if(typeof(EvaluatedValue) == "String"){
    var lastIndex = EvaluatedValue.length - 1;
    console.log(EvaluatedValue.charAt(lastIndex))
} 
else{
    var ValueToPrint = isNaN(EvaluatedValue)? "I cannot proceed" : (typeof ValueToPrint == "number")? oparseInt(EvaluatedValue) *3 : EvaluatedValue;
    console.log(ValueToPrint)
}

var currentDay = "gfgfgff"

switch(currentDay){
    case "Saturday":
        console.log("This is Saturday")
        break;
    case "Sunday":
        console.log("Its okay you can sleep")
        break;
    case "Friday":
        console.log("Only few hours left")
        break;
    default:
        console.log("its time to work")
        break;


}
//loop 
for(var i = 0; i <=100 ; i+=2){
    console.log(i)
}

//Arrays
var myArr = [1 ,2 , "Alya", true];
var myNewArr = [...myArr];

for(var i=0; i< myArr.length; i++){
    console.log(myArr[i]);
}

var StudentArr = ["Alya", "Sara", "Mary"];
var reversedArr = [];

var x = 0;

for(var i=StudentArr.length-1; i>=0; i--){
   reversedArr.push(StudentArr[i]);
}

console.log(StudentArr.includes("Alya"))

var newArr = StudentArr.map(firstname => "Miss" + firstname)
console.log(newArr)


function hello(alertMsg){
    alert(alertMsg);

    return "OK";
}
var msg = "Hello everyone";
var res = hello(msg);

console.log(res)


var arr = ["Credit card data"];




function myArr(sourceArray){
    var arr = [];
    for(var i=0; i<sourceArray.length; i++){
        var element = sourceArray[i];
        if(typeof(sourceArray[i]) == "string"){
            arr[i] = element.toUpperCase();
        }
        else if(typeof(sourceArray[i]) == "number"){
            arr[i] = element * element;
        
        }
        else{
            arr[i]= null;
           
        }
    }
    return arr;
}

var sourceArray = [3,"Alya",false, undefined, "tot",6]
var arr = myArr(sourceArray);

console.log(arr)*/


//Creating objects using class constructor

//var courseInformation = new Object();
//courseInformation["topic"] = "javascript";
//courseInformation["duration"] = 5;
//courseInformation["NumOfStudents"] = 25;
//courseInformation["Students"] = ["Dan", "ALya"];

/*var courseInformation = {
    topic: "Javascript",
    duration: 5,
    numOfStudents: 25
}

for(var key in courseInformation){
    var val = courseInformation[key]  ;
    console.log(key, val)


}*/




/*console.log(courseInformation);

function hello(){

}

var hello = function(){
    console.log("Hello world!")
}

courseInformation["hello"] = hello;
//courseInformation["hello"]();
courseInformation.hello();




//object of place 
var PlaceInfo = new Object();
PlaceInfo["place"] = "edge";

console.log(PlaceInfo);

PlaceInfo["place"]="Abu Dhabi"
console.log(PlaceInfo)*/



//var arr = [1,2,"fff",4,5];
// for .. in .. -> iterate the indexes one by one
// for .. of .. -> iterate the values one by one
//for(var i of arr){
    //console.log(i);

//}


//create a function that get as argument an array of object
//create new array so they new array will be contain strings values that represent
//all the keys axist in the iteration element

function myArr(sourceArray){
    //var outputArr = [];
    //iterating the array where each iteration is an object
    for(var obj of sourceArray){
       // var keystr = "";
        for(var a in obj) {
            //keystr += " " + a;
            obj[a] = null;
        }
    
        //outputArr.push(keystr);

    }
    return sourceArray;
}
var arr = [{name:"something",age:5},{time:"something", size:33}];
console.log(myArr(arr));