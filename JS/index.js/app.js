document.title = "JSConnect";  // Javascript Title Name

// **********************************************************************************

// Google Login Not Available Alert

function Google() {
  Swal.fire({
    title: "<strong>Google Login Not Available</strong>",
    icon: "info",
    html: `
          Oops, sorry! I haven't learned enough JavaScript yet to implement Google login directly. So, sorry! For now, users can log in using email instead. I will try to learn and add Google login in the future. 😊
        `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: `
          <i class="fa fa-thumbs-down"></i>
        `,
    cancelButtonAriaLabel: "Thumbs down",
  });
}

// *************************************************************************************

// facebook Login Not Available Alert


function facebook() {
    Swal.fire({
      title: "<strong>Facebook Login Not Available</strong>",
      icon: "info",
      html: `
            Oops, sorry! I haven't learned enough JavaScript yet to implement Facebook login directly. So, sorry! For now, users can log in using email instead. I will try to learn and add Google login in the future. 😊
          `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Great!
          `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
            <i class="fa fa-thumbs-down"></i>
          `,
      cancelButtonAriaLabel: "Thumbs down",
    });
  }


// *************************************************************************************

function signUp(){
  
  let userName = document.getElementById("userName");
  let signupEmail = document.getElementById("signupEmail");
  let signupPassword = document.getElementById("signupPassword");
  let userDataEP = JSON.parse(localStorage.getItem("userData")) || [];
  
  let name =  userName.value;
  let email = signupEmail.value;
  let password = signupPassword.value;

 if((email != "" && password != "") && (email.includes("@gmail.com"))){
  let objUser = {
    "Name" : name,
    "Email" :  email,
    "Password": password,
  }
  userDataEP.push(objUser)

localStorage.setItem("userData", JSON.stringify(userDataEP))
}

}



function SignIn(){
  let signinEmail = document.getElementById("signinEmail");
  let signinPassword = document.getElementById("signinPassword");
  
  let loginEmail = signinEmail.value;
  let loginPassword = signinPassword.value;

  let userDataEP = JSON.parse(localStorage.getItem("userData")) || [];
  let userFound = userDataEP.find(user => user.Email === loginEmail && user.Password === loginPassword);

  if (userFound) {
    alert("Login successful!");
    // Yahan aap user ko dusri page par redirect bhi kar sakte hain.
  } else {
    alert("Invalid email or password!");
  }

}