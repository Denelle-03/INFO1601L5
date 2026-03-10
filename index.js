let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;
console.log("Area:", area);

let num1 = 0.1341;
let num2 = 2344;
let num3 = 1.2e3;
let num4 = Infinity;
let num5 = 0b1000111;
let num6 = 0xFFF;
let num7 = 9007199254740991n;

let str1 = "Hello World";
let str2 = "Hello World";

let str3 = `
hello
world
`;

console.log(str1, str2, str3);

let name = "bob";
let age = 24;

console.log(typeof(name));
console.log(typeof(age));

console.log(`Hello my name is ${name}, I'm ${age} years old`);
console.log(`I was born in ${2020 - age}`);

console.log('1'== 1)
console.log(1 == true);
console.log("false" == false);
console.log("false" == true);

if ("false"){
  console.log("Hello false!")
}

console.log('1' === 1);
console.log (1 === true);
console.log("true" === true);

let grade = 67;

if (grade < 50){
  console.log("Failed");
}
else{
  console.log("Passed");
}

let num = 0;

while(num < 10) {
  console.log(num);
  num++
}

for(let i = 1; i <= 50; i++) {

  if (i % 3 === 0 && i % 5 === 0){
    console.log("fizzbuzz");
  }

  else if (i % 3 === 0){
    console.log("fizz");
  }

  else if (i % 5 === 0) {
    console.log("buzz");
  }

  else {
    console.log(i);
  }
}

let nowTimestamp = Date.now();
console.log(nowTimestamp);

let now = new Date(nowTimestamp);

let date = new Date(2019,11,17,3,24,0);

console.log(date.toLocaleDateString("en-US"));

console.log(`${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`);

let difference = now - date;

let daysBetween = difference * 1.15741e-8;
console.log(daysBetween);

let root = Math.sqrt(9);
let cubed = Math.pow(2,3);
let roundDown = Math.floor(12.3453);
let roundUp = Math.ceil(12.3453);
let absolute = Math.abs(-34);
let randNum = Math.random();
let mathPi = Math.PI;

console.log(root, cubed, roundDown, roundUp, absolute, randNum, mathPi);

function randInt(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randInt(1,10));

function hello(){
    console.log("hello");
}

hello();

function add(a,b){
    return a + b;
}

let ans = add(5,1);
console.log(ans);

let ans2 = add();
console.log(ans2);

function addDefault(a, b = 10){
    return a + b;
}

console.log(addDefault(5,11));
console.log(addDefault(2));

let sum = 10;

function sumFunc(){
}

console.log(sum);

function happyPrint(string){
    console.log("😀: " + string);
}

function sadPrint(string){
    console.log("😢: " + string);
}

function addCallback(a,b,callback){
    let ans = a + b;
    callback(ans);
}

addCallback (5,10,happyPrint);
addCallback (11,12,sadPrint);

function printDate(){
    console.log(new Date().toLocaleTimeString());
}

setInterval(printDate,1000);

let arr = [];
let arr2 = [1,2,3,4,5,6,7];
let arr3 = [1,12.9,"Hi","🎈"];

console.log(arr2[0]);
console.log(arr3[3]);

let numbers = [1,2,3,4,5,6,7,8,9,10];

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

for(let item of numbers){
    console.log(item);
}

let arrMethods = [-5,16,33,42,103,344];

console.log(arrMethods.includes(-5));

arrMethods.push(11);
console.log(arrMethods);

let lastItem = arrMethods.pop();
console.log(lastItem,arrMethods);

arrMethods.unshift(22);
console.log(arrMethods);

let firstItem = arrMethods.shift();
console.log(firstItem,arrMethods);

let reversed = arrMethods.reverse();
console.log(reversed);

console.log(arrMethods.join("-"));

let arrTask = [12,33,4,5,-4,8,19,25];

function double(num){
    return num * 2;
}

let doubledArr = arrTask.map(double);
console.log(doubledArr);

function isOdd(element){
    return element % 2 !== 0;
}

let odds = arrTask.filter(isOdd);
console.log(odds);

function has5Factor(element){
    return element % 5 === 0;
}

let hasFiveFactor = arrTask.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a,b){
   return a - b;
}

let ascending = arrTask.sort(intCompare);
console.log(ascending);

let person = {
    name: "John",
    age: 12
};

console.log(person["age"]);
console.log(person.name);

person["weight"] = 70;

person.marks = [67,34,55,89];

let firstMark = person.marks[0];

let people = [
    person,
    {
        name:"Jane",
        age:23,
        marks:[51,78,99,76]
    }
];

let johnClone = {};

Object.assign(johnClone,person);

console.log(johnClone);

console.log(people[0].marks[0]);

function createPerson(name,height,weight){
    return {name:name,height:height,weight:weight};
}

let bmiPeople = [
    createPerson("John",1.8,80),
    createPerson("Jane",1.65,60),
    createPerson("Bob",1.75,75)
];

function averageBMI(collection){

    let totalBMI = 0;

    for(let person of collection){
        let bmi = person.weight/(person.height*person.height);
        totalBMI += bmi;
    }

    let avgBMI = totalBMI / collection.length;

    console.log("Average BMI:",avgBMI);
}

averageBMI(bmiPeople);