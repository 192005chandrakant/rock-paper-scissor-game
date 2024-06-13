let userscore=0;
let computerscore=0;
let choices= document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");
let userscorepara= document.querySelector("#userscore");
let computerscorepara= document.querySelector("#computerscore");
const gencomputerChoice = () => {
    const options=["rock","paper", "scissor"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = ()=> {
    msg.innerText ="Game was Draw. Play again.";
    msg.style.backgroundColor ="#081b31";
};

const showWinner =(userwin,userchoice,computerchoice)=> { 
    if(userwin)    {
        userscore++;
        userscorepara.innerText = userscore ;
        msg.innerText =`You Win! Your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor ="green";
    }
    else {
        computerscore++;
        computerscorepara.innerText = computerscore ;
        msg.innerText =`You Lose. ${computerchoice} beats your ${userchoice}` ;
        msg.style.backgroundColor ="red";
    }

}


const playgame =(userchoice)=> {
    console.log("user choice is =",userchoice);
    //Generate computers choice;
    let computerchoice =gencomputerChoice();
    console.log("computer choice is =",computerchoice);
    if (userchoice === computerchoice){
        //Draw game
        drawGame();
    }
    else {
    let userwin = true;  
    if (userchoice ==="rock"){
        //scissor //paper
        userwin = computerchoice ==="paper"? false : true;
    } 
    else if ( userchoice==="paper"){
        //rock //scissor
        userwin = computerchoice === "scissor"? false : true;
    }
    
    else  {
          //rock //paper
          userwin= computerchoice === "rock"? false: true;
    }
     showWinner(userwin,userchoice,computerchoice);
    }
};

choices.forEach((choice) =>  {
    console.log(choice);
        choice.addEventListener("click", ()=> {
            const userchoice =choice.getAttribute("id");
       playgame(userchoice);
        });
    });