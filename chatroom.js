const firebaseConfig = {
    apiKey: "AIzaSyAr6NhJrN7AKZlmOkT4oCtnzcMxEJ6BQoQ",
    authDomain: "let-s-chat-16cd7.firebaseapp.com",
    databaseURL: "https://let-s-chat-16cd7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "let-s-chat-16cd7",
    storageBucket: "let-s-chat-16cd7.appspot.com",
    messagingSenderId: "78136640030",
    appId: "1:78136640030:web:3522f81093c8e5a694a40f"
};
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   
   //End code
   });
});
}
function logout(){
    localStorage.removeItem("user");
    window.location="index.html";
}