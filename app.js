let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let main=document.querySelector(".main");

let turnO=true;

let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="green";
            count++;
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            count++;
            turnO=true;
        }
        box.disabled=true;

        checkWinner(count);
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations.Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const drawWinner=()=>{
    msg.innerText=`Match is draw.Press New Game`;
    msgContainer.classList.remove("hide");
};

const checkWinner=(count)=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val==pos3Val){
                showWinner(pos1Val);
            }
            else if(count==9 && pos1Val!=pos2Val && pos2Val!=pos3Val){
                drawWinner();
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);