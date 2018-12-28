

// const myCalc = calculatorModule()
// console.log(myCalc.clearMemory)

// const getContainer = document.querySelector('#container');

// getContainer.innerHTML = myCalc.hello();
// let balanceArr = [];
// let depositArr = [];
let balance = 0;
const display = document.getElementById('display');
let storage = [];
var input = this.innerHTML; 

// Number buttons

const num = document.getElementsByClassName("btn num");
for(var i = 0;i < num.length; i++){
    num[i].addEventListener('click', showNum)
}

//clear display
function showNum(){
    if(display.innerHTML === '+' ||
    display.innerHTML === '-' ||
    display.innerHTML === 'x' ||
    display.innerHTML === '/' ||
    display.innerHTML === '0'){
        display.innerHTML = this.innerHTML;
    }else{
        display.innerHTML += this.innerHTML;
    }
}

//clear button
const clear = document.getElementById('clear');
clear.addEventListener('click', clearMemory)
function clearMemory(){
    display.innerHTML='0';
    storage = [];
    x = 0;
}
//dot button
// const decimal = document.getElementById('dot');
// decimal.addEventListener('click',showNum);

//balance button
const letBalance = document.getElementById('balance');
letBalance.addEventListener('click', getBalance);
function getBalance(){
    getDeposit();

}

// withdraw button
var depositNum = y;
const letWithdraw = document.getElementById('withdraw');
letWithdraw.addEventListener('click', getWithdraw);
function getWithdraw(){
    if(depositNum >= y){
        depositNum + depositNum
    }else{
        return y;
    }
}

// deposit button
const letDeposit = document.getElementById('deposit');
letDeposit.addEventListener('click', getDeposit);
function getDeposit(){
    display.innerHTML = y;
}