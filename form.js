var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var numberError = document.getElementById('number-error');
var submitError = document.getElementById('submit-error');


function validateName() {
    var name=document.getElementById('fname').value.trim();  

    if (name.length==0) {
        nameError.innerHTML='Name is Required';
        nameError.style.color='red'
        return false;
    }

    if (!name.match(/^[A-Za-z ]*$/)){
        nameError.innerHTML='Write a FullName';
        nameError.style.color='red'
        return false;
    }

    if (name.length<3){
        nameError.innerHTML='enter minimum 3 charactors';
        nameError.style.color='red'
        return false;
    }
    
    nameError.innerHTML='Name is valid';
    nameError.style.color='green'
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value.trim();
    if (email.length==0) {
        emailError.innerHTML='Email is Required';
        emailError.style.color='red'
        return false;
    }

    if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML='Email is Invalid';
        emailError.style.color='red'
        return false;
    }
    emailError.innerHTML='Email is valid';
    emailError.style.color='green'
    return true;
}



function validatePassword(){
	var phone = document.getElementById("pw").value.trim();
	if (phone.length == 0) {
		numberError.innerHTML = 'password is Required';
		numberError.style.color = 'red'
		document.getElementById("pw")
		document.getElementById("pw").style.color = "red"
		return false;
	}
	
	if (!phone.match("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")) {
		
		numberError.style.color("red")
		document.getElementById("pw")
		document.getElementById("pw").style.color = "red"
   

		return false;
    }
    numberError.innerHTML='Password is valid';
    numberError.style.color='green'
    return true;

    numberError.innerHTML = ""
	document.getElementById("pw").style.borderColor = ""
	document.getElementById("pw").style.color = ""
	return true;
    
    
}