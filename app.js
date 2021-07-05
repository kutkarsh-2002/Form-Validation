//Add Form Blur Event Listener
document.getElementById('name').addEventListener('blur',ValidateName);
document.getElementById('branch').addEventListener('blur',ValidateBranch);
document.getElementById('email').addEventListener('blur',ValidateEmail);
document.getElementById('phone').addEventListener('blur',ValidatePhone);

// Function Name Validation
function ValidateName(){
    const name= document.getElementById('name');
    const re = /^([a-zA-Z]{2,10})\s([a-zA-Z]{2,10})$/;

    if(!re.test(name.value)){
    name.classList.add('is-invalid');

    }else{
    name.classList.remove('is-invalid');
    } 

}

//Function Branch Validation
function ValidateBranch(){
    const branch= document.getElementById('branch');
    const re =/^([a-zA-Z]{2,10})$/;

    if(!re.test(branch.value)){
    branch.classList.add('is-invalid');

    }else{
    branch.classList.remove('is-invalid');
    }
}

//Function Email Validation
function ValidateEmail(){
    const email= document.getElementById('email');
    const re =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
    email.classList.add('is-invalid');

    }else{
    email.classList.remove('is-invalid');
    }
}

//Function Phone Validation

function ValidatePhone(){
    const phone= document.getElementById('phone');
    const re =/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;


    if(!re.test(phone.value)){
    phone.classList.add('is-invalid');

    }else{
    phone.classList.remove('is-invalid');
    }
}