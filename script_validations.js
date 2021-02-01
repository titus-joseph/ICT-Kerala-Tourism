function signinvalidation(){
      var username=  document.getElementById("inputEmail3");
      document.write("Hello "+ username.value  + " welcome to Kerala tourisam website , you have successfully logged in");
      return true;

    }

// function to validate the email in signup page 1;


function signinValidation()
{
     var email=document.getElementById("inputEmail4");
     var errorlabel=document.getElementById("errormsg");
   // console.log(email.value);
  let regemail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
  if(regemail.test(email.value))
    {
      //errorlabel.innerHTML="Valid";
      errorlabel.textContent="valid email";
      errorlabel.style.color="green";  
      return true;    

     }
  else{
      errorlabel.textContent="invalid email ";
      errorlabel.style.color="red";  
      return false;
      }
 }

   function phoneNumbervalidation()
   {
       var phonenumber=document.getElementById("phonenumber");
       var errorlabelphone=document.getElementById("errormsgphone");
       var regphone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
      if(regphone.test(phonenumber.value))
      {
          errorlabelphone.textContent="valid phone number";
          errorlabelphone.style.color="green"; 
          return true; 
         }
     else 
     {
         errorlabelphone.textContent="invalid phone number";
         errorlabelphone.style.color="red"; 
        
         return false; 
      }
  }


   function validatePassword()
   {
   
    var errorpwd=document.getElementById("errormsgpwd");
    var pwd=document.getElementById("inputPassword4");
     if(pwd.value.length<=8)
        {
           errorpwd.innerHTML="Password must be minimum of 8 charecter";
           errorpwd.style.color="red";
           return false;
         }
      else{
        
          return true;
          
          }
     
  }
