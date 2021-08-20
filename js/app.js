function  getPin() {
    const pin = Math.round(Math.random() * 10000);
    const stringPin = pin + '';
    if(stringPin.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;//new eita pailam
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)) {
        if(number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMsg = document.getElementById('notify-success');
    const failureMsg = document.getElementById('notify-fail');
    if(pin == typedNumbers) {
        failureMsg.style.display = 'none';
        successMsg.style.display = 'block';
    }
    else {
        successMsg.style.display = 'none';
        failureMsg.style.display = 'block';
    }
}