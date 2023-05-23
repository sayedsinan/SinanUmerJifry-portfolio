let nav = document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add(".header-scrolled")
    }
    else{
        nav.classList.remove("header-scrolled"); 
    }
}
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document,querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a) {
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");

    })
}) 
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Fetch form data
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Prepare the email template parameters
    var templateParams = {
      name: name,
      number: number,
      email: email,
      message: message
    };
  
    // Send form data using EmailJS API
    emailjs.send('<service_8ojfd25>', '<template_r25afdf>', templateParams, '<sayedsinan7@gmail.com>')
      .then(function(response) {
        // Success message or any additional handling
        console.log("Email sent successfully.");
        // You can display a success message or redirect the user to another page.
      }, function(error) {
        // Error message or additional handling
        console.log("Failed to send email.", error);
      });
  });
  
  