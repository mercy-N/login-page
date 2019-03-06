var err = document.getElementById("error");
document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
var name = document.getElementById("username").value;
var pass = document.getElementById("password").value;
var submit = document.getElementById("submit");
if (name.length<5) {
    err.innerText = "* Username too short";
    err.style.display ="";
    err.style.color="red";
    err.style.fontSize="5px";
} else {
    if (pass == name) {
        err.innerText = "* Password and username can't be the same";
        err.style.display="";
        err.style.color="red";
        err.style.fontsize="5px";
    } else {
        alert("Welcome")
    }
}
});