
// event bubbling ===>> jis pe click karne par wo element event rause hoga aur event listner na milne par
// event element ke parent ke parent search karega waha bhi agra nahi milega to ebent ke parent ke parent
// par listner search karega 

var timer =10;

var score=0;
var hitrnd=0
function increaseScore(){

    score+=5;

    document.querySelector("#scoreval").textContent=score;

}

function getNewHit(){
   hitrnd= Math.floor(Math.random()*10);
    document.querySelector ("#hits").textContent=hitrnd;

}


function makeBuble(){
var clutter="";
for( var i=0; i<216;i++){

     var rnd = Math.floor (Math.random() * 10)
    clutter += `<div class="bubble">${rnd}</div>`;

}
document.querySelector("#pbtm").innerHTML=clutter;
}


function runTimer(){
var timeInterval= setInterval(function(){

if(timer>0){
    timer--;  
    document.querySelector("#timerval").textContent=timer;
}
else{
    clearInterval(timeInterval);
    var headerContent = `
    <div> <h1>Game Over</h1> </div>
    
    <div>    <h2>Score</h2> </div>
    `;



    document.querySelector("#pbtm").innerHTML=headerContent;
}
},1000);

}

document.querySelector("#pbtm").addEventListener("click",
function(count){
    
var clickedN=Number(count.target.textContent);
if(clickedN == hitrnd){
    increaseScore();
    makeBuble();
    getNewHit();
}

});
runTimer();

makeBuble();

getNewHit();