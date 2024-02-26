function addUser(){
    var user= document.getElementById("username").value;
    localStorage.setItem("user", user);
    window.location="chatroom.html";
}