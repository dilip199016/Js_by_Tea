
let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());


const dinak=document.getElementById("date");
dinak.innerText="let myDate=new Date(); console.log(myDate.toString());"
dinak.innerHTML+="<br><br>" +"Output==>"+(myDate.toString());




console.log(myDate.toDateString());

console.log(myDate.toLocaleString());


const sRT=document.getElementById("DateString");
 sRT.innerText="console.log(myDate.toDateString()); AND  SECOND METHOD IS  console.log(myDate.toLocaleString());"
sRT.innerHTML+="<br><br> (myDate.toDateString())==>"+myDate.toDateString() +"<br><br> myDate.toLocaleString()=>" +myDate.toLocaleString();



//
let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

const morez=document.getElementById("more");
morez.innerText="let myCreatedDate=new Date(2023,0,23) console.log(myCreatedDate.toDateString());"
morez.innerHTML+="<br><br> (myCreatedDate.toDateString()==>"+myCreatedDate.toDateString();

let myCreatedDate2=new Date(2023,0,23,5,3)
console.log(myCreatedDate2.toLocaleString());

const lcl=document.getElementById("Local");
lcl.innerText="let myCreatedDate2=new Date(2023,0,23,5,3) console.log(myCreatedDate2.toLocaleString());"
lcl.innerHTML +="<br><br> myCreatedDate2.toLocaleString()==>"+myCreatedDate2.toLocaleString();


let myCreatedDate3=new  Date("04-10-2023");
console.log(myCreatedDate3.toLocaleString());

const newdaa=document.getElementById("Local2");
newdaa.innerText=" myCreatedDate3=new  Date('04-10-2023'); console.log(myCreatedDate3.toLocaleString());"
newdaa.innerHTML+="<br><br>myCreatedDate3.toLocaleString())==>",myCreatedDate3.toLocaleString();


let myTimeStamp=Date.now();
console.log(Math.floor(Date.now()/1000));



const newDate=new Date;
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());;


newDate.toLocaleString('default',
{weekday:"long",
})