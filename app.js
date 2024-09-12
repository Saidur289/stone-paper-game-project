let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
let user = document.querySelector("#user-score")
let comp = document.querySelector("#comp-score")
const genCompChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}
const draw = () => {
    // console.log('game draw');
    msg.innerText = "Game draw, Play again";
    msg.style.backgroundColor = "#081b31 "
}
const showWinner = (userWin, userchoice, compChoice) => {
    if(userWin){
        userScore ++;
        user.innerText = userScore;
        // console.log('you win');
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
        
    }else{
        compScore++;
        comp.innerText = compScore;
        // console.log('you lose');
        msg.innerText = `You lose! ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    // console.log('usechoice =', userChoice);
    const compChoice = genCompChoice();
    // console.log("compchoice =", compChoice);
    if(userChoice === compChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper 
            userWin = compChoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            // rock, scissors 
            userWin = compChoice === "scissors"?false:true;
        }else{
            // paper,rock 
            userWin = compChoice === "rock"?false:true;

        }
        showWinner(userWin,userChoice, compChoice);
        }
           
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})
