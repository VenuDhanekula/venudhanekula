function darkModeToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


function insert_value(){
    var scriptURL = "https://script.google.com/macros/s/AKfycbzKSzQHu5DLCLSpWxPfhWqeeNfINo3VutcvDnjX9CkCEFWr92mstAWcwNIHSKsYEaVKug/exec"
    
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value; 
    var email = document.getElementById("email").value; 
    var message = document.getElementById("message").value; 
    
    console.log(name, phone, email, message);

    scriptURL = scriptURL + "?name="+name;
    scriptURL = scriptURL + "&phone="+phone;
    scriptURL = scriptURL + "&email="+email;
    scriptURL = scriptURL + "&message="+message;

    var delayInMilliseconds = 500;
    mywindow = window.open(scriptURL,"", "width=500,height=300");

    setTimeout(function() {
        mywindow.close();
        alert('Thank You! Will Get In Touch Shortly');
      }, delayInMilliseconds);

    document.getElementById("contactForm").reset();
  }
