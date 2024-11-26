let userScore = 0;
let comScroe = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const comscore = document.querySelector("#com-score")

choices.forEach ((choice)=>{
    //console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //console.log('choice was clciked',userChoice);
        playGame(userChoice);
    })
});

const playGame =(userChoice)=>{
    console.log("User choice =", userChoice)
    //generate com choice
    const compChoice = genComChoice();
    console.log("computer choice =", compChoice)
    if(userChoice === compChoice){
        drawGame();
        
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false:true;
        }else if (userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false:true;
        }else{
            // rock, paper
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
} 

const genComChoice=()=>{
    const option = ["rock", "paper", "scissor"];
    const randomIndex  = Math.floor(Math.random()*3);
    return option[randomIndex];
}

const drawGame = ()=>{
    //console.log("Game was draw")
    msg.innerText="game draw, Play again";
    msg.style.backgroundColor ="blue";
}

const showWinner=(userWin, userChoice, compChoice)=>{
  if(userWin){
    userScore++;
    userscore.innerText= userScore;
    //console.log("You Win");
    msg.innerText=`you win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";
  }else{
    comScroe++;
    //console.log("you lost");
    comscore.innerText = comScroe;
    msg.innerText=`You lost! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor ="red";
  }
};