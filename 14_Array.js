const myArr=[0,1,5,7,9];
console.log(myArr);



const arr=document.getElementById("basic");
arr.innerText+="const myArr=[0,1,5,7,9];  console.log(myArr);"
arr.innerHTML +=+"<br> <br>console.log(myArr)==>"+(myArr);
arr.innerText +="In js Array are resizable and can conatin a mix of diffrent type of data"


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


const nuu=[1,2,3,4,5,6,7,8,9,10];


console.log(nuu);
const update=nuu.slice(2,5);
console.log("slice==>",update);



// console.log(nuu);
const Splic=nuu.splice(2,5);

// console.log("Splice==>",Splic);
