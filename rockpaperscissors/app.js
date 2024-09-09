let image     = document.querySelectorAll(".image");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let activities= document.querySelector(".msg");
let userCount = 0;
let compCount = 0;
const genarate =() =>{
    let choices = ["rock","paper","scissors"];
    let compchoice = Math.floor(Math.random() * 3);
    //console.log(compchoice);
    return choices[compchoice];
    
    }
const playGame = (user) =>{
     console.log("User Chose",user);
} 
    image.forEach((image) =>{
        image.addEventListener("click",()=>{
            let user= image.getAttribute("id");
            playGame(user);
            const compchoice=genarate();
            console.log("Computer Chose",compchoice);

        //game logic
        if(compchoice == user){
            console.log("Draw")
        }
        else if(compchoice == "paper" && user=="rock"){
            console.log("Computer Won");
            compCount++;
            compScore.innerText = compCount;
            console.log(compCount);
            console.log(userCount);
            activities.innterText="You lose, paper covered rock";

        }
        else if(compchoice =="rock" && user == "scissors"){
            console.log("Computer Won");
            console.log("Computer Won");
            compCount++;
            compScore.innerText = compCount;
            console.log(compCount);
            console.log(userCount);
            activities.innterText="You lose, rock breaks scissors";

        }
        else if(compchoice =="scissors" && user == "paper"){
            console.log("Computer Won");
            compCount++;
            compScore.innerText = compCount;
            console.log(compCount);
            console.log(userCount);
            activities.innterText="You lose, scissors cut paper";

        }
        else{
            console.log("User win");
            userCount++;
            userScore.innerText = userCount;
            console.log(compCount);
            console.log(userCount);
            activities.innterText="You win, you beat computer";
        }
        })
    });

    activities.innnerText = "goru";