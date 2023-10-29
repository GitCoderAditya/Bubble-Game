function makebubble(){
    
var clutter = "";


for(var i =1; i<=189; i++){
   clutter +=  `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
   document.getElementById('winbtm').innerHTML =clutter;
}


}


var timer =60;
function runtimer(){
    var time = setInterval(function()  {
        if(timer>0){

            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{

            clearInterval(time);
            document.querySelector("#winbtm").innerHTML = `<h1 id = " go">Game Over</h1>`;
        }
    }, 1000);
}

var hitval = 0;
function getNewHit(){
     hitval =Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent =hitval
}


var score = 0
function scoreVal(){
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}


document.querySelector('#winbtm').addEventListener('click',function(dets){
    var getNum = (Number(dets.target.textContent));
    if(getNum === hitval){
        scoreVal();
        makebubble();
        getNewHit();

    }
})

runtimer();
makebubble();
getNewHit();

