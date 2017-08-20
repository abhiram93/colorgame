/*
var color = ["rgb(255, 0, 0)" , "rgb(255, 130, 40)" , "rgb(25, 102, 140)" , "rgb(25, 3, 110)" , "rgb(0, 0, 0)" , "rgb(15, 0, 120)"];*/
var numberOfSquares=6;
var color,pickedcolor;


var square=document.querySelectorAll(".square");
var message=document.getElementById("message");
var btnnewGame=document.getElementById("newgame");
var colorDisplayTitle=document.getElementById("colorDisplayTitle");
var btneasy=document.getElementById("easy");
var btnhard=document.getElementById("hard");

init();


for(var i=0;i<square.length;i++){
    square[i].addEventListener("click",function(){
        if(this.style.background==pickedcolor) {
            message.textContent="Correct"; document.querySelector("h1").style.background=pickedcolor;
            changeColors(pickedcolor);
            btnnewGame.textContent="Play Again?"
        }
        else {
            message.textContent="Try Again"; 
            this.style.background="#232323";
        }
    });
}

//new game
btnnewGame.addEventListener("click",function(){
    init();
    btnnewGame.textContent="New Colors";
   
});


btneasy.addEventListener("click",function(){
    
    numberOfSquares=3;
    init();
    btneasy.classList.add("selected");
    btnhard.classList.remove("selected");
    for(var i=3;i<square.length;i++){
        square[i].style.display="none";
    }
    
});

btnhard.addEventListener("click",function(){
    numberOfSquares=6;
    init();
    btneasy.classList.remove("selected");
    btnhard.classList.add("selected");
    for(var i=3;i<square.length;i++){
        square[i].style.display="block";
    }
    
});


//init
function init(){
    color = generateColors(numberOfSquares);
    pickedcolor=color[Math.floor(Math.random()*(numberOfSquares-1))+1];
    message.textContent="";
    document.querySelector("h1").style.background="steelblue";
    colorDisplayTitle.textContent=pickedcolor; 
    for(var i=0;i<numberOfSquares;i++) {
         square[i].style.background=color[i];
    }
}



//generate random colors
function generateColors(n) {

    var arr=[];
    for(var i=0; i<n; i++) {
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        arr.push("rgb("+r+", "+g+", "+b+")");
    }
    return arr;
}

//change other colors 
function changeColors(pickedcolor){
    for(var i=0; i<square.length; i++) {
        square[i].style.background=pickedcolor;
    }
}
