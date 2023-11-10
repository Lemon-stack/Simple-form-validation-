const tickImg=document.querySelector(".verified");
const nameError=document.querySelector(".nameError");
const phoneError=document.querySelector(".phoneError");
const emailError=document.querySelector(".emailError");
const msgError=document.querySelector(".msgError");
const submit=document.querySelector("button");
  let name = document.querySelector("#fullname");
  name.addEventListener("input",validateName);
  function validateName(){
    let nameVal=name.value;
  if (nameVal.length == 0) {
      nameError.textContent="Name required!";
      return false;
    }
    
    if(!nameVal.match(/^[A-Za-z\s]*$/)){
      nameError.textContent="invalid name!";
      return false;
    }
    else{
      nameError.innerHTML='<i class="fa fa-check-circle-o"></i>';
      return true;
    }
}
let phone=document.querySelector("#number");
phone.addEventListener("input",validatePhone);
function validatePhone() {
  let phoneVal=phone.value;
  if(phoneVal.length==0){
    phoneError.textContent="Phone No required!"
    return false;
  }
  if(phoneVal.length<10){
    phoneError.textContent="invalid phone No!";
    return false;
  }else{
    phoneError.innerHTML='<i class="fa fa-check-circle-o"></i>';
    return true;
  }
  
  
}
let email=document.querySelector("#email");
email.addEventListener("input",validateEmail);
function validateEmail(){
  let emailVal=email.value;

  if(emailVal.length==0){
    emailError.textContent="Email required!";
    return false
  }
    if (!emailVal.includes("@")) {
      emailError.textContent = "Invalid email!";
      return false
    }else{
      emailError.innerHTML='<i class="fa fa-check-circle-o"></i>';
    }
    return true;
}
let msg=document.querySelector("#message");
msg.addEventListener("input",validateMessage);
function validateMessage(){
  let msgVal=msg.value;
  if(msgVal.length<6){
    msgError.textContent="min of 6 characters required!"
  }else{
    msgError.innerHTML='<i class="fa fa-check-circle-o"></i>';
    return true;
  }
   if (msgVal.length == 0) {
     msgError.textContent = "message's empty!";
     return false;
   };
}


submit.addEventListener("click",validateForm);
inputError=document.querySelector(".inputError");
function validateForm(){
  if(!validateName()||!validateEmail()||!validatePhone()||!validateMessage()){
    inputError.textContent="Pls fix all errors to submit!"
    setTimeout(()=>{inputError.style.display='none';},3000)
  }else{
    alert("Your message has been submitted 🙂");
    name.value='';
    phone.value='';
    email.value='';
    message.value='';
  
  }
}