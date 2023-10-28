const myArr=[0,1,5,7,9];
console.log(myArr);



const arr=document.getElementById("basic");

arr.innerHTML += "<h4>Array Declaration</h4>" +"<br>console.log(myArr)==>"+myArr+"<br>";
 arr.innerText+="<h4>Array making Method</h4>"+"<br/>"+"const myArr=[0,1,5,7,9];  console.log(myArr);"
 
 arr.innerText +="In js Array are resizable and can conatin a mix of diffrent type of data"


const myArr2=new Array(1,3,5,7);


const arr2=document.getElementById("basic2")
console.log(myArr2[1]);
arr2.innerHTML+="console.log(myArr2[1])=>"+ (myArr2[1])  + "We can acces easy any index by using method; <br/><br/>"
arr2.innerText+= " console.log(myArr[0]);"



2
console.log("Push Property");
myArr2.push(6);
console.log(myArr2);

 const arr4=document.getElementById("basic3");
arr4.innerHTML= "<h4>Push Method</h4><br/>" +"Befor push data in Array==1,3,5,7"+"<br/>myArr2.push(6); <br/> console.log(myArr2)==>"+(myArr2)+"<br/>Here I push the data into Array "


console.log("POP Property");
console.log(myArr );
myArr.pop()
console.log(myArr);

const arr5=document.getElementById("basic4");
arr5.innerHTML="<h4>Pop Method</h4><br/>"+"before pop the value is array =>[0,1,5,7,9]<br/>"+"<br/> Now after pop elemnt in New Array is"+myArr

console.log("UNSHIFT Property");
console.log("Before UnShifting",myArr);
myArr.unshift(25);
console.log(myArr);



console.log("SHIFT Property");
console.log("Before Shifting",myArr);
myArr.shift();
console.log(myArr);


console.log("Inclides Property");
console.log("Inclides Shifting",myArr);
console.log(myArr.includes(10));
console.log(myArr);


console.log("IndexOf Property");
console.log("Before Indexing",myArr);
console.log(myArr2);
console.log(myArr2.indexOf(6)); //in which Index this element is present
 
console.log("New Method");



console.log("Join Property");
console.log("Before Joining",myArr);
const newArr=myArr.join()
console.log(myArr);
console.log(typeof newArr);


console.log("Slice and Splish");

const aRra=[10,5,7,95,8]
console.log(aRra);
console.log("A",aRra);

console.log("Slice Property");
const myn2=aRra.slice(1,3);

console.log(myn2);


console.log("SPLICE Property");
const myn=aRra.splice(0,3)
console.log(myn);




console.log("Object Method");
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