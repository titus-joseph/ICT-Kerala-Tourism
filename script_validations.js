function signinvalidation(){
  var username=  document.getElementById("inputEmail3");
  document.write("Hello "+ username.value  + " Kerala tourisam website , you have successfully logged in");
  return true;

}

// function to validate the email in signup page;


function signinValidation(){
var email=document.getElementById("inputEmail4");
var errorlabel=document.getElementById("errormsg");
    console.log(email.value);
  let regemail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
  if(regemail.test(email.value)){
      errorlabel.innerHTML="Valid";
      errorlabel.style.color="green";  
      return true;    

     }
  else{
      errorlabel.innerHTML="Invalid email id";
      errorlabel.style.color="red";  
      return false;
     }
}
  function phoneNumbervalidation(){
    var phonenumber=document.getElementById("phonenumber");
    var errorlabelphone=document.getElementById("errormsgphone");
    console.log(phonenumber.value);
    var regphone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if(regphone.test(phonenumber.value)){
      errorlabelphone.innerHTML="Valid phone number";
      errorlabelphone.style.color="green"; 
      return true; 
    }
    else {
      errorlabelphone.innerHTML="invalid phone number";
      errorlabelphone.style.color="red"; 
      return false; 
    }
  }

  // password validation functiom 
  var pwd=document.getElementById("inputPassword4");
//   function validatePassword(){


// pwd
//   }
document.getElementById("inputPassword4").addEventListener("keyup", validatepassword);

   function validatepassword()
   {
    var lowerCaseLetters = /[a-z]/g;
    if(pwd.value.match(lowerCaseLetters)) 
    {
      console.log("contain lowercase");                       
    }
                      else{
                              console.log("no lowercase");
                             }
  }
