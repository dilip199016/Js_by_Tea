
const a=document.getElementById("check");
check="Hello"
console.log("Hello");


const score=400;
console.log(score);

const num=new Number(score);
console.log(num); 

console.log(typeof score.toString());
console.log(num.toFixed(5));

const another=125.41;
console.log(another.toPrecision(2));


console.log(Math);

console.log("Output==>" ,Math.abs(-25));




console.log(Math.floor(Math.random()*10)+1);


const max=20;
const min=10;
console.log(Math.floor(Math.random()*(max - min+1))+min);

// console.log(Math.floor(Math.random()*(max-min+1))+min);


const mthss=document.getElementById("math");
mthss.innerText="console.log(Math.abs(-25));  const mthss=document.getElementById('math'); Using Math.abs Method negative value change in positive value not positive too neagative "
mthss.innerHTML +="<br>" +"output is=>" + Math.abs(-25);

//toPrecision Method
const anthr=document.getElementById("precision");

anthr.innerText = "const another = 125.95; console.log(another.toPrecision(2));";

anthr.innerHTML+= "<br>" +"<output==>"+ another.toPrecision(2);


const chck=document.getElementById("check");
chck.innerText="const a=document.getElementById('check');, check='Hello'   console.log('Hello');    output=Hello  "  

const cast=document.getElementById("Caste");
cast.innerText="const score=400; console.log(score) ***Note:-400 is only display number //    *** const num=new Number(score) console.log(num);           But by Help of       new Number()  Method data type clearly define that data is number only"


const str=document.getElementById("string");
str.innerText="       console.log(typeof score.toString());        console.log(num.toFixed(5));      ToString() method convert number into String type  data and toFixed()    method is help to display decimal point according to user which pass in paranthesis   "

// const numm=document.getElementById("num");
// numm.innerText="(console.log(typeof score.toString())",
// numm.innerText="console.log(num.toFixed(5)))"

