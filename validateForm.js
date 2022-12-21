function validateForm() {
    // validating email 
    let y = document.forms["myForm"]["Email"].value;
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(y)){
        alert("Enter a valid Email id. dont forget to add '@'");
        return false;
    }
    
    // validating phone number
    let p = document.forms["myForm"]["PhoneNumber"].value;
    var phoneno = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(!phoneno.test(p)){
        alert("Ener a valid phone number, 10 digits");
        return false;
    }
        
}