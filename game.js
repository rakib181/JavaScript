let boxes = document.querySelectorAll('.box');
let reset_btn = document.querySelector('.rst-btn');
let new_btn = document.querySelector('.new-btn');
let msg_con = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');

let turn = true;
let count = 0;

let winning_pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const disableBoxes = () => {
    boxes.forEach((box) => box.disabled = true);
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.textContent = '';
    }
};

const checkWinner = () =>{
        for(let i = 0; i < winning_pattern.length; i++){
            let [a, b, c] = winning_pattern[i];
            if(boxes[a] === "" || boxes[b] === "" || boxes[c] === "")continue
            if(boxes[a].textContent === boxes[b].textContent && boxes[b].textContent === boxes[c].textContent && boxes[a].textContent!== ''){
                showWinner(boxes[a].textContent);
                disableBoxes();
                return;
            }
        }
        if(count === 9){
            msg.innerText = "It's a draw!";
            msg_con.classList.remove("hide");
            return;
        }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msg_con.classList.remove("hide");
};


boxes.forEach((box) => {
    box.addEventListener('click', () =>{
        count++;
        if(turn){
            box.style.color = 'red';
            box.textContent = 'X';
        }else{
            box.style.color = 'green';
            box.textContent = 'O';
        }
        box.disabled = true;
        turn ^= true;
        checkWinner();
    });
});

const reset = () =>{
    turn = true;
    count = 0;
    enableBoxes();
    msg_con.classList.add("hide");
}

new_btn.addEventListener('click', () =>{
    reset();
});
reset_btn.addEventListener('click', () =>{
    reset();
});