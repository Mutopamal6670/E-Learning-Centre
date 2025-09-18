const form = document.getElementById("form");
const username = document.getElementById('username');
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


const validateInputs = () => {
    const usernameValue = username.value.trim();         //the trim() function will remove the whitespaces from the passe values
    const passwordValue = password.value.trim();


    if(usernameValue === '') {
        //call setError() method to display the error message
        setError(username, 'Username is required')
    }
    else {
        //call setSuccess() method
        setSuccess(username);

    }

    if(passwordValue === '') {
        //call setError() method to display the error message
        setError(password, 'Password is required')
    }

    /**Write the logic to handle password and username check to see if the user names entered exist in the database */
};
