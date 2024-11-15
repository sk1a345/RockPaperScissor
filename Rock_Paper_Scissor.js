let userScore=0;
let compScore=0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const user_score= document.querySelector("#user-score");
const comp_score= document.querySelector("#comp-score");

const genComputerChoice=()=>{
    let options = ["rock","paper","scissor"];
    //Rock,paper,scissors
    const randIdx = Math.floor(Math.random() * 3);//for generating random numbers
    return options[randIdx];
}
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw, play again";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        console.log("You Win");
        msg.innerText=`You win😇 ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="Green";
        user_score.innerText++;
    }
    else
    {
        console.log("You lost");
        msg.innerText=`You Lose☹️ ${comChoice} beats ${userChoice}`;;
        msg.style.backgroundColor="Red";
        comp_score.innerText++;
    }
}

let playGame = (userChoice) =>{
    console.log("user choice= ",userChoice);
    //Generate computer choice(generating functions for each samll work->modular way of programming)
    const comChoice = genComputerChoice();
    console.log("computer choice= ",comChoice);
    if(userChoice===comChoice)
    {
        //Draw game
        drawGame();    
    }
    else
    {
        let userWin=true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin= comChoice==="paper"?false:true;   
        }
        else if(userChoice === "paper")
        {
            //rock,scissor;
            userWin=comChoice==="scissor"?false:true;
        }
        else{
            //rock,paper:
           userWin= comChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
}); 