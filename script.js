function play (userChoice) {
    var icons = document.querySelectorAll('.icons div');
    icons.forEach(function(icon) { 
        icon.style.display = 'none'; 
    })

    var countdown = document.getElementById('count');   
    countdown.innerHTML = '3';

    var count = 3;
    var timer = setInterval(function() {
        count--; 
        if (count <= 0) {
            clearInterval(timer);
            countdown.innerHTML = '';
            var computerChoice = Math.random();
            if (computerChoice < 0.34) {
                computerChoice = 'rock';
            } else if (computerChoice <= 0.67) {
                computerChoice = 'paper';
            } else {
                computerChoice = 'scissors';
            }
            var result = document.getElementById('result');
            var winner = determineWinner(userChoice, computerChoice);
            result.innerHTML = winner.text;
            result.appendChild(winner.image);
            return;
        }
        countdown.innerHTML = count.toString();
    }, 1000);
}

function determineWinner(user, computer) {
    var result = {};
        
    if (user === computer) {
        result.text = "It's a tie!";
    } else if ((user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')) {
            result.text = "You win!";
    } else {
        result.text = "Computer wins!";
    }

    result.image = new Image();
    if (result.text === "You win!") {
        result.image.src = 'https://i.pinimg.com/474x/0a/35/6f/0a356f7707b18dd91ea810173b29bd67.jpg';
    } else if (result.text === "Computer wins!") {
        result.image.src = 'https://i.pinimg.com/564x/8a/78/93/8a78937e3faabf29b624c57e350f5424.jpg';
    } else {
        result.image.src = 'https://i.pinimg.com/564x/90/2e/01/902e011736b72b386b848ecaf388c018.jpg'; 
    }
}