let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);

    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High, Try Again..";

        gameResult.style.color = 'white';
        gameResult.style.backgroundColor = "#1e2172";
        gameResult.style.borderRadius = "10px";
        gameResult.style.fontWeight = 700;
        gameResult.style.boxShadow = "5px 5px 15px gray";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations, You Got It Right..";
        gameResult.style.color = 'white';
        gameResult.style.backgroundColor = "#8de660";
        gameResult.style.borderRadius = "10px";
        gameResult.style.boxShadow = "5px 5px 15px gray";
        gameResult.style.fontWeight = 700;
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = 'Too Low, Try Agian..';
        gameResult.style.color = 'white';
        gameResult.style.backgroundColor = "red";
        gameResult.style.borderRadius = "10px";
        gameResult.style.fontWeight = 700;
        gameResult.style.boxShadow = "5px 5px 15px gray";
    } else {
        gameResult.textContent = "Please Enter a Valid Input, Try again..";
        gameResult.style.fontWeight = 700;

    }

}