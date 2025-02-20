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

  document.body.innerHTML = `<div class="login-light"></div>
    <div class="login-box" data-aos="flip-left" style="transition: 1s ease;">
        <form action="#">
            <input type="checkbox" class="input-check" id="input-check">
            <label for="input-check" class="toggle">
                <span class="text off">off</span>
                <span class="text on">on</span>
            </label>
            <div class="light"></div>

            <h2>Sign up</h2>
            <div class="input-box">
                <span class="icon">
                    <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" required>
                <label>Email</label>
                <div class="input-line"></div>
            </div>
            <div class="input-box">
                <span class="icon">
                    <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" required>
                <label>Password</label>
                <div class="input-line"></div>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox"> Remember me</label>
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Register</button>
            <div class="register-link">
                <p>Already have an account? <a href="signin.html">Sign in</a></p>
            </div>
        </form>
    </div>`
  
}