const firebaseConfig = {
    apiKey: "AIzaSyCRoFMgwt9Mlp0XlOy-o-6zoRqOzjTqDjA",
    authDomain: "practicefirebase-c5f15.firebaseapp.com",
    databaseURL: "https://practicefirebase-c5f15-default-rtdb.firebaseio.com",
    projectId: "practicefirebase-c5f15",
    storageBucket: "practicefirebase-c5f15.appspot.com",
    messagingSenderId: "154294931245",
    appId: "1:154294931245:web:5774ef09abb15af3368da4"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user");

function logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}