let image     = document.querySelectorAll(".image");

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
        }
        else if(compchoice =="rock" && user == "scissors"){
            console.log("Computer Won");
        }
        else if(compchoice =="scissors" && user == "paper"){
            console.log("Computer Won");
        }
        else{
            console.log("User win");
        }
        })
    });