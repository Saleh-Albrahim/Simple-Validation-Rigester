let form = document.getElementById('register-form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('confirm-password');



function showError(element, message) {
    let parent = element.parentElement;
    parent.classList = 'form-group error';
    let small = parent.querySelector('small');
    small.innerText = message;
}

function showGood(element) {
    let parent = element.parentElement;
    parent.classList = 'form-group good';
}


function checkPasswordMatch(input1, input2) {
    if (input1.value == input2.value) {
        showGood(input2);
    }
    else {
        showError(input2, "Passwords need to be matched");
    }
}
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${input.id} needs to be at least ${min} characters`);
    }
    else if (input.value.length > max) {
        showError(input, `${input.id} needs can\'t be more than ${max} characters`);
    }
    else { showGood(input); return true; }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    showGood(email);
    //check username length
    checkLength(username, 3, 15);
    //check  password length
    if (checkLength(password, 6, 18)) {
        checkPasswordMatch(password, password2);
    }
});