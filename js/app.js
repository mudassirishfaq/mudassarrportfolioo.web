//  Contact form validation


function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let subjectError = document.getElementById("subjectError");
    let messageError = document.getElementById("messageError");
    let isValid = true;

    if (name === "") {
        nameError.innerHTML = "Please enter your name";
        isValid = false;
    } else {
        nameError.innerHTML = "";
    }

    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Please enter a valid email address";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }

    if (subject === "") {
        subjectError.innerHTML = "Please enter a subject";
        isValid = false;
    } else {
        subjectError.innerHTML = "";
    }

    if (message === "") {
        messageError.innerHTML = "Please enter a message";
        isValid = false;
    } else {
        messageError.innerHTML = "";
    }

    return isValid;
}



    
