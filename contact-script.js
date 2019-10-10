// Contact validation 

document.getElementById("submit-contact").addEventListener("click", function() {
    
    var firstName = document.getElementById("first-name").value;
     var lastName =
        document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    
    var firstNameRegex = /[a-zA-Z]/;
    var lastNameRegex = /[a-zA-Z]/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,20}$/;
    
    var firstNameResult = firstNameRegex.test(firstName);
    var lastNameResult = lastNameRegex.test(lastName);
    var emailResult = emailRegex.test(email);
    
    if (firstNameResult === false) {
        document.getElementById("firstNameError").style.display = "block"
    } else {
        document.getElementById("firstNameError").style.display = "none"
    };
    if (lastNameResult === false) {
        document.getElementById("lastNameError").style.display = "block"
    } else {
        document.getElementById("lastNameError").style.display = "none"
    };
    if (emailResult === false) {
        document.getElementById("emailError").style.display = "block"
    } else {
        document.getElementById("emailError").style.display = "none"
    };
})