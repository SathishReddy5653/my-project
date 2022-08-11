function validate_password() {
 
    var pass = document.getElementById('password').value;
    var confirm_pass = document.getElementById('cpassword').value;
    if (pass != confirm_pass) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').innerHTML
          = 'Use same password';
        document.getElementById('button').disabled = true;
        document.getElementById('button').style.opacity = (0.4);
    } else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML =
            '  Password Matched';
        document.getElementById('button').disabled = false;
        document.getElementById('button').style.opacity = (1);
    }
   }
   
   function wrong_pass_alert() {
    if (document.getElementById('password').value != "" &&
        document.getElementById('cpassword').value != "") {
        alert("Your response is submitted");
    } else {
        alert("Please fill all the fields");
    }
   }
       