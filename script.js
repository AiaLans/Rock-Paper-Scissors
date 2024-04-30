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

}