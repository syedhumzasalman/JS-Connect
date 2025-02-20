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
