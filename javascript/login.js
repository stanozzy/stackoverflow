function swapFunction(){
    
    var x = document.getElementById("register-form");
    var y = document.getElementById("login-form")
    if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none"    
    }
    else {
        x.style.display = "none";
        y.style.display = "block"
    }
    
}