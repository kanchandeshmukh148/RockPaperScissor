let user=0;
let computer=0;

let u= document.querySelector("#user");
let c=document.querySelector("#computer");
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const computerchoice=()=>{
    const options=["rock","paper","scissor"];
   const ch =Math.floor( Math.random()*3);
   return options[ch];
}


const drawgame=()=>{
    msg.innerText="game Draw :(";
    msg.style.backgroundColor="#081b31";

}

const  showWinner=(userwin)=>{
    if(userwin){
        
        msg.innerText="you win";
        msg.style.backgroundColor="green";
        user++;
        u.innerText=user;

    }
    else{
        
        msg.innerText="you lose";
        msg.style.backgroundColor="coral";
       computer++;
       c.innerText=computer;
    }
}

const playgame=(choiceid)=>{
   
    //to generate computer choice
    const computerch=computerchoice();
   
    if(choiceid==computerch){
        drawgame();
    }
    else{
        let userwin=true;
        if(choiceid=="rock")
        {
            userwin=computerch=="paper"?false:true;
        }
        else if(choiceid=="paper")
        {
            userwin=computerch=="scissor"?false:true;
        }
        else{
            userwin=computerch=="rock"?false:true;
        }
        showWinner(userwin);
    }
    
}


choices.forEach((choice) =>{
    console.log(choice);
   choice.addEventListener("click",()=>
{
    let choiceid=choice.getAttribute("id");
    playgame(choiceid);
})
});