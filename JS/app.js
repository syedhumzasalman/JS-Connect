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
  let userNameDispaly = document.getElementById("userNameDispaly");



//  Sigup Function

function signUp() {
    let userName = document.getElementById("userName");
    let signupEmail = document.getElementById("signupEmail");
    let signupPassword = document.getElementById("signupPassword");
    let userDataEP = JSON.parse(localStorage.getItem("userData")) || [];
    
    let name = userName.value.trim();
    let email = signupEmail.value.trim();
    let password = signupPassword.value.trim();
  
    
  
    
    let userExists = userDataEP.some(user => user.Email === email);
  
    if (!name || !email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "All fields are required!",
      });
      return;
    }
  
    if (!email.includes("@gmail.com")) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid Gmail address!",
      });
      return;
    }
  
    if (userExists) {
      Swal.fire({
        icon: "error",
        title: "User Already Exists",
        text: "This email is already registered!",
      });
    } else {
      let objUser = {
        Name: name,
        Email: email,
        Password: password,
      };
  
      userDataEP.push(objUser);
      localStorage.setItem("userData", JSON.stringify(userDataEP));
  
      Swal.fire({
        icon: "success",
        title: "Sign Up Successful!",
        text: "Redirecting to login page...",
        timer: 2000,
        showConfirmButton: false
      }).then(() => {
        window.location.href = "signin.html";
      });
    }
  }
  

// *************************************************************************************

//  Sigin Function

function SignIn(){
    let signinEmail = document.getElementById("signinEmail");
    let signinPassword = document.getElementById("signinPassword");
    
  let loginEmail = signinEmail.value;
  let loginPassword = signinPassword.value;

  let userDataEP = JSON.parse(localStorage.getItem("userData")) || [];
  let userFound = userDataEP.find(user => user.Email === loginEmail && user.Password === loginPassword);

  if (userFound) {
    localStorage.setItem("loggedInUser", JSON.stringify(userFound)); 

    window.location.href = "../postingpage.html";
  } else {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email or password!",
        footer: 'Dont have an account? <a href="signup.html"> Sign up</a>'
      });
  }

}



// *************************************************************************************



// *************************************************************************************


  function coding() {

    // postingDisplay.style.display = "none"; 

    displayPosts()

    let contentBox = document.getElementById("contentBox");
    contentBox.innerHTML = `
        <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
            <div class="d-flex align-items-center gap-2">
                <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
                <p class="fw-bold m-0">Gagan Saini • 3rd+</p>
            </div>
            <p class="fs-6">Frontend Developer || React + JavaScript Developer || 5M+</p>
            <img src="Images/post01.jpg" alt="post01" class="img-fluid rounded">
            <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
                <button class="btn btn-light">Like</button>
                <button class="btn btn-light">Comment</button>
            </div>
        </div>

        <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
            <div class="d-flex align-items-center gap-2">
                <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
                <p class="fw-bold m-0">Muhammad Rizwan • 2nd</p>
            </div>
            <p class="fs-6">This post will be a quick refresh to most of JavaScript common concepts💜🚀</p>
            <img src="Images/post02.jpg" alt="post02" class="img-fluid rounded">
            <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
                <button class="btn btn-light">Like</button>
                <button class="btn btn-light">Comment</button>
            </div>
        </div>

        <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
            <div class="d-flex align-items-center gap-2">
                <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
                <p class="fw-bold m-0">Abdul Rehman • 2nd</p>
            </div>
            <p class="fs-6">🌐✨ Explore the enchanting world of JavaScript arrays in this comprehensive guide!</p>
            <img src="Images/post03.jpg" alt="post03" class="img-fluid rounded">
            <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
                <button class="btn btn-light">Like</button>
                <button class="btn btn-light">Comment</button>
            </div>
        </div>
    `;
}

// *************************************************************************************


function Travel() {

    // postingDisplay.style.display = "none"; 

    displayPosts()


  let contentBox = document.getElementById("contentBox");
  contentBox.innerHTML = `
      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Gagan Saini • 3rd+</p>
          </div>
          <p class="fs-6">Travel makes one modest. You see what a tiny place you occupy in the world." – Gustave Flaubert</p>
          <img src="Images/post4.jpg" alt="post01" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>

      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Muhammad Rizwan • 2nd</p>
          </div>
          <p class="fs-6">The world is a book, and those who do not travel read only one page.</p>
          <img src="Images/post5.jpg" alt="post02" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>

      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Abdul Rehman • 2nd</p>
          </div>
          <p class="fs-6">🌐✨ Adventure is worthwhile in itself.</p>
          <img src="Images/post6.jpg" alt="post03" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>
  `;
}

// *************************************************************************************



function Business() {

    // postingDisplay.style.display = "none"; 
    displayPosts()


  let contentBox = document.getElementById("contentBox");
  contentBox.innerHTML = `
      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Gagan Saini • 3rd+</p>
          </div>
          <p class="fs-6">Opportunities don't happen. You create them.</p>
          <img src="Images/post7.jpg" alt="post01" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>

      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Muhammad Rizwan • 2nd</p>
          </div>
          <p class="fs-6">The secret of change is to focus all your energy not on fighting the old, but on building the new.</p>
          <img src="Images/post8.jpg" alt="post02" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>

      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Abdul Rehman • 2nd</p>
          </div>
          <p class="fs-6">Don't be afraid to give up the good to go for the great.</p>
          <img src="Images/post9.jpg" alt="post03" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>
  `;
}


// *************************************************************************************



function Food() {

    // postingDisplay.style.display = "none";
    displayPosts() 


  let contentBox = document.getElementById("contentBox");
  contentBox.innerHTML = `
      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Gagan Saini • 3rd+</p>
          </div>
          <p class="fs-6">Karachi Street Food: Heaven for Taste Buds</p>
          <img src="Images/post10.jpg" alt="post01" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>

      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Muhammad Rizwan • 2nd</p>
          </div>
          <p class="fs-6">People who love to eat are always the best people.</p>
          <img src="Images/post11.jpg" alt="post02" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>

      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Abdul Rehman • 2nd</p>
          </div>
          <p class="fs-6">In Karachi, Street Food Tells a Story of Division and Unity</p>
          <img src="Images/post12.jpg" alt="post03" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>
  `;
}


// *************************************************************************************



function Flowers() {

    // postingDisplay.style.display = "none";
    displayPosts()


  let contentBox = document.getElementById("contentBox");
  contentBox.innerHTML = `
      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Gagan Saini • 3rd+</p>
          </div>
          <p class="fs-6">Every flower is a soul blossoming in nature.</p>
          <img src="Images/post13.jpg" alt="post01" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>

      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Muhammad Rizwan • 2nd</p>
          </div>
          <p class="fs-6">Flowers don’t tell, they show.</p>
          <img src="Images/post14.jpg" alt="post02" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>

      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Abdul Rehman • 2nd</p>
          </div>
          <p class="fs-6">Be like a flower—survive the rain, but use it to grow.</p>
          <img src="Images/post15.jpg" alt="post03" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>
  `;
}



// *************************************************************************************



function Technology() {

    // postingDisplay.style.display = "none"; 

    displayPosts()

  let contentBox = document.getElementById("contentBox");
  contentBox.innerHTML = `
      <div class="content-box bg-white rounded shadow-sm h-100">
          <div class="d-flex align-items-center gap-2">
          </div>
          <p class="fs-6"></p>
          <iframe class="myiframe" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297931202819244033" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
      </div>

      <div class="content-box bg-white rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
          </div>
          <p class="fs-6"></p>
          <iframe class="myiframe" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7295633213564043265" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
      </div>

      <div class="content-box bg-white rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
          </div>
          <p class="fs-6"></p>
          <iframe class="myiframe" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7299137380580540418" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
      </div>
  `;
}



// *************************************************************************************



function Cats() {
    
    displayPosts()


  let contentBox = document.getElementById("contentBox");
  contentBox.innerHTML = `
      <div class="content-box bg-white rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Gagan Saini • 3rd+</p>
          </div>
          <p class="fs-6">Time spent with cats is never wasted.</p>
          <img src="Images/post16.jpg" alt="post01" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>

      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Muhammad Rizwan • 2nd</p>
          </div>
          <p class="fs-6">A cat's purr is the sound of love.</p>
          <img src="Images/post17.jpg" alt="post02" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>

      <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
          <div class="d-flex align-items-center gap-2">
              <ion-icon class="fs-4" name="person-circle-outline"></ion-icon>
              <p class="fw-bold m-0">Abdul Rehman • 2nd</p>
          </div>
          <p class="fs-6">You can’t own a cat. The best you can do is be partners.</p>
          <img src="Images/post18.jpg" alt="post03" class="img-fluid rounded">
          <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
              <button class="btn btn-light">Like</button>
              <button class="btn btn-light">Comment</button>
          </div>
      </div>
  `;
}


let postingInput = document.getElementById("postingInput");
let postInput = document.getElementById("postInput");
let userIcon = document.getElementById("userIcon");
let postBtn = document.getElementById("postBtn");

// *************************************************************************************


function posting() { 
 
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    postingInput.style.flexDirection = "column";
    postInput.style.height = "200px";
    postInput.style.placeContent = "center";
    postInput.style.textAlign = "center";
    userIcon.style.placeContent = "start"
    userIcon.innerHTML = `<p class="fw-bold m-0"></p>`
    if (loggedInUser) {
        userIcon.innerHTML = `<strong> Hello,  ${loggedInUser.Name} Wellcome to JS Connect </strong>`;
    } else {
        userIcon.innerHTML = "Guest User";
    }
}

// *************************************************************************************


function changeColor(color) {
    // console.log("color");
    if (postInput) {
        postInput.style.backgroundColor = color;
        postInput.style.color = "#000";
        postInput.style.fontWeight = "bold";
    }
}

document.getElementById("customColorPicker").addEventListener("input", function() {
    changeColor(this.value);
});


// *************************************************************************************


postInput.addEventListener("click", function () {
    postBtn.disabled = false;
});



function post() {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    let postInput = document.getElementById("postInput");
    let fileUpload = document.getElementById("file-upload");
    let videoUpload = document.getElementById("video-upload");

    let postValue = postInput.value;
    let bgColor = postInput.style.backgroundColor;
    let textColor = postInput.style.color;

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    let fileURL = "";
    let videoURL = "";

    // Agar file upload hui hai, toh uska URL lena
    if (fileUpload.files.length > 0) {
        let file = fileUpload.files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            fileURL = e.target.result;
            savePost(fileURL, videoURL);
        };
        reader.readAsDataURL(file);
    } else if (videoUpload.files.length > 0) {
        let video = videoUpload.files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            videoURL = e.target.result;
            savePost(fileURL, videoURL);
        };
        reader.readAsDataURL(video);
    } else {
        savePost("", "");
    }

    function savePost(fileURL, videoURL) {
        let newPost = {
            user: loggedInUser?.Name || "Anonymous",
            content: postValue,
            bgColor: bgColor,
            textColor: textColor,
            fileUpload: fileURL,
            videoUpload: videoURL
        };

        posts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));

        postInput.value = "";
        fileUpload.value = "";
        videoUpload.value = "";
        fileNameDisplay.textContent = ""; 

        displayPosts();
    }
}

let fileUpload = document.getElementById("file-upload");
let videoUpload = document.getElementById("video-upload");
let fileNameDisplay = document.getElementById("fileNameDisplay");

function displaySelectedFileName(inputElement) {
    if (inputElement.files.length > 0) {
        let fileName = inputElement.files[0].name;
        fileNameDisplay.textContent = `Selected file: ${fileName}`;
    } else {
        fileNameDisplay.textContent = ""; 
    }
}


fileUpload.addEventListener("change", function() {
    displaySelectedFileName(this);
});

videoUpload.addEventListener("change", function() {
    displaySelectedFileName(this);
});



function displayPosts() {
    let contentBox = document.getElementById("contentBox");
    contentBox.innerHTML = "";

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    for (let post of posts.reverse()) {
        let fileTag = post.fileUpload ? `<img src="${post.fileUpload}" alt="Uploaded File" style="max-width:100%; height:auto;">` : "";
        let videoTag = post.videoUpload ? `<video controls style="max-width:100%; height:auto;"><source src="${post.videoUpload}" type="video/mp4"></video>` : "";

        contentBox.innerHTML += `
        <div class="content-box p-3 bg-white mb-3 rounded shadow-sm">
            <div class="d-flex align-items-center gap-2 bg-white">
                <ion-icon class="fs-4 bg-white" name="person-circle-outline"></ion-icon>
                <p class="fw-bold bg-white m-0">${post.user}</p>
            </div>
            <p class="post-box mt-1" style="background-color: ${post.bgColor}; color: ${post.textColor};">${post.content}</p>
            ${fileTag}
            ${videoTag}
            <div class="d-flex justify-content-center gap-3 mt-2 bg-white">
                <button class="btn btn-light">Like</button>
                <button class="btn btn-light">Comment</button>
            </div>
        </div>`;
    }
}



window.onload = function() {
    let userNameDispaly = document.getElementById("userNameDispaly");
    
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        userNameDispaly.innerHTML = `<strong>${loggedInUser.Name}</strong>`;
    } else {
        userNameDispaly.innerHTML = "Guest User";
    }

    displayPosts();
};