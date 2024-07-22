function validate_form() {
const name_pattern = /^[a-z]{8}$/;
const pass_pattern = /^[a-zA-Z]+[@|\\-|$|#][0-9a-z]{6}$/;
 var status = true;
 var uname = document.getElementById("uname").value;
 var password = document.getElementById("pass").value;
 var retypepassword = document.getElementById("repass").value;

if (!name_pattern.test(uname)) {
document.getElementById("uerror").innerHTML = "Username should contain eight lowercase characters";
  status = false;
uname="";
}
 if (!pass_pattern.test(password)) {
document.getElementById("perror").innerHTML = "Password wrong format";
status = false;
password="";
}
else if(password != retypepassword) {
 document.getElementById("matcherror").innerHTML = "Passwords do not match";
status = false;
password="";
}
return status;
 }