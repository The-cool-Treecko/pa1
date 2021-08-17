var score;

function previousPage(){
    window.location = "activity_1.html"
}

function getScore(){
    score = localStorage.getItem("Score");
    console.log(score);
    document.getElementById("score").innerHTML = "<h1>Score = "+score+"</h1>";
}