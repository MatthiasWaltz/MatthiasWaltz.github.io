function displayWeeklyAnswers() {
    WeeklyAnswers = ["I'd give up my left pinky for just a lot of bread", 
"If I were a noodle, I'd be a good noodle. SpongeBob reference!"]
}

function changeBodyColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}