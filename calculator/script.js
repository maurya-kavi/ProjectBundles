let currentinput = ''; // value on the screen

// function to update the screen
function updatescreen() {
    document.getElementById('screen').textContent=currentinput;
}



// take valueon the screen 
function handleNumberClick(value) {
    currentinput += value;
    updatescreen(); // update value on the scrren
}

// function to handle operator
function handleOperatorClick(operator){
    currentinput+=operator;
    updatescreen();
}

// function to clear input
function clearinput() {
    currentinput = ''; //reset the input
    updatescreen();

}

// function to evalute the expression when '=' is clicked
function evaluteExpression() {
    try {
        currentinput = eval(currentinput).toString();
        updatescreen();
    }
    catch (error) {
        currentinput= 'Error';
        updatescreen();
    }

}

function deletelast() {
    currentinput = currentinput.slice(0, -1); //remove the last character from the input
    updatescreen();

}

// add event listeners for number buttons
document.getElementById('1').querySelector('button').addEventListener('click', ()=> handleNumberClick('1'))
document.getElementById('2').querySelector('button').addEventListener('click', ()=> handleNumberClick('2'))
document.getElementById('3').querySelector('button').addEventListener('click', ()=> handleNumberClick('3'))
document.getElementById('4').querySelector('button').addEventListener('click', ()=> handleNumberClick('4'))
document.getElementById('5').querySelector('button').addEventListener('click', ()=> handleNumberClick('5'))
document.getElementById('6').querySelector('button').addEventListener('click', ()=> handleNumberClick('6'))
document.getElementById('7').querySelector('button').addEventListener('click', ()=> handleNumberClick('7'))
document.getElementById('8').querySelector('button').addEventListener('click', ()=> handleNumberClick('8'))
document.getElementById('9').querySelector('button').addEventListener('click', ()=> handleNumberClick('9'))
document.getElementById('0').querySelector('button').addEventListener('click', ()=> handleNumberClick('0'))

// add event for operator buttons
document.getElementById('add-btn').addEventListener('click', ()=> handleOperatorClick('+'));
document.getElementById('sub-btn').addEventListener('click', ()=> handleOperatorClick('-'));
document.getElementById('mul-btn').addEventListener('click', ()=> handleOperatorClick('*'));
document.getElementById('div-btn').addEventListener('click', ()=> handleOperatorClick('/'));

// add event listener for the clear button
document.getElementById('clear-btn').addEventListener('click', clearinput);

// add event listener for equals button
document.getElementById('equals-btn').addEventListener('click', evaluteExpression);

