const email = document.querySelector('#email'); 
const btnSubmit = document.getElementById('btnSubmit'); 
const card = document.querySelector('.card');
const hideCard = document.querySelector('.toggle-hide');
const confirmation = document.querySelector('.confirmation'); 
const dismissBtn = document.getElementById('dismiss')
const email_error = document.getElementById('email-error')
let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


btnSubmit.addEventListener('click', (e)=>{
    e.preventDefault(); 


    if(email.value.trim===''){
        email_error.style.display = 'block';
        email_error.border.style = '1px solid red'; 
        email_error.textContent = 'Email Field Cannot be Empty!'; 
    }
    
    if(!email.value.match(pattern)){
        email_error.textContent = 'Not a Valid Email Address!';
        email.style.border = '1px solid red';
    }else{

        email.style.border = '';
        email_error.style.display = 'none';
        email_error.style.border = ''; 
        email_error.textContent = ''; 

        email.value = '';
    
    card.classList.add('hide'); 
    hideCard.classList.add('hide'); 
    confirmation.classList.remove('hide');
    }
   

 

});

dismissBtn.addEventListener('click', (e)=>{
    card.classList.remove('hide'); 
    hideCard.classList.remove('hide'); 
    confirmation.classList.add('hide');
    
})