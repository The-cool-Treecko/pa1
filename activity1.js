var score= 0;

function updateScore(){
    score = score + 1;
    console.log(score);
    document.getElementById("score").innerHTML = "Score:"+score;
}

function nextPage(){
    window.location = "activity_2.html"
}

function saveScore(){
    localStorage.setItem("Score",score);
}