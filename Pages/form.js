const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();     //prevents the form from being submitted so that we validated the form first

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};


const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('sucess');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    //regular expression to chck and see if the entered email is valid
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();         //the trim() function will remove the whitespaces from the passe values
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        //call setError() method to display the error message
        setError(username, 'Username is required')
    }
    else {
        //call setSuccess() method
        setSuccess(username);

    }

    if(emailValue === '') {
        //call setError() method to display the error message
        setError(email, 'Email address is required')
    }
    else if(!isValidEmail(emailValue)){
        //call isValidEmail(emailValue) method
        setError(email, 'Enter a valid email address');
       
    }
    else {
        setSuccess(email);
    }



    if(passwordValue === '') {
        //call setError() method to display the error message
        setError(password, 'Password is required')
    }
    else if(passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters long.')
    }
    else {
        //call setSuccess() method
        setSuccess(password);

    }



    if(password2Value === '') {
        //call setError() method to display the error message
        setError(password2, 'Password confirmation is required');
    }
    else if(password2Value !== passwordValue) {
        setError(password2, "Password doen't match.");     
    }
    else {
        //call setSuccess() method
        setSuccess(password2);
    }
};
