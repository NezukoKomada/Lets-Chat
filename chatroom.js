const firebaseConfig = {
    apiKey: "AIzaSyCRoFMgwt9Mlp0XlOy-o-6zoRqOzjTqDjA",
    authDomain: "practicefirebase-c5f15.firebaseapp.com",
    databaseURL: "https://practicefirebase-c5f15-default-rtdb.firebaseio.com",
    projectId: "practicefirebase-c5f15",
    storageBucket: "practicefirebase-c5f15.appspot.com",
    messagingSenderId: "154294931245",
    appId: "1:154294931245:web:5774ef09abb15af3368da4"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user");
document.getElementById("username").innerHTML="Welcome " + user_name + "!";


function getData() {
    document.getElementById("output").innerHTML = "";
    firebase.database().ref("/").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("ROOM NAME - " + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
});
});
}
getData();
function logout(){
    localStorage.removeItem("user");
    window.location="index.html";
}
function addRoom(){
    room_name = document.getElementById("roomname").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name" 
    });
    localStorage.setItem("room_name", room_name);
    window.location = "chatpage.html";
}
function redirectToRoomName (name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chatpage.html";
}