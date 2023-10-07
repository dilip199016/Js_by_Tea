const myArr=[0,1,5,7,9];
console.log(myArr);



// const arr=document.getElementById("basic");
// arr.innerText+="const myArr=[0,1,5,7,9];  console.log(myArr);"
// arr.innerHTML +="<br>console.log(myArr)==>"+myArr+"<br>";
// arr.innerText +="In js Array are resizable and can conatin a mix of diffrent type of data"


const myArr2=new Array(1,3,5,7);
console.log(myArr2[1]);

myArr2.push(6);
console.log(myArr2);

console.log(myArr );
myArr.pop()
console.log(myArr);




myArr.unshift(25);
console.log(myArr);

myArr.shift();
console.log(myArr);

console.log(myArr.includes(10));
console.log(myArr);

console.log(myArr2);
console.log(myArr2.indexOf(6)); //in which Index this element is present
 
console.log("New Method");

const newArr=myArr.join()
console.log(myArr);
console.log(typeof newArr);

console.log("Slice and Splish");

const aRra=[10,5,7,95,8]
console.log(aRra);
console.log("A",aRra);

const myn2=aRra.slice(1,3);

console.log(myn2);
const myn=aRra.splice(0,1)
console.log(myn);




var obj1={};
obj1={
    Name:'Dilip',
    Rollno: '820649093'

}
console.log(obj1)

obj1.lastName='Varma'
console.log(obj1);


const nuu=[25,10,35,55,65,85,95,75,45,];


// console.log(nuu);
// const update=nuu.slice(3,6);
// console.log("slice==>",update);



console.log(nuu);
const update2=nuu.splice(0,4);

console.log("Splice==>",update2);




const marvel=["spiderman","ironman","thor"]

const dc=["superman","flash",'batman']

marvel.push(dc)
// console.log(marvel);


// console.log(marvel);
// console.log(marvel[3][1]);
console.log("new Change");


 const allHero= marvel.concat(dc);
console.log(allHero);


console.log("Spread method");
const allNewHeros=[...marvel,...dc];
console.log(allNewHeros);



const another=[1,5,7,[9,8,4],[10,[15,18]]];
const realArray=another.flat(Infinity);
console.log(realArray);

console.log(Array.isArray("dilip"));
console.log(Array.from("Dilip"));
console.log(Array.from({name:"Dilip"})); //impoprtant question


let scorex=200;
let scorea=300;
let scorey=400;
console.log(Array.of(scorea,scorex,scorey));