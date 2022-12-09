
    
function sendMail(){
    Email.send({
             secureToken : "197dd11b-fee8-405c-8c9a-954f7773837e",
             To : 'udofotekomobong@gmail.com',
             From : document.getElementById("email").value,
             Subject : "New Contact Form Enquiry",
             Body : "Name:" + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Phone: " + document.getElementById("tel").value
                + "<br> Message: " + document.getElementById("message").value
       })
          .then(
              alert("Message Sent Successfully🚀" ) 
          );
 };


