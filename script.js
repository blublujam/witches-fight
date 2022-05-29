const raven ={
    life: 3,
    statue: false,
    attack:0
}
const catty ={
    life: 3,
    statue: false,
    attack:0
}

//text showing
let tie = document.getElementsByClassName("h2");

//timer
let timeText = document.getElementsByClassName("h3");
var num = 60;

//choose attack btn
let btn0 = document.getElementById("0");
let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");

//players
let ra = document.getElementById("raven1-2");
let ca = document.getElementById("cat1-1");

ra.backgroundImage="url('')";
ca.backgroundImage="url('')";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//2: sword, 1:wand, 0: Darts
function damage(){
    if (Math.abs(raven.attack - catty.attack) < 2){
        if (raven.attack > catty.attack){
            catty.life--;
        }else if (raven.attack < catty.attack){
            raven.life --;
        }else{
            alert("this is a tie!");
        }
    }else{
        if (raven.attack > catty.attack){
            raven.life--;
        }else{
            catty.life--;
        }
    }
    alert("Raven has "+ raven.life + " hearts and Catty has "+ catty.life + " hearts");
    update();
}

function update(){
    if (raven.life <= 0){
        alert("catty wins!");
        raven.life = 3;
        catty.life = 3;
        alert("New game starts!")
        gameplay();
    }else if (catty.life <= 0){
        alert("raven wins!");
        raven.life = 3;
        catty.life = 3;
        alert("New game starts!")
        gameplay();
    }else{
        alert("next round!");
        gameplay();
    }
}

//@b the player
function attack(a,b){
    if(b == 0){
        btn0.style.visibility="hidden";
        btn1.style.visibility="hidden";
        btn2.style.visibility="hidden";
        raven.statue = true;
        raven.attack = a;
        ra.style.backgroundImage="url('img/attackraven.png')";
        setTimeout(3000);
        ra.style.backgroundImage="url('img/raven1.png')";
        catAttack();
    }else{
        catty.statue = true;
        catty.attack = a;
        ca.style.backgroundImage="url('img/attackcat.png')";
        setTimeout(3000);
        ca.style.backgroundImage="url('img/cat1.png')";
        damage();
    }
    
}

function refreshTie(){
    tie.style.visibility="hidden";
}

function gameplay(){
    //refresh timer
    num = 60;
    //player choose an attack manner
    showButton();
    //cat ai attack
    
    //calculate damage

    //check if the game ends

    //if the game doesn't end, moving on
    raven.statue=0;
    catty.statue=0;
    
}

function catAttack(){
    attack(getRandomInt(3),2);
}

function showButton(){
    btn0.style.visibility="visible";
    btn1.style.visibility="visible";
    btn2.style.visibility="visible";
}

function timer(){
    if (num <= 0){
        alert("Please make your decision NOW");
    }
    timeText.innerHTML = "Time: " + num + "s";
    num--;
}
gameplay();

