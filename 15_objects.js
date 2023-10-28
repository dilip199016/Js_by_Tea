const newUser={
    Name:"Dilip",
    RollNo:105412955,
    Age:33,
    Email:"vddilipvarma@gmail.com",
lastLogin:["Monday","Frieday"],
}

console.log(newUser.Email);
console.log(newUser["Email"]);
console.log(newUser);


const print=document.getElementById('obj1');

print.innerHTML+="print data is console.log(newUser.Email)==>"+(newUser.Email)+"<br/>display<br/><br/><br/>"
print.innerText +="console.log(newUser) Output==>" +(JSON.stringify(newUser))+  " display"
