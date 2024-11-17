const form = document.getElementById('form');
const personalFirstName = document.getElementById('first-name');
const personalLastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phoneNo = document.getElementById('phone');
const billingFirstName = document.getElementById('card-holder-first-name');
const billingLastName = document.getElementById('card-holder-last-name');
const bankNo = document.getElementById('acc-number');
const cvvNo = document.getElementById('cvv-number');
const validDate = document.getElementById('valid-date');
const tncCheckbox = document.getElementById('tnc-checkbox');
var isChecked = document.getElementById('tnc-checkbox').checked;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

//function that checks if the inputs are empty
function checkInputs(){
    const personalFirstNameValue = personalFirstName.value.trim();
    const personalLastNameValue = personalLastName.value.trim();
    const emailValue = email.value.trim();
    const phoneNoValue = phoneNo.value.trim();
    const billingFirstNameValue = billingFirstName.value.trim();
    const billingLastNameValue = billingLastName.value.trim();
    const bankNoValue = bankNo.value.trim();
    const cvvNoValue = cvvNo.value.trim();
    const validDateValue = validDate.value.trim();

    //for personal details first name
    if(personalFirstNameValue === ''){
        setErrorFor(personalFirstName, 'This field is required!');
    } else{
        setSuccessFor(personalFirstName);
    }

    //for personal details last name
    if(personalLastNameValue === ''){
        setErrorFor(personalLastName, 'This field is required!');
    } else{
        setSuccessFor(personalLastName);
    }

    //for personal details email address
    if(emailValue === ''){
        setErrorFor(email, 'This field is required!');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Invalid Email');
    } else{
        setSuccessFor(email);
    }

    //for personal details phone number
    if(phoneNoValue === ''){
        setErrorFor(phoneNo, 'This field is required!');
    } else if (!isPhoneNo(phoneNoValue)){
        setErrorFor(phoneNo, 'Invalid Phone Number');
    } else{
        setSuccessFor(phoneNo);
    }

    //for billing details first name
    if(billingFirstNameValue === ''){
        setErrorFor(billingFirstName, 'This field is required!');
    } else{
        setSuccessFor(billingFirstName);
    }

    //for billing details last name
    if(billingLastNameValue === ''){
        setErrorFor(billingLastName, 'This field is required!');
    } else{
        setSuccessFor(billingLastName);
    }

    //for billing details bank number
    if(bankNoValue === ''){
        setErrorFor(bankNo, 'This field is required!');
    } else if (!isBankNo(bankNoValue)){
        setErrorFor(bankNo, 'Invalid Bank Number');
    } else{
        setSuccessFor(bankNo);
    }

    //for billing details cvv number
    if(cvvNoValue === ''){
        setErrorFor(cvvNo, 'This field is required!');
    } else if (!isCVVNo(cvvNoValue)){
        setErrorFor(cvvNo, 'Invalid CVV Number');
    } else{
        setSuccessFor(cvvNo);
    }

    //for billing details card valid date
    if(validDateValue === ''){
        setErrorFor(validDate, 'This field is required!');
    } else{
        setSuccessFor(validDate);
    }

    //for t&c agreement
    if(!isChecked){
        setErrorFor(tncCheckbox, 'This field is required!');
    } else{
        setSuccessFor(tncCheckbox);
    }
}

//funtion that sets error
function setErrorFor(input, message){
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

    //add error message
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

//funtion that shows success icon
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//function that check the validity of email
function isEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//function that check the validity of phone number
function isPhoneNo(phoneNo){
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNo);
}

//function that check the validity of bank no
function isBankNo(bankNo){
    return /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/.test(bankNo);
}

//function that check the validity of cvv no
function isCVVNo(cvvNo){
    return /^[0-9]{3}$/.test(cvvNo);
}