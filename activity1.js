var score= 0;

function updateScore(){
    score = score + 1;
    console.log(score);
    document.getElementById("score").innerHTML = "Score:"+score;
}

function nextPage(){
    window.location = "nothing.html"
}

function saveScore(){
    localStorage.setItem("Score",score);
}