let userScore = 0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msgs = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

const drawGame =() =>{
   msgs.innerText = "Game was Draw. Play Again";
   msgs.style.backgroundColor ="#081b31";
}

const showWinner = (userWin,UserChoice,cmopChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msgs.innerText = `You Win!`;
        msgs.style.backgroundColor ="green";
        if(userScore===4){
            startConfetti();
            
        }
    }else{
        compScore++;
        msgs.innerText = "You Lose.";
        compScorepara.innerText = compScore;
        msgs.style.backgroundColor ="red";
    }
}

const playGame = (UserChoice) =>{
    console.log("user choice =",UserChoice);
const cmopChoice = genCompChoice();
    console.log("comp choice = ",cmopChoice);

    if(UserChoice=== cmopChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(UserChoice==="rock"){
          userWin =  cmopChoice === "paper"?false : true;
        }else if( UserChoice === "paper"){
           userWin = cmopChoice === "scissor" ? false : true; 
        }else{
           userWin = cmopChoice === "rock" ? false : true;
        }
        showWinner(userWin);
        }
    };

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const UserChoice = choice.getAttribute("id");
        console.log("choice was clicekd", UserChoice);
        playGame(UserChoice);
    });
});