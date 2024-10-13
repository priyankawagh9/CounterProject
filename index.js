//Counter Program:

const decreaseBtn = document.getElementById("decreaseButton");
const increaseBtn = document.getElementById("increaseButton");
const resetBtn = document.getElementById("resetButton");
const counterLabel = document.getElementById("counterLabel");
let count = 0;

counterLabel.textContent = count;

increaseBtn.onclick = function(){
    count++;
    counterLabel.textContent = count;
};

decreaseBtn.onclick = function(){
    if(count>0)
    count--;
    counterLabel.textContent = count;
};

resetBtn.onclick = function(){
    count = 0;
    counterLabel.textContent = count;
};