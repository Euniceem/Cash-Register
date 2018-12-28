//add sign
const addElem = document.getElementById('plus');
addElem.addEventListener('click',letsAdd)
function letsAdd(){
  storage.push(Number(display.innerHTML));
  storage.push('+');
  display.innerHTML='+';  
}

//subtract sign
const subtractElem = document.getElementById('minus')
subtractElem.addEventListener('click',letsMinus);
function letsMinus(){
    storage.push(Number(display.innerHTML));
    storage.push('-');
    display.innerHTML='-'
}

//multiply sign
const multiplyElem = document.getElementById('multiply');
multiplyElem.addEventListener('click',letsMultiply);
function letsMultiply(){
    storage.push(Number(display.innerHTML));
    storage.push('x');
    display.innerHTML='x';
}

//divide sign
const divideElem = document.getElementById('divide');
divideElem.addEventListener('click',letsDivide);
function letsDivide(){
    storage.push(Number(display.innerHTML));
    storage.push('÷');
    display.innerHTML='÷'
}

//equal sign
const equalElem = document.getElementById('equal');
equalElem.addEventListener('click',letsEqual);

var y = 0;
function letsEqual(){
    storage.push(Number(display.innerHTML))
    if(typeof storage[0]==='number'){
        y = storage[0];
    }else{
        throw error
    }
    
    for(var i=0;i<storage.length;i++){
       if(storage[i]==="+"){
           y+=storage[i+1]
       }else if(storage[i]==="-"){
           y-=storage[i+1]
       }else if(storage[i]==='x'){
           y*=storage[i+1]
       }else if(storage[i]==='÷'){
           y/=storage[i+1]
       }

        
    }
    display.innerHTML = y;
    storage = [];
    y = y;
}
// var calculatorModule = (function(){
//     var memory = 0;
//     var total = 0;

//     var load = function(x){
//         total = x;
//          if(typeof x !== 'number'){
//             throw error;
//         }else{
//             return total;
//         }    
//     }
  
//     var getTotal = function(){
//         return total;
//     }

//     function add(x){
//         if(typeof x !== 'number'){
//             // throw error;
//         }else{
//             return total +=x;   
//         }
//     }

//     var subtract = function(x){
//         if(typeof x !== 'number'){
//             throw error;
//         }else{
//             display.innerHTML = '-';
//             return total -= x;
//         }
//     }

//     var multiply = function(x){
//         if(typeof x !== 'number'){
//             throw error;
//         }else{
//             display.innerHTML = 'x';
//             return total *= x;
//         }
//     }

//     var divide = function(x){
//         if(typeof x !== 'number'){
//             throw error;
//         }else{
//             display.innerHTML = '/';
//             return total /= x;
//         }
//     }

//     var recallMemory = function(){
//         return memory;
//     }

//     var saveMemory = function(){
//         memory = total;
//         return memory;
//     }

//     var clearMemory = function(){
//         memory = 0;
//         total = 0;
        
//     }

//     return{
//         load,
//         getTotal,
//         add,
//         subtract,
//         multiply,
//         divide,
//         recallMemory,
//         saveMemory,
//         clearMemory

//     }

// })