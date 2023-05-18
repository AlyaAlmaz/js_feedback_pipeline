/*console.log("This is log")
console.log(typeof numberOfStudents)
var numberOfStudents = 25;
console.log(typeof numberOfStudents)
numberOfStudents = 99;
console.log(typeof(typeof numberOfStudents))
numberOfStudents = "fd"
console.log(typeof numberOfStudents)

//--------------------------------------------


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

//--------------------------------------------

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

//--------------------------------------------

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
//--------------------------------------------

//loop 
for(var i = 0; i <=100 ; i+=2){
    console.log(i)
}

//--------------------------------------------

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

//--------------------------------------------

function hello(alertMsg){
    alert(alertMsg);

    return "OK";
}
var msg = "Hello everyone";
var res = hello(msg);

console.log(res)


var arr = ["Credit card data"];


//--------------------------------------------

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

//--------------------------------------------

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


//--------------------------------------------

/*console.log(courseInformation);

function hello(){

}

var hello = function(){
    console.log("Hello world!")
}

courseInformation["hello"] = hello;
//courseInformation["hello"]();
courseInformation.hello();



//--------------------------------------------
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

//--------------------------------------------

//create a function that get as argument an array of object
//create new array so they new array will be contain strings values that represent
//all the keys axist in the iteration element

/*function myArr(sourceArray){
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
console.log(myArr(arr));*/

//--------------------------------------------
/*var person1 = {
    firstname: "Dan",
    age: 20
}

var person2 = {...person1, firstname:"Alya"}
person1.age = 30;


console.log("person 1")
console.log(person1)
console.log("person 2")
console.log(person2)

var arr1 = 1;
var arr2 = [...arr1, "y", "u"];
var arr3 = [...arr2, "A"]

console.log(arr1)
console.log(arr2)
console.log(arr3)

//--------------------------------------------

//var userInput = prompt("Please tell me what you need")
//console.log(userInput)

try{
    //creating new error object
    var error = new Error("this is my new error");
    throw error;

}catch(e){
    console.log("Error has been caught")
    console.log(e)

}finally{
    console.log("I will always will be executed")
}

console.log("Iam done!")

//--------------------------------------------

//get comma seperated list of names from the user
//make sure the user provided at list two names

function getNameFromTheUser(message){
    var userInput = prompt(message)
    var namelist = userInput.split(",");

    if(namelist.length < 2){
        throw new Error("User has provided less them two name")
    }

    return namelist;

}

try{
    var names = getNameFromTheUser("hmm, its look like you didnt provided what needed");
    console.log("We have got the names", names)

}catch(e){
    try{
   var names = getNameFromTheUser("hmm, its look like you didnt provided what needed");
    console.log("We have got the names", names)
}catch(e){
    alert("Sorry, but you dont want to help me")
}
}

//--------------------------------------------

function getNumberFromTheUser(message){
    var userInput = prompt(message)
    var numberlist = userInput.split(",")
    var numberarr = [];
    
for(var i of numberlist){

       var num = parseInt(i)
    if(isNaN(num)){
        throw new TypeError("User has provided less than two numbers")
    }
    
    numberarr.push(num)
    
}

    return numberarr;

}
try{
    var numbers = getNumberFromTheUser("hmm, its look like you didnt provided what needed");
    console.log(numbers);
    alert("Thank you for your help!");
}catch(e){
    
    alert(e.message);
}

//--------------------------------------------
//callbacks
function createSandwich(ing){
    if(!ing){
        console.log("Sorry, Cannot do it")
        return;
    }

    console.log("Iam creating the sandwich with this:", ing)
}
function getIng(createSand){
    console.log("Going to market...")
    console.log("Buying staff...")
    var ing = ["Tomato","bread", "mayo"]


    try{
        createSand(ing);


    }catch(e){
        console.log("Cannot create")
    }

}

getIng(createSandwich);*/

//--------------------------------------------

//timers
/*function helloworld(){
    console.log("Hello World!")

}
console.log("Step 1")
var timerID = setTimeout(helloworld, 3000)
console.log("Step 2")*/

//--------------------------------------------

/*function getNumberFromTheUser(message){
    var userInput = prompt(message)
    var numberlist = userInput.split(",")
    var numberarr = [];
    
for(var i of numberlist){

       var num = parseInt(i)
    if(isNaN(num)){
        throw new TypeError("User has provided less than two numbers")
    }
    
    numberarr.push(num)
    
}

    return numberarr;

}
var timerID = setTimeout(getNumberFromTheUser, 5000)
try{
    var numbers = getNumberFromTheUser("hmm, its look like you didnt provided what needed");
    console.log(numbers);
    alert("Thank you for your help!");
}catch(e){
    
    alert(e.message);
}*/

//--------------------------------------------

/*counter = 0;
function helloworld(){
    console.log("Hello world", counter)
    if(counter === 5){
        clearInterval(intervalID)
    }
    counter+=1

}
intervalID = setInterval(helloworld, 1000)*/

//--------------------------------------------

//get from the user a number of seconds and message to print
//check if the number is positive integer
//if not throw an error
//set an interval to print the message each X seconds


/*function getNumberOfSeconds(){
    var numberOfString = prompt("please enter a number of seconds:")
    var number = parseInt(numberOfString)
    if(isNaN(number)){
        throw new TypeError("Seconds can be only a number")    
    }

    if(number < 1){
        throw new RangeError("Number should be larger than zero")
    }
    return number;
}

function getMessageToPrint(){
    return prompt("Please enter a message to print")
}

var AMOUNT_OF_MS_IN_Seconds = 1000;

function main(){
    try{
        var NumberOfSec = getNumberOfSeconds();
        var message = getMessageToPrint();
        setInterval(function(){
            console.log(message)
        }, NumberOfSec * AMOUNT_OF_MS_IN_Seconds)

    }catch(e){
        alert(e.message)
    }

}

main();*/

//--------------------------------------------
//Asynchronise

/*function doSomethingVeryHeavy(){
    for(var i = 0; i<1000000000; i++){
        
    }
    console.log("Done!")
}
function callbacksFunction(){
    console.log("Hello")
}
function execCallback(callbackFunc){
    console.log("Iam executing know")
    callbackFunc();
}
console.log("Step 1");
setTimeout( doSomethingVeryHeavy, 0);
console.log("Step 2")
prompt("please write something")*/

//--------------------------------------------
//promises

/*console.log("Step 1")
function promiseHandler(resolve, reject){
    setTimeout(function(){
        console.log("Something")
        resolve(5)
    }, 10000)
}

function resolveHandler(number){
    console.log("Iam the resolver, and this is the valuse:", number)
}
var promise = new Promise(promiseHandler);

promise.then(resolveHandler)
console.log("Step 2")*/

//--------------------------------------------

function PersonArray(){
    var arr = [];
    var UsersCreate = prompt("please enter how many persons you want to create: ")
    var number = parseInt(UsersCreate)

    if(number < 1){
        throw new RangeError("Number should be larger than zero")
    }

}
for(var i=0; i<1000000; i++){
    
}

function CreatePerson(){
    return prompt("Please enter the firstName")
}
