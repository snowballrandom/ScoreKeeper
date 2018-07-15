// Javascript


var button = document.querySelector('#changeTheme');

//var h1 = document.getElementById('fh1');

button.addEventListener("click",function (ev,i){

    var body = document.body;
    var bClass = body.getAttribute("class");

    var btn = document.getElementsByClassName('btn');
    var alertLight = document.getElementsByClassName('alert');

    console.log(bClass);
    if(bClass === 'bg-light'){
        body.setAttribute('class', 'bg-dark');
        for (var i = 0; i<btn.length; i++) {
            btn[i].classList.remove('btn-light');
            btn[i].classList.add('btn-dark');
        }
        for (var i = 0; i<alertLight.length; i++) {
            alertLight[i].classList.remove('alert-light');
            alertLight[i].classList.add('alert-dark');
        }

    }else{
        body.setAttribute('class', 'bg-light');
        for (var i = 0; i<btn.length; i++) {
            btn[i].classList.remove('btn-dark');
            btn[i].classList.add('btn-light');
        }
        for (var i = 0; i<alertLight.length; i++) {
            alertLight[i].classList.remove('alert-dark');
            alertLight[i].classList.add('alert-light');
        }
    }

    //h1.classList.toggle("blue");

    //body.toggle()
   ev.preventDefault();

});
var message = 'Lets Play!';
var msgDisplay = document.getElementById('message');
var playTo = document.querySelector('#playTo');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var maxScore = document.getElementById("maxScore");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

window.onload = function(){
    addLoadEvent(setWinScore());
}

function setWinScore(val){

    console.log('Loaded');

    if(!isNaN(maxScore.value)){
        maxScore.value = winningScore;
    }

    if(val != null || val != undefined) {
        console.log('New play-to-value is set!');
        winningScore = val;
        playTo.innerHTML = val;
        message = 'Winning score set to : ' + winningScore;
        console.log(message);
    }else{
        winningScore = parseFloat(maxScore.value);
        playTo.innerHTML = maxScore.value;
        message = 'Winning score set to : ' + winningScore;
        console.log(message);
    }

    setMessage(message);

};


p1.addEventListener("click", function () {
    if(gameOver === false) {
     p1Score++;
     if(p1Score === winningScore || winningScore <= 0){
        gameOver = true;
        console.log('GAME OVER!!');
         message = 'Game Over! - Player 1 WINS!!!';
         p1Display.classList.remove('badge-dark');
         p1Display.classList.add('badge-success');
     }
    }

    p1Display.innerHTML = p1Score;
    setMessage(message);
});

p2.addEventListener("click", function () {
    if(gameOver === false) {
        p2Score++;
        if(p2Score === winningScore || winningScore <= 0){
            gameOver = true;
            console.log('GAME OVER!!');
            message = 'Game Over! - Player 2 WINS!!!';
            p2Display.classList.remove('badge-dark');
            p2Display.classList.add('badge-success');
        }
    }

    p2Display.innerHTML = p2Score;
    setMessage(message);
});

reset.addEventListener("click", function(){
    resetGame();
});

maxScore.addEventListener("input", function () {

    resetGame();

    if(isNaN(this.value) || this.value == "" || this.value < 0 ){
        setMessage('Must Enter A Positive Number!!')

    }else {
        winningScore = parseFloat(maxScore.value);
        setWinScore(winningScore);
    }
});

function resetGame(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.innerHTML = 0;
    p2Display.innerHTML = 0;

    if(p1Display.classList.contains('badge-success')){
        p1Display.classList.remove("badge-success");
        p1Display.classList.add("badge-dark");
    }
    if(p2Display.classList.contains('badge-success')) {
        p2Display.classList.remove('badge-success');
        p2Display.classList.add('badge-dark');
    }

    console.log('GAME RESET!');
    setMessage('Game Reset!');
}

function setMessage(val){
    msgDisplay.innerHTML = val;
}
function addLoadEvent(func) {

    var oldonload = window.onload;

    if(typeof window.onload != 'function'){

        window.onload = func;

    }else{

        window.onload = function() {

            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
