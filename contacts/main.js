var inputName = document.getElementById('input-name');
var inputMail = document.getElementById('input-mail');
var inputMessage = document.getElementById('input-message');
var button = document.querySelector('.submit-button');
var regEx = /\S+@\S+\.\S+/;
var form = document.querySelector('.form')

function checkInput() {
    if (inputName.value.trim() !=='' && regEx.test(inputMail.value) && inputMessage.value.trim() !=='') {
        button.style.backgroundColor = '#fa633f'; 
        button.disabled = false;  
    } else {
        button.style.backgroundColor = 'gray';
        button.disabled = true;  
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event);
})