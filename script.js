let currentCount = document.getElementById('currentCount');
let error = document.getElementById('error');
let decrementBtn = document.querySelector('.decrement');
let incrementBtn = document.querySelector('.increment');
let clearBtn = document.querySelector('.clear');

let count = 0;

function decrement(){
    if(count > 0)
    {
        count--;
        currentCount.innerHTML = count;
    }
    else {
        error.innerHTML = "Error : Cannot go below 0";
        error.style.color = "red";
    }
}

function increment(){
    count++;
    currentCount.innerHTML = count;
    if(count > 0)
    {
        error.innerHTML = "";
    }
}

function reset(){
    count = 0;
    currentCount.innerHTML = count;
    error.innerHTML = "";
}