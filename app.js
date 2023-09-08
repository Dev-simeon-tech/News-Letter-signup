const form = document.getElementById('form')
const input = document.querySelector("#email")
const errorMsg = document.querySelector(".error-msg")
const emailValue = document.querySelector(".email-value")
const successBtn = document.querySelector('.success-btn')

// cards
const card_1 = document.querySelector('.card-1');
const card_2 = document.querySelector('.card-2');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    emailValidation();
    if(emailValidation()){
        console.log('worked')
        onSuccess();
    }
})

function emailValidation(){
    const message = 'valid email required'
    let isValid = false;
    let validEmail = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if(input.value === '' ){
        errorMsg.innerHTML = message;
        input.style.border = '1px solid hsl(4, 100%, 67%)';
        input.style.backgroundColor = 'hsl(4, 100%, 95%)'
        isValid = false
    }
    else if(!input.value.match(validEmail)){
        errorMsg.innerHTML = message;
        input.style.border = '1px solid hsl(4, 100%, 67%)';
        input.style.backgroundColor = 'hsl(4, 100%, 95%)'
        isValid = false

    }
    else{
        isValid = true
        errorMsg.innerHTML=""
        input.style.border = '1px solid hsl(235, 18%, 26%)';
        input.style.backgroundColor = 'transparent'
        
    }
    return isValid
}
function onSuccess(){
    card_1.classList.add('hide')
    card_2.classList.remove('hide')

    emailValue.innerHTML = input.value;
    successBtn.addEventListener('click', function(){
        card_1.classList.remove('hide')
        card_2.classList.add('hide') 
        input.value = ''
    })

    
}
