var cards = document.querySelectorAll(".card")
var score = 0;
var order = ['A', 'T', 'A', '1', '2'];
var face_up = []

function turnCardsFaceDown() {
    var face_down = [];
    var images = document.querySelectorAll(".card");
    for(var i = 0; i < images.length; i++){
        var image = images[i];
        image.style.backgroundColor = "black";
        face_down.push(image.id)
    }
}

function shuffleCards() {
    for (var i = 0; i < cards.length; i++) {
        var randomIndex = Math.floor(Math.random() * cards.length);
        cards[i].style.order = randomIndex;
    }
    setTimeout(function(){
        turnCardsFaceDown();
    }, 2000);
}

function startGame() {
    shuffleCards();
    score = 0;
    document.getElementById('score').textContent = score;
}

function restartGame() {
    location.reload();
}

var idx = 0;
function turnCardFaceUp(event) {
    var image = event.target;
    image.style.backgroundColor = "white";
    face_up.push(image.id.toString());
    if(face_up[idx] === order[idx] ){
        score += 20;
        document.getElementById("score").textContent = score;
        idx ++;
    }else{
        gameOver();
        restartGame();
    }if(score === 100){
        setTimeout(function(){
        alert("Well Done!");
        restartGame();
        }, 500);
    }
    
}
function gameOver(){
    alert("Game Over!")
}

