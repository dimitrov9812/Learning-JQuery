

$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        name : {
          required: true,
          minlength: 3
        },
        psw: {
          required: true,
          minlength: 10
        },
        mail: {
          required: true,
          email: true
        },
      },
      messages : {
        name: {
          minlength: "Name should be at least 3 characters"
        },
        psw: {
          required: "Please enter your password",
          minlength: "Your password must be at least 10 characters"
        },
        mail: {
          email: "The email should be in the format: abc@domain.tld"
        },
      }
    });
  });
  
  